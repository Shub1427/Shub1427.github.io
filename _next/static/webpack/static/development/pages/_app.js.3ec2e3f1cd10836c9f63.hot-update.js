webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./utils/word-counter.ts":
/*!*******************************!*\
  !*** ./utils/word-counter.ts ***!
  \*******************************/
/*! exports provided: wordCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wordCounter\", function() { return wordCounter; });\nconst regex = new RegExp(/code|inlinecode/i);\n\nfunction countWord(wordCount, jsxEle) {\n  let _wordCount = wordCount;\n\n  if (Array.isArray(jsxEle)) {\n    _wordCount += jsxEle.reduce((count, ele) => {\n      if (ele instanceof String || typeof ele === 'string') {\n        count += countWord(count, ele);\n      } else {\n        if (!regex.test(ele.props.mdxType)) {\n          count += countWord(count, ele.props.children);\n        }\n      }\n\n      return count;\n    }, wordCount);\n  } else if (jsxEle instanceof String || typeof jsxEle === 'string') {\n    if (/\\w+/.test(jsxEle.toString())) {\n      console.log('>>>>> String:: <<<<<', jsxEle);\n      _wordCount += jsxEle.split(' ').length;\n    }\n  } else {\n    if (jsxEle) {\n      if (!regex.test(jsxEle.props.mdxType)) {\n        _wordCount += countWord(_wordCount, jsxEle.props.children);\n      }\n    }\n  }\n\n  return _wordCount;\n}\n\nconst wordCounter = jsx => new Promise(res => {\n  let total = 0;\n\n  if (Array.isArray(jsx)) {\n    total = jsx.reduce((wordCount, jsxEle) => {\n      if (jsxEle.props.mdxType !== 'code') {\n        wordCount += countWord(wordCount, jsxEle.props.children);\n      }\n\n      return wordCount;\n    }, 0);\n  }\n\n  res(total);\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy93b3JkLWNvdW50ZXIudHM/M2YzYiJdLCJuYW1lcyI6WyJyZWdleCIsIlJlZ0V4cCIsImNvdW50V29yZCIsIndvcmRDb3VudCIsImpzeEVsZSIsIl93b3JkQ291bnQiLCJBcnJheSIsImlzQXJyYXkiLCJyZWR1Y2UiLCJjb3VudCIsImVsZSIsIlN0cmluZyIsInRlc3QiLCJwcm9wcyIsIm1keFR5cGUiLCJjaGlsZHJlbiIsInRvU3RyaW5nIiwiY29uc29sZSIsImxvZyIsInNwbGl0IiwibGVuZ3RoIiwid29yZENvdW50ZXIiLCJqc3giLCJQcm9taXNlIiwicmVzIiwidG90YWwiXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQSxNQUFNQSxLQUFLLEdBQUcsSUFBSUMsTUFBSixDQUFXLGtCQUFYLENBQWQ7O0FBaUJBLFNBQVNDLFNBQVQsQ0FBbUJDLFNBQW5CLEVBQXNDQyxNQUF0QyxFQUF3RDtBQUN0RCxNQUFJQyxVQUFVLEdBQUdGLFNBQWpCOztBQUNBLE1BQUlHLEtBQUssQ0FBQ0MsT0FBTixDQUFjSCxNQUFkLENBQUosRUFBMkI7QUFDekJDLGNBQVUsSUFBSUQsTUFBTSxDQUFDSSxNQUFQLENBQWMsQ0FBQ0MsS0FBRCxFQUFRQyxHQUFSLEtBQWdCO0FBQzFDLFVBQUlBLEdBQUcsWUFBWUMsTUFBZixJQUF5QixPQUFPRCxHQUFQLEtBQWUsUUFBNUMsRUFBc0Q7QUFDcERELGFBQUssSUFBSVAsU0FBUyxDQUFDTyxLQUFELEVBQVFDLEdBQVIsQ0FBbEI7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFJLENBQUNWLEtBQUssQ0FBQ1ksSUFBTixDQUFXRixHQUFHLENBQUNHLEtBQUosQ0FBVUMsT0FBckIsQ0FBTCxFQUFvQztBQUNsQ0wsZUFBSyxJQUFJUCxTQUFTLENBQUNPLEtBQUQsRUFBUUMsR0FBRyxDQUFDRyxLQUFKLENBQVVFLFFBQWxCLENBQWxCO0FBQ0Q7QUFDRjs7QUFDRCxhQUFPTixLQUFQO0FBQ0QsS0FUYSxFQVNYTixTQVRXLENBQWQ7QUFVRCxHQVhELE1BV08sSUFBSUMsTUFBTSxZQUFZTyxNQUFsQixJQUE0QixPQUFPUCxNQUFQLEtBQWtCLFFBQWxELEVBQTREO0FBQ2pFLFFBQUksTUFBTVEsSUFBTixDQUFXUixNQUFNLENBQUNZLFFBQVAsRUFBWCxDQUFKLEVBQW1DO0FBQ2pDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ2QsTUFBcEM7QUFDQUMsZ0JBQVUsSUFBSUQsTUFBTSxDQUFDZSxLQUFQLENBQWEsR0FBYixFQUFrQkMsTUFBaEM7QUFDRDtBQUNGLEdBTE0sTUFLQTtBQUNMLFFBQUloQixNQUFKLEVBQVk7QUFDVixVQUFJLENBQUNKLEtBQUssQ0FBQ1ksSUFBTixDQUFXUixNQUFNLENBQUNTLEtBQVAsQ0FBYUMsT0FBeEIsQ0FBTCxFQUF1QztBQUNyQ1Qsa0JBQVUsSUFBSUgsU0FBUyxDQUFDRyxVQUFELEVBQWFELE1BQU0sQ0FBQ1MsS0FBUCxDQUFhRSxRQUExQixDQUF2QjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPVixVQUFQO0FBQ0Q7O0FBRU0sTUFBTWdCLFdBQVcsR0FBSUMsR0FBRCxJQUN6QixJQUFJQyxPQUFKLENBQXFCQyxHQUFELElBQVM7QUFDM0IsTUFBSUMsS0FBSyxHQUFHLENBQVo7O0FBQ0EsTUFBSW5CLEtBQUssQ0FBQ0MsT0FBTixDQUFjZSxHQUFkLENBQUosRUFBd0I7QUFDdEJHLFNBQUssR0FBR0gsR0FBRyxDQUFDZCxNQUFKLENBQVcsQ0FBQ0wsU0FBRCxFQUFZQyxNQUFaLEtBQXVCO0FBQ3hDLFVBQUlBLE1BQU0sQ0FBQ1MsS0FBUCxDQUFhQyxPQUFiLEtBQXlCLE1BQTdCLEVBQXFDO0FBQ25DWCxpQkFBUyxJQUFJRCxTQUFTLENBQUNDLFNBQUQsRUFBWUMsTUFBTSxDQUFDUyxLQUFQLENBQWFFLFFBQXpCLENBQXRCO0FBQ0Q7O0FBQ0QsYUFBT1osU0FBUDtBQUNELEtBTE8sRUFLTCxDQUxLLENBQVI7QUFNRDs7QUFDRHFCLEtBQUcsQ0FBQ0MsS0FBRCxDQUFIO0FBQ0QsQ0FYRCxDQURLIiwiZmlsZSI6Ii4vdXRpbHMvd29yZC1jb3VudGVyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKC9jb2RlfGlubGluZWNvZGUvaSk7XG50eXBlIENoaWxkcmVuID0gc3RyaW5nIHwgSUpTWCB8IEFycmF5PHN0cmluZyB8IElKU1g+O1xuXG5pbnRlcmZhY2UgSUpTWFByb3BzIHtcbiAgY2hpbGRyZW46IENoaWxkcmVuO1xuICBtZHhUeXBlOiBzdHJpbmc7XG4gIC8vIFRoZXJlIGNvdWxkIGJlIG1vcmUgcHJvcHMsIGNvdWxkIGJlIGFueXRoaW5nLCBub3QgdG8gd29ycnkgZm9yIG5vd1xufVxuXG5pbnRlcmZhY2UgSUpTWCB7XG4gICQkdHlwZW9mOiBzeW1ib2w7XG4gIGtleTogc3RyaW5nIHwgbnVtYmVyO1xuICBwcm9wczogSUpTWFByb3BzO1xuICByZWY6IFJlYWN0LlJlZjxhbnk+O1xuICB0eXBlOiBhbnk7XG59XG5cbmZ1bmN0aW9uIGNvdW50V29yZCh3b3JkQ291bnQ6IG51bWJlciwganN4RWxlOiBDaGlsZHJlbikge1xuICBsZXQgX3dvcmRDb3VudCA9IHdvcmRDb3VudDtcbiAgaWYgKEFycmF5LmlzQXJyYXkoanN4RWxlKSkge1xuICAgIF93b3JkQ291bnQgKz0ganN4RWxlLnJlZHVjZSgoY291bnQsIGVsZSkgPT4ge1xuICAgICAgaWYgKGVsZSBpbnN0YW5jZW9mIFN0cmluZyB8fCB0eXBlb2YgZWxlID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb3VudCArPSBjb3VudFdvcmQoY291bnQsIGVsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXJlZ2V4LnRlc3QoZWxlLnByb3BzLm1keFR5cGUpKSB7XG4gICAgICAgICAgY291bnQgKz0gY291bnRXb3JkKGNvdW50LCBlbGUucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfSwgd29yZENvdW50KTtcbiAgfSBlbHNlIGlmIChqc3hFbGUgaW5zdGFuY2VvZiBTdHJpbmcgfHwgdHlwZW9mIGpzeEVsZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoL1xcdysvLnRlc3QoanN4RWxlLnRvU3RyaW5nKCkpKSB7XG4gICAgICBjb25zb2xlLmxvZygnPj4+Pj4gU3RyaW5nOjogPDw8PDwnLCBqc3hFbGUpO1xuICAgICAgX3dvcmRDb3VudCArPSBqc3hFbGUuc3BsaXQoJyAnKS5sZW5ndGg7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChqc3hFbGUpIHtcbiAgICAgIGlmICghcmVnZXgudGVzdChqc3hFbGUucHJvcHMubWR4VHlwZSkpIHtcbiAgICAgICAgX3dvcmRDb3VudCArPSBjb3VudFdvcmQoX3dvcmRDb3VudCwganN4RWxlLnByb3BzLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gX3dvcmRDb3VudDtcbn1cblxuZXhwb3J0IGNvbnN0IHdvcmRDb3VudGVyID0gKGpzeDogUmVhY3QuUmVhY3RDaGlsZHJlbikgPT5cbiAgbmV3IFByb21pc2U8bnVtYmVyPigocmVzKSA9PiB7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShqc3gpKSB7XG4gICAgICB0b3RhbCA9IGpzeC5yZWR1Y2UoKHdvcmRDb3VudCwganN4RWxlKSA9PiB7XG4gICAgICAgIGlmIChqc3hFbGUucHJvcHMubWR4VHlwZSAhPT0gJ2NvZGUnKSB7XG4gICAgICAgICAgd29yZENvdW50ICs9IGNvdW50V29yZCh3b3JkQ291bnQsIGpzeEVsZS5wcm9wcy5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdvcmRDb3VudDtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgICByZXModG90YWwpO1xuICB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/word-counter.ts\n");

/***/ })

})