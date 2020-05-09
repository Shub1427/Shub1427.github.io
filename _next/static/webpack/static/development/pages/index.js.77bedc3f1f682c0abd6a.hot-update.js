webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _constants_social_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/social-links */ "./constants/social-links.tsx");
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/components/profile-details-header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
    marginTop: 16,
    maxWidth: 900
  },
  highlight: {
    color: "".concat(theme.palette.primary.light),
    fontWeight: 'bold'
  },
  socialWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: 16
  }
}));
function ProfileDetailsHeader() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("img", {
    height: "100%",
    src: "/images/logo-small.png",
    alt: "Shub's logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h3",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "Subroto Biswas"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "subtitle1",
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "Subroto Biswas is a working professional, currently working at \xA0", __jsx("span", {
    className: classes.highlight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "upGrad"), ", as a Senior Software Engineer. This site is about his work, learnings and research. He is interested in various kinds of Graphics programming and is a student by heart. Most of his professional work, involves Web Development, using Javascript and ReactJS, but he is also quite fond of Graphics and in his leisure time he works on Game Dev and Render engines using Rust Lang."), __jsx("div", {
    className: classes.socialWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, _constants_social_links__WEBPACK_IMPORTED_MODULE_2__["socialLinks"].map(social => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    key: social.key,
    href: social.link,
    target: "_blank",
    color: "secondary",
    "aria-label": social.key,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx(social.icon, {
    style: {
      fill: social.color
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  })))));
}

/***/ })

})
//# sourceMappingURL=index.js.77bedc3f1f682c0abd6a.hot-update.js.map