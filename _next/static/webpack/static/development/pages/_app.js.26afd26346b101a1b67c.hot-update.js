webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/code-block.tsx":
/*!***********************************!*\
  !*** ./components/code-block.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CodeBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/languages/prism/jsx */ "./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/jsx.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_jsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_languages_prism_jsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_rust__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/languages/prism/rust */ "./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/rust.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_rust__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_languages_prism_rust__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/prism/atom-dark */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/atom-dark.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/components/code-block.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// src/CodeBlock.js





react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"].registerLanguage('js', react_syntax_highlighter_dist_cjs_languages_prism_jsx__WEBPACK_IMPORTED_MODULE_2___default.a);
react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"].registerLanguage('rs', react_syntax_highlighter_dist_cjs_languages_prism_rust__WEBPACK_IMPORTED_MODULE_3___default.a);
function CodeBlock({
  children,
  className
}) {
  const language = className.replace(/language-/, '');
  return __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"], {
    language: language,
    style: react_syntax_highlighter_dist_cjs_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_4___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, children);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/jsx.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/jsx.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx = _interopRequireDefault(__webpack_require__(/*! refractor/lang/jsx.js */ "./node_modules/refractor/lang/jsx.js"));

;
var _default = _jsx.default;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/rust.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/rust.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rust = _interopRequireDefault(__webpack_require__(/*! refractor/lang/rust.js */ "./node_modules/refractor/lang/rust.js"));

;
var _default = _rust.default;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/atom-dark.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/atom-dark.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "color": "#c5c8c6",
    "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
    "fontFamily": "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": "#c5c8c6",
    "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
    "fontFamily": "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto",
    "borderRadius": "0.3em",
    "background": "#1d1f21"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "background": "#1d1f21",
    "padding": ".1em",
    "borderRadius": ".3em"
  },
  "comment": {
    "color": "#7C7C7C"
  },
  "prolog": {
    "color": "#7C7C7C"
  },
  "doctype": {
    "color": "#7C7C7C"
  },
  "cdata": {
    "color": "#7C7C7C"
  },
  "punctuation": {
    "color": "#c5c8c6"
  },
  ".namespace": {
    "Opacity": ".7"
  },
  "property": {
    "color": "#96CBFE"
  },
  "keyword": {
    "color": "#96CBFE"
  },
  "tag": {
    "color": "#96CBFE"
  },
  "class-name": {
    "color": "#FFFFB6",
    "textDecoration": "underline"
  },
  "boolean": {
    "color": "#99CC99"
  },
  "constant": {
    "color": "#99CC99"
  },
  "symbol": {
    "color": "#f92672"
  },
  "deleted": {
    "color": "#f92672"
  },
  "number": {
    "color": "#FF73FD"
  },
  "selector": {
    "color": "#A8FF60"
  },
  "attr-name": {
    "color": "#A8FF60"
  },
  "string": {
    "color": "#A8FF60"
  },
  "char": {
    "color": "#A8FF60"
  },
  "builtin": {
    "color": "#A8FF60"
  },
  "inserted": {
    "color": "#A8FF60"
  },
  "variable": {
    "color": "#C6C5FE"
  },
  "operator": {
    "color": "#EDEDED"
  },
  "entity": {
    "color": "#FFFFB6",
    "cursor": "help"
  },
  "url": {
    "color": "#96CBFE"
  },
  ".language-css .token.string": {
    "color": "#87C38A"
  },
  ".style .token.string": {
    "color": "#87C38A"
  },
  "atrule": {
    "color": "#F9EE98"
  },
  "attr-value": {
    "color": "#F9EE98"
  },
  "function": {
    "color": "#DAD085"
  },
  "regex": {
    "color": "#E9C062"
  },
  "important": {
    "color": "#fd971f",
    "fontWeight": "bold"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/esm/languages/prism/jsx.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/languages/prism/rust.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/atom-dark.js":
false

})
//# sourceMappingURL=_app.js.26afd26346b101a1b67c.hot-update.js.map