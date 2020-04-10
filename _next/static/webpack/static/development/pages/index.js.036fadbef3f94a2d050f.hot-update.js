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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/components/archive-list.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const pages = [{
  key: 'astro-v2',
  link: '/astro-v2',
  text: 'Astro Blaster V2 in Rust'
}];
const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    margin: '0 auto',
    padding: '32px 16px'
  }
});
function ArchiveList() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "nav",
    "aria-label": "main mailbox folders",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, pages.map(page => {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
      key: page.key,
      href: page.link,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      button: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"], {
      primary: page.text,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    })));
  })));
}

/***/ }),

/***/ "./components/profile-details-header.tsx":
/*!***********************************************!*\
  !*** ./components/profile-details-header.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfileDetailsHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/components/profile-details-header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    padding: '32px 16px'
  },
  description: {
    marginTop: 32,
    maxWidth: 900
  }
});
function ProfileDetailsHeader() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("img", {
    height: "100%",
    src: "/images/logo-small.png",
    alt: "Shub's logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, " Subroto Biswas"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "subtitle1",
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "Subroto Biswas is a working professional, currently working in upGrad. This site is about his work. He is interested in various kinds of Graphics programming, and is a student by heart. Most of his work here reflects his learning and research he has been doing in Graphics using Rust lang."));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
false,

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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_archive_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/archive-list */ "./components/archive-list.tsx");
/* harmony import */ var _components_profile_details_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/profile-details-header */ "./components/profile-details-header.tsx");
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    minHeight: '100vh',
    background: '#f2f2f2'
  }
});
function IndexPage() {
  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "md",
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(_components_profile_details_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx(_components_archive_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./ui/typography.tsx":
false

})
//# sourceMappingURL=index.js.036fadbef3f94a2d050f.hot-update.js.map