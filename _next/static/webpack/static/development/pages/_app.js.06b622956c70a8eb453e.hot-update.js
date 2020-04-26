webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/note-subtitle.tsx":
/*!**************************************!*\
  !*** ./components/note-subtitle.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoteSubtitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/components/note-subtitle.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
    color: '#888',
    marginTop: '-48px'
  },
  description: {
    display: 'inline-block'
  },
  separator: {
    fontSize: '1.5em',
    lineHeight: 0.8,
    display: 'inline-block',
    margin: '0 4px'
  }
});
/**
 * Getting Reading Time estimate is difficult, if you don't have char count
 * This Component requires a char count, to get an estimate for reading time.
 *
 * Googling avg reading time, I found that an adults avg reading time is,
 * 200 - 250 words peer minute, thus I will be using 225 words per minute as
 * my reading time estimate.
 */

function NoteSubtitle(props) {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body2",
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(props.date, 'MMM dd')), __jsx("span", {
    className: classes.separator,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, "\u2022"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body2",
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, Math.ceil(props.totalWords / 225), " min read"));
}

/***/ })

})
//# sourceMappingURL=_app.js.06b622956c70a8eb453e.hot-update.js.map