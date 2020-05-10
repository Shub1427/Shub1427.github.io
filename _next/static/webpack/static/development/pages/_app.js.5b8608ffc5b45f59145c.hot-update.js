webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/blockquote.tsx":
/*!***********************************!*\
  !*** ./components/blockquote.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blockquote; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/components/blockquote.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    background: theme.palette.type === 'dark' ? '#444' : '#f2f2f2',
    padding: '16px 8px',
    color: theme.palette.type === 'dark' ? '#aaa' : '#777',
    margin: '12px 0',
    '& > p, & > ul, & > ol': {
      color: theme.palette.type === 'dark' ? '#999' : '#888',
      fontSize: '0.9rem'
    },
    'p + &, & + p, & + &': {
      marginTop: 32
    }
  },
  info: {
    borderLeft: "12px solid ".concat(theme.palette.type === 'dark' ? _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].blue['800'] : _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].blue['300'])
  },
  warn: {
    borderLeft: "12px solid ".concat(theme.palette.type === 'dark' ? _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].yellow['800'] : _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].amber['300'])
  },
  error: {
    borderLeft: "12px solid ".concat(theme.palette.type === 'dark' ? _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].deepOrange['900'] : _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].red['400'])
  }
}));
function Blockquote(props) {
  const classes = useStyles();
  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, classes[props.type]);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    elevation: 0,
    className: rootClasses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, props.children);
}
Blockquote.defaultProps = {
  type: 'info'
};

/***/ })

})
//# sourceMappingURL=_app.js.5b8608ffc5b45f59145c.hot-update.js.map