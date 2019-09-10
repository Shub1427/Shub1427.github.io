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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./anchor */ "./ui/anchor.tsx");


var _jsxFileName = "/home/subroto/Subroto/projects/shub1427.github.io/ui/nav.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject2() {
  const data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: inline-block;\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  list-style: none;\n  margin: 0;\n  padding: 15px;\n  font-size: 24px;\n  color: ", ";\n\n  .banner-list {\n    display: inline-block;\n    margin-right: 32px;\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




const NavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul(_templateObject(), props => props.theme.colors.white);
const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li(_templateObject2());
const Nav = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["withTheme"])(props => __jsx(NavWrapper, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx("li", {
  className: "banner-list",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx(_anchor__WEBPACK_IMPORTED_MODULE_4__["Anchor"], {
  href: props.bannerUrl,
  highlight: "#d0ffc1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, props.banner)), props.links.map(link => __jsx(NavLink, {
  key: link.label,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, __jsx("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  href: link.url
}, link.newTab ? {
  target: 'blank'
} : {}, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}), link.label)))));

/***/ })

})
//# sourceMappingURL=index.js.e3957bc8d060d98fc9a6.hot-update.js.map