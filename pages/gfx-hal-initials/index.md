import { archiveRecord } from '@constants/archive-list';
import { halArchiveRecord } from '@constants/gfx-hal-archive-list';

<PolkaContainer>

<H1 updatedAt={archiveRecord['gfx-hal-basics'].updatedAt} wordCount={325}>
  <InlineCode>gfx-hal</InlineCode> & <InlineCode>vulkan</InlineCode> basics
</H1>

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
* [LunarG Vulkan Tutorial](https://vulkan.lunarg.com/doc/sdk/1.2.131.2/linux/tutorial/html/index.html)
* Special Mentions, (most of them I haven't read completely, but will help me later for reference):
  * [Dusting H Lan](https://www.fasterthan.life/blog/2017/7/11/i-am-graphics-and-so-can-you-part-1)
  * [Vulkan Tutorials](https://vulkan-tutorial.com/Introduction)

> Before moving forward, I would like to clear some basics on Rust and Cargo.
> _Follow <Link href={halArchiveRecord['rust-cargo-basics'].link}>this guide</Link>_, if you want to
> clear some basics on the same.

***

## Table of Contents

### Draw a Cube
* <Link href={halArchiveRecord['display-window'].link}>Display a Window</Link>

</PolkaContainer>