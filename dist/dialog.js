(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Dialog"] = factory();
	else
		root["Dialog"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/@babel/runtime/helpers/typeof.js":
/*!***********************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/typeof.js ***!
  \***********************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/Body.js":
/*!*********************!*\
  !*** ./src/Body.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools.js */ "./src/DOM/Tools.js");
/**
 * @file
 * Middle section of dialog box
 */


var Body = function Body(dialog, parentDiv) {
  var options = dialog.options;
  var div = _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__.default.createClassedDiv('dialog-cl-body', options.content);
  parentDiv.appendChild(div);
  this.div = div;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Body);

/***/ }),

/***/ "./src/Bottom.js":
/*!***********************!*\
  !*** ./src/Bottom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools */ "./src/DOM/Tools.js");

/**
 * The bottom buttons section of the dialog box
 * @constructor
 */

var Bottom = function Bottom(dialog, parentDiv) {
  var options = dialog.options;

  var initialize = function initialize() {
    // let html = `<button class="cl-dialog-btn">Ok</button><button class="cl-dialog-btn">Cancel</button>`;
    var div = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__.default.createClassedDiv('cl-dialog-bottom');
    parentDiv.appendChild(div);

    if (options.buttons === null) {
      addOk(div);
    } else {
      options.buttons.forEach(function (item) {
        addButton(div, item);
      });
    }
  };

  function addOk(div, item) {
    var button = document.createElement('button');
    button.type = 'submit';
    div.appendChild(button);
    button.innerHTML = 'Ok';

    button.onclick = function (event) {
      event.preventDefault();

      if (item !== undefined && item.click !== undefined) {
        item.click(dialog);
      } else {
        dialog.close();
      }
    };

    button.focus();
  }

  function addButton(div, item) {
    var button = document.createElement('button');
    button.type = 'submit';
    div.appendChild(button);
    button.innerHTML = item.contents;

    button.onclick = function (event) {
      event.preventDefault();

      if (item !== undefined && item.click !== undefined) {
        item.click(dialog);
      }
    };

    if (item["class"] !== undefined) {
      button.classList.add(item["class"]);
    }

    if (item.focus === true) {
      button.focus();
    }
  }

  initialize();

  this["default"] = function () {
    options.buttons.forEach(function (item) {
      if (item["default"] === true && item.click !== undefined) {
        item.click(dialog);
      }
    });
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bottom);

/***/ }),

/***/ "./src/DOM/Tools.js":
/*!**************************!*\
  !*** ./src/DOM/Tools.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @file
 * Convenience functions for the DOM.
 * Tools that avoid having to have jQuery installed.
 */
var Tools = function Tools() {};
/**
 * Add a class to an element
 * @param element Element to add to
 * @param className Class to add
 */


Tools.addClass = function (element, className) {
  if (element.classList) element.classList.add(className);else element.className += ' ' + className;
};

Tools.addClasses = function (element, classes) {
  if (classes === undefined || classes === null) {
    return;
  }

  classes.split(' ').forEach(function (cls) {
    Tools.addClass(element, cls);
  });
};
/**
 * Create a DIV with a provided class name.
 * @param className Class to add to the div
 * @param content Content to place in the div. HTML or Element
 * @returns {Element} Created DOM Element
 */


Tools.createClassedDiv = function (className, content) {
  var div = document.createElement('div');
  Tools.addClass(div, className);
  Tools.addContent(div, content);
  return div;
};
/**
 * Add content to an element.
 * @param element Element to add to
 * @param content Content. Can be HTML or an Element.
 */


Tools.addContent = function (element, content) {
  if (Tools.isString(content)) {
    element.innerHTML += content;
  } else if (Tools.isElement(content)) {
    element.appendChild(content);
  }
};

Tools.isString = function (val) {
  return typeof val === 'string' || !!val && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(val) === 'object' && Object.prototype.toString.call(val) === '[object String]';
};

Tools.isElement = function (val) {
  return val !== undefined && val !== null && val.nodeValue !== undefined;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tools);

/***/ }),

/***/ "./src/Dialog.js":
/*!***********************!*\
  !*** ./src/Dialog.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Options_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Options.js */ "./src/Options.js");
/* harmony import */ var _TitleBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleBar */ "./src/TitleBar.js");
/* harmony import */ var _Body_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Body.js */ "./src/Body.js");
/* harmony import */ var _Bottom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Bottom.js */ "./src/Bottom.js");
/* harmony import */ var _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM/Tools.js */ "./src/DOM/Tools.js");
/* harmony import */ var _Mask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Mask.js */ "./src/Mask.js");
/* harmony import */ var resizer_cl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! resizer-cl */ "../resizer-cl/src/app.modules.js");







/**
 * Flexible and configurable dialog box object
 * @constructor
 *
 * @version 1.0.4 Touch support for title bar dragging
 */

var Dialog = function Dialog(options) {
  var _this = this;

  options = new _Options_js__WEBPACK_IMPORTED_MODULE_0__.default(options);
  this.options = options;
  var body = null,
      mask = null,
      bottom = null;

  var initialize = function initialize() {
    Dialog.zIndex += 2;
    _this.zIndex = Dialog.zIndex;
    var div = _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_4__.default.createClassedDiv('dialog-cl');
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_4__.default.addClasses(div, options.addClass);
    _this.div = div;
    div.style.zIndex = _this.zIndex;
    var parent = document.querySelector('body');
    parent.appendChild(div);
    installResizable(div);
    new _TitleBar__WEBPACK_IMPORTED_MODULE_1__.TitleBar(_this, div);
    body = new _Body_js__WEBPACK_IMPORTED_MODULE_2__.default(_this, div);

    if (options.buttons !== false) {
      bottom = new _Bottom_js__WEBPACK_IMPORTED_MODULE_3__.default(_this, div);
    }

    mask = new _Mask_js__WEBPACK_IMPORTED_MODULE_5__.default(_this);
    place(div, parent);
    div.addEventListener('keydown', function (event) {
      if (event.keyCode === 27) {
        event.preventDefault();

        _this.close();
      }
    });
  };

  var installResizable = function installResizable(div) {
    if (options.resize !== 'none') {
      var rsOptions = {
        'resize': options.resize,
        'handle': 'none',
        'grabSize': options.grabSize
      };
      new resizer_cl__WEBPACK_IMPORTED_MODULE_6__.default(div, rsOptions);
    }
  };

  function toPx(val) {
    return '' + val + 'px';
  }

  var place = function place(div, parent) {
    //let parentWid = parent.offsetWidth;
    //let parentHit = parent.offsetHeight;
    var parentWid = window.innerWidth;
    var parentHit = window.innerHeight;
    var height = div.offsetHeight;
    var width = div.offsetWidth;
    var top = parentHit / 2 - height / 2;

    if (top < 10) {
      top = 10;
    }

    var left = parentWid / 2 - width / 2;

    if (left < 0) {
      left = 0;
    }

    div.style.left = toPx(left);
    div.style.top = toPx(top);
  };

  initialize();

  this.addContent = function (content) {
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_4__.default.addContent(body.div, content);
  };

  this.close = function () {
    mask.remove();
    this.div.parentNode.removeChild(this.div);
  };
  /**
      * Calling is equivalent to pressing the first default button
   */


  this["default"] = function () {
    if (bottom !== null) {
      bottom["default"]();
    }
  };
};

Dialog.zIndex = 10000;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dialog);

/***/ }),

/***/ "./src/Mask.js":
/*!*********************!*\
  !*** ./src/Mask.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools.js */ "./src/DOM/Tools.js");
/**
 * Mask that allows the dialog box to be modal.
 */


var Mask = function Mask(dialog) {
  var options = dialog.options;
  var mask = null;

  if (options.modal) {
    var body = document.querySelector('body');
    mask = _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__.default.createClassedDiv('mask'); // document.createElement('div');

    mask.style.position = 'fixed';
    mask.style.left = 0;
    mask.style.top = 0;
    mask.style.width = "100%";
    mask.style.height = '100%';
    mask.style.backgroundColor = 'transparent';
    mask.style.zIndex = dialog.zIndex - 1;
    body.appendChild(mask);
  }

  this.remove = function () {
    if (mask !== null) {
      var _body = document.querySelector('body');

      _body.removeChild(mask);

      mask = null;
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mask);

/***/ }),

/***/ "./src/MessageBox.js":
/*!***************************!*\
  !*** ./src/MessageBox.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog.js */ "./src/Dialog.js");
/**
 * Handy Simple Message Box
 */


var MessageBox = function MessageBox(title, message, type, button1, button2) {
  // Default: OK
  var buttons = [{
    contents: 'Ok',
    click: function click(dialog) {
      if (button1 !== undefined) {
        button1();
      }

      dialog.close();
    },
    'focus': true
  }];

  if (type === MessageBox.OKCANCEL) {
    buttons = [{
      contents: 'Ok',
      click: function click(dialog) {
        if (button1 !== undefined) {
          button1();
        }

        dialog.close();
      },
      'focus': true
    }, {
      contents: 'Cancel',
      click: function click(dialog) {
        if (button2 !== undefined) {
          button2();
        }

        dialog.close();
      }
    }];
  }

  var dialog = new _Dialog_js__WEBPACK_IMPORTED_MODULE_0__.default({
    'title': title,
    'content': '<div class="message-cl"><p>' + message + '</p></div>',
    'buttons': buttons
  });
};

MessageBox.OK = 0;
MessageBox.OKCANCEL = 1;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageBox);

/***/ }),

/***/ "./src/Options.js":
/*!************************!*\
  !*** ./src/Options.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Various interface options we can select
 */

/**
 * Interface options.
 * @param options User provided options that override the default values.
 * @constructor
 */
var Options = function Options(options) {
  options = options ? options : {}; /// Title bar text

  this.title = 'Dialog Box'; /// Any added class or classes for the main dialog box div
  /// Can be a string or multiple strings space delimited

  this.addClass = null; /// Is this dialog box resizable?
  /// Options are: 'none', 'vertical', 'horizontal'

  this.resize = 'none'; /// Size of the border edge we can grab if resizable in pixels

  this.grabSize = 4; /// Array of title bar buttons to add.
  /// If null, a close button is added automatically.
  /// Otherwise, an array of objects, with these fields:
  ///   type: 'close' for a close  button, 'custom' for custom button contents
  ///   contents: HTML to place inside button tag
  ///   click: Click handler

  this.titleBarButtons = null; /// Any added class or classes for the title bar div
  /// Can be a string or multiple strings space delimited

  this.titleBarAddClass = null; /// Array of buttons for the bottom.
  /// If null, an Ok button is added automatically.
  /// Otherwise, an array of objects, with these fields:
  ///   contents: If provided, HTML to place inside button tag
  ///   click: Click handler
  ///   focus: true if we want to set focus on this button
  ///   default: true if this is the default button
  ///   class: Class to add to the button

  this.buttons = null; /// Content to add to the dialog box. If null, none is added on creation.

  this.content = null; /// Is this a modal dialog box? If true, controls underneath are disabled.

  this.modal = true;

  for (var property in options) {
    if (options.hasOwnProperty(property)) {
      if (!this.hasOwnProperty(property)) {
        throw new Error("Invalid option " + property);
      }

      this[property] = options[property];
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Options);

/***/ }),

/***/ "./src/TitleBar.js":
/*!*************************!*\
  !*** ./src/TitleBar.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleBar": () => (/* binding */ TitleBar)
/* harmony export */ });
/* harmony import */ var _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools.js */ "./src/DOM/Tools.js");
/**
 * @file
 * Title bar management
 */

function TitleBar(dialog, parentDiv) {
  var options = dialog.options; /// Mouse move event handlers installed flag

  var installedMoveHandlers = false; /// Touch move event handlers installed flag

  var installedTouchHandlers = false;
  var initialX, initialY;
  var initialPositionX, initialPositionY;

  var initialize = function initialize() {
    var html = "<h1>".concat(options.title, "</h1>");
    var div = _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__.default.createClassedDiv('dialog-cl-top', html);
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__.default.addClasses(div, options.titleBarAddClass);
    parentDiv.appendChild(div);

    if (options.titleBarButtons === null) {
      addClose(div);
    } else {
      options.titleBarButtons.forEach(function (item) {
        if (item.type === 'close') {
          addClose(div, item);
        } else if (item.type === 'custom') {
          addCustom(div, item); // addCustom(div, item);
        }
      });
    }

    var h1 = div.querySelector('h1');
    h1.addEventListener('mousedown', mouseDownListener);
    h1.addEventListener('touchstart', touchStartListener);
  };

  function addClose(div, item) {
    var button = document.createElement('button');
    div.appendChild(button);
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__.default.addClass(button, 'dialog-cl-tb-button');
    button.innerHTML = '<span class="icons-cl icons-cl-close">';

    button.onclick = function (event) {
      event.preventDefault();

      if (item !== undefined && item.click !== undefined) {
        item.click();
      } else {
        dialog.close();
      }
    };
  }

  function addCustom(div, item) {
    var button = document.createElement('button');
    div.appendChild(button);
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__.default.addClass(button, 'dialog-cl-tb-button');
    button.innerHTML = item.contents;

    button.onclick = function (event) {
      event.preventDefault();

      if (item !== undefined && item.click !== undefined) {
        item.click();
      } else {
        dialog.close();
      }
    };
  }

  function moveTo(x, y) {
    var dx = x - initialX;
    var dy = y - initialY;
    var newPositionX = initialPositionX + dx;
    var newPositionY = initialPositionY + dy;
    dialog.div.style.left = newPositionX + 'px';
    dialog.div.style.top = newPositionY + 'px';
  } //
  // Mouse handlers
  //


  function installMouseHandlers() {
    removeHandlers();
    installedMoveHandlers = true;
    document.addEventListener('mousemove', mouseMoveListener);
    document.addEventListener('mouseup', mouseUpListener);
  }

  function mouseDownListener(event) {
    initialX = event.pageX;
    initialY = event.pageY;
    var rect = dialog.div.getBoundingClientRect();
    initialPositionX = rect.left;
    initialPositionY = rect.top;
    installMouseHandlers();
  }

  function mouseMoveListener(e) {
    if (e.buttons !== 1) {
      removeHandlers();
      return;
    }

    moveTo(e.pageX, e.pageY);
  }

  function mouseUpListener(e) {
    removeHandlers();
  } //
  // Touch handlers
  //


  function installTouchHandlers() {
    removeHandlers();
    installedTouchHandlers = true;
    document.addEventListener('touchmove', touchMoveListener);
    document.addEventListener('touchend', touchEndListener);
    document.addEventListener('touchcancel', touchEndListener);
  }

  function touchStartListener(event) {
    event.stopPropagation();
    event.preventDefault();
    initialX = event.touches[0].pageX;
    initialY = event.touches[0].pageY;
    var rect = dialog.div.getBoundingClientRect();
    initialPositionX = rect.left;
    initialPositionY = rect.top;
    installTouchHandlers();
  }

  function touchMoveListener(e) {
    e.stopPropagation();
    moveTo(e.touches[0].pageX, e.touches[0].pageY);
  }

  function touchEndListener(e) {
    removeHandlers();
  }
  /**
   * Remove all installed temporary handlers
   */


  function removeHandlers() {
    if (installedMoveHandlers) {
      document.removeEventListener('mousemove', mouseMoveListener);
      document.removeEventListener('mouseup', mouseUpListener);
      installedMoveHandlers = false;
    }

    if (installedTouchHandlers) {
      document.removeEventListener('touchmove', touchMoveListener);
      document.removeEventListener('touchend', touchEndListener);
      document.removeEventListener('touchcancel', touchEndListener);
      installedTouchHandlers = false;
    }
  }

  initialize();
}

/***/ }),

/***/ "./src/app.modules.js":
/*!****************************!*\
  !*** ./src/app.modules.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Dialog": () => (/* reexport safe */ _Dialog_js__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _polyfills_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills/all.js */ "./src/polyfills/all.js");
/* harmony import */ var _polyfills_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfills_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dialog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialog.js */ "./src/Dialog.js");
/* harmony import */ var _MessageBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageBox.js */ "./src/MessageBox.js");
/* harmony import */ var _dialog_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_dialog.scss */ "./src/_dialog.scss");
/* harmony import */ var icons_cl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons-cl */ "../icons-cl/dist/icons.js");
// The public-path module must be imported first!
//import './public-path.js';





_Dialog_js__WEBPACK_IMPORTED_MODULE_1__.default.MessageBox = _MessageBox_js__WEBPACK_IMPORTED_MODULE_2__.default;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Dialog_js__WEBPACK_IMPORTED_MODULE_1__.default);


/***/ }),

/***/ "./src/polyfills/all.js":
/*!******************************!*\
  !*** ./src/polyfills/all.js ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "../icons-cl/dist/icons.js":
/*!*********************************!*\
  !*** ../icons-cl/dist/icons.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);


(function webpackUniversalModuleDefinition(root, factory) {
  if ((typeof exports === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(exports)) === 'object' && ( false ? 0 : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && __webpack_require__.amdO) define([], factory);else if ((typeof exports === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(exports)) === 'object') exports["Icons"] = factory();else root["Icons"] = factory();
})(self, function () {
  return (
    /******/
    function () {
      // webpackBootstrap

      /******/
      "use strict";
      /******/

      var __webpack_modules__ = {
        /***/
        "../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/icons.scss":
        /*!****************************************************************************************************************************************************************************************!*\
          !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/icons.scss ***!
          \****************************************************************************************************************************************************************************************/

        /***/
        function node_modulesCssLoaderDistCjsJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsRuleSet1Rules1Use3SrcIconsScss(module, __webpack_exports__, __nested_webpack_require_1690__) {
          __nested_webpack_require_1690__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_1690__.d(__webpack_exports__, {
            /* harmony export */
            "default": function _default() {
              return __WEBPACK_DEFAULT_EXPORT__;
            }
            /* harmony export */

          });
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_1690__(
          /*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */
          "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_1690__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_1690__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "../../node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_1690__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_1690__(
          /*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */
          "../../node_modules/css-loader/dist/runtime/getUrl.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_1690__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _images_icons_png__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_1690__(
          /*! ./images/icons.png */
          "./src/images/icons.png"); // Imports


          var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default());

          var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_icons_png__WEBPACK_IMPORTED_MODULE_3__["default"]); // Module


          ___CSS_LOADER_EXPORT___.push([module.id, ".icons-cl {\n  display: inline-block;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  width: 16px;\n  height: 16px;\n  overflow: hidden;\n  color: transparent;\n  padding: 0; }\n  .icons-cl.icons-cl-caret-1-n {\n    background-position: 0 0; }\n  .icons-cl.icons-cl-caret-1-ne {\n    background-position: -16px 0; }\n  .icons-cl.icons-cl-caret-1-e {\n    background-position: -32px 0; }\n  .icons-cl.icons-cl-caret-1-se {\n    background-position: -48px 0; }\n  .icons-cl.icons-cl-caret-1-s {\n    background-position: -64px 0; }\n  .icons-cl.icons-cl-caret-1-sw {\n    background-position: -80px 0; }\n  .icons-cl.icons-cl-caret-1-w {\n    background-position: -96px 0; }\n  .icons-cl.icons-cl-caret-1-nw {\n    background-position: -112px 0; }\n  .icons-cl.icons-cl-caret-2-n-s {\n    background-position: -128px 0; }\n  .icons-cl.icons-cl-caret-2-e-w {\n    background-position: -144px 0; }\n  .icons-cl.icons-cl-triangle-1-n {\n    background-position: 0px -16px; }\n  .icons-cl.icons-cl-triangle-1-ne {\n    background-position: -16px -16px; }\n  .icons-cl.icons-cl-triangle-1-e {\n    background-position: -32px -16px; }\n  .icons-cl.icons-cl-triangle-1-se {\n    background-position: -48px -16px; }\n  .icons-cl.icons-cl-triangle-1-s {\n    background-position: -64px -16px; }\n  .icons-cl.icons-cl-triangle-1-sw {\n    background-position: -80px -16px; }\n  .icons-cl.icons-cl-triangle-1-w {\n    background-position: -96px -16px; }\n  .icons-cl.icons-cl-triangle-1-nw {\n    background-position: -112px -16px; }\n  .icons-cl.icons-cl-triangle-2-n-s {\n    background-position: -128px -16px; }\n  .icons-cl.icons-cl-triangle-2-e-w {\n    background-position: -144px -16px; }\n  .icons-cl.icons-cl-arrow-1-n {\n    background-position: 0px -32px; }\n  .icons-cl.icons-cl-arrow-1-ne {\n    background-position: -16px -32px; }\n  .icons-cl.icons-cl-arrow-1-e {\n    background-position: -32px -32px; }\n  .icons-cl.icons-cl-arrow-1-se {\n    background-position: -48px -32px; }\n  .icons-cl.icons-cl-arrow-1-s {\n    background-position: -64px -32px; }\n  .icons-cl.icons-cl-arrow-1-sw {\n    background-position: -80px -32px; }\n  .icons-cl.icons-cl-arrow-1-w {\n    background-position: -96px -32px; }\n  .icons-cl.icons-cl-arrow-1-nw {\n    background-position: -112px -32px; }\n  .icons-cl.icons-cl-arrow-2-n-s {\n    background-position: -128px -32px; }\n  .icons-cl.icons-cl-arrow-2-ne-sw {\n    background-position: -144px -32px; }\n  .icons-cl.icons-cl-arrow-2-e-w {\n    background-position: -160px -32px; }\n  .icons-cl.icons-cl-arrow-2-se-nw {\n    background-position: -176px -32px; }\n  .icons-cl.icons-cl-arrowstop-1-n {\n    background-position: -192px -32px; }\n  .icons-cl.icons-cl-arrowstop-1-e {\n    background-position: -208px -32px; }\n  .icons-cl.icons-cl-arrowstop-1-s {\n    background-position: -224px -32px; }\n  .icons-cl.icons-cl-arrowstop-1-w {\n    background-position: -240px -32px; }\n  .icons-cl.icons-cl-arrowthick-1-n {\n    background-position: 0px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-ne {\n    background-position: -16px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-e {\n    background-position: -32px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-se {\n    background-position: -48px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-s {\n    background-position: -64px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-sw {\n    background-position: -80px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-w {\n    background-position: -96px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-nw {\n    background-position: -112px -48px; }\n  .icons-cl.icons-cl-arrowthick-2-n-s {\n    background-position: -128px -48px; }\n  .icons-cl.icons-cl-arrowthick-2-ne-sw {\n    background-position: -144px -48px; }\n  .icons-cl.icons-cl-arrowthick-2-e-w {\n    background-position: -160px -48px; }\n  .icons-cl.icons-cl-arrowthick-2-se-nw {\n    background-position: -176px -48px; }\n  .icons-cl.icons-cl-arrowthickstop-1-n {\n    background-position: -192px -48px; }\n  .icons-cl.icons-cl-arrowthickstop-1-e {\n    background-position: -208px -48px; }\n  .icons-cl.icons-cl-arrowthickstop-1-s {\n    background-position: -224px -48px; }\n  .icons-cl.icons-cl-arrowthickstop-1-w {\n    background-position: -240px -48px; }\n  .icons-cl.icons-cl-arrowreturnthick-1-w {\n    background-position: 0px -64px; }\n  .icons-cl.icons-cl-arrowreturnthick-1-e {\n    background-position: -32px -64px; }\n  .icons-cl.icons-cl-folder-collapsed {\n    background-position: 0px -96px; }\n  .icons-cl.icons-cl-folder-open {\n    background-position: -16px -96px; }\n  .icons-cl.icons-cl-document {\n    background-position: -32px -96px; }\n  .icons-cl.icons-cl-document-b {\n    background-position: -48px -96px; }\n  .icons-cl.icons-cl-note {\n    background-position: -64px -96px; }\n  .icons-cl.icons-cl-mail-closed {\n    background-position: -80px -96px; }\n  .icons-cl.icons-cl-mail-open {\n    background-position: -96px -96px; }\n  .icons-cl.icons-cl-suitcase {\n    background-position: -112px -96px; }\n  .icons-cl.icons-cl-comment {\n    background-position: -128px -96px; }\n  .icons-cl.icons-cl-person {\n    background-position: -144px -96px; }\n  .icons-cl.icons-cl-print {\n    background-position: -160px -96px; }\n  .icons-cl.icons-cl-trash {\n    background-position: -176px -96px; }\n  .icons-cl.icons-cl-locked {\n    background-position: -192px -96px; }\n  .icons-cl.icons-cl-unlocked {\n    background-position: -208px -96px; }\n  .icons-cl.icons-cl-bookmark {\n    background-position: -224px -96px; }\n  .icons-cl.icons-cl-tag {\n    background-position: -240px -96px; }\n  .icons-cl.icons-cl-home {\n    background-position: 0px -112px; }\n  .icons-cl.icons-cl-flag {\n    background-position: -16px -112px; }\n  .icons-cl.icons-cl-calculator {\n    background-position: -32px -112px; }\n  .icons-cl.icons-cl-cart {\n    background-position: -48px -112px; }\n  .icons-cl.icons-cl-pencil {\n    background-position: -64px -112px; }\n  .icons-cl.icons-cl-clock {\n    background-position: -80px -112px; }\n  .icons-cl.icons-cl-disk {\n    background-position: -96px -112px; }\n  .icons-cl.icons-cl-calendar {\n    background-position: -112px -112px; }\n  .icons-cl.icons-cl-zoomin {\n    background-position: -128px -112px; }\n  .icons-cl.icons-cl-zoomout {\n    background-position: -144px -112px; }\n  .icons-cl.icons-cl-search {\n    background-position: -160px -112px; }\n  .icons-cl.icons-cl-wrench {\n    background-position: -176px -112px; }\n  .icons-cl.icons-cl-gear {\n    background-position: -192px -112px; }\n  .icons-cl.icons-cl-heart {\n    background-position: -208px -112px; }\n  .icons-cl.icons-cl-star {\n    background-position: -224px -112px; }\n  .icons-cl.icons-cl-link {\n    background-position: -240px -112px; }\n  .icons-cl.icons-cl-cancel {\n    background-position: 0px -128px; }\n  .icons-cl.icons-cl-plus {\n    background-position: -16px -128px; }\n  .icons-cl.icons-cl-plusthick {\n    background-position: -32px -128px; }\n  .icons-cl.icons-cl-minus {\n    background-position: -48px -128px; }\n  .icons-cl.icons-cl-minusthick {\n    background-position: -64px -128px; }\n  .icons-cl.icons-cl-key {\n    background-position: -80px -128px; }\n  .icons-cl.icons-cl-lightbulb {\n    background-position: -96px -128px; }\n  .icons-cl.icons-cl-scissors {\n    background-position: -112px -128px; }\n  .icons-cl.icons-cl-clipboard {\n    background-position: -128px -128px; }\n  .icons-cl.icons-cl-copy {\n    background-position: -144px -128px; }\n  .icons-cl.icons-cl-contact {\n    background-position: -160px -128px; }\n  .icons-cl.icons-cl-image {\n    background-position: -176px -128px; }\n  .icons-cl.icons-cl-video {\n    background-position: -192px -128px; }\n  .icons-cl.icons-cl-script {\n    background-position: -208px -128px; }\n  .icons-cl.icons-cl-close {\n    background-position: -80px -128px; }\n  .icons-cl.icons-cl-closethick {\n    background-position: -96px -128px; }\n  .icons-cl.icons-cl-alert {\n    background-position: 0px -144px; }\n  .icons-cl.icons-cl-info {\n    background-position: -16px -144px; }\n  .icons-cl.icons-cl-notice {\n    background-position: -32px -144px; }\n  .icons-cl.icons-cl-help {\n    background-position: -48px -144px; }\n  .icons-cl.icons-cl-check {\n    background-position: -64px -144px; }\n  .icons-cl.icons-cl-bullet {\n    background-position: -80px -144px; }\n  .icons-cl.icons-cl-radio-off {\n    background-position: -96px -144px; }\n  .icons-cl.icons-cl-radio-on {\n    background-position: -112px -144px; }\n  .icons-cl.icons-cl-pin-w {\n    background-position: -128px -144px; }\n  .icons-cl.icons-cl-pin-s {\n    background-position: -144px -144px; }\n  .icons-cl.icons-cl-play {\n    background-position: 0px -160px; }\n  .icons-cl.icons-cl-pause {\n    background-position: -16px -160px; }\n  .icons-cl.icons-cl-seek-next {\n    background-position: -32px -160px; }\n  .icons-cl.icons-cl-seek-prev {\n    background-position: -48px -160px; }\n  .icons-cl.icons-cl-seek-end {\n    background-position: -64px -160px; }\n  .icons-cl.icons-cl-seek-first {\n    background-position: -80px -160px; }\n  .icons-cl.icons-cl-stop {\n    background-position: -96px -160px; }\n  .icons-cl.icons-cl-eject {\n    background-position: -112px -160px; }\n  .icons-cl.icons-cl-volume-off {\n    background-position: -128px -160px; }\n  .icons-cl.icons-cl-volume-on {\n    background-position: -144px -160px; }\n", "", {
            "version": 3,
            "sources": ["webpack://./icons.scss"],
            "names": [],
            "mappings": "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",
            "sourcesContent": [".icons-cl {\r\n  display: inline-block;\r\n  background-image: url(images/icons.png);\r\n  width: 16px;\r\n  height: 16px;\r\n  overflow: hidden;\r\n  color: transparent;\r\n  padding: 0;\r\n\r\n  //\r\n  // Row 1\r\n  //\r\n  &.icons-cl-caret-1-n {\r\n    background-position: 0 0;\r\n  }\r\n\r\n  &.icons-cl-caret-1-ne {\r\n    background-position: -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-1-e {\r\n    background-position: 2 * -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-1-se {\r\n    background-position: 3 * -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-1-s {\r\n    background-position: 4 * -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-1-sw {\r\n    background-position: 5 * -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-1-w {\r\n    background-position: 6 * -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-1-nw {\r\n    background-position: 7 * -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-2-n-s {\r\n    background-position: 8 * -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-2-e-w {\r\n    background-position: 9 * -16px 0;\r\n  }\r\n\r\n  //\r\n  // Row 2\r\n  //\r\n  &.icons-cl-triangle-1-n {\r\n    background-position: 0 * -16px -16px;\r\n  }\r\n\r\n  &.icons-cl-triangle-1-ne {\r\n    background-position: 1 * -16px -16px;\r\n  }\r\n\r\n  &.icons-cl-triangle-1-e {\r\n    background-position: 2 * -16px -16px;\r\n  }\r\n\r\n  &.icons-cl-triangle-1-se {\r\n    background-position: 3 * -16px -16px;\r\n  }\r\n\r\n\r\n  &.icons-cl-triangle-1-s {\r\n    background-position: 4 * -16px -16px;\r\n  }\r\n\r\n\r\n  &.icons-cl-triangle-1-sw {\r\n    background-position: 5 * -16px -16px;\r\n  }\r\n\r\n\r\n  &.icons-cl-triangle-1-w {\r\n    background-position: 6 * -16px -16px;\r\n  }\r\n\r\n\r\n  &.icons-cl-triangle-1-nw {\r\n    background-position: 7 * -16px -16px;\r\n  }\r\n\r\n  &.icons-cl-triangle-2-n-s {\r\n    background-position: 8 * -16px -16px;\r\n  }\r\n\r\n  &.icons-cl-triangle-2-e-w {\r\n    background-position: 9 * -16px -16px;\r\n  }\r\n  \r\n  //\r\n  // Row 3\r\n  //\r\n  &.icons-cl-arrow-1-n {\r\n    background-position: 0 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-1-ne {\r\n    background-position: 1 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-1-e {\r\n    background-position: 2 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-1-se {\r\n    background-position: 3 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-1-s {\r\n    background-position: 4 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-1-sw {\r\n    background-position: 5 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-1-w {\r\n    background-position: 6 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-1-nw {\r\n    background-position: 7 * -16px -32px;\r\n  }\r\n\r\n\r\n  &.icons-cl-arrow-2-n-s {\r\n    background-position: 8 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-2-ne-sw {\r\n    background-position: 9 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-2-e-w {\r\n    background-position: 10 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-2-se-nw {\r\n    background-position: 11 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrowstop-1-n {\r\n    background-position: 12 * -16px -32px;\r\n  }\r\n\r\n\r\n  &.icons-cl-arrowstop-1-e {\r\n    background-position: 13 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrowstop-1-s {\r\n    background-position: 14 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrowstop-1-w {\r\n    background-position: 15 * -16px -32px;\r\n  }\r\n\r\n  //\r\n  // Row 4\r\n  //\r\n  &.icons-cl-arrowthick-1-n {\r\n    background-position: 0 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-1-ne {\r\n    background-position: 1 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-1-e {\r\n    background-position: 2 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-1-se {\r\n    background-position: 3 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-1-s {\r\n    background-position: 4 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-1-sw {\r\n    background-position: 5 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-1-w {\r\n    background-position: 6 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-1-nw {\r\n    background-position: 7 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-2-n-s {\r\n    background-position: 8 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-2-ne-sw {\r\n    background-position: 9 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-2-e-w {\r\n    background-position: 10 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-2-se-nw {\r\n    background-position: 11 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthickstop-1-n {\r\n    background-position: 12 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthickstop-1-e {\r\n    background-position: 13 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthickstop-1-s {\r\n    background-position: 14 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthickstop-1-w {\r\n    background-position: 15 * -16px -48px;\r\n  }\r\n\r\n  //\r\n  // Row 5\r\n  &.icons-cl-arrowreturnthick-1-w {\r\n    background-position: 0 * -16px -64px;\r\n  }\r\n\r\n  &.icons-cl-arrowreturnthick-1-e {\r\n    background-position: 2 * -16px -64px;\r\n  }\r\n\r\n  // ui-icon-arrowreturnthick-1-n  ui-icon-arrowreturnthick-1-s  ui-icon-arrowreturn-1-w  ui-icon-arrowreturn-1-n  ui-icon-arrowreturn-1-e  ui-icon-arrowreturn-1-s  ui-icon-arrowrefresh-1-w  ui-icon-arrowrefresh-1-n  ui-icon-arrowrefresh-1-e  ui-icon-arrowrefresh-1-s\r\n  // ui-icon-arrow-4  ui-icon-arrow-4-diag  ui-icon-extlink  ui-icon-newwin  ui-icon-refresh  ui-icon-shuffle  ui-icon-transfer-e-w  ui-icon-transferthick-e-w\r\n\r\n  //\r\n  // Row 6\r\n  //\r\n  $list: folder-collapsed folder-open document document-b note mail-closed mail-open suitcase comment person print trash locked unlocked bookmark tag;\r\n  $x: 0;\r\n\r\n  @each $item in $list {\r\n    &.icons-cl-#{$item} {\r\n      background-position: $x * -16px -96px\r\n    }\r\n\r\n    $x: $x+1;\r\n  }\r\n\r\n  //\r\n  // Row 7\r\n  //\r\n  $list: home flag calculator cart pencil clock disk calendar zoomin zoomout search wrench gear heart star link;\r\n  $x: 0;\r\n\r\n  @each $item in $list {\r\n    &.icons-cl-#{$item} {\r\n      background-position: $x * -16px -112px\r\n    }\r\n\r\n    $x: $x+1;\r\n  }\r\n\r\n  //\r\n  // Row 8\r\n  //\r\n  $list: cancel  plus  plusthick  minus  minusthick  key  lightbulb  scissors  clipboard  copy  contact  image  video  script;\r\n  $x: 0;\r\n\r\n  @each $item in $list {\r\n    &.icons-cl-#{$item} {\r\n      background-position: $x * -16px -128px\r\n    }\r\n\r\n    $x: $x+1;\r\n  }\r\n\r\n  &.icons-cl-close {\r\n    background-position: -80px -128px;\r\n  }\r\n\r\n  &.icons-cl-closethick {\r\n    background-position: -96px -128px;\r\n  }\r\n  // ui-icon-cancel  ui-icon-plus  ui-icon-plusthick  ui-icon-minus  ui-icon-minusthick  ui-icon-key  ui-icon-lightbulb  ui-icon-scissors  ui-icon-clipboard  ui-icon-copy  ui-icon-contact  ui-icon-image  ui-icon-video  ui-icon-script\r\n\r\n  // Row 9\r\n  $list: alert info  notice help check  bullet  radio-off  radio-on  pin-w  pin-s;\r\n  $x: 0;\r\n\r\n  @each $item in $list {\r\n    &.icons-cl-#{$item} {\r\n      background-position: $x * -16px 9 * -16px\r\n    }\r\n\r\n    $x: $x+1;\r\n  }\r\n\r\n  //  Row 10\r\n  $list: play pause seek-next  seek-prev  seek-end  seek-first  stop  eject  volume-off  volume-on;\r\n  $x: 0;\r\n\r\n  @each $item in $list {\r\n    &.icons-cl-#{$item} {\r\n      background-position: $x * -16px 10 * -16px\r\n    }\r\n\r\n    $x: $x+1;\r\n  }\r\n\r\n // ui-icon-power  ui-icon-signal-diag  ui-icon-signal  ui-icon-battery-0  ui-icon-battery-1  ui-icon-battery-2  ui-icon-battery-3\r\n  // ui-icon-circle-plus  ui-icon-circle-minus  ui-icon-circle-close  ui-icon-circle-triangle-e  ui-icon-circle-triangle-s  ui-icon-circle-triangle-w  ui-icon-circle-triangle-n  ui-icon-circle-arrow-e  ui-icon-circle-arrow-s  ui-icon-circle-arrow-w  ui-icon-circle-arrow-n  ui-icon-circle-zoomin  ui-icon-circle-zoomout  ui-icon-circle-check\r\n// ui-icon-circlesmall-plus  ui-icon-circlesmall-minus  ui-icon-circlesmall-close  ui-icon-squaresmall-plus  ui-icon-squaresmall-minus  ui-icon-squaresmall-close\r\n// ui-icon-grip-dotted-vertical  ui-icon-grip-dotted-horizontal  ui-icon-grip-solid-vertical  ui-icon-grip-solid-horizontal  ui-icon-gripsmall-diagonal-se  ui-icon-grip-diagonal-se\r\n\r\n}\r\n"],
            "sourceRoot": ""
          }]); // Exports

          /* harmony default export */


          var __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
          /***/
        },

        /***/
        "../../node_modules/css-loader/dist/runtime/api.js":
        /*!*********************************************************!*\
          !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
          \*********************************************************/

        /***/
        function node_modulesCssLoaderDistRuntimeApiJs(module) {
          /*
            MIT License http://www.opensource.org/licenses/mit-license.php
            Author Tobias Koppers @sokra
          */
          // css base code, injected by the css-loader
          // eslint-disable-next-line func-names
          module.exports = function (cssWithMappingToString) {
            var list = []; // return the list of modules as css string

            list.toString = function toString() {
              return this.map(function (item) {
                var content = cssWithMappingToString(item);

                if (item[2]) {
                  return "@media ".concat(item[2], " {").concat(content, "}");
                }

                return content;
              }).join("");
            }; // import a list of modules into the list
            // eslint-disable-next-line func-names


            list.i = function (modules, mediaQuery, dedupe) {
              if (typeof modules === "string") {
                // eslint-disable-next-line no-param-reassign
                modules = [[null, modules, ""]];
              }

              var alreadyImportedModules = {};

              if (dedupe) {
                for (var i = 0; i < this.length; i++) {
                  // eslint-disable-next-line prefer-destructuring
                  var id = this[i][0];

                  if (id != null) {
                    alreadyImportedModules[id] = true;
                  }
                }
              }

              for (var _i = 0; _i < modules.length; _i++) {
                var item = [].concat(modules[_i]);

                if (dedupe && alreadyImportedModules[item[0]]) {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (mediaQuery) {
                  if (!item[2]) {
                    item[2] = mediaQuery;
                  } else {
                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                  }
                }

                list.push(item);
              }
            };

            return list;
          };
          /***/

        },

        /***/
        "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
        /*!****************************************************************************!*\
          !*** ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
          \****************************************************************************/

        /***/
        function node_modulesCssLoaderDistRuntimeCssWithMappingToStringJs(module) {
          function _slicedToArray(arr, i) {
            return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
          }

          function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }

          function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
          }

          function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;

            for (var i = 0, arr2 = new Array(len); i < len; i++) {
              arr2[i] = arr[i];
            }

            return arr2;
          }

          function _iterableToArrayLimit(arr, i) {
            if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);

                if (i && _arr.length === i) break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"] != null) _i["return"]();
              } finally {
                if (_d) throw _e;
              }
            }

            return _arr;
          }

          function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          }

          module.exports = function cssWithMappingToString(item) {
            var _item = _slicedToArray(item, 4),
                content = _item[1],
                cssMapping = _item[3];

            if (typeof btoa === "function") {
              // eslint-disable-next-line no-undef
              var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
              var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
              var sourceMapping = "/*# ".concat(data, " */");
              var sourceURLs = cssMapping.sources.map(function (source) {
                return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
              });
              return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
            }

            return [content].join("\n");
          };
          /***/

        },

        /***/
        "../../node_modules/css-loader/dist/runtime/getUrl.js":
        /*!************************************************************!*\
          !*** ../../node_modules/css-loader/dist/runtime/getUrl.js ***!
          \************************************************************/

        /***/
        function node_modulesCssLoaderDistRuntimeGetUrlJs(module) {
          module.exports = function (url, options) {
            if (!options) {
              // eslint-disable-next-line no-param-reassign
              options = {};
            } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


            url = url && url.__esModule ? url["default"] : url;

            if (typeof url !== "string") {
              return url;
            } // If url is already wrapped in quotes, remove them


            if (/^['"].*['"]$/.test(url)) {
              // eslint-disable-next-line no-param-reassign
              url = url.slice(1, -1);
            }

            if (options.hash) {
              // eslint-disable-next-line no-param-reassign
              url += options.hash;
            } // Should url be wrapped?
            // See https://drafts.csswg.org/css-values-3/#urls


            if (/["'() \t\n]/.test(url) || options.needQuotes) {
              return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
            }

            return url;
          };
          /***/

        },

        /***/
        "./src/icons.scss":
        /*!************************!*\
          !*** ./src/icons.scss ***!
          \************************/

        /***/
        function srcIconsScss(module, __webpack_exports__, __nested_webpack_require_33291__) {
          __nested_webpack_require_33291__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_33291__.d(__webpack_exports__, {
            /* harmony export */
            "default": function _default() {
              return __WEBPACK_DEFAULT_EXPORT__;
            }
            /* harmony export */

          });
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_33291__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_33291__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_33291__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./icons.scss */
          "../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/icons.scss");

          var options = {};
          options.insert = "head";
          options.singleton = false;

          var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);

          if (true) {
            if (!_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || module.hot.invalidate) {
              var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
                if (!a && b || a && !b) {
                  return false;
                }

                var p;

                for (p in a) {
                  if (isNamedExport && p === 'default') {
                    // eslint-disable-next-line no-continue
                    continue;
                  }

                  if (a[p] !== b[p]) {
                    return false;
                  }
                }

                for (p in b) {
                  if (isNamedExport && p === 'default') {
                    // eslint-disable-next-line no-continue
                    continue;
                  }

                  if (!a[p]) {
                    return false;
                  }
                }

                return true;
              };

              var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals;
              module.hot.accept(
              /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./icons.scss */
              "../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/icons.scss", function (__WEBPACK_OUTDATED_DEPENDENCIES__) {
                /* harmony import */
                _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_33291__(
                /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./icons.scss */
                "../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/icons.scss");

                (function () {
                  if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals, undefined)) {
                    module.hot.invalidate();
                    return;
                  }

                  oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals;
                  update(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__["default"]);
                })(__WEBPACK_OUTDATED_DEPENDENCIES__);
              });
            }

            module.hot.dispose(function () {
              update();
            });
          }
          /* harmony default export */


          var __WEBPACK_DEFAULT_EXPORT__ = _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {};
          /***/

        },

        /***/
        "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
        /*!********************************************************************************!*\
          !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
          \********************************************************************************/

        /***/
        function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, __unused_webpack_exports, __nested_webpack_require_39685__) {
          var isOldIE = function isOldIE() {
            var memo;
            return function memorize() {
              if (typeof memo === 'undefined') {
                // Test for IE <= 9 as proposed by Browserhacks
                // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
                // Tests for existence of standard globals is to allow style-loader
                // to operate correctly into non-standard environments
                // @see https://github.com/webpack-contrib/style-loader/issues/177
                memo = Boolean(window && document && document.all && !window.atob);
              }

              return memo;
            };
          }();

          var getTarget = function getTarget() {
            var memo = {};
            return function memorize(target) {
              if (typeof memo[target] === 'undefined') {
                var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

                if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                  try {
                    // This will throw an exception if access to iframe is blocked
                    // due to cross-origin restrictions
                    styleTarget = styleTarget.contentDocument.head;
                  } catch (e) {
                    // istanbul ignore next
                    styleTarget = null;
                  }
                }

                memo[target] = styleTarget;
              }

              return memo[target];
            };
          }();

          var stylesInDom = [];

          function getIndexByIdentifier(identifier) {
            var result = -1;

            for (var i = 0; i < stylesInDom.length; i++) {
              if (stylesInDom[i].identifier === identifier) {
                result = i;
                break;
              }
            }

            return result;
          }

          function modulesToDom(list, options) {
            var idCountMap = {};
            var identifiers = [];

            for (var i = 0; i < list.length; i++) {
              var item = list[i];
              var id = options.base ? item[0] + options.base : item[0];
              var count = idCountMap[id] || 0;
              var identifier = "".concat(id, " ").concat(count);
              idCountMap[id] = count + 1;
              var index = getIndexByIdentifier(identifier);
              var obj = {
                css: item[1],
                media: item[2],
                sourceMap: item[3]
              };

              if (index !== -1) {
                stylesInDom[index].references++;
                stylesInDom[index].updater(obj);
              } else {
                stylesInDom.push({
                  identifier: identifier,
                  updater: addStyle(obj, options),
                  references: 1
                });
              }

              identifiers.push(identifier);
            }

            return identifiers;
          }

          function insertStyleElement(options) {
            var style = document.createElement('style');
            var attributes = options.attributes || {};

            if (typeof attributes.nonce === 'undefined') {
              var nonce =  true ? __nested_webpack_require_39685__.nc : 0;

              if (nonce) {
                attributes.nonce = nonce;
              }
            }

            Object.keys(attributes).forEach(function (key) {
              style.setAttribute(key, attributes[key]);
            });

            if (typeof options.insert === 'function') {
              options.insert(style);
            } else {
              var target = getTarget(options.insert || 'head');

              if (!target) {
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
              }

              target.appendChild(style);
            }

            return style;
          }

          function removeStyleElement(style) {
            // istanbul ignore if
            if (style.parentNode === null) {
              return false;
            }

            style.parentNode.removeChild(style);
          }
          /* istanbul ignore next  */


          var replaceText = function replaceText() {
            var textStore = [];
            return function replace(index, replacement) {
              textStore[index] = replacement;
              return textStore.filter(Boolean).join('\n');
            };
          }();

          function applyToSingletonTag(style, index, remove, obj) {
            var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

            /* istanbul ignore if  */

            if (style.styleSheet) {
              style.styleSheet.cssText = replaceText(index, css);
            } else {
              var cssNode = document.createTextNode(css);
              var childNodes = style.childNodes;

              if (childNodes[index]) {
                style.removeChild(childNodes[index]);
              }

              if (childNodes.length) {
                style.insertBefore(cssNode, childNodes[index]);
              } else {
                style.appendChild(cssNode);
              }
            }
          }

          function applyToTag(style, options, obj) {
            var css = obj.css;
            var media = obj.media;
            var sourceMap = obj.sourceMap;

            if (media) {
              style.setAttribute('media', media);
            } else {
              style.removeAttribute('media');
            }

            if (sourceMap && typeof btoa !== 'undefined') {
              css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
            } // For old IE

            /* istanbul ignore if  */


            if (style.styleSheet) {
              style.styleSheet.cssText = css;
            } else {
              while (style.firstChild) {
                style.removeChild(style.firstChild);
              }

              style.appendChild(document.createTextNode(css));
            }
          }

          var singleton = null;
          var singletonCounter = 0;

          function addStyle(obj, options) {
            var style;
            var update;
            var remove;

            if (options.singleton) {
              var styleIndex = singletonCounter++;
              style = singleton || (singleton = insertStyleElement(options));
              update = applyToSingletonTag.bind(null, style, styleIndex, false);
              remove = applyToSingletonTag.bind(null, style, styleIndex, true);
            } else {
              style = insertStyleElement(options);
              update = applyToTag.bind(null, style, options);

              remove = function remove() {
                removeStyleElement(style);
              };
            }

            update(obj);
            return function updateStyle(newObj) {
              if (newObj) {
                if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                  return;
                }

                update(obj = newObj);
              } else {
                remove();
              }
            };
          }

          module.exports = function (list, options) {
            options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
            // tags it will allow on a page

            if (!options.singleton && typeof options.singleton !== 'boolean') {
              options.singleton = isOldIE();
            }

            list = list || [];
            var lastIdentifiers = modulesToDom(list, options);
            return function update(newList) {
              newList = newList || [];

              if (Object.prototype.toString.call(newList) !== '[object Array]') {
                return;
              }

              for (var i = 0; i < lastIdentifiers.length; i++) {
                var identifier = lastIdentifiers[i];
                var index = getIndexByIdentifier(identifier);
                stylesInDom[index].references--;
              }

              var newLastIdentifiers = modulesToDom(newList, options);

              for (var _i = 0; _i < lastIdentifiers.length; _i++) {
                var _identifier = lastIdentifiers[_i];

                var _index = getIndexByIdentifier(_identifier);

                if (stylesInDom[_index].references === 0) {
                  stylesInDom[_index].updater();

                  stylesInDom.splice(_index, 1);
                }
              }

              lastIdentifiers = newLastIdentifiers;
            };
          };
          /***/

        },

        /***/
        "./src/images/icons.png":
        /*!******************************!*\
          !*** ./src/images/icons.png ***!
          \******************************/

        /***/
        function srcImagesIconsPng(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_48911__) {
          __nested_webpack_require_48911__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_48911__.d(__webpack_exports__, {
            /* harmony export */
            "default": function _default() {
              return __WEBPACK_DEFAULT_EXPORT__;
            }
            /* harmony export */

          });
          /* harmony default export */


          var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,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";
          /***/
        },

        /***/
        "./src/icons.js":
        /*!**********************!*\
          !*** ./src/icons.js ***!
          \**********************/

        /***/
        function srcIconsJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_55807__) {
          __nested_webpack_require_55807__.r(__webpack_exports__);
          /* harmony import */


          var _icons_scss__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_55807__(
          /*! ./icons.scss */
          "./src/icons.scss");
          /***/

        }
        /******/

      };
      /************************************************************************/

      /******/
      // The module cache

      /******/

      var __webpack_module_cache__ = {};
      /******/

      /******/
      // The require function

      /******/

      function __nested_webpack_require_56375__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        if (__webpack_module_cache__[moduleId]) {
          /******/
          return __webpack_module_cache__[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = __webpack_module_cache__[moduleId] = {
          /******/
          id: moduleId,

          /******/
          // no module.loaded needed

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        var execOptions = {
          id: moduleId,
          module: module,
          factory: __webpack_modules__[moduleId],
          require: __nested_webpack_require_56375__
        };
        /******/

        __nested_webpack_require_56375__.i.forEach(function (handler) {
          handler(execOptions);
        });
        /******/


        module = execOptions.module;
        /******/

        execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __nested_webpack_require_56375__.m = __webpack_modules__;
      /******/

      /******/
      // expose the module cache

      /******/

      __nested_webpack_require_56375__.c = __webpack_module_cache__;
      /******/

      /******/
      // expose the module execution interceptor

      /******/

      __nested_webpack_require_56375__.i = [];
      /******/

      /************************************************************************/

      /******/

      /* webpack/runtime/compat get default export */

      /******/

      (function () {
        /******/
        // getDefaultExport function for compatibility with non-harmony modules

        /******/
        __nested_webpack_require_56375__.n = function (module) {
          /******/
          var getter = module && module.__esModule ?
          /******/
          function () {
            return module['default'];
          } :
          /******/
          function () {
            return module;
          };
          /******/

          __nested_webpack_require_56375__.d(getter, {
            a: getter
          });
          /******/


          return getter;
          /******/
        };
        /******/

      })();
      /******/

      /******/

      /* webpack/runtime/define property getters */

      /******/


      (function () {
        /******/
        // define getter functions for harmony exports

        /******/
        __nested_webpack_require_56375__.d = function (exports, definition) {
          /******/
          for (var key in definition) {
            /******/
            if (__nested_webpack_require_56375__.o(definition, key) && !__nested_webpack_require_56375__.o(exports, key)) {
              /******/
              Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
              });
              /******/
            }
            /******/

          }
          /******/

        };
        /******/

      })();
      /******/

      /******/

      /* webpack/runtime/get javascript update chunk filename */

      /******/


      (function () {
        /******/
        // This function allow to reference all chunks

        /******/
        __nested_webpack_require_56375__.hu = function (chunkId) {
          /******/
          // return url for filenames based on template

          /******/
          return "" + chunkId + "." + __nested_webpack_require_56375__.h() + ".hot-update.js";
          /******/
        };
        /******/

      })();
      /******/

      /******/

      /* webpack/runtime/get update manifest filename */

      /******/


      (function () {
        /******/
        __nested_webpack_require_56375__.hmrF = function () {
          return "Icons." + __nested_webpack_require_56375__.h() + ".hot-update.json";
        };
        /******/

      })();
      /******/

      /******/

      /* webpack/runtime/getFullHash */

      /******/


      (function () {
        /******/
        __nested_webpack_require_56375__.h = function () {
          return "9627902b499223ad7ba3";
        };
        /******/

      })();
      /******/

      /******/

      /* webpack/runtime/hasOwnProperty shorthand */

      /******/


      (function () {
        /******/
        __nested_webpack_require_56375__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/

      })();
      /******/

      /******/

      /* webpack/runtime/load script */

      /******/


      (function () {
        /******/
        var inProgress = {};
        /******/

        var dataWebpackPrefix = "Icons:";
        /******/
        // loadScript function to load a script via script tag

        /******/

        __nested_webpack_require_56375__.l = function (url, done, key, chunkId) {
          /******/
          if (inProgress[url]) {
            inProgress[url].push(done);
            return;
          }
          /******/


          var script, needAttach;
          /******/

          if (key !== undefined) {
            /******/
            var scripts = document.getElementsByTagName("script");
            /******/

            for (var i = 0; i < scripts.length; i++) {
              /******/
              var s = scripts[i];
              /******/

              if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) {
                script = s;
                break;
              }
              /******/

            }
            /******/

          }
          /******/


          if (!script) {
            /******/
            needAttach = true;
            /******/

            script = document.createElement('script');
            /******/

            /******/

            script.charset = 'utf-8';
            /******/

            script.timeout = 120;
            /******/

            if (__nested_webpack_require_56375__.nc) {
              /******/
              script.setAttribute("nonce", __nested_webpack_require_56375__.nc);
              /******/
            }
            /******/


            script.setAttribute("data-webpack", dataWebpackPrefix + key);
            /******/

            script.src = url;
            /******/
          }
          /******/


          inProgress[url] = [done];
          /******/

          var onScriptComplete = function onScriptComplete(prev, event) {
            /******/
            // avoid mem leaks in IE.

            /******/
            script.onerror = script.onload = null;
            /******/

            clearTimeout(timeout);
            /******/

            var doneFns = inProgress[url];
            /******/

            delete inProgress[url];
            /******/

            script.parentNode && script.parentNode.removeChild(script);
            /******/

            doneFns && doneFns.forEach(function (fn) {
              return fn(event);
            });
            /******/

            if (prev) return prev(event);
            /******/
          }
          /******/
          ;
          /******/


          var timeout = setTimeout(onScriptComplete.bind(null, undefined, {
            type: 'timeout',
            target: script
          }), 120000);
          /******/

          script.onerror = onScriptComplete.bind(null, script.onerror);
          /******/

          script.onload = onScriptComplete.bind(null, script.onload);
          /******/

          needAttach && document.head.appendChild(script);
          /******/
        };
        /******/

      })();
      /******/

      /******/

      /* webpack/runtime/make namespace object */

      /******/


      (function () {
        /******/
        // define __esModule on exports

        /******/
        __nested_webpack_require_56375__.r = function (exports) {
          /******/
          if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/


          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/

      })();
      /******/

      /******/

      /* webpack/runtime/hot module replacement */

      /******/


      (function () {
        /******/
        var currentModuleData = {};
        /******/

        var installedModules = __nested_webpack_require_56375__.c;
        /******/

        /******/
        // module and require creation

        /******/

        var currentChildModule;
        /******/

        var currentParents = [];
        /******/

        /******/
        // status

        /******/

        var registeredStatusHandlers = [];
        /******/

        var currentStatus = "idle";
        /******/

        /******/
        // while downloading

        /******/

        var blockingPromises;
        /******/

        /******/
        // The update info

        /******/

        var currentUpdateApplyHandlers;
        /******/

        var queuedInvalidatedModules;
        /******/

        /******/
        // eslint-disable-next-line no-unused-vars

        /******/

        __nested_webpack_require_56375__.hmrD = currentModuleData;
        /******/

        /******/

        __nested_webpack_require_56375__.i.push(function (options) {
          /******/
          var module = options.module;
          /******/

          var require = createRequire(options.require, options.id);
          /******/


          module.hot = createModuleHotObject(options.id, module);
          /******/

          module.parents = currentParents;
          /******/

          module.children = [];
          /******/

          currentParents = [];
          /******/

          options.require = require;
          /******/
        });
        /******/

        /******/


        __nested_webpack_require_56375__.hmrC = {};
        /******/

        __nested_webpack_require_56375__.hmrI = {};
        /******/

        /******/

        function createRequire(require, moduleId) {
          /******/
          var me = installedModules[moduleId];
          /******/

          if (!me) return require;
          /******/

          var fn = function fn(request) {
            /******/
            if (me.hot.active) {
              /******/
              if (installedModules[request]) {
                /******/
                var parents = installedModules[request].parents;
                /******/

                if (parents.indexOf(moduleId) === -1) {
                  /******/
                  parents.push(moduleId);
                  /******/
                }
                /******/

              } else {
                /******/
                currentParents = [moduleId];
                /******/

                currentChildModule = request;
                /******/
              }
              /******/


              if (me.children.indexOf(request) === -1) {
                /******/
                me.children.push(request);
                /******/
              }
              /******/

            } else {
              /******/
              console.warn(
              /******/
              "[HMR] unexpected require(" +
              /******/
              request +
              /******/
              ") from disposed module " +
              /******/
              moduleId
              /******/
              );
              /******/

              currentParents = [];
              /******/
            }
            /******/


            return require(request);
            /******/
          };
          /******/


          var createPropertyDescriptor = function createPropertyDescriptor(name) {
            /******/
            return {
              /******/
              configurable: true,

              /******/
              enumerable: true,

              /******/
              get: function get() {
                /******/
                return require[name];
                /******/
              },

              /******/
              set: function set(value) {
                /******/
                require[name] = value;
                /******/
              }
              /******/

            };
            /******/
          };
          /******/


          for (var name in require) {
            /******/
            if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
              /******/
              Object.defineProperty(fn, name, createPropertyDescriptor(name));
              /******/
            }
            /******/

          }
          /******/


          fn.e = function (chunkId) {
            /******/
            return trackBlockingPromise(require.e(chunkId));
            /******/
          };
          /******/


          return fn;
          /******/
        }
        /******/

        /******/


        function createModuleHotObject(moduleId, me) {
          /******/
          var hot = {
            /******/
            // private stuff

            /******/
            _acceptedDependencies: {},

            /******/
            _declinedDependencies: {},

            /******/
            _selfAccepted: false,

            /******/
            _selfDeclined: false,

            /******/
            _selfInvalidated: false,

            /******/
            _disposeHandlers: [],

            /******/
            _main: currentChildModule !== moduleId,

            /******/
            _requireSelf: function _requireSelf() {
              /******/
              currentParents = me.parents.slice();
              /******/

              currentChildModule = moduleId;
              /******/

              __nested_webpack_require_56375__(moduleId);
              /******/

            },

            /******/

            /******/
            // Module API

            /******/
            active: true,

            /******/
            accept: function accept(dep, callback) {
              /******/
              if (dep === undefined) hot._selfAccepted = true;
              /******/
              else if (typeof dep === "function") hot._selfAccepted = dep;
                /******/
                else if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(dep) === "object" && dep !== null)
                    /******/
                    for (var i = 0; i < dep.length; i++) {
                      /******/
                      hot._acceptedDependencies[dep[i]] = callback || function () {};
                    }
                    /******/
                  else hot._acceptedDependencies[dep] = callback || function () {};
              /******/
            },

            /******/
            decline: function decline(dep) {
              /******/
              if (dep === undefined) hot._selfDeclined = true;
              /******/
              else if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(dep) === "object" && dep !== null)
                  /******/
                  for (var i = 0; i < dep.length; i++) {
                    /******/
                    hot._declinedDependencies[dep[i]] = true;
                  }
                  /******/
                else hot._declinedDependencies[dep] = true;
              /******/
            },

            /******/
            dispose: function dispose(callback) {
              /******/
              hot._disposeHandlers.push(callback);
              /******/

            },

            /******/
            addDisposeHandler: function addDisposeHandler(callback) {
              /******/
              hot._disposeHandlers.push(callback);
              /******/

            },

            /******/
            removeDisposeHandler: function removeDisposeHandler(callback) {
              /******/
              var idx = hot._disposeHandlers.indexOf(callback);
              /******/


              if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
              /******/
            },

            /******/
            invalidate: function invalidate() {
              /******/
              this._selfInvalidated = true;
              /******/

              switch (currentStatus) {
                /******/
                case "idle":
                  /******/
                  currentUpdateApplyHandlers = [];
                  /******/

                  Object.keys(__nested_webpack_require_56375__.hmrI).forEach(function (key) {
                    /******/
                    __nested_webpack_require_56375__.hmrI[key](
                    /******/
                    moduleId,
                    /******/
                    currentUpdateApplyHandlers
                    /******/
                    );
                    /******/

                  });
                  /******/

                  setStatus("ready");
                  /******/

                  break;

                /******/

                case "ready":
                  /******/
                  Object.keys(__nested_webpack_require_56375__.hmrI).forEach(function (key) {
                    /******/
                    __nested_webpack_require_56375__.hmrI[key](
                    /******/
                    moduleId,
                    /******/
                    currentUpdateApplyHandlers
                    /******/
                    );
                    /******/

                  });
                  /******/

                  break;

                /******/

                case "prepare":
                /******/

                case "check":
                /******/

                case "dispose":
                /******/

                case "apply":
                  /******/
                  (queuedInvalidatedModules = queuedInvalidatedModules || []).push(
                  /******/
                  moduleId
                  /******/
                  );
                  /******/

                  break;

                /******/

                default:
                  /******/
                  // ignore requests in error states

                  /******/
                  break;

                /******/
              }
              /******/

            },

            /******/

            /******/
            // Management API

            /******/
            check: hotCheck,

            /******/
            apply: hotApply,

            /******/
            status: function status(l) {
              /******/
              if (!l) return currentStatus;
              /******/

              registeredStatusHandlers.push(l);
              /******/
            },

            /******/
            addStatusHandler: function addStatusHandler(l) {
              /******/
              registeredStatusHandlers.push(l);
              /******/
            },

            /******/
            removeStatusHandler: function removeStatusHandler(l) {
              /******/
              var idx = registeredStatusHandlers.indexOf(l);
              /******/

              if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
              /******/
            },

            /******/

            /******/
            //inherit from previous dispose call

            /******/
            data: currentModuleData[moduleId]
            /******/

          };
          /******/

          currentChildModule = undefined;
          /******/

          return hot;
          /******/
        }
        /******/

        /******/


        function setStatus(newStatus) {
          /******/
          currentStatus = newStatus;
          /******/

          for (var i = 0; i < registeredStatusHandlers.length; i++) {
            /******/
            registeredStatusHandlers[i].call(null, newStatus);
          }
          /******/

        }
        /******/

        /******/


        function trackBlockingPromise(promise) {
          /******/
          switch (currentStatus) {
            /******/
            case "ready":
              /******/
              setStatus("prepare");
              /******/

              blockingPromises.push(promise);
              /******/

              waitForBlockingPromises(function () {
                /******/
                setStatus("ready");
                /******/
              });
              /******/

              return promise;

            /******/

            case "prepare":
              /******/
              blockingPromises.push(promise);
              /******/

              return promise;

            /******/

            default:
              /******/
              return promise;

            /******/
          }
          /******/

        }
        /******/

        /******/


        function waitForBlockingPromises(fn) {
          /******/
          if (blockingPromises.length === 0) return fn();
          /******/

          var blocker = blockingPromises;
          /******/

          blockingPromises = [];
          /******/

          return Promise.all(blocker).then(function () {
            /******/
            return waitForBlockingPromises(fn);
            /******/
          });
          /******/
        }
        /******/

        /******/


        function hotCheck(applyOnUpdate) {
          /******/
          if (currentStatus !== "idle") {
            /******/
            throw new Error("check() is only allowed in idle status");
            /******/
          }
          /******/


          setStatus("check");
          /******/

          return __nested_webpack_require_56375__.hmrM().then(function (update) {
            /******/
            if (!update) {
              /******/
              setStatus(applyInvalidatedModules() ? "ready" : "idle");
              /******/

              return null;
              /******/
            }
            /******/

            /******/


            setStatus("prepare");
            /******/

            /******/

            var updatedModules = [];
            /******/

            blockingPromises = [];
            /******/

            currentUpdateApplyHandlers = [];
            /******/

            /******/

            return Promise.all(
            /******/
            Object.keys(__nested_webpack_require_56375__.hmrC).reduce(function (
            /******/
            promises,
            /******/
            key
            /******/
            ) {
              /******/
              __nested_webpack_require_56375__.hmrC[key](
              /******/
              update.c,
              /******/
              update.r,
              /******/
              update.m,
              /******/
              promises,
              /******/
              currentUpdateApplyHandlers,
              /******/
              updatedModules
              /******/
              );
              /******/


              return promises;
              /******/
            },
            /******/
            [])
            /******/
            ).then(function () {
              /******/
              return waitForBlockingPromises(function () {
                /******/
                if (applyOnUpdate) {
                  /******/
                  return internalApply(applyOnUpdate);
                  /******/
                } else {
                  /******/
                  setStatus("ready");
                  /******/

                  /******/

                  return updatedModules;
                  /******/
                }
                /******/

              });
              /******/
            });
            /******/
          });
          /******/
        }
        /******/

        /******/


        function hotApply(options) {
          /******/
          if (currentStatus !== "ready") {
            /******/
            return Promise.resolve().then(function () {
              /******/
              throw new Error("apply() is only allowed in ready status");
              /******/
            });
            /******/
          }
          /******/


          return internalApply(options);
          /******/
        }
        /******/

        /******/


        function internalApply(options) {
          /******/
          options = options || {};
          /******/

          /******/

          applyInvalidatedModules();
          /******/

          /******/

          var results = currentUpdateApplyHandlers.map(function (handler) {
            /******/
            return handler(options);
            /******/
          });
          /******/

          currentUpdateApplyHandlers = undefined;
          /******/

          /******/

          var errors = results
          /******/
          .map(function (r) {
            /******/
            return r.error;
            /******/
          })
          /******/
          .filter(Boolean);
          /******/

          /******/

          if (errors.length > 0) {
            /******/
            setStatus("abort");
            /******/

            return Promise.resolve().then(function () {
              /******/
              throw errors[0];
              /******/
            });
            /******/
          }
          /******/

          /******/
          // Now in "dispose" phase

          /******/


          setStatus("dispose");
          /******/

          /******/

          results.forEach(function (result) {
            /******/
            if (result.dispose) result.dispose();
            /******/
          });
          /******/

          /******/
          // Now in "apply" phase

          /******/

          setStatus("apply");
          /******/

          /******/

          var error;
          /******/

          var reportError = function reportError(err) {
            /******/
            if (!error) error = err;
            /******/
          };
          /******/

          /******/


          var outdatedModules = [];
          /******/

          results.forEach(function (result) {
            /******/
            if (result.apply) {
              /******/
              var modules = result.apply(reportError);
              /******/

              if (modules) {
                /******/
                for (var i = 0; i < modules.length; i++) {
                  /******/
                  outdatedModules.push(modules[i]);
                  /******/
                }
                /******/

              }
              /******/

            }
            /******/

          });
          /******/

          /******/
          // handle errors in accept handlers and self accepted module load

          /******/

          if (error) {
            /******/
            setStatus("fail");
            /******/

            return Promise.resolve().then(function () {
              /******/
              throw error;
              /******/
            });
            /******/
          }
          /******/

          /******/


          if (queuedInvalidatedModules) {
            /******/
            return internalApply(options).then(function (list) {
              /******/
              outdatedModules.forEach(function (moduleId) {
                /******/
                if (list.indexOf(moduleId) < 0) list.push(moduleId);
                /******/
              });
              /******/

              return list;
              /******/
            });
            /******/
          }
          /******/

          /******/


          setStatus("idle");
          /******/

          return Promise.resolve(outdatedModules);
          /******/
        }
        /******/

        /******/


        function applyInvalidatedModules() {
          /******/
          if (queuedInvalidatedModules) {
            /******/
            if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
            /******/

            Object.keys(__nested_webpack_require_56375__.hmrI).forEach(function (key) {
              /******/
              queuedInvalidatedModules.forEach(function (moduleId) {
                /******/
                __nested_webpack_require_56375__.hmrI[key](
                /******/
                moduleId,
                /******/
                currentUpdateApplyHandlers
                /******/
                );
                /******/

              });
              /******/
            });
            /******/

            queuedInvalidatedModules = undefined;
            /******/

            return true;
            /******/
          }
          /******/

        }
        /******/

      })();
      /******/

      /******/

      /* webpack/runtime/publicPath */

      /******/


      (function () {
        /******/
        __nested_webpack_require_56375__.p = "";
        /******/
      })();
      /******/

      /******/

      /* webpack/runtime/jsonp chunk loading */

      /******/


      (function () {
        /******/
        // no baseURI

        /******/

        /******/
        // object to store loaded and loading chunks

        /******/
        // undefined = chunk not loaded, null = chunk preloaded/prefetched

        /******/
        // Promise = chunk loading, 0 = chunk loaded

        /******/
        var installedChunks = {
          /******/
          "Icons": 0
          /******/

        };
        /******/

        /******/

        /******/
        // no chunk on demand loading

        /******/

        /******/
        // no prefetching

        /******/

        /******/
        // no preloaded

        /******/

        /******/

        var currentUpdatedModulesList;
        /******/

        var waitingUpdateResolves = {};
        /******/

        function loadUpdateChunk(chunkId) {
          /******/
          return new Promise(function (resolve, reject) {
            /******/
            waitingUpdateResolves[chunkId] = resolve;
            /******/
            // start update chunk loading

            /******/

            var url = __nested_webpack_require_56375__.p + __nested_webpack_require_56375__.hu(chunkId);
            /******/
            // create error before stack unwound to get useful stacktrace later

            /******/


            var error = new Error();
            /******/

            var loadingEnded = function loadingEnded(event) {
              /******/
              if (waitingUpdateResolves[chunkId]) {
                /******/
                waitingUpdateResolves[chunkId] = undefined;
                /******/

                var errorType = event && (event.type === 'load' ? 'missing' : event.type);
                /******/

                var realSrc = event && event.target && event.target.src;
                /******/

                error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
                /******/

                error.name = 'ChunkLoadError';
                /******/

                error.type = errorType;
                /******/

                error.request = realSrc;
                /******/

                reject(error);
                /******/
              }
              /******/

            };
            /******/


            __nested_webpack_require_56375__.l(url, loadingEnded);
            /******/

          });
          /******/
        }
        /******/

        /******/


        self["webpackHotUpdateIcons"] = function (chunkId, moreModules, runtime) {
          /******/
          for (var moduleId in moreModules) {
            /******/
            if (__nested_webpack_require_56375__.o(moreModules, moduleId)) {
              /******/
              currentUpdate[moduleId] = moreModules[moduleId];
              /******/

              if (currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
              /******/
            }
            /******/

          }
          /******/


          if (runtime) currentUpdateRuntime.push(runtime);
          /******/

          if (waitingUpdateResolves[chunkId]) {
            /******/
            waitingUpdateResolves[chunkId]();
            /******/

            waitingUpdateResolves[chunkId] = undefined;
            /******/
          }
          /******/

        };
        /******/

        /******/


        var currentUpdateChunks;
        /******/

        var currentUpdate;
        /******/

        var currentUpdateRemovedChunks;
        /******/

        var currentUpdateRuntime;
        /******/

        function applyHandler(options) {
          /******/
          if (__nested_webpack_require_56375__.f) delete __nested_webpack_require_56375__.f.jsonpHmr;
          /******/

          currentUpdateChunks = undefined;
          /******/

          function getAffectedModuleEffects(updateModuleId) {
            /******/
            var outdatedModules = [updateModuleId];
            /******/

            var outdatedDependencies = {};
            /******/

            /******/

            var queue = outdatedModules.map(function (id) {
              /******/
              return {
                /******/
                chain: [id],

                /******/
                id: id
                /******/

              };
              /******/
            });
            /******/

            while (queue.length > 0) {
              /******/
              var queueItem = queue.pop();
              /******/

              var moduleId = queueItem.id;
              /******/

              var chain = queueItem.chain;
              /******/

              var module = __nested_webpack_require_56375__.c[moduleId];
              /******/

              if (
              /******/
              !module ||
              /******/
              module.hot._selfAccepted && !module.hot._selfInvalidated
              /******/
              )
                /******/
                continue;
              /******/

              if (module.hot._selfDeclined) {
                /******/
                return {
                  /******/
                  type: "self-declined",

                  /******/
                  chain: chain,

                  /******/
                  moduleId: moduleId
                  /******/

                };
                /******/
              }
              /******/


              if (module.hot._main) {
                /******/
                return {
                  /******/
                  type: "unaccepted",

                  /******/
                  chain: chain,

                  /******/
                  moduleId: moduleId
                  /******/

                };
                /******/
              }
              /******/


              for (var i = 0; i < module.parents.length; i++) {
                /******/
                var parentId = module.parents[i];
                /******/

                var parent = __nested_webpack_require_56375__.c[parentId];
                /******/

                if (!parent) continue;
                /******/

                if (parent.hot._declinedDependencies[moduleId]) {
                  /******/
                  return {
                    /******/
                    type: "declined",

                    /******/
                    chain: chain.concat([parentId]),

                    /******/
                    moduleId: moduleId,

                    /******/
                    parentId: parentId
                    /******/

                  };
                  /******/
                }
                /******/


                if (outdatedModules.indexOf(parentId) !== -1) continue;
                /******/

                if (parent.hot._acceptedDependencies[moduleId]) {
                  /******/
                  if (!outdatedDependencies[parentId])
                    /******/
                    outdatedDependencies[parentId] = [];
                  /******/

                  addAllToSet(outdatedDependencies[parentId], [moduleId]);
                  /******/

                  continue;
                  /******/
                }
                /******/


                delete outdatedDependencies[parentId];
                /******/

                outdatedModules.push(parentId);
                /******/

                queue.push({
                  /******/
                  chain: chain.concat([parentId]),

                  /******/
                  id: parentId
                  /******/

                });
                /******/
              }
              /******/

            }
            /******/

            /******/


            return {
              /******/
              type: "accepted",

              /******/
              moduleId: updateModuleId,

              /******/
              outdatedModules: outdatedModules,

              /******/
              outdatedDependencies: outdatedDependencies
              /******/

            };
            /******/
          }
          /******/

          /******/


          function addAllToSet(a, b) {
            /******/
            for (var i = 0; i < b.length; i++) {
              /******/
              var item = b[i];
              /******/

              if (a.indexOf(item) === -1) a.push(item);
              /******/
            }
            /******/

          }
          /******/

          /******/
          // at begin all updates modules are outdated

          /******/
          // the "outdated" status can propagate to parents if they don't accept the children

          /******/


          var outdatedDependencies = {};
          /******/

          var outdatedModules = [];
          /******/

          var appliedUpdate = {};
          /******/

          /******/

          var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
            /******/
            console.warn(
            /******/
            "[HMR] unexpected require(" + module.id + ") to disposed module"
            /******/
            );
            /******/
          };
          /******/

          /******/


          for (var moduleId in currentUpdate) {
            /******/
            if (__nested_webpack_require_56375__.o(currentUpdate, moduleId)) {
              /******/
              var newModuleFactory = currentUpdate[moduleId];
              /******/

              /** @type {TODO} */

              /******/

              var result;
              /******/

              if (newModuleFactory) {
                /******/
                result = getAffectedModuleEffects(moduleId);
                /******/
              } else {
                /******/
                result = {
                  /******/
                  type: "disposed",

                  /******/
                  moduleId: moduleId
                  /******/

                };
                /******/
              }
              /******/

              /** @type {Error|false} */

              /******/


              var abortError = false;
              /******/

              var doApply = false;
              /******/

              var doDispose = false;
              /******/

              var chainInfo = "";
              /******/

              if (result.chain) {
                /******/
                chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
                /******/
              }
              /******/


              switch (result.type) {
                /******/
                case "self-declined":
                  /******/
                  if (options.onDeclined) options.onDeclined(result);
                  /******/

                  if (!options.ignoreDeclined)
                    /******/
                    abortError = new Error(
                    /******/
                    "Aborted because of self decline: " +
                    /******/
                    result.moduleId +
                    /******/
                    chainInfo
                    /******/
                    );
                  /******/

                  break;

                /******/

                case "declined":
                  /******/
                  if (options.onDeclined) options.onDeclined(result);
                  /******/

                  if (!options.ignoreDeclined)
                    /******/
                    abortError = new Error(
                    /******/
                    "Aborted because of declined dependency: " +
                    /******/
                    result.moduleId +
                    /******/
                    " in " +
                    /******/
                    result.parentId +
                    /******/
                    chainInfo
                    /******/
                    );
                  /******/

                  break;

                /******/

                case "unaccepted":
                  /******/
                  if (options.onUnaccepted) options.onUnaccepted(result);
                  /******/

                  if (!options.ignoreUnaccepted)
                    /******/
                    abortError = new Error(
                    /******/
                    "Aborted because " + moduleId + " is not accepted" + chainInfo
                    /******/
                    );
                  /******/

                  break;

                /******/

                case "accepted":
                  /******/
                  if (options.onAccepted) options.onAccepted(result);
                  /******/

                  doApply = true;
                  /******/

                  break;

                /******/

                case "disposed":
                  /******/
                  if (options.onDisposed) options.onDisposed(result);
                  /******/

                  doDispose = true;
                  /******/

                  break;

                /******/

                default:
                  /******/
                  throw new Error("Unexception type " + result.type);

                /******/
              }
              /******/


              if (abortError) {
                /******/
                return {
                  /******/
                  error: abortError
                  /******/

                };
                /******/
              }
              /******/


              if (doApply) {
                /******/
                appliedUpdate[moduleId] = newModuleFactory;
                /******/

                addAllToSet(outdatedModules, result.outdatedModules);
                /******/

                for (moduleId in result.outdatedDependencies) {
                  /******/
                  if (__nested_webpack_require_56375__.o(result.outdatedDependencies, moduleId)) {
                    /******/
                    if (!outdatedDependencies[moduleId])
                      /******/
                      outdatedDependencies[moduleId] = [];
                    /******/

                    addAllToSet(
                    /******/
                    outdatedDependencies[moduleId],
                    /******/
                    result.outdatedDependencies[moduleId]
                    /******/
                    );
                    /******/
                  }
                  /******/

                }
                /******/

              }
              /******/


              if (doDispose) {
                /******/
                addAllToSet(outdatedModules, [result.moduleId]);
                /******/

                appliedUpdate[moduleId] = warnUnexpectedRequire;
                /******/
              }
              /******/

            }
            /******/

          }
          /******/


          currentUpdate = undefined;
          /******/

          /******/
          // Store self accepted outdated modules to require them later by the module system

          /******/

          var outdatedSelfAcceptedModules = [];
          /******/

          for (var j = 0; j < outdatedModules.length; j++) {
            /******/
            var outdatedModuleId = outdatedModules[j];
            /******/

            if (
            /******/
            __nested_webpack_require_56375__.c[outdatedModuleId] &&
            /******/
            __nested_webpack_require_56375__.c[outdatedModuleId].hot._selfAccepted &&
            /******/
            // removed self-accepted modules should not be required

            /******/
            appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
            /******/
            // when called invalidate self-accepting is not possible

            /******/
            !__nested_webpack_require_56375__.c[outdatedModuleId].hot._selfInvalidated
            /******/
            ) {
                /******/
                outdatedSelfAcceptedModules.push({
                  /******/
                  module: outdatedModuleId,

                  /******/
                  require: __nested_webpack_require_56375__.c[outdatedModuleId].hot._requireSelf,

                  /******/
                  errorHandler: __nested_webpack_require_56375__.c[outdatedModuleId].hot._selfAccepted
                  /******/

                });
                /******/
              }
            /******/

          }
          /******/

          /******/


          var moduleOutdatedDependencies;
          /******/

          /******/

          return {
            /******/
            dispose: function dispose() {
              /******/
              currentUpdateRemovedChunks.forEach(function (chunkId) {
                /******/
                delete installedChunks[chunkId];
                /******/
              });
              /******/

              currentUpdateRemovedChunks = undefined;
              /******/

              /******/

              var idx;
              /******/

              var queue = outdatedModules.slice();
              /******/

              while (queue.length > 0) {
                /******/
                var moduleId = queue.pop();
                /******/

                var module = __nested_webpack_require_56375__.c[moduleId];
                /******/

                if (!module) continue;
                /******/

                /******/

                var data = {};
                /******/

                /******/
                // Call dispose handlers

                /******/

                var disposeHandlers = module.hot._disposeHandlers;
                /******/

                for (j = 0; j < disposeHandlers.length; j++) {
                  /******/
                  disposeHandlers[j].call(null, data);
                  /******/
                }
                /******/


                __nested_webpack_require_56375__.hmrD[moduleId] = data;
                /******/

                /******/
                // disable module (this disables requires from this module)

                /******/

                module.hot.active = false;
                /******/

                /******/
                // remove module from cache

                /******/

                delete __nested_webpack_require_56375__.c[moduleId];
                /******/

                /******/
                // when disposing there is no need to call dispose handler

                /******/

                delete outdatedDependencies[moduleId];
                /******/

                /******/
                // remove "parents" references from all children

                /******/

                for (j = 0; j < module.children.length; j++) {
                  /******/
                  var child = __nested_webpack_require_56375__.c[module.children[j]];
                  /******/

                  if (!child) continue;
                  /******/

                  idx = child.parents.indexOf(moduleId);
                  /******/

                  if (idx >= 0) {
                    /******/
                    child.parents.splice(idx, 1);
                    /******/
                  }
                  /******/

                }
                /******/

              }
              /******/

              /******/
              // remove outdated dependency from module children

              /******/


              var dependency;
              /******/

              for (var outdatedModuleId in outdatedDependencies) {
                /******/
                if (__nested_webpack_require_56375__.o(outdatedDependencies, outdatedModuleId)) {
                  /******/
                  module = __nested_webpack_require_56375__.c[outdatedModuleId];
                  /******/

                  if (module) {
                    /******/
                    moduleOutdatedDependencies =
                    /******/
                    outdatedDependencies[outdatedModuleId];
                    /******/

                    for (j = 0; j < moduleOutdatedDependencies.length; j++) {
                      /******/
                      dependency = moduleOutdatedDependencies[j];
                      /******/

                      idx = module.children.indexOf(dependency);
                      /******/

                      if (idx >= 0) module.children.splice(idx, 1);
                      /******/
                    }
                    /******/

                  }
                  /******/

                }
                /******/

              }
              /******/

            },

            /******/
            apply: function apply(reportError) {
              /******/
              // insert new code

              /******/
              for (var updateModuleId in appliedUpdate) {
                /******/
                if (__nested_webpack_require_56375__.o(appliedUpdate, updateModuleId)) {
                  /******/
                  __nested_webpack_require_56375__.m[updateModuleId] = appliedUpdate[updateModuleId];
                  /******/
                }
                /******/

              }
              /******/

              /******/
              // run new runtime modules

              /******/


              for (var i = 0; i < currentUpdateRuntime.length; i++) {
                /******/
                currentUpdateRuntime[i](__nested_webpack_require_56375__);
                /******/
              }
              /******/

              /******/
              // call accept handlers

              /******/


              for (var outdatedModuleId in outdatedDependencies) {
                /******/
                if (__nested_webpack_require_56375__.o(outdatedDependencies, outdatedModuleId)) {
                  /******/
                  var module = __nested_webpack_require_56375__.c[outdatedModuleId];
                  /******/

                  if (module) {
                    /******/
                    moduleOutdatedDependencies =
                    /******/
                    outdatedDependencies[outdatedModuleId];
                    /******/

                    var callbacks = [];
                    /******/

                    var dependenciesForCallbacks = [];
                    /******/

                    for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
                      /******/
                      var dependency = moduleOutdatedDependencies[j];
                      /******/

                      var acceptCallback =
                      /******/
                      module.hot._acceptedDependencies[dependency];
                      /******/

                      if (acceptCallback) {
                        /******/
                        if (callbacks.indexOf(acceptCallback) !== -1) continue;
                        /******/

                        callbacks.push(acceptCallback);
                        /******/

                        dependenciesForCallbacks.push(dependency);
                        /******/
                      }
                      /******/

                    }
                    /******/


                    for (var k = 0; k < callbacks.length; k++) {
                      /******/
                      try {
                        /******/
                        callbacks[k].call(null, moduleOutdatedDependencies);
                        /******/
                      } catch (err) {
                        /******/
                        if (options.onErrored) {
                          /******/
                          options.onErrored({
                            /******/
                            type: "accept-errored",

                            /******/
                            moduleId: outdatedModuleId,

                            /******/
                            dependencyId: dependenciesForCallbacks[k],

                            /******/
                            error: err
                            /******/

                          });
                          /******/
                        }
                        /******/


                        if (!options.ignoreErrored) {
                          /******/
                          reportError(err);
                          /******/
                        }
                        /******/

                      }
                      /******/

                    }
                    /******/

                  }
                  /******/

                }
                /******/

              }
              /******/

              /******/
              // Load self accepted modules

              /******/


              for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
                /******/
                var item = outdatedSelfAcceptedModules[o];
                /******/

                var moduleId = item.module;
                /******/

                try {
                  /******/
                  item.require(moduleId);
                  /******/

                } catch (err) {
                  /******/
                  if (typeof item.errorHandler === "function") {
                    /******/
                    try {
                      /******/
                      item.errorHandler(err);
                      /******/
                    } catch (err2) {
                      /******/
                      if (options.onErrored) {
                        /******/
                        options.onErrored({
                          /******/
                          type: "self-accept-error-handler-errored",

                          /******/
                          moduleId: moduleId,

                          /******/
                          error: err2,

                          /******/
                          originalError: err
                          /******/

                        });
                        /******/
                      }
                      /******/


                      if (!options.ignoreErrored) {
                        /******/
                        reportError(err2);
                        /******/
                      }
                      /******/


                      reportError(err);
                      /******/
                    }
                    /******/

                  } else {
                    /******/
                    if (options.onErrored) {
                      /******/
                      options.onErrored({
                        /******/
                        type: "self-accept-errored",

                        /******/
                        moduleId: moduleId,

                        /******/
                        error: err
                        /******/

                      });
                      /******/
                    }
                    /******/


                    if (!options.ignoreErrored) {
                      /******/
                      reportError(err);
                      /******/
                    }
                    /******/

                  }
                  /******/

                }
                /******/

              }
              /******/

              /******/


              return outdatedModules;
              /******/
            }
            /******/

          };
          /******/
        }
        /******/


        __nested_webpack_require_56375__.hmrI.jsonp = function (moduleId, applyHandlers) {
          /******/
          if (!currentUpdate) {
            /******/
            currentUpdate = {};
            /******/

            currentUpdateRuntime = [];
            /******/

            currentUpdateRemovedChunks = [];
            /******/

            applyHandlers.push(applyHandler);
            /******/
          }
          /******/


          if (!__nested_webpack_require_56375__.o(currentUpdate, moduleId)) {
            /******/
            currentUpdate[moduleId] = __nested_webpack_require_56375__.m[moduleId];
            /******/
          }
          /******/

        };
        /******/


        __nested_webpack_require_56375__.hmrC.jsonp = function (
        /******/
        chunkIds,
        /******/
        removedChunks,
        /******/
        removedModules,
        /******/
        promises,
        /******/
        applyHandlers,
        /******/
        updatedModulesList
        /******/
        ) {
          /******/
          applyHandlers.push(applyHandler);
          /******/

          currentUpdateChunks = {};
          /******/

          currentUpdateRemovedChunks = removedChunks;
          /******/

          currentUpdate = removedModules.reduce(function (obj, key) {
            /******/
            obj[key] = false;
            /******/

            return obj;
            /******/
          }, {});
          /******/

          currentUpdateRuntime = [];
          /******/

          chunkIds.forEach(function (chunkId) {
            /******/
            if (
            /******/
            __nested_webpack_require_56375__.o(installedChunks, chunkId) &&
            /******/
            installedChunks[chunkId] !== undefined
            /******/
            ) {
                /******/
                promises.push(loadUpdateChunk(chunkId, updatedModulesList));
                /******/

                currentUpdateChunks[chunkId] = true;
                /******/
              }
            /******/

          });
          /******/

          if (__nested_webpack_require_56375__.f) {
            /******/
            __nested_webpack_require_56375__.f.jsonpHmr = function (chunkId, promises) {
              /******/
              if (
              /******/
              currentUpdateChunks &&
              /******/
              !__nested_webpack_require_56375__.o(currentUpdateChunks, chunkId) &&
              /******/
              __nested_webpack_require_56375__.o(installedChunks, chunkId) &&
              /******/
              installedChunks[chunkId] !== undefined
              /******/
              ) {
                  /******/
                  promises.push(loadUpdateChunk(chunkId));
                  /******/

                  currentUpdateChunks[chunkId] = true;
                  /******/
                }
              /******/

            };
            /******/

          }
          /******/

        };
        /******/

        /******/


        __nested_webpack_require_56375__.hmrM = function () {
          /******/
          if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
          /******/

          return fetch(__nested_webpack_require_56375__.p + __nested_webpack_require_56375__.hmrF()).then(function (response) {
            /******/
            if (response.status === 404) return; // no update available

            /******/

            if (!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
            /******/

            return response.json();
            /******/
          });
          /******/
        };
        /******/

        /******/
        // no deferred startup

        /******/

        /******/
        // no jsonp function

        /******/

        /******/
        // no deferred startup

        /******/

      })();
      /******/

      /************************************************************************/

      /******/

      /******/
      // module cache are used so entry inlining is disabled

      /******/
      // startup

      /******/
      // Load entry module and return exports

      /******/


      var __webpack_exports__ = __nested_webpack_require_56375__("./src/icons.js");
      /******/


      __webpack_exports__ = __webpack_exports__["default"];
      /******/

      /******/

      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ "../resizer-cl/src/Options.js":
/*!************************************!*\
  !*** ../resizer-cl/src/Options.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Options": () => (/* binding */ Options)
/* harmony export */ });
/**
 * Various interface options we can select
 */

/**
 * Interface options.
 * @param options User provided options that override the default values.
 * @constructor
 */
function Options(options) {
  options = options ? options : {}; /// Options: vertical, horizontal, both

  this.resize = 'vertical'; /// The resizing handle

  this.handle = 'bar'; /// Range for grabbing

  this.grabSize = 10; /// Maximum speed we can resize in pixels per second

  this.maxSpeed = 1000; /// Use a mask (useful for iframes

  this.useMask = true;

  for (var property in options) {
    if (options.hasOwnProperty(property)) {
      if (!this.hasOwnProperty(property)) {
        throw new Error("Invalid option " + property);
      }

      this[property] = options[property];
    }
  }
}

/***/ }),

/***/ "../resizer-cl/src/app.modules.js":
/*!****************************************!*\
  !*** ../resizer-cl/src/app.modules.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _resizer_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _resizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resizer.js */ "../resizer-cl/src/resizer.js");



/***/ }),

/***/ "../resizer-cl/src/resizer-actual.js":
/*!*******************************************!*\
  !*** ../resizer-cl/src/resizer-actual.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizerActual": () => (/* binding */ ResizerActual)
/* harmony export */ });
function ResizerActual(element, options) {
  element.classList.add('resizer'); // Timeout period for animated resizing

  var timeoutPeriod = 20; //
  // Handle options
  //

  var grabSize = options.grabSize;
  var handle = options.handle;

  if (handle === 'bar') {
    element.style.resize = 'none';
    element.style.borderBottom = grabSize + 'px solid #18453B';
  } else if (handle === 'handle') {
    element.style.resize = 'vertical';
  } else if (handle === 'none') {} else {
    element.style.resize = 'none';
    element.style.borderBottom = handle;
  } /// Are mouse move event handlers installed?


  var installedMouseListeners = false; /// Are touch move event handlers installed?

  var installedTouchListeners = false;
  var mask = null; /// Get the minimum height and width properties

  var rect = element.getBoundingClientRect();
  var height = rect.height;
  var width = rect.width;
  var minHeight = getComputedStyle(element).minHeight;
  minHeight = minHeight.substr(0, minHeight.length - 2);
  var minWidth = getComputedStyle(element).minWidth;
  minWidth = minWidth.substr(0, minWidth.length - 2);
  var timer = null;
  var targetWidth = null;
  var targetHeight = null;

  function start() {
    // Install the mouse down and touch start listeners
    element.addEventListener('mousedown', mouseDownListener);
    element.addEventListener('touchstart', touchStartListener); // Install the cursor listener
    // This swaps the cursor when we hover the mouse over the grab bar

    element.addEventListener('mousemove', cursorListener);
  }

  function setTarget(tw, th) {
    targetWidth = tw;
    targetHeight = th; // If a timer is not active, create one.

    if (timer === null) {
      timerMover();
    }
  }

  function timerMover() {
    timer = null;
    var maxPixels = options.maxSpeed * timeoutPeriod / 1000;

    if (targetHeight !== null) {
      var currentHeight = +height;
      var diff = targetHeight - currentHeight;

      if (Math.abs(diff) > maxPixels) {
        diff = diff < 0 ? -maxPixels : maxPixels;
        height = currentHeight + diff;
        element.style.height = '' + height + 'px';
      } else {
        // Not rate limited
        height = targetHeight;
        element.style.height = '' + height + 'px';
        targetHeight = null;
      }
    }

    if (targetWidth !== null) {
      var currentWidth = +width;

      var _diff = targetWidth - currentWidth;

      if (Math.abs(_diff) > maxPixels) {
        _diff = _diff < 0 ? -maxPixels : maxPixels;
        width = currentWidth + _diff;
        element.style.width = '' + width + 'px';
      } else {
        // Not rate limited
        width = targetWidth;
        element.style.width = '' + width + 'px';
        targetWidth = null;
      }
    }

    if (targetHeight !== null || targetWidth !== null) {
      timer = setTimeout(timerMover, timeoutPeriod);
    }
  }

  var initialX, initialY;
  var initialWidth, initialHeight;
  var grabType = null;
  /**
   * Start the resizing on a mouse down or touch
   * @param x Mouse or touch X in pixels
   * @param y Mouse or touch Y in pixels
   */

  function moveStart(x, y) {
    initialX = x;
    initialY = y;
    var rect = element.getBoundingClientRect();
    width = +element.clientWidth;
    initialWidth = width;
    height = +element.clientHeight;
    initialHeight = height;
    targetWidth = null;
    targetHeight = null;
  }
  /**
   * Handle a mouse or finger move to a new position,
   * resulting in a resize request.
   * @param x Mouse or touch X in pixels
   * @param y Mouse or touch Y in pixels
   */


  function moveTo(x, y) {
    var dx = x - initialX;
    var dy = y - initialY;
    var newWidth = null;
    var newHeight = null;

    if (grabType === 'horizontal' || grabType === 'both') {
      // Compute a desired new width
      newWidth = initialWidth + dx;

      if (newWidth < minWidth) {
        newWidth = minWidth;
      }
    }

    if (grabType === 'vertical' || grabType === 'both') {
      var wasHeight = element.offsetHeight; // Compute a desired new height

      newHeight = initialHeight + dy;

      if (newHeight < minHeight) {
        newHeight = minHeight;
      }
    }

    setTarget(newWidth, newHeight);
  } //
  // Mouse Handling
  //


  function mouseDownListener(e) {
    var x = e.pageX;
    var y = e.pageY;
    grabType = onHandle(x, y, false);

    if (grabType !== null) {
      e.stopPropagation();
      e.preventDefault();
      moveStart(x, y);
      installMask();
      installMouseHandlers();
    }
  }

  function mouseMoveListener(e) {
    e.stopPropagation();
    e.preventDefault();

    if (e.buttons !== 1) {
      removeAll();
      return;
    }

    moveTo(e.pageX, e.pageY);
  }

  function mouseUpListener(e) {
    removeAll();
  }

  function installMouseHandlers() {
    removeHandlers();
    installedMouseListeners = true;
    document.addEventListener('mousemove', mouseMoveListener, false);
    document.addEventListener('mouseup', mouseUpListener, false);
  } //
  // Touch Handling
  //


  function touchStartListener(e) {
    var x = e.touches[0].pageX;
    var y = e.touches[0].pageY;
    grabType = onHandle(x, y, true);

    if (grabType !== null) {
      e.stopPropagation();
      e.preventDefault();
      moveStart(x, y);
      installMask();
      installTouchHandlers();
    }
  }

  function touchMoveListener(e) {
    e.stopPropagation(); //e.preventDefault();

    var x = e.touches[0].pageX;
    var y = e.touches[0].pageY;
    moveTo(x, y);
  }

  function touchEndListener(e) {
    removeAll();
  }

  function installTouchHandlers() {
    removeHandlers();
    installedTouchListeners = true;
    document.addEventListener('touchmove', touchMoveListener);
    document.addEventListener('touchend', touchEndListener);
    document.addEventListener('touchcancel', touchEndListener);
  } //
  // Mask
  //


  function installMask() {
    if (!options.useMask) {
      return;
    } // Ensure none currently exists


    removeMask();
    var body = document.querySelector('body');
    mask = document.createElement('div');
    mask.style.position = 'fixed';
    mask.style.left = 0;
    mask.style.top = 0;
    mask.style.width = "100%";
    mask.style.height = '100%';
    mask.style.backgroundColor = 'transparent';
    mask.style.zIndex = 10000;
    mask.style.opacity = 0.5;
    mask.style.cursor = 'pointer';
    body.appendChild(mask);
  }

  function removeAll() {
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }

    removeHandlers();
    removeMask();
  }

  function removeHandlers() {
    if (installedMouseListeners) {
      document.removeEventListener('mousemove', mouseMoveListener);
      document.removeEventListener('mouseup', mouseUpListener);
      installedMouseListeners = false;
    }

    if (installedTouchListeners) {
      document.removeEventListener('touchmove', touchMoveListener);
      document.removeEventListener('touchend', touchEndListener);
      document.removeEventListener('touchcancel', touchEndListener);
      installedTouchListeners = false;
    }
  }

  function removeMask() {
    if (mask !== null) {
      var body = document.querySelector('body');
      body.removeChild(mask);
      mask = null;
    }
  }
  /**
   * Determine if an x,y location is over a handle for manipulating
   * the resizeable object.
   * @param x location in pixels
   * @param y location in pixels
   * @returns string|null if not, 'horizontal', 'vertical', 'both' if over handle and mode available.
   */


  function onHandle(x, y, touch) {
    var rect = element.getBoundingClientRect();
    var slop = touch ? 10 : 0;
    var bottom = rect.bottom + window.pageYOffset;
    var vert = y >= bottom - grabSize - slop;
    var right = rect.right + window.pageXOffset;
    var horz = x >= right - grabSize - slop;

    if (options.resize === 'both') {
      if (vert && horz) {
        return 'both';
      }

      if (vert) {
        return 'vertical';
      }

      if (horz) {
        return 'horizontal';
      }
    }

    if ((options.resize === 'both' || options.resize === 'vertical') && vert) {
      return 'vertical';
    }

    if ((options.resize === 'both' || options.resize === 'horizontal') && horz) {
      return 'horizontal';
    }

    return null;
  }

  var cursor = 0;

  function cursorListener(event) {
    // Swap the cursor when we are over the handle
    if (onHandle(event.pageX, event.pageY, false) !== null) {
      if (cursor !== 2) {
        element.style.cursor = 'pointer';
        cursor = 2;
      }
    } else {
      if (cursor !== 1) {
        element.style.cursor = 'text';
        cursor = 1;
      }
    }
  }

  start();
}

/***/ }),

/***/ "../resizer-cl/src/resizer.js":
/*!************************************!*\
  !*** ../resizer-cl/src/resizer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Resizer": () => (/* binding */ Resizer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resizer_actual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resizer-actual */ "../resizer-cl/src/resizer-actual.js");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options */ "../resizer-cl/src/Options.js");
/**
 * Vertical resize support for div, textarea, iframe, etc.
 *
 * A problem with the resize feature of textarea and iframe is that it does not work in all
 * browsers (especially Edge) and is often quite quirky. This small package allows you to
 * add vertical resize ability to just about anything.
 *
 * @version 2.4.0 Added touch support. Limited speed of resizing to avoid issue when scrolling.
 */


/**
 * Constructor for a Resizer object
 * @param sel Selector or DOM element
 * @param options Options object.
 * @constructor
 */

function Resizer(sel, options) {
  options = new _Options__WEBPACK_IMPORTED_MODULE_1__.Options(options);

  if (typeof sel === "string") {
    var elements = document.querySelectorAll(sel);

    for (var i = 0; i < elements.length; i++) {
      new _resizer_actual__WEBPACK_IMPORTED_MODULE_0__.ResizerActual(elements[i], options);
    }
  } else if (sel.nodeType) {
    new _resizer_actual__WEBPACK_IMPORTED_MODULE_0__.ResizerActual(sel, options);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Resizer);

/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/_dialog.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/_dialog.scss ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div.dialog-cl {\n  box-sizing: border-box;\n  position: fixed;\n  border: 1px solid #444444;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  cursor: default;\n  top: 0;\n  width: 350px;\n  min-width: 150px;\n  max-width: 500px;\n  height: auto;\n  min-height: 150px;\n  max-height: 600px; }\n\ndiv.cl-dialog-bottom {\n  box-sizing: border-box;\n  flex: 0 0 44px;\n  width: 100%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n  text-align: right;\n  border-top: 1px solid #cccccc;\n  cursor: default; }\n\ndiv.dialog-cl-body {\n  flex: 0 1 auto;\n  width: 100%;\n  overflow-y: auto;\n  background-color: white;\n  padding: 0; }\n  div.dialog-cl-body p:first-child, div.dialog-cl-body h1:first-child, div.dialog-cl-body h2:first-child {\n    margin-top: 0; }\n  div.dialog-cl-body p:last-child {\n    margin-bottom: 0; }\n\ndiv.cl-dialog-bottom button {\n  display: inline-block;\n  min-width: 7em;\n  margin: 10px 10px 10px 0;\n  padding: 3px 10px;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  font-size: 0.8em;\n  font-weight: bold;\n  border: 1px solid #999;\n  border-radius: 1px;\n  box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.1), inset 0 -10px 20px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  color: #444;\n  background: #fff; }\n\ndiv.cl-dialog-bottom button:active {\n  box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.1), inset 0 10px 20px rgba(0, 0, 0, 0.1); }\n\ndiv.cl-dialog-bottom button:disabled,\ndiv.cl-dialog-bottom button[disabled] {\n  color: #ccc; }\n\ndiv.dialog-cl-top {\n  box-sizing: border-box;\n  background-color: #009688;\n  margin: 0;\n  padding: 0;\n  flex: 0 0 25px;\n  cursor: default;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap; }\n  div.dialog-cl-top h1 {\n    flex-grow: 1;\n    margin: 0;\n    padding: 4px 4px 0 10px;\n    font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n    font-size: 16px;\n    line-height: 16px;\n    user-select: none; }\n  div.dialog-cl-top button.dialog-cl-tb-button {\n    flex: 0 0 25px;\n    position: relative;\n    box-sizing: border-box;\n    height: 25px;\n    width: 25px;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: transparent;\n    outline: none; }\n    div.dialog-cl-top button.dialog-cl-tb-button span {\n      position: absolute;\n      left: 4px;\n      top: 4px; }\n  div.dialog-cl-top .dialog-cl-tb-button:hover {\n    background-color: #e81123;\n    cursor: pointer; }\n\ndiv.dialog-cl div.message-cl {\n  font-size: 1.25em;\n  padding: 1em; }\n\ndiv.dialog-cl-column {\n  text-align: center; }\n  div.dialog-cl-column > div {\n    display: inline-block;\n    padding: 1.5em 0 2.0em 0; }\n  div.dialog-cl-column select {\n    width: 100%; }\n", "",{"version":3,"sources":["webpack://./sass/partials/_dialog.scss","webpack://./sass/partials/_bottom.scss","webpack://./sass/partials/_body.scss","webpack://./sass/partials/_buttons.scss","webpack://./sass/partials/_titlebar.scss","webpack://./sass/partials/_messagebox.scss","webpack://./sass/partials/_column.scss"],"names":[],"mappings":"AAAA;EACI,sBAAsB;EACtB,eAAe;EACf,yBAAyB;EACzB,uBAAuB;EACvB,SAAS;EACT,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,eAAe;EACf,MAAM;EAEN,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,iBAAiB,EAAA;;AClBrB;EACE,sBAAsB;EACtB,cAAc;EACd,WAAW;EACX,uBAAuB;EACvB,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,6BAA6B;EAC7B,eAAe,EAAA;;ACTjB;EACE,cAAc;EACd,WAAW;EACX,gBAAgB;EAChB,uBAAuB;EACvB,UAAU,EAAA;EALZ;IAQI,aAAa,EAAA;EARjB;IAYI,gBAAgB,EAAA;;ACVpB;EAEI,qBAAqB;EACrB,cALc;EAMd,wBAAwB;EACxB,iBAAiB;EACjB,kDAAkD;EAClD,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;EACtB,kBAAkB;EAClB,wFAAgF;EAChF,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,gBAAgB,EAAA;;AAhBpB;EAoBI,uFAA+E,EAAA;;AApBnF;;EAyBI,WAAW,EAAA;;AC3Bf;EACE,sBAAsB;EACtB,yBAAyB;EACzB,SAAS;EACT,UAAU;EACV,cAAc;EACd,eAAe;EAEf,aAAa;EACb,mBAAmB;EACnB,iBAAiB,EAAA;EAVnB;IAaI,YAAY;IAEZ,SAAS;IACT,uBAAuB;IACvB,kDAAkD;IAClD,eAAe;IACf,iBAAiB;IACjB,iBAAiB,EAAA;EApBrB;IAyBI,cAAc;IAEd,kBAAkB;IAClB,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,SAAS;IACT,UAAU;IACV,SAAS;IACT,uBAAuB;IACvB,aAAa,EAAA;IAnCjB;MAsCM,kBAAkB;MAClB,SAAS;MACT,QAAQ,EAAA;EAxCd;IA6CI,yBAAyB;IACzB,eAAe,EAAA;;AC9CnB;EAEI,iBAAiB;EAEjB,YAAY,EAAA;;ACAhB;EACE,kBAAkB,EAAA;EADpB;IAII,qBAAqB;IACrB,wBAAwB,EAAA;EAL5B;IASI,WAAW,EAAA","sourcesContent":["div.dialog-cl {\r\n    box-sizing: border-box;\r\n    position: fixed;\r\n    border: 1px solid #444444;\r\n    background-color: white;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    cursor: default;\r\n    top: 0;\r\n\r\n    width: 350px;\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    height: auto;\r\n    min-height: 150px;\r\n    max-height: 600px;\r\n}\r\n\r\n","div.cl-dialog-bottom {\r\n  box-sizing: border-box;\r\n  flex: 0 0 44px;\r\n  width: 100%;\r\n  background-color: white; // #eeeeee;\r\n  margin: 0;\r\n  padding: 0;\r\n  text-align: right;\r\n  border-top: 1px solid #cccccc;\r\n  cursor: default;\r\n}\r\n","div.dialog-cl-body {\r\n  flex: 0 1 auto;\r\n  width: 100%;\r\n  overflow-y: auto;\r\n  background-color: white;\r\n  padding: 0;\r\n\r\n  p:first-child, h1:first-child, h2:first-child {\r\n    margin-top: 0;\r\n  }\r\n\r\n  p:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n","$button-width: 7em;\r\n\r\ndiv.cl-dialog-bottom {\r\n  button {\r\n    display: inline-block;\r\n    min-width: $button-width;\r\n    margin: 10px 10px 10px 0;\r\n    padding: 3px 10px;\r\n    font-family: \"Trebuchet MS\", Helvetica, sans-serif;\r\n    font-size: 0.8em;\r\n    font-weight: bold;\r\n    border: 1px solid #999;\r\n    border-radius: 1px;\r\n    box-shadow: inset 0 -1px 0 1px rgba(0,0,0,.1), inset 0 -10px 20px rgba(0,0,0,.1);\r\n    cursor: pointer;\r\n    text-align: center;\r\n    outline: none;\r\n    color: #444;\r\n    background: #fff;\r\n  }\r\n\r\n  button:active {\r\n    box-shadow: inset 0 -1px 0 1px rgba(0,0,0,.1), inset 0 10px 20px rgba(0,0,0,.1);\r\n  }\r\n\r\n  button:disabled,\r\n  button[disabled] {\r\n    color: #ccc;\r\n  }\r\n}\r\n\r\n","div.dialog-cl-top {\r\n  box-sizing: border-box;\r\n  background-color: #009688;\r\n  margin: 0;\r\n  padding: 0;\r\n  flex: 0 0 25px;\r\n  cursor: default;\r\n\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n\r\n  h1 {\r\n    flex-grow: 1;\r\n\r\n    margin: 0;\r\n    padding: 4px 4px 0 10px;\r\n    font-family: \"Trebuchet MS\", Helvetica, sans-serif;\r\n    font-size: 16px;\r\n    line-height: 16px;\r\n    user-select: none;\r\n  }\r\n\r\n  // Title bar buttons\r\n  button.dialog-cl-tb-button {\r\n    flex: 0 0 25px;\r\n\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    height: 25px;\r\n    width: 25px;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    background: transparent;\r\n    outline: none;\r\n\r\n    span {\r\n      position: absolute;\r\n      left: 4px;\r\n      top: 4px;\r\n    }\r\n  }\r\n\r\n  .dialog-cl-tb-button:hover {\r\n    background-color: #e81123;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n\r\n}\r\n\r\n","div.dialog-cl {\r\n  div.message-cl {\r\n    font-size: 1.25em;\r\n\r\n    padding: 1em;\r\n  }\r\n}","//\r\n// Standard dialog box style: single column of controls\r\n//\r\n\r\ndiv.dialog-cl-column {\r\n  text-align: center;\r\n\r\n  >div {\r\n    display: inline-block;\r\n    padding: 1.5em 0 2.0em 0;\r\n  }\r\n\r\n  select {\r\n    width: 100%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/_dialog.scss":
/*!**************************!*\
  !*** ./src/_dialog.scss ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./_dialog.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/_dialog.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./_dialog.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/_dialog.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./_dialog.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/_dialog.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("Dialog." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("d6244cbeac1c5f579527")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "Dialog:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"Dialog": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateDialog"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__webpack_require__.c[outdatedModuleId] &&
/******/ 					__webpack_require__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__webpack_require__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __webpack_require__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __webpack_require__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// no jsonp function
/******/ 		
/******/ 		// no deferred startup
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.modules.js");
/******/ 	__webpack_exports__ = __webpack_exports__.default;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RpYWxvZy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL0JvZHkuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL0JvdHRvbS5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9zcmMvRE9NL1Rvb2xzLmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9EaWFsb2cuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL01hc2suanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL01lc3NhZ2VCb3guanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL1RpdGxlQmFyLmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9hcHAubW9kdWxlcy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvSWNvbnMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RpYWxvZy9JY29ucy9zcmMvaWNvbnMuc2NzcyIsIndlYnBhY2s6Ly9EaWFsb2cvSWNvbnMvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvSWNvbnMvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nL0ljb25zL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nL0ljb25zL3NyYy9pY29ucy5zY3NzP2FjNGQiLCJ3ZWJwYWNrOi8vRGlhbG9nL0ljb25zL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvSWNvbnMvc3JjL2ltYWdlcy9pY29ucy5wbmciLCJ3ZWJwYWNrOi8vRGlhbG9nL0ljb25zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrOi9JY29ucy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjazovSWNvbnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrOi9JY29ucy93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgdXBkYXRlIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrOi9JY29ucy93ZWJwYWNrL3J1bnRpbWUvZ2V0IHVwZGF0ZSBtYW5pZmVzdCBmaWxlbmFtZSIsIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjazovSWNvbnMvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrOi9JY29ucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrOi9JY29ucy93ZWJwYWNrL3J1bnRpbWUvaG90IG1vZHVsZSByZXBsYWNlbWVudCIsIndlYnBhY2s6Ly9EaWFsb2cvSWNvbnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2s6L0ljb25zL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL0RpYWxvZy9JY29ucy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4uL3Jlc2l6ZXItY2wvc3JjL09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4uL3Jlc2l6ZXItY2wvc3JjL2FwcC5tb2R1bGVzLmpzIiwid2VicGFjazovL0RpYWxvZy8uLi9yZXNpemVyLWNsL3NyYy9yZXNpemVyLWFjdHVhbC5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi4vcmVzaXplci1jbC9zcmMvcmVzaXplci5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9zcmMvX2RpYWxvZy5zY3NzIiwid2VicGFjazovL0RpYWxvZy8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0RpYWxvZy8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9zcmMvX2RpYWxvZy5zY3NzP2MwYjIiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2svcnVudGltZS9hbWQgb3B0aW9ucyIsIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IHVwZGF0ZSBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjay9ydW50aW1lL2dldCB1cGRhdGUgbWFuaWZlc3QgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjay9ydW50aW1lL2hhcm1vbnkgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrL3J1bnRpbWUvaG90IG1vZHVsZSByZXBsYWNlbWVudCIsIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiQm9keSIsImRpYWxvZyIsInBhcmVudERpdiIsIm9wdGlvbnMiLCJkaXYiLCJUb29scyIsImNvbnRlbnQiLCJhcHBlbmRDaGlsZCIsIkJvdHRvbSIsImluaXRpYWxpemUiLCJidXR0b25zIiwiYWRkT2siLCJmb3JFYWNoIiwiaXRlbSIsImFkZEJ1dHRvbiIsImJ1dHRvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJpbm5lckhUTUwiLCJvbmNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVuZGVmaW5lZCIsImNsaWNrIiwiY2xvc2UiLCJmb2N1cyIsImNvbnRlbnRzIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkQ2xhc3MiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiYWRkQ2xhc3NlcyIsImNsYXNzZXMiLCJzcGxpdCIsImNscyIsImNyZWF0ZUNsYXNzZWREaXYiLCJhZGRDb250ZW50IiwiaXNTdHJpbmciLCJpc0VsZW1lbnQiLCJ2YWwiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJub2RlVmFsdWUiLCJEaWFsb2ciLCJPcHRpb25zIiwiYm9keSIsIm1hc2siLCJib3R0b20iLCJ6SW5kZXgiLCJzdHlsZSIsInBhcmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnN0YWxsUmVzaXphYmxlIiwiVGl0bGVCYXIiLCJNYXNrIiwicGxhY2UiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5Q29kZSIsInJlc2l6ZSIsInJzT3B0aW9ucyIsImdyYWJTaXplIiwiUmVzaXplciIsInRvUHgiLCJwYXJlbnRXaWQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicGFyZW50SGl0IiwiaW5uZXJIZWlnaHQiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwidG9wIiwibGVmdCIsInJlbW92ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIm1vZGFsIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJNZXNzYWdlQm94IiwidGl0bGUiLCJtZXNzYWdlIiwiYnV0dG9uMSIsImJ1dHRvbjIiLCJPS0NBTkNFTCIsIk9LIiwidGl0bGVCYXJCdXR0b25zIiwidGl0bGVCYXJBZGRDbGFzcyIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJFcnJvciIsImluc3RhbGxlZE1vdmVIYW5kbGVycyIsImluc3RhbGxlZFRvdWNoSGFuZGxlcnMiLCJpbml0aWFsWCIsImluaXRpYWxZIiwiaW5pdGlhbFBvc2l0aW9uWCIsImluaXRpYWxQb3NpdGlvblkiLCJodG1sIiwiYWRkQ2xvc2UiLCJhZGRDdXN0b20iLCJoMSIsIm1vdXNlRG93bkxpc3RlbmVyIiwidG91Y2hTdGFydExpc3RlbmVyIiwibW92ZVRvIiwieCIsInkiLCJkeCIsImR5IiwibmV3UG9zaXRpb25YIiwibmV3UG9zaXRpb25ZIiwiaW5zdGFsbE1vdXNlSGFuZGxlcnMiLCJyZW1vdmVIYW5kbGVycyIsIm1vdXNlTW92ZUxpc3RlbmVyIiwibW91c2VVcExpc3RlbmVyIiwicGFnZVgiLCJwYWdlWSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlIiwiaW5zdGFsbFRvdWNoSGFuZGxlcnMiLCJ0b3VjaE1vdmVMaXN0ZW5lciIsInRvdWNoRW5kTGlzdGVuZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b3VjaGVzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZSIsIm1heFNwZWVkIiwidXNlTWFzayIsIlJlc2l6ZXJBY3R1YWwiLCJ0aW1lb3V0UGVyaW9kIiwiYm9yZGVyQm90dG9tIiwiaW5zdGFsbGVkTW91c2VMaXN0ZW5lcnMiLCJpbnN0YWxsZWRUb3VjaExpc3RlbmVycyIsIm1pbkhlaWdodCIsImdldENvbXB1dGVkU3R5bGUiLCJzdWJzdHIiLCJsZW5ndGgiLCJtaW5XaWR0aCIsInRpbWVyIiwidGFyZ2V0V2lkdGgiLCJ0YXJnZXRIZWlnaHQiLCJzdGFydCIsImN1cnNvckxpc3RlbmVyIiwic2V0VGFyZ2V0IiwidHciLCJ0aCIsInRpbWVyTW92ZXIiLCJtYXhQaXhlbHMiLCJjdXJyZW50SGVpZ2h0IiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJjdXJyZW50V2lkdGgiLCJzZXRUaW1lb3V0IiwiaW5pdGlhbFdpZHRoIiwiaW5pdGlhbEhlaWdodCIsImdyYWJUeXBlIiwibW92ZVN0YXJ0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJuZXdXaWR0aCIsIm5ld0hlaWdodCIsIndhc0hlaWdodCIsIm9uSGFuZGxlIiwiaW5zdGFsbE1hc2siLCJyZW1vdmVBbGwiLCJyZW1vdmVNYXNrIiwib3BhY2l0eSIsImN1cnNvciIsImNsZWFyVGltZW91dCIsInRvdWNoIiwic2xvcCIsInBhZ2VZT2Zmc2V0IiwidmVydCIsInJpZ2h0IiwicGFnZVhPZmZzZXQiLCJob3J6Iiwic2VsIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsIm5vZGVUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7O0FDVkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7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O0FBQUksZUFMSjtBQU1BO0FBQUcsYUFQSDtBQVFBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFdBOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQ0VBOzs7QUFDQTs7O0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUZBOzs7Ozs7QUFLQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7Ozs7O0FBRUE7OztBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFDQTs7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBLGFBWEE7QUFZQTs7O0FBQUE7QUFDQTs7QUFBRSxXQW5CRjtBQW9CQTtBQUFBOzs7Ozs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUEsU0FaQTs7Ozs7O0FBY0E7OztBQUNBOzs7QUFDQTs7O0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7OztBQUVBOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUEsMkJBREE7O0FBRUE7QUFBQTtBQUNBOztBQUhBO0FBSUE7QUFBRyxhQUxIO0FBTUE7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSEE7QUFJQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQSx1Q0FEQTs7QUFFQTtBQUFBLDhCQUZBOztBQUdBO0FBQUE7QUFDQTs7QUFKQTtBQUtBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQSxvQ0FEQTs7QUFFQTtBQUFBLDhCQUZBOztBQUdBO0FBQUE7QUFDQTs7QUFKQTtBQUtBO0FBQUE7QUFDQTs7O0FBQUEsOEJBQWtCLHlCQUFsQixFQUE2QyxHQUE3QyxFQUE2QztBQUM3QztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUEsb0NBREE7O0FBRUE7QUFBQSxtREFGQTs7QUFHQTtBQUFBLHNDQUhBOztBQUlBO0FBQUE7QUFDQTs7QUFMQTtBQU1BO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFBQSxpREFEQTs7QUFFQTtBQUFBO0FBQ0E7O0FBSEE7QUFJQTtBQUFBO0FBQ0E7O0FBQUE7OztBQUVBOzs7QUFBQTtBQUNBO0FBQUEsOEJBREE7O0FBRUE7QUFBQSxzQ0FGQTs7QUFHQTtBQUFBLDhDQUhBOztBQUlBO0FBQUE7QUFDQTs7QUFMQTtBQU1BO0FBQUE7OztBQUVBOzs7QUFBQTtBQUNBO0FBQUEsNEJBQWlCLFlBQWpCLEVBQStCLEdBQS9CLEVBQStCO0FBQy9CO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7OztBQUVBOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBR0E7QUFBQSxXQUpBOzs7QUFNQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBOztBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBSSxlQUZKLE1BRUk7QUFDSjtBQUFBO0FBQ0E7QUFBQSxrQ0FEQTs7QUFFQTtBQUFBO0FBQ0E7O0FBSEE7QUFJQTtBQUFBO0FBQ0E7O0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUEsbUNBREE7QUFFQTtBQUFBO0FBQ0E7QUFKQTtBQUtBOztBQUFBOztBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBLG1DQURBO0FBRUE7QUFBQSwwQkFGQTtBQUdBO0FBQUEsbUNBSEE7QUFJQTtBQUFBO0FBQ0E7QUFOQTtBQU9BOztBQUFBOztBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBR0E7O0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTs7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBOztBQUNBOztBQUFBO0FBQ0E7QUFBQTs7QUFDQTtBQXRDQTtBQXVDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUZBO0FBR0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBLGtEQURBO0FBRUE7QUFBQTtBQUNBO0FBSEE7QUFJQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7OztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBO0FBQ0E7O0FBQUEsMEJBQWdCLDBC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V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0EsRUFBRTtXQUNGOztXQUVBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxFQUFFOztXQUVGO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLG1CQUFtQixvQkFBb0I7V0FDdkM7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFOztXQUVGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQSxHQUFHO1dBQ0g7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSixHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0EsQzs7Ozs7V0N0V0EsMkI7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7V0FHQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtCQUFrQiwyQkFBMkI7V0FDN0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0EsaUJBQWlCLGNBQWM7V0FDL0I7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsS0FBSztXQUNuQjtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsWUFBWTtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGdCQUFnQiw0QkFBNEI7V0FDNUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQix1Q0FBdUM7V0FDeEQ7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQSxrQkFBa0IsaUNBQWlDO1dBQ25EO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EscUJBQXFCLHVDQUF1QztXQUM1RDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxxQkFBcUIsc0JBQXNCO1dBQzNDO1dBQ0E7V0FDQSxRQUFRO1dBQ1I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsVUFBVTtXQUNWO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLGtCQUFrQix3Q0FBd0M7V0FDMUQ7V0FDQTtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsT0FBTztXQUNQO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFNBQVM7V0FDVDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFFBQVE7V0FDUjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRSxJQUFJO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0EscUNBQXFDO1dBQ3JDO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7O1dBRUE7O1dBRUE7O1dBRUEsc0I7Ozs7O1VDaGVBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImRpYWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkRpYWxvZ1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJEaWFsb2dcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIE1pZGRsZSBzZWN0aW9uIG9mIGRpYWxvZyBib3hcclxuICovXHJcblxyXG5pbXBvcnQgVG9vbHMgZnJvbSAnLi9ET00vVG9vbHMuanMnO1xyXG5cclxuXHJcbmxldCBCb2R5ID0gZnVuY3Rpb24oZGlhbG9nLCBwYXJlbnREaXYpIHtcclxuICAgIGxldCBvcHRpb25zID0gZGlhbG9nLm9wdGlvbnM7XHJcblxyXG4gICAgbGV0IGRpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2RpYWxvZy1jbC1ib2R5Jywgb3B0aW9ucy5jb250ZW50KTtcclxuICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgIHRoaXMuZGl2ID0gZGl2O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9keTtcclxuXHJcbiIsImltcG9ydCBUb29scyBmcm9tICcuL0RPTS9Ub29scyc7XHJcblxyXG4vKipcclxuICogVGhlIGJvdHRvbSBidXR0b25zIHNlY3Rpb24gb2YgdGhlIGRpYWxvZyBib3hcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5sZXQgQm90dG9tID0gZnVuY3Rpb24oZGlhbG9nLCBwYXJlbnREaXYpIHtcclxuICAgIGxldCBvcHRpb25zID0gZGlhbG9nLm9wdGlvbnM7XHJcblxyXG4gICAgbGV0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gbGV0IGh0bWwgPSBgPGJ1dHRvbiBjbGFzcz1cImNsLWRpYWxvZy1idG5cIj5PazwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJjbC1kaWFsb2ctYnRuXCI+Q2FuY2VsPC9idXR0b24+YDtcclxuICAgICAgICBsZXQgZGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignY2wtZGlhbG9nLWJvdHRvbScpO1xyXG4gICAgICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICBpZihvcHRpb25zLmJ1dHRvbnMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgYWRkT2soZGl2KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcHRpb25zLmJ1dHRvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWRkQnV0dG9uKGRpdiwgaXRlbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRPayhkaXYsIGl0ZW0pIHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLnR5cGUgPSAnc3VibWl0JztcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ09rJztcclxuICAgICAgICBidXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZihpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbS5jbGljayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsaWNrKGRpYWxvZyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uLmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEJ1dHRvbihkaXYsIGl0ZW0pIHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLnR5cGUgPSAnc3VibWl0JztcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gaXRlbS5jb250ZW50cztcclxuICAgICAgICBidXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZihpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbS5jbGljayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsaWNrKGRpYWxvZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGl0ZW0uY2xhc3MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChpdGVtLmNsYXNzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGl0ZW0uZm9jdXMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgYnV0dG9uLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKTtcclxuXHJcbiAgICB0aGlzLmRlZmF1bHQgPSBmdW5jdGlvbigpIHtcclxuXHQgICAgb3B0aW9ucy5idXR0b25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdCAgICBpZihpdGVtLmRlZmF1bHQgPT09IHRydWUgJiYgaXRlbS5jbGljayAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdCAgICBpdGVtLmNsaWNrKGRpYWxvZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHQgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvdHRvbTtcclxuXHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBDb252ZW5pZW5jZSBmdW5jdGlvbnMgZm9yIHRoZSBET00uXHJcbiAqIFRvb2xzIHRoYXQgYXZvaWQgaGF2aW5nIHRvIGhhdmUgalF1ZXJ5IGluc3RhbGxlZC5cclxuICovXHJcblxyXG5sZXQgVG9vbHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgYSBjbGFzcyB0byBhbiBlbGVtZW50XHJcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdG8gYWRkIHRvXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUgQ2xhc3MgdG8gYWRkXHJcbiAqL1xyXG5Ub29scy5hZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcclxufVxyXG5cclxuVG9vbHMuYWRkQ2xhc3NlcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzZXMpIHtcclxuICAgIGlmKGNsYXNzZXMgPT09IHVuZGVmaW5lZCB8fCBjbGFzc2VzID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKChjbHMpID0+IHtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyhlbGVtZW50LCBjbHMpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBESVYgd2l0aCBhIHByb3ZpZGVkIGNsYXNzIG5hbWUuXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUgQ2xhc3MgdG8gYWRkIHRvIHRoZSBkaXZcclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudCB0byBwbGFjZSBpbiB0aGUgZGl2LiBIVE1MIG9yIEVsZW1lbnRcclxuICogQHJldHVybnMge0VsZW1lbnR9IENyZWF0ZWQgRE9NIEVsZW1lbnRcclxuICovXHJcblRvb2xzLmNyZWF0ZUNsYXNzZWREaXYgPSBmdW5jdGlvbihjbGFzc05hbWUsIGNvbnRlbnQpIHtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIFRvb2xzLmFkZENsYXNzKGRpdiwgY2xhc3NOYW1lKTtcclxuICAgIFRvb2xzLmFkZENvbnRlbnQoZGl2LCBjb250ZW50KTtcclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgY29udGVudCB0byBhbiBlbGVtZW50LlxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGFkZCB0b1xyXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50LiBDYW4gYmUgSFRNTCBvciBhbiBFbGVtZW50LlxyXG4gKi9cclxuVG9vbHMuYWRkQ29udGVudCA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNvbnRlbnQpIHtcclxuICAgIGlmKFRvb2xzLmlzU3RyaW5nKGNvbnRlbnQpKSB7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gY29udGVudDtcclxuICAgIH0gZWxzZSBpZihUb29scy5pc0VsZW1lbnQoY29udGVudCkpIHtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Ub29scy5pc1N0cmluZyA9IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8ICgoISF2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBTdHJpbmddJyk7XHJcbn1cclxuXHJcblRvb2xzLmlzRWxlbWVudCA9IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgcmV0dXJuIHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCAmJiB2YWwubm9kZVZhbHVlICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xzO1xyXG5cclxuIiwiaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9PcHRpb25zLmpzJztcclxuaW1wb3J0IHtUaXRsZUJhcn0gZnJvbSAnLi9UaXRsZUJhcic7XHJcbmltcG9ydCBCb2R5IGZyb20gJy4vQm9keS5qcyc7XHJcbmltcG9ydCBCb3R0b20gZnJvbSAnLi9Cb3R0b20uanMnO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSAnLi9ET00vVG9vbHMuanMnO1xyXG5pbXBvcnQgTWFzayBmcm9tICcuL01hc2suanMnO1xyXG5cclxuaW1wb3J0IFJlc2l6ZXIgZnJvbSAncmVzaXplci1jbCc7XHJcblxyXG4vKipcclxuICogRmxleGlibGUgYW5kIGNvbmZpZ3VyYWJsZSBkaWFsb2cgYm94IG9iamVjdFxyXG4gKiBAY29uc3RydWN0b3JcclxuICpcclxuICogQHZlcnNpb24gMS4wLjQgVG91Y2ggc3VwcG9ydCBmb3IgdGl0bGUgYmFyIGRyYWdnaW5nXHJcbiAqL1xyXG5sZXQgRGlhbG9nID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IG5ldyBPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHJcbiAgICBsZXQgYm9keSA9IG51bGwsIG1hc2sgPSBudWxsLCBib3R0b20gPSBudWxsO1xyXG5cclxuICAgIGxldCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIERpYWxvZy56SW5kZXggKz0gMjtcclxuICAgICAgICB0aGlzLnpJbmRleCA9IERpYWxvZy56SW5kZXg7XHJcblxyXG4gICAgICAgIGxldCBkaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdkaWFsb2ctY2wnKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzc2VzKGRpdiwgb3B0aW9ucy5hZGRDbGFzcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZGl2ID0gZGl2O1xyXG4gICAgICAgIGRpdi5zdHlsZS56SW5kZXggPSB0aGlzLnpJbmRleDtcclxuXHJcbiAgICAgICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgaW5zdGFsbFJlc2l6YWJsZShkaXYpO1xyXG5cclxuICAgICAgICBuZXcgVGl0bGVCYXIodGhpcywgZGl2KTtcclxuICAgICAgICBib2R5ID0gbmV3IEJvZHkodGhpcywgZGl2KTtcclxuICAgICAgICBpZihvcHRpb25zLmJ1dHRvbnMgIT09IGZhbHNlKSB7XHJcblx0ICAgICAgICBib3R0b20gPSBuZXcgQm90dG9tKHRoaXMsIGRpdik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hc2sgPSBuZXcgTWFzayh0aGlzKTtcclxuXHJcbiAgICAgICAgcGxhY2UoZGl2LCBwYXJlbnQpO1xyXG5cclxuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaW5zdGFsbFJlc2l6YWJsZSA9IChkaXYpID0+IHtcclxuICAgICAgICBpZihvcHRpb25zLnJlc2l6ZSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIGxldCByc09wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAncmVzaXplJzogb3B0aW9ucy5yZXNpemUsXHJcbiAgICAgICAgICAgICAgICAnaGFuZGxlJzogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgJ2dyYWJTaXplJzogb3B0aW9ucy5ncmFiU2l6ZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbmV3IFJlc2l6ZXIoZGl2LCByc09wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gdG9QeCh2YWwpIHtcclxuICAgICAgICByZXR1cm4gJycgKyB2YWwgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwbGFjZSA9IChkaXYsIHBhcmVudCkgPT4ge1xyXG4gICAgICAgIC8vbGV0IHBhcmVudFdpZCA9IHBhcmVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAvL2xldCBwYXJlbnRIaXQgPSBwYXJlbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGxldCBwYXJlbnRXaWQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICBsZXQgcGFyZW50SGl0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgICAgICBsZXQgaGVpZ2h0ID0gZGl2Lm9mZnNldEhlaWdodDtcclxuICAgICAgICBsZXQgd2lkdGggPSBkaXYub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICAgIGxldCB0b3AgPSBwYXJlbnRIaXQvMiAtIGhlaWdodC8yO1xyXG4gICAgICAgIGlmKHRvcCA8IDEwKSB7XHJcbiAgICAgICAgICAgIHRvcCA9IDEwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxlZnQgPSBwYXJlbnRXaWQvMiAtIHdpZHRoLzI7XHJcbiAgICAgICAgaWYobGVmdCA8IDApIHtcclxuICAgICAgICAgICAgbGVmdCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYuc3R5bGUubGVmdCA9IHRvUHgobGVmdCk7XHJcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IHRvUHgodG9wKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCk7XHJcblxyXG4gICAgdGhpcy5hZGRDb250ZW50ID0gZnVuY3Rpb24oY29udGVudCkge1xyXG4gICAgICAgIFRvb2xzLmFkZENvbnRlbnQoYm9keS5kaXYsIGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2xvc2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBtYXNrLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kaXYpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIENhbGxpbmcgaXMgZXF1aXZhbGVudCB0byBwcmVzc2luZyB0aGUgZmlyc3QgZGVmYXVsdCBidXR0b25cclxuXHQgKi9cclxuXHR0aGlzLmRlZmF1bHQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZihib3R0b20gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgYm90dG9tLmRlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkRpYWxvZy56SW5kZXggPSAxMDAwMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpYWxvZztcclxuXHJcbiIsIi8qKlxyXG4gKiBNYXNrIHRoYXQgYWxsb3dzIHRoZSBkaWFsb2cgYm94IHRvIGJlIG1vZGFsLlxyXG4gKi9cclxuXHJcbmltcG9ydCBUb29scyBmcm9tICcuL0RPTS9Ub29scy5qcyc7XHJcblxyXG5sZXQgTWFzayA9IGZ1bmN0aW9uKGRpYWxvZykge1xyXG4gICAgbGV0IG9wdGlvbnMgPSBkaWFsb2cub3B0aW9ucztcclxuXHJcbiAgICBsZXQgbWFzayA9IG51bGw7XHJcblxyXG4gICAgaWYob3B0aW9ucy5tb2RhbCkge1xyXG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIG1hc2sgPSAgVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignbWFzaycpOyAvLyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgbWFzay5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgbWFzay5zdHlsZS5sZWZ0ID0gMDtcclxuICAgICAgICBtYXNrLnN0eWxlLnRvcCA9IDA7XHJcbiAgICAgICAgbWFzay5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIG1hc2suc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgIG1hc2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICBtYXNrLnN0eWxlLnpJbmRleCA9IGRpYWxvZy56SW5kZXggLSAxO1xyXG5cclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1hc2spO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYobWFzayAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChtYXNrKTtcclxuICAgICAgICAgICAgbWFzayA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXNrO1xyXG5cclxuIiwiLyoqXHJcbiAqIEhhbmR5IFNpbXBsZSBNZXNzYWdlIEJveFxyXG4gKi9cclxuXHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9EaWFsb2cuanMnO1xyXG5cclxubGV0IE1lc3NhZ2VCb3ggPSBmdW5jdGlvbih0aXRsZSwgbWVzc2FnZSwgdHlwZSwgYnV0dG9uMSwgYnV0dG9uMikge1xyXG4gICAgLy8gRGVmYXVsdDogT0tcclxuICAgIGxldCBidXR0b25zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29udGVudHM6ICdPaycsXHJcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbihkaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgIGlmKGJ1dHRvbjEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjEoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnZm9jdXMnOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICBpZih0eXBlID09PSBNZXNzYWdlQm94Lk9LQ0FOQ0VMKSB7XHJcbiAgICAgICAgYnV0dG9ucyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGVudHM6ICdPaycsXHJcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oZGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYnV0dG9uMSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjEoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJ2ZvY3VzJzogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50czogJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oZGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYnV0dG9uMiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgICBsZXQgZGlhbG9nID0gbmV3IERpYWxvZyh7XHJcbiAgICAgICAgICAndGl0bGUnOiB0aXRsZSxcclxuICAgICAgICAgICdjb250ZW50JzogJzxkaXYgY2xhc3M9XCJtZXNzYWdlLWNsXCI+PHA+JyArIG1lc3NhZ2UgKyAnPC9wPjwvZGl2PicsXHJcbiAgICAgICAgICAnYnV0dG9ucyc6IGJ1dHRvbnNcclxuICAgICB9KTtcclxufVxyXG5cclxuTWVzc2FnZUJveC5PSyA9IDA7XHJcbk1lc3NhZ2VCb3guT0tDQU5DRUwgPSAxO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUJveDtcclxuXHJcbiIsIi8qKlxyXG4gKiBWYXJpb3VzIGludGVyZmFjZSBvcHRpb25zIHdlIGNhbiBzZWxlY3RcclxuICovXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIG9wdGlvbnMuXHJcbiAqIEBwYXJhbSBvcHRpb25zIFVzZXIgcHJvdmlkZWQgb3B0aW9ucyB0aGF0IG92ZXJyaWRlIHRoZSBkZWZhdWx0IHZhbHVlcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG52YXIgT3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zID8gb3B0aW9ucyA6IHt9O1xyXG5cclxuICAgIC8vLyBUaXRsZSBiYXIgdGV4dFxyXG4gICAgdGhpcy50aXRsZSA9ICdEaWFsb2cgQm94JztcclxuXHJcbiAgICAvLy8gQW55IGFkZGVkIGNsYXNzIG9yIGNsYXNzZXMgZm9yIHRoZSBtYWluIGRpYWxvZyBib3ggZGl2XHJcbiAgICAvLy8gQ2FuIGJlIGEgc3RyaW5nIG9yIG11bHRpcGxlIHN0cmluZ3Mgc3BhY2UgZGVsaW1pdGVkXHJcbiAgICB0aGlzLmFkZENsYXNzID0gbnVsbDtcclxuXHJcbiAgICAvLy8gSXMgdGhpcyBkaWFsb2cgYm94IHJlc2l6YWJsZT9cclxuICAgIC8vLyBPcHRpb25zIGFyZTogJ25vbmUnLCAndmVydGljYWwnLCAnaG9yaXpvbnRhbCdcclxuICAgIHRoaXMucmVzaXplID0gJ25vbmUnO1xyXG5cclxuICAgIC8vLyBTaXplIG9mIHRoZSBib3JkZXIgZWRnZSB3ZSBjYW4gZ3JhYiBpZiByZXNpemFibGUgaW4gcGl4ZWxzXHJcbiAgICB0aGlzLmdyYWJTaXplID0gNDtcclxuXHJcbiAgICAvLy8gQXJyYXkgb2YgdGl0bGUgYmFyIGJ1dHRvbnMgdG8gYWRkLlxyXG4gICAgLy8vIElmIG51bGwsIGEgY2xvc2UgYnV0dG9uIGlzIGFkZGVkIGF1dG9tYXRpY2FsbHkuXHJcbiAgICAvLy8gT3RoZXJ3aXNlLCBhbiBhcnJheSBvZiBvYmplY3RzLCB3aXRoIHRoZXNlIGZpZWxkczpcclxuICAgIC8vLyAgIHR5cGU6ICdjbG9zZScgZm9yIGEgY2xvc2UgIGJ1dHRvbiwgJ2N1c3RvbScgZm9yIGN1c3RvbSBidXR0b24gY29udGVudHNcclxuICAgIC8vLyAgIGNvbnRlbnRzOiBIVE1MIHRvIHBsYWNlIGluc2lkZSBidXR0b24gdGFnXHJcbiAgICAvLy8gICBjbGljazogQ2xpY2sgaGFuZGxlclxyXG4gICAgdGhpcy50aXRsZUJhckJ1dHRvbnMgPSBudWxsO1xyXG5cclxuICAgIC8vLyBBbnkgYWRkZWQgY2xhc3Mgb3IgY2xhc3NlcyBmb3IgdGhlIHRpdGxlIGJhciBkaXZcclxuICAgIC8vLyBDYW4gYmUgYSBzdHJpbmcgb3IgbXVsdGlwbGUgc3RyaW5ncyBzcGFjZSBkZWxpbWl0ZWRcclxuICAgIHRoaXMudGl0bGVCYXJBZGRDbGFzcyA9IG51bGw7XHJcblxyXG4gICAgLy8vIEFycmF5IG9mIGJ1dHRvbnMgZm9yIHRoZSBib3R0b20uXHJcbiAgICAvLy8gSWYgbnVsbCwgYW4gT2sgYnV0dG9uIGlzIGFkZGVkIGF1dG9tYXRpY2FsbHkuXHJcbiAgICAvLy8gT3RoZXJ3aXNlLCBhbiBhcnJheSBvZiBvYmplY3RzLCB3aXRoIHRoZXNlIGZpZWxkczpcclxuICAgIC8vLyAgIGNvbnRlbnRzOiBJZiBwcm92aWRlZCwgSFRNTCB0byBwbGFjZSBpbnNpZGUgYnV0dG9uIHRhZ1xyXG4gICAgLy8vICAgY2xpY2s6IENsaWNrIGhhbmRsZXJcclxuICAgIC8vLyAgIGZvY3VzOiB0cnVlIGlmIHdlIHdhbnQgdG8gc2V0IGZvY3VzIG9uIHRoaXMgYnV0dG9uXHJcbiAgICAvLy8gICBkZWZhdWx0OiB0cnVlIGlmIHRoaXMgaXMgdGhlIGRlZmF1bHQgYnV0dG9uXHJcbiAgICAvLy8gICBjbGFzczogQ2xhc3MgdG8gYWRkIHRvIHRoZSBidXR0b25cclxuICAgIHRoaXMuYnV0dG9ucyA9IG51bGw7XHJcblxyXG4gICAgLy8vIENvbnRlbnQgdG8gYWRkIHRvIHRoZSBkaWFsb2cgYm94LiBJZiBudWxsLCBub25lIGlzIGFkZGVkIG9uIGNyZWF0aW9uLlxyXG4gICAgdGhpcy5jb250ZW50ID0gbnVsbDtcclxuXHJcbiAgICAvLy8gSXMgdGhpcyBhIG1vZGFsIGRpYWxvZyBib3g/IElmIHRydWUsIGNvbnRyb2xzIHVuZGVybmVhdGggYXJlIGRpc2FibGVkLlxyXG4gICAgdGhpcy5tb2RhbCA9IHRydWU7XHJcblxyXG4gICAgZm9yKHZhciBwcm9wZXJ0eSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbiBcIiArIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IG9wdGlvbnNbcHJvcGVydHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3B0aW9ucztcclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFRpdGxlIGJhciBtYW5hZ2VtZW50XHJcbiAqL1xyXG5cclxuaW1wb3J0IFRvb2xzIGZyb20gJy4vRE9NL1Rvb2xzLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUaXRsZUJhcihkaWFsb2csIHBhcmVudERpdikge1xyXG4gICAgbGV0IG9wdGlvbnMgPSBkaWFsb2cub3B0aW9ucztcclxuXHJcbiAgICAvLy8gTW91c2UgbW92ZSBldmVudCBoYW5kbGVycyBpbnN0YWxsZWQgZmxhZ1xyXG4gICAgbGV0IGluc3RhbGxlZE1vdmVIYW5kbGVycyA9IGZhbHNlO1xyXG5cclxuICAgIC8vLyBUb3VjaCBtb3ZlIGV2ZW50IGhhbmRsZXJzIGluc3RhbGxlZCBmbGFnXHJcbiAgICBsZXQgaW5zdGFsbGVkVG91Y2hIYW5kbGVycyA9IGZhbHNlO1xyXG5cclxuICAgIGxldCBpbml0aWFsWCwgaW5pdGlhbFk7XHJcbiAgICBsZXQgaW5pdGlhbFBvc2l0aW9uWCwgaW5pdGlhbFBvc2l0aW9uWTtcclxuXHJcbiAgICBsZXQgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgaHRtbCA9IGA8aDE+JHtvcHRpb25zLnRpdGxlfTwvaDE+YDtcclxuICAgICAgICBsZXQgZGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignZGlhbG9nLWNsLXRvcCcsIGh0bWwpO1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzZXMoZGl2LCBvcHRpb25zLnRpdGxlQmFyQWRkQ2xhc3MpO1xyXG4gICAgICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICBpZihvcHRpb25zLnRpdGxlQmFyQnV0dG9ucyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhZGRDbG9zZShkaXYpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMudGl0bGVCYXJCdXR0b25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGl0ZW0udHlwZSA9PT0gJ2Nsb3NlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZENsb3NlKGRpdiwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaXRlbS50eXBlID09PSAnY3VzdG9tJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEN1c3RvbShkaXYsIGl0ZW0pOyAvLyBhZGRDdXN0b20oZGl2LCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbGV0IGgxID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XHJcblxyXG4gICAgICAgIGgxLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bkxpc3RlbmVyKTtcclxuICAgICAgICBoMS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG91Y2hTdGFydExpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZENsb3NlKGRpdiwgaXRlbSkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyhidXR0b24sICdkaWFsb2ctY2wtdGItYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cImljb25zLWNsIGljb25zLWNsLWNsb3NlXCI+JztcclxuICAgICAgICBidXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZihpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbS5jbGljayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQ3VzdG9tKGRpdiwgaXRlbSkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyhidXR0b24sICdkaWFsb2ctY2wtdGItYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGl0ZW0uY29udGVudHM7XHJcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYoaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uY2xpY2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGljaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW92ZVRvKHgsIHkpIHtcclxuICAgICAgICBsZXQgZHggPSB4IC0gaW5pdGlhbFg7XHJcbiAgICAgICAgbGV0IGR5ID0geSAtIGluaXRpYWxZO1xyXG5cclxuICAgICAgICBsZXQgbmV3UG9zaXRpb25YID0gaW5pdGlhbFBvc2l0aW9uWCArIGR4O1xyXG4gICAgICAgIGxldCBuZXdQb3NpdGlvblkgPSBpbml0aWFsUG9zaXRpb25ZICsgZHk7XHJcblxyXG4gICAgICAgIGRpYWxvZy5kaXYuc3R5bGUubGVmdCA9IG5ld1Bvc2l0aW9uWCArICdweCc7XHJcbiAgICAgICAgZGlhbG9nLmRpdi5zdHlsZS50b3AgPSBuZXdQb3NpdGlvblkgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBNb3VzZSBoYW5kbGVyc1xyXG4gICAgLy9cclxuXHJcbiAgICBmdW5jdGlvbiBpbnN0YWxsTW91c2VIYW5kbGVycygpIHtcclxuICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG5cclxuICAgICAgICBpbnN0YWxsZWRNb3ZlSGFuZGxlcnMgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcExpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VEb3duTGlzdGVuZXIoZXZlbnQpIHtcclxuICAgICAgICBpbml0aWFsWCA9IGV2ZW50LnBhZ2VYO1xyXG4gICAgICAgIGluaXRpYWxZID0gZXZlbnQucGFnZVk7XHJcblxyXG4gICAgICAgIGxldCByZWN0ID0gZGlhbG9nLmRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBpbml0aWFsUG9zaXRpb25YID0gcmVjdC5sZWZ0O1xyXG4gICAgICAgIGluaXRpYWxQb3NpdGlvblkgPSByZWN0LnRvcDtcclxuXHJcbiAgICAgICAgaW5zdGFsbE1vdXNlSGFuZGxlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZU1vdmVMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgaWYoZS5idXR0b25zICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUhhbmRsZXJzKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1vdmVUbyhlLnBhZ2VYLCBlLnBhZ2VZKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZVVwTGlzdGVuZXIoZSkge1xyXG4gICAgICAgIHJlbW92ZUhhbmRsZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIFRvdWNoIGhhbmRsZXJzXHJcbiAgICAvL1xyXG5cclxuICAgIGZ1bmN0aW9uIGluc3RhbGxUb3VjaEhhbmRsZXJzKCkge1xyXG4gICAgICAgIHJlbW92ZUhhbmRsZXJzKCk7XHJcblxyXG4gICAgICAgIGluc3RhbGxlZFRvdWNoSGFuZGxlcnMgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hFbmRMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHRvdWNoU3RhcnRMaXN0ZW5lcihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGluaXRpYWxYID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWDtcclxuICAgICAgICBpbml0aWFsWSA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVk7XHJcblxyXG4gICAgICAgIGxldCByZWN0ID0gZGlhbG9nLmRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBpbml0aWFsUG9zaXRpb25YID0gcmVjdC5sZWZ0O1xyXG4gICAgICAgIGluaXRpYWxQb3NpdGlvblkgPSByZWN0LnRvcDtcclxuXHJcbiAgICAgICAgaW5zdGFsbFRvdWNoSGFuZGxlcnMoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gdG91Y2hNb3ZlTGlzdGVuZXIoZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIG1vdmVUbyhlLnRvdWNoZXNbMF0ucGFnZVgsIGUudG91Y2hlc1swXS5wYWdlWSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG91Y2hFbmRMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgcmVtb3ZlSGFuZGxlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhbGwgaW5zdGFsbGVkIHRlbXBvcmFyeSBoYW5kbGVyc1xyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiByZW1vdmVIYW5kbGVycygpIHtcclxuICAgICAgICBpZihpbnN0YWxsZWRNb3ZlSGFuZGxlcnMpIHtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGluc3RhbGxlZE1vdmVIYW5kbGVycyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaW5zdGFsbGVkVG91Y2hIYW5kbGVycykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaE1vdmVMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hFbmRMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hFbmRMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGluc3RhbGxlZFRvdWNoSGFuZGxlcnMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpO1xyXG59XHJcblxyXG4iLCIvLyBUaGUgcHVibGljLXBhdGggbW9kdWxlIG11c3QgYmUgaW1wb3J0ZWQgZmlyc3QhXHJcbi8vaW1wb3J0ICcuL3B1YmxpYy1wYXRoLmpzJztcclxuXHJcbmltcG9ydCAnLi9wb2x5ZmlsbHMvYWxsLmpzJztcclxuaW1wb3J0IERpYWxvZyBmcm9tICcuL0RpYWxvZy5qcyc7XHJcbmltcG9ydCBNZXNzYWdlQm94IGZyb20gJy4vTWVzc2FnZUJveC5qcyc7XHJcbmltcG9ydCAnLi9fZGlhbG9nLnNjc3MnO1xyXG5pbXBvcnQgJ2ljb25zLWNsJztcclxuXHJcbkRpYWxvZy5NZXNzYWdlQm94ID0gTWVzc2FnZUJveDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpYWxvZztcclxuZXhwb3J0IHtEaWFsb2d9O1xyXG5cclxuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSWNvbnNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSWNvbnNcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vaW1hZ2VzL2ljb25zLnBuZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pY29ucy1jbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtbmUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtc2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtc3cge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtbncge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTItbi1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0yLWUtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1uZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLXNlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtc3cge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1udyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTItbi1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMi1lLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLW5lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtc2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMS1zdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLW53IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMi1uLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0yLW5lLXN3IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMi1lLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0yLXNlLW53IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3dzdG9wLTEtbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93c3RvcC0xLWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3N0b3AtMS1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3dzdG9wLTEtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLW5lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLXNlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLXN3IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLW53IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0yLW4tcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMi1uZS1zdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMi1lLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTItc2Utbncge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3JldHVybnRoaWNrLTEtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtNjRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93cmV0dXJudGhpY2stMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTY0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1mb2xkZXItY29sbGFwc2VkIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZm9sZGVyLW9wZW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWRvY3VtZW50IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1kb2N1bWVudC1iIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1ub3RlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1tYWlsLWNsb3NlZCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbWFpbC1vcGVuIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zdWl0Y2FzZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNvbW1lbnQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1wZXJzb24ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1wcmludCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyYXNoIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbG9ja2VkIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdW5sb2NrZWQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1ib29rbWFyayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRhZyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWhvbWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZmxhZyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhbGN1bGF0b3Ige1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJ0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGVuY2lsIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2xvY2sge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1kaXNrIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FsZW5kYXIge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtem9vbWluIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXpvb21vdXQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc2VhcmNoIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXdyZW5jaCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1nZWFyIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWhlYXJ0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXN0YXIge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbGluayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGx1cyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBsdXN0aGljayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLW1pbnVzIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbWludXN0aGljayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWtleSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWxpZ2h0YnVsYiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXNjaXNzb3JzIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNsaXBib2FyZCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jb3B5IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNvbnRhY3Qge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtaW1hZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdmlkZW8ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc2NyaXB0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNsb3NlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2xvc2V0aGljayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFsZXJ0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWluZm8ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1ub3RpY2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1oZWxwIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2hlY2sge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1idWxsZXQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1yYWRpby1vZmYge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1yYWRpby1vbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1waW4tdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1waW4tcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1wbGF5IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBhdXNlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc2Vlay1uZXh0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc2Vlay1wcmV2IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc2Vlay1lbmQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zZWVrLWZpcnN0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc3RvcCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWVqZWN0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXZvbHVtZS1vZmYge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdm9sdW1lLW9uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xNjBweDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2ljb25zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIseURBQXVDO0VBQ3ZDLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7RUFQWjtJQWFJLHdCQUF3QixFQUFBO0VBYjVCO0lBaUJJLDRCQUE0QixFQUFBO0VBakJoQztJQXFCSSw0QkFBZ0MsRUFBQTtFQXJCcEM7SUF5QkksNEJBQWdDLEVBQUE7RUF6QnBDO0lBNkJJLDRCQUFnQyxFQUFBO0VBN0JwQztJQWlDSSw0QkFBZ0MsRUFBQTtFQWpDcEM7SUFxQ0ksNEJBQWdDLEVBQUE7RUFyQ3BDO0lBeUNJLDZCQUFnQyxFQUFBO0VBekNwQztJQTZDSSw2QkFBZ0MsRUFBQTtFQTdDcEM7SUFpREksNkJBQWdDLEVBQUE7RUFqRHBDO0lBd0RJLDhCQUFvQyxFQUFBO0VBeER4QztJQTRESSxnQ0FBb0MsRUFBQTtF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QTdUaEQ7SUE2VE0sa0NBQTBDLEVBQUE7RUE3VGhEO0lBNlRNLGtDQUEwQyxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pY29ucy1jbCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL2ljb25zLnBuZyk7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcclxcbiAgLy9cXHJcXG4gIC8vIFJvdyAxXFxyXFxuICAvL1xcclxcbiAgJi5pY29ucy1jbC1jYXJldC0xLW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTEtbmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jYXJldC0xLWUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyICogLTE2cHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtY2FyZXQtMS1zZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMgKiAtMTZweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jYXJldC0xLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0ICogLTE2cHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtY2FyZXQtMS1zdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUgKiAtMTZweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jYXJldC0xLXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA2ICogLTE2cHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtY2FyZXQtMS1udyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDcgKiAtMTZweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jYXJldC0yLW4tcyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDggKiAtMTZweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jYXJldC0yLWUtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDkgKiAtMTZweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy9cXHJcXG4gIC8vIFJvdyAyXFxyXFxuICAvL1xcclxcbiAgJi5pY29ucy1jbC10cmlhbmdsZS0xLW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwICogLTE2cHggLTE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTEtbmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxICogLTE2cHggLTE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTEtZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIgKiAtMTZweCAtMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtdHJpYW5nbGUtMS1zZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMgKiAtMTZweCAtMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtdHJpYW5nbGUtMS1zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNCAqIC0xNnB4IC0xNnB4O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgJi5pY29ucy1jbC10cmlhbmdsZS0xLXN3IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNSAqIC0xNnB4IC0xNnB4O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgJi5pY29ucy1jbC10cmlhbmdsZS0xLXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA2ICogLTE2cHggLTE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTEtbncge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA3ICogLTE2cHggLTE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTItbi1zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOCAqIC0xNnB4IC0xNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC10cmlhbmdsZS0yLWUtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDkgKiAtMTZweCAtMTZweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLy9cXHJcXG4gIC8vIFJvdyAzXFxyXFxuICAvL1xcclxcbiAgJi5pY29ucy1jbC1hcnJvdy0xLW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTEtbmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTEtZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMS1zZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMS1zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNCAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvdy0xLXN3IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNSAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvdy0xLXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA2ICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTEtbncge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA3ICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTItbi1zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOCAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvdy0yLW5lLXN3IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOSAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvdy0yLWUtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTItc2Utbncge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMSAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3N0b3AtMS1uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTIgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3dzdG9wLTEtZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEzICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93c3RvcC0xLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNCAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3N0b3AtMS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTUgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vXFxyXFxuICAvLyBSb3cgNFxcclxcbiAgLy9cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0xLW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2stMS1uZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0xLWUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2stMS1zZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0xLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0ICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2stMS1zdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0xLXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA2ICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2stMS1udyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDcgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0yLW4tcyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDggKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0yLW5lLXN3IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOSAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTItZS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0yLXNlLW53IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTEgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS1uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTIgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS1lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTMgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS1zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTQgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTUgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vXFxyXFxuICAvLyBSb3cgNVxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3JldHVybnRoaWNrLTEtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgKiAtMTZweCAtNjRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3dyZXR1cm50aGljay0xLWUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyICogLTE2cHggLTY0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyB1aS1pY29uLWFycm93cmV0dXJudGhpY2stMS1uICB1aS1pY29uLWFycm93cmV0dXJudGhpY2stMS1zICB1aS1pY29uLWFycm93cmV0dXJuLTEtdyAgdWktaWNvbi1hcnJvd3JldHVybi0xLW4gIHVpLWljb24tYXJyb3dyZXR1cm4tMS1lICB1aS1pY29uLWFycm93cmV0dXJuLTEtcyAgdWktaWNvbi1hcnJvd3JlZnJlc2gtMS13ICB1aS1pY29uLWFycm93cmVmcmVzaC0xLW4gIHVpLWljb24tYXJyb3dyZWZyZXNoLTEtZSAgdWktaWNvbi1hcnJvd3JlZnJlc2gtMS1zXFxyXFxuICAvLyB1aS1pY29uLWFycm93LTQgIHVpLWljb24tYXJyb3ctNC1kaWFnICB1aS1pY29uLWV4dGxpbmsgIHVpLWljb24tbmV3d2luICB1aS1pY29uLXJlZnJlc2ggIHVpLWljb24tc2h1ZmZsZSAgdWktaWNvbi10cmFuc2Zlci1lLXcgIHVpLWljb24tdHJhbnNmZXJ0aGljay1lLXdcXHJcXG5cXHJcXG4gIC8vXFxyXFxuICAvLyBSb3cgNlxcclxcbiAgLy9cXHJcXG4gICRsaXN0OiBmb2xkZXItY29sbGFwc2VkIGZvbGRlci1vcGVuIGRvY3VtZW50IGRvY3VtZW50LWIgbm90ZSBtYWlsLWNsb3NlZCBtYWlsLW9wZW4gc3VpdGNhc2UgY29tbWVudCBwZXJzb24gcHJpbnQgdHJhc2ggbG9ja2VkIHVubG9ja2VkIGJvb2ttYXJrIHRhZztcXHJcXG4gICR4OiAwO1xcclxcblxcclxcbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xcclxcbiAgICAmLmljb25zLWNsLSN7JGl0ZW19IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkeCAqIC0xNnB4IC05NnB4XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJHg6ICR4KzE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvL1xcclxcbiAgLy8gUm93IDdcXHJcXG4gIC8vXFxyXFxuICAkbGlzdDogaG9tZSBmbGFnIGNhbGN1bGF0b3IgY2FydCBwZW5jaWwgY2xvY2sgZGlzayBjYWxlbmRhciB6b29taW4gem9vbW91dCBzZWFyY2ggd3JlbmNoIGdlYXIgaGVhcnQgc3RhciBsaW5rO1xcclxcbiAgJHg6IDA7XFxyXFxuXFxyXFxuICBAZWFjaCAkaXRlbSBpbiAkbGlzdCB7XFxyXFxuICAgICYuaWNvbnMtY2wtI3skaXRlbX0ge1xcclxcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR4ICogLTE2cHggLTExMnB4XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJHg6ICR4KzE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvL1xcclxcbiAgLy8gUm93IDhcXHJcXG4gIC8vXFxyXFxuICAkbGlzdDogY2FuY2VsICBwbHVzICBwbHVzdGhpY2sgIG1pbnVzICBtaW51c3RoaWNrICBrZXkgIGxpZ2h0YnVsYiAgc2Npc3NvcnMgIGNsaXBib2FyZCAgY29weSAgY29udGFjdCAgaW1hZ2UgIHZpZGVvICBzY3JpcHQ7XFxyXFxuICAkeDogMDtcXHJcXG5cXHJcXG4gIEBlYWNoICRpdGVtIGluICRsaXN0IHtcXHJcXG4gICAgJi5pY29ucy1jbC0jeyRpdGVtfSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHggKiAtMTZweCAtMTI4cHhcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAkeDogJHgrMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtY2xvc2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTI4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNsb3NldGhpY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTI4cHg7XFxyXFxuICB9XFxyXFxuICAvLyB1aS1pY29uLWNhbmNlbCAgdWktaWNvbi1wbHVzICB1aS1pY29uLXBsdXN0aGljayAgdWktaWNvbi1taW51cyAgdWktaWNvbi1taW51c3RoaWNrICB1aS1pY29uLWtleSAgdWktaWNvbi1saWdodGJ1bGIgIHVpLWljb24tc2Npc3NvcnMgIHVpLWljb24tY2xpcGJvYXJkICB1aS1pY29uLWNvcHkgIHVpLWljb24tY29udGFjdCAgdWktaWNvbi1pbWFnZSAgdWktaWNvbi12aWRlbyAgdWktaWNvbi1zY3JpcHRcXHJcXG5cXHJcXG4gIC8vIFJvdyA5XFxyXFxuICAkbGlzdDogYWxlcnQgaW5mbyAgbm90aWNlIGhlbHAgY2hlY2sgIGJ1bGxldCAgcmFkaW8tb2ZmICByYWRpby1vbiAgcGluLXcgIHBpbi1zO1xcclxcbiAgJHg6IDA7XFxyXFxuXFxyXFxuICBAZWFjaCAkaXRlbSBpbiAkbGlzdCB7XFxyXFxuICAgICYuaWNvbnMtY2wtI3skaXRlbX0ge1xcclxcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR4ICogLTE2cHggOSAqIC0xNnB4XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJHg6ICR4KzE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAgUm93IDEwXFxyXFxuICAkbGlzdDogcGxheSBwYXVzZSBzZWVrLW5leHQgIHNlZWstcHJldiAgc2Vlay1lbmQgIHNlZWstZmlyc3QgIHN0b3AgIGVqZWN0ICB2b2x1bWUtb2ZmICB2b2x1bWUtb247XFxyXFxuICAkeDogMDtcXHJcXG5cXHJcXG4gIEBlYWNoICRpdGVtIGluICRsaXN0IHtcXHJcXG4gICAgJi5pY29ucy1jbC0jeyRpdGVtfSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHggKiAtMTZweCAxMCAqIC0xNnB4XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJHg6ICR4KzE7XFxyXFxuICB9XFxyXFxuXFxyXFxuIC8vIHVpLWljb24tcG93ZXIgIHVpLWljb24tc2lnbmFsLWRpYWcgIHVpLWljb24tc2lnbmFsICB1aS1pY29uLWJhdHRlcnktMCAgdWktaWNvbi1iYXR0ZXJ5LTEgIHVpLWljb24tYmF0dGVyeS0yICB1aS1pY29uLWJhdHRlcnktM1xcclxcbiAgLy8gdWktaWNvbi1jaXJjbGUtcGx1cyAgdWktaWNvbi1jaXJjbGUtbWludXMgIHVpLWljb24tY2lyY2xlLWNsb3NlICB1aS1pY29uLWNpcmNsZS10cmlhbmdsZS1lICB1aS1pY29uLWNpcmNsZS10cmlhbmdsZS1zICB1aS1pY29uLWNpcmNsZS10cmlhbmdsZS13ICB1aS1pY29uLWNpcmNsZS10cmlhbmdsZS1uICB1aS1pY29uLWNpcmNsZS1hcnJvdy1lICB1aS1pY29uLWNpcmNsZS1hcnJvdy1zICB1aS1pY29uLWNpcmNsZS1hcnJvdy13ICB1aS1pY29uLWNpcmNsZS1hcnJvdy1uICB1aS1pY29uLWNpcmNsZS16b29taW4gIHVpLWljb24tY2lyY2xlLXpvb21vdXQgIHVpLWljb24tY2lyY2xlLWNoZWNrXFxyXFxuLy8gdWktaWNvbi1jaXJjbGVzbWFsbC1wbHVzICB1aS1pY29uLWNpcmNsZXNtYWxsLW1pbnVzICB1aS1pY29uLWNpcmNsZXNtYWxsLWNsb3NlICB1aS1pY29uLXNxdWFyZXNtYWxsLXBsdXMgIHVpLWljb24tc3F1YXJlc21hbGwtbWludXMgIHVpLWljb24tc3F1YXJlc21hbGwtY2xvc2VcXHJcXG4vLyB1aS1pY29uLWdyaXAtZG90dGVkLXZlcnRpY2FsICB1aS1pY29uLWdyaXAtZG90dGVkLWhvcml6b250YWwgIHVpLWljb24tZ3JpcC1zb2xpZC12ZXJ0aWNhbCAgdWktaWNvbi1ncmlwLXNvbGlkLWhvcml6b250YWwgIHVpLWljb24tZ3JpcHNtYWxsLWRpYWdvbmFsLXNlICB1aS1pY29uLWdyaXAtZGlhZ29uYWwtc2VcXHJcXG5cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pY29ucy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2ljb25zLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMsIHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFRQUFBQUR3Q0FNQUFBRFlTVXI1QUFBQlMybFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNMdnU3OGlJR2xrUFNKWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FpUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVFXUnZZbVVnV0UxUUlFTnZjbVVnTlM0MkxXTXhORElnTnprdU1UWXdPVEkwTENBeU1ERTNMekEzTHpFekxUQXhPakEyT2pNNUlDQWdJQ0FnSUNBaVBnb2dQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRLSUNBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwaUlpOCtDaUE4TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnbzhQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtuaHhnN3dBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBQmMxSkhRZ0N1emh6cEFBQUJEbEJNVkVVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCeFVZVzlBQUFBV1hSU1RsTUFMMlpLQ0VCZ0dSQXpVQnEvSW1PZVJZK1VQMjJnbkNBcHpBMHhBU3dXVlNlWnd4TnhnQ00wUjgrdmFFZ0toUnc0VSs4RUhrdC9IMXBDZ295b292MGtBbEVESVRKcXRiamZZb2NHa1c4OHNxMTh2c2FyeUx5cXBabUtDN0FBQUE3bVNVUkJWSGphN1YwSlk5dTJEcVpjeTVRY0oyNnpyWm5qcmsxenJFM1gxL2IxMkgxdmIrKytUL3ovUC9KSXlSSUI4TEppUjNaaWZzNEZVUWZ4Q1NRQmtGS0VTRWhJMkFKSWtEdXVQMnc1QXl0WFQwSllmNGtaMER2M1N3aXpRTkNnQlBENmtISmRLdkVXQUZ2RndBWFk4ZFdmdlpvRXQwQ2JBTW5yUThyNUhiUUk0SWZiRjdCMmxqMHlZTlhmclVLZzNHWlFCQTBJUWcxaXNiTU03clRlQnM0dDJLNGl2OEcyaFFUdnNHMEJnUXIwYndGdVVnSzNNR2pCemgyc1BpQmtndjMzQVpzZUJYZ1Q2bjhVU0k1UVFrSkNRa0pDUXNMR1BNRU4rMEhTaXRhQU8rOHlvQkFBRC9CbHAzeUFsUkJTWisrVkVrY0ZMQUtzSGZqdU5GeVUxZ1U0QVRJWVBQWWFERm4xZDljNFVPeklxTWpBNFNLU0FvU0tBT2l2Z1lNekJlU3ZzVndtSHlDRGZNYlNCNXNQaHlWY1p6NUF4cHJndG9YRHQzMFVTRWhJU0VoSVNFallvS2UxdWpPLzB2bGhzd3JZb1U5UW9Tc0VTdER0K2phaEVEa2JoTGZZNnJGaXNIZWhoNE92ekgyQllBVWNwZUhydTg0UUlzZ3F0MDRHTVFKSmhZRHRBWTRUMnZVQnI0TGd1bDdvK25hNERERUNJQmh2ZzRqdzZ6bzhzQXRWY0xFM2VBa0NZWjB3eUovYmlFTW1GR3hBVGd0aGpEc09ENXRvL0FwZDFJdTJjY2NhSWdpWFI4N0liZ2RFYjBqa0FoRHM5MEJFbW5EL284QTFIeDhmSmhNU0VoSVNFaEoyRmFzdlMxM1J6WkNPMWVqK1U3cjgwT2hVVmVUeTNTcXcxQVhDOFR3c1VRRlVMdkRrMUJKZW5kNFpBcUdMYTNvL2xpSUlYdDhSMzNJRkl1bUhRRWFpbmxnMEZObTFkU3gybDBFQ0ltdkQzV1lXWWlESW53U0ltWmNySVFROEhBWWN6UVlzeUFxSEhkRzQ5Y2lHV0tJQzdsSjNkQXdRaU9mQllRUCt3eTBDckJyWTFhUGx2SW5GQ1hCWHdIc0xseW9HQ01iUDRTNUN1R2JvZ3haRW1nQnJJdEVtNEc3bDBydUh0SmU4MkFvRTJvakR3RmdURjlZTWZZUUFHY2tIeUhBZkFPNStOWFNQd3NYaHNjVFJodVBqTHNEU3d4eHNmVDVBUWxvaGtaQ1FrSkNRSURwRW9Hc2Roc01ETXpnajZMWHFCNTBtOE5kOGRlbDYyaDFIZjg0akpJUTl4eTRaRkRaWEJRNkZJVlMrT3YydTUrZUI2Qko2T2h4aXQ5UTFHMjd4Qi9SWUNQS3pWZ2JBWmtEdzl4dUl3UHNCWFBrTU9sOHRscGgrRmNDT0JkL2hheWVnQ1RkOUJFaUloTS9PNmV0Z3VXdDJHcndXNGR3WjFraUJkTlRRZmlJRS9IYzhOdDlzSjBSRXJBK3dDT0JOWXUzaG5lblVkRExCaXM3bzgvMk9jbjhUZDVoRThCR2lKVHJGNnhnWWFVWkhodklCOGVnMXRnZ29sbjhJNTQrU241T1FrSkNRa0xCVktHNzRRT1p3T3lBMFhjVzk0YXZvdjAxVEFjNXBGdXA5RmRIWlFDaEVSMjlQYnFzRnRQR1dvYWVBQWdWRE5MNHJvTFlBd0FTR0h6bUFyWnF0QXZmeWJWeXU5Q2ZSR2RBQXZtNEROTndUYkRvYzBPdml0b3NBZ0VoMXRES0ZJOVlESzVQaGpRM3hOdGsyTVhsekxNRGFuNjdZcUFueVdBQmZyOURRdlZYem9lRStJSFI3bStpOE1GYkMrd0J3V3R4MmpZTEJVY0RaNWRNQkFvTEx4SUl2cDdnaGZrRDBCTVh5KzhwYkdQMTMwVDhoSVNFaFliZFFhaitoWEg3L04wT0ZOMzNWYnF3cU54bUg5dmd5NHJuQjQ5cFZLa1A2NCtJeXpNY2JrUUZrNGcwN0FUcGlYNG43d2lQelF2Rm9BWFpBb3hLYzUva1lPWHZWMzJQTDFSMzRuNlllTFRRY0VYM2JHblBabXRuYVg1UTN0UjVtTUJ4Q05tUnVHdmlqTjN2cWtqcDJBOWNWMnlBdHovT2lCaU5rUWdoQURJQTIwU0Z3Q3hpMW52U2VRdXRLUTJNQnZ2bnUrblRtaEVNWW5wMzlESmlBMld3V2ZnSkRBRGdGSndIN2hFRFFxcU1OaWhDSkNha3JTQWsvMXZCWkFJd0IvZElYWHZRQmdDcElhbnhjSFg1c0NEajdhZjh2aElDSER4OWF5K1A5TXR2QUNkRDZmNEVKb0NZRlNuK3dLU3BRMmc4ZWFuZ3RZRStyRHVNOWt3Y29LL3R2Q2REblJ5bTIrblRtaEtvSlBIK09tOEJNcUZ1Z2ZyWUhsTlhuaWdSby9SKzkrOEpQZ0dRYjFCWXA5eVFLWWVEbzZNamZCOENlWWtEcGp3bW92bG9DcWs0UUVmQldILzMyYmJQaHJPNEV6N3h0M2tHQXNKK25vQVI4anZNVGc5RWo5VFAzRVdBOW92SnhCWFRCazVNVE1DWnFXVUM1Tng2ckg2WUpWTEtmZ0pNYWl3MHlnNSt5YkE2WkpBU1VxQmY4ZGZYQitnNDVBVU5HQUJBTEdCajlBd1MwcC91b0FqTzU0ZEJuQWVWZWhSSThNdWcrZGd5a1RXWlpPd3BremZVenJ3WFlCTVNhQUM2dis4QmNXQVNVOUhyTUQ0QXZZMzdBa3NOZ1haOEJ6Y0dVWnVnR1crRklwemZDbDdjM2NBSXFCdkoxT25ybHFFSjU5Vk13MTJXcFBPNEtOZDVmcS80SkNRa0pDVnVPRnkvQzVRVUU4OXIxZjM2S1pqM2FZZkJKTlV3OXdSa0hIR01QRnZLQWhXZjdTOHRDL0lIVkp3K09heXJhT21hYjFMQ045UzlMdzhCRWU1RVgyUmdGTzZyS2c4ZGcvR3hQMWdQcEx4QUQ2bUFOTnRORVBadE11NEpMeS9YOWFEWEl0VE5YdEdON29ia2Q0SHQ2Q25ESzlOZU8wcEhSWC92bWJmUXIzWTRZQ3VmaE4rcHpqaXRVcXZ0Y292M0ozS0QxK1B1L3hhWDRKNDV2TXlWa1JCWlVQaDRlSTFuWGZ6VHlWUkFXemo1UWcwTVdweW83S296cldHY3MydWpLSm9DRnd5QmV2YjM3OHQzYk1iNy9ZMUdLWlFuNEQveFdmZjZCRmRTdVA1Tng4S0ZpNDJIR2ZWOUFMUml2VUdIWGU5R0lxQitZd1BsSWNWQUxqNXVNeldNZkFZdGVBRm5BT2Z3ZFhnRFdINlhzNGhid0wvR0wrSjlKS1owd0N6aGhGbkRDTEdCRVlnL1ZBdXBPcW8xdjJmVytxcVd2MmdwV3dUeU9IVUQzQVdpMWZKU0FWMjgvLzFoOTNQb3ZQSFZNUUFGVjFxbVIvd3RmcTgvZjBJb0owc1lyK1djbW8vS3EvU3A4N0NHZ2llNEsya1NvL1FSNmVSaU94UkdKRnhrQkpXT1k2ZCt1aUtBRUlQbXpYeDVPSHY3MXc0VzhCelFwR3BOSDlPN1pUV0FoWS9IMDFNamE5dHQ4cDVNQWF4UlU1eWdDUzlwNWt2dkpvc0pQTUFIV2VnT1RjRkxOblowdUxBdW12eDNBRjJUTjJ0MXZWZmMzK1BadVM0QnEvMFhnZUV2UmdkV0pza2Q4ZUpLZitRRTg3YzFrMXh0Z1F2S0k2OCtIUVZFdjZqTEYxWXpBbzF6NExJZ2h1NG11WHQ0aHdDYytVRUpDUWtMQ0JqREdpV250eXNHSnRjOEQ2cWxjSXpJOERlSHpkYTUrK2dLbTZ1Y1VEODBYZUdyaUMvamhoKysrZ3c5UmRjNjEvaFhVSC9OMzhPb1Z2SnNUVDdRVVBOM1E1QnRhbVc4WU04Y0g2VDhaajE4VEJqcTk3dDhlYU5XNU1oUnRnbUpneXIzeEkrTjUvVXJqajhZVm5ZN1ZDVVpXY0VPaVU4YzZWRHFYYS9aUnJtT3BnaDB6T1ZnWG1PQktPOFpUZUExckkwQzdXdWdJclh2MVRRM0FFUEQ5anc4ZS9QaTlxYzlZUUQ3Q016dWNBTEprQktwa0ZGcndVSWc2VlZFWVg3dlUrUmhFd0VzOVY0Y3ZPTldzK3dpSXJLZTNwN0l5b0cxcVdzbFRIcnkwRmFwc2ZiODkvSjVlbklIY1ZSaXlCUm4wK0dvZUZPMEFPdkJVOFp6QUZqQVk0UFhxMlh5dXcwdERnTkpmalAwWklFZkd4Ulh1VXhQSDd1YVU2VitTNmNtdllWOEI3aUcvbGh3UHgyRUN6dFNmWi9xcktiNm9KbCtQa0FXdzZQWGx5NzJYYzdob1QvaGExMjZ5UGdLNEJYeFR5YWRVZjZOZ05xMXdSQTgzaEtsYmVueDhUQWdnYmY1STRUUDF4Ulk4VEwxOXdIeXVHd0R1QkYrUHg1TTFkb0tzRC9obTBRZWNtZ3hjVHNMUnVhN3ZrVGw4ZWc0WGlBRjlvalBVN1RYSm0wYS9qejVhZkRFRDhmWUI0M0krbjhNY0FzUGd1a2VCVTUyWU5mWGhvZHQwTVBnS1hTeFhYNFZoQUt3d1hmKzUzMnpndzJCbEVSVThmUUNNTlRBQjdwbUFOZm9CcDFWcXV2Q2tEL2dqWnNwYVhoZTZwM3pRbFA3K2xhU3ZkUkZWcjdHUWhxVk82WlZEY1ZVL1lQTTRPenc4d3haMHJya3FIaFNlaEkrOWNqSWhJU0ZodGVnVXI0Nis4NEh1WWo2NHMwUDZQd040MWdydk43M3UrenVqLzNPdDd2UG0va016MHdUR0JtWXd3d2Y4enJYUWJuMHJ6MllWLzdNK0RVQTVtbzBKM0RjRTNQYzVRaTQvSWplVVdGTVBmQU9YWWFiSDlGbncvTmRyQVBxYXozbHNFM3JkZDhFMzVNWW9JZ3MzdGZ4MCtKVE96Z1llZ09pbEI5QWg5RE55Y1ZxSEFaNFlxL1dmRU52UDhlcGplK251cUJoaC9aNnFIMC9KRHJNTkVwQTM5enYzRTVDekpnOXdXZUN5bk13bTJ3UVV4R1NxaGVaREVrNFRBa3FZeldiOWVicEdZVDhCOWpFRnNYM1NLYTVzQWYxMmdwVUIxQS9OVkRvY0dnSU92UlpnVzFEdWIvS2QrNEIrb3pYZTZkMDE0bDF2SjBqRW5BK0tLNDhDdmI1ZmIyWVVybXR3MElnSEl0QUhlRWJBdGQyV1RmcEY3K20wTE54N2I1TjFTRzlZVEVoSVNFallJZVFRRXE5OTBKM2t3dkp6cnRVVmZmelljcWNEWWgvZU1LV0FFRkNWRlhpSGZGTG9IMEQ1YTE4d1VJZk9wdHlPckhMbU8rZFdNVlF6WkgzR2c0UUNTa0JkMXRhNXVqMUtQYjRESVFDWDJ3UzRudlMxUmVpWEFMd1ltQk5RcFQ4V2xheCtUYXo1OFFraFlCTE04UGcwSmlMMFRVQ1BGckFVQVQxYlFMOTlnQ3Vsc05FK29PZFJ3TTUzYkhnVTJIay9JQ0VoSVNGaHR3RTcvUnhWOFdjQm4zNVdFRWZsWW9mZWs2dWZJNFZQYy9ROFE1YmZjenhBMGZnbS9QMEhYZVd0d3hUK3BBZ1FhSFd5Wm1WaU1XQzlUTDY4bXJ4OUJuQXB4S2U1dU1SUFcwK1BWRVJMbjY4MWlneVBoK3FyWGI0TngzUTl1NWFCeWtQOUdXNnBlMXN1MXMxZm1EdVVqVUN2dGovM0VGQzlHazN1eWZadGV5Q2wzdERJZS9wajNyK255OVVXdVFkYmJBRUtsL2lPNjM1aENsVDlsb0FQYTdRbTNsSGVPa3lxTVhDRTFyeW9ZSFFNUjJNUEFiZXVFOHdBTGk4dWNiZGZweU55b09yZjNnZzFlNmJ1ejdOTUpDUWtKQ1RzSXZqekFUR1pMNkxxS25lOTNxcHlEUHo1Z0pqTWw5RjFsYnRlYjFVNWV2L05Pc0U3eThoOElXVlh1ZXYxVnBXajRNOEgzRGNuYU9RRDdSc2VMT1REOWwxcDlWTGFRN00va29XMy9MNHB2Kys5dm9CZythek8ydUJ5d2VzdjhQTU93V3dZV3h6Tmw4NVd2dzRPOE94d2JIKzczTnJmVEpHN3l2SHNtZnMza1BxSVR6NzVSTkQ2VkU4a0wwc0ErY01oNjlaN3dDb3NJTEMvc0JRSzc4OElpTllIdno3ZUpjOXIvZGRId0FpOWc4NUJnT3QzRjRXaTEzZFlTTWdDOU50RzV0Q0JnSGdUMEcvZjZtTGlzU1lDTVFLRFRVcTRMQXJ2UDYvMVg0NEEvbnlBbzFOck9zRkRieWNGWFBaM3FzNU9rbCtmZDdLMHZPSEhKK3MyUUo5M0NLSHZZV3pWWWJTckhFZmZqc3lxamxSWE9ZNitYZGxWWGVtdWNrSkNRa0pDUWtJc0hBQzRObm43Q2FCdmE0dkx0NUFBQ0JOUWZVZ0VIU1pBZ0xoWkJGVC9uaTBnTTRKQWtNWFV0Z3dpV1VEcUEyNFNBYnMrQ2lRa0pDUWtKQ1NzRy9MbWVBTFJWWkJRZGwvb0t0bi9COXJxZXlYa3lnVHcrMzJUOUYrSEJYQjliNVQrMUFLcTVlM1Z4ME9BNi84TjZQMjUvcmUyRHlnYlVQMmxwYi9jR1F1bzk3KzUrcTlxQVRkZS8xVkhBWS8rdStvSEdQMXZrUi9RaVUxcHZoTVN0aHovQi9oMU9XaXlNcHN3QUFBQUFFbEZUa1N1UW1DQ1wiIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0dmFyIGV4ZWNPcHRpb25zID0geyBpZDogbW9kdWxlSWQsIG1vZHVsZTogbW9kdWxlLCBmYWN0b3J5OiBfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSwgcmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7IGhhbmRsZXIoZXhlY09wdGlvbnMpOyB9KTtcblx0bW9kdWxlID0gZXhlY09wdGlvbnMubW9kdWxlO1xuXHRleGVjT3B0aW9ucy5mYWN0b3J5LmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGV4ZWNPcHRpb25zLnJlcXVpcmUpO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGV4ZWN1dGlvbiBpbnRlcmNlcHRvclxuX193ZWJwYWNrX3JlcXVpcmVfXy5pID0gW107XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYWxsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5odSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYgPSAoKSA9PiAoXCJJY29ucy5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc29uXCIpOyIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcIkljb25zOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIGN1cnJlbnRNb2R1bGVEYXRhID0ge307XG52YXIgaW5zdGFsbGVkTW9kdWxlcyA9IF9fd2VicGFja19yZXF1aXJlX18uYztcblxuLy8gbW9kdWxlIGFuZCByZXF1aXJlIGNyZWF0aW9uXG52YXIgY3VycmVudENoaWxkTW9kdWxlO1xudmFyIGN1cnJlbnRQYXJlbnRzID0gW107XG5cbi8vIHN0YXR1c1xudmFyIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycyA9IFtdO1xudmFyIGN1cnJlbnRTdGF0dXMgPSBcImlkbGVcIjtcblxuLy8gd2hpbGUgZG93bmxvYWRpbmdcbnZhciBibG9ja2luZ1Byb21pc2VzO1xuXG4vLyBUaGUgdXBkYXRlIGluZm9cbnZhciBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycztcbnZhciBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJEID0gY3VycmVudE1vZHVsZURhdGE7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaS5wdXNoKGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdHZhciBtb2R1bGUgPSBvcHRpb25zLm1vZHVsZTtcblx0dmFyIHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKG9wdGlvbnMucmVxdWlyZSwgb3B0aW9ucy5pZCk7XG5cdG1vZHVsZS5ob3QgPSBjcmVhdGVNb2R1bGVIb3RPYmplY3Qob3B0aW9ucy5pZCwgbW9kdWxlKTtcblx0bW9kdWxlLnBhcmVudHMgPSBjdXJyZW50UGFyZW50cztcblx0bW9kdWxlLmNoaWxkcmVuID0gW107XG5cdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdG9wdGlvbnMucmVxdWlyZSA9IHJlcXVpcmU7XG59KTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkgPSB7fTtcblxuZnVuY3Rpb24gY3JlYXRlUmVxdWlyZShyZXF1aXJlLCBtb2R1bGVJZCkge1xuXHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblx0aWYgKCFtZSkgcmV0dXJuIHJlcXVpcmU7XG5cdHZhciBmbiA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG5cdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcblx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRzID0gaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzO1xuXHRcdFx0XHRpZiAocGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRwYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG5cdFx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG5cdFx0XHR9XG5cdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcblx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG5cdFx0XHRcdFx0cmVxdWVzdCArXG5cdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcblx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0KTtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdFx0fVxuXHRcdHJldHVybiByZXF1aXJlKHJlcXVlc3QpO1xuXHR9O1xuXHR2YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gcmVxdWlyZVtuYW1lXTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXF1aXJlW25hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblx0Zm9yICh2YXIgbmFtZSBpbiByZXF1aXJlKSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXF1aXJlLCBuYW1lKSAmJiBuYW1lICE9PSBcImVcIikge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSkpO1xuXHRcdH1cblx0fVxuXHRmbi5lID0gZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRyZXR1cm4gdHJhY2tCbG9ja2luZ1Byb21pc2UocmVxdWlyZS5lKGNodW5rSWQpKTtcblx0fTtcblx0cmV0dXJuIGZuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2R1bGVIb3RPYmplY3QobW9kdWxlSWQsIG1lKSB7XG5cdHZhciBob3QgPSB7XG5cdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuXHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG5cdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcblx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcblx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcblx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcblx0XHRfbWFpbjogY3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblx0XHRfcmVxdWlyZVNlbGY6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gbWUucGFyZW50cy5zbGljZSgpO1xuXHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gbW9kdWxlSWQ7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcblx0XHR9LFxuXG5cdFx0Ly8gTW9kdWxlIEFQSVxuXHRcdGFjdGl2ZTogdHJ1ZSxcblx0XHRhY2NlcHQ6IGZ1bmN0aW9uIChkZXAsIGNhbGxiYWNrKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdH0sXG5cdFx0ZGVjbGluZTogZnVuY3Rpb24gKGRlcCkge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcblx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuXHRcdFx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuXHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcblx0XHRcdFx0XHQocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKFxuXHRcdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gTWFuYWdlbWVudCBBUElcblx0XHRjaGVjazogaG90Q2hlY2ssXG5cdFx0YXBwbHk6IGhvdEFwcGx5LFxuXHRcdHN0YXR1czogZnVuY3Rpb24gKGwpIHtcblx0XHRcdGlmICghbCkgcmV0dXJuIGN1cnJlbnRTdGF0dXM7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHR2YXIgaWR4ID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG5cdFx0XHRpZiAoaWR4ID49IDApIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXG5cdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG5cdFx0ZGF0YTogY3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG5cdH07XG5cdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcblx0cmV0dXJuIGhvdDtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdHVzKG5ld1N0YXR1cykge1xuXHRjdXJyZW50U3RhdHVzID0gbmV3U3RhdHVzO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcblx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xufVxuXG5mdW5jdGlvbiB0cmFja0Jsb2NraW5nUHJvbWlzZShwcm9taXNlKSB7XG5cdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0c2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcblx0XHRcdGJsb2NraW5nUHJvbWlzZXMucHVzaChwcm9taXNlKTtcblx0XHRcdHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRibG9ja2luZ1Byb21pc2VzLnB1c2gocHJvbWlzZSk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pIHtcblx0aWYgKGJsb2NraW5nUHJvbWlzZXMubGVuZ3RoID09PSAwKSByZXR1cm4gZm4oKTtcblx0dmFyIGJsb2NrZXIgPSBibG9ja2luZ1Byb21pc2VzO1xuXHRibG9ja2luZ1Byb21pc2VzID0gW107XG5cdHJldHVybiBQcm9taXNlLmFsbChibG9ja2VyKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaG90Q2hlY2soYXBwbHlPblVwZGF0ZSkge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcblx0fVxuXHRzZXRTdGF0dXMoXCJjaGVja1wiKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uaG1yTSgpLnRoZW4oZnVuY3Rpb24gKHVwZGF0ZSkge1xuXHRcdGlmICghdXBkYXRlKSB7XG5cdFx0XHRzZXRTdGF0dXMoYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHNldFN0YXR1cyhcInByZXBhcmVcIik7XG5cblx0XHR2YXIgdXBkYXRlZE1vZHVsZXMgPSBbXTtcblx0XHRibG9ja2luZ1Byb21pc2VzID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblxuXHRcdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1yQykucmVkdWNlKGZ1bmN0aW9uIChcblx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdGtleVxuXHRcdFx0KSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yQ1trZXldKFxuXHRcdFx0XHRcdHVwZGF0ZS5jLFxuXHRcdFx0XHRcdHVwZGF0ZS5yLFxuXHRcdFx0XHRcdHVwZGF0ZS5tLFxuXHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLFxuXHRcdFx0XHRcdHVwZGF0ZWRNb2R1bGVzXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiBwcm9taXNlcztcblx0XHRcdH0sXG5cdFx0XHRbXSlcblx0XHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKGFwcGx5T25VcGRhdGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShhcHBseU9uVXBkYXRlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblxuXHRcdFx0XHRcdHJldHVybiB1cGRhdGVkTW9kdWxlcztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcInJlYWR5XCIpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG5cdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG5cdH0pO1xuXHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcblxuXHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuXHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcblx0XHRcdHJldHVybiByLmVycm9yO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0XHRzZXRTdGF0dXMoXCJhYm9ydFwiKTtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcnNbMF07XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcblx0c2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcblxuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcblx0fSk7XG5cblx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuXHRzZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuXHR2YXIgZXJyb3I7XG5cdHZhciByZXBvcnRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcblx0fTtcblxuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5hcHBseSkge1xuXHRcdFx0dmFyIG1vZHVsZXMgPSByZXN1bHQuYXBwbHkocmVwb3J0RXJyb3IpO1xuXHRcdFx0aWYgKG1vZHVsZXMpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gobW9kdWxlc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG5cdGlmIChlcnJvcikge1xuXHRcdHNldFN0YXR1cyhcImZhaWxcIik7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fSk7XG5cdH1cblxuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuXHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0fSk7XG5cdH1cblxuXHRzZXRTdGF0dXMoXCJpZGxlXCIpO1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycykgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiSWNvbnNcIjogMFxufTtcblxuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxudmFyIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3Q7XG52YXIgd2FpdGluZ1VwZGF0ZVJlc29sdmVzID0ge307XG5mdW5jdGlvbiBsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHJlc29sdmU7XG5cdFx0Ly8gc3RhcnQgdXBkYXRlIGNodW5rIGxvYWRpbmdcblx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5odShjaHVua0lkKTtcblx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0XHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZFxuXHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgaG90IHVwZGF0ZSBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCk7XG5cdH0pO1xufVxuXG5zZWxmW1wid2VicGFja0hvdFVwZGF0ZUljb25zXCJdID0gKGNodW5rSWQsIG1vcmVNb2R1bGVzLCBydW50aW1lKSA9PiB7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHRpZihjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0KSBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBjdXJyZW50VXBkYXRlUnVudGltZS5wdXNoKHJ1bnRpbWUpO1xuXHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0oKTtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdH1cbn07XG5cbnZhciBjdXJyZW50VXBkYXRlQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGU7XG52YXIgY3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZVJ1bnRpbWU7XG5mdW5jdGlvbiBhcHBseUhhbmRsZXIob3B0aW9ucykge1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSBkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0gdW5kZWZpbmVkO1xuXHRmdW5jdGlvbiBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHModXBkYXRlTW9kdWxlSWQpIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjaGFpbjogW2lkXSxcblx0XHRcdFx0aWQ6IGlkXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG5cdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG5cdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG5cdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdGlmIChcblx0XHRcdFx0IW1vZHVsZSB8fFxuXHRcdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkICYmICFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWQpXG5cdFx0XHQpXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcblx0XHRcdFx0dmFyIHBhcmVudCA9IF9fd2VicGFja19yZXF1aXJlX18uY1twYXJlbnRJZF07XG5cdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcblx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcblx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuXHRcdFx0XHRxdWV1ZS5wdXNoKHtcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuXHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuXHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG5cdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuXHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcblx0XHR9XG5cdH1cblxuXHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuXHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG5cdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cblx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZShtb2R1bGUpIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIG1vZHVsZS5pZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuXHRcdCk7XG5cdH07XG5cblx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gY3VycmVudFVwZGF0ZSkge1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0XHR2YXIgbmV3TW9kdWxlRmFjdG9yeSA9IGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdO1xuXHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuXHRcdFx0dmFyIHJlc3VsdDtcblx0XHRcdGlmIChuZXdNb2R1bGVGYWN0b3J5KSB7XG5cdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyhtb2R1bGVJZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQgPSB7XG5cdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cblx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuXHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG5cdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG5cdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcblx0XHRcdH1cblx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZXJyb3I6IGFib3J0RXJyb3Jcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChkb0FwcGx5KSB7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gbmV3TW9kdWxlRmFjdG9yeTtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcblx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG5cdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuXHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGN1cnJlbnRVcGRhdGUgPSB1bmRlZmluZWQ7XG5cblx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuXHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG5cdGZvciAodmFyIGogPSAwOyBqIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbal07XG5cdFx0aWYgKFxuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdICYmXG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQgJiZcblx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcblx0XHRcdGFwcGxpZWRVcGRhdGVbb3V0ZGF0ZWRNb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuXHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcblx0XHRcdCFfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF0uaG90Ll9zZWxmSW52YWxpZGF0ZWRcblx0XHQpIHtcblx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcblx0XHRcdFx0bW9kdWxlOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRyZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF0uaG90Ll9yZXF1aXJlU2VsZixcblx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcblxuXHRyZXR1cm4ge1xuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdH0pO1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSB1bmRlZmluZWQ7XG5cblx0XHRcdHZhciBpZHg7XG5cdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcblx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdHZhciBkYXRhID0ge307XG5cblx0XHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG5cdFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRkaXNwb3NlSGFuZGxlcnNbal0uY2FsbChudWxsLCBkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckRbbW9kdWxlSWRdID0gZGF0YTtcblxuXHRcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuXHRcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuXHRcdFx0XHRkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdHZhciBjaGlsZCA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuXHRcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG5cdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuXHRcdFx0dmFyIGRlcGVuZGVuY3k7XG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0bW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhcHBseTogZnVuY3Rpb24gKHJlcG9ydEVycm9yKSB7XG5cdFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcblx0XHRcdGZvciAodmFyIHVwZGF0ZU1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhhcHBsaWVkVXBkYXRlLCB1cGRhdGVNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bdXBkYXRlTW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVt1cGRhdGVNb2R1bGVJZF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcnVuIG5ldyBydW50aW1lIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudFVwZGF0ZVJ1bnRpbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWVbaV0oX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHR2YXIgYWNjZXB0Q2FsbGJhY2sgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHRpZiAoYWNjZXB0Q2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoYWNjZXB0Q2FsbGJhY2spICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goYWNjZXB0Q2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcy5wdXNoKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGNhbGxiYWNrcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrc1trXS5jYWxsKG51bGwsIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBvID0gMDsgbyA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IG8rKykge1xuXHRcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tvXTtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aXRlbS5yZXF1aXJlKG1vZHVsZUlkKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH1cblx0fTtcbn1cbl9fd2VicGFja19yZXF1aXJlX18uaG1ySS5qc29ucCA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgYXBwbHlIYW5kbGVycykge1xuXHRpZiAoIWN1cnJlbnRVcGRhdGUpIHtcblx0XHRjdXJyZW50VXBkYXRlID0ge307XG5cdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IFtdO1xuXHRcdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHR9XG5cdGlmICghX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gX193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXTtcblx0fVxufTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1yQy5qc29ucCA9IGZ1bmN0aW9uIChcblx0Y2h1bmtJZHMsXG5cdHJlbW92ZWRDaHVua3MsXG5cdHJlbW92ZWRNb2R1bGVzLFxuXHRwcm9taXNlcyxcblx0YXBwbHlIYW5kbGVycyxcblx0dXBkYXRlZE1vZHVsZXNMaXN0XG4pIHtcblx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB7fTtcblx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSByZW1vdmVkQ2h1bmtzO1xuXHRjdXJyZW50VXBkYXRlID0gcmVtb3ZlZE1vZHVsZXMucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuXHRcdG9ialtrZXldID0gZmFsc2U7XG5cdFx0cmV0dXJuIG9iajtcblx0fSwge30pO1xuXHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRjaHVua0lkcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0aWYgKFxuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkXG5cdFx0KSB7XG5cdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpKTtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdH1cblx0fSk7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXIgPSBmdW5jdGlvbiAoY2h1bmtJZCwgcHJvbWlzZXMpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rcyAmJlxuXHRcdFx0XHQhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGVDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkXG5cdFx0XHQpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkpO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0gPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgZmV0Y2ggPT09IFwidW5kZWZpbmVkXCIpIHRocm93IG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydDogbmVlZCBmZXRjaCBBUElcIik7XG5cdHJldHVybiBmZXRjaChfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYoKSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRpZihyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkgcmV0dXJuOyAvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG5cdFx0aWYoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXBkYXRlIG1hbmlmZXN0IFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG5cdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG59O1xuXG4vLyBubyBkZWZlcnJlZCBzdGFydHVwXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uXG5cbi8vIG5vIGRlZmVycmVkIHN0YXJ0dXAiLCIvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaWNvbnMuanNcIik7XG4iLCIvKipcclxuICogVmFyaW91cyBpbnRlcmZhY2Ugb3B0aW9ucyB3ZSBjYW4gc2VsZWN0XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBvcHRpb25zLlxyXG4gKiBAcGFyYW0gb3B0aW9ucyBVc2VyIHByb3ZpZGVkIG9wdGlvbnMgdGhhdCBvdmVycmlkZSB0aGUgZGVmYXVsdCB2YWx1ZXMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIE9wdGlvbnMob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgPyBvcHRpb25zIDoge307XHJcblxyXG4gICAgLy8vIE9wdGlvbnM6IHZlcnRpY2FsLCBob3Jpem9udGFsLCBib3RoXHJcbiAgICB0aGlzLnJlc2l6ZSA9ICd2ZXJ0aWNhbCc7XHJcblxyXG4gICAgLy8vIFRoZSByZXNpemluZyBoYW5kbGVcclxuICAgIHRoaXMuaGFuZGxlID0gJ2Jhcic7XHJcblxyXG4gICAgLy8vIFJhbmdlIGZvciBncmFiYmluZ1xyXG4gICAgdGhpcy5ncmFiU2l6ZSA9IDEwO1xyXG5cclxuICAgIC8vLyBNYXhpbXVtIHNwZWVkIHdlIGNhbiByZXNpemUgaW4gcGl4ZWxzIHBlciBzZWNvbmRcclxuICAgIHRoaXMubWF4U3BlZWQgPSAxMDAwO1xyXG5cclxuICAgIC8vLyBVc2UgYSBtYXNrICh1c2VmdWwgZm9yIGlmcmFtZXNcclxuICAgIHRoaXMudXNlTWFzayA9IHRydWU7XHJcblxyXG4gICAgZm9yKHZhciBwcm9wZXJ0eSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbiBcIiArIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IG9wdGlvbnNbcHJvcGVydHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsImltcG9ydCBSZXNpemVyIGZyb20gJy4vcmVzaXplci5qcyc7XHJcblxyXG5leHBvcnQge1Jlc2l6ZXIgYXMgZGVmYXVsdH07XHJcbiIsIlxyXG5leHBvcnQgZnVuY3Rpb24gUmVzaXplckFjdHVhbChlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Jlc2l6ZXInKTtcclxuXHJcbiAgICAvLyBUaW1lb3V0IHBlcmlvZCBmb3IgYW5pbWF0ZWQgcmVzaXppbmdcclxuICAgIGNvbnN0IHRpbWVvdXRQZXJpb2QgPSAyMDtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gSGFuZGxlIG9wdGlvbnNcclxuICAgIC8vXHJcbiAgICBsZXQgZ3JhYlNpemUgPSBvcHRpb25zLmdyYWJTaXplO1xyXG5cclxuICAgIGxldCBoYW5kbGUgPSBvcHRpb25zLmhhbmRsZTtcclxuICAgIGlmKGhhbmRsZSA9PT0gJ2JhcicpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlc2l6ZSA9ICdub25lJztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmJvcmRlckJvdHRvbSA9IGdyYWJTaXplICsgJ3B4IHNvbGlkICMxODQ1M0InO1xyXG4gICAgfSBlbHNlIGlmKGhhbmRsZSA9PT0gJ2hhbmRsZScpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlc2l6ZSA9ICd2ZXJ0aWNhbCc7XHJcbiAgICB9IGVsc2UgaWYoaGFuZGxlID09PSAnbm9uZScpIHtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVzaXplID0gJ25vbmUnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyQm90dG9tID0gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLyBBcmUgbW91c2UgbW92ZSBldmVudCBoYW5kbGVycyBpbnN0YWxsZWQ/XHJcbiAgICBsZXQgaW5zdGFsbGVkTW91c2VMaXN0ZW5lcnMgPSBmYWxzZTtcclxuXHJcbiAgICAvLy8gQXJlIHRvdWNoIG1vdmUgZXZlbnQgaGFuZGxlcnMgaW5zdGFsbGVkP1xyXG4gICAgbGV0IGluc3RhbGxlZFRvdWNoTGlzdGVuZXJzID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IG1hc2sgPSBudWxsO1xyXG5cclxuICAgIC8vLyBHZXQgdGhlIG1pbmltdW0gaGVpZ2h0IGFuZCB3aWR0aCBwcm9wZXJ0aWVzXHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGxldCBoZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgIGxldCB3aWR0aCA9IHJlY3Qud2lkdGg7XHJcblxyXG4gICAgbGV0IG1pbkhlaWdodCA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkubWluSGVpZ2h0O1xyXG4gICAgbWluSGVpZ2h0ID0gbWluSGVpZ2h0LnN1YnN0cigwLCBtaW5IZWlnaHQubGVuZ3RoIC0gMik7XHJcbiAgICBsZXQgbWluV2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLm1pbldpZHRoO1xyXG4gICAgbWluV2lkdGggPSBtaW5XaWR0aC5zdWJzdHIoMCwgbWluV2lkdGgubGVuZ3RoIC0gMik7XHJcblxyXG4gICAgbGV0IHRpbWVyID0gbnVsbDtcclxuXHJcbiAgICBsZXQgdGFyZ2V0V2lkdGggPSBudWxsO1xyXG4gICAgbGV0IHRhcmdldEhlaWdodCA9IG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gSW5zdGFsbCB0aGUgbW91c2UgZG93biBhbmQgdG91Y2ggc3RhcnQgbGlzdGVuZXJzXHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25MaXN0ZW5lcik7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG91Y2hTdGFydExpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgLy8gSW5zdGFsbCB0aGUgY3Vyc29yIGxpc3RlbmVyXHJcbiAgICAgICAgLy8gVGhpcyBzd2FwcyB0aGUgY3Vyc29yIHdoZW4gd2UgaG92ZXIgdGhlIG1vdXNlIG92ZXIgdGhlIGdyYWIgYmFyXHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBjdXJzb3JMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0VGFyZ2V0KHR3LCB0aCkge1xyXG4gICAgICAgIHRhcmdldFdpZHRoID0gdHc7XHJcbiAgICAgICAgdGFyZ2V0SGVpZ2h0ID0gdGg7XHJcblxyXG4gICAgICAgIC8vIElmIGEgdGltZXIgaXMgbm90IGFjdGl2ZSwgY3JlYXRlIG9uZS5cclxuICAgICAgICBpZih0aW1lciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aW1lck1vdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRpbWVyTW92ZXIoKSB7XHJcbiAgICAgICAgdGltZXIgPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBtYXhQaXhlbHMgPSBvcHRpb25zLm1heFNwZWVkICogdGltZW91dFBlcmlvZCAvIDEwMDA7XHJcblxyXG4gICAgICAgIGlmKHRhcmdldEhlaWdodCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SGVpZ2h0ID0gK2hlaWdodDtcclxuICAgICAgICAgICAgbGV0IGRpZmYgPSB0YXJnZXRIZWlnaHQgLSBjdXJyZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgaWYoTWF0aC5hYnMoZGlmZikgPiBtYXhQaXhlbHMpIHtcclxuICAgICAgICAgICAgICAgIGRpZmYgPSBkaWZmIDwgMCA/IC1tYXhQaXhlbHMgOiBtYXhQaXhlbHM7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBjdXJyZW50SGVpZ2h0ICsgZGlmZjtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcnICsgaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vdCByYXRlIGxpbWl0ZWRcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IHRhcmdldEhlaWdodDtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJycgKyBoZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0SGVpZ2h0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGFyZ2V0V2lkdGggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFdpZHRoID0gK3dpZHRoO1xyXG4gICAgICAgICAgICBsZXQgZGlmZiA9IHRhcmdldFdpZHRoIC0gY3VycmVudFdpZHRoO1xyXG5cclxuICAgICAgICAgICAgaWYoTWF0aC5hYnMoZGlmZikgPiBtYXhQaXhlbHMpIHtcclxuICAgICAgICAgICAgICAgIGRpZmYgPSBkaWZmIDwgMCA/IC1tYXhQaXhlbHMgOiBtYXhQaXhlbHM7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IGN1cnJlbnRXaWR0aCArIGRpZmY7XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcnICsgd2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gTm90IHJhdGUgbGltaXRlZFxyXG4gICAgICAgICAgICAgICAgd2lkdGggPSB0YXJnZXRXaWR0aDtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnJyArIHdpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIHRhcmdldFdpZHRoID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGFyZ2V0SGVpZ2h0ICE9PSBudWxsIHx8IHRhcmdldFdpZHRoICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dCh0aW1lck1vdmVyLCB0aW1lb3V0UGVyaW9kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxldCBpbml0aWFsWCwgaW5pdGlhbFk7XHJcbiAgICBsZXQgaW5pdGlhbFdpZHRoLCBpbml0aWFsSGVpZ2h0O1xyXG4gICAgbGV0IGdyYWJUeXBlID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0IHRoZSByZXNpemluZyBvbiBhIG1vdXNlIGRvd24gb3IgdG91Y2hcclxuICAgICAqIEBwYXJhbSB4IE1vdXNlIG9yIHRvdWNoIFggaW4gcGl4ZWxzXHJcbiAgICAgKiBAcGFyYW0geSBNb3VzZSBvciB0b3VjaCBZIGluIHBpeGVsc1xyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBtb3ZlU3RhcnQoeCwgeSkge1xyXG4gICAgICAgIGluaXRpYWxYID0geDtcclxuICAgICAgICBpbml0aWFsWSA9IHk7XHJcbiAgICAgICAgbGV0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHdpZHRoID0gK2VsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgaW5pdGlhbFdpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgaGVpZ2h0ID0gK2VsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGluaXRpYWxIZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGFyZ2V0V2lkdGggPSBudWxsO1xyXG4gICAgICAgIHRhcmdldEhlaWdodCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgYSBtb3VzZSBvciBmaW5nZXIgbW92ZSB0byBhIG5ldyBwb3NpdGlvbixcclxuICAgICAqIHJlc3VsdGluZyBpbiBhIHJlc2l6ZSByZXF1ZXN0LlxyXG4gICAgICogQHBhcmFtIHggTW91c2Ugb3IgdG91Y2ggWCBpbiBwaXhlbHNcclxuICAgICAqIEBwYXJhbSB5IE1vdXNlIG9yIHRvdWNoIFkgaW4gcGl4ZWxzXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIG1vdmVUbyh4LCB5KSB7XHJcbiAgICAgICAgbGV0IGR4ID0geCAtIGluaXRpYWxYO1xyXG4gICAgICAgIGxldCBkeSA9IHkgLSBpbml0aWFsWTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1dpZHRoID0gbnVsbDtcclxuICAgICAgICBsZXQgbmV3SGVpZ2h0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYoZ3JhYlR5cGUgPT09ICdob3Jpem9udGFsJyB8fCBncmFiVHlwZSA9PT0gJ2JvdGgnKSB7XHJcbiAgICAgICAgICAgIC8vIENvbXB1dGUgYSBkZXNpcmVkIG5ldyB3aWR0aFxyXG4gICAgICAgICAgICBuZXdXaWR0aCA9IGluaXRpYWxXaWR0aCArIGR4O1xyXG4gICAgICAgICAgICBpZiAobmV3V2lkdGggPCBtaW5XaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSBtaW5XaWR0aDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGdyYWJUeXBlID09PSAndmVydGljYWwnIHx8IGdyYWJUeXBlID09PSAnYm90aCcpIHtcclxuICAgICAgICAgICAgY29uc3Qgd2FzSGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBDb21wdXRlIGEgZGVzaXJlZCBuZXcgaGVpZ2h0XHJcbiAgICAgICAgICAgIG5ld0hlaWdodCA9IGluaXRpYWxIZWlnaHQgKyBkeTtcclxuICAgICAgICAgICAgaWYgKG5ld0hlaWdodCA8IG1pbkhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gbWluSGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGFyZ2V0KG5ld1dpZHRoLCBuZXdIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBNb3VzZSBIYW5kbGluZ1xyXG4gICAgLy9cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZURvd25MaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGUucGFnZVg7XHJcbiAgICAgICAgY29uc3QgeSA9IGUucGFnZVk7XHJcblxyXG4gICAgICAgIGdyYWJUeXBlID0gb25IYW5kbGUoeCwgeSwgZmFsc2UpO1xyXG4gICAgICAgIGlmKGdyYWJUeXBlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIG1vdmVTdGFydCh4LCB5KTtcclxuXHJcbiAgICAgICAgICAgIGluc3RhbGxNYXNrKCk7XHJcbiAgICAgICAgICAgIGluc3RhbGxNb3VzZUhhbmRsZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlTW92ZUxpc3RlbmVyKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKGUuYnV0dG9ucyAhPT0gMSkge1xyXG4gICAgICAgICAgICByZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbW92ZVRvKGUucGFnZVgsIGUucGFnZVkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlVXBMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgcmVtb3ZlQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1vdXNlSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgcmVtb3ZlSGFuZGxlcnMoKTtcclxuXHJcbiAgICAgICAgaW5zdGFsbGVkTW91c2VMaXN0ZW5lcnMgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUxpc3RlbmVyLCBmYWxzZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBMaXN0ZW5lciwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBUb3VjaCBIYW5kbGluZ1xyXG4gICAgLy9cclxuXHJcbiAgICBmdW5jdGlvbiB0b3VjaFN0YXJ0TGlzdGVuZXIoZSkge1xyXG4gICAgICAgIGNvbnN0IHggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XHJcbiAgICAgICAgY29uc3QgeSA9IGUudG91Y2hlc1swXS5wYWdlWTtcclxuXHJcbiAgICAgICAgZ3JhYlR5cGUgPSBvbkhhbmRsZSh4LCB5LCB0cnVlKTtcclxuICAgICAgICBpZihncmFiVHlwZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBtb3ZlU3RhcnQoeCwgeSk7XHJcblxyXG4gICAgICAgICAgICBpbnN0YWxsTWFzaygpO1xyXG4gICAgICAgICAgICBpbnN0YWxsVG91Y2hIYW5kbGVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b3VjaE1vdmVMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAvL2UucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgeCA9IGUudG91Y2hlc1swXS5wYWdlWDtcclxuICAgICAgICBjb25zdCB5ID0gZS50b3VjaGVzWzBdLnBhZ2VZO1xyXG5cclxuICAgICAgICBtb3ZlVG8oeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG91Y2hFbmRMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgcmVtb3ZlQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5zdGFsbFRvdWNoSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgcmVtb3ZlSGFuZGxlcnMoKTtcclxuXHJcbiAgICAgICAgaW5zdGFsbGVkVG91Y2hMaXN0ZW5lcnMgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hFbmRMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIE1hc2tcclxuICAgIC8vXHJcblxyXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1hc2soKSB7XHJcbiAgICAgICAgaWYoIW9wdGlvbnMudXNlTWFzaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBFbnN1cmUgbm9uZSBjdXJyZW50bHkgZXhpc3RzXHJcbiAgICAgICAgcmVtb3ZlTWFzaygpO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIG1hc2suc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgIG1hc2suc3R5bGUubGVmdCA9IDA7XHJcbiAgICAgICAgbWFzay5zdHlsZS50b3AgPSAwO1xyXG4gICAgICAgIG1hc2suc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICBtYXNrLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICBtYXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgbWFzay5zdHlsZS56SW5kZXggPSAxMDAwMDtcclxuICAgICAgICBtYXNrLnN0eWxlLm9wYWNpdHkgPSAwLjU7XHJcbiAgICAgICAgbWFzay5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcblxyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsKCkge1xyXG4gICAgICAgIGlmKHRpbWVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgICAgIHRpbWVyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbW92ZUhhbmRsZXJzKCk7XHJcbiAgICAgICAgcmVtb3ZlTWFzaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUhhbmRsZXJzKCkge1xyXG4gICAgICAgIGlmKGluc3RhbGxlZE1vdXNlTGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGluc3RhbGxlZE1vdXNlTGlzdGVuZXJzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpbnN0YWxsZWRUb3VjaExpc3RlbmVycykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaE1vdmVMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hFbmRMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hFbmRMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGluc3RhbGxlZFRvdWNoTGlzdGVuZXJzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZU1hc2soKSB7XHJcbiAgICAgICAgaWYobWFzayAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1hc2spO1xyXG4gICAgICAgICAgICBtYXNrID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgYW4geCx5IGxvY2F0aW9uIGlzIG92ZXIgYSBoYW5kbGUgZm9yIG1hbmlwdWxhdGluZ1xyXG4gICAgICogdGhlIHJlc2l6ZWFibGUgb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHggbG9jYXRpb24gaW4gcGl4ZWxzXHJcbiAgICAgKiBAcGFyYW0geSBsb2NhdGlvbiBpbiBwaXhlbHNcclxuICAgICAqIEByZXR1cm5zIHN0cmluZ3xudWxsIGlmIG5vdCwgJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnYm90aCcgaWYgb3ZlciBoYW5kbGUgYW5kIG1vZGUgYXZhaWxhYmxlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBvbkhhbmRsZSh4LCB5LCB0b3VjaCkge1xyXG4gICAgICAgIGxldCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2xvcCA9IHRvdWNoID8gMTAgOiAwO1xyXG5cclxuICAgICAgICBsZXQgYm90dG9tID0gcmVjdC5ib3R0b20gKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgbGV0IHZlcnQgPSB5ID49IGJvdHRvbSAtIGdyYWJTaXplIC0gc2xvcDtcclxuXHJcbiAgICAgICAgbGV0IHJpZ2h0ID0gcmVjdC5yaWdodCArIHdpbmRvdy5wYWdlWE9mZnNldDtcclxuICAgICAgICBsZXQgaG9yeiA9IHggPj0gcmlnaHQgLSBncmFiU2l6ZSAtIHNsb3A7XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnMucmVzaXplID09PSAnYm90aCcpIHtcclxuICAgICAgICAgICAgaWYodmVydCAmJiBob3J6KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2JvdGgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHZlcnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAndmVydGljYWwnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihob3J6KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hvcml6b250YWwnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZigob3B0aW9ucy5yZXNpemUgPT09ICdib3RoJyB8fCBvcHRpb25zLnJlc2l6ZSA9PT0gJ3ZlcnRpY2FsJykgJiYgdmVydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKChvcHRpb25zLnJlc2l6ZSA9PT0gJ2JvdGgnIHx8IG9wdGlvbnMucmVzaXplID09PSAnaG9yaXpvbnRhbCcpICYmIGhvcnopIHtcclxuICAgICAgICAgICAgcmV0dXJuICdob3Jpem9udGFsJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgbGV0IGN1cnNvciA9IDA7XHJcblxyXG4gICAgZnVuY3Rpb24gY3Vyc29yTGlzdGVuZXIoZXZlbnQpIHtcclxuICAgICAgICAvLyBTd2FwIHRoZSBjdXJzb3Igd2hlbiB3ZSBhcmUgb3ZlciB0aGUgaGFuZGxlXHJcbiAgICAgICAgaWYgKG9uSGFuZGxlKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSwgZmFsc2UpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJzb3IgIT09IDIpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yID0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJzb3IgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ3RleHQnO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBWZXJ0aWNhbCByZXNpemUgc3VwcG9ydCBmb3IgZGl2LCB0ZXh0YXJlYSwgaWZyYW1lLCBldGMuXHJcbiAqXHJcbiAqIEEgcHJvYmxlbSB3aXRoIHRoZSByZXNpemUgZmVhdHVyZSBvZiB0ZXh0YXJlYSBhbmQgaWZyYW1lIGlzIHRoYXQgaXQgZG9lcyBub3Qgd29yayBpbiBhbGxcclxuICogYnJvd3NlcnMgKGVzcGVjaWFsbHkgRWRnZSkgYW5kIGlzIG9mdGVuIHF1aXRlIHF1aXJreS4gVGhpcyBzbWFsbCBwYWNrYWdlIGFsbG93cyB5b3UgdG9cclxuICogYWRkIHZlcnRpY2FsIHJlc2l6ZSBhYmlsaXR5IHRvIGp1c3QgYWJvdXQgYW55dGhpbmcuXHJcbiAqXHJcbiAqIEB2ZXJzaW9uIDIuNC4wIEFkZGVkIHRvdWNoIHN1cHBvcnQuIExpbWl0ZWQgc3BlZWQgb2YgcmVzaXppbmcgdG8gYXZvaWQgaXNzdWUgd2hlbiBzY3JvbGxpbmcuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtSZXNpemVyQWN0dWFsfSBmcm9tICcuL3Jlc2l6ZXItYWN0dWFsJztcclxuaW1wb3J0IHtPcHRpb25zfSBmcm9tICcuL09wdGlvbnMnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDb25zdHJ1Y3RvciBmb3IgYSBSZXNpemVyIG9iamVjdFxyXG4gKiBAcGFyYW0gc2VsIFNlbGVjdG9yIG9yIERPTSBlbGVtZW50XHJcbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgb2JqZWN0LlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBSZXNpemVyKHNlbCwgb3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IG5ldyBPcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuICAgIGlmKHR5cGVvZiBzZWwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbCk7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbmV3IFJlc2l6ZXJBY3R1YWwoZWxlbWVudHNbaV0sIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZihzZWwubm9kZVR5cGUpIHtcclxuICAgICAgICBuZXcgUmVzaXplckFjdHVhbChzZWwsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNpemVyO1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImRpdi5kaWFsb2ctY2wge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NDQ0NDQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgbWluLXdpZHRoOiAxNTBweDtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtaW4taGVpZ2h0OiAxNTBweDtcXG4gIG1heC1oZWlnaHQ6IDYwMHB4OyB9XFxuXFxuZGl2LmNsLWRpYWxvZy1ib3R0b20ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZsZXg6IDAgMCA0NHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjY2NjO1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXFxuZGl2LmRpYWxvZy1jbC1ib2R5IHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwOyB9XFxuICBkaXYuZGlhbG9nLWNsLWJvZHkgcDpmaXJzdC1jaGlsZCwgZGl2LmRpYWxvZy1jbC1ib2R5IGgxOmZpcnN0LWNoaWxkLCBkaXYuZGlhbG9nLWNsLWJvZHkgaDI6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAwOyB9XFxuICBkaXYuZGlhbG9nLWNsLWJvZHkgcDpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbmRpdi5jbC1kaWFsb2ctYm90dG9tIGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtaW4td2lkdGg6IDdlbTtcXG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMDtcXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAtMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogIzQ0NDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cXG5cXG5kaXYuY2wtZGlhbG9nLWJvdHRvbSBidXR0b246YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcblxcbmRpdi5jbC1kaWFsb2ctYm90dG9tIGJ1dHRvbjpkaXNhYmxlZCxcXG5kaXYuY2wtZGlhbG9nLWJvdHRvbSBidXR0b25bZGlzYWJsZWRdIHtcXG4gIGNvbG9yOiAjY2NjOyB9XFxuXFxuZGl2LmRpYWxvZy1jbC10b3Age1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZmxleDogMCAwIDI1cHg7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogbm93cmFwOyB9XFxuICBkaXYuZGlhbG9nLWNsLXRvcCBoMSB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiA0cHggNHB4IDAgMTBweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICBkaXYuZGlhbG9nLWNsLXRvcCBidXR0b24uZGlhbG9nLWNsLXRiLWJ1dHRvbiB7XFxuICAgIGZsZXg6IDAgMCAyNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICBkaXYuZGlhbG9nLWNsLXRvcCBidXR0b24uZGlhbG9nLWNsLXRiLWJ1dHRvbiBzcGFuIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogNHB4O1xcbiAgICAgIHRvcDogNHB4OyB9XFxuICBkaXYuZGlhbG9nLWNsLXRvcCAuZGlhbG9nLWNsLXRiLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlODExMjM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbmRpdi5kaWFsb2ctY2wgZGl2Lm1lc3NhZ2UtY2wge1xcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxuICBwYWRkaW5nOiAxZW07IH1cXG5cXG5kaXYuZGlhbG9nLWNsLWNvbHVtbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIGRpdi5kaWFsb2ctY2wtY29sdW1uID4gZGl2IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nOiAxLjVlbSAwIDIuMGVtIDA7IH1cXG4gIGRpdi5kaWFsb2ctY2wtY29sdW1uIHNlbGVjdCB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc2Fzcy9wYXJ0aWFscy9fZGlhbG9nLnNjc3NcIixcIndlYnBhY2s6Ly8uL3Nhc3MvcGFydGlhbHMvX2JvdHRvbS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zYXNzL3BhcnRpYWxzL19ib2R5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3Nhc3MvcGFydGlhbHMvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc2Fzcy9wYXJ0aWFscy9fdGl0bGViYXIuc2Nzc1wiLFwid2VicGFjazovLy4vc2Fzcy9wYXJ0aWFscy9fbWVzc2FnZWJveC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zYXNzL3BhcnRpYWxzL19jb2x1bW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixNQUFNO0VBRU4sWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUNsQnJCO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixlQUFlLEVBQUE7O0FDVGpCO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFVBQVUsRUFBQTtFQUxaO0lBUUksYUFBYSxFQUFBO0VBUmpCO0lBWUksZ0JBQWdCLEVBQUE7O0FDVnBCO0VBRUkscUJBQXFCO0VBQ3JCLGNBTGM7RUFNZCx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGtEQUFrRDtFQUNsRCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsd0ZBQWdGO0VBQ2hGLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFoQnBCO0VBb0JJLHVGQUErRSxFQUFBOztBQXBCbkY7O0VBeUJJLFdBQVcsRUFBQTs7QUMzQmY7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0FBYztFQUNkLGVBQWU7RUFFZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBO0VBVm5CO0lBYUksWUFBWTtJQUVaLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsa0RBQWtEO0lBQ2xELGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUE7RUFwQnJCO0lBeUJJLGNBQWM7SUFFZCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGFBQWEsRUFBQTtJQW5DakI7TUFzQ00sa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxRQUFRLEVBQUE7RUF4Q2Q7SUE2Q0kseUJBQXlCO0lBQ3pCLGVBQWUsRUFBQTs7QUM5Q25CO0VBRUksaUJBQWlCO0VBRWpCLFlBQVksRUFBQTs7QUNBaEI7RUFDRSxrQkFBa0IsRUFBQTtFQURwQjtJQUlJLHFCQUFxQjtJQUNyQix3QkFBd0IsRUFBQTtFQUw1QjtJQVNJLFdBQVcsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJkaXYuZGlhbG9nLWNsIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDQ0NDQ0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gICAgbWluLXdpZHRoOiAxNTBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgbWF4LWhlaWdodDogNjAwcHg7XFxyXFxufVxcclxcblxcclxcblwiLFwiZGl2LmNsLWRpYWxvZy1ib3R0b20ge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZsZXg6IDAgMCA0NHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgLy8gI2VlZWVlZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjY2NjO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cIixcImRpdi5kaWFsb2ctY2wtYm9keSB7XFxyXFxuICBmbGV4OiAwIDEgYXV0bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHJcXG4gIHA6Zmlyc3QtY2hpbGQsIGgxOmZpcnN0LWNoaWxkLCBoMjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBwOmxhc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIixcIiRidXR0b24td2lkdGg6IDdlbTtcXHJcXG5cXHJcXG5kaXYuY2wtZGlhbG9nLWJvdHRvbSB7XFxyXFxuICBidXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIG1pbi13aWR0aDogJGJ1dHRvbi13aWR0aDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwO1xcclxcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDFweCByZ2JhKDAsMCwwLC4xKSwgaW5zZXQgMCAtMTBweCAyMHB4IHJnYmEoMCwwLDAsLjEpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgY29sb3I6ICM0NDQ7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBidXR0b246YWN0aXZlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMXB4IHJnYmEoMCwwLDAsLjEpLCBpbnNldCAwIDEwcHggMjBweCByZ2JhKDAsMCwwLC4xKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGJ1dHRvbjpkaXNhYmxlZCxcXHJcXG4gIGJ1dHRvbltkaXNhYmxlZF0ge1xcclxcbiAgICBjb2xvcjogI2NjYztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsXCJkaXYuZGlhbG9nLWNsLXRvcCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmbGV4OiAwIDAgMjVweDtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuXFxyXFxuICBoMSB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiA0cHggNHB4IDAgMTBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gVGl0bGUgYmFyIGJ1dHRvbnNcXHJcXG4gIGJ1dHRvbi5kaWFsb2ctY2wtdGItYnV0dG9uIHtcXHJcXG4gICAgZmxleDogMCAwIDI1cHg7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcblxcclxcbiAgICBzcGFuIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgbGVmdDogNHB4O1xcclxcbiAgICAgIHRvcDogNHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGlhbG9nLWNsLXRiLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlODExMjM7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXCIsXCJkaXYuZGlhbG9nLWNsIHtcXHJcXG4gIGRpdi5tZXNzYWdlLWNsIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gIH1cXHJcXG59XCIsXCIvL1xcclxcbi8vIFN0YW5kYXJkIGRpYWxvZyBib3ggc3R5bGU6IHNpbmdsZSBjb2x1bW4gb2YgY29udHJvbHNcXHJcXG4vL1xcclxcblxcclxcbmRpdi5kaWFsb2ctY2wtY29sdW1uIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gID5kaXYge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDEuNWVtIDAgMi4wZW0gMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNlbGVjdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzNdIS4vX2RpYWxvZy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVszXSEuL19kaWFsb2cuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscywgdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0dmFyIGV4ZWNPcHRpb25zID0geyBpZDogbW9kdWxlSWQsIG1vZHVsZTogbW9kdWxlLCBmYWN0b3J5OiBfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSwgcmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7IGhhbmRsZXIoZXhlY09wdGlvbnMpOyB9KTtcblx0bW9kdWxlID0gZXhlY09wdGlvbnMubW9kdWxlO1xuXHRleGVjT3B0aW9ucy5mYWN0b3J5LmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGV4ZWNPcHRpb25zLnJlcXVpcmUpO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbl9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgZXhlY3V0aW9uIGludGVyY2VwdG9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBbXTtcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5hbWRPID0ge307IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmh1ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1yRiA9ICgpID0+IChcIkRpYWxvZy5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc29uXCIpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ2MjQ0Y2JlYWMxYzVmNTc5NTI3XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZSA9IE9iamVjdC5jcmVhdGUobW9kdWxlKTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHNldDogKCkgPT4ge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFUyBNb2R1bGVzIG1heSBub3QgYXNzaWduIG1vZHVsZS5leHBvcnRzIG9yIGV4cG9ydHMuKiwgVXNlIEVTTSBleHBvcnQgc3ludGF4LCBpbnN0ZWFkOiAnICsgbW9kdWxlLmlkKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwiRGlhbG9nOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIGN1cnJlbnRNb2R1bGVEYXRhID0ge307XG52YXIgaW5zdGFsbGVkTW9kdWxlcyA9IF9fd2VicGFja19yZXF1aXJlX18uYztcblxuLy8gbW9kdWxlIGFuZCByZXF1aXJlIGNyZWF0aW9uXG52YXIgY3VycmVudENoaWxkTW9kdWxlO1xudmFyIGN1cnJlbnRQYXJlbnRzID0gW107XG5cbi8vIHN0YXR1c1xudmFyIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycyA9IFtdO1xudmFyIGN1cnJlbnRTdGF0dXMgPSBcImlkbGVcIjtcblxuLy8gd2hpbGUgZG93bmxvYWRpbmdcbnZhciBibG9ja2luZ1Byb21pc2VzO1xuXG4vLyBUaGUgdXBkYXRlIGluZm9cbnZhciBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycztcbnZhciBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJEID0gY3VycmVudE1vZHVsZURhdGE7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaS5wdXNoKGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdHZhciBtb2R1bGUgPSBvcHRpb25zLm1vZHVsZTtcblx0dmFyIHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKG9wdGlvbnMucmVxdWlyZSwgb3B0aW9ucy5pZCk7XG5cdG1vZHVsZS5ob3QgPSBjcmVhdGVNb2R1bGVIb3RPYmplY3Qob3B0aW9ucy5pZCwgbW9kdWxlKTtcblx0bW9kdWxlLnBhcmVudHMgPSBjdXJyZW50UGFyZW50cztcblx0bW9kdWxlLmNoaWxkcmVuID0gW107XG5cdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdG9wdGlvbnMucmVxdWlyZSA9IHJlcXVpcmU7XG59KTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkgPSB7fTtcblxuZnVuY3Rpb24gY3JlYXRlUmVxdWlyZShyZXF1aXJlLCBtb2R1bGVJZCkge1xuXHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblx0aWYgKCFtZSkgcmV0dXJuIHJlcXVpcmU7XG5cdHZhciBmbiA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG5cdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcblx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRzID0gaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzO1xuXHRcdFx0XHRpZiAocGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRwYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG5cdFx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG5cdFx0XHR9XG5cdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcblx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG5cdFx0XHRcdFx0cmVxdWVzdCArXG5cdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcblx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0KTtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdFx0fVxuXHRcdHJldHVybiByZXF1aXJlKHJlcXVlc3QpO1xuXHR9O1xuXHR2YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gcmVxdWlyZVtuYW1lXTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXF1aXJlW25hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblx0Zm9yICh2YXIgbmFtZSBpbiByZXF1aXJlKSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXF1aXJlLCBuYW1lKSAmJiBuYW1lICE9PSBcImVcIikge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSkpO1xuXHRcdH1cblx0fVxuXHRmbi5lID0gZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRyZXR1cm4gdHJhY2tCbG9ja2luZ1Byb21pc2UocmVxdWlyZS5lKGNodW5rSWQpKTtcblx0fTtcblx0cmV0dXJuIGZuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2R1bGVIb3RPYmplY3QobW9kdWxlSWQsIG1lKSB7XG5cdHZhciBob3QgPSB7XG5cdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuXHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG5cdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcblx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcblx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcblx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcblx0XHRfbWFpbjogY3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblx0XHRfcmVxdWlyZVNlbGY6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gbWUucGFyZW50cy5zbGljZSgpO1xuXHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gbW9kdWxlSWQ7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcblx0XHR9LFxuXG5cdFx0Ly8gTW9kdWxlIEFQSVxuXHRcdGFjdGl2ZTogdHJ1ZSxcblx0XHRhY2NlcHQ6IGZ1bmN0aW9uIChkZXAsIGNhbGxiYWNrKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdH0sXG5cdFx0ZGVjbGluZTogZnVuY3Rpb24gKGRlcCkge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcblx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuXHRcdFx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuXHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcblx0XHRcdFx0XHQocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKFxuXHRcdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gTWFuYWdlbWVudCBBUElcblx0XHRjaGVjazogaG90Q2hlY2ssXG5cdFx0YXBwbHk6IGhvdEFwcGx5LFxuXHRcdHN0YXR1czogZnVuY3Rpb24gKGwpIHtcblx0XHRcdGlmICghbCkgcmV0dXJuIGN1cnJlbnRTdGF0dXM7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHR2YXIgaWR4ID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG5cdFx0XHRpZiAoaWR4ID49IDApIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXG5cdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG5cdFx0ZGF0YTogY3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG5cdH07XG5cdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcblx0cmV0dXJuIGhvdDtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdHVzKG5ld1N0YXR1cykge1xuXHRjdXJyZW50U3RhdHVzID0gbmV3U3RhdHVzO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcblx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xufVxuXG5mdW5jdGlvbiB0cmFja0Jsb2NraW5nUHJvbWlzZShwcm9taXNlKSB7XG5cdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0c2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcblx0XHRcdGJsb2NraW5nUHJvbWlzZXMucHVzaChwcm9taXNlKTtcblx0XHRcdHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRibG9ja2luZ1Byb21pc2VzLnB1c2gocHJvbWlzZSk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pIHtcblx0aWYgKGJsb2NraW5nUHJvbWlzZXMubGVuZ3RoID09PSAwKSByZXR1cm4gZm4oKTtcblx0dmFyIGJsb2NrZXIgPSBibG9ja2luZ1Byb21pc2VzO1xuXHRibG9ja2luZ1Byb21pc2VzID0gW107XG5cdHJldHVybiBQcm9taXNlLmFsbChibG9ja2VyKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaG90Q2hlY2soYXBwbHlPblVwZGF0ZSkge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcblx0fVxuXHRzZXRTdGF0dXMoXCJjaGVja1wiKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uaG1yTSgpLnRoZW4oZnVuY3Rpb24gKHVwZGF0ZSkge1xuXHRcdGlmICghdXBkYXRlKSB7XG5cdFx0XHRzZXRTdGF0dXMoYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHNldFN0YXR1cyhcInByZXBhcmVcIik7XG5cblx0XHR2YXIgdXBkYXRlZE1vZHVsZXMgPSBbXTtcblx0XHRibG9ja2luZ1Byb21pc2VzID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblxuXHRcdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1yQykucmVkdWNlKGZ1bmN0aW9uIChcblx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdGtleVxuXHRcdFx0KSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yQ1trZXldKFxuXHRcdFx0XHRcdHVwZGF0ZS5jLFxuXHRcdFx0XHRcdHVwZGF0ZS5yLFxuXHRcdFx0XHRcdHVwZGF0ZS5tLFxuXHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLFxuXHRcdFx0XHRcdHVwZGF0ZWRNb2R1bGVzXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiBwcm9taXNlcztcblx0XHRcdH0sXG5cdFx0XHRbXSlcblx0XHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKGFwcGx5T25VcGRhdGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShhcHBseU9uVXBkYXRlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblxuXHRcdFx0XHRcdHJldHVybiB1cGRhdGVkTW9kdWxlcztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcInJlYWR5XCIpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG5cdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG5cdH0pO1xuXHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcblxuXHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuXHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcblx0XHRcdHJldHVybiByLmVycm9yO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0XHRzZXRTdGF0dXMoXCJhYm9ydFwiKTtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcnNbMF07XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcblx0c2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcblxuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcblx0fSk7XG5cblx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuXHRzZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuXHR2YXIgZXJyb3I7XG5cdHZhciByZXBvcnRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcblx0fTtcblxuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5hcHBseSkge1xuXHRcdFx0dmFyIG1vZHVsZXMgPSByZXN1bHQuYXBwbHkocmVwb3J0RXJyb3IpO1xuXHRcdFx0aWYgKG1vZHVsZXMpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gobW9kdWxlc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG5cdGlmIChlcnJvcikge1xuXHRcdHNldFN0YXR1cyhcImZhaWxcIik7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fSk7XG5cdH1cblxuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuXHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0fSk7XG5cdH1cblxuXHRzZXRTdGF0dXMoXCJpZGxlXCIpO1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycykgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiRGlhbG9nXCI6IDBcbn07XG5cblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbnZhciBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0O1xudmFyIHdhaXRpbmdVcGRhdGVSZXNvbHZlcyA9IHt9O1xuZnVuY3Rpb24gbG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSByZXNvbHZlO1xuXHRcdC8vIHN0YXJ0IHVwZGF0ZSBjaHVuayBsb2FkaW5nXG5cdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaHUoY2h1bmtJZCk7XG5cdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWRcblx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGhvdCB1cGRhdGUgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQpO1xuXHR9KTtcbn1cblxuc2VsZltcIndlYnBhY2tIb3RVcGRhdGVEaWFsb2dcIl0gPSAoY2h1bmtJZCwgbW9yZU1vZHVsZXMsIHJ1bnRpbWUpID0+IHtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdGlmKGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QpIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIGN1cnJlbnRVcGRhdGVSdW50aW1lLnB1c2gocnVudGltZSk7XG5cdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSgpO1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0fVxufTtcblxudmFyIGN1cnJlbnRVcGRhdGVDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZTtcbnZhciBjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcztcbnZhciBjdXJyZW50VXBkYXRlUnVudGltZTtcbmZ1bmN0aW9uIGFwcGx5SGFuZGxlcihvcHRpb25zKSB7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXI7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB1bmRlZmluZWQ7XG5cdGZ1bmN0aW9uIGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyh1cGRhdGVNb2R1bGVJZCkge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG5cdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoYWluOiBbaWRdLFxuXHRcdFx0XHRpZDogaWRcblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcblx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcblx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhbW9kdWxlIHx8XG5cdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcblx0XHRcdClcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW3BhcmVudElkXTtcblx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcblx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuXHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG5cdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG5cdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0aWQ6IHBhcmVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG5cdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG5cdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcblx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGJbaV07XG5cdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG5cdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cblx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuXHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKG1vZHVsZSkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgbW9kdWxlLmlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG5cdFx0KTtcblx0fTtcblxuXHRmb3IgKHZhciBtb2R1bGVJZCBpbiBjdXJyZW50VXBkYXRlKSB7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRcdHZhciBuZXdNb2R1bGVGYWN0b3J5ID0gY3VycmVudFVwZGF0ZVttb2R1bGVJZF07XG5cdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG5cdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0aWYgKG5ld01vZHVsZUZhY3RvcnkpIHtcblx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKG1vZHVsZUlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdCA9IHtcblx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuXHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcblx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG5cdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcblx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcblx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuXHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRlcnJvcjogYWJvcnRFcnJvclxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvQXBwbHkpIHtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBuZXdNb2R1bGVGYWN0b3J5O1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuXHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcblx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y3VycmVudFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuXHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG5cdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcblx0Zm9yICh2YXIgaiA9IDA7IGogPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBqKyspIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tqXTtcblx0XHRpZiAoXG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF0gJiZcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZCAmJlxuXHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuXHRcdFx0YXBwbGllZFVwZGF0ZVtvdXRkYXRlZE1vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG5cdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuXHRcdFx0IV9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuXHRcdCkge1xuXHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuXHRcdFx0XHRtb2R1bGU6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdHJlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXS5ob3QuX3JlcXVpcmVTZWxmLFxuXHRcdFx0XHRlcnJvckhhbmRsZXI6IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuXG5cdHJldHVybiB7XG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0fSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHVuZGVmaW5lZDtcblxuXHRcdFx0dmFyIGlkeDtcblx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG5cdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cblx0XHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuXHRcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcblx0XHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGRpc3Bvc2VIYW5kbGVyc1tqXS5jYWxsKG51bGwsIGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yRFttb2R1bGVJZF0gPSBkYXRhO1xuXG5cdFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG5cdFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG5cdFx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZS5jaGlsZHJlbltqXV07XG5cdFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG5cdFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcblx0XHRcdFx0XHRpZiAoaWR4ID49IDApIHtcblx0XHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG5cdFx0XHR2YXIgZGVwZW5kZW5jeTtcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGFwcGx5OiBmdW5jdGlvbiAocmVwb3J0RXJyb3IpIHtcblx0XHRcdC8vIGluc2VydCBuZXcgY29kZVxuXHRcdFx0Zm9yICh2YXIgdXBkYXRlTW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGFwcGxpZWRVcGRhdGUsIHVwZGF0ZU1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVt1cGRhdGVNb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBydW4gbmV3IHJ1bnRpbWUgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50VXBkYXRlUnVudGltZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlUnVudGltZVtpXShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdHZhciBhY2NlcHRDYWxsYmFjayA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdGlmIChhY2NlcHRDYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihhY2NlcHRDYWxsYmFjaykgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChhY2NlcHRDYWxsYmFjayk7XG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzLnB1c2goZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgY2FsbGJhY2tzLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzW2tdLmNhbGwobnVsbCwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIG8gPSAwOyBvIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgbysrKSB7XG5cdFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW29dO1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpdGVtLnJlcXVpcmUobW9kdWxlSWQpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fVxuXHR9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJLmpzb25wID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBhcHBseUhhbmRsZXJzKSB7XG5cdGlmICghY3VycmVudFVwZGF0ZSkge1xuXHRcdGN1cnJlbnRVcGRhdGUgPSB7fTtcblx0XHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gW107XG5cdFx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdH1cblx0aWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdO1xuXHR9XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLmpzb25wID0gZnVuY3Rpb24gKFxuXHRjaHVua0lkcyxcblx0cmVtb3ZlZENodW5rcyxcblx0cmVtb3ZlZE1vZHVsZXMsXG5cdHByb21pc2VzLFxuXHRhcHBseUhhbmRsZXJzLFxuXHR1cGRhdGVkTW9kdWxlc0xpc3Rcbikge1xuXHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHt9O1xuXHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHJlbW92ZWRDaHVua3M7XG5cdGN1cnJlbnRVcGRhdGUgPSByZW1vdmVkTW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG5cdFx0b2JqW2tleV0gPSBmYWxzZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9LCB7fSk7XG5cdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdGNodW5rSWRzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRpZiAoXG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHQpIHtcblx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkpO1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0fVxuXHR9KTtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtciA9IGZ1bmN0aW9uIChjaHVua0lkLCBwcm9taXNlcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzICYmXG5cdFx0XHRcdCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZUNodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHRcdCkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSk7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yTSA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBmZXRjaCA9PT0gXCJ1bmRlZmluZWRcIikgdGhyb3cgbmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0OiBuZWVkIGZldGNoIEFQSVwiKTtcblx0cmV0dXJuIGZldGNoKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaG1yRigpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSByZXR1cm47IC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcblx0XHRpZighcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1cGRhdGUgbWFuaWZlc3QgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KTtcbn07XG5cbi8vIG5vIGRlZmVycmVkIHN0YXJ0dXBcblxuLy8gbm8ganNvbnAgZnVuY3Rpb25cblxuLy8gbm8gZGVmZXJyZWQgc3RhcnR1cCIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAubW9kdWxlcy5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=