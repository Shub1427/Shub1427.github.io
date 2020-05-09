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
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/languages/prism/tsx */ "./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/tsx.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_tsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_languages_prism_tsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_rust__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/languages/prism/rust */ "./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/rust.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_rust__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_languages_prism_rust__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_bash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/languages/prism/bash */ "./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/bash.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_bash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_languages_prism_bash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var refractor_lang_toml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! refractor/lang/toml */ "./node_modules/refractor/lang/toml.js");
/* harmony import */ var refractor_lang_toml__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(refractor_lang_toml__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_darcula__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/prism/darcula */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/darcula.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_darcula__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism_darcula__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/components/code-block.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // Remove this, once `react-syntax-highlighter` is updated to support `toml` lang




react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"].registerLanguage('js', react_syntax_highlighter_dist_cjs_languages_prism_jsx__WEBPACK_IMPORTED_MODULE_2___default.a);
react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"].registerLanguage('ts', react_syntax_highlighter_dist_cjs_languages_prism_tsx__WEBPACK_IMPORTED_MODULE_3___default.a);
react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"].registerLanguage('rust', react_syntax_highlighter_dist_cjs_languages_prism_rust__WEBPACK_IMPORTED_MODULE_4___default.a);
react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"].registerLanguage('toml', refractor_lang_toml__WEBPACK_IMPORTED_MODULE_6___default.a);
react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"].registerLanguage('bash', react_syntax_highlighter_dist_cjs_languages_prism_bash__WEBPACK_IMPORTED_MODULE_5___default.a);
const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(theme => ({
  root: {
    marginTop: 16,
    marginBottom: 48,
    padding: 0,
    borderRadius: 4,
    background: theme.palette.primary.main,
    overflow: 'hidden',
    boxShadow: 'rgba(0, 0, 0, 0.55) 0px 10px 32px'
  },
  windowBlock: {
    position: 'relative',
    padding: 16,
    borderRadius: 4
  },
  windowControls: {
    position: 'relative',
    paddingBottom: 8
  },
  codeBlock: {
    marginBottom: '-64px !important',
    padding: '0 0 64px 0 !important'
  }
}));
function CodeBlock({
  children,
  className,
  showLines = false
}) {
  const classes = useStyles();
  const details = className.replace(/language-/, ''); // eslint-disable-next-line prefer-const

  let [language, linesEnabledStr] = details.split('.');
  const linesEnabled = /true/i.test(linesEnabledStr);

  switch (language) {
    case 'rs':
      language = 'rust';
      break;

    case 'sh':
    case 'bash':
      language = 'bash';
      break;
  }

  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.windowBlock,
    style: {
      background: react_syntax_highlighter_dist_cjs_styles_prism_darcula__WEBPACK_IMPORTED_MODULE_7___default.a[':not(pre) > code[class*="language-"]'].background
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.windowControls,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "54",
    height: "14",
    viewBox: "0 0 54 14",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(1 1)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("circle", {
    cx: "6",
    cy: "6",
    r: "6",
    fill: "#FF5F56",
    stroke: "#E0443E",
    strokeWidth: ".5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }), __jsx("circle", {
    cx: "26",
    cy: "6",
    r: "6",
    fill: "#FFBD2E",
    stroke: "#DEA123",
    strokeWidth: ".5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }), __jsx("circle", {
    cx: "46",
    cy: "6",
    r: "6",
    fill: "#27C93F",
    stroke: "#1AAB29",
    strokeWidth: ".5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  })))), __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"], {
    language: language,
    className: classes.codeBlock,
    style: react_syntax_highlighter_dist_cjs_styles_prism_darcula__WEBPACK_IMPORTED_MODULE_7___default.a,
    showLineNumbers: linesEnabledStr == null ? showLines : linesEnabled,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, children)));
}

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/darcula.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/darcula.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "color": "#a9b7c6",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', monospace",
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
    "color": "#a9b7c6",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', monospace",
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
    "background": "#2b2b2b"
  },
  "pre[class*=\"language-\"]::-moz-selection": {
    "color": "inherit",
    "background": "rgba(33,66,131,.85)"
  },
  "pre[class*=\"language-\"] ::-moz-selection": {
    "color": "inherit",
    "background": "rgba(33,66,131,.85)"
  },
  "code[class*=\"language-\"]::-moz-selection": {
    "color": "inherit",
    "background": "rgba(33,66,131,.85)"
  },
  "code[class*=\"language-\"] ::-moz-selection": {
    "color": "inherit",
    "background": "rgba(33,66,131,.85)"
  },
  "pre[class*=\"language-\"]::selection": {
    "color": "inherit",
    "background": "rgba(33,66,131,.85)"
  },
  "pre[class*=\"language-\"] ::selection": {
    "color": "inherit",
    "background": "rgba(33,66,131,.85)"
  },
  "code[class*=\"language-\"]::selection": {
    "color": "inherit",
    "background": "rgba(33,66,131,.85)"
  },
  "code[class*=\"language-\"] ::selection": {
    "color": "inherit",
    "background": "rgba(33,66,131,.85)"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "background": "#2b2b2b",
    "padding": ".1em",
    "borderRadius": ".3em"
  },
  "comment": {
    "color": "#808080"
  },
  "prolog": {
    "color": "#808080"
  },
  "cdata": {
    "color": "#808080"
  },
  "delimiter": {
    "color": "#cc7832"
  },
  "boolean": {
    "color": "#cc7832"
  },
  "keyword": {
    "color": "#cc7832"
  },
  "selector": {
    "color": "#cc7832"
  },
  "important": {
    "color": "#cc7832"
  },
  "atrule": {
    "color": "#cc7832"
  },
  "operator": {
    "color": "#a9b7c6"
  },
  "punctuation": {
    "color": "#a9b7c6"
  },
  "attr-name": {
    "color": "#a9b7c6"
  },
  "tag": {
    "color": "#e8bf6a"
  },
  "tag .punctuation": {
    "color": "#e8bf6a"
  },
  "doctype": {
    "color": "#e8bf6a"
  },
  "builtin": {
    "color": "#e8bf6a"
  },
  "entity": {
    "color": "#6897bb"
  },
  "number": {
    "color": "#6897bb"
  },
  "symbol": {
    "color": "#6897bb"
  },
  "property": {
    "color": "#9876aa"
  },
  "constant": {
    "color": "#9876aa"
  },
  "variable": {
    "color": "#9876aa"
  },
  "string": {
    "color": "#6a8759"
  },
  "char": {
    "color": "#6a8759"
  },
  "attr-value": {
    "color": "#a5c261"
  },
  "attr-value .punctuation": {
    "color": "#a5c261"
  },
  "attr-value .punctuation:first-child": {
    "color": "#a9b7c6"
  },
  "url": {
    "color": "#287bde",
    "textDecoration": "underline"
  },
  "function": {
    "color": "#ffc66d"
  },
  "regex": {
    "background": "#364135"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  },
  "inserted": {
    "background": "#294436"
  },
  "deleted": {
    "background": "#484a4a"
  },
  "code.language-css .token.property": {
    "color": "#a9b7c6"
  },
  "code.language-css .token.property + .token.punctuation": {
    "color": "#a9b7c6"
  },
  "code.language-css .token.id": {
    "color": "#ffc66d"
  },
  "code.language-css .token.selector > .token.class": {
    "color": "#ffc66d"
  },
  "code.language-css .token.selector > .token.attribute": {
    "color": "#ffc66d"
  },
  "code.language-css .token.selector > .token.pseudo-class": {
    "color": "#ffc66d"
  },
  "code.language-css .token.selector > .token.pseudo-element": {
    "color": "#ffc66d"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/vs-dark.js":
false

})
//# sourceMappingURL=_app.js.fe8e883b6bf026385d99.hot-update.js.map