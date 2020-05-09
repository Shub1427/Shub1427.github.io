webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/code-diff/code-diff.tsx":
/*!********************************************!*\
  !*** ./components/code-diff/code-diff.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CodeDiff; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/languages/prism/jsx */ "./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/jsx.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_jsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_languages_prism_jsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_rust__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/languages/prism/rust */ "./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/rust.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_rust__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_languages_prism_rust__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_darcula__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/prism/darcula */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/darcula.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_darcula__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism_darcula__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item */ "./components/code-diff/item.tsx");
/* harmony import */ var _window_control_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../window-control-icons */ "./components/window-control-icons.tsx");
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/components/code-diff/code-diff.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__["PrismLight"].registerLanguage('js', react_syntax_highlighter_dist_cjs_languages_prism_jsx__WEBPACK_IMPORTED_MODULE_3___default.a);
react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__["PrismLight"].registerLanguage('rust', react_syntax_highlighter_dist_cjs_languages_prism_rust__WEBPACK_IMPORTED_MODULE_4___default.a);
const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
    marginLeft: '-16px !important',
    padding: '16px 0 64px 0 !important'
  }
}));

const rowRenderer = (addedLines, removedLines) => ({
  rows,
  stylesheet,
  useInlineStyles
}) => {
  return rows.map((row, index) => {
    return __jsx(_item__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: "code-segement".concat(index),
      isAddedLine: addedLines.includes(index + 1),
      isRemovedLine: removedLines.includes(index + 1),
      index: index,
      row: row,
      stylesheet: stylesheet,
      useInlineStyles: useInlineStyles,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }
    });
  });
};

function CodeDiff(props) {
  const classes = useStyles();
  let language = props.lang;

  switch (language) {
    case 'rs':
      language = 'rust';
      break;

    default:
      language = 'jsx';
      break;
  }

  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.windowBlock,
    style: {
      background: react_syntax_highlighter_dist_cjs_styles_prism_darcula__WEBPACK_IMPORTED_MODULE_5___default.a[':not(pre) > code[class*="language-"]'].background
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.windowControls,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx(_window_control_icons__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  })), __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__["PrismLight"], {
    className: classes.codeBlock,
    language: language,
    style: react_syntax_highlighter_dist_cjs_styles_prism_darcula__WEBPACK_IMPORTED_MODULE_5___default.a,
    showLineNumbers: !props.hideLines,
    wrapLines: true,
    renderer: rowRenderer(props.addedLineNumbers, props.removedLineNumbers),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, props.children)));
}

/***/ })

})
//# sourceMappingURL=_app.js.3593295938c3d0db500e.hot-update.js.map