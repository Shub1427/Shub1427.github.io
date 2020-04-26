webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/code-diff/item.tsx":
/*!***************************************!*\
  !*** ./components/code-diff/item.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiffItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-immer */ "./node_modules/use-immer/dist/use-immer.module.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_create_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/create-element */ "./node_modules/react-syntax-highlighter/dist/cjs/create-element.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_create_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_create_element__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/components/code-diff/item.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  listItem: {
    position: 'relative'
  },
  diffNode: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    marginLeft: '-14px'
  },
  diffAdd: {
    background: 'rgba(139, 195, 74, 0.2)',
    borderLeft: '4px solid rgb(139, 195, 74)'
  },
  diffRemove: {
    background: 'rgba(239, 154, 154, 0.2)',
    borderLeft: '4px solid rgb(239, 154, 154)'
  }
});
function DiffItem(props) {
  const classes = useStyles();
  const addClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.diffNode, classes.diffAdd);
  const removeClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.diffNode, classes.diffRemove);
  const [styles, updateWidth] = Object(use_immer__WEBPACK_IMPORTED_MODULE_1__["useImmer"])({
    width: 'auto'
  });
  const rootRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (rootRef.current) {
      var _rootRef$current$pare, _rootRef$current$pare2;

      const width = (_rootRef$current$pare = rootRef.current.parentElement) === null || _rootRef$current$pare === void 0 ? void 0 : (_rootRef$current$pare2 = _rootRef$current$pare.parentElement) === null || _rootRef$current$pare2 === void 0 ? void 0 : _rootRef$current$pare2.scrollWidth;
      updateWidth(draft => {
        draft.width = "".concat(width, "px");
      });
    }
  }, []);
  const node2 = react_syntax_highlighter_dist_cjs_create_element__WEBPACK_IMPORTED_MODULE_4___default()({
    node: props.row,
    stylesheet: props.stylesheet,
    useInlineStyles: props.useInlineStyles
  });
  return __jsx("div", {
    ref: rootRef,
    className: classes.listItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, props.isAddedLine && __jsx("div", {
    className: addClasses,
    style: {
      width: styles.width
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), props.isRemovedLine && __jsx("div", {
    className: removeClasses,
    style: {
      width: styles.width
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), node2);
}

/***/ })

})
//# sourceMappingURL=_app.js.7e00c2b4090c94b092e7.hot-update.js.map