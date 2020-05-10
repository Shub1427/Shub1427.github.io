webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/dark-mode-switch.tsx":
/*!*****************************************!*\
  !*** ./components/dark-mode-switch.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var hoc_palette_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoc/palette-mode */ "./hoc/palette-mode.tsx");
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/components/dark-mode-switch.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    width: '100%',
    height: '100%'
  }
});

const DarkModeSwitch = () => {
  const classes = useStyles();
  const {
    darkMode,
    setDarkMode
  } = Object(hoc_palette_mode__WEBPACK_IMPORTED_MODULE_3__["usePaletteModeStore"])();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    className: classes.root,
    container: true,
    justify: "flex-end",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: () => setDarkMode(!darkMode),
    color: "primary",
    "aria-label": "Toggle light/dark theme",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, darkMode ? __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Brightness7"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }) : __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Brightness4"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 39
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DarkModeSwitch);

/***/ })

})
//# sourceMappingURL=index.js.ab0ddf4266ce60455757.hot-update.js.map