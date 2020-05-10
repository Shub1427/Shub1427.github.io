webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/mdx-h1.tsx":
/*!*******************************!*\
  !*** ./components/mdx-h1.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXH1; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _note_subtitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note-subtitle */ "./components/note-subtitle.tsx");
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/components/mdx-h1.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    color: theme.palette.type === 'dark' ? '#e2e2e2' : '#222',
    padding: '0',
    marginBottom: 48
  },
  heading: {
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 200
  },
  subtitleWrapper: {
    marginTop: 12,
    fontWeight: 600
  },
  subtitle: {
    fontWeight: 600
  }
}));
function MDXH1(props) {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.heading,
    variant: "h2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, props.children), props.updatedAt && props.wordCount && __jsx(_note_subtitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.subtitleWrapper,
    fontClasses: classes.subtitle,
    date: props.updatedAt,
    totalWords: props.wordCount,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }));
}

/***/ })

})
//# sourceMappingURL=_app.js.6baccace4208578edb6a.hot-update.js.map