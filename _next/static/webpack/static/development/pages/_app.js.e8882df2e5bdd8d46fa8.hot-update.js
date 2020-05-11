webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./utils/prism-langs.ts":
/*!******************************!*\
  !*** ./utils/prism-langs.ts ***!
  \******************************/
/*! exports provided: log4rs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log4rs", function() { return log4rs; });
/**
 * This file is a plugin for language highlight for
 * log4rs.
 *
 * I am trying to mimic how PrismJS actually parses languages to highlight
 * them in JS.
 *
 * How to create a plugin is difficult, I still don't understand what is happening
 * in this code, just a small understanding that's it.
 *
 * Details on how to create a new language plugin, see this:
 * https://prismjs.com/extending.html
 */
function log4rs(Prism) {
  Prism.languages.log4rs = {
    string: {
      pattern: /(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+\+\d{2}:\d{2})\s+(\w+)\s+(?:.*)/,
      inside: {
        datetime: {
          pattern: /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+\+\d{2}:\d{2})/,
          alias: 'number'
        },
        keyword: {
          pattern: /debug|info|warn|error/i
        }
      }
    }
  };
  setTimeout(() => {
    console.log('Is Registered: ', Prism.registered('log4rs'), ', Highligter: ', Prism.highlight('2020-05-11T06:59:42.987942+05:30 DEBUG show_window - MainEventsCleared', 'log4rs'));
    console.log(Prism.highlight('2020-05-11T06:59:42.987942+05:30 DEBUG show_window - MainEventsCleared', 'bash'));
  }, 1000);
}

log4rs.displayName = 'log4rs';
log4rs.aliases = ['log'];


/***/ })

})
//# sourceMappingURL=_app.js.e8882df2e5bdd8d46fa8.hot-update.js.map