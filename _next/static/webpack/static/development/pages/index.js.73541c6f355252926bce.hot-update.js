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
/* harmony import */ var _hoc_palette_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hoc/palette-mode */ "./hoc/palette-mode.tsx");
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/components/polka-pattern.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function PolkaPattern() {
  const {
    darkMode
  } = Object(_hoc_palette_mode__WEBPACK_IMPORTED_MODULE_1__["usePaletteModeStore"])();
  const color = darkMode ? 'rgba(255,236,179, 0.3)' : '#e3f2fd';
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
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("pattern", {
    id: "polka-dots",
    x: "0",
    y: "0",
    patternUnits: "userSpaceOnUse",
    width: "50",
    height: "50",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("circle", {
    fill: color,
    cx: "12.5",
    cy: "12.5",
    r: "2.0833",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx("circle", {
    fill: color,
    cx: "37.5",
    cy: "12.5",
    r: "2.0833",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx("circle", {
    fill: color,
    cx: "0",
    cy: "37.5",
    r: "2.0833",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), __jsx("circle", {
    fill: color,
    cx: "25",
    cy: "37.5",
    r: "2.0833",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx("circle", {
    fill: color,
    cx: "50",
    cy: "37.5",
    r: "2.0833",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
      lineNumber: 35,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.73541c6f355252926bce.hot-update.js.map