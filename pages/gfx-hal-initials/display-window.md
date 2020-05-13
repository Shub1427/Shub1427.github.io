import { halArchiveRecord } from '@constants/gfx-hal-archive-list';

export const record = halArchiveRecord['display-window'];

<PolkaContainer
  pageTitle={record.title}
  pageDescription={record.description}
  keywords={['Vulkan', 'Basics', 'Fundamental', 'Beginner', 'Surface', 'Window', 'gfx-hal']}
  publishDate={record.createdAt}
  ogImage={record.ogImage}
>

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
* Loader: here refers to `gfx-hal` and `gfx-backend-vulkan` libraries. An instance of
  `gfx-backend-vulkan` initializes a Loader. Creating an instance, initializes the loader.
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
as manually managed, using `ManuallyDrop` struct. Also, we need to drop `surface` once done with it,
i.e. when `BackendState` struct gets dropped.

## Creating OS Window
Now let's come back to our code. In real world, to draw
anything we need a canvas, right. Similarly, in
Computer Graphics to draw anything, we need an OS Window.
Later we will be binding this OS Window with GPU `surface`
instance that will do the actual drawing. Creating an OS Window
in Rust is done using `winit` library, which again is
cross-platform. It requires two major steps to display a blank window:

* Window Dimensions
* Event Loop, that will help us to know when to redraw, w.r.t
  CPU and GPU capabilities (since we are working with Vulkan,
  it's all GPU capabilities), and listen to user events.

<Blockquote type="warn">
  How or When re-renders happen, is all very low level details,
  which I don't have much context on right now.
</Blockquote>

```rs
const APP_NAME: &'static str = "Show Window";
const WINDOW_SIZE: [u32; 2] = [1024, 768];
...
// main function will start instantiation of static instances.
fn main() {
  ...
  let ev_loop = event_loop::EventLoop::new();
  let (window_builder, extent) = build_window(&ev_loop);
  ...
}
```

where, `build_window()` is doing the main job, of instantiating
the main OS window, with some logical window size, scaled to
match the actual physical size.

```rs
fn build_window(
    ev_loop: &event_loop::EventLoop<()>
) -> (window::WindowBuilder, hal_window::Extent2D) {
    // We need to first get Logical and Physical Size of the screen
    let (logical_window_size, physical_window_size) = {
        let dpi = ev_loop.primary_monitor().scale_factor();
        let logical: LogicalSize<u32> = WINDOW_SIZE.into();
        let physical: PhysicalSize<u32> = logical.to_physical(dpi);

        (logical, physical)
    };

    let window_builder = window::WindowBuilder::new()
        .with_title(APP_NAME)
        .with_inner_size(logical_window_size)
        .with_title("colour-uniform".to_string());

    (
        window_builder,
        hal_window::Extent2D {
            width: physical_window_size.width,
            height: physical_window_size.height,
        },
    )
}
```

Everything in the above code is quite simple and
self-explanatory. The only thing that is confusing is, why
do we have two device sizes. Best explanation can be found
[here in `winit` docs](https://docs.rs/winit/0.22.1/winit/dpi/index.html), but in short they are just two different size
instances. One (the `LogicalSize`) is Human understandable,
i.e., what you ask for is what you get. The other one
(`PhysicalDevice`) is something specific to OS and hardware,
where each Computer System might have a different Screen
display ratio (also known as DPI), defining how a 720 sized
Logical window we defined will actually be presented on real
Screen, calculating the pixel ratio per inch and stuff.

> We still haven't built our `winit` Window, yet. We have just
> instantiated `winit`'s WindowBuilder, which uses Builder
> Pattern to generate `Window`, once `build` method is called.
>


## Instance & Surface (Instantiating our `BackendState`)

Vulkan instance is the starting point to work with Vulkan.
A Vulkan instance actually takes the name of Application,
and provides us with various APIs, specially to
`enumerate_devices`.

We will start by wrapping all these instantiations into one
function call.

<Diff lang="rs" addedLineNumbers={[6]} removedLineNumbers={[]} hideLines>{`// main.rs
...
fn main() {
  ...
  let (window_builder, extent) = build_window(&ev_loop, "Show Window".into());
  let backend = create_backend(window_builder, &ev_loop, extent);
  ...
}
`}</Diff>

We first need to get our `winit` `Window` instance, that we
left to do in last section, then we will move forward in
generating `gfx_hal`'s backend `instance` and using that
`instance` we will derive our `surface` and `devices`,
used to draw on window and get GPU details, respectively.

```rs
fn create_backend(
    wb: window::WindowBuilder,
    ev_loop: &event_loop::EventLoop<()>,
    extent: hal_window::Extent2D
) -> BackendState<back::Backend> {
    let window = wb.build(ev_loop).unwrap();

    let instance = back::Instance::create(APP_NAME, 1)
        .expect("Failed to create an instance!");
    let surface = unsafe {
        instance
            .create_surface(&window)
            .expect("Failed to create a surface!")
    };

    BackendState {
        instance: Some(instance),
        surface: ManuallyDrop::new(surface),
        window,
    }
}
```

> We will discuss about `extent` in other sections,
> when we will start working with GPU device instances, i.e.
> when we will work with `adapters`.

First thing to note, we need to create `window` instance, which
is nothing but `winit`'s Window instance, built by the
`WindowBuilder` we instantiated earlier. This instance will
be used by `surface` to bind them together.

`instance` is created directly from static functions from
***gfx_hal*** `Instance`. `create` function takes an *APP_NAME*
and a *VERSION* number for the app, whose functionality is
currently unknown to me.

`instance` is used to create `surface`. Vulkan requires a
canvas or `surface` to draw things into and a `surface` can
only exist inside a OS App Window. Usually we use a 3rd-party
module to create OS specific Window instances,
like created one from `winit`.

<Blockquote type="warn">
  Many stuff here has not been described in detail. We will
  bw discussing and explaining stuff in more detail later,
  or update this Doc again later, when I gain more
  knowledge.
</Blockquote>


## Bonus Round (Event Loop)

Ok! We have already created `ev_loop` instance for `winit`,
but we haven't really discussed about it properly. As the
name suggests, it is the core of `winit`, used for starting the
App and listening to User Events.
We will discuss on Event Handling done inside the `run` loop,
where we pass a [Closure](https://doc.rust-lang.org/book/ch13-01-closures.html), which will handle various user events,
like *Keyboard*, *Joystick*, *Mouse* events etc.

<Blockquote type="warn">
  Do remember that a <Link href="https://doc.rust-lang.org/book/ch13-01-closures.html" target="_blank" rel="noopener noreferrer">Closure</Link>&nbsp;
  will completely get the ownership
  of any variables that are passed to it.

  Even the `ev_loop` instance we created, will lose it's
  ownership after `ev_loop.run` call. This is the reason
  everything we have done till now is done inside `main`
  function to keep instance ownerships temporary.
</Blockquote>

```rs
fn main() {
    // Previous instantiations, before starting the
    // event_loop
    ...
    ev_loop.run(move |event, _, control_flow| {
        *control_flow = event_loop::ControlFlow::Wait;
        match event {
            event::Event::WindowEvent { event, .. } =>
            {
                #[allow(unused_variables)]
                match event {
                    event::WindowEvent::CloseRequested => {
                        *control_flow = event_loop::ControlFlow::Exit
                    }
                    event::WindowEvent::Resized(dims) => {
                        debug!("RESIZE EVENT");
                    }
                    event::WindowEvent::ScaleFactorChanged { new_inner_size, .. } => {
                        // Will get called whenever the screen scale factor (DPI) changes,
                        // like when user move the Window from one less DPI monitor
                        // to other high scaled DPI Monitor.
                        debug!("Scale Factor Change");
                    }
                    _ => (),
                }
            }
            event::Event::MainEventsCleared => {
                debug!("MainEventsCleared");
                backend.window.request_redraw();
            },
            event::Event::RedrawRequested(_) => {
                debug!("RedrawRequested");
            },
            event::Event::RedrawEventsCleared => {
                debug!("RedrawEventsCleared");
            }
            _ => (),
        }
    });
    ...
}
```

First things first, `ev_loop.run(|| => {})` starts our event
loop, that actually takes a [closure](https://doc.rust-lang.org/book/ch13-01-closures.html),
thus we need to be a bit careful in using it. This was one of the reasons
we instantiated everything inside main. Later on we will
do things inside `struct` `impl`s, but in this section, we have
sone most of the work inside `main`.

Details on event listeners:

* `CloseRequested` is used for listening close button click.
  Without this our Window won't Shutdown gracefully, we would
  had to `SIGKILL` our app. We can also listen to Key presses, like `ESC`
  to close the window, but we will cover that later.
* `Resized` and `ScaleFactorChanged` are called when window is resized and
  when window's DPI changes (like when we move our window from a low DPI
  Monitor to High DPI) respectively.
* `MainEventsCleared`: If you are from **Android** background
  it resembles the `onMeasure` call, or if from **ReactJS**
  world it resembles the `shouldComponentUpdate` call. What I
  mean is, this event is called just before any redraw,
  and can be used to do calculations before drawing on window.
  Also keep a note that if you want to redraw you need
  to call this `window.request_redraw()`, like we `return true`
  from `shouldComponentUpdate` to do a `render`.
* `RedrawRequested`: this resembles **Android's** `onDraw`
  call and in **ReactJS** resembles `render` call. That means
  this call is the place where we will have to handle all our
  canvas drawings, in `gfx_hal` all our `surface` drawings.
* `RedrawEventsCleared`: this resembles **ReactJS**
  `componentDidUpdate` call, as this event gets triggered on
  each change after a redraw has happened. One thing to note,
  *if there are no `RedrawRequested` events, it is emitted*
  *immediately after `MainEventsCleared`.*



```log
2020-05-11T06:59:42.987942+05:30 DEBUG show_window - MainEventsCleared
2020-05-11T06:59:42.988007+05:30 DEBUG show_window - RedrawRequested
2020-05-11T06:59:42.988033+05:30 DEBUG show_window - RedrawEventsCleared
```

***

</PolkaContainer>
