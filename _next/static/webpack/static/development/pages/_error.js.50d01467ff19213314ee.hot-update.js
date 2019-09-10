webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./components/errors/404.tsx":
/*!***********************************!*\
  !*** ./components/errors/404.tsx ***!
  \***********************************/
/*! exports provided: Error404 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404", function() { return Error404; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/subroto/Subroto/projects/shub1427.github.io/components/errors/404.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Error404 extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, "Error 404 Occured");
  }

}

/***/ }),

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
// https://cdn.dribbble.com/users/2046015/screenshots/6015680/08_404.gif



class Error extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  static getInitialProps(ctx) {
    const statusCode = ctx.res ? ctx.res.statusCode : ctx.err ? ctx.err.statusCode : null;
    return {
      statusCode
    };
  }

  render() {
    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, this.props.statusCode ? this.mapToPage(this.props.statusCode) : 'An error occurred on client');
  }

  mapToPage(code) {
    switch (code) {
      case 404:
        return __jsx(_components_errors_404__WEBPACK_IMPORTED_MODULE_0__["Error404"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
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
//# sourceMappingURL=_error.js.50d01467ff19213314ee.hot-update.js.map