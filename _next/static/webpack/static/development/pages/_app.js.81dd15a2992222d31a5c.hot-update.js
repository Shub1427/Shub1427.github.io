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
/* harmony import */ var _window_control_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./window-control-icons */ "./components/window-control-icons.tsx");
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
    padding: '0 0 64px 0 !important',
    '& *::selection': {
      background: 'red'
    },
    '& *::-moz-selection': {
      background: 'red'
    }
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
      lineNumber: 77,
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
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.windowControls,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx(_window_control_icons__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  })), __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismLight"], {
    language: language,
    className: classes.codeBlock,
    style: react_syntax_highlighter_dist_cjs_styles_prism_darcula__WEBPACK_IMPORTED_MODULE_7___default.a,
    showLineNumbers: linesEnabledStr == null ? showLines : linesEnabled,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, children)));
}

/***/ })

})
//# sourceMappingURL=_app.js.81dd15a2992222d31a5c.hot-update.js.map