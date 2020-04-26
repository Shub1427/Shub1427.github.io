<PolkaContainer>

# Basics on Rust & Cargo

## Rust
<Blockquote type="warn">
I am a very beginner in Rust and Low Level Programming, and parts of my research
might be falsy or wrong (as I forget things very soon, due to me trying new things most often).
Don't take everything I write here, as the only source of truth. Please do verify my writings here
from different sources. If found falsy, please do let me know by&nbsp;
<Link target="_blank" href="https://github.com/Shub1427/shub1427.github.io/issues/new/choose">raising an issue here</Link>.
</Blockquote>

<br />

Anyways, keeping aside the above talk, I am trying my best to improve these notes. If anything
I find misleading, I will update in later revisions of this site. Mostly I will write only those
things, which I have worked with and faced some issues before.

<br />

Hope this helps you as well.


### Some basics on Lifetimes:

Every reference in global context in `rust` has a lifetime
of `static`, and by default we don't have to assign a specifc
lifetime to variables or global function args etc. `static`
lifetime defines that, that particular entity will live long enough,
till the main process dies. So, following:

```rs
const foobar: &str = "Up here I have static lifetime";

fn foo(param1: &str) {
  println!("I am static: {}", param1);
}

fn main() {
  let bar = &foobar;
  println!("I am static as well: {}", bar);
}
```

would result into something like this:

```rs
const foobar: &'static str = "Up here I have static lifetime";

fn foo(param1: &'static str) {
  println!("I am static: {}", param1);
}

fn main() {
  let bar = &'static foobar;
  println!("I am static as well: {}", bar);
}
```


### Passing Slices as arguments:

If details of the type is not essential, passing array like variables as a reference
of generic slice is beneficial. For eg.

```rs
use std::fmt::Debug;

fn check_array<T>(data: &[T])
where
  T: Debug,
{
  let mut i = 0;
  for item in data.iter() {
    println!("Element[{}]: {:?}", i, item);
    i += 1;
  }
}
fn check_str(data: &str) {
  let mut i = 0;
  for item in data.chars() {
    println!("Element[{}]: {:?}", i, item);
    i += 1;
  }
}

fn main() {
    let mut v = vec![1, 2, 3, 4];
    let mut s = String::from("Test FOO");
    check_array(&v);
    check_str(&s);
}
```

where, `&str` is a string slice, which means I could've passed part of the string as well,
istead of the whole `String` data, as `check_str(&s[2..6])`.


### How to drop struct properties manually.

By default, managing memory is not required in Rust. But, there are cases, when this becomes
crucial, and Rust allows you to mess with memory when needed (still being safe).

For cases where we need to drop properties manually, there are many ways in Rust to do so.
Two of which are:

* To use `Option`
* To use `ManuallyDrop`

__Example of using `Option` to drop properties.__

```rs
struct Foo {
  baz: String;
  bar: Option<String>;
}

impl Drop for Foo {
    fn drop(&mut self) {
        self.bar = None;
    }
}
```

Above code drops `bar` before `baz`, which is different than the default behaviour of Rust,
where Struct properties are dropped in the order they were defined, i.e. for above code `baz`
should have been dropped before `bar`.

<br/>

__Example of using `ManuallyDrop` to drop properties.__

```rs
use std::mem::ManuallyDrop;

struct Foo {
  baz: String;
  bar: ManuallyDrop<String>;
}

impl Drop for Foo {
    fn drop(&mut self) {
        ManuallyDrop::drop(&mut self.bar);
    }
}
```

Above code does the same thing as was done using `Option` before.

***

## Cargo

Basics of `cargo` is very simple, and thus I like Rust the most, compared to `C`.
I won't be writing on how to `run` or create a `new` project, but would like to
talk on some cargo features, which are not known if a beginner skip the Cargo Chapter
in Rust Book.

### Cargo Features

`features` is a wornderful option provided by Rust Cargo, which makes compiling your code
conditionally. For Eg, If we want specific features to be enabled only for Linux, we
can do so easily using `features` option.

<br/>

For eg, In our journey of learning `gfx-hal`, we would be using multiple Graphics Backends,
which should be compiled respective to which OS Platform we are working on. This is made possible
by defining `features` in `Cargo.toml` file, and later when running the Project in dev mode
`cargo run`, we would pass the feature we need to be used for the platform.

<br/>

__Example `Cargo.toml`__

```toml.false
[features]
default = []
metal = ["gfx-backend-metal"]
dx12 = ["gfx-backend-dx12"]
vulkan = ["gfx-backend-vulkan"]

[dependencies.gfx-backend-vulkan]
version = "0.5.0"
features = ["x11"]
optional = true

[target.'cfg(target_os = "macos")'.dependencies.gfx-backend-metal]
version = "0.5.0"
optional = true

[target.'cfg(windows)'.dependencies.gfx-backend-dx12]
version = "0.5.0"
optional = true
```

Once above is done, we can now use feature-toggles in our code, to remove part of code
that does not satisfy the `feature`. For Eg,

```rs.false
#[cfg(feature = "dx12")]
use gfx_backend_dx12 as back;
#[cfg(feature = "metal")]
use gfx_backend_metal as back;
#[cfg(feature = "vulkan")]
use gfx_backend_vulkan as back;
```

And not the final part to run the code with features enabled.

```sh.false
cargo run --features metal
```

Above code runs our code, enabling the `metal` feature-toggle, which compiles our
code for MacOS Platform. We can also pass more features in one go, if they are supported
during compilation, with comma separated values.

</PolkaContainer>
