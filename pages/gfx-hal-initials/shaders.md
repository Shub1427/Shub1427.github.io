import { halArchiveRecord } from '@constants/gfx-hal-archive-list';
import { archiveRecord } from '@constants/archive-list';
import { rustArchiveRecord } from '@constants/rust-reference-list';

export const record = halArchiveRecord['shaders'];

<PolkaContainer
  pageTitle={record.title}
  pageDescription={record.description}
  keywords={['Vulkan', 'Basics', 'Fundamental', 'Beginner', 'gfx-hal']}
  publishDate={record.createdAt}
  ogImage={record.ogImage}
>

<H1 updatedAt={record.updatedAt}>
  {record.title}
</H1>

Shaders are pixel manipulation tools. To create shaders, we
use some kind of
[Shading Language](https://en.wikipedia.org/wiki/Shading_language).


If you have no prior knowledge on Shaders, I would recommend
to [read this post](https://gamedevelopment.tutsplus.com/tutorials/a-beginners-guide-to-coding-graphics-shaders--cms-23313) once.

We would be using `GLSL` as our Shading Language in
our Demo.

Before moving forward, we should know what
[SPIR-V](https://www.khronos.org/registry/spir-v/specs/unified1/SPIRV.html)
is!!! SPIR-V is an intermediate language defined by Khronos
Group for Vulkan. It is the language that Vulkan understands
and thus `gfx-hal` too. So to work with shaders in `gfx-hal`
we can use any Shading Language, but we need to first
convert those Shader Code into SPIR-V format and then
can we use it directly in `gfx-hal`.

<Blockquote type="warn">
  Currently Rust does not have any native module to support
  JIT compilation of any Shading Language to SPIR-V. Thus,
  currently setting up Shaders in Rust is quite difficult.
  <br/>
  <br/>
  There is an ongoing discussion for this on&nbsp;
  <Link
    href="https://github.com/rust-gamedev/wg/issues/23"
    target="_blank"
    rel="noopener noreferrer"
  >
    rust-gamedev working group
  </Link>, but is far from any conclusion.
  <br/>
  <br/>
  There are ways to work with shaders in
  <InlineCode>gfx-hal</InlineCode>, but they are quite
  complex to setup.
  <br/>
  <br/>
  Easiest way is to pre-compile your <InlineCode>GLSL</InlineCode>
  or <InlineCode>HLSL</InlineCode> code to SPIR-V format
  and use that directly in <InlineCode>gfx-hal</InlineCode>.
  <br/>
  <br/>
  To get a JIT compilation in native Rust, we will have to wait.
  Currently there is an ongoing project in
  <InlineCode>gfx</InlineCode> community, named&nbsp;
  <Link
    href="https://github.com/gfx-rs/naga"
    target="_blank"
    rel="noopener noreferrer"
  >
    naga
  </Link>, to support cross-platform, multi Shader Languages
  all in pure Rust.
  <br/>
  <br/>
  <Link
    href="https://github.com/gfx-rs/naga/pull/50"
    target="_blank"
    rel="noopener noreferrer"
  >
    GLSL support is on it's way
  </Link>
</Blockquote>

Details on `naga`, can be found
[here](https://gfx-rs.github.io/2019/07/13/javelin.html)

## Pre Compilation of GLSL Shaders



</PolkaContainer>
