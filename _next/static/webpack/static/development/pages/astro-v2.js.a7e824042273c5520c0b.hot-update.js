webpackHotUpdate("static/development/pages/astro-v2.js",{

/***/ "./constants/archive-list.ts":
/*!***********************************!*\
  !*** ./constants/archive-list.ts ***!
  \***********************************/
/*! exports provided: archiveRecord, archiveList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "archiveRecord", function() { return archiveRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "archiveList", function() { return archiveList; });
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags */ "./constants/tags.ts");
/* harmony import */ var _utils_array_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/array-utils */ "./utils/array-utils.ts");


// I know, it is good to have a DB and a Backend, but
// for simplicity and saving cost, I am ignoring the Backend
const archiveRecord = {
  'performance-reactjs': {
    key: 'performance-reactjs',
    link: '/performance-reactjs',
    title: 'Performance Improvements in JS and ReactJS',
    description: 'Recent Performance related findings of mine, which I am jotting down here for later reference',
    tags: [_tags__WEBPACK_IMPORTED_MODULE_0__["Tags"].RESEARCH, _tags__WEBPACK_IMPORTED_MODULE_0__["Tags"].JS, _tags__WEBPACK_IMPORTED_MODULE_0__["Tags"].REACT],
    createdAt: new Date('2020/05/07 09:15:00'),
    updatedAt: new Date('2020/05/07 09:15:00'),
    isPublished: true
  },
  'upload-client-logs': {
    key: 'upload-client-logs',
    link: '/upload-client-logs',
    title: 'Client Browser Log to your Server',
    description: "Sometimes (like to get details on performance) there is a requirement to log data \
      from end-user's browser to you own servers, for which this note will talk about.",
    tags: [_tags__WEBPACK_IMPORTED_MODULE_0__["Tags"].PROJECT, _tags__WEBPACK_IMPORTED_MODULE_0__["Tags"].JS, _tags__WEBPACK_IMPORTED_MODULE_0__["Tags"].REACT],
    createdAt: new Date('2020/04/29 08:30:00'),
    updatedAt: new Date('2020/05/03 23:30:00'),
    isPublished: true
  },
  'word-counter': {
    key: 'word-counter',
    link: '/word-counter',
    title: 'Word Counter in Rust',
    description: 'Just a fun bin script for my project, to count words in my MDX files.',
    tags: [_tags__WEBPACK_IMPORTED_MODULE_0__["Tags"].PROJECT, _tags__WEBPACK_IMPORTED_MODULE_0__["Tags"].RUST],
    createdAt: new Date('2020/04/26 22:00:00'),
    updatedAt: new Date('2020/04/26 22:00:00'),
    isPublished: true
  },
  'gfx-hal-basics': {
    key: 'gfx-hal-basics',
    link: '/gfx-hal-initials',
    title: 'Basics on Vulkan using gfx-hal',
    description: 'Reference Notes for me (and others) to help get started with Rust and Vulkan',
    tags: [_tags__WEBPACK_IMPORTED_MODULE_0__["Tags"].TUTORIAL, _tags__WEBPACK_IMPORTED_MODULE_0__["Tags"].RUST],
    createdAt: new Date('2020/04/26 10:00:00'),
    updatedAt: new Date('2020/04/26 16:00:00'),
    isPublished: true
  },
  'astro-v2': {
    key: 'astro-v2',
    link: '/astro-v2',
    title: 'Astro Blaster v2 in Rust',
    description: 'A very minimal game making tutorial in Rust using ggez',
    tags: [_tags__WEBPACK_IMPORTED_MODULE_0__["Tags"].TUTORIAL, _tags__WEBPACK_IMPORTED_MODULE_0__["Tags"].RUST],
    createdAt: new Date('2020/04/10'),
    updatedAt: new Date('2020/04/12'),
    isPublished: true
  }
};
const archiveList = Object(_utils_array_utils__WEBPACK_IMPORTED_MODULE_1__["toArray"])(archiveRecord);

/***/ })

})
//# sourceMappingURL=astro-v2.js.a7e824042273c5520c0b.hot-update.js.map