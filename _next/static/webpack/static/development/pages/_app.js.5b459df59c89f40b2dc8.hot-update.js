webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./hoc/palette-mode.tsx":
/*!******************************!*\
  !*** ./hoc/palette-mode.tsx ***!
  \******************************/
/*! exports provided: usePaletteModeStore, withPaletteModeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePaletteModeStore", function() { return usePaletteModeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPaletteModeProvider", function() { return withPaletteModeProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_use_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/use-local-storage */ "./hooks/use-local-storage.ts");

var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/hoc/palette-mode.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const value = window.localStorage.getItem('darkMode');
const PaletteModeContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({
  darkMode: value ? JSON.parse(value) : false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDarkMode: () => {}
});

const PaletteModeProvider = ({
  children
}) => {
  const [darkMode, setDarkMode] = Object(hooks_use_local_storage__WEBPACK_IMPORTED_MODULE_2__["useLocalStorage"])('darkMode', false);
  return __jsx(PaletteModeContext.Provider, {
    value: {
      darkMode,
      setDarkMode
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, children);
};

const usePaletteModeStore = () => Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(PaletteModeContext);
function withPaletteModeProvider(Component) {
  return function PaletteModeWrapperComponent(props) {
    return __jsx(PaletteModeProvider, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }
    }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }
    })));
  };
}

/***/ })

})
//# sourceMappingURL=_app.js.5b459df59c89f40b2dc8.hot-update.js.map