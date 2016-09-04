(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"), require("ReactHeader"));
	else if(typeof define === 'function' && define.amd)
		define("ex", ["React", "ReactDOM", "ReactHeader"], factory);
	else if(typeof exports === 'object')
		exports["ex"] = factory(require("React"), require("ReactDOM"), require("ReactHeader"));
	else
		root["ex"] = factory(root["React"], root["ReactDOM"], root["ReactHeader"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactHeader = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// const Logo = ReactHeader.Logo;
	// const NavigationList = ReactHeader.NavigationList;
	// const NavigationItem = ReactHeader.NavigationItem;
	// const Header = ReactHeader.Header;

	var header = _react2.default.createElement(
	  _reactHeader.Header,
	  null,
	  _react2.default.createElement(_reactHeader.Logo, { title: 'My Logo', link: 'http://testing.com' }),
	  _react2.default.createElement(
	    _reactHeader.NavigationList,
	    null,
	    _react2.default.createElement(_reactHeader.NavigationItem, { link: '#home', text: 'Home' }),
	    _react2.default.createElement(
	      _reactHeader.NavigationItem,
	      { text: 'Team' },
	      _react2.default.createElement(
	        _reactHeader.NavigationList,
	        null,
	        _react2.default.createElement(_reactHeader.NavigationItem, { link: '#local', text: 'Local' }),
	        _react2.default.createElement(_reactHeader.NavigationItem, { link: '#', text: 'Remote' }),
	        _react2.default.createElement(_reactHeader.NavigationItem, { link: '#', text: 'Desktop' }),
	        _react2.default.createElement(_reactHeader.NavigationItem, { link: '#', text: 'Train' })
	      )
	    ),
	    _react2.default.createElement(_reactHeader.NavigationItem, { link: '#contact', text: 'Contact' }),
	    _react2.default.createElement(_reactHeader.NavigationItem, { link: '#', text: 'About Us' })
	  ),
	  _react2.default.createElement('input', { type: 'search', placeholder: 'Search...' })
	);

	(0, _reactDom.render)(header, document.getElementById('header'));

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }
/******/ ])
});
;