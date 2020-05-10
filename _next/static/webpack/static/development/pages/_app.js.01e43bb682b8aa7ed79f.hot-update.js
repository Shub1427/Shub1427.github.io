webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./utils/theme.ts":
/*!************************!*\
  !*** ./utils/theme.ts ***!
  \************************/
/*! exports provided: HEADER_FONT_FACE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_FONT_FACE", function() { return HEADER_FONT_FACE; });
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
const HEADER_FONT_FACE = "'Merriweather Sans', sans-serif";
theme.typography.h1.fontFamily = HEADER_FONT_FACE;
theme.typography.h2.fontFamily = HEADER_FONT_FACE;
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ })

})
//# sourceMappingURL=_app.js.01e43bb682b8aa7ed79f.hot-update.js.map