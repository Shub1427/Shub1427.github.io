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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_create_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/create-element */ "./node_modules/react-syntax-highlighter/dist/cjs/create-element.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_create_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_create_element__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/components/code-diff/item.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  listItem: {
    position: 'relative'
  },
  diffAdd: {
    position: 'absolute',
    background: 'rgba(139, 195, 74, 0.2)',
    borderLeft: '2px solid rgb(139, 195, 74)',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    marginLeft: '-8px'
  },
  diffRemove: {
    background: 'rgba(255, 236, 236, 0.2)'
  }
});
function DiffItem(props) {
  const classes = useStyles();
  const rootRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let node1 = null;

  if (props.isAddedLine) {
    node1 = __jsx("div", {
      className: classes.diffAdd,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (rootRef.current) {
      var _rootRef$current$pare, _rootRef$current$pare2;

      const width = (_rootRef$current$pare = rootRef.current.parentElement) === null || _rootRef$current$pare === void 0 ? void 0 : (_rootRef$current$pare2 = _rootRef$current$pare.parentElement) === null || _rootRef$current$pare2 === void 0 ? void 0 : _rootRef$current$pare2.scrollWidth;
      node1 = __jsx("div", {
        className: classes.diffAdd,
        style: {
          width
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 15
        }
      });
    }
  }, []);
  const node2 = react_syntax_highlighter_dist_cjs_create_element__WEBPACK_IMPORTED_MODULE_2___default()({
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
      lineNumber: 53,
      columnNumber: 5
    }
  }, node1, node2);
}

/***/ })

})
//# sourceMappingURL=_app.js.3ded336b67983e2e5791.hot-update.js.map