webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/progressive-image.tsx":
/*!******************************************!*\
  !*** ./components/progressive-image.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Image; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_progressive_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-progressive-image */ "./node_modules/react-progressive-image/dist.js");
/* harmony import */ var react_progressive_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_progressive_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/components/progressive-image.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    filter: 'blur(0)',
    transition: 'filter 0.3s ease-out'
  },
  blur: {
    filter: 'blur(3)'
  }
});
function Image(props) {
  const classes = useStyles();
  return __jsx(react_progressive_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
    src: props.src,
    placeholder: props.placeholder,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, (src, loading) => {
    const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, {
      [classes.blur]: loading
    });
    return __jsx("img", {
      className: rootClasses,
      src: src,
      alt: "an image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 16
      }
    });
  });
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/react-progressive-image/dist.js":
/*!******************************************************!*\
  !*** ./node_modules/react-progressive-image/dist.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProgressiveImage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProgressiveImage, _React$Component);

  function ProgressiveImage(props) {
    var _this;

    _classCallCheck(this, ProgressiveImage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProgressiveImage).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "image", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "loadImage", function (src, srcSetData) {
      // If there is already an image we nullify the onload
      // and onerror props so it does not incorrectly set state
      // when it resolves
      if (_this.image) {
        _this.image.onload = null;
        _this.image.onerror = null;
      }

      var image = new Image();
      _this.image = image;
      image.onload = _this.onLoad;
      image.onerror = _this.onError;
      image.src = src;

      if (srcSetData) {
        image.srcset = srcSetData.srcSet;
        image.sizes = srcSetData.sizes;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLoad", function () {
      // use this.image.src instead of this.props.src to
      // avoid the possibility of props being updated and the
      // new image loading before the new props are available as
      // this.props.
      if (_this.props.delay) {
        _this.setImageWithDelay();
      } else {
        _this.setImage();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setImageWithDelay", function () {
      setTimeout(function () {
        _this.setImage();
      }, _this.props.delay);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setImage", function () {
      _this.setState({
        image: _this.image.src,
        loading: false,
        srcSetData: {
          srcSet: _this.image.srcset || '',
          sizes: _this.image.sizes || ''
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onError", function (errorEvent) {
      var onError = _this.props.onError;

      if (onError) {
        onError(errorEvent);
      }
    });

    _this.state = {
      image: props.placeholder,
      loading: true,
      srcSetData: {
        srcSet: '',
        sizes: ''
      }
    };
    return _this;
  }

  _createClass(ProgressiveImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          src = _this$props.src,
          srcSetData = _this$props.srcSetData;
      this.loadImage(src, srcSetData);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var _this$props2 = this.props,
          src = _this$props2.src,
          placeholder = _this$props2.placeholder,
          srcSetData = _this$props2.srcSetData; // We only invalidate the current image if the src has changed.

      if (src !== prevProps.src) {
        this.setState({
          image: placeholder,
          loading: true
        }, function () {
          _this2.loadImage(src, srcSetData);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.image) {
        this.image.onload = null;
        this.image.onerror = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          image = _this$state.image,
          loading = _this$state.loading,
          srcSetData = _this$state.srcSetData;
      var children = this.props.children;

      if (!children || typeof children !== 'function') {
        throw new Error("ProgressiveImage requires a function as its only child");
      }

      return children(image, loading, srcSetData);
    }
  }]);

  return ProgressiveImage;
}(React.Component);

exports.default = ProgressiveImage;


/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/theme */ "./utils/theme.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_blockquote__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/blockquote */ "./components/blockquote.tsx");
/* harmony import */ var _components_mdx_h1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/mdx-h1 */ "./components/mdx-h1.tsx");
/* harmony import */ var _components_mdx_h2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/mdx-h2 */ "./components/mdx-h2.tsx");
/* harmony import */ var _components_code_block__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/code-block */ "./components/code-block.tsx");
/* harmony import */ var _components_inline_code__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/inline-code */ "./components/inline-code.tsx");
/* harmony import */ var _components_code_diff__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/code-diff */ "./components/code-diff.tsx");
/* harmony import */ var _components_progressive_image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/progressive-image */ "./components/progressive-image.tsx");

var _jsxFileName = "/Users/subroto.biswas/Subroto/shub1427.github.io/pages/_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;















const mdComponents = {
  a: props => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Link"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    target: "_blank"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 22
    }
  })),
  h1: props => __jsx(_components_mdx_h1__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 23
    }
  })),
  h2: props => __jsx(_components_mdx_h2__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 23
    }
  })),
  h3: props => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    variant: "h6"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 23
    }
  })),
  p: props => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    variant: "body1"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 22
    }
  })),
  blockquote: props => __jsx(_components_blockquote__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 31
    }
  })),
  code: _components_code_block__WEBPACK_IMPORTED_MODULE_12__["default"],
  inlineCode: _components_inline_code__WEBPACK_IMPORTED_MODULE_13__["default"],
  Button: _material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"],
  Diff: _components_code_diff__WEBPACK_IMPORTED_MODULE_14__["default"],
  CodeBlock: _components_code_block__WEBPACK_IMPORTED_MODULE_12__["default"],
  // Using codeblock as is gives us more control
  Image: _components_progressive_image__WEBPACK_IMPORTED_MODULE_15__["default"]
};
class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_4___default.a {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    }, __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "/css/main.css",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    })), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
      theme: _utils_theme__WEBPACK_IMPORTED_MODULE_2__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }), __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["MDXProvider"], {
      components: mdComponents,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    })))));
  }

}

/***/ })

})
//# sourceMappingURL=_app.js.09752d67690d7d00f746.hot-update.js.map