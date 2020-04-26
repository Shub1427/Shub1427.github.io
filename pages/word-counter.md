<PolkaContainer>

# Word Counter
<NoteSubtitle date={new Date("2020/04/26")} totalWords={564} />

This is a fun script, that I am trying out to learn rust. Also benifitting myself,
with a script that will automate to get an approx. count of words from my MDX notes,
which later on will help me to get the read time per notes.

<Blockquote type="warn">
The Word Counter code is written in 2hrs time, and is not optimal. It uses
brute force to remove templates matched by different <InlineCode>regex</InlineCode>
expressions, one by one in sequence. I will someday improve this script, to use AST
for better perfomance and accurate results.
<br/>
<br/>
<i>
  References to read later:
  <br/>
  <Link href="https://ruslanspivak.com/lsbasi-part1/" target="_blank">
    Let's build an Interpreter
  </Link>
  &nbsp;and&nbsp;
  <Link href="https://compilers.iecc.com/crenshaw/" target="_blank">
    Let's build a Compiler
  </Link>
  .
</i>
</Blockquote>

## Code Breakup

First of all, I am using `regex` crate, which is offical crate support by Rust.

Using `regex` is simple and it uses [RE2](https://github.com/google/re2/wiki/Syntax) syntax,
which is a superset for Javascript [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

Reading data from `stdin`, required as we will use our build as a pipe function later:

```rs
use std::io::{self, Read};
...
let mut buffer = String::new();
io::stdin().read_to_string(&mut buffer)?;
...
```

Now we need few regular expressions to be pre-compiled, so as to use them later

```rs.true
use regex::{Regex, RegexBuilder, Captures};
...
let re1 = Regex::new(r"<\s*[^>]*>(.*?)<\s*/.*\s*>").unwrap();
let re2 = Regex::new(r"<\s*[^>]*/?>|<\s*/.*\s*>").unwrap();
let re3 = RegexBuilder::new(r"^(`{3}\w)[^`]*(`{3})$")
    .multi_line(true)
    .dot_matches_new_line(true)
    .build()
...
```

__Line 3.__ creates a regex for all HTML Container Tags, extracting out the inner strings,
so as to word count them later.

__Line 4.__ creates a regex from all HTML Empty Tags and previously uncatched Opening/Closing Tags.

__Line 5.__ helps to create a multi-line flagged regexp, so as to match all the Code Blocks.

> Note: Code Diff Blocks are still remaining to be checked. Currently the content inside Code
> Diff block will be part of Word counts.

All the above regex will later on be used to replace their matches with empty string,
so as to remove them. :tada: :v:

### Some more regex:

```rs
let return_to_space = Regex::new(r"\n").unwrap();
let space_re = Regex::new(r"\s").unwrap();
```

`return_to_space` regex will be used to remove all the remaing `return`s from the output string,
that we will get, using previous regex.

`space_re` regex, will later on be used to filter out extra spaces, so as to improve word count
accuracy.

### Final Regex to extract Words

```rs
let word_counter_re = RegexBuilder::new(r"[^\s#\*]*")
  .multi_line(true)
  .dot_matches_new_line(true)
  .build()
  .unwrap();
```

Do note, above regex is not for pure words, as in our `mdx` files, we have inline code-snippets,
and more stuff, which breaks if `\w+` is directly used. Thus we needed to get all chars which are
not space, `#` and `*`. I know, this regex might be incomplete, or needs more chars for proper filter,
but for now it's fine as we need approximate results, not accurate.

<br/>

Finally, using the above regex and filtering our extra spaces, we can get an approximate
count of all the words present in our Notes, so as to later on generate Read Time for
our Notes.

<br/>

> You can find full code, for this note, [here](https://github.com/Shub1427/shub1427.github.io/tree/react/scripts/src/bin/word-counter.rs).

***

</PolkaContainer>
