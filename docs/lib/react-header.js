(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define("ReactHeader", ["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactHeader"] = factory(require("React"));
	else
		root["ReactHeader"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
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

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Header = exports.NavigationItem = exports.NavigationList = exports.Logo = undefined;

	var _Header = __webpack_require__(2);

	var _Header2 = _interopRequireDefault(_Header);

	var _Logo = __webpack_require__(6);

	var _Logo2 = _interopRequireDefault(_Logo);

	var _NavigationList = __webpack_require__(7);

	var _NavigationList2 = _interopRequireDefault(_NavigationList);

	var _NavigationItem = __webpack_require__(17);

	var _NavigationItem2 = _interopRequireDefault(_NavigationItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Logo = _Logo2.default;
	exports.NavigationList = _NavigationList2.default;
	exports.NavigationItem = _NavigationItem2.default;
	exports.Header = _Header2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ResizableHeader = __webpack_require__(4);

	var _ResizableHeader2 = _interopRequireDefault(_ResizableHeader);

	var _ApplicationSizeCalculator = __webpack_require__(14);

	var _ApplicationSizeCalculator2 = _interopRequireDefault(_ApplicationSizeCalculator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Top level header element which styles a basic header
	 */
	var Header = function Header(props) {
	  return _react2.default.createElement(
	    _ApplicationSizeCalculator2.default,
	    null,
	    _react2.default.createElement(
	      _ResizableHeader2.default,
	      props,
	      props.children
	    )
	  );
	};

	exports.default = Header;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _MobileHeader = __webpack_require__(5);

	var _MobileHeader2 = _interopRequireDefault(_MobileHeader);

	var _DesktopHeader = __webpack_require__(13);

	var _DesktopHeader2 = _interopRequireDefault(_DesktopHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getHeaderChild(props) {
	  var mode = props.mode;

	  var headerChild = void 0;
	  if (mode === undefined) {
	    headerChild = _react2.default.createElement('div', null);
	  } else if (mode === 'desktop') {
	    headerChild = _react2.default.createElement(_DesktopHeader2.default, props);
	  } else {
	    headerChild = _react2.default.createElement(_MobileHeader2.default, props);
	  }
	  return headerChild;
	}

	/**
	 * Top level header element which styles a basic header
	 */
	var ResizableHeader = function ResizableHeader(props) {

	  return _react2.default.createElement(
	    'header',
	    { className: 'site-header' },
	    getHeaderChild(props)
	  );
	};

	exports.default = ResizableHeader;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Logo = __webpack_require__(6);

	var _Logo2 = _interopRequireDefault(_Logo);

	var _NavigationList = __webpack_require__(7);

	var _NavigationList2 = _interopRequireDefault(_NavigationList);

	var _VerticalSlider = __webpack_require__(11);

	var _VerticalSlider2 = _interopRequireDefault(_VerticalSlider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Top level header element which styles a basic header
	 */

	function getMainNav(navigationChild, sizeProps) {
	  var navListProps = void 0;
	  if (Object.assign) {
	    navListProps = Object.assign({}, sizeProps, { isMainMenu: true });
	  } else {
	    // FOR IE
	    sizeProps.isMainMenu = true;
	    navListProps = sizeProps;
	  }
	  return _react2.default.createElement(
	    'nav',
	    { role: 'navigation', key: 'nav', className: 'site-navigation' },
	    _react2.default.cloneElement(navigationChild, navListProps)
	  );
	}

	function getChildComponents(childArray, sizeProps) {
	  return childArray.filter(function (child) {
	    return child.type !== _Logo2.default;
	  }).map(function (child, index) {
	    return child.type === _NavigationList2.default ? getMainNav(child, sizeProps) : _react2.default.cloneElement(child, { key: index });
	  });
	}

	/**
	 * Gets the title component that is displayed on the vertical slider
	 *
	 * In this case we just display the Logo
	 *
	 */
	function getTitleComponent(childArray) {
	  var logo = childArray.filter(function (child) {
	    return child.type === _Logo2.default;
	  });
	  return logo.length > 0 ? logo[0] : undefined;
	}

	/**
	 *
	 **/
	var MobileHeader = function MobileHeader(props) {
	  var childArray = _react2.default.Children.toArray(props.children);
	  var titleComponent = getTitleComponent(childArray);
	  var sizeProps = {
	    windowWidth: props.windowWidth,
	    windowHeight: props.windowHeight,
	    headerHeight: props.headerHeight,
	    mode: props.mode
	  };
	  var childComponents = getChildComponents(childArray, sizeProps);
	  return _react2.default.createElement(
	    _VerticalSlider2.default,
	    _extends({ mode: props.mode
	    }, sizeProps, {
	      titleComponent: titleComponent }),
	    childComponents
	  );
	};

	exports.default = MobileHeader;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Logo = function Logo(props) {
	  return _react2.default.createElement(
	    "div",
	    { className: "site-logo" },
	    props.link ? _react2.default.createElement(
	      "a",
	      { className: "site-logo__link", href: props.link },
	      props.title
	    ) : props.title
	  );
	};

	exports.default = Logo;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ReactHelper = __webpack_require__(8);

	var _ReactHelper2 = _interopRequireDefault(_ReactHelper);

	var _KeyEvents = __webpack_require__(10);

	var _KeyEvents2 = _interopRequireDefault(_KeyEvents);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NavigationList = function (_React$Component) {
	  _inherits(NavigationList, _React$Component);

	  function NavigationList(props) {
	    _classCallCheck(this, NavigationList);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NavigationList).call(this, props));

	    _this.state = { activeIndex: -1 };
	    _this.handleKeyEvent = _this.handleKeyEvent.bind(_this);
	    return _this;
	  }

	  _createClass(NavigationList, [{
	    key: 'handleKeyEvent',
	    value: function handleKeyEvent(index, keyCode) {
	      // Note that here were are not taking next index from state but from the argument
	      // To use state, we would need to ensure that the state value is tracked properly and
	      // our component is notified of any focus/blur events caused due to clicks outside
	      var newActiveIndex = -1;
	      if (_KeyEvents2.default.CODE.LEFT === keyCode) {
	        newActiveIndex = index - 1;
	      } else if (_KeyEvents2.default.CODE.RIGHT === keyCode) {
	        newActiveIndex = index + 1;
	      }
	      if (newActiveIndex > -1 && newActiveIndex < this.props.children.length) {
	        this.setState({
	          activeIndex: newActiveIndex
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var isMainMenu = _props.isMainMenu;
	      var children = _props.children;
	      var windowWidth = _props.windowWidth;
	      var windowHeight = _props.windowHeight;
	      var mode = _props.mode;
	      var headerHeight = _props.headerHeight;

	      var activeIndex = this.state.activeIndex;
	      var childProps = { windowWidth: windowWidth, windowHeight: windowHeight, activeIndex: activeIndex, mode: mode, headerHeight: headerHeight, onKeyEvent: this.handleKeyEvent };
	      return _react2.default.createElement(
	        'ul',
	        { className: 'site-nav__list ' + (!isMainMenu ? 'site-nav__list--sub' : '') },
	        _ReactHelper2.default.addPropsToChildren(children, childProps, true)
	      );
	    }
	  }]);

	  return NavigationList;
	}(_react2.default.Component);

	exports.default = NavigationList;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ObjectHelper = __webpack_require__(9);

	var _ObjectHelper2 = _interopRequireDefault(_ObjectHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  addPropsToChildren: function addPropsToChildren(children, props) {
	    var addIndex = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	    return _react2.default.Children.map(children, function (child, index) {
	      var finalProps = addIndex ? _ObjectHelper2.default.assignProperties({}, props, { index: index }) : props;
	      return _react2.default.cloneElement(child, finalProps);
	    });
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  /**
	   * A simple utility to copy properties from one object to another.
	   *
	   * Uses object.assign if present else manually copies the properties
	   *
	   * Parts Taken from MDN pollyfill
	   *
	   * @param target
	   * @param sources
	   */
	  assignProperties: function assignProperties(target) {
	    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      sources[_key - 1] = arguments[_key];
	    }

	    if (Object.assign) {
	      Object.assign.apply(Object, [target].concat(sources));
	      return target;
	    }

	    for (var index = 0; index < sources.length; index++) {
	      var source = sources[index];
	      if (source != null) {
	        for (var key in source) {
	          if (Object.prototype.hasOwnProperty.call(source, key)) {
	            target[key] = source[key];
	          }
	        }
	      }
	    }
	    return target;
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  CODE: {
	    LEFT: 37,
	    RIGHT: 39,
	    UP: 38,
	    DOWN: 40,
	    ESCAPE: 27
	  }
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _SliderToggle = __webpack_require__(12);

	var _SliderToggle2 = _interopRequireDefault(_SliderToggle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//TODO : Very similiar to dropdown sldier
	var VerticalSlider = function (_React$Component) {
	  _inherits(VerticalSlider, _React$Component);

	  function VerticalSlider(props) {
	    _classCallCheck(this, VerticalSlider);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VerticalSlider).call(this, props));

	    _this.state = { draw: false };
	    _this.setSliderElement = _this.setSliderElement.bind(_this);
	    _this.drawSlider = _this.drawSlider.bind(_this);
	    return _this;
	  }

	  /**
	   * Gets the top bar if the title component is defined.
	   * 
	   * If it's not defined, it considers titlecomponent to be
	   * absent and does not returns any data
	   * 
	   * @returns {XML}
	   */


	  _createClass(VerticalSlider, [{
	    key: 'getTopBar',
	    value: function getTopBar() {
	      var draw = this.state.draw;


	      if (this.props.titleComponent !== undefined) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'vertical-slider__top' },
	          this.props.titleComponent,
	          _react2.default.createElement(_SliderToggle2.default, { toggleOpen: draw, onSliderToggle: this.drawSlider })
	        );
	      } else {
	        return _react2.default.createElement(
	          'div',
	          { 'aria-label': 'Sub Menu', 'aria-haspopup': 'true', 'aria-pressed': '' + draw, 'aria-expanded': '' + draw, role: 'button', className: 'vertical-slider__title', onClick: this.drawSlider },
	          this.props.title
	        );
	      }
	    }
	  }, {
	    key: 'setSliderElement',
	    value: function setSliderElement(sliderElement) {
	      this.sliderElement = sliderElement;
	    }
	  }, {
	    key: 'drawSlider',
	    value: function drawSlider() {
	      this.setState({
	        draw: !this.state.draw
	      });
	    }
	  }, {
	    key: 'getSliderChild',
	    value: function getSliderChild(isSubSlider, children) {
	      if (isSubSlider) {
	        return [_react2.default.createElement(
	          'div',
	          { key: 'back', onClick: this.drawSlider, className: 'vertical-slider__back' },
	          'Back'
	        )].concat(children);
	      } else {
	        return children;
	      }
	    }

	    /**
	     *
	     * Renders a vertical slider either as a top level slider or a child level slider.
	     *
	     * It is a bit fragile approach - it sets the top level slider as fixes and any child level slider as absolute.
	     * It also uses the top level fixed slider as a reference, which means all other properties between these
	     * should have position relative.
	     *
	     * Ideal approach should have been to use 'fixed' for both child and parent sliders, but due to issues in
	     * render in different browsers, had to take this approach.
	     *
	     * Should re-visit this later - maybe extract out child and pull all of them in one heirachy
	     *
	     * @returns {XML}
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var isDrawn = this.state.draw;
	      var _props = this.props;
	      var isSubSlider = _props.isSubSlider;
	      var headerHeight = _props.headerHeight;
	      var windowWidth = _props.windowWidth;
	      var windowHeight = _props.windowHeight;

	      var drawnClass = isDrawn ? 'vertical-slider--drawn' : '';
	      var sliderLevelClass = isSubSlider ? 'vertical-slider--sub' : 'vertical-slider--main';
	      var width = Math.floor(windowWidth * 3 / 4);
	      var childStyles = {
	        transform: 'translateX(' + (isDrawn ? '0' : '-' + width + 'px') + ')',
	        height: windowHeight - headerHeight + 'px',
	        width: width + 'px',
	        top: isSubSlider ? 0 : headerHeight + 'px',
	        left: 0,
	        position: isSubSlider ? 'absolute' : 'fixed'
	      };

	      return _react2.default.createElement(
	        'div',
	        { ref: this.setSliderElement, className: 'vertical-slider ' + drawnClass + ' ' + sliderLevelClass },
	        this.getTopBar(),
	        _react2.default.createElement(
	          'div',
	          { 'aria-hidden': !isDrawn, style: childStyles, className: 'vertical-slider--children' },
	          this.getSliderChild(isSubSlider, this.props.children)
	        )
	      );
	    }
	  }]);

	  return VerticalSlider;
	}(_react2.default.Component);

	exports.default = VerticalSlider;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NavigationToggle = function (_React$Component) {
	  _inherits(NavigationToggle, _React$Component);

	  function NavigationToggle(props) {
	    _classCallCheck(this, NavigationToggle);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NavigationToggle).call(this, props));

	    _this.toggledSlider = _this.toggledSlider.bind(_this);
	    return _this;
	  }

	  _createClass(NavigationToggle, [{
	    key: 'toggledSlider',
	    value: function toggledSlider() {
	      this.props.onSliderToggle();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var toggleOpen = this.props.toggleOpen;

	      var openStateClass = toggleOpen ? 'slider-toggle--open' : '';
	      var label = toggleOpen ? "Slider Expanded" : "Slider Closed";
	      //TODO : Add Aria Controls
	      return _react2.default.createElement(
	        'span',
	        { 'aria-label': label, role: 'button', 'aria-pressed': '' + toggleOpen, 'aria-expanded': '' + toggleOpen, 'aria-haspopup': 'true', className: 'slider-toggle__wrapper', onClick: this.toggledSlider },
	        _react2.default.createElement('span', { className: 'slider-toggle ' + openStateClass })
	      );
	    }
	  }]);

	  return NavigationToggle;
	}(_react2.default.Component);

	exports.default = NavigationToggle;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _NavigationList = __webpack_require__(7);

	var _NavigationList2 = _interopRequireDefault(_NavigationList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getMainNav(navigationChild) {
	  return _react2.default.createElement(
	    'nav',
	    { role: 'navigation', key: 'nav', className: 'site-navigation' },
	    _react2.default.cloneElement(navigationChild, { isMainMenu: true })
	  );
	}

	/**
	 *
	 * @param children
	 * @returns {Array}
	 */
	function organizeDesktopChildren(children) {
	  var newChildren = [];

	  children.forEach(function (child, index) {
	    if (child.type === _NavigationList2.default) {
	      newChildren.push(getMainNav(child));
	    } else {
	      newChildren.push(_react2.default.cloneElement(child, { key: index }));
	    }
	  });
	  return newChildren;
	}

	var DesktopHeader = function DesktopHeader(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    organizeDesktopChildren(props.children)
	  );
	};

	exports.default = DesktopHeader;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _DOMHelper = __webpack_require__(15);

	var _DOMHelper2 = _interopRequireDefault(_DOMHelper);

	var _helper = __webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ApplicationSizeCalculator = function (_React$Component) {
	  _inherits(ApplicationSizeCalculator, _React$Component);

	  function ApplicationSizeCalculator(props) {
	    _classCallCheck(this, ApplicationSizeCalculator);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ApplicationSizeCalculator).call(this, props));

	    _this.calculateAppDimensions = (0, _helper.debounce)(_this.calculateAppDimensions.bind(_this), 200);
	    return _this;
	  }

	  _createClass(ApplicationSizeCalculator, [{
	    key: 'calculateAppDimensions',
	    value: function calculateAppDimensions() {
	      var headerHeight = _DOMHelper2.default.getElementVisibleHeight('site-header');
	      this.setState({
	        windowHeight: window.innerHeight,
	        windowWidth: window.innerWidth,
	        mode: _DOMHelper2.default.getMode(),
	        headerHeight: headerHeight
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('resize', this.calculateAppDimensions);
	      window.addEventListener('scroll', this.calculateAppDimensions);

	      this.calculateAppDimensions();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize', this.calculateAppDimensions);
	      window.addEventListener('scroll', this.calculateAppDimensions);
	    }

	    /**
	     * renders the child component along with all the properties
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.cloneElement(this.props.children, this.state);
	    }
	  }]);

	  return ApplicationSizeCalculator;
	}(_react2.default.Component);

	exports.default = ApplicationSizeCalculator;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  /**
	   * Used in calculating if the size is running in desktop mode
	   * (large screen) or mobile mode (small screen).
	   *
	   * For this , it looks ta the values attached to the header element via css properties.
	   *
	   * This way it is in sync with any css media queries.
	   * @returns {string}
	   */
	  getMode: function getMode() {
	    var value = 'mobile';
	    var headerElement = document.querySelector('.site-header');
	    if (headerElement !== null) {
	      value = window.getComputedStyle(headerElement, ':before').getPropertyValue('content').replace(/\"/g, '');
	    }
	    return value;
	  },


	  /**
	   * Get visible height of the element
	   *
	   * @param elementClass
	   * @returns {number}
	   */
	  getElementVisibleHeight: function getElementVisibleHeight(elementClass) {
	    var element = document.getElementsByClassName(elementClass);
	    if (element.length === 0) {
	      throw new Error('No Element found with class : ' + elementClass);
	    }
	    var boundingBox = element[0].getBoundingClientRect();
	    // As header is on the top, to find visible height just add any negative "top" value to get header height
	    // AS react is > IE8, these properties will always be present
	    return Math.max(boundingBox.height + boundingBox.top, 0);
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.debounce = debounce;
	/**
	 * Module dependencies.
	 */

	var nowTS = Date.now || now;

	function now() {
	  return new Date().getTime();
	}

	/**
	 * Returns a function, that, as long as it continues to be invoked, will not
	 * be triggered. The function will be called after it stops being called for
	 * N milliseconds. If `immediate` is passed, trigger the function on the
	 * leading edge, instead of the trailing. The function also has a property 'clear'
	 * that is a function which will clear the timer to prevent previously scheduled executions.
	 *
	 * @source underscore.js
	 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
	 * @api public
	 * @param func
	 * @param wait
	 * @param immediate
	 */

	function debounce(func, wait, immediate) {
	  var timeout, args, context, timestamp, result;
	  if (null == wait) wait = 100;

	  function later() {
	    var last = nowTS() - timestamp;

	    if (last < wait && last > 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      if (!immediate) {
	        result = func.apply(context, args);
	        context = args = null;
	      }
	    }
	  }

	  var debounced = function debounced() {
	    context = this;
	    args = arguments;
	    timestamp = nowTS();
	    var callNow = immediate && !timeout;
	    if (!timeout) timeout = setTimeout(later, wait);
	    if (callNow) {
	      result = func.apply(context, args);
	      context = args = null;
	    }

	    return result;
	  };

	  debounced.clear = function () {
	    if (timeout) {
	      clearTimeout(timeout);
	      timeout = null;
	    }
	  };

	  return debounced;
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _DropdownSlider = __webpack_require__(18);

	var _DropdownSlider2 = _interopRequireDefault(_DropdownSlider);

	var _VerticalSlider = __webpack_require__(11);

	var _VerticalSlider2 = _interopRequireDefault(_VerticalSlider);

	var _KeyEvents = __webpack_require__(10);

	var _KeyEvents2 = _interopRequireDefault(_KeyEvents);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NavigationItem = function (_React$Component) {
	  _inherits(NavigationItem, _React$Component);

	  function NavigationItem(props) {
	    _classCallCheck(this, NavigationItem);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NavigationItem).call(this, props));

	    _this.state = { displayChild: false };
	    _this.handleKey = _this.handleKey.bind(_this);
	    _this.dropdownClicked = _this.dropdownClicked.bind(_this);
	    return _this;
	  }

	  _createClass(NavigationItem, [{
	    key: 'handleKey',
	    value: function handleKey(keyEvent) {
	      var keyCode = keyEvent.which;
	      var codes = _KeyEvents2.default.CODE;
	      // handle child keyboard navigation keyevents only if children are present
	      if (this.props.children && (codes.DOWN === keyCode || codes.UP === keyCode || codes.ESCAPE === keyCode)) {
	        // Prevent default so page does not moves down
	        keyEvent.preventDefault();
	        this.setState({
	          // do not display if up or escape key is present, display otherwise
	          displayChild: !(codes.UP === keyCode || codes.ESCAPE === keyCode)
	        });
	      } else if (this.props.onKeyEvent) {
	        this.props.onKeyEvent(this.props.index, keyCode);
	      }
	    }
	  }, {
	    key: 'dropdownClicked',
	    value: function dropdownClicked() {
	      this.setState({
	        displayChild: !this.state.displayChild
	      });
	    }
	  }, {
	    key: 'getSubMenuElement',
	    value: function getSubMenuElement(children, props) {
	      var _this2 = this;

	      if (props.mode === 'mobile') {
	        return _react2.default.createElement(
	          _VerticalSlider2.default,
	          { windowWidth: props.windowWidth,
	            windowHeight: props.windowHeight,
	            mode: props.mode,
	            headerHeight: props.headerHeight,
	            isSubSlider: true,
	            title: props.text },
	          children
	        );
	      } else {
	        return _react2.default.createElement(
	          _DropdownSlider2.default,
	          { handleClick: this.dropdownClicked,
	            draw: this.state.displayChild,
	            ref: function ref(_ref) {
	              return _this2.subMenuElement = _ref;
	            },
	            title: props.text },
	          children
	        );
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.activeIndex === this.props.index) {
	        if (this.linkElement) {
	          this.linkElement.focus();
	        }
	        if (this.subMenuElement) {
	          this.subMenuElement.focus();
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      /**
	       * Renders the item of each menu
	       * Each menu item would be either one of these two:-
	       * 1. Link to the navigation item
	       * 2. Act as a link to open the dropdown/submenu
	       */
	      var _props = this.props;
	      var link = _props.link;
	      var text = _props.text;
	      var children = _props.children;

	      var navigationLink = _react2.default.createElement(
	        'a',
	        { ref: function ref(_ref2) {
	            return _this3.linkElement = _ref2;
	          }, className: 'site-nav__item-link', href: link },
	        text
	      );
	      var itemChild = children ? this.getSubMenuElement(children, this.props) : navigationLink;
	      return _react2.default.createElement(
	        'li',
	        { onKeyDown: this.handleKey, className: 'site-nav__item' },
	        itemChild
	      );
	    }
	  }]);

	  return NavigationItem;
	}(_react2.default.Component);

	exports.default = NavigationItem;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DropdownSlider = function (_React$Component) {
	  _inherits(DropdownSlider, _React$Component);

	  function DropdownSlider(props) {
	    _classCallCheck(this, DropdownSlider);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DropdownSlider).call(this, props));

	    _this.state = {};
	    _this.setSliderElement = _this.setSliderElement.bind(_this);
	    _this.drawSlider = _this.drawSlider.bind(_this);
	    return _this;
	  }

	  _createClass(DropdownSlider, [{
	    key: 'focus',
	    value: function focus() {
	      this.titleElement.focus();
	    }
	  }, {
	    key: 'getHeight',
	    value: function getHeight() {
	      // Scroll height gives the correct height even if we have
	      // provided a different height and/or have overflow: hidden instead
	      // of scroll
	      return this.sliderElement ? this.sliderElement.scrollHeight : 0;
	    }
	  }, {
	    key: 'setSliderElement',
	    value: function setSliderElement(sliderElement) {
	      this.sliderElement = sliderElement;
	      this.setState({ 'fullHeight': this.getHeight() });
	    }
	  }, {
	    key: 'drawSlider',
	    value: function drawSlider() {
	      if (this.props.handleClick) {
	        this.props.handleClick();
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // If menu is being closed Add the current fullHeight to state
	      if (nextProps.draw === false) {
	        this.setState({ 'fullHeight': this.getHeight() });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var draw = this.props.draw;
	      // const sliderTransform = draw === true ? '0' : '-100%';

	      var drawnClass = draw ? 'dropdown-slider--drawn' : '';
	      var styles = {
	        height: draw ? this.state.fullHeight + 'px' : 0
	      };

	      return _react2.default.createElement(
	        'div',
	        { role: 'button', 'aria-pressed': '' + draw, 'aria-expanded': '' + draw, 'aria-haspopup': 'true', onClick: this.drawSlider, className: 'dropdown-slider ' + drawnClass },
	        _react2.default.createElement(
	          'a',
	          { className: 'dropdown-slider__title', ref: function ref(_ref) {
	              return _this2.titleElement = _ref;
	            }, tabIndex: '0' },
	          this.props.title,
	          _react2.default.createElement('span', { className: 'dropdown-slider--caret' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { ref: this.setSliderElement, style: styles, className: 'dropdown-slider--children' },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return DropdownSlider;
	}(_react2.default.Component);

	exports.default = DropdownSlider;

/***/ }
/******/ ])
});
;