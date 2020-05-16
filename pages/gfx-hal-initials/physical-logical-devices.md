import { halArchiveRecord } from '@constants/gfx-hal-archive-list';

export const record = halArchiveRecord['physical-logical-devices'];

<PolkaContainer
  pageTitle={record.title}
  pageDescription={record.description}
  keywords={['Vulkan', 'Basics', 'Fundamental', 'Beginner', 'Physical Device', 'Logical Device', 'gfx-hal']}
  publishDate={record.createdAt}
  ogImage={record.ogImage}
>

<H1 updatedAt={record.updatedAt} wordCount={520}>
  {record.title}
</H1>

<Image alt="Get Physical Device from Backend to Logical Devices" src="https://user-images.githubusercontent.com/11786283/82109324-a8016e80-9752-11ea-89ba-677880ada6b1.png" placeholder="https://user-images.githubusercontent.com/11786283/82109811-ac2f8b00-9756-11ea-88db-3cbc70ee1350.png" />


<!-- https://user-images.githubusercontent.com/11786283/77244925-8bf4bb80-6c40-11ea-85f4-1a0f833ce834.png -->

## What is a Device

* Physical Device - denotes to the actual Hardware device present in your Computer. It gives
  a vector, that has Device details as elements. Each item pointing to the GPU hardware you have.
  So, if you have Single NVidia GPU, you will get a single item vector, having details on that device.
* Logical Device - Basically it is a representation of Physical device, that the application will use
  to compute their logic. In `gfx-hal` to get logical device, you need to open `physical_device`.
  (Details discussed at the end).

## What details does a device has

```ts
// Adapter Info
{
  name: "GeForce GTX 1060 6GB",
  vendor: 4310,
  device: 7114,
  // Enum - { Other = 0, IntegratedGpu = 1, DiscreteGpu = 2, VirtualGpu = 3, Cpu = 4 }
  device_type: DiscreteGpu,
}

// Physical Device, used to fetch details on gpu memory etc.

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

* Info is self-explanatory.
* Physical Device - (To be Explored)
* QueueFamilies - consist of multiple queue details a Device supports. A queue excepts Command buffers
  to operate on, but only for a specific type. Each queue detail in queue families, has Queue Flags,
  which determines what type of command-buffers a queue can to pass on to GPU.
  So, `queue_flags: GRAPHICS` can accept only graphics related operations in Command Buffer.

  For an ellaborated explanation, see this [thread](https://stackoverflow.com/a/55273688/2849127)

## Logical Devices

<Image alt="How to get Logical Devices from Physical Device" src="https://user-images.githubusercontent.com/11786283/77247969-01ba5080-6c5c-11ea-8202-3c83e1a25b51.png" placeholder="https://user-images.githubusercontent.com/11786283/82109903-8951a680-9757-11ea-8acc-b88bbc173fce.png" />


```rs
let mut gpu = unsafe {
  adapter
    .physical_device
    .open(&[(&adapter.queue_families[0], &[1.0])], gfx_hal::Features::empty())
    .unwrap()
};

// Logical Device
println!("Logical Device: {:#?}", gpu.device);
```

We will be using Logical Devices to create Command Pools and Buffer to pass onto GPU.

</PolkaContainer>
