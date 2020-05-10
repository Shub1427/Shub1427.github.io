webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/thematic-break.tsx":
/*!***************************************!*\
  !*** ./components/thematic-break.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThematicBreak; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/components/thematic-break.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  thematicBreak: {
    color: theme.palette.type === 'dark' ? '#d2d2d2' : '#777',
    textAlign: 'center',
    marginTop: '32px',
    fontSize: '32px',
    fontWeight: 300,
    border: 'medium none',
    '&:before': {
      content: "'***'",
      lineHeight: 1.4,
      textIndent: '1em',
      letterSpacing: '1em'
    }
  }
}));
function ThematicBreak() {
  const classes = useStyles();
  return __jsx("hr", {
    className: classes.thematicBreak,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 10
    }
  });
}

/***/ })

})
//# sourceMappingURL=_app.js.7cb241796d1897db10c8.hot-update.js.map