<PolkaContainer>

# Display Window

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

Vulkan Backend is cross-compatible and has support in Linux/Widnows, on AMD, Intel, NVidia etc.
> Apple stays out, and I hate this thing about it, it doesn't support Vulkan, and has speicifc
> backend in Metal. Though `gfx-hal` has `metal` backend as well.

To work with `gfx-hal` we need to create an instance of a specific Backend which can be controlled using Rust Feature Configurations.

```rs.false
#[cfg(feature = "dx12")]
use gfx_backend_dx12 as back;
#[cfg(feature = "metal")]
use gfx_backend_metal as back;
#[cfg(feature = "vulkan")]
use gfx_backend_vulkan as back;
```


## Creating Window instance
Now let's come back to our code. In real world, to draw anything we need a canvas, right. Similary, in
Graphics to draw anything, we need a OS Window. Later to bind OS Window with GPU draw calls, we will be
needing a `surface` instance. Creation of Window in Rust is done using `winit` library, which again is
cross-platform. It requires two major steps to display a blank window:

* Window Dimensions
* Event Loop, that will help us to know when to redraw, w.r.t CPU and GPU capabilities
  * We will discuss this on some other thread.

## Instance

Vulkan instance is the starting point to work with Vulkan. A Vulkan instance actually takes the name
of Application, and provides us with various APIs, specially to `enumerate_devices`.

```rs.false
// create(application_name, application_version);
let instance = back::Instance::create("Backend Instance", 1)
  .expect("Failed to create an instance!");
```

## Surface

Vulkan requires a canvas or `surface` to draw things into and a `surface` can only exist inside
a OS App Window. Usually we will be using a 3rd-party module to create OS specific Window instances,
like `winit`, and thw window instance to create a `surface`.

```rs.false
// `wb` is `winit` window_builder.
let window = wb.build(event_loop).unwrap();

// Create the Surface:
let surface = unsafe {
  instance
    .create_surface(&window)
    .expect("Failed to create a surface!")
};****
```

</PolkaContainer>
