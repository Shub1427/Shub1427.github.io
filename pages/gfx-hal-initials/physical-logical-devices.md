import { halArchiveRecord, size } from '@constants/gfx-hal-archive-list';

export const record = halArchiveRecord['physical-logical-devices'];

export const prevRecord = halArchiveRecord['display-window'];
export const nextRecord = halArchiveRecord['swap-chain'];

<PolkaContainer
  pageTitle={record.title}
  pageTitleString={record.titleString}
  pageDescription={record.description}
  keywords={['Vulkan', 'Basics', 'Fundamental', 'Beginner', 'Physical Device', 'Logical Device', 'Learn', 'Device Queue']}
  publishDate={record.createdAt}
  ogImage={record.ogImage}
>

<H1 id={record.titleString} updatedAt={record.updatedAt}>
  T-{`${size - 2}`}: {record.title}
</H1>

<Image alt="Get Physical Device from Backend to Logical Devices" src="https://user-images.githubusercontent.com/11786283/82109324-a8016e80-9752-11ea-89ba-677880ada6b1.png" placeholder="https://user-images.githubusercontent.com/11786283/82109811-ac2f8b00-9756-11ea-88db-3cbc70ee1350.png" />


<!-- https://user-images.githubusercontent.com/11786283/77244925-8bf4bb80-6c40-11ea-85f4-1a0f833ce834.png -->

## What is a Device

* **Physical Device** - represents an actual Hardware device present
  in your Computer. It usually contains details on your GPU
  device and APIs to create a Logical Device. Each item points
  to the GPU hardware you
  have. So, if we have Single NVidia GPU, we get a
  single item, which we can `open` and later on use as a
  _Logical Device_.
* **Logical Device** - Basically, it is an application interface
  to communicate with our GPU. In `gfx-hal` to get a logical device,
  you need to open `physical_device`.

*Details discussed later.*

## Instantiating Adapters, Logical Device, and Device Queue Group

In GPU, there is no direct relation to Physical Device;
instead, `gfx-hal` provides us API to get Adapter instance,
which has Physical Device instance and various Queue family
details.

I hope you have already read details on how to get a reference
to <Link href={`${prevRecord.link}`}>gfx-hal Instance and its Surface</Link>.
If not, please read it once before continuing.

We would get a list of `adapters` from an `instance`.

We need to update our `Renderer` struct, and it's implementation
a bit for this.

```rs
struct Renderer<B: Backend> {
    ...
    // Device Adpter, containing Physical and Queue details
    adapter: Adapter<B>,
    // Logical Device object
    device: B::Device,
    // Queue Group for rendering reference
    queue_group: family::QueueGroup<B>,
}

impl<B: Backend> Renderer<B> {
    fn new(instance: B::Instance, surface: B::Surface) -> Self {
        let mut adapters = instance.enumerate_adapters();
        let (memory_types, limits, adapter) = {
            let adapter = adapters.remove(0);
            (
                adapter.physical_device.memory_properties().memory_types,
                adapter.physical_device.limits(),
                adapter,
            )
        };

        let (device, queue_group, supported_family) = {
            let supported_family = adapter.queue_families.iter()
                .find(|family| {
                    surface.supports_queue_family(family) && family.queue_type().supports_graphics()
                })
                .unwrap();

            let mut gpu = unsafe {
                adapter.physical_device
                    .open(&[(supported_family, &[1.0])], Features::empty())
                    .unwrap()
            };

            (
                gpu.device,
                gpu.queue_groups.pop().unwrap(),
                supported_family,
            )
        };

        Renderer {
            ...
            adapter,
            device,
            queue_group,
        }
    }
}
...
```

### Code Breakdown

* `enumerate_adapters` is used to get a list of available adapters,
  each containing one Physical Device resource in it. From the collection
  of adapters, we can get the `adapter` that we need.
* Getting `supported_family` from a list of Queue Families that our
  GPU supports. Queues and Queue Families to be discussed later
  in this Chapter, for now, understand that `supported_family`
  is a Family of Queues that understands the Instructions
  we want to run on GPU.
* Physical Device resource uses `supported_family` to get
  supported Logical Device and Queue Groups (details to be
  discussed later). `Features::empty()` denotes that we want
  default features enabled for Logical Device.

## What details does an `Adapter` have

<Blockquote type="warn">
  The following are not a complete list of Adapter properties. They mostly
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

GPU info is quite clear. Getting info is simple - `adapter.info`.
It basically gives us details on GPU Hardware.

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

GPU limits are also self-explanatory. It gives us a struct
containing details on GPU Memory, Concurrency limits.

```ts
// Memory Types: `adapter.physical_device.memory_properties().memory_types`
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

I won't comment too much on `MemoryType`s, as details on
`DEVICE_LOCAL` or `CPU_VISIBLE` MemoryTypes is unknown to me
as well at this point.

> **Direct Quote from gfx-hal examples**
>
> *Using CPU_VISIBLE memory is convenient because it can be*
> *directly memory-mapped and easily updated by the CPU, but it is very slow and so should*
> *only be used for small pieces of data that need to be updated very frequently.*
> *For something like a vertex buffer that may be much larger and should not change*
> *frequently, you should instead use a DEVICE_LOCAL buffer that gets filled by*
> *copying data from a CPU_VISIBLE staging buffer.*

From the above Quote, I can get that memory_types are used to create
specific types of buffers that are efficient in some places
and not in the others.

> I can understand if things are getting too intense. Be patient
> and force yourself to complete the whole tutorial.
> Ultimately the results will be excellent. Once we are done
> showing graphics on the Window, everything here will make sense.

***

## Logical Device

<Image alt="How to get Logical Devices from Physical Device" src="https://user-images.githubusercontent.com/11786283/77247969-01ba5080-6c5c-11ea-8202-3c83e1a25b51.png" placeholder="https://user-images.githubusercontent.com/11786283/82109903-8951a680-9757-11ea-8acc-b88bbc173fce.png" />

As you can see from the above image, a logical device is
nothing but a representation of an actual physical device.

Physical device (like NVidia GPU) can be used for various things like
Games, Graphics Rendering, Data Mining, Machine Learning, and more. This vast
range of use-cases is possible in GPU only due to its support for both
CPU intensive tasks (tasks that do a single operation but benefit with GPU's
abundant number of cores for parallel operations),
as well as GPU intensive tasks. For us, we are currently
looking for a Device Capability specific to Graphics intensive task.

Thus Logical Device is a representation of Physical Device, which has
support for specific capabilities (thus, we used `supported_family`
to open a Logical Device) that it works on for the
time App is running.

Logical Devices are used to create and manage different resources,
like buffers, shader programs, and textures.

## Device Queues & Queue Families

**What are Device Queues anyways??**
As the name suggests, it's just a Queue.
Every GPU driver provides us with Queues bound to its
hardware, which can take Commands from our application
and process it parallelly.
Thus, we use queues to process graphics commands parallelly.

**What are Queues Families anyways??**
Queue Families are a collection of support details for a GPU.
It points out what kind of work our GPU hardware
can handle, like handling CPU compute operations,
I/O transfer operations, GPU graphics/render operations, and more.
If our GPU supports all of them, then we need
to choose between various queue families to decide on
what particular operations we want to do via our Logical
Device anytime.

Cool! Let's now discuss our above Code example.

Getting a `supported_family` was crucial because it helped us
get a specific Logical Device (`gpu.device`) and Queue groups
(`gpu.queue_groups`). Supported Family defines what kind of
operation we want to perform using the device and queues.

Queue Groups are used to get `queues` that
keep hold of our commands from a _Command Buffer_.

> **Note:** Opening a Physical Device instance to get a Logical Device instance
> is `unsafe`. Thus that code-block was wrapped inside `unsafe {}` block.
>
> To get details on `unsafe` usage, read [Rust Nomicon](https://doc.rust-lang.org/nomicon/meet-safe-and-unsafe.html).

### How do they look internally:

Logical Device representation is quite complex; thus,
I won't describe it here.
Better to read [Device Docs](https://docs.rs/gfx-hal/0.5.0/gfx_hal/device/trait.Device.html),
and understand how to use its APIs.

Queue Families are a collection of details on supported
Queue Groups in a GPU.

(Since I was using MacOS) I got `supported_family` as shown below:

```log
2020-05-16T19:22:41.155852+05:30 DEBUG enumerate_devices - >>>>>>> Queue Family Type:: General
2020-05-16T19:22:41.155987+05:30 DEBUG enumerate_devices - >>>>>>> Queue Max Queues:: 1
2020-05-16T19:22:41.156018+05:30 DEBUG enumerate_devices - >>>>>>> Queue Id:: QueueFamilyId(0)
```

where if you see the family id, that points to the first Queue group, in
`gpu.queue_groups`, which contains the supported queues for creating and
managing different resources.

The above representation is for `Metal` GPU driver in MacOS,
which is very different than actual
Vulkan Queue Family, which you can see in any Linux OS.

Please do not get confused with the above log,
as it differs from system to system.
Following is a representation of all `adapter.queue_families`
(on Linux for Vulkan Backend).

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

***

## Code

You can find the full code for this Doc,
here [002-enumerate_devices](https://github.com/Shub1427/rustschool/blob/master/gui/draw-cube/src/002-enumerate_devices/main.rs)

To run that code:

`cargo run --bin enumerate_devices --features=metal`

*We don't have any change in the output in this Chapter.*

<MoveOtherPage
  prev={prevRecord.link}
  prevLabel={prevRecord.titleString}
  next={nextRecord.link}
  nextLabel={nextRecord.titleString}
/>

</PolkaContainer>
