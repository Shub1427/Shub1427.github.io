webpackHotUpdate("static/development/pages/index.js",{

/***/ "./hooks/use-local-storage.ts":
/*!************************************!*\
  !*** ./hooks/use-local-storage.ts ***!
  \************************************/
/*! exports provided: useLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocalStorage", function() { return useLocalStorage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Credits: https://usehooks.com/useLocalStorage/
 */

function useLocalStorage(key, initialValue) {
  const {
    0: storedValue,
    1: setStoredValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

/***/ })

})
//# sourceMappingURL=index.js.d7f3c9a36b82e957efed.hot-update.js.map