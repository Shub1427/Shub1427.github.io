webpackHotUpdate("static/development/pages/index.js",{

/***/ "./ui/nav.tsx":
/*!********************!*\
  !*** ./ui/nav.tsx ***!
  \********************/
/*! exports provided: Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anchor */ "./ui/anchor.tsx");

var _jsxFileName = "/home/subroto/Subroto/projects/shub1427.github.io/ui/nav.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  const data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  margin-right: 30px;\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  list-style: none;\n  margin: 0;\n  padding: 15px;\n  font-size: 24px;\n  color: ", ";\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n\n  .banner {\n    margin-right: 30px;\n\n    .banner-image {\n      height: 64px;\n    }\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
const NavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul(_templateObject2(), props => props.theme.colors.white);
const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li(_templateObject3());
const Nav = props => {
  const theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"]);
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(NavWrapper, {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, props.links.slice(0, props.links.length / 2).map(link => __jsx(NavLink, {
    key: link.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(_anchor__WEBPACK_IMPORTED_MODULE_3__["Anchor"], {
    href: link.url,
    highlight: "#f2f2f2",
    withNextRoute: !link.newTab,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, link.label)))), __jsx(_anchor__WEBPACK_IMPORTED_MODULE_3__["Anchor"], {
    className: "banner",
    href: props.bannerUrl,
    withNextRoute: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("div", {
    className: "banner-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, props.banner)), __jsx(NavWrapper, {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, props.links.slice(0, props.links.length / 2).map(link => __jsx(NavLink, {
    key: link.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx(_anchor__WEBPACK_IMPORTED_MODULE_3__["Anchor"], {
    href: link.url,
    highlight: "#f2f2f2",
    withNextRoute: !link.newTab,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, link.label)))));
};

/***/ })

})
//# sourceMappingURL=index.js.bbbc0a97f2ab3fe20b68.hot-update.js.map