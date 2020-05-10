webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/theme */ "./utils/theme.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_para__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/para */ "./components/para.tsx");
/* harmony import */ var _components_blockquote__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/blockquote */ "./components/blockquote.tsx");
/* harmony import */ var _components_mdx_h1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/mdx-h1 */ "./components/mdx-h1.tsx");
/* harmony import */ var _components_mdx_h2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/mdx-h2 */ "./components/mdx-h2.tsx");
/* harmony import */ var _components_mdx_h3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/mdx-h3 */ "./components/mdx-h3.tsx");
/* harmony import */ var _components_code_block__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/code-block */ "./components/code-block.tsx");
/* harmony import */ var _components_inline_code__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/inline-code */ "./components/inline-code.tsx");
/* harmony import */ var _components_code_diff__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/code-diff */ "./components/code-diff/index.ts");
/* harmony import */ var _components_progressive_image__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/progressive-image */ "./components/progressive-image.tsx");
/* harmony import */ var _components_thematic_break__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/thematic-break */ "./components/thematic-break.tsx");
/* harmony import */ var _components_polka_container__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/polka-container */ "./components/polka-container.tsx");
/* harmony import */ var _components_note_subtitle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/note-subtitle */ "./components/note-subtitle.tsx");
/* harmony import */ var _components_mdx_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/mdx-list */ "./components/mdx-list.tsx");

var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/pages/_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





















const mdComponents = {
  a: props => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Link"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    target: "_blank"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 22
    }
  })),
  h1: props => __jsx(_components_mdx_h1__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 23
    }
  })),
  h2: props => __jsx(_components_mdx_h2__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 23
    }
  })),
  h3: props => __jsx(_components_mdx_h3__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 23
    }
  })),
  p: props => __jsx(_components_para__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 22
    }
  })),
  blockquote: props => __jsx(_components_blockquote__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 31
    }
  })),
  code: _components_code_block__WEBPACK_IMPORTED_MODULE_14__["default"],
  inlineCode: _components_inline_code__WEBPACK_IMPORTED_MODULE_15__["default"],
  thematicBreak: _components_thematic_break__WEBPACK_IMPORTED_MODULE_18__["default"],
  hr: _components_thematic_break__WEBPACK_IMPORTED_MODULE_18__["default"],
  ol: _components_mdx_list__WEBPACK_IMPORTED_MODULE_21__["MDXOL"],
  ul: _components_mdx_list__WEBPACK_IMPORTED_MODULE_21__["MDXUL"],
  li: _components_mdx_list__WEBPACK_IMPORTED_MODULE_21__["MDXLI"],
  H1: _components_mdx_h1__WEBPACK_IMPORTED_MODULE_11__["default"],
  Link: _material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Link"],
  Button: _material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"],
  Blockquote: _components_blockquote__WEBPACK_IMPORTED_MODULE_10__["default"],
  Diff: _components_code_diff__WEBPACK_IMPORTED_MODULE_16__["default"],
  CodeBlock: _components_code_block__WEBPACK_IMPORTED_MODULE_14__["default"],
  // Using codeblock as is gives us more control
  InlineCode: _components_inline_code__WEBPACK_IMPORTED_MODULE_15__["default"],
  Image: _components_progressive_image__WEBPACK_IMPORTED_MODULE_17__["default"],
  PolkaContainer: _components_polka_container__WEBPACK_IMPORTED_MODULE_19__["default"],
  NoteSubtitle: _components_note_subtitle__WEBPACK_IMPORTED_MODULE_20__["default"]
};
class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_4___default.a {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }
    }, __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "/css/main.css",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }
    })), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
      theme: _utils_theme__WEBPACK_IMPORTED_MODULE_2__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }
    }), __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["MDXProvider"], {
      components: mdComponents,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    })))));
  }

}

/***/ })

})
//# sourceMappingURL=_app.js.a5d463cd239a5e4355d8.hot-update.js.map