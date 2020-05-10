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
/* harmony import */ var components_dark_mode_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/dark-mode-switch */ "./components/dark-mode-switch.tsx");
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
  title: {
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 200
  },
  description: {
    marginTop: 16,
    wordSpacing: 3,
    lineHeight: 1.7,
    fontWeight: 400,
    color: theme.palette.type === 'dark' ? '#e2e2e2' : '#666'
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
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(components_dark_mode_switch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx("img", {
    height: "100%",
    src: "/images/logo-small.png",
    alt: "Shub's logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.title,
    variant: "h3",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "Subroto Biswas"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "subtitle1",
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, "Subroto Biswas is a working professional, currently working at \xA0", __jsx("span", {
    className: classes.highlight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "upGrad"), ", as a Senior Software Engineer. This site is about his work, learnings and research. He is interested in various kinds of Graphics programming and is a student by heart. Most of his professional work, involves Web Development, using Javascript and ReactJS, but he is also quite fond of Graphics and in his leisure time he works on Game Dev and Render engines using Rust Lang."), __jsx("div", {
    className: classes.socialWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx(social.icon, {
    style: {
      fill: social.color
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  })))));
}

/***/ })

})
//# sourceMappingURL=index.js.11836b0a108c267e8eb1.hot-update.js.map