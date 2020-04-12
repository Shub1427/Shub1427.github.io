webpackHotUpdate("static/development/pages/astro-v2.js",{

/***/ "./pages/astro-v2/chap-01.md":
/*!***********************************!*\
  !*** ./pages/astro-v2/chap-01.md ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");


var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/pages/astro-v2/chap-01.md";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 10
    }
  }));
};

const Blockquote = makeShortcode("Blockquote");
const InlineCode = makeShortcode("InlineCode");
const Diff = makeShortcode("Diff");
const CodeBlock = makeShortcode("CodeBlock");
const Image = makeShortcode("Image");
const layoutProps = {};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css",
    integrity: "sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG",
    crossOrigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, "Astro Blaster"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(Blockquote, {
    type: "warn",
    mdxType: "Blockquote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, "NOTE"), ": This Tutorial is not finished and requires a lot of effort and learnings, to properly write the important thing. I am trying to learn Game Dev, using various sources, from scratch using Vulkan API, using minimal game engine like ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(InlineCode, {
    mdxType: "InlineCode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 67
    }
  }, "ggez"), " and Godot Engine. Combining that knowledge and writing that down here will take time."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, "This Tutorial is mostly made up from Astro Blaster example from\nGgez game engine in Rust."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 34
    }
  }, "NOTE"), ": It is assumed that you have little bit experience in Rust lang\nalready. Rust book is a great place to start and learn Rust\nif already not read.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, "What are we Building"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, "We will be building a Nostalgic Astro Blaster Game from 90s.\nThe purpose of this post is to keep an archive for myself (and\nothers), who are very beginners in game programming and does'nt\nknow some basic concepts used in game dev."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 34
    }
  }, "TLDR;"), " You can find the code here: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/Shub1427/rustschool/tree/master/gui/ggez_basics/src/bin/astro_blaster_v2"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 108
    }
  }), "rustschool"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, "Do keep in mind, I am not writing best code, or better said this might be the worst code\never written \uD83D\uDE1C.\nWhat I am trying to achieve here is a minimal understanding for the type of code\nwritten in the world of Game dev, like:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, "How to show some images on screen."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "How to use Game units instead of pixel, to get a resolution independent code.", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 108
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "This is something I will cover later sometime, for now I don't have a good understanding for this."))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, "How to use keyboard for inputs. What ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 68
    }
  }, "Edge-Triggered"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 136
    }
  }, "Level-Triggered"), " keyboard events are.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, "Concepts of applying Physics, once these things are clear becomes easy."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, "Draw Black Background on Screen"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-rs"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 10
    }
  }), "use ggez::event;\nuse ggez::graphics;\nuse ggez::{Context, ContextBuilder, GameResult};\n\nstruct World {\n    stage: usize, // Nothing else for now.\n}\n\nimpl World {\n    fn new() -> Self {\n        World {\n            stage: 0\n        }\n    }\n}\n\nimpl event::EventHandler for World {\n    fn update(&mut self, _ctx: &mut Context) -> GameResult {\n        Ok(())\n    }\n\n    fn draw(&mut self, ctx: &mut Context) -> GameResult {\n        graphics::clear(ctx, graphics::BLACK); // Clear with Black Background\n        graphics::present(ctx)?; // It's important to present the buffer on Screen\n        Ok(())\n    }\n}\n\nfn main() -> GameResult {\n    let (ctx, event_loop) = &mut ContextBuilder::new(\"Astro Blaster v2\", \"Subroto Biswas\")\n        .build()?;\n    let mut state = World::new();\n    event::run(ctx, event_loop, &mut state)\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, "Diff: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/Shub1427/rustschool/commit/74bae4596c1cf1f0bec324946860422023d77d0c"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 18
    }
  }), "74bae4596c1cf1f0bec324946860422023d77d0c")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, "Add an Image Resource root"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }, "We need to to create a Player now. The player needs some image to represent itself.\nThus we need to load resources someway. Following changes, helps us to setup root dir\nto look into for all our resources."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(Diff, {
    lang: "rs",
    addedLineNumbers: [3, 5],
    removedLineNumbers: [],
    hideLines: true,
    mdxType: "Diff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }, "// main.rs\n// in fn main()\nlet resource_dir = \"./src/bin/astro_blaster_v2/resources\";\nlet (ctx, event_loop) = &mut ContextBuilder::new(\"Astro Blaster v2\", \"Subroto Biswas\")\n    .add_resource_path(resource_dir)\n    .build()?;\nlet mut state = World::new();\nevent::run(ctx, event_loop, &mut state)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, "Now, Calling this simple function, will load resources from this root directory.\nFor example:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(CodeBlock, {
    className: "language-rs",
    showLines: false,
    mdxType: "CodeBlock",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }
  }, "let player_image = graphics::Image::new(ctx, \"/player.png\")?;"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }, "So, we now know how to load our resources, we now need to create a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 79
    }
  }, "Player"), " instance and draw it's image\non screen."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }, "First thing, to create a new ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 41
    }
  }, "mod"), " for ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 97
    }
  }, "Player"), " struct and it's implementations."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, "Create a file ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 45
    }
  }, "player.rs"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-rs"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 10
    }
  }), "// player.rs\n\npub struct Player {\n    image: graphics::Image,\n    pos: nalgebra::Point2<f32>,\n    // Player's Facing Direction\n    facing: f32,\n}\n\nimpl Player {\n    pub fn new(ctx: &mut Context) -> GameResult<Self> {\n        Ok(Player {\n            image: graphics::Image::new(ctx, \"/playerShip1_blue.png\")?,\n            pos: nalgebra::Point2::new(24.0, 24.0),\n            facing: 0.,\n        })\n    }\n}\n\nimpl event::EventHandler for Player {\n    fn update(&mut self, _ctx: &mut Context) -> GameResult {\n        // Do nothing for now;\n        Ok(())\n    }\n\n    fn draw(&mut self, ctx: &mut Context) -> GameResult {\n        let params = graphics::DrawParam::default()\n            .dest(self.pos)\n            .scale(nalgebra::Vector2::new(0.5, 0.5));\n        graphics::draw(ctx, &self.image, params)?;\n        Ok(())\n    }\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 5
    }
  }, "Now we just need to call the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 41
    }
  }, "draw"), " implementation of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 112
    }
  }, "Player"), " in ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 170
    }
  }, "World"), "s ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 225
    }
  }, "draw"), " calls."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(Diff, {
    lang: "rs",
    addedLineNumbers: [5],
    removedLineNumbers: [],
    hideLines: true,
    mdxType: "Diff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 5
    }
  }, "// main.rs\n//\nfn draw(&mut self, ctx: &mut Context) -> GameResult {\n    graphics::clear(ctx, graphics::BLACK); // Clear with Black Background\n    self.player.draw(ctx)?;\n    graphics::present(ctx)?; // It's important to present the buffer on Screen\n    Ok(())\n}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 5
    }
  }, "Diff: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/Shub1427/rustschool/commit/c207cd3b5810b7a2775ccffcc77cc4e4db1a7b5e"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 18
    }
  }), "c207cd3b5810b7a2775ccffcc77cc4e4db1a7b5e")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 5
    }
  }, "Move the Player with Keyboard events"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 5
    }
  }, "Ggez uses ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 22
    }
  }, "edge-triggered"), " keyboard events, simulated to look like ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 125
    }
  }, "level-triggered"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 5
    }
  }, "In simple words, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 29
    }
  }, "Edge Triggered"), " refers to single keyboard event, no matter\nhow long we keep the key pressed. For eg. If I have pressed ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 63
    }
  }, "Up"), " button\nand also press ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 18
    }
  }, "Right"), " button after sometime, without leaving the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 115
    }
  }, "Up"), " button, we lose\nevent on ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 12
    }
  }, "Up"), " button, as a new keycode ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 88
    }
  }, "Right"), " overrides it."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }, "Using ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 44
    }
  }, "key_down_event"), " from ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 112
    }
  }, "event::EventHandler"), " trait, actually simulates\nthe above as level triggered, but once the keycode change, old keypress is lost.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 5
    }
  }, "On the other hand, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 31
    }
  }, "Level Triggered"), " refers to continous events, that keeps on triggering\nuntill user stops the keypress. it can also handle more than one keypress at a time."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 5
    }
  }, "To hack ggez to get the desired output from keyboard events, i.e., to get events ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 93
    }
  }, "Up"), "\nand ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }, "Right"), " simultaneously, we use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 84
    }
  }, "input::keyboard::is_key_pressed"), " instead, with\nmultiple ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 12
    }
  }, "if/else"), " instead of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 79
    }
  }, "key_down_event"), " in trait impl."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-rs"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 10
    }
  }), "// player.rs\nimpl Player {\n    ...\n    pub fn handle_events(&mut self, ctx: &mut Context) -> GameResult {\n        let mut dy = 0.;\n        let mut dx = 0.;\n        if input::keyboard::is_key_pressed(ctx, event::KeyCode::Up) {\n            dy = -1.0;\n        }\n        if input::keyboard::is_key_pressed(ctx, event::KeyCode::Right) {\n            dx = 1.0;\n        }\n        if input::keyboard::is_key_pressed(ctx, event::KeyCode::Down) {\n            dy = 1.0;\n        }\n        if input::keyboard::is_key_pressed(ctx, event::KeyCode::Left) {\n            dx = -1.0;\n        }\n        self.pos = nalgebra::Point2::new(self.pos.x + dx, self.pos.y + dy);\n        Ok(())\n    }\n}\n\nimpl event::EventHandler for Player {\n    fn update(&mut self, ctx: &mut Context) -> GameResult {\n        self.handle_events(ctx)?;\n        Ok(())\n    }\n    ...\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 5
    }
  }, "We are directly updating the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 41
    }
  }, "position"), " of the player, instead of deriving it from velocity and time,\nwhich give precise control over the Player's movement. Anyways, for simplicity change the position\ndirectly for now is fine. We will later on update it to use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 63
    }
  }, "velocity * time"), " to get the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 138
    }
  }, "dpos"), " moved\nin unit time."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 5
    }
  }, "Now we just need to call ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 37
    }
  }, "player.update"), " in ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 102
    }
  }, "world.update"), " to reflect it on the screen."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 5
    }
  }, "Diff: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/Shub1427/rustschool/commit/d8a9730f134f056acd451692834722cd75b020a6"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 18
    }
  }), "d8a9730f134f056acd451692834722cd75b020a6")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 5
    }
  }, "Fix the upside down coordinates of screen:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 5
    }
  }, "If you have noticed, I am having negative delta y for ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 66
    }
  }, "UP"), " event (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 124
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 16
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 45
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 74
    }
  }, "d"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 106
    }
  }, "y"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 138
    }
  }, "="), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 170
    }
  }, "\u2212"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mn", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 202
    }
  }, "1.0")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 243
    }
  }), "dy = -1.0")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 72
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.8888799999999999em",
      "verticalAlign": "-0.19444em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 16
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 25
    }
  }), "d"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault",
    "style": {
      "marginRight": "0.03588em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 30
    }
  }), "y"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2777777777777778em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 30
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mrel"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 25
    }
  }), "="), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2777777777777778em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 30
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 32
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.72777em",
      "verticalAlign": "-0.08333em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 16
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 25
    }
  }), "\u2212"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 30
    }
  }), "1"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 30
    }
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 30
    }
  }), "0"))))), "), that's because\nour world right now is upside down. This is because Screen coordinates in computer graphics has\norigin at ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 13
    }
  }, "top-left"), " corner, where ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 84
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 16
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 45
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 74
    }
  }, "+"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 106
    }
  }, "X"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 138
    }
  }, "\u2212"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 170
    }
  }, "a"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 202
    }
  }, "x"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 234
    }
  }, "i"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 266
    }
  }, "s")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 305
    }
  }), "+X-axis")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 70
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.76666em",
      "verticalAlign": "-0.08333em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 16
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 25
    }
  }), "+"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault",
    "style": {
      "marginRight": "0.07847em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 30
    }
  }), "X"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2222222222222222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 30
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mbin"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 25
    }
  }), "\u2212"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2222222222222222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 30
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 32
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.65952em",
      "verticalAlign": "0em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 16
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 25
    }
  }), "a"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 30
    }
  }), "x"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 30
    }
  }), "i"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 30
    }
  }), "s"))))), " goes towards right of the screen and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 100
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 16
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 45
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 74
    }
  }, "+"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 106
    }
  }, "Y"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 138
    }
  }, "\u2212"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 170
    }
  }, "a"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 202
    }
  }, "x"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 234
    }
  }, "i"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 266
    }
  }, "s")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 305
    }
  }), "+Y-axis")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 70
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.76666em",
      "verticalAlign": "-0.08333em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 16
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 25
    }
  }), "+"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault",
    "style": {
      "marginRight": "0.22222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 30
    }
  }), "Y"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2222222222222222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 30
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mbin"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 25
    }
  }), "\u2212"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2222222222222222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 30
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 32
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.65952em",
      "verticalAlign": "0em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 16
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 25
    }
  }), "a"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 30
    }
  }), "x"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 30
    }
  }), "i"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 30
    }
  }), "s"))))), " goes\nto the bottom of the screen. We need to revert it back to how we use coordinates in real world, so\nthat our usual Physics and Maths can be applied as is."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(Diff, {
    lang: "rs",
    addedLineNumbers: [5, 6, 7, 11, 12, 18, 19, 20, 21],
    removedLineNumbers: [],
    hideLines: true,
    mdxType: "Diff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 5
    }
  }, "// physics.rs\n...\npub fn new(ctx: &mut Context) -> GameResult<Self> {\n    let image = graphics::Image::new(ctx, \"/playerShip1_blue.png\")?;\n    let pos = nalgebra::Point2::new(72.0, 0.0);\n    let y_offset = constants::VIEWPORT_HEIGHT - image.height() as f32;\n    let bbox = graphics::Rect::new(0., 0., image.width() as f32, image.height() as f32);\n    Ok(Player {\n        image,\n        pos,\n        offset: nalgebra::Vector2::new(0.0, y_offset),\n        bbox,\n        facing: 0.,\n    })\n}\n...\nfn draw(&mut self, ctx: &mut Context) -> GameResult {\n    let reverted_pos = nalgebra::Point2::new(\n        self.offset.x + self.pos.x,\n        self.offset.y - self.pos.y\n    );\n    let params = graphics::DrawParam::new()\n        .dest(reverted_pos);\n    ...\n}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 5
    }
  }, "We are drawing the image with an offset, where whatever the Y position is, we will subtract it to\nwindow height and add image height, to keep the origin of the image still at top-left corner of the image,\nbut any delta modification can be done with natural ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 55
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 16
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 45
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 74
    }
  }, "X"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 106
    }
  }, "\u2212"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 138
    }
  }, "Y"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 170
    }
  }, "a"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 202
    }
  }, "x"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 234
    }
  }, "i"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 266
    }
  }, "s")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 305
    }
  }), "X-Y axis")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 71
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.76666em",
      "verticalAlign": "-0.08333em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 16
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault",
    "style": {
      "marginRight": "0.07847em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 25
    }
  }), "X"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2222222222222222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 30
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mbin"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 25
    }
  }), "\u2212"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2222222222222222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 30
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 32
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.68333em",
      "verticalAlign": "0em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 16
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault",
    "style": {
      "marginRight": "0.22222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 25
    }
  }), "Y"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 30
    }
  }), "a"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 30
    }
  }), "x"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 30
    }
  }), "i"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 30
    }
  }), "s"))))), ", without worrying about the inversion."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 5
    }
  }, "Note that ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 22
    }
  }, "bbox"), " added to player is just for debugging purpose and not actually required for our game."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 5
    }
  }, "Add Physics to Player's Movements:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 5
    }
  }, "Moving in the world with some max velocity and constant accelaration, applied to the spaceship\nwhen user presses direction buttons."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 5
    }
  }, "Keeping Acceleration (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 34
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 16
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 45
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 74
    }
  }, "a")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 113
    }
  }), "a")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 64
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.43056em",
      "verticalAlign": "0em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 16
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 25
    }
  }), "a"))))), ") constant and having a max velocity (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 100
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 16
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 45
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 74
    }
  }, "V")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 113
    }
  }), "V")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 64
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.68333em",
      "verticalAlign": "0em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 16
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault",
    "style": {
      "marginRight": "0.22222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 25
    }
  }), "V"))))), "), we can derive,\ndistance travelled in unit time:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 7
    }
  }, "Acceleration is: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 48
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 18
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 47
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 76
    }
  }, "a"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 108
    }
  }, "="), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mfrac", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 140
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mfrac",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 165
    }
  }, "v"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mfrac",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 198
    }
  }, "t"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 246
    }
  }), "a = \\frac{v}{t}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 81
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.43056em",
      "verticalAlign": "0em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 18
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 27
    }
  }), "a"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2777777777777778em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 32
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mrel"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 27
    }
  }), "="), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2777777777777778em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 32
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 34
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "1.040392em",
      "verticalAlign": "-0.345em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 18
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 27
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mopen nulldelimiter"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 20
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mfrac"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 29
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-t vlist-t2"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603,
      columnNumber: 22
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-r"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 24
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist",
    "style": {
      "height": "0.695392em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607,
      columnNumber: 26
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "style": {
      "top": "-2.6550000000000002em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612,
      columnNumber: 28
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "pstrut",
    "style": {
      "height": "3em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616,
      columnNumber: 30
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "sizing reset-size6 size3 mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621,
      columnNumber: 39
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
      columnNumber: 32
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 34
    }
  }), "t")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "style": {
      "top": "-3.23em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
      columnNumber: 69
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "pstrut",
    "style": {
      "height": "3em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
      columnNumber: 30
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "frac-line",
    "style": {
      "borderBottomWidth": "0.04em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636,
      columnNumber: 39
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "style": {
      "top": "-3.394em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 641,
      columnNumber: 46
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "pstrut",
    "style": {
      "height": "3em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645,
      columnNumber: 30
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "sizing reset-size6 size3 mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650,
      columnNumber: 39
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 32
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault mtight",
    "style": {
      "marginRight": "0.03588em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654,
      columnNumber: 34
    }
  }), "v"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-s"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 76
    }
  }), "\u200B")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-r"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661,
      columnNumber: 47
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist",
    "style": {
      "height": "0.345em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663,
      columnNumber: 26
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", {
    parentName: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668,
      columnNumber: 28
    }
  }))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mclose nulldelimiter"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668,
      columnNumber: 87
    }
  }))))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670,
      columnNumber: 64
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
      columnNumber: 11
    }
  }, "So at any instant: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
      columnNumber: 54
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675,
      columnNumber: 18
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677,
      columnNumber: 20
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679,
      columnNumber: 22
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679,
      columnNumber: 51
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679,
      columnNumber: 80
    }
  }, "v"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679,
      columnNumber: 112
    }
  }, "="), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679,
      columnNumber: 144
    }
  }, "a"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679,
      columnNumber: 176
    }
  }, "\xD7"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679,
      columnNumber: 208
    }
  }, "t")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679,
      columnNumber: 247
    }
  }), "v = a \\times t")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681,
      columnNumber: 84
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 20
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.43056em",
      "verticalAlign": "0em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 22
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault",
    "style": {
      "marginRight": "0.03588em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692,
      columnNumber: 31
    }
  }), "v"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2777777777777778em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697,
      columnNumber: 36
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mrel"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702,
      columnNumber: 31
    }
  }), "="), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2777777777777778em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704,
      columnNumber: 36
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 709,
      columnNumber: 38
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.66666em",
      "verticalAlign": "-0.08333em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 711,
      columnNumber: 22
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717,
      columnNumber: 31
    }
  }), "a"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2222222222222222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 719,
      columnNumber: 36
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mbin"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724,
      columnNumber: 31
    }
  }), "\xD7"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2222222222222222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726,
      columnNumber: 36
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 731,
      columnNumber: 38
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.61508em",
      "verticalAlign": "0em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733,
      columnNumber: 22
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739,
      columnNumber: 31
    }
  }), "t")))))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743,
      columnNumber: 7
    }
  }, "Once velocity is found, we can derive distance from that velocity,\nfor that instant ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 744,
      columnNumber: 20
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 748,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 750,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752,
      columnNumber: 18
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752,
      columnNumber: 47
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752,
      columnNumber: 76
    }
  }, "d"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752,
      columnNumber: 108
    }
  }, "="), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752,
      columnNumber: 140
    }
  }, "v"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752,
      columnNumber: 172
    }
  }, "\xD7"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752,
      columnNumber: 204
    }
  }, "t")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752,
      columnNumber: 243
    }
  }), "d = v \\times t")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754,
      columnNumber: 80
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.69444em",
      "verticalAlign": "0em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759,
      columnNumber: 18
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765,
      columnNumber: 27
    }
  }), "d"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2777777777777778em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767,
      columnNumber: 32
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mrel"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772,
      columnNumber: 27
    }
  }), "="), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2777777777777778em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774,
      columnNumber: 32
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779,
      columnNumber: 34
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.66666em",
      "verticalAlign": "-0.08333em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 781,
      columnNumber: 18
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault",
    "style": {
      "marginRight": "0.03588em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 787,
      columnNumber: 27
    }
  }), "v"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2222222222222222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 792,
      columnNumber: 32
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mbin"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 797,
      columnNumber: 27
    }
  }), "\xD7"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2222222222222222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 799,
      columnNumber: 32
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 804,
      columnNumber: 34
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.61508em",
      "verticalAlign": "0em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 806,
      columnNumber: 18
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 812,
      columnNumber: 27
    }
  }), "t"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 814,
      columnNumber: 60
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815,
      columnNumber: 11
    }
  }, "Keeping a check for ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815,
      columnNumber: 55
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 817,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 819,
      columnNumber: 18
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 821,
      columnNumber: 20
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823,
      columnNumber: 22
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823,
      columnNumber: 51
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823,
      columnNumber: 80
    }
  }, "v"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823,
      columnNumber: 112
    }
  }, "\u2264"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823,
      columnNumber: 144
    }
  }, "V")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823,
      columnNumber: 183
    }
  }), "v \\leq V")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 825,
      columnNumber: 78
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828,
      columnNumber: 20
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.7719400000000001em",
      "verticalAlign": "-0.13597em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830,
      columnNumber: 22
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault",
    "style": {
      "marginRight": "0.03588em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 836,
      columnNumber: 31
    }
  }), "v"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2777777777777778em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841,
      columnNumber: 36
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mrel"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 846,
      columnNumber: 31
    }
  }), "\u2264"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2777777777777778em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 848,
      columnNumber: 36
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 853,
      columnNumber: 38
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.68333em",
      "verticalAlign": "0em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 855,
      columnNumber: 22
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault",
    "style": {
      "marginRight": "0.22222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 861,
      columnNumber: 31
    }
  }), "V"))))))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 869,
      columnNumber: 5
    }
  }, "Once ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 869,
      columnNumber: 17
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 871,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 873,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 875,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 877,
      columnNumber: 16
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 877,
      columnNumber: 45
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 877,
      columnNumber: 74
    }
  }, "d")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 877,
      columnNumber: 113
    }
  }), "d")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 879,
      columnNumber: 64
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 882,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.69444em",
      "verticalAlign": "0em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 884,
      columnNumber: 16
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 890,
      columnNumber: 25
    }
  }), "d"))))), " is found, we can use it as our delta distance, that will be added to current position.\nNow everything defined above is for 1D, but we are making game for 2D, so we need direction as well.\nOur Acceleration (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 894,
      columnNumber: 21
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 896,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 898,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 900,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 902,
      columnNumber: 16
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 902,
      columnNumber: 45
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 902,
      columnNumber: 74
    }
  }, "a")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 902,
      columnNumber: 113
    }
  }), "a")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 904,
      columnNumber: 64
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 907,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.43056em",
      "verticalAlign": "0em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 909,
      columnNumber: 16
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 915,
      columnNumber: 25
    }
  }), "a"))))), ") and Velocity (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 917,
      columnNumber: 78
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 919,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 921,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 923,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 925,
      columnNumber: 16
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 925,
      columnNumber: 45
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 925,
      columnNumber: 74
    }
  }, "v")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 925,
      columnNumber: 113
    }
  }), "v")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 927,
      columnNumber: 64
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 930,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.43056em",
      "verticalAlign": "0em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 932,
      columnNumber: 16
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault",
    "style": {
      "marginRight": "0.03588em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 938,
      columnNumber: 25
    }
  }), "v"))))), ") both will have a direction bound to it. We need to go back\nto the basics of trignometry now."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 945,
      columnNumber: 5
    }
  }, "Use Resolution independent Game Units:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(Blockquote, {
    type: "warn",
    mdxType: "Blockquote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 946,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 947,
      columnNumber: 5
    }
  }, "NOTE"), ": I will elaborate on this topic, when I will feel more confident on how to achieve it more naturally. Actually I want to use Game Units that resembles Natural Units like", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(InlineCode, {
    mdxType: "InlineCode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 949,
      columnNumber: 5
    }
  }, "meters"), ", where the viewport can be considered in meters. Something, like 10 pixels equals 1 meter. For now using that logic in game is getting difficult for me, thus will keep using pixels directly"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 953,
      columnNumber: 5
    }
  }, "Our game is very simple till now, and it will remain the same for sometime. So it is very hard\nto justify, how a movement of player done using pixel calculation is any different from using\nsome random Game unit. To properly understand, please follow the coming image demonstrations carefully."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(Image, {
    src: "https://user-images.githubusercontent.com/11786283/79068488-e4b9f000-7ce4-11ea-834b-2f36ebf49edd.png",
    placeholder: "https://user-images.githubusercontent.com/11786283/79068483-d4a21080-7ce4-11ea-9cb5-f5f6a13f4b2c.png",
    alt: "Descriptive relative speed to varying viewport or the world",
    mdxType: "Image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 956,
      columnNumber: 5
    }
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=astro-v2.js.67af657b5afc5db83180.hot-update.js.map