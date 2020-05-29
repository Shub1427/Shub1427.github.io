webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/footer.tsx":
/*!*******************************!*\
  !*** ./components/footer.tsx ***!
  \*******************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n/* harmony import */ var _utils_gtag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/gtag */ \"./utils/gtag.ts\");\n\n\nvar _jsxFileName = \"/Users/subroto.biswas/Subroto/shub1427.github.io/components/footer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(theme => ({\n  root: {\n    display: 'flex',\n    justifyContent: 'space-between',\n    alignContent: 'center',\n    alignItems: 'center',\n    marginTop: 128,\n    padding: '0 16px',\n    [theme.breakpoints.down('xs')]: {\n      flexDirection: 'column'\n    }\n  },\n  copyright: {\n    color: '#aaa',\n    fontWeight: 'bold',\n    [theme.breakpoints.down('xs')]: {\n      marginBottom: 16\n    }\n  },\n  buttonWrapper: {\n    display: 'flex',\n    justifyContent: 'flex-end',\n    alignItems: 'center',\n    flexWrap: 'wrap'\n  },\n  buttonSpan: {\n    '&+&': {\n      marginTop: 0,\n      marginLeft: 16\n    },\n    display: 'inline-flex',\n    flex: 1,\n    maxWidth: 100\n  },\n  share: {\n    color: '#fff',\n    background: '#444',\n    '&:hover, &focus, &:active': {\n      background: '#333'\n    }\n  },\n  fb: {\n    color: '#fff',\n    background: '#4361b3',\n    '&:hover, &focus, &:active': {\n      background: '#254395'\n    }\n  },\n  tw: {\n    color: '#fff',\n    background: '#4fafed',\n    '&:hover, &focus, &:active': {\n      background: '#3191CF'\n    }\n  }\n}));\n\nconst facebookShare = (event, url) => {\n  event.preventDefault();\n  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'facebook-share-dialog', 'width=626,height=436');\n  return false;\n};\n\nconst shareLink = async props => {\n  try {\n    props.navigator.share && (await props.navigator.share({\n      title: props.title,\n      text: `Check out ${props.text}`,\n      url: props.url\n    }));\n  } catch (error) {\n    console.log('Error sharing', error);\n  }\n};\n\nconst renderShare = props => {\n  const shareClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.share);\n  const fbClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.fb);\n  const twClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.classes.tw);\n  let allShare = null;\n\n  if (props.navigator.share) {\n    allShare = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n      key: \"share\",\n      size: \"small\",\n      variant: \"contained\",\n      className: shareClasses,\n      startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Share\"], {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 20\n        }\n      }),\n      onClick: () => {\n        _utils_gtag__WEBPACK_IMPORTED_MODULE_5__[\"event\"]({\n          action: 'share_click',\n          category: 'Native Share'\n        });\n        shareLink(props);\n      },\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 7\n      }\n    }, \"Share\");\n  }\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    item: true,\n    className: props.classes.buttonWrapper,\n    xs: 12,\n    sm: 6,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    className: props.classes.buttonSpan,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 7\n    }\n  }, allShare), __jsx(\"span\", {\n    className: props.classes.buttonSpan,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    key: \"twitter\",\n    size: \"small\",\n    variant: \"contained\",\n    className: twClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Twitter\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 22\n      }\n    }),\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    href: `https://twitter.com/intent/tweet?text=${props.url} - ${props.title}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 9\n    }\n  }, \"Share\")), __jsx(\"span\", {\n    className: props.classes.buttonSpan,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    key: \"facebook\",\n    size: \"small\",\n    variant: \"contained\",\n    className: fbClasses,\n    startIcon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"Facebook\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 148,\n        columnNumber: 22\n      }\n    }),\n    onClick: event => {\n      _utils_gtag__WEBPACK_IMPORTED_MODULE_5__[\"event\"]({\n        action: 'share_click',\n        category: 'Facebook'\n      });\n      facebookShare(event, props.url);\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 9\n    }\n  }, \"Share\")));\n};\n\nfunction Footer(props) {\n  _s();\n\n  const {\n    0: isBrowser,\n    1: setIsBrowser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n  const classes = useStyles();\n  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, props.className);\n\n  const _navigator = isBrowser ? window.navigator : {};\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    setIsBrowser(true);\n  }, [true]);\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    container: true,\n    item: true,\n    xs: 12,\n    className: rootClasses,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    variant: \"body2\",\n    className: classes.copyright,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 175,\n      columnNumber: 7\n    }\n  }, \"\\xA9 Copyright 2020 Subroto Biswas\"), renderShare(_objectSpread(_objectSpread({}, props), {}, {\n    navigator: _navigator,\n    classes\n  })));\n}\n\n_s(Footer, \"g4wCLA86tZK+zidG37SPxHDIArc=\", false, function () {\n  return [useStyles];\n});\n\n_c = Footer;\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci50c3g/ODk3MyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25Db250ZW50IiwiYWxpZ25JdGVtcyIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJicmVha3BvaW50cyIsImRvd24iLCJmbGV4RGlyZWN0aW9uIiwiY29weXJpZ2h0IiwiY29sb3IiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwiYnV0dG9uV3JhcHBlciIsImZsZXhXcmFwIiwiYnV0dG9uU3BhbiIsIm1hcmdpbkxlZnQiLCJmbGV4IiwibWF4V2lkdGgiLCJzaGFyZSIsImJhY2tncm91bmQiLCJmYiIsInR3IiwiZmFjZWJvb2tTaGFyZSIsImV2ZW50IiwidXJsIiwicHJldmVudERlZmF1bHQiLCJ3aW5kb3ciLCJvcGVuIiwic2hhcmVMaW5rIiwicHJvcHMiLCJuYXZpZ2F0b3IiLCJ0aXRsZSIsInRleHQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJTaGFyZSIsInNoYXJlQ2xhc3NlcyIsImN4IiwiY2xhc3NlcyIsImZiQ2xhc3NlcyIsInR3Q2xhc3NlcyIsImFsbFNoYXJlIiwiZ3RhZyIsImFjdGlvbiIsImNhdGVnb3J5IiwiRm9vdGVyIiwiaXNCcm93c2VyIiwic2V0SXNCcm93c2VyIiwidXNlU3RhdGUiLCJyb290Q2xhc3NlcyIsImNsYXNzTmFtZSIsIl9uYXZpZ2F0b3IiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQSxNQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUVDLEtBQUQsS0FBbUI7QUFDOUNDLE1BQUksRUFBRTtBQUNKQyxXQUFPLEVBQUUsTUFETDtBQUVKQyxrQkFBYyxFQUFFLGVBRlo7QUFHSkMsZ0JBQVksRUFBRSxR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QUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsUUFBSSxNQUFwQjtBQUFxQixNQUFFLEVBQUUsRUFBekI7QUFBNkIsYUFBUyxFQUFFRSxXQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUE0QixhQUFTLEVBQUVYLE9BQU8sQ0FBQy9CLFNBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBREYsRUFJRzRCLFdBQVcsaUNBQ1BQLEtBRE87QUFFVkMsYUFBUyxFQUFFc0IsVUFGRDtBQUdWYjtBQUhVLEtBSmQsQ0FERjtBQVlEOztHQXJCZU8sTTtVQUVFbkQsUzs7O0tBRkZtRCxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9mb290ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIFN5bnRoZXRpY0V2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgQnV0dG9uLCBUaGVtZSwgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IFNoYXJlLCBGYWNlYm9vaywgVHdpdHRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5pbXBvcnQgKiBhcyBndGFnIGZyb20gJ0B1dGlscy9ndGFnJztcblxuaW50ZXJmYWNlIElGaXhlZE5hdmJhclByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1hcmdpblRvcDogMTI4LFxuICAgIHBhZGRpbmc6ICcwIDE2cHgnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgfSxcbiAgY29weXJpZ2h0OiB7XG4gICAgY29sb3I6ICcjYWFhJyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IDE2LFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbldyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgfSxcbiAgYnV0dG9uU3Bhbjoge1xuICAgICcmKyYnOiB7XG4gICAgICBtYXJnaW5Ub3A6IDAsXG4gICAgICBtYXJnaW5MZWZ0OiAxNixcbiAgICB9LFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgZmxleDogMSxcbiAgICBtYXhXaWR0aDogMTAwLFxuICB9LFxuICBzaGFyZToge1xuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZDogJyM0NDQnLFxuICAgICcmOmhvdmVyLCAmZm9jdXMsICY6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogJyMzMzMnLFxuICAgIH0sXG4gIH0sXG4gIGZiOiB7XG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBiYWNrZ3JvdW5kOiAnIzQzNjFiMycsXG4gICAgJyY6aG92ZXIsICZmb2N1cywgJjphY3RpdmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzI1NDM5NScsXG4gICAgfSxcbiAgfSxcbiAgdHc6IHtcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJhY2tncm91bmQ6ICcjNGZhZmVkJyxcbiAgICAnJjpob3ZlciwgJmZvY3VzLCAmOmFjdGl2ZSc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjMzE5MUNGJyxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5jb25zdCBmYWNlYm9va1NoYXJlID0gKGV2ZW50OiBTeW50aGV0aWNFdmVudCwgdXJsOiBzdHJpbmcpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgd2luZG93Lm9wZW4oXG4gICAgYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7dXJsfWAsXG4gICAgJ2ZhY2Vib29rLXNoYXJlLWRpYWxvZycsXG4gICAgJ3dpZHRoPTYyNixoZWlnaHQ9NDM2J1xuICApO1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzaGFyZUxpbmsgPSBhc3luYyAocHJvcHM6IElGaXhlZE5hdmJhclByb3BzICYgeyBuYXZpZ2F0b3I6IGFueSB9KSA9PiB7XG4gIHRyeSB7XG4gICAgcHJvcHMubmF2aWdhdG9yLnNoYXJlICYmXG4gICAgICAoYXdhaXQgcHJvcHMubmF2aWdhdG9yLnNoYXJlKHtcbiAgICAgICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgICAgICB0ZXh0OiBgQ2hlY2sgb3V0ICR7cHJvcHMudGV4dH1gLFxuICAgICAgICB1cmw6IHByb3BzLnVybCxcbiAgICAgIH0pKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnRXJyb3Igc2hhcmluZycsIGVycm9yKTtcbiAgfVxufTtcblxuY29uc3QgcmVuZGVyU2hhcmUgPSAoXG4gIHByb3BzOiBJRml4ZWROYXZiYXJQcm9wcyAmIHtcbiAgICBuYXZpZ2F0b3I6IGFueTtcbiAgICBjbGFzc2VzOiBSZXR1cm5UeXBlPHR5cGVvZiB1c2VTdHlsZXM+O1xuICB9XG4pID0+IHtcbiAgY29uc3Qgc2hhcmVDbGFzc2VzID0gY3gocHJvcHMuY2xhc3Nlcy5zaGFyZSk7XG4gIGNvbnN0IGZiQ2xhc3NlcyA9IGN4KHByb3BzLmNsYXNzZXMuZmIpO1xuICBjb25zdCB0d0NsYXNzZXMgPSBjeChwcm9wcy5jbGFzc2VzLnR3KTtcbiAgbGV0IGFsbFNoYXJlID0gbnVsbDtcbiAgaWYgKHByb3BzLm5hdmlnYXRvci5zaGFyZSkge1xuICAgIGFsbFNoYXJlID0gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICBrZXk9XCJzaGFyZVwiXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjbGFzc05hbWU9e3NoYXJlQ2xhc3Nlc31cbiAgICAgICAgc3RhcnRJY29uPXs8U2hhcmUgLz59XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBndGFnLmV2ZW50KHtcbiAgICAgICAgICAgIGFjdGlvbjogJ3NoYXJlX2NsaWNrJyxcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnTmF0aXZlIFNoYXJlJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzaGFyZUxpbmsocHJvcHMpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBTaGFyZVxuICAgICAgPC9CdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuYnV0dG9uV3JhcHBlcn0geHM9ezEyfSBzbT17Nn0+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuYnV0dG9uU3Bhbn0+e2FsbFNoYXJlfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5idXR0b25TcGFufT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGtleT1cInR3aXR0ZXJcIlxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXt0d0NsYXNzZXN9XG4gICAgICAgICAgc3RhcnRJY29uPXs8VHdpdHRlciAvPn1cbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgIGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PSR7cHJvcHMudXJsfSAtICR7cHJvcHMudGl0bGV9YH1cbiAgICAgICAgPlxuICAgICAgICAgIFNoYXJlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLmJ1dHRvblNwYW59PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAga2V5PVwiZmFjZWJvb2tcIlxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtmYkNsYXNzZXN9XG4gICAgICAgICAgc3RhcnRJY29uPXs8RmFjZWJvb2sgLz59XG4gICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBndGFnLmV2ZW50KHtcbiAgICAgICAgICAgICAgYWN0aW9uOiAnc2hhcmVfY2xpY2snLFxuICAgICAgICAgICAgICBjYXRlZ29yeTogJ0ZhY2Vib29rJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZmFjZWJvb2tTaGFyZShldmVudCwgcHJvcHMudXJsKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgU2hhcmVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC9HcmlkPlxuICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEZvb3Rlcihwcm9wczogSUZpeGVkTmF2YmFyUHJvcHMpIHtcbiAgY29uc3QgW2lzQnJvd3Nlciwgc2V0SXNCcm93c2VyXSA9IHVzZVN0YXRlKHByb2Nlc3MuYnJvd3Nlcik7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3Qgcm9vdENsYXNzZXMgPSBjeChjbGFzc2VzLnJvb3QsIHByb3BzLmNsYXNzTmFtZSk7XG4gIGNvbnN0IF9uYXZpZ2F0b3IgPSBpc0Jyb3dzZXIgPyB3aW5kb3cubmF2aWdhdG9yIDoge307XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0Jyb3dzZXIocHJvY2Vzcy5icm93c2VyKTtcbiAgfSwgW3Byb2Nlc3MuYnJvd3Nlcl0pO1xuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtyb290Q2xhc3Nlc30+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjbGFzc05hbWU9e2NsYXNzZXMuY29weXJpZ2h0fT5cbiAgICAgICAgwqkgQ29weXJpZ2h0IDIwMjAgU3Vicm90byBCaXN3YXNcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIHtyZW5kZXJTaGFyZSh7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICBuYXZpZ2F0b3I6IF9uYXZpZ2F0b3IsXG4gICAgICAgIGNsYXNzZXMsXG4gICAgICB9KX1cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/footer.tsx\n");

/***/ })

})