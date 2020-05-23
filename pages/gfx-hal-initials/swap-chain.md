import { halArchiveRecord } from '@constants/gfx-hal-archive-list';
import { archiveRecord } from '@constants/archive-list';
import { rustArchiveRecord } from '@constants/rust-reference-list';

export const record = halArchiveRecord['swap-chain'];

<PolkaContainer
  pageTitle={record.title}
  pageDescription={record.description}
  keywords={['Vulkan', 'Basics', 'Fundamental', 'Beginner', 'gfx-hal']}
  publishDate={record.createdAt}
  ogImage={record.ogImage}
>

<H1 updatedAt={record.updatedAt}>
  {record.title}
</H1>

Before diving in, let's first understand what Double Buffering is.
A great video on [Double Buffering](https://www.youtube.com/watch?v=tfzCcN2aIhI&feature=emb_logo),
to get a very basic understanding.

As you can see in the video, double buffering is nothing but
a way to cache images in a buffer. One of the Buffer is used
to draw on the Window Surface, while other acts as a hidden
canvas to draw the next frame and keep it in cache, so as to
get a better performance and framerate.

<Image alt="Swapchain to Surface to Window Draw" src="https://user-images.githubusercontent.com/11786283/82720485-ae9f6100-9cd1-11ea-8e8a-6689645f9706.png" placeholder="https://user-images.githubusercontent.com/11786283/82720437-51a3ab00-9cd1-11ea-8623-218277d9c519.png" />

Swapchain is very similar. It basically can be used to achieve
double buffering. In simple words, Swapchain is a collection
Images (Stored in Image Buffers), that can be used to draw frames and present
them on screen when needed.

> **Quoting directly from [falseidolfactory.com](https://www.falseidolfactory.com/2020/04/01/intro-to-gfx-hal-part-1-drawing-a-triangle.html)**
>
> *Swapchain is a chain of images that we can render onto and then*
> *present to our window. While we’re showing one of them*
> *on screen, we can render to a different one. Then once*
> *we’re done rendering, we can **swap** them.*
>
> *This is one of the few places where `gfx` departs*
> *significantly from the **Vulkan API**. In Vulkan, you create*
> *and manage the `swapchain` yourself. In `gfx`, the surface*
> *mostly does it for you. You can read more about the*
> *decision behind that [here](https://gfx-rs.github.io/2019/10/01/update.html#new-swapchain-model).*

Thus, Swapchain in `gfx-rs` can be described in simple words:

* Get Swapchain instance from already created `device`
  instance and `swap` config.
* Attach/Link this swapchain instance to `surface`, so as
  to draw images from it.
* Maintain a swapchain state, to get details on `window`
  getting invalidate (dirty, like when it's resized or made
  fullscreen etc.). This `state` which changes on each
  invalidation of the `window`, should re-configure `swap`
  config, and re-create swapchain for that new `surface`.

<Image alt="gfx-hal Swapchain flow" src="https://user-images.githubusercontent.com/11786283/82650223-038e9900-9c38-11ea-8ae4-c6b464ac7007.png" placeholder="https://user-images.githubusercontent.com/11786283/82650444-56685080-9c38-11ea-960d-770db9795773.png" />

## Let's Code

First thing to note, `device` state that we created in earlier
tutorials, is a state that needs to be shared across
different states, like creating Swapchain requires an instance
of `device`. From now on we will be using `Rc<RefCell<T>>`
to share `device` state across various structs.

_Details on `Rc<RefCell<T>>` can be read_
_in <Link href={rustArchiveRecord['rust-smart-pointers'].link}>this guide</Link>_

> I am not pointing few changes that I have made in various
> structs previously created. You can refer to the
> [full code](https://github.com/Shub1427/rustschool/blob/master/gui/draw-cube/src/004-swap_chain/main.rs)
> for better understanding on the changes.
>
> To point out few changes, `DeviceState` &
> `FrameBufferState` have been modified.

We will first define our struct `SwapchainState`,
which will maintain Swapchain state and provide API for
it's creation.

```rs
struct SwapchainState<B: Backend> {
    swapchain: Option<B::Swapchain>,
    backbuffer: Option<Vec<B::Image>>,
    deviceState: Rc<RefCell<DeviceState<B>>>,
    extent: image::Extent,
    format: hal_format::Format,
}

impl<B: Backend> SwapchainState<B> {
    fn new(backendState: &mut BackendState<B>, deviceState: Rc<RefCell<DeviceState<B>>>) -> Self {
        // Get Surface Capabilities
        let caps = backendState
            .surface
            .capabilities(&deviceState.borrow().physical_device);

        let supported_formats = backendState
            .surface
            .supported_formats(&deviceState.borrow().physical_device);
        // We need a supported format for the OS Window, so that Images drawn on
        // Swapchain are of that same format.
        let format = supported_formats.map_or(hal_format::Format::Rgba8Srgb, |formats| {
            formats
                .iter()
                .find(|format| format.base_format().1 == hal_format::ChannelType::Srgb)
                .map(|format| *format)
                .unwrap_or(formats[0])
        });

        let swap_config = hal_window::SwapchainConfig::from_caps(&caps, format, backendState.extent);
        let extent = swap_config.extent.to_extent();
        let (swapchain, backbuffer) = unsafe {
            deviceState
                .borrow()
                .device
                .create_swapchain(&mut backendState.surface, swap_config, None)
                .expect("Can't create swapchain")
        };

        SwapchainState {
            swapchain: Some(swapchain),
            backbuffer: Some(backbuffer),
            deviceState,
            extent,
            format,
        }
    }
}

impl<B: Backend> Drop for SwapchainState<B> {
    fn drop(&mut self) {
        unsafe {
            self.deviceState
                .borrow()
                .device
                .destroy_swapchain(self.swapchain.take().unwrap());
        }
    }
}
```

Let's Breakdown the above code in 3 sections:

* Structure
* Creation
* Destruction

### Structure

We have `swapchain` instance, which is the actual Swapchain
instance, which will maintain actual Image Buffers in itself.

`backbuffer` is Image Buffer, representing the 2D Image
that we would be drawing. Since, we are drawing a 3D cube,
we would also be needing 3<sup>rd</sup> dimension, Z-Buffer
also known as Depth Buffer, which we will discuss later in
coming sections.

`deviceState` is required, because we would be re-creating
and thus destroy old `swapchain` in SwapchainState,
on every window dimension change.

`extent` and `format` would be later on used in Render Pass.

### Creation

Creating a `swapchain` is a three step process:

* We need to first get `surface` capabilities. Details on
  each property in [SurfaceCapabilities](https://docs.rs/gfx-hal/0.5.0/gfx_hal/window/struct.SurfaceCapabilities.html)
* Next we need to figure out what kind of Image Format
  our `surface` supports, so that Swapchain draws only that
  format image.
* Next we need to create `swap_config`, from `caps`, `format`
  (already discussed), and window size extent. This
  `Extent2D` reference should be always up-to-date
  respective to the current Window size. Thus, we will be
  updating our `window` event_loop, as shown below.

```rs
...
event::WindowEvent::Resized(dims) => {
    backend.update_extent(hal_window::Extent2D {
        width: dims.width,
        height: dims.height,
    });
}
event::WindowEvent::ScaleFactorChanged { new_inner_size, .. } => {
    backend.update_extent(hal_window::Extent2D {
        width: new_inner_size.width,
        height: new_inner_size.height,
    });
}
...
```

* We would be keeping reference to `format` and `extent`
  (`image::Extent`) for later reference, for creating images.
* `.create_swapchain()` is `unsafe` code, thus it is created
  inside `unsafe` block. It's quite clear that we need,
  `device`, `surface` and `swap_config` to create `swapchain`
  and link it to `surface`. We also get `backbuffer`, which
  relates to the collection of 2D Image Buffers, where
  we need to save our images and use it with `swapchain` later.

### Destruction

Normally we don't need `Drop` trait that often in any Rust
code, but here the situation is a bit different. Problem is
if we drop `SwapchainState`, it will drop `swapchain`
instance with it, but will not clear the state of `surface`
where the `swapchain` was previously linked to, causing
memory leaks. So, it's better to first `destroy_swapchain`
already linked to `surface` using `device`.

Once that is done, `swapchain` will automatically get
dropped.

> For cases like this, where an instance needs to pass it's
> ownership to someone else, like here to `device` when
> `destroy_swapchain` was called, it's better to keep
> those instances inside `Option` enum, because it's easy
> to swap the memory and change the ownership, without
> causing Rust Compiler to freak out. This is the reason
> we have used `Option<B::Swapchain>` instead of directly
> owning `Swapchain`, as we needed to swap swapchain
> ownership at runtime, while destroying `SwapchainState`.


Details on `Option.map_or` can be found [here](https://doc.rust-lang.org/std/option/enum.Option.html#method.map_or).

## Left out things

Swapchain is easy to understand, but is a little complicated
to use in real world. For eg., On each window `resize` or
change in Window size/resolution,
`swapchain` should be re-created. We haven't properly
discussed such cases yet.
I want to talk about that in Render Passes, as
it makes more sense to talk this over there.

***

You can find the full code for this Doc,
here [004-swap_chain](https://github.com/Shub1427/rustschool/blob/master/gui/draw-cube/src/004-swap_chain/main.rs)


</PolkaContainer>
