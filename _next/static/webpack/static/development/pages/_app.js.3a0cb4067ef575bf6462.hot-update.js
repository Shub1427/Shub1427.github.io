webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./utils/theme.ts":
/*!************************!*\
  !*** ./utils/theme.ts ***!
  \************************/
/*! exports provided: default, darkTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return darkTheme; });
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
/**
 * Dark Theme
 */

let darkTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    type: 'dark',
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
      default: '#333',
      paper: '#555'
    }
  },
  typography: {
    fontFamily: ['"Montserrat"', 'sans-serif'].join(',')
  }
});
darkTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["responsiveFontSizes"])(darkTheme);
/* harmony default export */ __webpack_exports__["default"] = (theme);


/***/ })

})
//# sourceMappingURL=_app.js.3a0cb4067ef575bf6462.hot-update.js.map