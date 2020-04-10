webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/polka-pattern.tsx":
/*!**************************************!*\
  !*** ./components/polka-pattern.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PolkaPattern; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/components/polka-pattern.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function PolkaPattern() {
  return __jsx("svg", {
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      zIndex: -1,
      left: 0,
      top: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("pattern", {
    id: "polka-dots",
    x: "0",
    y: "0",
    patternUnits: "userSpaceOnUse",
    width: "25",
    height: "25",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("circle", {
    cx: "12.5",
    cy: "12.5",
    r: "2",
    fill: "#e3f2fd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }))), __jsx("rect", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%",
    fill: "url(#polka-dots)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_polka_pattern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/polka-pattern */ "./components/polka-pattern.tsx");
/* harmony import */ var _components_archive_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/archive-list */ "./components/archive-list.tsx");
/* harmony import */ var _components_profile_details_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/profile-details-header */ "./components/profile-details-header.tsx");
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    position: 'relative',
    minHeight: '100vh'
  }
});
function IndexPage() {
  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "md",
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(_components_polka_pattern__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(_components_profile_details_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(_components_archive_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.8eb7e3ef9281cb78e508.hot-update.js.map