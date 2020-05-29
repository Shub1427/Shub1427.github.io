import { halArchiveRecord, size } from '@constants/gfx-hal-archive-list';
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
  T-{`${size - 5}`}: {record.title}
</H1>

Shaders are pixel manipulation tools. To create shaders, we
use some kind of
[Shading Language](https://en.wikipedia.org/wiki/Shading_language).

Some interesting details on Shaders can be found
[in this Abstract](https://www.cs.vu.nl/~eliens/download/literatuur-shaders.pdf)

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

## Understanding `GLSL`

I am new to shaders completely. For me choosing any Shading
Language was difficult, let aside understanding `SPIR-V` and
overcoming Rust's support for any stable Shader language
support.

I am just following people here, and have found `HLSL` and
`GLSL` to be used more often. `GLSL` being used more effectively
in the Open Source Community. Thus, will understand and use
`GLSL` in our projects as well.

If you have no prior knowledge on Shaders, I would recommend
to [read this post](https://gamedevelopment.tutsplus.com/tutorials/a-beginners-guide-to-coding-graphics-shaders--cms-23313) once,
just to get some quick hands on.

I am keeping link a to
[GLSL language specs](https://www.khronos.org/registry/OpenGL/specs/gl/GLSLangSpec.4.60.pdf)
here, as a reference.

Moving forward!! Teaching `GLSL` is out of scope for this post,
but you can go through this [awesome shaders list](https://github.com/radixzz/awesome-glsl)
for resources to teach you GLSL.

We would be testing two shaders


## Pre Compilation of GLSL Shaders

I would recommend you to try the solution mentioned in
[Compiling GLSL to SPIR-V](https://falseidolfactory.com/2018/06/23/compiling-glsl-to-spirv-at-build-time.html),
for simplicity of converting `GLSL`
shader files to `SPIR-V` files.

Though I failed to run the script mentioned in
[Compiling GLSL to SPIR-V](https://falseidolfactory.com/2018/06/23/compiling-glsl-to-spirv-at-build-time.html).
Also, `glsl-to-spirv` is outdated.
It was part of project [vulkano](https://github.com/vulkano-rs/vulkano),
but is abandoned in
support of google's [shaderc](https://github.com/google/shaderc)
project, which we will be using as well.

<Blockquote type="warn">
  I would like to warn you though!! <InlineCode>shaderc</InlineCode>
  is a <InlineCode>C</InlineCode>/<InlineCode>C++</InlineCode>
  project and thus setting it up is tedious and harder
  compared to Rust's <InlineCode>Cargo</InlineCode>
  ecosystem.
  <br/>
  <br/>
  It is also good to note that, either we can use it as a command
  line tool, using <InlineCode>glslc</InlineCode> binary, to
  pre-compile our <InlineCode>GLSL</InlineCode>/
  <InlineCode>HLSL</InlineCode> Shaders, or we can use&nbsp;
  <Link
    href="https://github.com/google/shaderc-rs"
    target="_blank"
    rel="noopener noreferrer"
  >
    Rust Shaderc Bindings
  </Link>&nbsp;
  in our rust code, so as to compile our <InlineCode>GLSL</InlineCode>/
  <InlineCode>HLSL</InlineCode> shaders at runtime.
  <br />
  We will discuss both. If you are able to compile and use
  <InlineCode>glslc</InlineCode> binary, than using
  <InlineCode>shaderc-rs</InlineCode> in rust won't be of
  any trouble.
</Blockquote>

*Before moving forward, you can use [Shader Playground](http://shader-playground.timjones.io/)
to get some basic understanding on how `GLSL` get's
converted into `SPIR-V` format.*

Details on compilation of `shaderc` can be found
[in there doc](https://github.com/google/shaderc#getting-and-building-shaderc).
Though I would like to mention some dependencies, to be present
before compilation, in short here, assuming you are using
Linux or Mac OS (Mac OS should have `brew` installed for simplicity).

* `gcc` should be installed. (For MacOS use `brew install gcc`)
* `cmake` should be installed. (For MacOS use `brew install cmake`)
* Clone the repo somewhere
  * Run Command - `git clone https://github.com/google/shaderc $SOURCE_DIR`
  * Change Directory - `cd $SOURCE_DIR`
* Once you have cloned the repo, inside the cloned repo directory
  you need to run `./utils/git-sync-deps` for all important
  dependency to get pulled into the directory for compilation
* Create a Build Directory and step inside it - `mkdir ./build && cd ./build`
* Some important dependencies to install before hand:
  * `gcov`, if already not installed. (For MacOS use `brew install gcov`)
  * `lcov` (For MacOS use `brew install lcov`)
  * `ninja` for `cmake` builds (For MacOS use `brew install ninja`)
* Now you need to build the configurations for `shaderc`,
  using command - `cmake -GNinja -DCMAKE_BUILD_TYPE=Release $SOURCE_DIR`
* Once configuration files are generated, you need to build
  the project to get compiled versions:
  * Run command - `ninja`
  * There might be some `warnings` which is ok, but do check
    that you don't get any `error` while binaries are getting
    generated.
  * Have some patience :grin:

If everything goes fine, you will find `glslc` binary inside
`$SOURCE_DIR/build/glslc`. We can now directly use `glslc` to
pre-compile our `GLSL` shaders to `SPIR-V`.





</PolkaContainer>
