import { archiveRecord } from '@constants/archive-list';
import { rustArchiveRecord } from '@constants/rust-reference-list';

export const record = archiveRecord['rust-reference'];

<PolkaContainer
  pageTitle={record.title}
  pageTitleString={record.titleString}
  pageDescription={record.description}
  keywords={['Advance Rust']}
  publishDate={record.createdAt}
  ogImage={record.ogImage}
>

<H1 id={record.titleString} updatedAt={record.updatedAt}>
  {record.title}
</H1>

<Blockquote type="warn">
  These notes are for self reference. I am not intending it
  write for others, instead they are created only for my
  reference, so that I can refer them later for a quick
  walk-through on some advance concepts of Rust.
</Blockquote>

If you are familiar to any Statically Typed language, as well
as Functional Programming language, basics in Rust is quite
easy to grasp. Though, if you don't have a proper background
from some Low Level Language like `C` or `C++` (where Rust
language core actually lies), then some advance concepts like
memory management and pointers would be very hard to understand.

Recently, I have felt that some advance concepts like:

* Smart Pointers for passing around objects
* Multi Threading (Concurrency & Parallelism)
* Asynchronous Programming

are easy to understand, but hard to implement.

This Doc is meant for me to keep a track on these concepts
and also some basics which I seem fit, do
some basic hands-on coding on these concepts to understand
them better and use those notes to later on refer them for
quick start on this language, instead of starting over again.


Keeping these notes will help me to understand Open Source
projects in Rust better.

Even `Lifetimes` is a special concept in `rust` hard to grasp,
and even harder to track in notes.
`Lifetimes` is a concept best learnt by practice.

Cool, Enough talk!!! Let's now add contents for later reference.

## Table of Contents

export const basicsRust = rustArchiveRecord['rust-cargo-basics'];
export const smartPointers = rustArchiveRecord['rust-smart-pointers'];

* <Link href={basicsRust.link}>
    {basicsRust.title}
  </Link>
* <Link href={smartPointers.link}>
    {smartPointers.title}
  </Link>

</PolkaContainer>
