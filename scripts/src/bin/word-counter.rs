/**
 * Personal Word Counter Script in Rust.
 *
 * Normally Parsing of templates should be done using
 * ASTs, for better performance, but for simplicity sake
 * I haven't delved too much into AST (which I need to learn myself).
 *
 * Following implementation is not accurate, but gives a close count
 * of actual words removing HTML Tags and code snippets. Though, the
 * count does contain some arbritary extra word counts for inline-code
 * and `_` char.
 */
use std::io::{self, Read};
use regex::{Regex, RegexBuilder, Captures};

fn main() -> io::Result<()> {
    let mut buffer = String::new();
    io::stdin().read_to_string(&mut buffer)?;

    let re1 = Regex::new(r"<\s*[^>]*>(.*?)<\s*/.*\s*>").unwrap();
    let re2 = Regex::new(r"<\s*[^>]*/?>|<\s*/.*\s*>").unwrap();
    let re3 = RegexBuilder::new(r"^(`{3}\w)[^`]*(`{3})$")
        .multi_line(true)
        .dot_matches_new_line(true)
        .build()
        .unwrap();
    let return_to_space = Regex::new(r"\n").unwrap();
    let space_re = Regex::new(r"\s").unwrap();

    let word_counter_re = RegexBuilder::new(r"[^\s#\*]*")
        .multi_line(true)
        .dot_matches_new_line(true)
        .build()
        .unwrap();

    let result = re1.replace_all(buffer.as_str(), |caps: &Captures| {
        format!("{}", &caps[1])
    });
    let result = result.into_owned();
    let result = re2.replace_all(result.as_str(), "");
    let result = result.into_owned();
    let result = re3.replace_all(result.as_str(), "");
    let result = result.into_owned();
    let result = return_to_space.replace_all(result.as_str(), " ");

    let result = result.into_owned();

    let mut word_count = 0;
    for caps in word_counter_re.captures_iter(result.as_str()) {
        word_count += caps
            .iter()
            .filter(|string| !space_re.is_match(string.unwrap().as_str()))
            .count();
    }

    println!("{}", word_count);

    Ok(())
}
