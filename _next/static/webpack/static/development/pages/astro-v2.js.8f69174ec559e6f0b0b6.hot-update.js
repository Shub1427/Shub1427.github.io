webpackHotUpdate("static/development/pages/astro-v2.js",{

/***/ "./pages/astro-v2/index.md":
/*!*********************************!*\
  !*** ./pages/astro-v2/index.md ***!
  \*********************************/
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
/* harmony import */ var _constants_archive_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/archive-list */ "./constants/archive-list.ts");


var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/pages/astro-v2/index.md";
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

const PolkaContainer = makeShortcode("PolkaContainer");
const H1 = makeShortcode("H1");
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
      lineNumber: 27,
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
      lineNumber: 29,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(PolkaContainer, {
    mdxType: "PolkaContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(H1, {
    updatedAt: _constants_archive_list__WEBPACK_IMPORTED_MODULE_4__["archiveRecord"]['astro-v2'].updatedAt,
    wordCount: 1200,
    mdxType: "H1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "Astro Blaster"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(Blockquote, {
    type: "warn",
    mdxType: "Blockquote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, "NOTE"), ": This Tutorial is not finished and requires a lot of effort and learnings, to properly write the important thing. I am trying to learn Game Dev, using various sources, from scratch using Vulkan API, using minimal game engine like ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(InlineCode, {
    mdxType: "InlineCode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 67
    }
  }, "ggez"), " and Godot Engine. Combining that knowledge and writing that down here will take time."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "This Tutorial is mostly made up from Astro Blaster example from\nGgez game engine in Rust."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 36
    }
  }, "NOTE"), ": It is assumed that you have little bit experience in Rust lang\nalready. Rust book is a great place to start and learn Rust\nif already not read.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "What are we Building"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, "We will be building a Nostalgic Astro Blaster Game from 90s.\nThe purpose of this post is to keep an archive for myself (and\nothers), who are very beginners in game programming and does'nt\nknow some basic concepts used in game dev."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 36
    }
  }, "TLDR;"), " You can find the code here: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/Shub1427/rustschool/tree/master/gui/ggez_basics/src/bin/astro_blaster_v2"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 110
    }
  }), "rustschool"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "Do keep in mind, I am not writing best code, or better said this might be the worst code\never written \uD83D\uDE1C.\nWhat I am trying to achieve here is a minimal understanding for the type of code\nwritten in the world of Game dev, like:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, "How to show some images on screen."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "How to use Game units instead of pixel, to get a resolution independent code.", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 110
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "This is something I will cover later sometime, for now I don't have a good understanding for this."))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, "How to use keyboard for inputs. What ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 70
    }
  }, "Edge-Triggered"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 138
    }
  }, "Level-Triggered"), " keyboard events are.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, "Concepts of applying Physics, once these things are clear becomes easy."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, "Draw Black Background on Screen"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-rs"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 12
    }
  }), "use ggez::event;\nuse ggez::graphics;\nuse ggez::{Context, ContextBuilder, GameResult};\n\nstruct World {\n    stage: usize, // Nothing else for now.\n}\n\nimpl World {\n    fn new() -> Self {\n        World {\n            stage: 0\n        }\n    }\n}\n\nimpl event::EventHandler for World {\n    fn update(&mut self, _ctx: &mut Context) -> GameResult {\n        Ok(())\n    }\n\n    fn draw(&mut self, ctx: &mut Context) -> GameResult {\n        graphics::clear(ctx, graphics::BLACK); // Clear with Black Background\n        graphics::present(ctx)?; // It's important to present the buffer on Screen\n        Ok(())\n    }\n}\n\nfn main() -> GameResult {\n    let (ctx, event_loop) = &mut ContextBuilder::new(\"Astro Blaster v2\", \"Subroto Biswas\")\n        .build()?;\n    let mut state = World::new();\n    event::run(ctx, event_loop, &mut state)\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, "Diff: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/Shub1427/rustschool/commit/74bae4596c1cf1f0bec324946860422023d77d0c"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 20
    }
  }), "74bae4596c1cf1f0bec324946860422023d77d0c")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, "Add an Image Resource root"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
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
      lineNumber: 114,
      columnNumber: 7
    }
  }, "// main.rs\n// in fn main()\nlet resource_dir = \"./src/bin/astro_blaster_v2/resources\";\nlet (ctx, event_loop) = &mut ContextBuilder::new(\"Astro Blaster v2\", \"Subroto Biswas\")\n    .add_resource_path(resource_dir)\n    .build()?;\nlet mut state = World::new();\nevent::run(ctx, event_loop, &mut state)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }, "Now, Calling this simple function, will load resources from this root directory.\nFor example:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(CodeBlock, {
    className: "language-rs",
    showLines: false,
    mdxType: "CodeBlock",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, "let player_image = graphics::Image::new(ctx, \"/player.png\")?;"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, "So, we now know how to load our resources, we now need to create a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 81
    }
  }, "Player"), " instance and draw it's image\non screen."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, "First thing, to create a new ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 43
    }
  }, "mod"), " for ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 99
    }
  }, "Player"), " struct and it's implementations."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, "Create a file ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 47
    }
  }, "player.rs"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-rs"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 12
    }
  }), "// player.rs\n\npub struct Player {\n    image: graphics::Image,\n    pos: nalgebra::Point2<f32>,\n    // Player's Facing Direction\n    facing: f32,\n}\n\nimpl Player {\n    pub fn new(ctx: &mut Context) -> GameResult<Self> {\n        Ok(Player {\n            image: graphics::Image::new(ctx, \"/playerShip1_blue.png\")?,\n            pos: nalgebra::Point2::new(24.0, 24.0),\n            facing: 0.,\n        })\n    }\n}\n\nimpl event::EventHandler for Player {\n    fn update(&mut self, _ctx: &mut Context) -> GameResult {\n        // Do nothing for now;\n        Ok(())\n    }\n\n    fn draw(&mut self, ctx: &mut Context) -> GameResult {\n        let params = graphics::DrawParam::default()\n            .dest(self.pos)\n            .scale(nalgebra::Vector2::new(0.5, 0.5));\n        graphics::draw(ctx, &self.image, params)?;\n        Ok(())\n    }\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }, "Now we just need to call the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 43
    }
  }, "draw"), " implementation of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 114
    }
  }, "Player"), " in ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 172
    }
  }, "World"), "s ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 227
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
      lineNumber: 169,
      columnNumber: 7
    }
  }, "// main.rs\n//\nfn draw(&mut self, ctx: &mut Context) -> GameResult {\n    graphics::clear(ctx, graphics::BLACK); // Clear with Black Background\n    self.player.draw(ctx)?;\n    graphics::present(ctx)?; // It's important to present the buffer on Screen\n    Ok(())\n}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }
  }, "Diff: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/Shub1427/rustschool/commit/c207cd3b5810b7a2775ccffcc77cc4e4db1a7b5e"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 20
    }
  }), "c207cd3b5810b7a2775ccffcc77cc4e4db1a7b5e")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }
  }, "Move the Player with Keyboard events"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }, "Ggez uses ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 24
    }
  }, "edge-triggered"), " keyboard events, simulated to look like ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 127
    }
  }, "level-triggered"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }, "In simple words, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 31
    }
  }, "Edge Triggered"), " refers to single keyboard event, no matter\nhow long we keep the key pressed. For eg. If I have pressed ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 63
    }
  }, "Up"), " button\nand also press ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 18
    }
  }, "Right"), " button after sometime, without leaving the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 115
    }
  }, "Up"), " button, we lose\nevent on ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 12
    }
  }, "Up"), " button, as a new keycode ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 88
    }
  }, "Right"), " overrides it."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }, "Using ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 46
    }
  }, "key_down_event"), " from ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 114
    }
  }, "event::EventHandler"), " trait, actually simulates\nthe above as level triggered, but once the keycode change, old keypress is lost.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }
  }, "On the other hand, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 33
    }
  }, "Level Triggered"), " refers to continous events, that keeps on triggering\nuntill user stops the keypress. it can also handle more than one keypress at a time."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }
  }, "To hack ggez to get the desired output from keyboard events, i.e., to get events ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 95
    }
  }, "Up"), "\nand ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }
  }, "Right"), " simultaneously, we use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 84
    }
  }, "input::keyboard::is_key_pressed"), " instead, with\nmultiple ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 12
    }
  }, "if/else"), " instead of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 79
    }
  }, "key_down_event"), " in trait impl."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-rs"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 12
    }
  }), "// player.rs\nimpl Player {\n    ...\n    pub fn handle_events(&mut self, ctx: &mut Context) -> GameResult {\n        let mut dy = 0.;\n        let mut dx = 0.;\n        if input::keyboard::is_key_pressed(ctx, event::KeyCode::Up) {\n            dy = -1.0;\n        }\n        if input::keyboard::is_key_pressed(ctx, event::KeyCode::Right) {\n            dx = 1.0;\n        }\n        if input::keyboard::is_key_pressed(ctx, event::KeyCode::Down) {\n            dy = 1.0;\n        }\n        if input::keyboard::is_key_pressed(ctx, event::KeyCode::Left) {\n            dx = -1.0;\n        }\n        self.pos = nalgebra::Point2::new(self.pos.x + dx, self.pos.y + dy);\n        Ok(())\n    }\n}\n\nimpl event::EventHandler for Player {\n    fn update(&mut self, ctx: &mut Context) -> GameResult {\n        self.handle_events(ctx)?;\n        Ok(())\n    }\n    ...\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 7
    }
  }, "We are directly updating the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 43
    }
  }, "position"), " of the player, instead of deriving it from velocity and time,\nwhich give precise control over the Player's movement. Anyways, for simplicity change the position\ndirectly for now is fine. We will later on update it to use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 63
    }
  }, "velocity * time"), " to get the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 138
    }
  }, "dpos"), " moved\nin unit time."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 7
    }
  }, "Now we just need to call ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 39
    }
  }, "player.update"), " in ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 104
    }
  }, "world.update"), " to reflect it on the screen."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 7
    }
  }, "Diff: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/Shub1427/rustschool/commit/d8a9730f134f056acd451692834722cd75b020a6"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 20
    }
  }), "d8a9730f134f056acd451692834722cd75b020a6")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 7
    }
  }, "Fix the upside down coordinates of screen:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 7
    }
  }, "If you have noticed, I am having negative delta y for ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 68
    }
  }, "UP"), " event (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 126
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
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
      lineNumber: 245,
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
      lineNumber: 247,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 18
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 47
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 76
    }
  }, "d"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 108
    }
  }, "y"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 140
    }
  }, "="), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 172
    }
  }, "\u2212"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mn", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 204
    }
  }, "1.0")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 245
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
      lineNumber: 251,
      columnNumber: 74
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 16
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
      lineNumber: 256,
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
      lineNumber: 262,
      columnNumber: 27
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
      lineNumber: 264,
      columnNumber: 32
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
      lineNumber: 269,
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
      lineNumber: 274,
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
      lineNumber: 276,
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
      lineNumber: 281,
      columnNumber: 34
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
      lineNumber: 283,
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
      lineNumber: 289,
      columnNumber: 27
    }
  }), "\u2212"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 32
    }
  }), "1"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 32
    }
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 32
    }
  }), "0"))))), "), that's because\nour world right now is upside down. This is because Screen coordinates in computer graphics has\norigin at ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
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
      lineNumber: 299,
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
      lineNumber: 301,
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
      lineNumber: 303,
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
      lineNumber: 305,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 18
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 47
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 76
    }
  }, "+"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 108
    }
  }, "X"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 140
    }
  }, "\u2212"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 172
    }
  }, "a"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 204
    }
  }, "x"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 236
    }
  }, "i"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 268
    }
  }, "s")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 307
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
      lineNumber: 309,
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
      lineNumber: 312,
      columnNumber: 16
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
      lineNumber: 314,
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
      lineNumber: 320,
      columnNumber: 27
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
      lineNumber: 322,
      columnNumber: 32
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
      lineNumber: 327,
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
      lineNumber: 332,
      columnNumber: 27
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
      lineNumber: 334,
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
      lineNumber: 339,
      columnNumber: 34
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
      lineNumber: 341,
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
      lineNumber: 347,
      columnNumber: 27
    }
  }), "a"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 32
    }
  }), "x"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 32
    }
  }), "i"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 32
    }
  }), "s"))))), " goes towards right of the screen and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 102
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
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
      lineNumber: 359,
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
      lineNumber: 361,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 18
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 47
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 76
    }
  }, "+"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 108
    }
  }, "Y"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 140
    }
  }, "\u2212"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 172
    }
  }, "a"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 204
    }
  }, "x"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 236
    }
  }, "i"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 268
    }
  }, "s")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 307
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
      lineNumber: 365,
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
      lineNumber: 368,
      columnNumber: 16
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
      lineNumber: 370,
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
      lineNumber: 376,
      columnNumber: 27
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
      lineNumber: 378,
      columnNumber: 32
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
      lineNumber: 383,
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
      lineNumber: 388,
      columnNumber: 27
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
      lineNumber: 390,
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
      lineNumber: 395,
      columnNumber: 34
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
      lineNumber: 397,
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
      lineNumber: 403,
      columnNumber: 27
    }
  }), "a"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 32
    }
  }), "x"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 32
    }
  }), "i"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 32
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
      lineNumber: 414,
      columnNumber: 7
    }
  }, "// physics.rs\n...\npub fn new(ctx: &mut Context) -> GameResult<Self> {\n    let image = graphics::Image::new(ctx, \"/playerShip1_blue.png\")?;\n    let pos = nalgebra::Point2::new(72.0, 0.0);\n    let y_offset = constants::VIEWPORT_HEIGHT - image.height() as f32;\n    let bbox = graphics::Rect::new(0., 0., image.width() as f32, image.height() as f32);\n    Ok(Player {\n        image,\n        pos,\n        offset: nalgebra::Vector2::new(0.0, y_offset),\n        bbox,\n        facing: 0.,\n    })\n}\n...\nfn draw(&mut self, ctx: &mut Context) -> GameResult {\n    let reverted_pos = nalgebra::Point2::new(\n        self.offset.x + self.pos.x,\n        self.offset.y - self.pos.y\n    );\n    let params = graphics::DrawParam::new()\n        .dest(reverted_pos);\n    ...\n}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 7
    }
  }, "We are drawing the image with an offset, where whatever the Y position is, we will subtract it to\nwindow height and add image height, to keep the origin of the image still at top-left corner of the image,\nbut any delta modification can be done with natural ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
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
      lineNumber: 445,
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
      lineNumber: 447,
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
      lineNumber: 449,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 18
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 47
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 76
    }
  }, "X"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 108
    }
  }, "\u2212"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 140
    }
  }, "Y"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 172
    }
  }, "a"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 204
    }
  }, "x"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 236
    }
  }, "i"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 268
    }
  }, "s")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 307
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
      lineNumber: 453,
      columnNumber: 73
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 16
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
      lineNumber: 458,
      columnNumber: 18
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
      lineNumber: 464,
      columnNumber: 27
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
      lineNumber: 469,
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
      lineNumber: 474,
      columnNumber: 27
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
      lineNumber: 476,
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
      lineNumber: 481,
      columnNumber: 34
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
      lineNumber: 483,
      columnNumber: 18
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
      lineNumber: 489,
      columnNumber: 27
    }
  }), "Y"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 32
    }
  }), "a"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 32
    }
  }), "x"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 32
    }
  }), "i"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 32
    }
  }), "s"))))), ", without worrying about the inversion."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 7
    }
  }, "Note that ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 24
    }
  }, "bbox"), " added to player is just for debugging purpose and not actually required for our game."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 7
    }
  }, "Diff: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/Shub1427/rustschool/commit/d6379bd1f9226026ad1e313a4a3653e04767532d"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 20
    }
  }), "d6379bd1f9226026ad1e313a4a3653e04767532d")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 7
    }
  }, "Add Physics to Player's Movements:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 7
    }
  }, "Moving in the world with some max velocity and constant accelaration, applied to the spaceship\nwhen user presses direction buttons."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 7
    }
  }, "Keeping Acceleration (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 36
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
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
      lineNumber: 516,
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
      lineNumber: 518,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 18
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 47
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 76
    }
  }, "a")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 115
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
      lineNumber: 522,
      columnNumber: 66
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
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
      lineNumber: 527,
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
      lineNumber: 533,
      columnNumber: 27
    }
  }), "a"))))), ") constant and having a max velocity (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 102
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
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
      lineNumber: 539,
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
      lineNumber: 541,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 18
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 47
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 76
    }
  }, "V")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 115
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
      lineNumber: 545,
      columnNumber: 66
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 16
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
      lineNumber: 550,
      columnNumber: 18
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
      lineNumber: 556,
      columnNumber: 27
    }
  }), "V"))))), "), we can derive,\ndistance travelled in unit time:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 9
    }
  }, "Acceleration is: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 50
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 18
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 20
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 49
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 78
    }
  }, "a"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 110
    }
  }, "="), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mfrac", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 142
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mfrac",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 167
    }
  }, "v"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mfrac",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 200
    }
  }, "t"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 248
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
      lineNumber: 574,
      columnNumber: 83
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 18
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
      lineNumber: 579,
      columnNumber: 20
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 29
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
      lineNumber: 587,
      columnNumber: 34
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mrel"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 29
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
      lineNumber: 594,
      columnNumber: 34
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 36
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
      lineNumber: 601,
      columnNumber: 20
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607,
      columnNumber: 29
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mopen nulldelimiter"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 22
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mfrac"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 31
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-t vlist-t2"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613,
      columnNumber: 24
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-r"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 26
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
      lineNumber: 617,
      columnNumber: 28
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
      lineNumber: 622,
      columnNumber: 30
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
      lineNumber: 626,
      columnNumber: 32
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "sizing reset-size6 size3 mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
      columnNumber: 41
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 34
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635,
      columnNumber: 36
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
      lineNumber: 637,
      columnNumber: 71
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
      lineNumber: 641,
      columnNumber: 32
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
      lineNumber: 646,
      columnNumber: 41
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
      lineNumber: 651,
      columnNumber: 48
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
      lineNumber: 655,
      columnNumber: 32
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "sizing reset-size6 size3 mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660,
      columnNumber: 41
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662,
      columnNumber: 34
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
      lineNumber: 664,
      columnNumber: 36
    }
  }), "v"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-s"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669,
      columnNumber: 78
    }
  }), "\u200B")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-r"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
      columnNumber: 49
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
      lineNumber: 673,
      columnNumber: 28
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", {
    parentName: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678,
      columnNumber: 30
    }
  }))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mclose nulldelimiter"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678,
      columnNumber: 89
    }
  }))))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680,
      columnNumber: 66
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681,
      columnNumber: 13
    }
  }, "So at any instant: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681,
      columnNumber: 56
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683,
      columnNumber: 18
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
      columnNumber: 20
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
      columnNumber: 22
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 24
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 53
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 82
    }
  }, "v"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 114
    }
  }, "="), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 146
    }
  }, "a"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 178
    }
  }, "\xD7"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 210
    }
  }, "t")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 249
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
      lineNumber: 691,
      columnNumber: 86
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694,
      columnNumber: 22
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
      lineNumber: 696,
      columnNumber: 24
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
      lineNumber: 702,
      columnNumber: 33
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
      lineNumber: 707,
      columnNumber: 38
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mrel"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712,
      columnNumber: 33
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
      lineNumber: 714,
      columnNumber: 38
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 719,
      columnNumber: 40
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
      lineNumber: 721,
      columnNumber: 24
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727,
      columnNumber: 33
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
      lineNumber: 729,
      columnNumber: 38
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mbin"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734,
      columnNumber: 33
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
      lineNumber: 736,
      columnNumber: 38
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741,
      columnNumber: 40
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
      lineNumber: 743,
      columnNumber: 24
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 749,
      columnNumber: 33
    }
  }), "t")))))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753,
      columnNumber: 9
    }
  }, "Once velocity is found, we can derive distance from that velocity,\nfor that instant ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754,
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
      lineNumber: 756,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 760,
      columnNumber: 18
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762,
      columnNumber: 20
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762,
      columnNumber: 49
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762,
      columnNumber: 78
    }
  }, "d"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762,
      columnNumber: 110
    }
  }, "="), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762,
      columnNumber: 142
    }
  }, "v"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762,
      columnNumber: 174
    }
  }, "\xD7"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762,
      columnNumber: 206
    }
  }, "t")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762,
      columnNumber: 245
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
      lineNumber: 764,
      columnNumber: 82
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767,
      columnNumber: 18
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
      lineNumber: 769,
      columnNumber: 20
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775,
      columnNumber: 29
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
      lineNumber: 777,
      columnNumber: 34
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mrel"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 782,
      columnNumber: 29
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
      lineNumber: 784,
      columnNumber: 34
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 789,
      columnNumber: 36
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
      lineNumber: 791,
      columnNumber: 20
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
      lineNumber: 797,
      columnNumber: 29
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
      lineNumber: 802,
      columnNumber: 34
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mbin"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 807,
      columnNumber: 29
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
      lineNumber: 809,
      columnNumber: 34
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 814,
      columnNumber: 36
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
      lineNumber: 816,
      columnNumber: 20
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 822,
      columnNumber: 29
    }
  }), "t"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 824,
      columnNumber: 62
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 825,
      columnNumber: 13
    }
  }, "Keeping a check for ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 825,
      columnNumber: 57
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 827,
      columnNumber: 18
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 829,
      columnNumber: 20
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 831,
      columnNumber: 22
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833,
      columnNumber: 24
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833,
      columnNumber: 53
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833,
      columnNumber: 82
    }
  }, "v"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833,
      columnNumber: 114
    }
  }, "\u2264"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833,
      columnNumber: 146
    }
  }, "V")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833,
      columnNumber: 185
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
      lineNumber: 835,
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
      lineNumber: 838,
      columnNumber: 22
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
      lineNumber: 840,
      columnNumber: 24
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
      lineNumber: 846,
      columnNumber: 33
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
      lineNumber: 851,
      columnNumber: 38
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mrel"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 856,
      columnNumber: 33
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
      lineNumber: 858,
      columnNumber: 38
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 863,
      columnNumber: 40
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
      lineNumber: 865,
      columnNumber: 24
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
      lineNumber: 871,
      columnNumber: 33
    }
  }), "V"))))))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 879,
      columnNumber: 7
    }
  }, "Once ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 879,
      columnNumber: 19
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 881,
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
      lineNumber: 883,
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
      lineNumber: 885,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 887,
      columnNumber: 18
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 887,
      columnNumber: 47
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 887,
      columnNumber: 76
    }
  }, "d")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 887,
      columnNumber: 115
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
      lineNumber: 889,
      columnNumber: 66
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 892,
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
      lineNumber: 894,
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
      lineNumber: 900,
      columnNumber: 27
    }
  }), "d"))))), " is found, we can use it as our delta distance, that will be added to current position.\nNow everything defined above is for 1D, but we are making game for 2D, so we need direction as well.\nOur Acceleration (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 904,
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
      lineNumber: 906,
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
      lineNumber: 908,
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
      lineNumber: 910,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 912,
      columnNumber: 18
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 912,
      columnNumber: 47
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 912,
      columnNumber: 76
    }
  }, "a")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 912,
      columnNumber: 115
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
      lineNumber: 914,
      columnNumber: 66
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 917,
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
      lineNumber: 919,
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
      lineNumber: 925,
      columnNumber: 27
    }
  }), "a"))))), ") and Velocity (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 927,
      columnNumber: 80
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 929,
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
      lineNumber: 931,
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
      lineNumber: 933,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 935,
      columnNumber: 18
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 935,
      columnNumber: 47
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 935,
      columnNumber: 76
    }
  }, "v")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 935,
      columnNumber: 115
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
      lineNumber: 937,
      columnNumber: 66
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 940,
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
      lineNumber: 942,
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
      lineNumber: 948,
      columnNumber: 27
    }
  }), "v"))))), ") both will have a direction bound to it. We need to go back\nto the basics of trignometry now."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 955,
      columnNumber: 7
    }
  }, "Use Resolution independent Game Units:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(Blockquote, {
    type: "warn",
    mdxType: "Blockquote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 956,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 957,
      columnNumber: 5
    }
  }, "NOTE"), ": I will elaborate on this topic, when I will feel more confident on how to achieve it more naturally. Actually I want to use Game Units that resembles Natural Units like", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(InlineCode, {
    mdxType: "InlineCode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 959,
      columnNumber: 5
    }
  }, "meters"), ", where the viewport can be considered in meters. Something, like 10 pixels equals 1 meter. For now using that logic in game is getting difficult for me, thus will keep using pixels directly"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 963,
      columnNumber: 7
    }
  }, "Our game is very simple till now, and it will remain the same for sometime. So it is very hard\nto justify, how a movement of player done using pixel calculation is any different from using\nsome random Game unit. To properly understand, please follow the coming image demonstrations carefully."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(Image, {
    src: "https://user-images.githubusercontent.com/11786283/79068488-e4b9f000-7ce4-11ea-834b-2f36ebf49edd.png",
    placeholder: "https://user-images.githubusercontent.com/11786283/79068483-d4a21080-7ce4-11ea-9cb5-f5f6a13f4b2c.png",
    alt: "Descriptive relative speed to varying viewport or the world",
    mdxType: "Image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 966,
      columnNumber: 7
    }
  })));
}
;
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=astro-v2.js.8f69174ec559e6f0b0b6.hot-update.js.map