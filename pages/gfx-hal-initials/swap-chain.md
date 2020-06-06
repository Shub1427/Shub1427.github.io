import { halArchiveRecord, size } from '@constants/gfx-hal-archive-list';
import { archiveRecord } from '@constants/archive-list';
import { rustArchiveRecord } from '@constants/rust-reference-list';

export const record = halArchiveRecord['swap-chain'];

export const prevRecord = halArchiveRecord['physical-logical-devices'];

<PolkaContainer
  pageTitle={record.title}
  pageTitleString={record.titleString}
  pageDescription={record.description}
  keywords={['Vulkan', 'Basics', 'Fundamental', 'Beginner', 'gfx-hal']}
  publishDate={record.createdAt}
  ogImage={record.ogImage}
>

<H1 updatedAt={record.updatedAt}>
  T-{`${size - 3}`}: {record.title}
</H1>

Before diving in, let's first understand what Double Buffering is.
A great video on [Double Buffering](https://www.youtube.com/watch?v=tfzCcN2aIhI&feature=emb_logo)
to get a fundamental understanding.

As you can see in the video, double buffering is nothing but
a way to cache images in a buffer. One of the Buffer is used
to draw on the Window Surface, while other acts as a hidden
canvas to draw the next frame and keep it in the cache, to
get better performance and framerate.

<Image alt="Swapchain to Surface to Window Draw" src="https://user-images.githubusercontent.com/11786283/82720485-ae9f6100-9cd1-11ea-8e8a-6689645f9706.png" placeholder="https://user-images.githubusercontent.com/11786283/82720437-51a3ab00-9cd1-11ea-8623-218277d9c519.png" />

Swapchain is very similar. It can be used to achieve
double buffering. In simple words, Swapchain is a collection
Images (Stored in Image Buffers), that can be used to draw
frames and present them on a screen when needed.

> **Quoting directly from [falseidolfactory.com](https://www.falseidolfactory.com/2020/04/01/intro-to-gfx-hal-part-1-drawing-a-triangle.html)**
>
> *Swapchain is a chain of images that we can render onto and then*
> *present to our window. While we’re showing one of them*
> *on screen, we can render it to a different one. Then once*
> *we’re done rendering, we can **swap** them.*
>
> *This is one of the few places where `gfx` departs*
> *significantly from the **Vulkan API**. In Vulkan, you create*
> *and manage the `swapchain` yourself. In `gfx`, the surface*
> *mostly does it for you. You can read more about the*
> *decision behind that [here](https://gfx-rs.github.io/2019/10/01/update.html#new-swapchain-model).*

The above decision, to handle `swapchain` internally in
gfx-hal, was made to hide logical improvements done by gfx-hal
to improve performance in MacOS `Metal` and DirectX 12 backends. `Metal`
backend doesn't quite work well with Vulkan Swapchain API;
thus, the team decided to manage the logic internally to
provide a performant cross-platform GPU Driver framework.

Discussion on the above issue can be [read here](https://github.com/gfx-rs/gfx/issues/2863).

Thus, Swapchain in `gfx-rs` can be described in simple words:

* Don't do anything, just let the framework handle the
  Swapchain management
* To support the above statement, we need to provide a few
  config details to gfx-hal `surface` instance, so that it
  can create the Swapchain instance and manage it internally.

The following diagram illustrates how Swapchain is created
in Vulkan, and how we need to bind it to `surface` instance,
to make it work. *(We do not have to worry about all
these details, in `gfx-hal` though)*

<Image alt="gfx-hal Swapchain flow" src="https://user-images.githubusercontent.com/11786283/82650223-038e9900-9c38-11ea-8ae4-c6b464ac7007.png" placeholder="https://user-images.githubusercontent.com/11786283/82650444-56685080-9c38-11ea-960d-770db9795773.png" />

## Let's Code

First, we will discuss on how swapchain is created in Vulkan:

* Querying details of Swapchain support, which includes:
  * `surface` capabilities, like in which mode image would
    be presented (Presentation Mode), what is image bounds
    to draw on the surface, etc.
    Details - [SurfaceCapabilities](https://docs.rs/gfx-hal/0.5.0/gfx_hal/window/struct.SurfaceCapabilities.html)
  * Supported image format by the `surface` on which we will draw
  * Window Dimensions (Viewport) or Window Extent
  * All of the above to create Swapchain Config.
* Once Swapchain Config is created, we can use it
  to create our Swapchain Instance
* Swapchain will later provide us with inner Image Buffers
  to be used during the render phase.

In `gfx-hal`, point-2 i.e., the creation of Swapchain is not
something a developer needs to worry about. We need to use
the Swapchain support details to `configure_swapchain` using
the `surface` instance.

### Let's Breakdown the above code in 3 sections:

* Configuration
* Re-Configuration
* Destruction

#### Configuration

```rs
struct Renderer<B: Backend> {
    ...
    // Collection Swapchain Image, Empty buffer initially
    frame_count: usize,
    // Desired Format / Selected Format
    format: hal_format::Format,
}

impl<B: Backend> Renderer<B> {
    fn new(instance: B::Instance, surface: B::Surface) -> Self {
        ...

        // Configure Swapchain
        let (frame_count, format) = {
            let caps = surface.capabilities(&adapter.physical_device);

            let supported_formats = surface.supported_formats(&adapter.physical_device);
            // We need a supported format for the OS Window, so that Images drawn on
            // Swapchain are of that same format.
            let format = supported_formats.map_or(hal_format::Format::Rgba8Srgb, |formats| {
                formats
                    .iter()
                    .find(|format| format.base_format().1 == hal_format::ChannelType::Srgb)
                    .map(|format| *format)
                    .unwrap_or(formats[0])
            });

            let swap_config = hal_window::SwapchainConfig::from_caps(&caps, format, init_extent);
            let image_extent = swap_config.extent.to_extent();

            unsafe {
                surface
                    .configure_swapchain(&device, swap_config)
                    .expect("Can't configure swapchain");
            };

            (3, format)
        };

        Renderer {
            ...
            frame_count,
            format,
        }
    }
}
...
```

As discussed before, first, we need to query details for
Swapchain support. Once we have the details, we will use
them to configure our swapchain using `gfx-hal` `surface`
instance.

We will keep a reference to `format` for later use, especially
for re-configuring the swapchain when the window surface
becomes invalidated, like on window resize and other related
events.

`frame_count` is the number of frames we would be parallelly
working with.
*I am not exactly sure right now, why `3` is
the frame count used in most of the `gfx-hal` examples.
My guess is, it's because it's the number of `image_count`s
any GPU currently supports for buffering.*

#### Re-Configuration

Some changes to be done to our code, before moving forward

<Diff lang="rs" addedLineNumbers={[6,23,26]} removedLineNumbers={[15,22,25]} hideLines>{`
impl<B: Backend> Renderer<B> {
    fn new(
        instance: B::Instance,
        mut surface: B::Surface,
        init_extent: hal_window::Extent2D,
    ) -> Self {
        ...
    }
}
...
fn create_backend(
    wb: window::WindowBuilder,
    ev_loop: &event_loop::EventLoop<()>,
    extent: hal_window::Extent2D,
) -> (back::Instance, back::Surface, window::Window) {
    ...
}
...
fn main() {
    let (window_builder, extent) = build_window(&ev_loop);
    let (instance, surface, window) = create_backend(window_builder, &ev_loop, extent);
    let (instance, surface, window) = create_backend(window_builder, &ev_loop);
    ...
    let renderer = Renderer::<back::Backend>::new(instance, surface);
    let mut renderer = Renderer::<back::Backend>::new(instance, surface, extent);
    ...
}
`}</Diff>

Changes from above include:

* Window Dimensions (as `Extent2D`) to be used in our `Renderer`
  struct. This extent will help us to create our Surface
  Viewport when the `Renderer` instance is created for the
  first time.
* Make our `renderer` instance mutable.

Re-Configuration is an important part of making Swapchain work.
It is required to notify the swapchain that the window
is invalidated, and thus every image that it contains should
be invalidated and re-created.

```rs
struct Renderer<B: Backend> {
    window_dims: hal_window::Extent2D,
    viewport: Viewport,
    ...
}

impl<B: Backend> Renderer<B> {
    fn new(
        ...
    ) -> Self {
        ...
        let viewport = Viewport {
            rect: Rect {
                x: 0,
                y: 0,
                w: init_extent.width as _,
                h: init_extent.height as _,
            },
            depth: 0.0..1.0,
        };

        Renderer {
            window_dims: init_extent,
            viewport,
            ...
        }
    }

    fn set_dims(&mut self, dims: PhysicalSize<u32>) {
        self.window_dims = hal_window::Extent2D {
            width: dims.width,
            height: dims.height,
        };
    }

    fn recreate_swapchain(&mut self) {
        let caps = self.surface.capabilities(&self.adapter.physical_device);
        let swap_config =
            hal_window::SwapchainConfig::from_caps(&caps, self.format, self.window_dims);
        let image_extent = swap_config.extent.to_extent();

        unsafe {
            self.surface
                .configure_swapchain(&self.device, swap_config)
                .expect("Can't create swapchain");
        }

        self.viewport.rect.w = image_extent.width as _;
        self.viewport.rect.h = image_extent.height as _;
    }
}

fn main() -> Result<(), &'static str> {
    ...
    ev_loop.run(move |event, _, control_flow| {
        ...
        event::WindowEvent::Resized(dims) => {
            // We need to re-configure our swapchain
            // with new window dimensions on every re-size
            renderer.set_dims(dims);
            renderer.recreate_swapchain();
        }
        ...
    }
}
```

We are re-configuring our swapchain on every `resize` event.

> Similarly, we should also re-configure for other window
> events that will invalidate the Vulkan `surface` like
> winit's `ScaleFactorChanged`, which we will skip for now.

The `viewport` will be used later when we will render our images.

#### Destruction

A part where we need to memory manage our swapchain.
Since we created (configured) `swapchain` using `surface`, we will
have to use `surface` again to destroy it as well, before
our struct `Renderer` gets destroyed.

```rs
impl<B: Backend> Drop for Renderer<B> {
    fn drop(&mut self) {
        unsafe {
            self.surface.unconfigure_swapchain(&self.device);
            ...
        }
    }
}
```

Once that is done, `swapchain` will automatically get
dropped by `surface`, before `surface` itself is dropped.

***

You can find the full code for this Doc,
here [003-swap_chain](https://github.com/Shub1427/rustschool/blob/master/gui/draw-cube/src/003-swap_chain/main.rs)

<MoveOtherPage
  prev={prevRecord.link}
  prevLabel={prevRecord.title}
/>

</PolkaContainer>
