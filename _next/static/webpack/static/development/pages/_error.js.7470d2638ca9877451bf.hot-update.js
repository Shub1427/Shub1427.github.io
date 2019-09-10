webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./pages/_error.tsx":
/*!**************************!*\
  !*** ./pages/_error.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_errors_404__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/errors/404 */ "./components/errors/404.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/subroto/Subroto/projects/shub1427.github.io/pages/_error.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Error extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  static getInitialProps(ctx) {
    const statusCode = ctx.res ? ctx.res.statusCode : ctx.err ? ctx.err.statusCode : null;
    return {
      statusCode
    };
  }

  render() {
    return this.props.statusCode ? this.mapToPage(this.props.statusCode) : __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "An error occurred on client'");
  }

  mapToPage(code) {
    switch (code) {
      case 404:
        return __jsx(_components_errors_404__WEBPACK_IMPORTED_MODULE_0__["Error404"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        });

      default:
        return "An error ".concat(this.props.statusCode, " occurred on server");
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ })

})
//# sourceMappingURL=_error.js.7470d2638ca9877451bf.hot-update.js.map