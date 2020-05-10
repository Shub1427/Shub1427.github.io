webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./utils/theme.ts":
/*!************************!*\
  !*** ./utils/theme.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");

 // Create a theme instance.
// Theme Colors from - https://picular.co/rock

let theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    common: {
      white: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"].white,
      black: '#333'
    },
    primary: {
      main: '#5491da',
      light: '#7ea7dd',
      dark: '#3f5ea5'
    },
    secondary: {
      main: '#8FADDC',
      light: '#C2D4F7',
      dark: '#6E7882'
    },
    error: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"].A400
    },
    background: {
      default: '#FFFFFF',
      paper: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"].white
    }
  },
  typography: {
    fontFamily: ['"Montserrat"', 'sans-serif'].join(',')
  }
});
theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["responsiveFontSizes"])(theme);
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ })

})
//# sourceMappingURL=_app.js.cdb65fc112d92b3c6f3d.hot-update.js.map