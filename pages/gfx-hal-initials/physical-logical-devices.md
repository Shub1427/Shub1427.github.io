import { halArchiveRecord } from '@constants/gfx-hal-archive-list';

export const record = halArchiveRecord['physical-logical-devices'];

export const prevRecord = halArchiveRecord['display-window'];

<PolkaContainer
  pageTitle={record.title}
  pageDescription={record.description}
  keywords={['Vulkan', 'Basics', 'Fundamental', 'Beginner', 'Physical Device', 'Logical Device', 'gfx-hal']}
  publishDate={record.createdAt}
  ogImage={record.ogImage}
>

<H1 updatedAt={record.updatedAt}>
  {record.title}
</H1>

<Image alt="Get Physical Device from Backend to Logical Devices" src="https://user-images.githubusercontent.com/11786283/82109324-a8016e80-9752-11ea-89ba-677880ada6b1.png" placeholder="https://user-images.githubusercontent.com/11786283/82109811-ac2f8b00-9756-11ea-88db-3cbc70ee1350.png" />


<!-- https://user-images.githubusercontent.com/11786283/77244925-8bf4bb80-6c40-11ea-85f4-1a0f833ce834.png -->

## What is a Device

* **Physical Device** - denotes to actual Hardware device present
  in your Computer. There could be, that has Device details
  as elements. Each item pointing to the GPU hardware you
  have. So, if we have Single NVidia GPU, we will get a
  single item, which we can `open` and later on use as
  _Logical Device_ where command buffers are passed.
* **Logical Device** - Basically it is a representation of
  Physical device, that the application will use
  to compute their logic. In `gfx-hal` to get logical device,
  you need to open `physical_device`.
  (Details discussed at later).

## Physical Device:

### Getting Adapters from Instance

I hope you have already read details on how to get reference
of <Link href={`${prevRecord.link}`}>gfx-hal Instance and it's Surface</Link>. If not, please read it once before continuing.

We would get a list of `adapters` from `instance`, which will
contain details on Physical Devices present on our system.

Before that, we need to create our Structure for Adapter
State.

```rs
struct AdapterState<B: Backend> {
    adapter: Option<Adapter<B>>,
    memory_types: Vec<MemoryType>,
    limits: Limits,
}

impl<B: Backend> AdapterState<B> {
    fn new(adapters: &mut Vec<Adapter<B>>) -> Self {
        // In my system, I have just one GPU Physical adapter, thus
        // will only work with first instance.
        let adapter = adapters.remove(0);

        Self {
            memory_types: adapter.physical_device.memory_properties().memory_types,
            limits: adapter.physical_device.limits(),
            adapter: Some(adapter),
        }
    }
}
```

You can assume `AdapterState` as a state, that maintains Physical Device instance,
and can be later on used to get device details, or get Logical Device instance and more.
_Details on Memory Type and GPU limits, will be discussed later._

We need to add this to `BackendState` as well,
so as to later on use it for other things.

<Diff lang="rs" addedLineNumbers={[4,5,15,20]} removedLineNumbers={[]} hideLines>{`// main.rs
struct BackendState<B: Backend> {
  ...
  // Vulkan backend surface object
  adapterState: AdapterState<B>,
  ...
}
...
fn create_backend(
    wb: window::WindowBuilder,
    ev_loop: &event_loop::EventLoop<()>,
    extent: hal_window::Extent2D,
) -> BackendState<back::Backend> {
    ...
    let mut adapters = instance.enumerate_adapters();
    ...
    BackendState {
        instance: Some(instance),
        surface: ManuallyDrop::new(surface),
        adapterState: AdapterState::new(&mut adapters),
        window,
    }
}
`}</Diff>

As you can see, we need to `enumerate_adapters` to get a list of all available
GpU devices on the system. These device instances could point an Integrated GPU,
Discrete GPU (Could be internal, or external).

### What details does an `Adapter` has

<Blockquote type="warn">
  Following are not a complete list of Adapter properties. They mostly
  consist of all those properties that we have already described earlier.
  We are just discussing them in detail here.
</Blockquote>

```ts
// `adapter.info`: Adapter Info
{
  name: "GeForce GTX 1060 6GB",
  vendor: 4310,
  device: 7114,
  // Enum - { Other = 0, IntegratedGpu = 1, DiscreteGpu = 2, VirtualGpu = 3, Cpu = 4 }
  device_type: DiscreteGpu,
}
```

GPU info is quite clear. Getting info is simple - `adapter.info`. It basically gives us details on GPU Hardware.

```ts
// `adapter.physical_device.limits()`: Physical Device Limits,
{
  max_image_1d_size: 16384,
  max_image_2d_size: 16384,
  max_image_3d_size: 2048,
  max_image_cube_size: 16384,
  max_image_array_layers: 2048,
  max_texel_elements: 268435456,
  // ...and more
}
```

GPU limits is also self explanatory. It gives us a struct containing details on
GPU Memory, Concurrency etc. limits.

```ts
// Memory Types
[
    MemoryType {
        properties: DEVICE_LOCAL,
        heap_index: 0,
    },
    MemoryType {
        properties: CPU_VISIBLE | COHERENT,
        heap_index: 1,
    },
    //...more
]
```

Memory Types are just a collection of GPU supported Memory Details(could be CPU or Local).
It just helps us to figure our what type of memory GPU supports and when to use which,
if GPU has the support for it.

> **Direct Quote from gfx-hal examples**
>
> *Using CPU_VISIBLE memory is convenient because it can be*
> *directly memory mapped and easily updated by the CPU, but it is very slow and so should*
> *only be used for small pieces of data that need to be updated very frequently.*
> *For something like a vertex buffer that may be much larger and should not change*
> *frequently, you should instead use a DEVICE_LOCAL buffer that gets filled by*
> *copying data from a CPU_VISIBLE staging buffer.*

I can understand if things are getting too intense. Be patient, and force yourself to
complete the whole tutorial. Ultimately the results will be awesome. Once we are done
showing graphics on Window, everything here will make sense.

***

## Logical Device

<Image alt="How to get Logical Devices from Physical Device" src="https://user-images.githubusercontent.com/11786283/77247969-01ba5080-6c5c-11ea-8202-3c83e1a25b51.png" placeholder="https://user-images.githubusercontent.com/11786283/82109903-8951a680-9757-11ea-8acc-b88bbc173fce.png" />

As you can see from the above image, logical device is nothing but a representation
of actual physical device.

Basically, Physical device (like NVidia GPU) can be used for various things like,
Games, Graphics Rendering, Data Mining, Machine Learning etc. This vast
range of use-cases is possible in GPU only due to it's support for both,
CPU intensive tasks, as well as GPU intensive tasks. For us, we are currently
looking for a Device Capability specific to Graphics intensive task.

Thus Logical Device is a representation of Physical Device, which has
support for specific capabilities, that it will be working on for the
time App will be running.

Logical Devices are used to create and manage different resources, like buffers, shader programs and textures.

### Device Queues & Queue Families

**What are Device Queues anyways??**
As the name suggests, it's just a queue, that Vulkan API creates according to App's
requirements. We can use this queue to synchronously or parallelly process graphics
commands. It acts as a link between our app render commands and surface draws.

Cool! Now let's move forward towards some actual code example.

We need to get two main instances out of `adapter` we previously got from Hal Instance.

* Logical Device that has specific GPU features enabled
  (for us that would be GPU intensive tasks).
* Supported Device Queue from Queue Groups

```rs.true
struct DeviceState<B: Backend> {
    device: B::Device,
    queues: QueueGroup<B>,
}

impl<B: Backend> DeviceState<B> {
    fn new(adapter: Adapter<B>, surface: &B::Surface) -> Self {
        let supported_family = adapter
            .queue_families
            .iter()
            .find(|family| {
                surface.supports_queue_family(family) && family.queue_type().supports_graphics()
            })
            .unwrap();

        let mut gpu = unsafe {
            adapter
                .physical_device
                .open(&[(supported_family, &[1.0])], Features::empty())
                .unwrap()
        };

        Self {
            device: gpu.device,
            queues: gpu.queue_groups.pop().unwrap(),
        }
    }
}
```

Defining `supported_family` (lines _8-14_), you can see that we are trying to
get a `queue_family`, where:

* The family is supported by the current gpu `surface`, meaning is compatible to pass
  commands to current window `surface`.
* Secondly, should support graphics commands.

Once we figure out the supported queue family, we then need to get it's
respective Logical Device instance, and actual `queues` that will keep hold of
our commands from a _Command Buffer_. This is done from lines _16-26_.

> **Note:** Opening a Physical Device instance to get Logical Device instance
> is `unsafe` in nature. Thus that code-block is wrapped inside `unsafe {}` block.
>
> To get details on `unsafe` usage, read [Rust Nomicon](https://doc.rust-lang.org/nomicon/meet-safe-and-unsafe.html)

### How do they look internally:

Logical Device representation is quite complex, so I won't describe it here.
Better to read [Device Docs](https://docs.rs/gfx-hal/0.5.0/gfx_hal/device/trait.Device.html),
and understand how to use it's apis.

Queue Families are basically collection of supported Queue types,
for current Surface for the GPU.

(Since I was using MacOS) I got `supported_family` as shown below:

```log
2020-05-16T19:22:41.155852+05:30 DEBUG enumerate_devices - >>>>>>> Queue Family Type:: General
2020-05-16T19:22:41.155987+05:30 DEBUG enumerate_devices - >>>>>>> Queue Max Queues:: 1
2020-05-16T19:22:41.156018+05:30 DEBUG enumerate_devices - >>>>>>> Queue Id:: QueueFamilyId(0)
```

where if you see the family id, that points to the first Queue group, in
`gpu.queue_groups`, which contains the supported queues for creating and
managing different resources.

Above representation of Queue Family is very different than actual
Vulkan Queue Family, which you can see in any Linux OS.

Do not get confused with the following log,
as it differs from system to system.
Following is a representation of all `adapter.queue_families` (on Linux).

```ts
// Queue Families
[
  {
    properties: {
      queue_flags: GRAPHICS | COMPUTE | TRANSFER | SPARSE_BINDING,
      queue_count: 16,
      timestamp_valid_bits: 64,
      min_image_transfer_granularity: {
        width: 1,
        height: 1,
        depth: 1,
      },
    },
    device: 0x00005622e6d7d271,
    index: 0,
  },
  {
    properties: {
      queue_flags: TRANSFER,
      queue_count: 1,
      timestamp_valid_bits: 64,
      min_image_transfer_granularity: {
        width: 1,
        height: 1,
        depth: 1,
      },
    },
    device: 0x00005622e6d7d270,
    index: 1,
  }
]
```

For a detailed explanation on Queue Family, see this [Stackoverflow thread](https://stackoverflow.com/a/55273688/2849127)

</PolkaContainer>
