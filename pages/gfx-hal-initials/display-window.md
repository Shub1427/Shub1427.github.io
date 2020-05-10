import { halArchiveRecord } from '@constants/gfx-hal-archive-list';

export const record = halArchiveRecord['display-window'];

<PolkaContainer>

<H1 updatedAt={record.updatedAt} wordCount={520}>
  {record.title}
</H1>

Vulkan is a very low-level spec, which intends to keep as less overhead of code as it can.
`gfx-hal` is a library which closely resembles the Vulkan specs (not entirely though), to provide
the developers with clean APIs, that are very similar to Vulkan specs. Also, `gfx-hal` provides
multiple graphics backends to make our code cross-platform compatible.

_Code for this Note, can be found [here](https://github.com/Shub1427/rustschool/blob/master/gui/gfx-rs/src/001-show_window/main.rs)
Parts of the code would be referenced here, to make things clear._

## Vulkan Instance and Surface
<Image alt="Vulkan Flow Image" src="https://user-images.githubusercontent.com/11786283/77244041-e4bf5680-6c36-11ea-96a1-2be7bd71ccbd.png" placeholder="https://user-images.githubusercontent.com/11786283/80305144-bce48500-87d8-11ea-9832-4baaaf8ce41f.png" />

This Tutorial is inspired from [LunarG Vulkan Tutorial](https://vulkan.lunarg.com/doc/sdk/1.2.131.2/linux/tutorial/html/index.html),
which is written in `C++`. I am trying to learn `Rust` and converting that tutorial into `Rust`,
using `gfx-hal` library, which is a wrapper over Vulkan Specs.

* Application: is what we will build using `gfx-hal`
* Loader: here refers to `gfx-hal` and `gfx-backend-vulkan` libraries. An isntance of
  `gfx-backend-vulkan` inititalizes a Loader. Creating an instance, intializes the loader.
* Layers: is something advanced, and am not sure when or if I will talk about it at-all.

## Backend
<Image alt="GFX Hal Backends" src="https://user-images.githubusercontent.com/11786283/77244047-03255200-6c37-11ea-885d-2d8b981bb8a8.png" placeholder="https://user-images.githubusercontent.com/11786283/80305177-eb626000-87d8-11ea-9d40-0a632affdd2f.png" />

Backends are specific to what GPU u have and what specs it supports.

Vulkan Backend is cross-compatible and has support in Linux/Windows, on AMD, Intel, NVidia etc.
> Apple stays out, and I hate this thing about it, it doesn't support Vulkan, and has specific
> graphics backend called `Metal`. Though `gfx-hal` has `metal` backend as well and since I am using
> Mac (Yeah! Now don't come and bash me, can't use my Linux system a.t.m.), it would be a good
> way to know the support of `gfx-hal` for MacOS as well.

<br />
<br />

***Moving forward***, we now need to import various `backends` in our code to have cross-compatibility.
`gfx-hal` needs an instance of a specific Backend which can be controlled
using Rust Feature Configurations.

```rs
#[cfg(feature = "dx12")]
use gfx_backend_dx12 as back;
#[cfg(feature = "metal")]
use gfx_backend_metal as back;
#[cfg(feature = "vulkan")]
use gfx_backend_vulkan as back;
```

***

> From here on, we will deep dive into Rust Programming. By the time we are done coding, we would be
> able to show a blank window on our Monitors.

## Define Backend Struct:

I am trying to keep my code, matching to how people write for real life projects. Thus, we won't be
just writing down lines of code all inside `main` function, instead we will try to manage our code,
as much as we can from the beginning (not overdoing to much).

So first thing we need is to manage Window Instance and Vulkan Backend Surface Objects (what these things
are, is defined in next sections).

```rs
struct BackendState<B: Backend> {
    // Vulkan backend instance object
    instance: Option<B::Instance>,
    // Vulkan backend surface object
    surface: ManuallyDrop<B::Surface>,
    // `winit` Window object.
    window: window::Window,
}

impl<B: Backend> Drop for BackendState<B> {
    fn drop(&mut self) {
        if let Some(instance) = &self.instance {
            unsafe {
                let surface = ManuallyDrop::into_inner(ptr::read(&self.surface));
                instance.destroy_surface(surface);
            }
        }
    }
}
```

Since `gfx-hal` does not manage every peace of Memory, we need to define the Vulkan `surface`
as manually managed, using `ManuallyDrop` struc. Also, we need to drop `surface` once done with it,
i.e. when `BackendState` struct gets dropped.

## Creating Window instance
Now let's come back to our code. In real world, to draw anything we need a canvas, right. Similary, in
Graphics to draw anything, we need a OS Window. Later to bind OS Window with GPU draw calls, we will be
needing a `surface` instance. Creation of Window in Rust is done using `winit` library, which again is
cross-platform. It requires two major steps to display a blank window:

* Window Dimensions
* Event Loop, that will help us to know when to redraw, w.r.t CPU and GPU capabilities, and listen to user events. _We will discuss this on some other thread, in detail._


## Instance

Vulkan instance is the starting point to work with Vulkan. A Vulkan instance actually takes the name
of Application, and provides us with various APIs, specially to `enumerate_devices`.

```rs
// create(application_name, application_version);
let instance = back::Instance::create("Backend Instance", 1)
  .expect("Failed to create an instance!");
```

## Surface

Vulkan requires a canvas or `surface` to draw things into and a `surface` can only exist inside
a OS App Window. Usually we will be using a 3rd-party module to create OS specific Window instances,
like `winit`, and thw window instance to create a `surface`.

```rs
// `wb` is `winit` window_builder.
let window = wb.build(event_loop).unwrap();

// Create the Surface:
let surface = unsafe {
  instance
    .create_surface(&window)
    .expect("Failed to create a surface!")
};
```

</PolkaContainer>
