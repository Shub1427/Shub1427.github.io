import { halArchiveRecord } from '@constants/gfx-hal-archive-list';

export const record = halArchiveRecord['command-buffers'];

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

> This Doc and coming 2 to 3 more Docs are all theoretical, where
> practical examples mentioned in these docs might not be functional.
> So bear with me and try to grasp the theory as much as you can,
> as it will help in later tutorials, when we will actually re-use this
> knowledge to create a functional example.

<Image alt="Flow of Command Buffer from Command Pool" src="https://user-images.githubusercontent.com/11786283/77256537-ff281d00-6c94-11ea-8e05-d49d8a24aaab.png" placeholder="https://user-images.githubusercontent.com/11786283/82124868-93a78b00-97bf-11ea-9773-3a66b1f1f096.png" />

Command Buffer can be thought of a set of execution commands, kept as a buffer,
and passed to Device Queue to later on pass to Driver to execute them.

It's kind of SQL transactions, where a Command Buffer has to be set to `Recording`, pass
whatever commands we want to execute and `Stop Recording`.

## Command Pool

Command Pool is something specific to Logical Device. They are not manually created.
Instead we ask the Logical Device to provide us the Command Pool.

Using the Command Pool, we then get Command Buffer, or re-use the already fetched Command
Buffer from the pool.

## What to do now

With Command Buffer present, we can `Start Recording` on the Buffer to record, all the Commands
we want to later execute on GPU.

Once all the commands are recorded, `Stop Recording` and Pass the updated Command Buffer
to the Device Queue.

That's it!!! That's what a Command Buffer is for an Application Dev.

</PolkaContainer>
