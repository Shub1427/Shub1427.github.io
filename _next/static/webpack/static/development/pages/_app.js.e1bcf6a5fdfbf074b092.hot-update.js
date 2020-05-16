webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/note-subtitle.tsx":
/*!**************************************!*\
  !*** ./components/note-subtitle.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoteSubtitle; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _polka_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./polka-container */ \"./components/polka-container.tsx\");\nvar _jsxFileName = \"/Users/subroto.biswas/Subroto/shub1427.github.io/components/note-subtitle.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])({\n  root: {\n    display: 'flex',\n    alignItems: 'center',\n    fontSize: 12,\n    color: '#888'\n  },\n  description: {\n    display: 'inline-block'\n  },\n  separator: {\n    fontSize: '1.5em',\n    lineHeight: 0.8,\n    display: 'inline-block',\n    margin: '0 4px'\n  }\n});\n/**\n * Getting Reading Time estimate is difficult, if you don't have char count\n * This Component requires a char count, to get an estimate for reading time.\n *\n * Googling avg reading time, I found that an adults avg reading time is,\n * 200 - 250 words peer minute, thus I will be using 225 words per minute as\n * my reading time estimate.\n */\n\nfunction NoteSubtitle(props) {\n  _s();\n\n  const wordCount = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_polka_container__WEBPACK_IMPORTED_MODULE_4__[\"MDXWordCountContext\"]);\n  const classes = useStyles();\n  const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, props.className);\n  const descriptionClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.description, props.fontClasses);\n  return __jsx(\"div\", {\n    className: rootClasses,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    variant: \"body2\",\n    className: descriptionClasses,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"format\"])(props.date, 'MMM dd')), __jsx(\"span\", {\n    className: classes.separator,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, \"\\u2022\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    variant: \"body2\",\n    className: descriptionClasses,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, Math.ceil(wordCount / 200), \" min read\"));\n}\n\n_s(NoteSubtitle, \"7CqiDxMeFc3+T6bVea+EXTUILqA=\", false, function () {\n  return [useStyles];\n});\n\n_c = NoteSubtitle;\n\nvar _c;\n\n$RefreshReg$(_c, \"NoteSubtitle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdGUtc3VidGl0bGUudHN4P2RjM2UiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZvbnRTaXplIiwiY29sb3IiLCJkZXNjcmlwdGlvbiIsInNlcGFyYXRvciIsImxpbmVIZWlnaHQiLCJtYXJnaW4iLCJOb3RlU3VidGl0bGUiLCJwcm9wcyIsIndvcmRDb3VudCIsInVzZUNvbnRleHQiLCJNRFhXb3JkQ291bnRDb250ZXh0IiwiY2xhc3NlcyIsInJvb3RDbGFzc2VzIiwiY3giLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbkNsYXNzZXMiLCJmb250Q2xhc3NlcyIsImZvcm1hdCIsImRhdGUiLCJNYXRoIiwiY2VpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFTQSxNQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDM0JDLE1BQUksRUFBRTtBQUNKQyxXQUFPLEVBQUUsTUFETDtBQUVKQyxjQUFVLEVBQUUsUUFGUjtBQUdKQyxZQUFRLEVBQUUsRUFITjtBQUlKQyxTQUFLLEVBQUU7QUFKSCxHQURxQjtBQU8zQkMsYUFBVyxFQUFFO0FBQ1hKLFdBQU8sRUFBRTtBQURFLEdBUGM7QUFVM0JLLFdBQVMsRUFBRTtBQUNUSCxZQUFRLEVBQUUsT0FERDtBQUVUSSxjQUFVLEVBQUUsR0FGSDtBQUdUTixXQUFPLEVBQUUsY0FIQTtBQUlUTyxVQUFNLEVBQUU7QUFKQztBQVZnQixDQUFELENBQTVCO0FBa0JBOzs7Ozs7Ozs7QUFRZSxTQUFTQyxZQUFULENBQXNCQyxLQUF0QixFQUE0QztBQUFBOztBQUN6RCxRQUFNQyxTQUFTLEdBQUdDLHdEQUFVLENBQUNDLG9FQUFELENBQTVCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHaEIsU0FBUyxFQUF6QjtBQUNBLFFBQU1pQixXQUFXLEdBQUdDLGlEQUFFLENBQUNGLE9BQU8sQ0FBQ2QsSUFBVCxFQUFlVSxLQUFLLENBQUNPLFNBQXJCLENBQXRCO0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUdGLGlEQUFFLENBQUNGLE9BQU8sQ0FBQ1QsV0FBVCxFQUFzQkssS0FBSyxDQUFDUyxXQUE1QixDQUE3QjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVKLFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLGFBQVMsRUFBRUcsa0JBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0UsdURBQU0sQ0FBQ1YsS0FBSyxDQUFDVyxJQUFQLEVBQWEsUUFBYixDQURULENBREYsRUFJRTtBQUFNLGFBQVMsRUFBRVAsT0FBTyxDQUFDUixTQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsRUFLRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLGFBQVMsRUFBRVksa0JBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0ksSUFBSSxDQUFDQyxJQUFMLENBQVVaLFNBQVMsR0FBRyxHQUF0QixDQURILGNBTEYsQ0FERjtBQVdEOztHQWhCdUJGLFk7VUFFTlgsUzs7O0tBRk1XLFkiLCJmaWxlIjoiLi9jb21wb25lbnRzL25vdGUtc3VidGl0bGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmltcG9ydCB7IFR5cG9ncmFwaHksIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBNRFhXb3JkQ291bnRDb250ZXh0IH0gZnJvbSAnLi9wb2xrYS1jb250YWluZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIElOb3RlU3VidGl0bGUge1xuICBkYXRlOiBEYXRlO1xuICB0b3RhbFdvcmRzOiBudW1iZXI7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgZm9udENsYXNzZXM/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZvbnRTaXplOiAxMixcbiAgICBjb2xvcjogJyM4ODgnLFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICB9LFxuICBzZXBhcmF0b3I6IHtcbiAgICBmb250U2l6ZTogJzEuNWVtJyxcbiAgICBsaW5lSGVpZ2h0OiAwLjgsXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgbWFyZ2luOiAnMCA0cHgnLFxuICB9LFxufSk7XG5cbi8qKlxuICogR2V0dGluZyBSZWFkaW5nIFRpbWUgZXN0aW1hdGUgaXMgZGlmZmljdWx0LCBpZiB5b3UgZG9uJ3QgaGF2ZSBjaGFyIGNvdW50XG4gKiBUaGlzIENvbXBvbmVudCByZXF1aXJlcyBhIGNoYXIgY291bnQsIHRvIGdldCBhbiBlc3RpbWF0ZSBmb3IgcmVhZGluZyB0aW1lLlxuICpcbiAqIEdvb2dsaW5nIGF2ZyByZWFkaW5nIHRpbWUsIEkgZm91bmQgdGhhdCBhbiBhZHVsdHMgYXZnIHJlYWRpbmcgdGltZSBpcyxcbiAqIDIwMCAtIDI1MCB3b3JkcyBwZWVyIG1pbnV0ZSwgdGh1cyBJIHdpbGwgYmUgdXNpbmcgMjI1IHdvcmRzIHBlciBtaW51dGUgYXNcbiAqIG15IHJlYWRpbmcgdGltZSBlc3RpbWF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZVN1YnRpdGxlKHByb3BzOiBJTm90ZVN1YnRpdGxlKSB7XG4gIGNvbnN0IHdvcmRDb3VudCA9IHVzZUNvbnRleHQoTURYV29yZENvdW50Q29udGV4dCk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3Qgcm9vdENsYXNzZXMgPSBjeChjbGFzc2VzLnJvb3QsIHByb3BzLmNsYXNzTmFtZSk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uQ2xhc3NlcyA9IGN4KGNsYXNzZXMuZGVzY3JpcHRpb24sIHByb3BzLmZvbnRDbGFzc2VzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17cm9vdENsYXNzZXN9PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY2xhc3NOYW1lPXtkZXNjcmlwdGlvbkNsYXNzZXN9PlxuICAgICAgICB7Zm9ybWF0KHByb3BzLmRhdGUsICdNTU0gZGQnKX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZXBhcmF0b3J9PuKAojwvc3Bhbj5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNsYXNzTmFtZT17ZGVzY3JpcHRpb25DbGFzc2VzfT5cbiAgICAgICAge01hdGguY2VpbCh3b3JkQ291bnQgLyAyMDApfSBtaW4gcmVhZFxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/note-subtitle.tsx\n");

/***/ })

})