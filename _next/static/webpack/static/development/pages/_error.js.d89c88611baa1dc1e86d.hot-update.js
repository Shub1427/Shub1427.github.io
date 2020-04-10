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
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/components/errors/404.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: 'Special Elite', serif;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 100vh;\n\n  font-size: 16px;\n\n  @media (max-width: 600px) {\n    font-size: 10px;\n  }\n\n  .ufo {\n    width: 50%;\n    max-width: 800px;\n    min-width: 500px;\n  }\n\n  .code {\n    font-size: 4em;\n    margin: 0 0 15px;\n  }\n\n  .description {\n    font-size: 1.5em;\n    margin: 0;\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}

/**
 * I appreciate the work and effort done by Alona Shostko.
 * Whose dribble image I am using here for my custom 404 Page not found.
 *
 * Check his work here: https://dribbble.com/shots/6015680-404-Page-not-found-UFO
 */


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
class Error404 extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx(Wrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "ufo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, __jsx("img", {
      width: "100%",
      src: "https://cdn.dribbble.com/users/2046015/screenshots/6015680/08_404.gif",
      alt: "ufo gif: https://dribbble.com/shots/6015680-404-Page-not-found-UFO",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    })), __jsx("p", {
      className: "code",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }, "404"), __jsx("p", {
      className: "description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }
    }, "You are at the wrong place at the wrong time..."));
  }

}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fsubroto.biswas%2FSubroto%2Fshub1427.github.io%2Fpages%2F_error.tsx!./":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fsubroto.biswas%2FSubroto%2Fshub1427.github.io%2Fpages%2F_error.tsx ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_error", function() {
      var mod = __webpack_require__(/*! ./pages/_error.tsx */ "./pages/_error.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/_error.tsx */ "./pages/_error.tsx", function() {
          if(!next.router.components["/_error"]) return
          var updatedPage = __webpack_require__(/*! ./pages/_error.tsx */ "./pages/_error.tsx")
          next.router.update("/_error", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

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
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/pages/_error.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Error extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  // This is proper way to handle error pages... But since I am using Static Page (Github Pages)
  // Following static method is never called thus, no statusCode is set...
  // Check this for details: https://github.com/zeit/next.js#custom-error-handling
  static getInitialProps(ctx) {
    const statusCode = ctx.res ? ctx.res.statusCode : ctx.err ? ctx.err.statusCode : null;
    return {
      statusCode
    };
  }

  render() {
    return __jsx(_components_errors_404__WEBPACK_IMPORTED_MODULE_0__["Error404"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 12
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ 1:
/*!****************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fsubroto.biswas%2FSubroto%2Fshub1427.github.io%2Fpages%2F_error.tsx ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fsubroto.biswas%2FSubroto%2Fshub1427.github.io%2Fpages%2F_error.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fsubroto.biswas%2FSubroto%2Fshub1427.github.io%2Fpages%2F_error.tsx!./");


/***/ })

})
//# sourceMappingURL=_error.js.d89c88611baa1dc1e86d.hot-update.js.map