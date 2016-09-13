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
	exports.StickyHeader = exports.StickyOnScrollUpHeader = exports.Header = exports.NavigationItem = exports.NavigationList = exports.Logo = undefined;

	var _Header = __webpack_require__(2);

	var _Header2 = _interopRequireDefault(_Header);

	var _StickyHeader = __webpack_require__(18);

	var _StickyHeader2 = _interopRequireDefault(_StickyHeader);

	var _StickyOnScrollUpHeader = __webpack_require__(19);

	var _StickyOnScrollUpHeader2 = _interopRequireDefault(_StickyOnScrollUpHeader);

	var _Logo = __webpack_require__(6);

	var _Logo2 = _interopRequireDefault(_Logo);

	var _NavigationList = __webpack_require__(7);

	var _NavigationList2 = _interopRequireDefault(_NavigationList);

	var _NavigationItem = __webpack_require__(21);

	var _NavigationItem2 = _interopRequireDefault(_NavigationItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Logo = _Logo2.default;
	exports.NavigationList = _NavigationList2.default;
	exports.NavigationItem = _NavigationItem2.default;
	exports.Header = _Header2.default;
	exports.StickyOnScrollUpHeader = _StickyOnScrollUpHeader2.default;
	exports.StickyHeader = _StickyHeader2.default;

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

	var _ApplicationSizeCalculator = __webpack_require__(15);

	var _ApplicationSizeCalculator2 = _interopRequireDefault(_ApplicationSizeCalculator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Top level header element which styles a basic header
	 *
	 * Consists of Logo, Navigation Bar and any other item
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

	Header.propTypes = {
	  children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element)
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

	var _DesktopHeader = __webpack_require__(14);

	var _DesktopHeader2 = _interopRequireDefault(_DesktopHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Gets the type of the header, based on the mode
	 *
	 * @param props
	 * @returns {*}
	 */
	function getHeaderChild(props) {
	  var mode = props.mode;

	  var headerChild = void 0;
	  // We cannot have a default mode otherwise the app may switch
	  // from the default mode to current mode.
	  // Hence, just show empty data till the app is initialized
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
	 * Header element which changes it's type according to
	 * window size/current mode
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

	var _VerticalSlider = __webpack_require__(12);

	var _VerticalSlider2 = _interopRequireDefault(_VerticalSlider);

	var _ReactHelper = __webpack_require__(8);

	var _ReactHelper2 = _interopRequireDefault(_ReactHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Gets the child components for Mobile Menu
	 *
	 * It iterates over all child, filters out the logo component (as Logo needs to be displayed on top)
	 * and adds them to the menu
	 *
	 * @param childArray
	 * @param sizeProps
	 * @returns {*}
	 */
	function getChildComponents(childArray, sizeProps) {
	  return childArray.filter(function (child) {
	    return child.type !== _Logo2.default;
	  }).map(function (child, index) {
	    return child.type === _NavigationList2.default ? _ReactHelper2.default.getMainNav(child, sizeProps) : _react2.default.cloneElement(child, { key: index });
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
	 * Header element for smaller screens, usually found on mobile devices
	 */
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
	    _extends({}, sizeProps, { titleComponent: titleComponent }),
	    childComponents
	  );
	};

	MobileHeader.propTypes = {
	  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.array]),
	  windowWidth: _react2.default.PropTypes.number,
	  windowHeight: _react2.default.PropTypes.number,
	  headerHeight: _react2.default.PropTypes.number,
	  mode: _react2.default.PropTypes.oneOf(['desktop', 'mobile'])
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

	/**
	 * Used for displaying a simple logo
	 *
	 * Can either be a text, image or component
	 * By default logo will be on the top left and will always be displayed as the top header
	 *
	 * @param props
	 * @returns {XML}
	 * @constructor
	 */
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

	Logo.propTypes = {
	  link: _react2.default.PropTypes.string,
	  title: _react2.default.PropTypes.string
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

	var _NavigationListHelper = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Represents a lit of Navigation Items which are displayed
	 * as a part of menu
	 *
	 */
	var NavigationList = function (_React$Component) {
	  _inherits(NavigationList, _React$Component);

	  function NavigationList(props) {
	    _classCallCheck(this, NavigationList);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NavigationList).call(this, props));

	    _this.state = { activeIndex: -1 };
	    _this.handleKeyEvent = _this.handleKeyEvent.bind(_this);
	    _this.handleFocusChangeEvent = _this.handleFocusChangeEvent.bind(_this);
	    // A simple element which is used for keeping track of which element in list is active
	    _this.activeElementSyncIndex = -1;
	    return _this;
	  }

	  _createClass(NavigationList, [{
	    key: 'handleKeyEvent',
	    value: function handleKeyEvent(keyEvent, index) {
	      var listHelper = (0, _NavigationListHelper.getListHelper)(this.props.isMainMenu);
	      return this.handleKeyNavigation(listHelper, keyEvent, index);
	    }

	    /**
	     * Handles Key navigation
	     *
	     * Handles the code used to navigate around
	     *
	     * @param listHelper
	     * @param keyEvent
	     * @returns {boolean}
	     */

	  }, {
	    key: 'handleKeyNavigation',
	    value: function handleKeyNavigation(listHelper, keyEvent) {
	      var keyCode = keyEvent.which;
	      var handledEvent = false;
	      if (listHelper.canHandleEvent(keyCode)) {
	        var newActiveIndex = this.activeElementSyncIndex + listHelper.getChange(keyCode);
	        if (newActiveIndex >= -1 && newActiveIndex < this.props.children.length) {
	          this.setState({
	            activeIndex: newActiveIndex
	          });
	          // prevent default so that the default behaviour like down key
	          // shifting the page down does not happens
	          keyEvent.preventDefault();
	        }
	        // If no child element is active, this means call any close event handler, if defined.
	        if (newActiveIndex === -1 && this.props.handleCloseEvent) {
	          this.props.handleCloseEvent();
	        }
	        handledEvent = true;
	      }
	      return handledEvent;
	    }

	    /**
	     *
	     * @param activeChildIndex
	     */

	  }, {
	    key: 'updateActiveChild',
	    value: function updateActiveChild(activeChildIndex) {
	      this.setState({
	        activeIndex: activeChildIndex
	      });
	    }
	  }, {
	    key: 'handleFocusChangeEvent',
	    value: function handleFocusChangeEvent(isFocused, index) {
	      if (isFocused) {
	        this.activeElementSyncIndex = index;
	      } else {
	        this.activeElementSyncIndex = -1;
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.reset === true) {
	        this.updateActiveChild(-1);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var listHelper = (0, _NavigationListHelper.getListHelper)(this.props.isMainMenu);
	      if (listHelper.nextKey === this.props.parentKeyCode && this.state.activeIndex === -1) {
	        this.updateActiveChild(0);
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

	      var listHelper = (0, _NavigationListHelper.getListHelper)(isMainMenu);
	      var activeIndex = this.state.activeIndex;
	      var childProps = { windowWidth: windowWidth, windowHeight: windowHeight, activeIndex: activeIndex, mode: mode, headerHeight: headerHeight, onKeyEvent: this.handleKeyEvent, onFocusChange: this.handleFocusChangeEvent };
	      return _react2.default.createElement(
	        'ul',
	        { className: 'site-nav__list ' + listHelper.className },
	        _ReactHelper2.default.addPropsToChildren(children, childProps, true)
	      );
	    }
	  }]);

	  return NavigationList;
	}(_react2.default.Component);

	NavigationList.propTypes = {
	  isMainMenu: _react2.default.PropTypes.bool,
	  children: _react2.default.PropTypes.array.isRequired,
	  windowWidth: _react2.default.PropTypes.number,
	  windowHeight: _react2.default.PropTypes.number,
	  headerHeight: _react2.default.PropTypes.number,
	  parentKeyCode: _react2.default.PropTypes.number,
	  handleCloseEvent: _react2.default.PropTypes.func,
	  mode: _react2.default.PropTypes.oneOf(['desktop', 'mobile'])
	};

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

	  /**
	   * Gets a lit of react children and appends the given properties
	   * to each of them one by one
	   *
	   * Additionally takes addIndex attribute to add an index field
	   * which denotes the index of the given child in the children array
	   *
	   * @param children
	   * @param props
	   * @param addIndex
	   * @returns {*}
	   */
	  addPropsToChildren: function addPropsToChildren(children, props) {
	    var addIndex = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	    return _react2.default.Children.map(children, function (child, index) {
	      var finalProps = addIndex ? _ObjectHelper2.default.assignProperties({}, props, { index: index }) : props;
	      return _react2.default.cloneElement(child, finalProps);
	    });
	  },


	  /**
	   * Gets the main navigation object by appending isMainMenu Property
	   *
	   * @param navigationChild
	   * @param originalProps
	   * @returns {XML}
	   */
	  getMainNav: function getMainNav(navigationChild, originalProps) {
	    var navListProps = _ObjectHelper2.default.assignProperties({}, originalProps, { isMainMenu: true });
	    return _react2.default.createElement(
	      'nav',
	      { role: 'navigation', key: 'nav', className: 'site-navigation' },
	      _react2.default.cloneElement(navigationChild, navListProps)
	    );
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getListHelper = getListHelper;

	var _KeyEvents = __webpack_require__(11);

	var _KeyEvents2 = _interopRequireDefault(_KeyEvents);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * File to help manage keyboard events in NavigationList
	 * The main difference is there because NavigationList for main menu is
	 * horizontal and we navigate it by using right and left arrow
	 *
	 * On the other hand for sub menu, it is a dropdown and we navigate by
	 * using up and down keys
	 */
	var createListHelper = function createListHelper(nextKey, previousKey, className) {
	  return {
	    className: className,
	    nextKey: nextKey,
	    previousKey: previousKey,
	    getChange: function getChange(keyCode) {
	      if (keyCode === this.nextKey) {
	        return 1;
	      } else if (keyCode === this.previousKey) {
	        return -1;
	      }
	    },
	    canHandleEvent: function canHandleEvent(keyCode) {
	      return keyCode === this.nextKey || keyCode === this.previousKey;
	    }
	  };
	};

	/**
	 * Helper for sub menu
	 */
	var SubListHelper = createListHelper(_KeyEvents2.default.CODE.DOWN, _KeyEvents2.default.CODE.UP, 'site-nav__list--sub');

	/**
	 * Helper for main menu
	 */
	var MainListHelper = createListHelper(_KeyEvents2.default.CODE.RIGHT, _KeyEvents2.default.CODE.LEFT, 'site-nav__list--main');

	/**
	 * Gets the helper base of type of menu
	 *
	 *
	 * @param isMainMenu
	 * @returns {{className, nextKey, previousKey, getChange, canHandleEvent}}
	 */
	function getListHelper(isMainMenu) {
	  return isMainMenu === true ? MainListHelper : SubListHelper;
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Contains utils related to keyboard events like keycodes
	 */
	exports.default = {
	  CODE: {
	    LEFT: 37,
	    RIGHT: 39,
	    UP: 38,
	    DOWN: 40,
	    ESCAPE: 27,
	    ENTER: 13,
	    SPACE: 32,
	    TAB: 9
	  }
	};

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

	var _SliderToggle = __webpack_require__(13);

	var _SliderToggle2 = _interopRequireDefault(_SliderToggle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A vertical slide menu which spans full vertical width and slides horizontally
	 */
	var VerticalSlider = function (_React$Component) {
	  _inherits(VerticalSlider, _React$Component);

	  function VerticalSlider(props) {
	    _classCallCheck(this, VerticalSlider);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VerticalSlider).call(this, props));

	    _this.state = { draw: false };
	    _this.drawSlider = _this.drawSlider.bind(_this);
	    _this.handleDocumentClickEvent = _this.handleDocumentClickEvent.bind(_this);
	    return _this;
	  }

	  /**
	   * Gets the top bar along with the titleComponent
	   *
	   * In general title component should be the same as the logo
	   *
	   * @returns {XML}
	   */


	  _createClass(VerticalSlider, [{
	    key: 'getTopBar',
	    value: function getTopBar(isDrawn) {
	      return _react2.default.createElement(
	        'div',
	        { className: 'vertical-slider__top' },
	        this.props.titleComponent,
	        _react2.default.createElement(_SliderToggle2.default, { toggleOpen: isDrawn, onSliderToggle: this.drawSlider })
	      );
	    }

	    /**
	     * Gets the sub menu bar which is used for opening the submenu   
	     *
	     * @param isDrawn
	     * @returns {XML}
	     */

	  }, {
	    key: 'getSubMenuBar',
	    value: function getSubMenuBar(isDrawn) {
	      return _react2.default.createElement(
	        'div',
	        { 'aria-label': 'Sub Menu',
	          'aria-haspopup': 'true',
	          'aria-pressed': '' + isDrawn,
	          'aria-expanded': '' + isDrawn,
	          role: 'button',
	          className: 'vertical-slider__title',
	          onClick: this.drawSlider },
	        this.props.title
	      );
	    }

	    /**
	     * Toggles the slider
	     */

	  }, {
	    key: 'drawSlider',
	    value: function drawSlider() {
	      this.updateSliderDraw(!this.state.draw);
	    }

	    /**
	     * Updates the draw state of the slider by changing the state
	     * @param draw
	     */

	  }, {
	    key: 'updateSliderDraw',
	    value: function updateSliderDraw(draw) {
	      this.setState({
	        draw: draw
	      });
	    }

	    /**
	     * Handles clicks on the document
	     *
	     * Used for closing the slider if the click happens outside the slider container container
	     *
	     * @param clickEvent
	     */

	  }, {
	    key: 'handleDocumentClickEvent',
	    value: function handleDocumentClickEvent(clickEvent) {
	      if (this.state.draw) {
	        var target = clickEvent.target;
	        if (this.sliderElement.contains) {
	          // If click outside slider close it
	          if (!this.sliderElement.contains(target)) {
	            this.updateSliderDraw(false);
	          } else {
	            // If a link tag is clicked, close the slider
	            // TODO : Replace with a close event which is propagated down
	            if (target.tagName.toLowerCase() === 'a' && target.href) {
	              this.updateSliderDraw(false);
	            }
	          }
	        }
	      }
	    }

	    /**
	     * Used for registering clicks on document body
	     */

	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // Only register for the main slider to avoid extra events
	      if (!this.props.isSubSlider) {
	        document.addEventListener("click", this.handleDocumentClickEvent);
	      }
	    }

	    /**
	     * Used for registering clicks on document body
	     */

	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (!this.props.isSubSlider) {
	        document.removeEventListener("click", this.handleDocumentClickEvent);
	      }
	    }

	    /**
	     * Gets the children present in a slider.
	     *
	     * All it does is adds a "Back" element to the list of children
	     * so as to go back to the original slider.
	     *
	     * @param isSubSlider
	     * @param children
	     * @returns {*}
	     */

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
	     * Should re-visit this later - maybe extract out child and pull all of them in one hierarchy
	     *
	     * @returns {XML}
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var isDrawn = this.state.draw;
	      var _props = this.props;
	      var isSubSlider = _props.isSubSlider;
	      var headerHeight = _props.headerHeight;
	      var windowWidth = _props.windowWidth;
	      var windowHeight = _props.windowHeight;

	      var drawnClass = isDrawn ? 'vertical-slider--drawn' : '';
	      var sliderLevelClass = isSubSlider ? 'vertical-slider--sub' : 'vertical-slider--main';
	      //TODO : Make props
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
	        { ref: function ref(_ref) {
	            return _this2.sliderElement = _ref;
	          },
	          className: 'vertical-slider ' + drawnClass + ' ' + sliderLevelClass },
	        isSubSlider ? this.getSubMenuBar(isDrawn) : this.getTopBar(isDrawn),
	        _react2.default.createElement(
	          'div',
	          { 'aria-hidden': !isDrawn, style: childStyles,
	            className: 'vertical-slider--children' },
	          this.getSliderChild(isSubSlider, this.props.children)
	        )
	      );
	    }
	  }]);

	  return VerticalSlider;
	}(_react2.default.Component);

	VerticalSlider.propTypes = {
	  titleComponent: _react2.default.PropTypes.element,
	  title: _react2.default.PropTypes.string,
	  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.array]).isRequired,
	  windowWidth: _react2.default.PropTypes.number,
	  windowHeight: _react2.default.PropTypes.number,
	  headerHeight: _react2.default.PropTypes.number,
	  isSubSlider: _react2.default.PropTypes.bool
	};

	exports.default = VerticalSlider;

/***/ },
/* 13 */
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

	/**
	 * The toggle icon on clicking of which we can 
	 * open/close the mobile menu
	 *
	 */
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
	      return _react2.default.createElement(
	        'span',
	        { 'aria-label': label, role: 'button', 'aria-pressed': '' + toggleOpen,
	          'aria-expanded': '' + toggleOpen, 'aria-haspopup': 'true',
	          className: 'slider-toggle__wrapper', onClick: this.toggledSlider },
	        _react2.default.createElement('span', { className: 'slider-toggle ' + openStateClass })
	      );
	    }
	  }]);

	  return NavigationToggle;
	}(_react2.default.Component);

	NavigationToggle.propTypes = {
	  onSliderToggle: _react2.default.PropTypes.func,
	  toggleOpen: _react2.default.PropTypes.bool
	};

	exports.default = NavigationToggle;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _NavigationList = __webpack_require__(7);

	var _NavigationList2 = _interopRequireDefault(_NavigationList);

	var _ReactHelper = __webpack_require__(8);

	var _ReactHelper2 = _interopRequireDefault(_ReactHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Organizes the desktop children by adding key and marking main
	 * menu with the main menu flag.
	 * 
	 * @param children
	 * @returns {Array}
	 */
	function organizeDesktopChildren(children) {
	  var newChildren = [];

	  children.forEach(function (child, index) {
	    if (child.type === _NavigationList2.default) {
	      newChildren.push(_ReactHelper2.default.getMainNav(child));
	    } else {
	      newChildren.push(_react2.default.cloneElement(child, { key: index }));
	    }
	  });
	  return newChildren;
	}

	/**
	 * Header element for largers screens, usually found on desktop devices
	 *
	 * @param props
	 * @returns {XML}
	 * @constructor
	 */
	var DesktopHeader = function DesktopHeader(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    organizeDesktopChildren(props.children)
	  );
	};

	DesktopHeader.propTypes = {
	  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.array])
	};

	exports.default = DesktopHeader;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _DOMHelper = __webpack_require__(16);

	var _DOMHelper2 = _interopRequireDefault(_DOMHelper);

	var _Debounce = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Component which calculates the size of different parts of
	 * the header and passes those down as properties
	 *
	 */
	var ApplicationSizeCalculator = function (_React$Component) {
	  _inherits(ApplicationSizeCalculator, _React$Component);

	  function ApplicationSizeCalculator(props) {
	    _classCallCheck(this, ApplicationSizeCalculator);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ApplicationSizeCalculator).call(this, props));

	    _this.calculateAppDimensions = (0, _Debounce.debounce)(_this.calculateAppDimensions.bind(_this), 200);
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

	ApplicationSizeCalculator.propTypes = {
	  children: _react2.default.PropTypes.element.isRequired
	};

	exports.default = ApplicationSizeCalculator;

/***/ },
/* 16 */
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
/* 17 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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

	exports.debounce = debounce;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Header = __webpack_require__(2);

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * A sticky header HoC which makes the header stick to the top of the screen
	 *
	 * @param props
	 * @returns {XML}
	 * @constructor
	 */
	var StickyHeader = function StickyHeader(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'sticky-header' },
	    _react2.default.createElement(
	      _Header2.default,
	      props,
	      props.children
	    )
	  );
	};

	StickyHeader.propTypes = {
	  children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element)
	};

	exports.default = StickyHeader;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Header = __webpack_require__(2);

	var _Header2 = _interopRequireDefault(_Header);

	var _Throttle = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SCROLL_HEADER_THROTTLE_TIME = 20;

	/**
	 * Header which is not sticky while scroll down but sticks
	 *  to the top when you are scrolling up
	 *
	 *  It's meant to wrap the header element.
	 *
	 * Note: It introduces a extra div but planning to remove that
	 */

	var StickyOnScrollUpHeader = function (_React$Component) {
	  _inherits(StickyOnScrollUpHeader, _React$Component);

	  function StickyOnScrollUpHeader(props) {
	    _classCallCheck(this, StickyOnScrollUpHeader);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StickyOnScrollUpHeader).call(this, props));

	    _this.state = {};
	    _this.handleScroll = (0, _Throttle.throttle)(_this.handleScroll.bind(_this), SCROLL_HEADER_THROTTLE_TIME);
	    _this.setHeader = _this.setHeader.bind(_this);
	    return _this;
	  }

	  _createClass(StickyOnScrollUpHeader, [{
	    key: 'setHeader',
	    value: function setHeader(header) {
	      this.header = header;
	    }
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll() {
	      var headerHeight = this.header.clientHeight;
	      var currentScrollTop = window.pageYOffset || 0;
	      var direction = currentScrollTop - this.state.scrollTop > 0 ? 'DOWN' : 'UP';
	      var isHeaderVisible = headerHeight > currentScrollTop;
	      this.setState({
	        direction: direction,
	        scrollTop: currentScrollTop,
	        isHeaderVisible: isHeaderVisible,
	        headerHeight: headerHeight
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('scroll', this.handleScroll);
	      // Fire it once for initial setup
	      this.handleScroll();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('scroll', this.handleScroll);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state = this.state;
	      var direction = _state.direction;
	      var isHeaderVisible = _state.isHeaderVisible;
	      var headerHeight = _state.headerHeight;

	      var isStickyClass = direction === 'UP' ? 'sticky-header' : '';
	      // Header should be moved up when it's not visible, so that it can be animated
	      var style = {
	        transform: 'translateY(-' + (isHeaderVisible || direction === 'UP' ? '0' : headerHeight) + 'px)'
	      };
	      return _react2.default.createElement(
	        'div',
	        { ref: this.setHeader, style: style, className: 'sticky-scrollup-header ' + isStickyClass },
	        _react2.default.createElement(_Header2.default, this.props)
	      );
	    }
	  }]);

	  return StickyOnScrollUpHeader;
	}(_react2.default.Component);

	exports.default = StickyOnScrollUpHeader;

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var throttle = function throttle(func, throttleTime) {
	  var thisArg = undefined;
	  var wait = false;
	  return function () {
	    if (!wait) {
	      for (var _len = arguments.length, argsArr = Array(_len), _key = 0; _key < _len; _key++) {
	        argsArr[_key] = arguments[_key];
	      }

	      func.apply(thisArg, argsArr);
	      wait = true;
	      setTimeout(function () {
	        wait = false;
	      }, throttleTime);
	    }
	  };
	};

	exports.throttle = throttle;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _DropdownSlider = __webpack_require__(22);

	var _DropdownSlider2 = _interopRequireDefault(_DropdownSlider);

	var _VerticalSlider = __webpack_require__(12);

	var _VerticalSlider2 = _interopRequireDefault(_VerticalSlider);

	var _KeyEvents = __webpack_require__(11);

	var _KeyEvents2 = _interopRequireDefault(_KeyEvents);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Get the open close key events
	var CLOSE_KEY_EVENTS = [_KeyEvents2.default.CODE.ESCAPE, _KeyEvents2.default.CODE.UP];
	var OPEN_KEY_EVENTS = [_KeyEvents2.default.CODE.ENTER, _KeyEvents2.default.CODE.SPACE, _KeyEvents2.default.CODE.DOWN];
	var ALL_KEY_EVENTS = [].concat(OPEN_KEY_EVENTS, CLOSE_KEY_EVENTS);

	var NavigationItem = function (_React$Component) {
	  _inherits(NavigationItem, _React$Component);

	  function NavigationItem(props) {
	    _classCallCheck(this, NavigationItem);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NavigationItem).call(this, props));

	    _this.state = { displayChild: false, activeChildIndex: -1 };
	    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
	    _this.dropdownClicked = _this.dropdownClicked.bind(_this);
	    _this.handleCloseEvent = _this.handleCloseEvent.bind(_this);
	    return _this;
	  }

	  /**
	   * This method is to ensure that we are not handling events propagated
	   * to the main menu from the sub menus
	   *
	   * We will be checking the target element here to complete this check.
	   *
	   * We don't want to to stop bubbling from child events (as it events may have other uses)
	   * and we don't want to stop propagation (as we still want default behaviour in some circumstances)
	   *
	   */


	  _createClass(NavigationItem, [{
	    key: 'isCurrentLevelEvent',
	    value: function isCurrentLevelEvent(keyEvent) {
	      // Bubbling can only occur for menus which have sub menus and it can
	      // only happen from titleElement of sub menu
	      return this.subMenuElement === undefined || this.subMenuElement.titleElement === keyEvent.target;
	    }

	    /**
	     * Handles keydown press for navigation, opening menus etc
	      * @param keyEvent
	     */

	  }, {
	    key: 'handleKeyDown',
	    value: function handleKeyDown(keyEvent) {
	      if (!this.isCurrentLevelEvent(keyEvent)) {
	        return;
	      }
	      var eventHandled = false;
	      // Pass all events to parent to manage
	      if (this.props.onKeyEvent) {
	        eventHandled = this.props.onKeyEvent(keyEvent, this.props.index);
	      }
	      if (!eventHandled) {
	        this.handleSliderKeyEvents(keyEvent);
	      }
	    }

	    /**
	     * Handle keys related to the slider elements
	     *
	     * @param keyEvent
	     */

	  }, {
	    key: 'handleSliderKeyEvents',
	    value: function handleSliderKeyEvents(keyEvent) {
	      var keyCode = keyEvent.which;
	      if (this.subMenuElement && ALL_KEY_EVENTS.indexOf(keyCode) > -1) {
	        var displayChild = OPEN_KEY_EVENTS.indexOf(keyCode) > -1;
	        this.handleChildDisplay(displayChild, keyCode);
	        keyEvent.preventDefault();
	      }
	    }

	    /**
	     * Handles changes in child display
	     *
	     * Also, if display is disabled,
	     *
	     * @param displayChild
	     * @param parentKeyCode
	     */

	  }, {
	    key: 'handleChildDisplay',
	    value: function handleChildDisplay(displayChild, parentKeyCode) {
	      var state = {
	        displayChild: displayChild,
	        parentKeyCode: parentKeyCode || -1
	      };
	      this.setState(state);
	    }

	    /**
	     * Handles clicking of dropdown by toggling the display of child
	     */

	  }, {
	    key: 'dropdownClicked',
	    value: function dropdownClicked() {
	      this.handleChildDisplay(!this.state.displayChild);
	    }
	  }, {
	    key: 'handleCloseEvent',
	    value: function handleCloseEvent() {
	      this.handleChildDisplay(false);
	    }

	    /**
	     * Gets the sub menu element by wrapping it on a vertical slider
	     * (smaller screen) or dropdown slider (larger screen)
	     *
	     * @param children
	     * @param props
	     * @returns {XML}
	     */

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
	            handleCloseEvent: this.handleCloseEvent,
	            draw: this.state.displayChild,
	            parentKeyCode: this.state.parentKeyCode,
	            ref: function ref(_ref) {
	              return _this2.subMenuElement = _ref;
	            },
	            title: props.text },
	          children
	        );
	      }
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur() {
	      this.props.onFocusChange(false, this.props.index);
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus() {
	      this.props.onFocusChange(true, this.props.index);
	    }

	    /**
	     * On component update if the item is active item, just focus it
	     *
	     * Also ensure that we don't take focus from it's child if they are active
	     */

	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      // not make this nav item focused if child is supposed to be displayed
	      if (this.props.activeIndex === this.props.index && !this.state.displayChild) {
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
	        { onFocus: function onFocus() {
	            return _this3.props.onFocusChange(true, _this3.props.index);
	          },
	          onBlur: function onBlur() {
	            return _this3.props.onFocusChange(false, _this3.props.index);
	          },
	          ref: function ref(_ref3) {
	            return _this3.container = _ref3;
	          }, onKeyDown: this.handleKeyDown, className: 'site-nav__item' },
	        itemChild
	      );
	    }
	  }]);

	  return NavigationItem;
	}(_react2.default.Component);

	NavigationItem.propTypes = {
	  children: _react2.default.PropTypes.element,
	  onKeyEvent: _react2.default.PropTypes.func,
	  onFocusChange: _react2.default.PropTypes.func,
	  index: _react2.default.PropTypes.number,
	  activeIndex: _react2.default.PropTypes.number,
	  link: _react2.default.PropTypes.string,
	  text: _react2.default.PropTypes.string
	};

	exports.default = NavigationItem;

/***/ },
/* 22 */
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

	/**
	 * Slider which presents the children wrapped under as a drop
	 *
	 */
	var DropdownSlider = function (_React$Component) {
	  _inherits(DropdownSlider, _React$Component);

	  function DropdownSlider(props) {
	    _classCallCheck(this, DropdownSlider);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DropdownSlider).call(this, props));

	    _this.state = {};
	    _this.setSliderElement = _this.setSliderElement.bind(_this);
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.handleCloseEvent = props.handleCloseEvent;
	    _this.handleBlurEvent = _this.handleBlurEvent.bind(_this);
	    return _this;
	  }

	  /**
	   * Method to be called to focus the element
	   * Expected to called by parent and it ensures that
	   * it is focused by focusing the title element
	   */


	  _createClass(DropdownSlider, [{
	    key: 'focus',
	    value: function focus() {
	      this.titleElement.focus();
	    }

	    /**
	     * Gets the height of the element
	     * @returns {number}
	     */

	  }, {
	    key: 'getHeight',
	    value: function getHeight() {
	      // Scroll height gives the correct height even if we have
	      // provided a different height and/or have overflow: hidden instead
	      // of scroll
	      return this.sliderElement ? this.sliderElement.scrollHeight : 0;
	    }

	    /**
	     * Sets the slider element on mount and ensures
	     * that the height is pre-calculated
	     *
	     * @param sliderElement
	     */

	  }, {
	    key: 'setSliderElement',
	    value: function setSliderElement(sliderElement) {
	      this.sliderElement = sliderElement;
	      this.setState({ 'fullHeight': this.getHeight() });
	    }
	  }, {
	    key: 'handleBlurEvent',
	    value: function handleBlurEvent(blurEvent) {
	      var _this2 = this;

	      // Ignore event if child is not displayed
	      if (this.props.draw === false) {
	        return;
	      }
	      // While blur is not normally bubbled, it will bubble
	      // in this case due to react's event system.
	      // We need to have async flow as initially the active document
	      // is the body, after which it becomes the current eleemnt
	      var currentTarget = blurEvent.currentTarget;
	      setTimeout(function () {
	        if (currentTarget.contains && !currentTarget.contains(document.activeElement)) {
	          _this2.props.handleCloseEvent(false);
	        }
	      }, 0);
	    }

	    /**
	     * Calls method to handle event to draw slider
	     *
	     * Passes to parent for handling the click event
	     */

	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
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
	      var _this3 = this;

	      var draw = this.props.draw;

	      var drawnClass = draw ? 'dropdown-slider--drawn' : '';
	      var styles = {
	        height: draw ? this.state.fullHeight + 'px' : 0
	      };

	      var childElement = _react2.default.Children.only(this.props.children);
	      childElement = _react2.default.cloneElement(childElement, { handleCloseEvent: this.handleCloseEvent,
	        parentKeyCode: this.props.parentKeyCode,
	        reset: draw });

	      return _react2.default.createElement(
	        'div',
	        { onBlur: this.handleBlurEvent, role: 'button', 'aria-pressed': '' + draw, 'aria-expanded': '' + draw,
	          'aria-haspopup': 'true', onClick: this.handleClick, className: 'dropdown-slider ' + drawnClass },
	        _react2.default.createElement(
	          'a',
	          { className: 'dropdown-slider__title', ref: function ref(_ref) {
	              return _this3.titleElement = _ref;
	            }, tabIndex: '0' },
	          this.props.title,
	          _react2.default.createElement('span', { className: 'dropdown-slider--caret' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { ref: this.setSliderElement, style: styles, className: 'dropdown-slider--children' },
	          childElement
	        )
	      );
	    }
	  }]);

	  return DropdownSlider;
	}(_react2.default.Component);

	DropdownSlider.propTypes = {
	  title: _react2.default.PropTypes.string,
	  parentKeyCode: _react2.default.PropTypes.number,
	  children: _react2.default.PropTypes.element.isRequired,
	  handleClick: _react2.default.PropTypes.func,
	  handleCloseEvent: _react2.default.PropTypes.func,
	  draw: _react2.default.PropTypes.bool
	};

	exports.default = DropdownSlider;

/***/ }
/******/ ])
});
;