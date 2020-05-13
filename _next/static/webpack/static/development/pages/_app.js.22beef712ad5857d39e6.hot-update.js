webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/footer.tsx":
/*!*******************************!*\
  !*** ./components/footer.tsx ***!
  \*******************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/subroto.biswas/Subroto/shub1427.github.io/components/footer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n // import { ShareIcon } from './icons';\n\nconst useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(theme => ({\n  root: {\n    display: 'flex',\n    justifyContent: 'space-between',\n    alignContent: 'center',\n    alignItems: 'center',\n    marginTop: 128,\n    padding: '0 16px',\n    [theme.breakpoints.down('xs')]: {\n      flexDirection: 'column'\n    }\n  },\n  copyright: {\n    color: '#aaa',\n    fontWeight: 'bold',\n    [theme.breakpoints.down('xs')]: {\n      marginBottom: 16\n    }\n  },\n  buttonWrapper: {\n    display: 'flex',\n    justifyContent: 'flex-end',\n    alignItems: 'center',\n    flexWrap: 'wrap'\n  },\n  buttonSpan: {\n    '&+&': {\n      marginTop: 0,\n      marginLeft: 16\n    },\n    display: 'inline-flex',\n    flex: 1,\n    maxWidth: 100\n  },\n  share: {\n    color: '#fff',\n    background: '#444',\n    '&:hover, &focus, &:active': {\n      background: '#333'\n    }\n  },\n  fb: {\n    color: '#fff',\n    background: '#4361b3',\n    '&:hover, &focus, &:active': {\n      background: '#254395'\n    }\n  },\n  tw: {\n    color: '#fff',\n    background: '#4fafed',\n    '&:hover, &focus, &:active': {\n      background: '#3191CF'\n    }\n  }\n}));\n\nconst facebookShare = (event, url) => {\n  event.preventDefault();\n  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'facebook-share-dialog', 'width=626,height=436');\n  return false;\n};\n\nconst shareLink = async props => {\n  try {\n    props.navigator.share && (await props.navigator.share({\n      title: props.title,\n      text: `Check out ${props.text}`,\n      url: props.url\n    }));\n    console.log('Successful share');\n  } catch (error) {\n    console.log('Error sharing', error);\n  }\n};\n\nconst renderShare = props => {\n  const shareClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.share);\n  const fbClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.fb);\n  const twClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.tw);\n  let allShare = null;\n\n  if (props.navigator.share) {\n    allShare = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n      key: \"share\",\n      size: \"small\",\n      variant: \"contained\",\n      className: shareClasses,\n      startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Share\"], {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 20\n        }\n      }),\n      onClick: () => shareLink(props),\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 7\n      }\n    }, \"Share\");\n  }\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    item: true,\n    className: props.classes.buttonWrapper,\n    xs: 12,\n    sm: 6,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    className: props.classes.buttonSpan,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }\n  }, allShare), __jsx(\"span\", {\n    className: props.classes.buttonSpan,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    key: \"twitter\",\n    size: \"small\",\n    variant: \"contained\",\n    className: twClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Twitter\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 22\n      }\n    }),\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    href: `https://twitter.com/intent/tweet?text=${props.url} - ${props.title}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 9\n    }\n  }, \"Share\")), __jsx(\"span\", {\n    className: props.classes.buttonSpan,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    key: \"facebook\",\n    size: \"small\",\n    variant: \"contained\",\n    className: fbClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Facebook\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 22\n      }\n    }),\n    onClick: event => facebookShare(event, props.url),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 9\n    }\n  }, \"Share\")));\n};\n\nfunction Footer(props) {\n  _s();\n\n  const {\n    0: isBrowser,\n    1: setIsBrowser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n  const classes = useStyles();\n  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, props.className);\n\n  const _navigator = isBrowser ? window.navigator : {};\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    setIsBrowser(true);\n  }, [true]);\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    container: true,\n    item: true,\n    xs: 12,\n    className: rootClasses,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    variant: \"body2\",\n    className: classes.copyright,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 7\n    }\n  }, \"\\xA9 Copyright 2020 Subroto Biswas\"), renderShare(_objectSpread(_objectSpread({}, props), {}, {\n    navigator: _navigator,\n    classes\n  })));\n}\n\n_s(Footer, \"g4wCLA86tZK+zidG37SPxHDIArc=\", false, function () {\n  return [useStyles];\n});\n\n_c = Footer;\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci50c3g/ODk3MyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25Db250ZW50IiwiYWxpZ25JdGVtcyIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJicmVha3BvaW50cyIsImRvd24iLCJmbGV4RGlyZWN0aW9uIiwiY29weXJpZ2h0IiwiY29sb3IiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwiYnV0dG9uV3JhcHBlciIsImZsZXhXcmFwIiwiYnV0dG9uU3BhbiIsIm1hcmdpbkxlZnQiLCJmbGV4IiwibWF4V2lkdGgiLCJzaGFyZSIsImJhY2tncm91bmQiLCJmYiIsInR3IiwiZmFjZWJvb2tTaGFyZSIsImV2ZW50IiwidXJsIiwicHJldmVudERlZmF1bHQiLCJ3aW5kb3ciLCJvcGVuIiwic2hhcmVMaW5rIiwicHJvcHMiLCJuYXZpZ2F0b3IiLCJ0aXRsZSIsInRleHQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZW5kZXJTaGFyZSIsInNoYXJlQ2xhc3NlcyIsImN4IiwiY2xhc3NlcyIsImZiQ2xhc3NlcyIsInR3Q2xhc3NlcyIsImFsbFNoYXJlIiwiRm9vdGVyIiwiaXNCcm93c2VyIiwic2V0SXNCcm93c2VyIiwidXNlU3RhdGUiLCJyb290Q2xhc3NlcyIsImNsYXNzTmFtZSIsIl9uYXZpZ2F0b3IiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBU0EsTUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFFQyxLQUFELEtBQW1CO0FBQzlDQyxNQUFJLEVBQUU7QUFDSkMsV0FBTyxFQUFFLE1BREw7QUFFSkMsa0JBQWMsRUFBRSxlQUZaO0FBR0pDLGdCQUFZLEVBQUUsUUFIVjtBQUlKQyxjQUFVLEVBQUUsUUFKUjtBQUtKQyxhQUFTLEVBQUUsR0FMUDtBQU1KQyxXQUFPLEVBQUUsUUFOTDtBQU9KLEtBQUNQLEtBQUssQ0FBQ1EsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxHQUFnQztBQUM5QkMsbUJBQWEsRUFBRTtBQURlO0FBUDVCLEdBRHdDO0FBWTlDQyxXQUFTLEVBQUU7QUFDVEMsU0FBSyxFQUFFLE1BREU7QUFFVEMsY0FBVSxFQUFFLE1BRkg7QUFHVCxLQUFDYixLQUFLLENBQUNRLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQUQsR0FBZ0M7QUFDOUJLLGtCQUFZLEVBQUU7QUFEZ0I7QUFIdkIsR0FabUM7QUFtQjlDQyxlQUFhLEVBQUU7QUFDYmIsV0FBTyxFQUFFLE1BREk7QUFFYkMsa0JBQWMsRUFBRSxVQUZIO0FBR2JFLGNBQVUsRUFBRSxRQUhDO0FBSWJXLFlBQVEsRUFBRTtBQUpHLEdBbkIrQjtBQXlCOUNDLFlBQVUsRUFBRTtBQUNWLFdBQU87QUFDTFgsZUFBUyxFQUFFLENBRE47QUFFTFksZ0JBQVUsRUFBRTtBQUZQLEtBREc7QUFLVmhCLFdBQU8sRUFBRSxhQUxDO0FBTVZpQixRQUFJLEVBQUUsQ0FOSTtBQU9WQyxZQUFRLEVBQUU7QUFQQSxHQXpCa0M7QUFrQzlDQyxPQUFLLEVBQUU7QUFDTFQsU0FBSyxFQUFFLE1BREY7QUFFTFUsY0FBVSxFQUFFLE1BRlA7QUFHTCxpQ0FBNkI7QUFDM0JBLGdCQUFVLEVBQUU7QUFEZTtBQUh4QixHQWxDdUM7QUF5QzlDQyxJQUFFLEVBQUU7QUFDRlgsU0FBSyxFQUFFLE1BREw7QUFFRlUsY0FBVSxFQUFFLFNBRlY7QUFHRixpQ0FBNkI7QUFDM0JBLGdCQUFVLEVBQUU7QUFEZTtBQUgzQixHQXpDMEM7QUFnRDlDRSxJQUFFLEVBQUU7QUFDRlosU0FBSyxFQUFFLE1BREw7QUFFRlUsY0FBVSxFQUFFLFNBRlY7QUFHRixpQ0FBNkI7QUFDM0JBLGdCQUFVLEVBQUU7QUFEZTtBQUgzQjtBQWhEMEMsQ0FBbkIsQ0FBRCxDQUE1Qjs7QUF5REEsTUFBTUcsYUFBYSxHQUFHLENBQUNDLEtBQUQsRUFBd0JDLEdBQXhCLEtBQXdDO0FBQzVERCxPQUFLLENBQUNFLGNBQU47QUFDQUMsUUFBTSxDQUFDQyxJQUFQLENBQ0csZ0RBQStDSCxHQUFJLEVBRHRELEVBRUUsdUJBRkYsRUFHRSxzQkFIRjtBQUtBLFNBQU8sS0FBUDtBQUNELENBUkQ7O0FBVUEsTUFBTUksU0FBUyxHQUFHLE1BQU9DLEtBQVAsSUFBeUQ7QUFDekUsTUFBSTtBQUNGQSxTQUFLLENBQUNDLFNBQU4sQ0FBZ0JaLEtBQWhCLEtBQ0csTUFBTVcsS0FBSyxDQUFDQyxTQUFOLENBQWdCWixLQUFoQixDQUFzQjtBQUMzQmEsV0FBSyxFQUFFRixLQUFLLENBQUNFLEtBRGM7QUFFM0JDLFVBQUksRUFBRyxhQUFZSCxLQUFLLENBQUNHLElBQUssRUFGSDtBQUczQlIsU0FBRyxFQUFFSyxLQUFLLENBQUNMO0FBSGdCLEtBQXRCLENBRFQ7QUFNQVMsV0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDRCxHQVJELENBUUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJDLEtBQTdCO0FBQ0Q7QUFDRixDQVpEOztBQWNBLE1BQU1DLFdBQVcsR0FDZlAsS0FEa0IsSUFLZjtBQUNILFFBQU1RLFlBQVksR0FBR0MsaURBQUUsQ0FBQ1QsS0FBSyxDQUFDVSxPQUFOLENBQWNyQixLQUFmLENBQXZCO0FBQ0EsUUFBTXNCLFNBQVMsR0FBR0YsaURBQUUsQ0FBQ1QsS0FBSyxDQUFDVSxPQUFOLENBQWNuQixFQUFmLENBQXBCO0FBQ0EsUUFBTXFCLFNBQVMsR0FBR0gsaURBQUUsQ0FBQ1QsS0FBSyxDQUFDVSxPQUFOLENBQWNsQixFQUFmLENBQXBCO0FBQ0EsTUFBSXFCLFFBQVEsR0FBRyxJQUFmOztBQUNBLE1BQUliLEtBQUssQ0FBQ0MsU0FBTixDQUFnQlosS0FBcEIsRUFBMkI7QUFDekJ3QixZQUFRLEdBQ04sTUFBQyx3REFBRDtBQUNFLFNBQUcsRUFBQyxPQUROO0FBRUUsVUFBSSxFQUFDLE9BRlA7QUFHRSxhQUFPLEVBQUMsV0FIVjtBQUlFLGVBQVMsRUFBRUwsWUFKYjtBQUtFLGVBQVMsRUFBRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFMYjtBQU1FLGFBQU8sRUFBRSxNQUFNVCxTQUFTLENBQUNDLEtBQUQsQ0FOMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBWUQ7O0FBRUQsU0FDRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsYUFBUyxFQUFFQSxLQUFLLENBQUNVLE9BQU4sQ0FBYzNCLGFBQXBDO0FBQW1ELE1BQUUsRUFBRSxFQUF2RDtBQUEyRCxNQUFFLEVBQUUsQ0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFFaUIsS0FBSyxDQUFDVSxPQUFOLENBQWN6QixVQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRDNEIsUUFBNUMsQ0FERixFQUVFO0FBQU0sYUFBUyxFQUFFYixLQUFLLENBQUNVLE9BQU4sQ0FBY3pCLFVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQ0UsT0FBRyxFQUFDLFNBRE47QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLFdBQU8sRUFBQyxXQUhWO0FBSUUsYUFBUyxFQUFFMkIsU0FKYjtBQUtFLGFBQVMsRUFBRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMYjtBQU1FLFVBQU0sRUFBQyxRQU5UO0FBT0UsT0FBRyxFQUFDLHFCQVBOO0FBUUUsUUFBSSxFQUFHLHlDQUF3Q1osS0FBSyxDQUFDTCxHQUFJLE1BQUtLLEtBQUssQ0FBQ0UsS0FBTSxFQVI1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsQ0FGRixFQWdCRTtBQUFNLGFBQVMsRUFBRUYsS0FBSyxDQUFDVSxPQUFOLENBQWN6QixVQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNFLE9BQUcsRUFBQyxVQUROO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxXQUFPLEVBQUMsV0FIVjtBQUlFLGFBQVMsRUFBRTBCLFNBSmI7QUFLRSxhQUFTLEVBQUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTGI7QUFNRSxXQUFPLEVBQUdqQixLQUFELElBQVdELGFBQWEsQ0FBQ0MsS0FBRCxFQUFRTSxLQUFLLENBQUNMLEdBQWQsQ0FObkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBaEJGLENBREY7QUErQkQsQ0F4REQ7O0FBMERPLFNBQVNtQixNQUFULENBQWdCZCxLQUFoQixFQUEwQztBQUFBOztBQUMvQyxRQUFNO0FBQUEsT0FBQ2UsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLE1BQTFDO0FBQ0EsUUFBTVAsT0FBTyxHQUFHNUMsU0FBUyxFQUF6QjtBQUNBLFFBQU1vRCxXQUFXLEdBQUdULGlEQUFFLENBQUNDLE9BQU8sQ0FBQ3pDLElBQVQsRUFBZStCLEtBQUssQ0FBQ21CLFNBQXJCLENBQXRCOztBQUNBLFFBQU1DLFVBQVUsR0FBR0wsU0FBUyxHQUFHbEIsTUFBTSxDQUFDSSxTQUFWLEdBQXNCLEVBQWxEOztBQUVBb0IseURBQVMsQ0FBQyxNQUFNO0FBQ2RMLGdCQUFZLE1BQVo7QUFDRCxHQUZRLEVBRU4sTUFGTSxDQUFUO0FBR0EsU0FDRSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFFBQUksTUFBcEI7QUFBcUIsTUFBRSxFQUFFLEVBQXpCO0FBQTZCLGFBQVMsRUFBRUUsV0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBNEIsYUFBUyxFQUFFUixPQUFPLENBQUMvQixTQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQURGLEVBSUc0QixXQUFXLGlDQUNQUCxLQURPO0FBRVZDLGFBQVMsRUFBRW1CLFVBRkQ7QUFHVlY7QUFIVSxLQUpkLENBREY7QUFZRDs7R0FyQmVJLE07VUFFRWhELFM7OztLQUZGZ0QsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZm9vdGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBTeW50aGV0aWNFdmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIEJ1dHRvbiwgVGhlbWUsIFR5cG9ncmFwaHksIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBTaGFyZSwgRmFjZWJvb2ssIFR3aXR0ZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xuLy8gaW1wb3J0IHsgU2hhcmVJY29uIH0gZnJvbSAnLi9pY29ucyc7XG5cbmludGVyZmFjZSBJRml4ZWROYXZiYXJQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtYXJnaW5Ub3A6IDEyOCxcbiAgICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIH0sXG4gIH0sXG4gIGNvcHlyaWdodDoge1xuICAgIGNvbG9yOiAnI2FhYScsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgbWFyZ2luQm90dG9tOiAxNixcbiAgICB9LFxuICB9LFxuICBidXR0b25XcmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gIH0sXG4gIGJ1dHRvblNwYW46IHtcbiAgICAnJismJzoge1xuICAgICAgbWFyZ2luVG9wOiAwLFxuICAgICAgbWFyZ2luTGVmdDogMTYsXG4gICAgfSxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIGZsZXg6IDEsXG4gICAgbWF4V2lkdGg6IDEwMCxcbiAgfSxcbiAgc2hhcmU6IHtcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJhY2tncm91bmQ6ICcjNDQ0JyxcbiAgICAnJjpob3ZlciwgJmZvY3VzLCAmOmFjdGl2ZSc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjMzMzJyxcbiAgICB9LFxuICB9LFxuICBmYjoge1xuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZDogJyM0MzYxYjMnLFxuICAgICcmOmhvdmVyLCAmZm9jdXMsICY6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogJyMyNTQzOTUnLFxuICAgIH0sXG4gIH0sXG4gIHR3OiB7XG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBiYWNrZ3JvdW5kOiAnIzRmYWZlZCcsXG4gICAgJyY6aG92ZXIsICZmb2N1cywgJjphY3RpdmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzMxOTFDRicsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgZmFjZWJvb2tTaGFyZSA9IChldmVudDogU3ludGhldGljRXZlbnQsIHVybDogc3RyaW5nKSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHdpbmRvdy5vcGVuKFxuICAgIGBodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT0ke3VybH1gLFxuICAgICdmYWNlYm9vay1zaGFyZS1kaWFsb2cnLFxuICAgICd3aWR0aD02MjYsaGVpZ2h0PTQzNidcbiAgKTtcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3Qgc2hhcmVMaW5rID0gYXN5bmMgKHByb3BzOiBJRml4ZWROYXZiYXJQcm9wcyAmIHsgbmF2aWdhdG9yOiBhbnkgfSkgPT4ge1xuICB0cnkge1xuICAgIHByb3BzLm5hdmlnYXRvci5zaGFyZSAmJlxuICAgICAgKGF3YWl0IHByb3BzLm5hdmlnYXRvci5zaGFyZSh7XG4gICAgICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICAgICAgdGV4dDogYENoZWNrIG91dCAke3Byb3BzLnRleHR9YCxcbiAgICAgICAgdXJsOiBwcm9wcy51cmwsXG4gICAgICB9KSk7XG4gICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWwgc2hhcmUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnRXJyb3Igc2hhcmluZycsIGVycm9yKTtcbiAgfVxufTtcblxuY29uc3QgcmVuZGVyU2hhcmUgPSAoXG4gIHByb3BzOiBJRml4ZWROYXZiYXJQcm9wcyAmIHtcbiAgICBuYXZpZ2F0b3I6IGFueTtcbiAgICBjbGFzc2VzOiBSZXR1cm5UeXBlPHR5cGVvZiB1c2VTdHlsZXM+O1xuICB9XG4pID0+IHtcbiAgY29uc3Qgc2hhcmVDbGFzc2VzID0gY3gocHJvcHMuY2xhc3Nlcy5zaGFyZSk7XG4gIGNvbnN0IGZiQ2xhc3NlcyA9IGN4KHByb3BzLmNsYXNzZXMuZmIpO1xuICBjb25zdCB0d0NsYXNzZXMgPSBjeChwcm9wcy5jbGFzc2VzLnR3KTtcbiAgbGV0IGFsbFNoYXJlID0gbnVsbDtcbiAgaWYgKHByb3BzLm5hdmlnYXRvci5zaGFyZSkge1xuICAgIGFsbFNoYXJlID0gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICBrZXk9XCJzaGFyZVwiXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjbGFzc05hbWU9e3NoYXJlQ2xhc3Nlc31cbiAgICAgICAgc3RhcnRJY29uPXs8U2hhcmUgLz59XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNoYXJlTGluayhwcm9wcyl9XG4gICAgICA+XG4gICAgICAgIFNoYXJlXG4gICAgICA8L0J1dHRvbj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5idXR0b25XcmFwcGVyfSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5idXR0b25TcGFufT57YWxsU2hhcmV9PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLmJ1dHRvblNwYW59PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAga2V5PVwidHdpdHRlclwiXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBjbGFzc05hbWU9e3R3Q2xhc3Nlc31cbiAgICAgICAgICBzdGFydEljb249ezxUd2l0dGVyIC8+fVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9JHtwcm9wcy51cmx9IC0gJHtwcm9wcy50aXRsZX1gfVxuICAgICAgICA+XG4gICAgICAgICAgU2hhcmVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuYnV0dG9uU3Bhbn0+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBrZXk9XCJmYWNlYm9va1wiXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2ZiQ2xhc3Nlc31cbiAgICAgICAgICBzdGFydEljb249ezxGYWNlYm9vayAvPn1cbiAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGZhY2Vib29rU2hhcmUoZXZlbnQsIHByb3BzLnVybCl9XG4gICAgICAgID5cbiAgICAgICAgICBTaGFyZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L0dyaWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKHByb3BzOiBJRml4ZWROYXZiYXJQcm9wcykge1xuICBjb25zdCBbaXNCcm93c2VyLCBzZXRJc0Jyb3dzZXJdID0gdXNlU3RhdGUocHJvY2Vzcy5icm93c2VyKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCByb290Q2xhc3NlcyA9IGN4KGNsYXNzZXMucm9vdCwgcHJvcHMuY2xhc3NOYW1lKTtcbiAgY29uc3QgX25hdmlnYXRvciA9IGlzQnJvd3NlciA/IHdpbmRvdy5uYXZpZ2F0b3IgOiB7fTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzQnJvd3Nlcihwcm9jZXNzLmJyb3dzZXIpO1xuICB9LCBbcHJvY2Vzcy5icm93c2VyXSk7XG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e3Jvb3RDbGFzc2VzfT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb3B5cmlnaHR9PlxuICAgICAgICDCqSBDb3B5cmlnaHQgMjAyMCBTdWJyb3RvIEJpc3dhc1xuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAge3JlbmRlclNoYXJlKHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIG5hdmlnYXRvcjogX25hdmlnYXRvcixcbiAgICAgICAgY2xhc3NlcyxcbiAgICAgIH0pfVxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/footer.tsx\n");

/***/ })

})