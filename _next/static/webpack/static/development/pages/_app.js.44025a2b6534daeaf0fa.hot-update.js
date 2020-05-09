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
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/languages/prism/jsx */ "./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/jsx.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_jsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_languages_prism_jsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/languages/prism/tsx */ "./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/tsx.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_tsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_languages_prism_tsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_rust__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/languages/prism/rust */ "./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/rust.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_rust__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_languages_prism_rust__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_bash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/languages/prism/bash */ "./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/bash.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_bash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_languages_prism_bash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var refractor_lang_toml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! refractor/lang/toml */ "./node_modules/refractor/lang/toml.js");
/* harmony import */ var refractor_lang_toml__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(refractor_lang_toml__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/prism/atom-dark */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/atom-dark.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/components/code-block.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 // Remove this, once `react-syntax-highlighter` is updated to support `toml` lang




react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__["PrismLight"].registerLanguage('js', react_syntax_highlighter_dist_cjs_languages_prism_jsx__WEBPACK_IMPORTED_MODULE_3___default.a);
react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__["PrismLight"].registerLanguage('ts', react_syntax_highlighter_dist_cjs_languages_prism_tsx__WEBPACK_IMPORTED_MODULE_4___default.a);
react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__["PrismLight"].registerLanguage('rust', react_syntax_highlighter_dist_cjs_languages_prism_rust__WEBPACK_IMPORTED_MODULE_5___default.a);
react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__["PrismLight"].registerLanguage('toml', refractor_lang_toml__WEBPACK_IMPORTED_MODULE_7___default.a);
react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__["PrismLight"].registerLanguage('bash', react_syntax_highlighter_dist_cjs_languages_prism_bash__WEBPACK_IMPORTED_MODULE_6___default.a);
const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(theme => ({
  root: {
    marginTop: 16,
    marginBottom: 48,
    padding: 0,
    borderRadius: 4,
    background: theme.palette.primary.main
  },
  windowBlock: {
    position: 'relative',
    padding: 16,
    borderRadius: 4,
    boxShadow: 'rgba(0, 0, 0, 0.55) 0px 10px 32px'
  },
  windowControls: {
    position: 'relative',
    paddingBottom: 8
  },
  codeBlock: {
    padding: '0 !important'
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

  return __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__["Scrollbars"], {
    className: classes.root,
    style: {
      width: 500,
      height: 300
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.windowBlock,
    style: {
      background: react_syntax_highlighter_dist_cjs_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_8___default.a[':not(pre) > code[class*="language-"]'].background
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.windowControls,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
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
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(1 1)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 84,
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
      lineNumber: 92,
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
      lineNumber: 100,
      columnNumber: 15
    }
  })))), __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__["PrismLight"], {
    language: language,
    className: classes.codeBlock,
    style: react_syntax_highlighter_dist_cjs_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_8___default.a,
    showLineNumbers: linesEnabledStr == null ? showLines : linesEnabled,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, children)));
}

/***/ })

})
//# sourceMappingURL=_app.js.44025a2b6534daeaf0fa.hot-update.js.map