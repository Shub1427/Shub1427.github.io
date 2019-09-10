webpackHotUpdate("static/development/pages/index.js",{

/***/ "./ui/anchor.tsx":
/*!***********************!*\
  !*** ./ui/anchor.tsx ***!
  \***********************/
/*! exports provided: Anchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Anchor", function() { return Anchor; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/home/subroto/Subroto/projects/shub1427.github.io/ui/anchor.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  const data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  .highlighter {\n    background-color: ", ";\n    height: 2px;\n    width: 100%;\n    margin-top: 3px;\n    transform: scale(0, 1);\n    transition: transform 0.3s ease-in-out;\n  }\n\n  &:hover {\n    .highlighter {\n      transform: scale(1, 1);\n    }\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}





// Will use `useMemo` later on...
const CAnchor = props => __jsx("div", {
  className: props.className,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, !!props.withNextRoute ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: props.href,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, props.children)) : __jsx("a", {
  href: props.href,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, props.children), props.highlight && __jsx("div", {
  className: "highlighter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}));

const Anchor = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(CAnchor)(_templateObject(), props => props.highlight);

/***/ })

})
//# sourceMappingURL=index.js.49e2959339690c677c45.hot-update.js.map