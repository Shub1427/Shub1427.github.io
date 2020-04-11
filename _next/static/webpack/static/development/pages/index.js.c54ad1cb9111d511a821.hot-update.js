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
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/formatDistance */ "./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _constants_archive_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/archive-list */ "./constants/archive-list.ts");
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/components/archive-list.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    margin: '0 auto',
    padding: '32px 16px',
    width: '90%'
  },
  centered: {
    display: 'flex',
    justifyContent: 'center'
  },
  tags: {
    fontSize: 14,
    marginBottom: 12
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    color: "".concat(theme.palette.secondary.dark),
    padding: '0 0 16px'
  },
  dates: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#aaa',
    fontSize: '0.8rem',
    marginBottom: 16
  }
}));

const getTagComponent = page => {
  return page.tags.map(tag => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Chip"], {
      key: tag,
      label: tag,
      size: "small",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 12
      }
    });
  });
};

function ArchiveList() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    className: classes.centered,
    variant: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, "Archives"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
    component: "nav",
    "aria-label": "main mailbox folders",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, _constants_archive_list__WEBPACK_IMPORTED_MODULE_4__["archiveList"].map(page => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
      key: page.key,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      className: classes.root,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardContent"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: classes.tags,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 19
      }
    }, getTagComponent(page)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      className: classes.title,
      variant: "h5",
      component: "h2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 19
      }
    }, page.title), __jsx("div", {
      className: classes.dates,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 19
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }
    }, "Updated: ", Object(date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_2__["default"])(page.updateAt, new Date()), " ago"), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }
    }, "Created: ", Object(date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_2__["default"])(page.createdAt, new Date()), " ago")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      variant: "body2",
      component: "p",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 19
      }
    }, page.description)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardActions"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
      href: page.link,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      color: "primary",
      size: "small",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }
    }, "Visit")))));
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.c54ad1cb9111d511a821.hot-update.js.map