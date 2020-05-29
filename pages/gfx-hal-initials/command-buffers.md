import { halArchiveRecord, size } from '@constants/gfx-hal-archive-list';
import { archiveRecord } from '@constants/archive-list';

export const record = halArchiveRecord['command-buffers'];
export const clientUploadRecord = archiveRecord['upload-client-logs'];

<PolkaContainer
  pageTitle={record.title}
  pageDescription={record.description}
  keywords={['Vulkan', 'Basics', 'Fundamental', 'Beginner', 'Physical Device', 'Logical Device', 'gfx-hal']}
  publishDate={record.createdAt}
  ogImage={record.ogImage}
>

<H1 updatedAt={record.updatedAt}>
  T-{`${size - 4}`}: {record.title}
</H1>

> This doc is mostly theoretical, where
> practical examples mentioned in this docs might not be functional.
> So bear with me and try to grasp the theory as much as you can,
> as it will help in later tutorials, when we will actually re-use this
> knowledge to create a functional example.

<br />

_Following diagram is a very high-level illustration of what_
_Command Buffers and Command Pools are:_

<Image alt="Flow of Command Buffer from Command Pool" src="https://user-images.githubusercontent.com/11786283/77256537-ff281d00-6c94-11ea-8e05-d49d8a24aaab.png" placeholder="https://user-images.githubusercontent.com/11786283/82124868-93a78b00-97bf-11ea-9773-3a66b1f1f096.png" />

<br />

## Command Buffer

Command Buffers can be thought of as a place to record
set of execution commands (pushed to a buffer),
and then later release those recorded commands
to Device Queue to get executed by GPU.

It's kind of _SQL transactions_, where a Command Buffer acts
as a collection of instructions inside a transaction,
and when the transaction is committed, they all get
processed (in one go or chunks, is decided by Command Pool).

If you have read my&nbsp;<Link href={clientUploadRecord.link}>Client Log Upload Blog</Link>,
then you can get the importance of buffering too frequent
events. Buffering is mainly used to defer the work load from
CPU/GPU. Up here Command Buffers are doing the same thing.

**For Eg.**, Let's say we want to process 500 instructions
in a second, but our GPU can only handle 50 instructions
a second, buffering will help deferring that work load,
and do it in chunks of instructions. This increases
performance, also giving more control to developer on
how to manage too heavy tasks in a queue.

One more benefit of Command Buffers is that they can
be multiple and can be recorded in parallel. Thus
increase any application's concurrency.

## Command Pool

If there are too many instructions to process from
Command Buffer, dividing them into chunks and submitting
them to CPU/GPU to process, can become costly.

To handle such situations, Vulkan has separated the
storage of commands (Command Buffer) and execution of
commands (Command Pool). Command Buffers are pre-registered
in Command Pool, and once the Command Buffer flushes it's
recorded instructions, Command Pool takes care of the
execution of the Commands, depending on the state of
GPU.

Command Pool is derived from Logical Device instance. They
are not manually created, instead we ask the Logical Device to provide us the Command Pool.

Using the Command Pool, we then get Command Buffer
(one or many depends), or re-use the already fetched
Command Buffer from the pool.

## Primary vs Secondary Command Buffers

<Blockquote type="warn">
  This section could be too much info, so just read it and
  if you fail to understand, try understanding Render
  Passes first. Point is, many things in Vulkan is
  correlated, thus understanding just one concept is not
  enough.
</Blockquote>

> *Quoting directly from [Vulkan Tutorial](https://vulkan-tutorial.com/Drawing_a_triangle/Drawing/Command_buffers)*
>
> * **PRIMARY**: Can be submitted to a queue for execution,
> but cannot be called from other command buffers.
> * **SECONDARY**: Cannot be submitted directly, but
> can be called from primary command buffers.

To understand this the above quote, we can take an example.
Let's say, we have 500 commands to execute, where GPU
can take only 5 at a time. Since, Primary Command buffers
can be registered to a render pass, one at a time, doing
parallelism is difficult with single Primary CB. For
such cases, Secondary CB is introduced, which cannot
directly interact with Render Pass execution, but can
execute commands passed to it in Primary CB, which then
passes those committed commands to
Render Pass. Currently, even I am having hard time
understanding it, but I am sure once we start building
applications, these things will get more clear.


> You can get a detailed explanation in the following
> Youtube Video,
> [Command Buffers & Pipelines](https://www.youtube.com/watch?v=X8Ob_b3ANzs&t=990s)

## Code Sample

**Let's now understand all this from a code sample**

We need a new `struct` to manage resources related to Frame Buffers and
Mutex and Locks. `FrameBufferState` would create and manage them.

```rs
struct FrameBufferState<B: Backend> {
    command_pool: Option<B::CommandPool>,
    command_buffer: B::CommandBuffer,
}

impl<B: Backend> FrameBufferState<B> {
    fn new(deviceState: &DeviceState<B>) -> Self {
        let (command_pool, mut command_buffer) = unsafe {
            let mut command_pool = deviceState
                .device
                .create_command_pool(deviceState.queues.family, CommandPoolCreateFlags::empty())
                .expect("Out of memory");

            let command_buffer = command_pool.allocate_one(command::Level::Primary);

            (command_pool, command_buffer)
        };
        Self {
            command_pool: Some(command_pool),
            command_buffer,
        }
    }
}
```

In the above code, we are getting two things, Command
Pool and Command Buffer.

`command_pool` is created once, using logical `device`.
`create_command_pool` is the api which creates a command
pool, respective to what queue family that Command Pool
will serve to and what types commands it can process
(like Graphics only commands or computational commands).
Let's not worry about `CommandPoolCreateFlags` for now.

`command_buffer` is fetched (allocated) from Command Pool,
as we have already mentioned before. Here, we just need
one `Primary` Command Buffer, but we can create multiple
Primary or Secondary buffers, using `command_pool.allocate()`
api.


## What to do now

With Command Buffer present, we can `Start Recording` on
the Buffer to record, all the Commands
we want to later execute on GPU.

Once all the commands are recorded, `Stop Recording`
and Pass the updated Command Buffer to the Device Queue.

We will discuss on this whole flow in later chapters.

***

## Code

You can find the full code for this Doc,
here [003-command_buffers](https://github.com/Shub1427/rustschool/blob/master/gui/draw-cube/src/003-command_buffers/main.rs)

</PolkaContainer>
