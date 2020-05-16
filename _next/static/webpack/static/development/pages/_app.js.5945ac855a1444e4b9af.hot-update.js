webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./utils/word-counter.ts":
/*!*******************************!*\
  !*** ./utils/word-counter.ts ***!
  \*******************************/
/*! exports provided: wordCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wordCounter\", function() { return wordCounter; });\nfunction countWord(wordCount, jsxEle) {\n  let _wordCount = wordCount;\n\n  if (Array.isArray(jsxEle)) {\n    _wordCount += jsxEle.reduce((count, ele) => {\n      if (ele instanceof String || typeof ele === 'string') {\n        count += countWord(count, ele);\n      } else {\n        count += countWord(count, ele.props.children);\n      }\n\n      return count;\n    }, wordCount);\n  } else if (jsxEle instanceof String || typeof jsxEle === 'string') {\n    // console.log('>>>>> String:: <<<<<', jsxEle);\n    _wordCount += jsxEle.split(' ').length;\n  } else {\n    if (jsxEle) {\n      if (jsxEle.props.mdxType !== 'code') {\n        console.log('>>>>> MDXType:: ', jsxEle.props.mdxType);\n        _wordCount += countWord(_wordCount, jsxEle.props.children);\n      }\n    }\n  }\n\n  return _wordCount;\n}\n\nconst wordCounter = jsx => new Promise(res => {\n  let total = 0;\n\n  if (Array.isArray(jsx)) {\n    total = jsx.reduce((wordCount, jsxEle) => {\n      if (jsxEle.props.mdxType !== 'code') {\n        wordCount += countWord(wordCount, jsxEle.props.children);\n      }\n\n      return wordCount;\n    }, 0);\n  }\n\n  res(total);\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy93b3JkLWNvdW50ZXIudHM/M2YzYiJdLCJuYW1lcyI6WyJjb3VudFdvcmQiLCJ3b3JkQ291bnQiLCJqc3hFbGUiLCJfd29yZENvdW50IiwiQXJyYXkiLCJpc0FycmF5IiwicmVkdWNlIiwiY291bnQiLCJlbGUiLCJTdHJpbmciLCJwcm9wcyIsImNoaWxkcmVuIiwic3BsaXQiLCJsZW5ndGgiLCJtZHhUeXBlIiwiY29uc29sZSIsImxvZyIsIndvcmRDb3VudGVyIiwianN4IiwiUHJvbWlzZSIsInJlcyIsInRvdGFsIl0sIm1hcHBpbmdzIjoiQUFrQkE7QUFBQTtBQUFBLFNBQVNBLFNBQVQsQ0FBbUJDLFNBQW5CLEVBQXNDQyxNQUF0QyxFQUF3RDtBQUN0RCxNQUFJQyxVQUFVLEdBQUdGLFNBQWpCOztBQUNBLE1BQUlHLEtBQUssQ0FBQ0MsT0FBTixDQUFjSCxNQUFkLENBQUosRUFBMkI7QUFDekJDLGNBQVUsSUFBSUQsTUFBTSxDQUFDSSxNQUFQLENBQWMsQ0FBQ0MsS0FBRCxFQUFRQyxHQUFSLEtBQWdCO0FBQzFDLFVBQUlBLEdBQUcsWUFBWUMsTUFBZixJQUF5QixPQUFPRCxHQUFQLEtBQWUsUUFBNUMsRUFBc0Q7QUFDcERELGFBQUssSUFBSVAsU0FBUyxDQUFDTyxLQUFELEVBQVFDLEdBQVIsQ0FBbEI7QUFDRCxPQUZELE1BRU87QUFDTEQsYUFBSyxJQUFJUCxTQUFTLENBQUNPLEtBQUQsRUFBUUMsR0FBRyxDQUFDRSxLQUFKLENBQVVDLFFBQWxCLENBQWxCO0FBQ0Q7O0FBQ0QsYUFBT0osS0FBUDtBQUNELEtBUGEsRUFPWE4sU0FQVyxDQUFkO0FBUUQsR0FURCxNQVNPLElBQUlDLE1BQU0sWUFBWU8sTUFBbEIsSUFBNEIsT0FBT1AsTUFBUCxLQUFrQixRQUFsRCxFQUE0RDtBQUNqRTtBQUNBQyxjQUFVLElBQUlELE1BQU0sQ0FBQ1UsS0FBUCxDQUFhLEdBQWIsRUFBa0JDLE1BQWhDO0FBQ0QsR0FITSxNQUdBO0FBQ0wsUUFBSVgsTUFBSixFQUFZO0FBQ1YsVUFBSUEsTUFBTSxDQUFDUSxLQUFQLENBQWFJLE9BQWIsS0FBeUIsTUFBN0IsRUFBcUM7QUFDbkNDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDZCxNQUFNLENBQUNRLEtBQVAsQ0FBYUksT0FBN0M7QUFDQVgsa0JBQVUsSUFBSUgsU0FBUyxDQUFDRyxVQUFELEVBQWFELE1BQU0sQ0FBQ1EsS0FBUCxDQUFhQyxRQUExQixDQUF2QjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPUixVQUFQO0FBQ0Q7O0FBRU0sTUFBTWMsV0FBVyxHQUFJQyxHQUFELElBQ3pCLElBQUlDLE9BQUosQ0FBcUJDLEdBQUQsSUFBUztBQUMzQixNQUFJQyxLQUFLLEdBQUcsQ0FBWjs7QUFDQSxNQUFJakIsS0FBSyxDQUFDQyxPQUFOLENBQWNhLEdBQWQsQ0FBSixFQUF3QjtBQUN0QkcsU0FBSyxHQUFHSCxHQUFHLENBQUNaLE1BQUosQ0FBVyxDQUFDTCxTQUFELEVBQVlDLE1BQVosS0FBdUI7QUFDeEMsVUFBSUEsTUFBTSxDQUFDUSxLQUFQLENBQWFJLE9BQWIsS0FBeUIsTUFBN0IsRUFBcUM7QUFDbkNiLGlCQUFTLElBQUlELFNBQVMsQ0FBQ0MsU0FBRCxFQUFZQyxNQUFNLENBQUNRLEtBQVAsQ0FBYUMsUUFBekIsQ0FBdEI7QUFDRDs7QUFDRCxhQUFPVixTQUFQO0FBQ0QsS0FMTyxFQUtMLENBTEssQ0FBUjtBQU1EOztBQUNEbUIsS0FBRyxDQUFDQyxLQUFELENBQUg7QUFDRCxDQVhELENBREsiLCJmaWxlIjoiLi91dGlscy93b3JkLWNvdW50ZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG50eXBlIENoaWxkcmVuID0gc3RyaW5nIHwgSUpTWCB8IEFycmF5PHN0cmluZyB8IElKU1g+O1xuXG5pbnRlcmZhY2UgSUpTWFByb3BzIHtcbiAgY2hpbGRyZW46IENoaWxkcmVuO1xuICBtZHhUeXBlOiBzdHJpbmc7XG4gIC8vIFRoZXJlIGNvdWxkIGJlIG1vcmUgcHJvcHMsIGNvdWxkIGJlIGFueXRoaW5nLCBub3QgdG8gd29ycnkgZm9yIG5vd1xufVxuXG5pbnRlcmZhY2UgSUpTWCB7XG4gICQkdHlwZW9mOiBzeW1ib2w7XG4gIGtleTogc3RyaW5nIHwgbnVtYmVyO1xuICBwcm9wczogSUpTWFByb3BzO1xuICByZWY6IFJlYWN0LlJlZjxhbnk+O1xuICB0eXBlOiBhbnk7XG59XG5cbmZ1bmN0aW9uIGNvdW50V29yZCh3b3JkQ291bnQ6IG51bWJlciwganN4RWxlOiBDaGlsZHJlbikge1xuICBsZXQgX3dvcmRDb3VudCA9IHdvcmRDb3VudDtcbiAgaWYgKEFycmF5LmlzQXJyYXkoanN4RWxlKSkge1xuICAgIF93b3JkQ291bnQgKz0ganN4RWxlLnJlZHVjZSgoY291bnQsIGVsZSkgPT4ge1xuICAgICAgaWYgKGVsZSBpbnN0YW5jZW9mIFN0cmluZyB8fCB0eXBlb2YgZWxlID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb3VudCArPSBjb3VudFdvcmQoY291bnQsIGVsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudCArPSBjb3VudFdvcmQoY291bnQsIGVsZS5wcm9wcy5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfSwgd29yZENvdW50KTtcbiAgfSBlbHNlIGlmIChqc3hFbGUgaW5zdGFuY2VvZiBTdHJpbmcgfHwgdHlwZW9mIGpzeEVsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnPj4+Pj4gU3RyaW5nOjogPDw8PDwnLCBqc3hFbGUpO1xuICAgIF93b3JkQ291bnQgKz0ganN4RWxlLnNwbGl0KCcgJykubGVuZ3RoO1xuICB9IGVsc2Uge1xuICAgIGlmIChqc3hFbGUpIHtcbiAgICAgIGlmIChqc3hFbGUucHJvcHMubWR4VHlwZSAhPT0gJ2NvZGUnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+PiBNRFhUeXBlOjogJywganN4RWxlLnByb3BzLm1keFR5cGUpO1xuICAgICAgICBfd29yZENvdW50ICs9IGNvdW50V29yZChfd29yZENvdW50LCBqc3hFbGUucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfd29yZENvdW50O1xufVxuXG5leHBvcnQgY29uc3Qgd29yZENvdW50ZXIgPSAoanN4OiBSZWFjdC5SZWFjdENoaWxkcmVuKSA9PlxuICBuZXcgUHJvbWlzZTxudW1iZXI+KChyZXMpID0+IHtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGpzeCkpIHtcbiAgICAgIHRvdGFsID0ganN4LnJlZHVjZSgod29yZENvdW50LCBqc3hFbGUpID0+IHtcbiAgICAgICAgaWYgKGpzeEVsZS5wcm9wcy5tZHhUeXBlICE9PSAnY29kZScpIHtcbiAgICAgICAgICB3b3JkQ291bnQgKz0gY291bnRXb3JkKHdvcmRDb3VudCwganN4RWxlLnByb3BzLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd29yZENvdW50O1xuICAgICAgfSwgMCk7XG4gICAgfVxuICAgIHJlcyh0b3RhbCk7XG4gIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/word-counter.ts\n");

/***/ })

})