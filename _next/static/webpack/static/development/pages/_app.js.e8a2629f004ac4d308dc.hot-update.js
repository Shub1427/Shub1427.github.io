webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/react-medium-image-zoom/dist/styles.css":
false,

/***/ "./node_modules/css-loader/dist/runtime/api.js":
false,

/***/ "./node_modules/react-medium-image-zoom/dist/styles.css":
false,

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
false,

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ \"./node_modules/@mdx-js/react/dist/esm.js\");\n/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/theme */ \"./utils/theme.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store */ \"./store/index.ts\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _components_para__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/para */ \"./components/para.tsx\");\n/* harmony import */ var _components_blockquote__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/blockquote */ \"./components/blockquote.tsx\");\n/* harmony import */ var _components_mdx_h1__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/mdx-h1 */ \"./components/mdx-h1.tsx\");\n/* harmony import */ var _components_mdx_h2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/mdx-h2 */ \"./components/mdx-h2.tsx\");\n/* harmony import */ var _components_mdx_h3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/mdx-h3 */ \"./components/mdx-h3.tsx\");\n/* harmony import */ var _components_mdx_h4__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/mdx-h4 */ \"./components/mdx-h4.tsx\");\n/* harmony import */ var _components_code_block__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/code-block */ \"./components/code-block.tsx\");\n/* harmony import */ var _components_inline_code__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/inline-code */ \"./components/inline-code.tsx\");\n/* harmony import */ var _components_code_diff__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/code-diff */ \"./components/code-diff/index.ts\");\n/* harmony import */ var _components_progressive_image__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/progressive-image */ \"./components/progressive-image.tsx\");\n/* harmony import */ var _components_thematic_break__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/thematic-break */ \"./components/thematic-break.tsx\");\n/* harmony import */ var _components_polka_container__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/polka-container */ \"./components/polka-container.tsx\");\n/* harmony import */ var _components_note_subtitle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/note-subtitle */ \"./components/note-subtitle.tsx\");\n/* harmony import */ var _components_mdx_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/mdx-list */ \"./components/mdx-list.tsx\");\n/* harmony import */ var _hoc_palette_mode__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../hoc/palette-mode */ \"./hoc/palette-mode.tsx\");\n/* harmony import */ var _utils_gtag__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../utils/gtag */ \"./utils/gtag.ts\");\n\n\nvar _jsxFileName = \"/Users/subroto.biswas/Subroto/shub1427.github.io/pages/_app.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\n\n\n\n\n\n\n\n // Using Redux Store is the only way to use LocalStorage with NextJS app\n// right now, it doesn't support pure static builds\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst mdComponents = {\n  a: props => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__[\"Link\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    target: \"_blank\"\n  }, props, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 22\n    }\n  })),\n  h1: props => __jsx(_components_mdx_h1__WEBPACK_IMPORTED_MODULE_14__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 23\n    }\n  })),\n  h2: props => __jsx(_components_mdx_h2__WEBPACK_IMPORTED_MODULE_15__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 23\n    }\n  })),\n  h3: props => __jsx(_components_mdx_h3__WEBPACK_IMPORTED_MODULE_16__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 23\n    }\n  })),\n  h4: props => __jsx(_components_mdx_h4__WEBPACK_IMPORTED_MODULE_17__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 23\n    }\n  })),\n  p: props => __jsx(_components_para__WEBPACK_IMPORTED_MODULE_12__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 22\n    }\n  })),\n  blockquote: props => __jsx(_components_blockquote__WEBPACK_IMPORTED_MODULE_13__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 31\n    }\n  })),\n  code: _components_code_block__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n  inlineCode: _components_inline_code__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\n  thematicBreak: _components_thematic_break__WEBPACK_IMPORTED_MODULE_22__[\"default\"],\n  hr: _components_thematic_break__WEBPACK_IMPORTED_MODULE_22__[\"default\"],\n  ol: _components_mdx_list__WEBPACK_IMPORTED_MODULE_25__[\"MDXOL\"],\n  ul: _components_mdx_list__WEBPACK_IMPORTED_MODULE_25__[\"MDXUL\"],\n  li: _components_mdx_list__WEBPACK_IMPORTED_MODULE_25__[\"MDXLI\"],\n  H1: _components_mdx_h1__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n  Link: _material_ui_core__WEBPACK_IMPORTED_MODULE_11__[\"Link\"],\n  Button: _material_ui_core__WEBPACK_IMPORTED_MODULE_11__[\"Button\"],\n  Blockquote: _components_blockquote__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  Diff: _components_code_diff__WEBPACK_IMPORTED_MODULE_20__[\"default\"],\n  CodeBlock: _components_code_block__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n  // Using codeblock as is gives us more control\n  InlineCode: _components_inline_code__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\n  Image: _components_progressive_image__WEBPACK_IMPORTED_MODULE_21__[\"default\"],\n  PolkaContainer: _components_polka_container__WEBPACK_IMPORTED_MODULE_23__[\"default\"],\n  NoteSubtitle: _components_note_subtitle__WEBPACK_IMPORTED_MODULE_24__[\"default\"]\n};\n\nconst Content = props => {\n  _s();\n\n  const {\n    Component,\n    pageProps\n  } = props;\n  const {\n    darkMode\n  } = Object(_hoc_palette_mode__WEBPACK_IMPORTED_MODULE_26__[\"usePaletteModeStore\"])();\n  const theme = darkMode ? _utils_theme__WEBPACK_IMPORTED_MODULE_2__[\"darkTheme\"] : _utils_theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  return __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[\"ThemeProvider\"], {\n    theme: theme,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }), __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"MDXProvider\"], {\n    components: mdComponents,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }))));\n};\n\n_s(Content, \"00eRCAgLWeXUmtpkDVCx/42qvkE=\", false, function () {\n  return [_hoc_palette_mode__WEBPACK_IMPORTED_MODULE_26__[\"usePaletteModeStore\"]];\n});\n\n_c = Content;\nconst WithPaletteModeContent = Object(_hoc_palette_mode__WEBPACK_IMPORTED_MODULE_26__[\"withPaletteModeProvider\"])(Content);\n_c2 = WithPaletteModeContent;\nnext_router__WEBPACK_IMPORTED_MODULE_5___default.a.events.on('routeChangeComplete', url => Object(_utils_gtag__WEBPACK_IMPORTED_MODULE_27__[\"pageview\"])(url));\nclass MyApp extends next_app__WEBPACK_IMPORTED_MODULE_4___default.a {\n  componentDidMount() {\n    // Remove the server-side injected CSS.\n    const jssStyles = document.querySelector('#jss-server-side');\n\n    if (jssStyles && jssStyles.parentElement) {\n      jssStyles.parentElement.removeChild(jssStyles);\n    }\n  }\n\n  render() {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 7\n      }\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }\n    }, __jsx(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width, initial-scale=1\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 11\n      }\n    }), __jsx(\"meta\", {\n      charSet: \"utf-8\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 11\n      }\n    }), __jsx(\"meta\", {\n      name: \"author\",\n      content: \"Subroto Biswas\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 11\n      }\n    }), __jsx(\"link\", {\n      rel: \"apple-touch-icon\",\n      sizes: \"180x180\",\n      href: \"https://user-images.githubusercontent.com/11786283/81848987-81d1a800-9573-11ea-9b04-2f7bc9a8ee21.png\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 11\n      }\n    }), __jsx(\"link\", {\n      rel: \"icon\",\n      type: \"image/png\",\n      href: \"https://user-images.githubusercontent.com/11786283/81849133-b80f2780-9573-11ea-87c5-1b91ecdd0786.png\",\n      sizes: \"16x16\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 11\n      }\n    }), __jsx(\"link\", {\n      rel: \"icon\",\n      type: \"image/png\",\n      href: \"https://user-images.githubusercontent.com/11786283/81849184-cfe6ab80-9573-11ea-8e90-017a74baa812.png\",\n      sizes: \"32x32\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 11\n      }\n    }), __jsx(\"link\", {\n      rel: \"icon\",\n      type: \"image/png\",\n      href: \"https://user-images.githubusercontent.com/11786283/81849345-06242b00-9574-11ea-9d22-43c549f88e01.png\",\n      sizes: \"192x192\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 11\n      }\n    }), __jsx(\"link\", {\n      href: \"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap\",\n      rel: \"stylesheet\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 11\n      }\n    }), __jsx(\"link\", {\n      href: \"https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap\",\n      rel: \"stylesheet\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 11\n      }\n    }), __jsx(\"link\", {\n      href: \"/css/main.css\",\n      rel: \"stylesheet\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 11\n      }\n    })), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"Provider\"], {\n      store: store__WEBPACK_IMPORTED_MODULE_10__[\"staticStore\"],\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 9\n      }\n    }, __jsx(WithPaletteModeContent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, this.props, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 11\n      }\n    }))));\n  }\n\n}\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Content\");\n$RefreshReg$(_c2, \"WithPaletteModeContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIm1kQ29tcG9uZW50cyIsImEiLCJwcm9wcyIsImgxIiwiaDIiLCJoMyIsImg0IiwicCIsImJsb2NrcXVvdGUiLCJjb2RlIiwiQ29kZUJsb2NrIiwiaW5saW5lQ29kZSIsIklubGluZUNvZGUiLCJ0aGVtYXRpY0JyZWFrIiwiVGhlbWF0aWNCcmVhayIsImhyIiwib2wiLCJNRFhPTCIsInVsIiwiTURYVUwiLCJsaSIsIk1EWExJIiwiSDEiLCJNRFhIMSIsIkxpbmsiLCJCdXR0b24iLCJCbG9ja3F1b3RlIiwiRGlmZiIsIkNvZGVEaWZmIiwiSW1hZ2UiLCJQb2xrYUNvbnRhaW5lciIsIk5vdGVTdWJ0aXRsZSIsIkNvbnRlbnQiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkYXJrTW9kZSIsInVzZVBhbGV0dGVNb2RlU3RvcmUiLCJ0aGVtZSIsImRhcmtUaGVtZSIsImRlZmF1bHRUaGVtZSIsIldpdGhQYWxldHRlTW9kZUNvbnRlbnQiLCJ3aXRoUGFsZXR0ZU1vZGVQcm92aWRlciIsIlJvdXRlciIsImV2ZW50cyIsIm9uIiwidXJsIiwicGFnZXZpZXciLCJNeUFwcCIsIkFwcCIsImNvbXBvbmVudERpZE1vdW50IiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwicmVuZGVyIiwic3RhdGljU3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQSxNQUFNQSxZQUFZLEdBQUc7QUFDbkJDLEdBQUMs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RSxXQUFLLEVBQUMsU0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BckJGLEVBMkJFO0FBQ0UsVUFBSSxFQUFDLGdIQURQO0FBRUUsU0FBRyxFQUFDLFlBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQTNCRixFQStCRTtBQUNFLFVBQUksRUFBQywrRUFEUDtBQUVFLFNBQUcsRUFBQyxZQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUEvQkYsRUFtQ0U7QUFBTSxVQUFJLEVBQUMsZUFBWDtBQUEyQixTQUFHLEVBQUMsWUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQW5DRixDQURGLEVBc0NFLE1BQUMsb0RBQUQ7QUFBVSxXQUFLLEVBQUVDLGtEQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxzQkFBRCx5RkFBNEIsS0FBS3RELEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERixDQXRDRixDQURGO0FBNENEOztBQXREb0MiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1EWFByb3ZpZGVyIH0gZnJvbSAnQG1keC1qcy9yZWFjdCc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lLCB7IGRhcmtUaGVtZSB9IGZyb20gJ0B1dGlscy90aGVtZSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEFwcCwgeyBBcHBJbml0aWFsUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcblxuLy8gVXNpbmcgUmVkdXggU3RvcmUgaXMgdGhlIG9ubHkgd2F5IHRvIHVzZSBMb2NhbFN0b3JhZ2Ugd2l0aCBOZXh0SlMgYXBwXG4vLyByaWdodCBub3csIGl0IGRvZXNuJ3Qgc3VwcG9ydCBwdXJlIHN0YXRpYyBidWlsZHNcbmltcG9ydCB7IHN0YXRpY1N0b3JlIH0gZnJvbSAnc3RvcmUnO1xuaW1wb3J0IHsgQnV0dG9uLCBMaW5rIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IFBhcmEgZnJvbSAnQGNvbXBvbmVudHMvcGFyYSc7XG5pbXBvcnQgQmxvY2txdW90ZSBmcm9tICdAY29tcG9uZW50cy9ibG9ja3F1b3RlJztcbmltcG9ydCBNRFhIMSBmcm9tICdAY29tcG9uZW50cy9tZHgtaDEnO1xuaW1wb3J0IE1EWEgyIGZyb20gJ0Bjb21wb25lbnRzL21keC1oMic7XG5pbXBvcnQgTURYSDMgZnJvbSAnQGNvbXBvbmVudHMvbWR4LWgzJztcbmltcG9ydCBNRFhINCBmcm9tICdAY29tcG9uZW50cy9tZHgtaDQnO1xuaW1wb3J0IENvZGVCbG9jayBmcm9tICdAY29tcG9uZW50cy9jb2RlLWJsb2NrJztcbmltcG9ydCBJbmxpbmVDb2RlIGZyb20gJ0Bjb21wb25lbnRzL2lubGluZS1jb2RlJztcbmltcG9ydCBDb2RlRGlmZiBmcm9tICdAY29tcG9uZW50cy9jb2RlLWRpZmYnO1xuaW1wb3J0IEltYWdlIGZyb20gJ0Bjb21wb25lbnRzL3Byb2dyZXNzaXZlLWltYWdlJztcbmltcG9ydCBUaGVtYXRpY0JyZWFrIGZyb20gJ0Bjb21wb25lbnRzL3RoZW1hdGljLWJyZWFrJztcbmltcG9ydCBQb2xrYUNvbnRhaW5lciBmcm9tICdAY29tcG9uZW50cy9wb2xrYS1jb250YWluZXInO1xuaW1wb3J0IE5vdGVTdWJ0aXRsZSBmcm9tICdAY29tcG9uZW50cy9ub3RlLXN1YnRpdGxlJztcbmltcG9ydCB7IE1EWE9MLCBNRFhVTCwgTURYTEkgfSBmcm9tICdAY29tcG9uZW50cy9tZHgtbGlzdCc7XG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHtcbiAgd2l0aFBhbGV0dGVNb2RlUHJvdmlkZXIsXG4gIHVzZVBhbGV0dGVNb2RlU3RvcmUsXG59IGZyb20gJ0Bob2MvcGFsZXR0ZS1tb2RlJztcbmltcG9ydCB7IHBhZ2V2aWV3IH0gZnJvbSAnQHV0aWxzL2d0YWcnO1xuXG5jb25zdCBtZENvbXBvbmVudHMgPSB7XG4gIGE6IChwcm9wczogYW55KSA9PiA8TGluayB0YXJnZXQ9XCJfYmxhbmtcIiB7Li4ucHJvcHN9IC8+LFxuICBoMTogKHByb3BzOiBhbnkpID0+IDxNRFhIMSB7Li4ucHJvcHN9IC8+LFxuICBoMjogKHByb3BzOiBhbnkpID0+IDxNRFhIMiB7Li4ucHJvcHN9IC8+LFxuICBoMzogKHByb3BzOiBhbnkpID0+IDxNRFhIMyB7Li4ucHJvcHN9IC8+LFxuICBoNDogKHByb3BzOiBhbnkpID0+IDxNRFhINCB7Li4ucHJvcHN9IC8+LFxuICBwOiAocHJvcHM6IGFueSkgPT4gPFBhcmEgey4uLnByb3BzfSAvPixcbiAgYmxvY2txdW90ZTogKHByb3BzOiBhbnkpID0+IDxCbG9ja3F1b3RlIHsuLi5wcm9wc30gLz4sXG4gIGNvZGU6IENvZGVCbG9jayxcbiAgaW5saW5lQ29kZTogSW5saW5lQ29kZSxcbiAgdGhlbWF0aWNCcmVhazogVGhlbWF0aWNCcmVhayxcbiAgaHI6IFRoZW1hdGljQnJlYWssXG4gIG9sOiBNRFhPTCxcbiAgdWw6IE1EWFVMLFxuICBsaTogTURYTEksXG4gIEgxOiBNRFhIMSxcbiAgTGluayxcbiAgQnV0dG9uLFxuICBCbG9ja3F1b3RlLFxuICBEaWZmOiBDb2RlRGlmZixcbiAgQ29kZUJsb2NrLCAvLyBVc2luZyBjb2RlYmxvY2sgYXMgaXMgZ2l2ZXMgdXMgbW9yZSBjb250cm9sXG4gIElubGluZUNvZGUsXG4gIEltYWdlLFxuICBQb2xrYUNvbnRhaW5lcixcbiAgTm90ZVN1YnRpdGxlLFxufTtcblxuY29uc3QgQ29udGVudCA9IChwcm9wczogQXBwSW5pdGlhbFByb3BzICYgeyBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlIH0pID0+IHtcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgZGFya01vZGUgfSA9IHVzZVBhbGV0dGVNb2RlU3RvcmUoKTtcbiAgY29uc3QgdGhlbWUgPSBkYXJrTW9kZSA/IGRhcmtUaGVtZSA6IGRlZmF1bHRUaGVtZTtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxuICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICA8TURYUHJvdmlkZXIgY29tcG9uZW50cz17bWRDb21wb25lbnRzfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9NRFhQcm92aWRlcj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59O1xuXG5jb25zdCBXaXRoUGFsZXR0ZU1vZGVDb250ZW50ID0gd2l0aFBhbGV0dGVNb2RlUHJvdmlkZXIoQ29udGVudCk7XG5cblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAodXJsKSA9PiBwYWdldmlldyh1cmwpKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XG4gICAgaWYgKGpzc1N0eWxlcyAmJiBqc3NTdHlsZXMucGFyZW50RWxlbWVudCkge1xuICAgICAganNzU3R5bGVzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIlN1YnJvdG8gQmlzd2FzXCIgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgICBzaXplcz1cIjE4MHgxODBcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdXNlci1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzExNzg2MjgzLzgxODQ4OTg3LTgxZDFhODAwLTk1NzMtMTFlYS05YjA0LTJmN2JjOWE4ZWUyMS5wbmdcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vMTE3ODYyODMvODE4NDkxMzMtYjgwZjI3ODAtOTU3My0xMWVhLTg3YzUtMWI5MWVjZGQwNzg2LnBuZ1wiXG4gICAgICAgICAgICBzaXplcz1cIjE2eDE2XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdXNlci1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzExNzg2MjgzLzgxODQ5MTg0LWNmZTZhYjgwLTk1NzMtMTFlYS04ZTkwLTAxN2E3NGJhYTgxMi5wbmdcIlxuICAgICAgICAgICAgc2l6ZXM9XCIzMngzMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3VzZXItaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS8xMTc4NjI4My84MTg0OTM0NS0wNjI0MmIwMC05NTc0LTExZWEtOWQyMi00M2M1NDlmODhlMDEucG5nXCJcbiAgICAgICAgICAgIHNpemVzPVwiMTkyeDE5MlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw2MDA7MSwzMDA7MSw0MDA7MSw2MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDMwMDs0MDA7NTAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCIvY3NzL21haW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdGF0aWNTdG9yZX0+XG4gICAgICAgICAgPFdpdGhQYWxldHRlTW9kZUNvbnRlbnQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

})