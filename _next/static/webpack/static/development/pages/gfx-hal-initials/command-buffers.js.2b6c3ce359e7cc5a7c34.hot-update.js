webpackHotUpdate("static/development/pages/gfx-hal-initials/command-buffers.js",{

/***/ "./constants/gfx-hal-archive-list.ts":
/*!*******************************************!*\
  !*** ./constants/gfx-hal-archive-list.ts ***!
  \*******************************************/
/*! exports provided: halArchiveRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"halArchiveRecord\", function() { return halArchiveRecord; });\n/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags */ \"./constants/tags.ts\");\n\nconst halArchiveRecord = {\n  'rust-cargo-basics': {\n    key: 'rust-cargo-basics',\n    link: '/gfx-hal-initials/rust-cargo-basics',\n    title: 'Basics on Rust & Cargo',\n    description: 'Basics on Rust & Cargo',\n    ogImage: 'https://user-images.githubusercontent.com/11786283/81770497-0c77c000-94fe-11ea-95bc-44e5e432b1d8.jpg',\n    tags: [_tags__WEBPACK_IMPORTED_MODULE_0__[\"Tags\"].RUST],\n    createdAt: new Date('2020/04/26 22:00:00'),\n    updatedAt: new Date('2020/04/26 22:00:00'),\n    isPublished: true\n  },\n  'display-window': {\n    key: 'display-window',\n    link: '/gfx-hal-initials/display-window',\n    title: 'Display Window',\n    description: 'Displaying Window using winit and bind it to gfx-hal surface instance',\n    ogImage: 'https://user-images.githubusercontent.com/11786283/82109997-98852400-9758-11ea-84a0-aa3996c67f86.jpg',\n    tags: [_tags__WEBPACK_IMPORTED_MODULE_0__[\"Tags\"].RUST],\n    createdAt: new Date('2020/04/25 17:00:00'),\n    updatedAt: new Date('2020/05/09 23:50:00'),\n    isPublished: true\n  },\n  'physical-logical-devices': {\n    key: 'physical-logical-devices',\n    link: '/gfx-hal-initials/physical-logical-devices',\n    title: 'Physical & Logical Devices',\n    description: 'We would be looking into all \\\n      instances devices from gfx-hal, \\\n      which resembles Vulkan devices. \\\n      We will also learn some basics on enumerating these devices and stuff.',\n    ogImage: 'https://user-images.githubusercontent.com/11786283/82111231-485e8f80-9761-11ea-9f21-8843d4a66752.jpg',\n    tags: [_tags__WEBPACK_IMPORTED_MODULE_0__[\"Tags\"].TUTORIAL, _tags__WEBPACK_IMPORTED_MODULE_0__[\"Tags\"].RUST, _tags__WEBPACK_IMPORTED_MODULE_0__[\"Tags\"].GFX_HAL],\n    createdAt: new Date('2020/05/16 8:45:00'),\n    updatedAt: new Date('2020/05/16 19:30:00'),\n    isPublished: true\n  },\n  'command-buffers': {\n    key: 'command-buffers',\n    link: '/gfx-hal-initials/command-buffers',\n    title: 'Command Buffers & Pool',\n    description: 'We would be looking into Command Buffers and how to instantiate them',\n    ogImage: 'https://user-images.githubusercontent.com/11786283/82124794-f0567600-97be-11ea-9023-ea1467a6b734.jpg',\n    tags: [_tags__WEBPACK_IMPORTED_MODULE_0__[\"Tags\"].TUTORIAL, _tags__WEBPACK_IMPORTED_MODULE_0__[\"Tags\"].RUST, _tags__WEBPACK_IMPORTED_MODULE_0__[\"Tags\"].GFX_HAL],\n    createdAt: new Date('2020/05/16 21:45:00'),\n    updatedAt: new Date('2020/05/16 21:45:00'),\n    isPublished: true\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvZ2Z4LWhhbC1hcmNoaXZlLWxpc3QudHM/Y2MwMCJdLCJuYW1lcyI6WyJoYWxBcmNoaXZlUmVjb3JkIiwia2V5IiwibGluayIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJvZ0ltYWdlIiwidGFncyIsIlRhZ3MiLCJSVVNUIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInVwZGF0ZWRBdCIsImlzUHVibGlzaGVkIiwiVFVUT1JJQUwiLCJHRlhfSEFMIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLGdCQUE4QyxHQUFHO0FBQzVELHVCQUFxQjtBQUNuQkMsT0FBRyxFQUFFLG1CQURjO0FBRW5CQyxRQUFJLEVBQUUscUNBRmE7QUFHbkJDLFNBQUssRUFBRSx3QkFIWTtBQUluQkMsZUFBVyxFQUFFLHdCQUpNO0FBS25CQyxXQUFPLEVBQ0wsc0dBTmlCO0FBT25CQyxRQUFJLEVBQUUsQ0FBQ0MsMENBQUksQ0FBQ0MsSUFBTixDQVBhO0FBUW5CQyxhQUFTLEVBQUUsSUFBSUMsSUFBSixDQUFTLHFCQUFULENBUlE7QUFTbkJDLGFBQVMsRUFBRSxJQUFJRCxJQUFKLENBQVMscUJBQVQsQ0FUUTtBQVVuQkUsZUFBVyxFQUFFO0FBVk0sR0FEdUM7QUFhNUQsb0JBQWtCO0FBQ2hCWCxPQUFHLEVBQUUsZ0JBRFc7QUFFaEJDLFFBQUksRUFBRSxrQ0FGVTtBQUdoQkMsU0FBSyxFQUFFLGdCQUhTO0FBSWhCQyxlQUFXLEVBQ1QsdUVBTGM7QUFNaEJDLFdBQU8sRUFDTCxzR0FQYztBQVFoQkMsUUFBSSxFQUFFLENBQUNDLDBDQUFJLENBQUNDLElBQU4sQ0FSVTtBQVNoQkMsYUFBUyxFQUFFLElBQUlDLElBQUosQ0FBUyxxQkFBVCxDQVRLO0FBVWhCQyxhQUFTLEVBQUUsSUFBSUQsSUFBSixDQUFTLHFCQUFULENBVks7QUFXaEJFLGVBQVcsRUFBRTtBQVhHLEdBYjBDO0FBMEI1RCw4QkFBNEI7QUFDMUJYLE9BQUcsRUFBRSwwQkFEcUI7QUFFMUJDLFFBQUksRUFBRSw0Q0FGb0I7QUFHMUJDLFNBQUssRUFBRSw0QkFIbUI7QUFJMUJDLGVBQVcsRUFDVDs7OzZFQUx3QjtBQVMxQkMsV0FBTyxFQUNMLHNHQVZ3QjtBQVcxQkMsUUFBSSxFQUFFLENBQUNDLDBDQUFJLENBQUNNLFFBQU4sRUFBZ0JOLDBDQUFJLENBQUNDLElBQXJCLEVBQTJCRCwwQ0FBSSxDQUFDTyxPQUFoQyxDQVhvQjtBQVkxQkwsYUFBUyxFQUFFLElBQUlDLElBQUosQ0FBUyxvQkFBVCxDQVplO0FBYTFCQyxhQUFTLEVBQUUsSUFBSUQsSUFBSixDQUFTLHFCQUFULENBYmU7QUFjMUJFLGVBQVcsRUFBRTtBQWRhLEdBMUJnQztBQTBDNUQscUJBQW1CO0FBQ2pCWCxPQUFHLEVBQUUsaUJBRFk7QUFFakJDLFFBQUksRUFBRSxtQ0FGVztBQUdqQkMsU0FBSyxFQUFFLHdCQUhVO0FBSWpCQyxlQUFXLEVBQ1Qsc0VBTGU7QUFNakJDLFdBQU8sRUFDTCxzR0FQZTtBQVFqQkMsUUFBSSxFQUFFLENBQUNDLDBDQUFJLENBQUNNLFFBQU4sRUFBZ0JOLDBDQUFJLENBQUNDLElBQXJCLEVBQTJCRCwwQ0FBSSxDQUFDTyxPQUFoQyxDQVJXO0FBU2pCTCxhQUFTLEVBQUUsSUFBSUMsSUFBSixDQUFTLHFCQUFULENBVE07QUFVakJDLGFBQVMsRUFBRSxJQUFJRCxJQUFKLENBQVMscUJBQVQsQ0FWTTtBQVdqQkUsZUFBVyxFQUFFO0FBWEk7QUExQ3lDLENBQXZEIiwiZmlsZSI6Ii4vY29uc3RhbnRzL2dmeC1oYWwtYXJjaGl2ZS1saXN0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFyY2hpdmVJdGVtIH0gZnJvbSAnQGNvbnN0YW50cy9hcmNoaXZlLWxpc3QnO1xuaW1wb3J0IHsgVGFncyB9IGZyb20gJ0Bjb25zdGFudHMvdGFncyc7XG5cbmV4cG9ydCBjb25zdCBoYWxBcmNoaXZlUmVjb3JkOiBSZWNvcmQ8c3RyaW5nLCBJQXJjaGl2ZUl0ZW0+ID0ge1xuICAncnVzdC1jYXJnby1iYXNpY3MnOiB7XG4gICAga2V5OiAncnVzdC1jYXJnby1iYXNpY3MnLFxuICAgIGxpbms6ICcvZ2Z4LWhhbC1pbml0aWFscy9ydXN0LWNhcmdvLWJhc2ljcycsXG4gICAgdGl0bGU6ICdCYXNpY3Mgb24gUnVzdCAmIENhcmdvJyxcbiAgICBkZXNjcmlwdGlvbjogJ0Jhc2ljcyBvbiBSdXN0ICYgQ2FyZ28nLFxuICAgIG9nSW1hZ2U6XG4gICAgICAnaHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vMTE3ODYyODMvODE3NzA0OTctMGM3N2MwMDAtOTRmZS0xMWVhLTk1YmMtNDRlNWU0MzJiMWQ4LmpwZycsXG4gICAgdGFnczogW1RhZ3MuUlVTVF0sXG4gICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgnMjAyMC8wNC8yNiAyMjowMDowMCcpLFxuICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoJzIwMjAvMDQvMjYgMjI6MDA6MDAnKSxcbiAgICBpc1B1Ymxpc2hlZDogdHJ1ZSxcbiAgfSxcbiAgJ2Rpc3BsYXktd2luZG93Jzoge1xuICAgIGtleTogJ2Rpc3BsYXktd2luZG93JyxcbiAgICBsaW5rOiAnL2dmeC1oYWwtaW5pdGlhbHMvZGlzcGxheS13aW5kb3cnLFxuICAgIHRpdGxlOiAnRGlzcGxheSBXaW5kb3cnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0Rpc3BsYXlpbmcgV2luZG93IHVzaW5nIHdpbml0IGFuZCBiaW5kIGl0IHRvIGdmeC1oYWwgc3VyZmFjZSBpbnN0YW5jZScsXG4gICAgb2dJbWFnZTpcbiAgICAgICdodHRwczovL3VzZXItaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS8xMTc4NjI4My84MjEwOTk5Ny05ODg1MjQwMC05NzU4LTExZWEtODRhMC1hYTM5OTZjNjdmODYuanBnJyxcbiAgICB0YWdzOiBbVGFncy5SVVNUXSxcbiAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCcyMDIwLzA0LzI1IDE3OjAwOjAwJyksXG4gICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgnMjAyMC8wNS8wOSAyMzo1MDowMCcpLFxuICAgIGlzUHVibGlzaGVkOiB0cnVlLFxuICB9LFxuICAncGh5c2ljYWwtbG9naWNhbC1kZXZpY2VzJzoge1xuICAgIGtleTogJ3BoeXNpY2FsLWxvZ2ljYWwtZGV2aWNlcycsXG4gICAgbGluazogJy9nZngtaGFsLWluaXRpYWxzL3BoeXNpY2FsLWxvZ2ljYWwtZGV2aWNlcycsXG4gICAgdGl0bGU6ICdQaHlzaWNhbCAmIExvZ2ljYWwgRGV2aWNlcycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnV2Ugd291bGQgYmUgbG9va2luZyBpbnRvIGFsbCBcXFxuICAgICAgaW5zdGFuY2VzIGRldmljZXMgZnJvbSBnZngtaGFsLCBcXFxuICAgICAgd2hpY2ggcmVzZW1ibGVzIFZ1bGthbiBkZXZpY2VzLiBcXFxuICAgICAgV2Ugd2lsbCBhbHNvIGxlYXJuIHNvbWUgYmFzaWNzIG9uIGVudW1lcmF0aW5nIHRoZXNlIGRldmljZXMgYW5kIHN0dWZmLicsXG4gICAgb2dJbWFnZTpcbiAgICAgICdodHRwczovL3VzZXItaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS8xMTc4NjI4My84MjExMTIzMS00ODVlOGY4MC05NzYxLTExZWEtOWYyMS04ODQzZDRhNjY3NTIuanBnJyxcbiAgICB0YWdzOiBbVGFncy5UVVRPUklBTCwgVGFncy5SVVNULCBUYWdzLkdGWF9IQUxdLFxuICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoJzIwMjAvMDUvMTYgODo0NTowMCcpLFxuICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoJzIwMjAvMDUvMTYgMTk6MzA6MDAnKSxcbiAgICBpc1B1Ymxpc2hlZDogdHJ1ZSxcbiAgfSxcbiAgJ2NvbW1hbmQtYnVmZmVycyc6IHtcbiAgICBrZXk6ICdjb21tYW5kLWJ1ZmZlcnMnLFxuICAgIGxpbms6ICcvZ2Z4LWhhbC1pbml0aWFscy9jb21tYW5kLWJ1ZmZlcnMnLFxuICAgIHRpdGxlOiAnQ29tbWFuZCBCdWZmZXJzICYgUG9vbCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnV2Ugd291bGQgYmUgbG9va2luZyBpbnRvIENvbW1hbmQgQnVmZmVycyBhbmQgaG93IHRvIGluc3RhbnRpYXRlIHRoZW0nLFxuICAgIG9nSW1hZ2U6XG4gICAgICAnaHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vMTE3ODYyODMvODIxMjQ3OTQtZjA1Njc2MDAtOTdiZS0xMWVhLTkwMjMtZWExNDY3YTZiNzM0LmpwZycsXG4gICAgdGFnczogW1RhZ3MuVFVUT1JJQUwsIFRhZ3MuUlVTVCwgVGFncy5HRlhfSEFMXSxcbiAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCcyMDIwLzA1LzE2IDIxOjQ1OjAwJyksXG4gICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgnMjAyMC8wNS8xNiAyMTo0NTowMCcpLFxuICAgIGlzUHVibGlzaGVkOiB0cnVlLFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./constants/gfx-hal-archive-list.ts\n");

/***/ })

})