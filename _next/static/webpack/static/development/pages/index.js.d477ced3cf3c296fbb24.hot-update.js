webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/profile-details-header.tsx":
/*!***********************************************!*\
  !*** ./components/profile-details-header.tsx ***!
  \***********************************************/
/*! exports provided: ProfileDetailsHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailsHeader", function() { return ProfileDetailsHeader; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _app_data_nav_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-data/nav-links */ "./app-data/nav-links.ts");
/* harmony import */ var _ui_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/avatar */ "./ui/avatar.tsx");
/* harmony import */ var _ui_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/nav */ "./ui/nav.tsx");
/* harmony import */ var _ui_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/typography */ "./ui/typography.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/home/subroto/Subroto/projects/shub1427.github.io/components/profile-details-header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _templateObject2() {
  const data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n\n  .profile-avatar-wrapper {\n    position: relative;\n    transform: translate(0, -50%);\n  }\n\n  .about-wrapper {\n    margin-top: -90px;\n  }\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  align-items: center;\n  background: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  width: 100%;\n  min-height: 250px;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}







const TopContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject(), props => props.theme.colors.blackDark);
const BottomContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject2());

class CProfileDetailsHeader extends react__WEBPACK_IMPORTED_MODULE_5___default.a.Component {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(TopContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(_ui_nav__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
      banner: __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "'Hello'"),
      bannerUrl: "/",
      links: _app_data_nav_links__WEBPACK_IMPORTED_MODULE_1__["navLinks"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })), __jsx(BottomContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("div", {
      className: "profile-avatar-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(_ui_avatar__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      size: 200,
      src: "/static/images/profile.png",
      bordered: true,
      withShadow: true,
      color: "#FFAB00",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })), __jsx("div", {
      className: "about-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx(_ui_typography__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      type: "h1",
      weight: "bold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Subroto Biswas"))));
  }

}

const ProfileDetailsHeader = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["withTheme"])(CProfileDetailsHeader);

/***/ })

})
//# sourceMappingURL=index.js.d477ced3cf3c296fbb24.hot-update.js.map