webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
false,

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
false,

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
false,

/***/ "./node_modules/is-what/dist/index.esm.js":
false,

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
false,

/***/ "./node_modules/merge-anything/dist/index.esm.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
false,

/***/ "./node_modules/stylis-rule-sheet/index.js":
false,

/***/ "./node_modules/stylis/stylis.min.js":
false,

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/theme */ "./utils/theme.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/pages/_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;








const mdComponents = {
  h1: props => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    variant: "h2"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 23
    }
  })),
  h2: props => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    variant: "h3"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 23
    }
  })),
  h3: props => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    variant: "h4"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 23
    }
  })),
  p: props => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    variant: "body1"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 22
    }
  })),
  Button: _material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"]
};
class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_4___default.a {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "/css/main.css",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    })), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
      theme: _utils_theme__WEBPACK_IMPORTED_MODULE_2__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }), __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["MDXProvider"], {
      components: mdComponents,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    })))));
  }

}

/***/ }),

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
    // primary: {
    //   main: '#5491da',
    //   light: '#7ea7dd',
    //   dark: '#3f5ea5',
    // },
    primary: {
      main: '#DEC6A2',
      light: '#FAF9F2',
      dark: '#8E8369'
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
      default: '#FCFCF4',
      paper: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["common"].white
    }
  }
});
theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["responsiveFontSizes"])(theme);
const HEADER_FONT_FACE = "'Merriweather Sans', sans-serif";
theme.typography.h1.fontFamily = HEADER_FONT_FACE;
theme.typography.h2.fontFamily = HEADER_FONT_FACE;
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ })

})
//# sourceMappingURL=_app.js.036fadbef3f94a2d050f.hot-update.js.map