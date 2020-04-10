webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/archive-list.tsx":
/*!*************************************!*\
  !*** ./components/archive-list.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArchiveList; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");

var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/components/archive-list.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  const data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 auto;\n  padding: 32px 16px;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}







const pages = [{
  key: 'astro-v2',
  link: '/astro-v2',
  text: 'Astro Blaster V2 in Rust'
}]; // Need to get rid of styled-components

const Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
function ArchiveList() {
  return __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: "nav",
    "aria-label": "main mailbox folders",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, pages.map(page => {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: page.key,
      href: page.link,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      button: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      primary: page.text,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    })));
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.876e0d0a05bb93498ff1.hot-update.js.map