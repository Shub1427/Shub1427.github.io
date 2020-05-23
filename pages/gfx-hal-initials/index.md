import { archiveRecord } from '@constants/archive-list';
import { halArchiveRecord } from '@constants/gfx-hal-archive-list';
import { rustArchiveRecord } from '@constants/rust-reference-list';

export const record = archiveRecord['gfx-hal-basics'];

<PolkaContainer
  pageTitle={record.title}
  pageDescription={record.description}
  keywords={['Vulkan', 'Basics', 'Fundamental', 'Beginner', 'gfx-hal']}
  publishDate={record.createdAt}
  ogImage={record.ogImage}
>

<H1 updatedAt={record.updatedAt}>
  <InlineCode>gfx-hal</InlineCode> & <InlineCode>vulkan</InlineCode> basics
</H1>

<Blockquote type="warn">
  This blog is a <b>Work in Progress</b>. As I complete learning few things one by one,
  I will update the doc accordingly.

  <br />
  <br />

  :warning: &nbsp;For now, read it at your own risk!!!
</Blockquote>

I have found that learning new things every often,
leads to chaos, and people (specifically ME) tend to forget many things they have already
learnt before.

<br />

These notes will help me to keep reference notes for myself, as well as for anybody who is willing to
learn Vulkan API using `gfx-hal`.

<br />

Learning `rust` language and `vulkan` APIs, both are very difficult for starters. I am still struggling
to understand the basics, let aside writing proper Memory Management and Performance optimized Rust
Code. Reading these notes requires prior knowledge of at-least one statically typed language (like
`java`, `C` etc.), and some understanding of graphics, though even I am very new to Graphics Programming,
so even for me many concepts are very new, and I will try to either explain them as much as I could, or
better point you to some reference to take a look into and understand it better.

<br />

__Special Thanks to__:

* [@lokathor](https://github.com/Lokathor), for writing an open book on learning basics of using `gfx-hal`,
  though with very old `gfx-hal` version, but it still guided me a lot. You can read it
  [here](https://rust-tutorials.github.io/learn-gfx-hal/).
* [@mistodon](https://twitter.com/mistodon), for writing such a good blog on `gfx-hal` and `vulkan`, which
  you can read [here](https://www.falseidolfactory.com/2020/04/01/intro-to-gfx-hal-part-1-drawing-a-triangle.html).
* [gfx-rs examples](https://github.com/gfx-rs/gfx/blob/master/examples/),
  are great to take a look into for basics. Most of my code is
  inspired from those examples, but since there was no way
  of understanding those examples without other references,
  you might see changes.
* [LunarG Vulkan Tutorial](https://vulkan.lunarg.com/doc/sdk/1.2.131.2/linux/tutorial/html/index.html)
* Special Mentions, (most of them I haven't read completely, but will help me later for reference):
  * [Dusting H Lan](https://www.fasterthan.life/blog/2017/7/11/i-am-graphics-and-so-can-you-part-1)
  * [Vulkan Tutorials](https://vulkan-tutorial.com/Introduction)

> Before moving forward, I would like to clear some basics on Rust and Cargo.
> _Follow <Link href={rustArchiveRecord['rust-cargo-basics'].link}>this guide</Link>_, if you want to
> clear some basics on the same.

***

## Table of Contents

### Draw a Cube

export const displayWindow = halArchiveRecord['display-window'];
export const devices = halArchiveRecord['physical-logical-devices'];
export const commandBuffers = halArchiveRecord['command-buffers'];
export const swapChain = halArchiveRecord['swap-chain'];

* <Link href={displayWindow.link}>
    {displayWindow.title}
  </Link>
* <Link href={devices.link}>
    {devices.title}
  </Link>
* <Link href={commandBuffers.link}>
    {commandBuffers.title}
  </Link>
* <Link href={swapChain.link}>
    {swapChain.title}
  </Link>

</PolkaContainer>
