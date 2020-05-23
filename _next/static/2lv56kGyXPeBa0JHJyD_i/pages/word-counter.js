(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"30MA":function(e,t,r){"use strict";r.r(t),r.d(t,"record",(function(){return l})),r.d(t,"default",(function(){return O}));var n=r("wx14"),a=r("Ff2n"),o=r("q1tI"),i=r.n(o),c=r("7ljp"),s=r("k333"),l=(i.a.createElement,s.b["word-counter"]),u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},p=u("PolkaContainer"),b=u("H1"),d=u("Blockquote"),f=u("InlineCode"),m=u("Link"),g={record:l},h="wrapper";function O(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)(h,Object(n.a)({},g,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)(p,{pageTitle:l.title,pageDescription:l.description,keywords:["Word Counter"],publishDate:l.createdAt,ogImage:l.ogImage,mdxType:"PolkaContainer"},Object(c.b)(b,{updatedAt:l.updatedAt,mdxType:"H1"},"Word Counter"),Object(c.b)("p",null,"This is a fun script, that I am trying out to learn rust. Also benefitting myself,\nwith a script that will automate to get an approx. count of words from my MDX notes,\nwhich later on will help me to get the read time per notes."),Object(c.b)(d,{type:"warn",mdxType:"Blockquote"},"The Word Counter code is written in 2hrs time, and is not optimal. It uses brute force to remove templates matched by different ",Object(c.b)(f,{mdxType:"InlineCode"},"regex"),"expressions, one by one in sequence. I will someday improve this script, to use AST for better performance and accurate results.",Object(c.b)("br",null),Object(c.b)("br",null),Object(c.b)("i",null,"References to read later:",Object(c.b)("br",null),Object(c.b)("ul",null,Object(c.b)("li",null,Object(c.b)(m,{href:"https://github.com/syntax-tree/unist#syntax-tree",target:"_blank",rel:"noopener noreferrer",mdxType:"Link"},"Syntax Tree")),Object(c.b)("li",null,Object(c.b)(m,{href:"https://ruslanspivak.com/lsbasi-part1/",target:"_blank",rel:"noopener noreferrer",mdxType:"Link"},"Let's build an Interpreter")),Object(c.b)("li",null,Object(c.b)(m,{href:"https://compilers.iecc.com/crenshaw/",target:"_blank",rel:"noopener noreferrer",mdxType:"Link"},"Let's build a Compiler"))))),Object(c.b)("h2",null,"Code Breakup"),Object(c.b)("p",null,"First of all, I am using ",Object(c.b)("inlineCode",{parentName:"p"},"regex")," crate, which is official crate support by Rust."),Object(c.b)("p",null,"Using ",Object(c.b)("inlineCode",{parentName:"p"},"regex")," is simple and it uses ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/google/re2/wiki/Syntax"}),"RE2")," syntax,\nwhich is a superset for Javascript ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp"}),"RegExp"),"."),Object(c.b)("p",null,"Reading data from ",Object(c.b)("inlineCode",{parentName:"p"},"stdin"),", required as we will use our build as a pipe function later:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rs"}),"use std::io::{self, Read};\n...\nlet mut buffer = String::new();\nio::stdin().read_to_string(&mut buffer)?;\n...\n")),Object(c.b)("p",null,"Now we need few regular expressions to be pre-compiled, so as to use them later"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rs.true"}),'use regex::{Regex, RegexBuilder, Captures};\n...\nlet re1 = Regex::new(r"<\\s*[^>]*>(.*?)<\\s*/.*\\s*>").unwrap();\nlet re2 = Regex::new(r"<\\s*[^>]*/?>|<\\s*/.*\\s*>").unwrap();\nlet re3 = RegexBuilder::new(r"^(`{3}\\w)[^`]*(`{3})$")\n    .multi_line(true)\n    .dot_matches_new_line(true)\n    .build()\n...\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Line 3.")," creates a regex for all HTML Container Tags, extracting out the inner strings,\nso as to word count them later."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Line 4.")," creates a regex from all HTML Empty Tags and previously uncaught Opening/Closing Tags."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Line 5.")," helps to create a multi-line flagged regexp, so as to match all the Code Blocks."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Note: Code Diff Blocks are still remaining to be checked. Currently the content inside Code\nDiff block will be part of Word counts.")),Object(c.b)("p",null,"All the above regex will later on be used to replace their matches with empty string,\nso as to remove them. \ud83c\udf89 \u270c\ufe0f"),Object(c.b)("h3",null,"Some more regex:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rs"}),'let return_to_space = Regex::new(r"\\n").unwrap();\nlet space_re = Regex::new(r"\\s").unwrap();\n')),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"return_to_space")," regex will be used to remove all the remaining ",Object(c.b)("inlineCode",{parentName:"p"},"return"),"s from the output string,\nthat we will get, using previous regex."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"space_re")," regex, will later on be used to filter out extra spaces, so as to improve word count\naccuracy."),Object(c.b)("h3",null,"Final Regex to extract Words"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rs"}),'let word_counter_re = RegexBuilder::new(r"[^\\s#\\*]*")\n  .multi_line(true)\n  .dot_matches_new_line(true)\n  .build()\n  .unwrap();\n')),Object(c.b)("p",null,"Do note, above regex is not for pure words, as in our ",Object(c.b)("inlineCode",{parentName:"p"},"mdx")," files, we have inline code-snippets,\nand more stuff, which breaks if ",Object(c.b)("inlineCode",{parentName:"p"},"\\w+")," is directly used. Thus we needed to get all chars which are\nnot space, ",Object(c.b)("inlineCode",{parentName:"p"},"#")," and ",Object(c.b)("inlineCode",{parentName:"p"},"*"),". I know, this regex might be incomplete, or needs more chars for proper filter,\nbut for now it's fine as we need approximate results, not accurate."),Object(c.b)("br",null),Object(c.b)("p",null,"Finally, using the above regex and filtering our extra spaces, we can get an approximate\ncount of all the words present in our Notes, so as to later on generate Read Time for\nour Notes."),Object(c.b)("br",null),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"You can find full code, for this note, ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Shub1427/shub1427.github.io/tree/react/scripts/src/bin/word-counter.rs"}),"here"),".")),Object(c.b)("hr",null)))}O.isMDXComponent=!0},"7ljp":function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r("q1tI"),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"===typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return(a.a.createElement(l.Provider,{value:t},e.children))},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(f,c({ref:t},l,{components:r})):a.a.createElement(f,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[b]="string"===typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},BvZD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/word-counter",function(){return r("30MA")}])},Ff2n:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("zLVn");function a(e,t){if(null==e)return{};var r,a,o=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}},Q88C:function(e,t,r){"use strict";var n;r.d(t,"a",(function(){return n})),function(e){e.TUTORIAL="tutorial",e.PROJECT="project",e.RESEARCH="research",e.RUST="rust",e.JS="javascript",e.REACT="reactjs",e.GFX_HAL="gfx-hal"}(n||(n={}))},Qetd:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},k333:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return o}));var n=r("Q88C"),a={"rust-reference":{key:"rust-reference",link:"/rust-reference",title:"Advance Rust Reference",description:"Some advance concepts in Rust that were difficult for me to understand.       This Doc is trying to keep a reference of all those topics, for me to take       a reference from later for easier understanding",ogImage:"https://user-images.githubusercontent.com/11786283/82665354-47da6300-9c51-11ea-87c7-bb996eb79de1.jpg",tags:[n.a.RUST],createdAt:new Date("2020/05/22 17:25:00"),updatedAt:new Date("2020/05/09 17:25:00"),isPublished:!0},"performance-reactjs":{key:"performance-reactjs",link:"/performance-reactjs",title:"Performance Improvements in JS and ReactJS",description:"Recent Performance related findings of mine, which I am jotting down here for later reference",ogImage:"https://user-images.githubusercontent.com/11786283/81769128-6f675800-94fa-11ea-99d6-57dc42166eaa.jpg",tags:[n.a.RESEARCH,n.a.JS,n.a.REACT],createdAt:new Date("2020/05/07 09:15:00"),updatedAt:new Date("2020/05/09 23:15:00"),isPublished:!0},"upload-client-logs":{key:"upload-client-logs",link:"/upload-client-logs",title:"Client Browser Log to your Server",description:"Sometimes (like to get details on performance) there is a requirement to log data       from end-user's browser to you own servers, for which this note will talk about.",ogImage:"https://user-images.githubusercontent.com/11786283/81769041-37601500-94fa-11ea-98f7-f353dca53e6b.jpg",tags:[n.a.PROJECT,n.a.JS,n.a.REACT],createdAt:new Date("2020/04/29 08:30:00"),updatedAt:new Date("2020/05/09 12:30:00"),isPublished:!0},"word-counter":{key:"word-counter",link:"/word-counter",title:"Word Counter in Rust",description:"Just a fun bin script for my project, to count words in my MDX files.",ogImage:"https://user-images.githubusercontent.com/11786283/81768977-fd8f0e80-94f9-11ea-8425-953f8639d80e.jpg",tags:[n.a.PROJECT,n.a.RUST],createdAt:new Date("2020/04/26 22:00:00"),updatedAt:new Date("2020/04/26 22:00:00"),isPublished:!0},"gfx-hal-basics":{key:"gfx-hal-basics",link:"/gfx-hal-initials",title:"Basics on Vulkan using gfx-hal",description:"Reference Notes for me (and others) to help get started with Rust and Vulkan",ogImage:"https://user-images.githubusercontent.com/11786283/81768708-514d2800-94f9-11ea-95d3-36796815a31f.jpg",tags:[n.a.TUTORIAL,n.a.RUST],createdAt:new Date("2020/04/26 10:00:00"),updatedAt:new Date("2020/04/26 16:00:00"),isPublished:!0},"astro-v2":{key:"astro-v2",link:"/astro-v2",title:"Astro Blaster v2 in Rust",description:"A very minimal game making tutorial in Rust using ggez",ogImage:"https://user-images.githubusercontent.com/11786283/81768159-f1a24d00-94f7-11ea-83e3-8b9212d4851c.jpg",tags:[n.a.TUTORIAL,n.a.RUST],createdAt:new Date("2020/04/10"),updatedAt:new Date("2020/04/12"),isPublished:!0}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(t,r){return Object.prototype.hasOwnProperty.call(e,r)&&t.push(e[r]),t}),[])}(a)},wx14:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},zLVn:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))}},[["BvZD",0,1]]]);