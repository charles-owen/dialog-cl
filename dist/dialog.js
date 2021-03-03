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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Dialog": () => (/* reexport safe */ _src_Dialog_js__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _src_polyfills_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/polyfills/all.js */ "./src/polyfills/all.js");
/* harmony import */ var _src_polyfills_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_polyfills_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_Dialog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Dialog.js */ "./src/Dialog.js");
/* harmony import */ var _src_MessageBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/MessageBox.js */ "./src/MessageBox.js");
/* harmony import */ var _src_dialog_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/_dialog.scss */ "./src/_dialog.scss");
/* harmony import */ var icons_cl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons-cl */ "../icons-cl/dist/icons.js");





_src_Dialog_js__WEBPACK_IMPORTED_MODULE_1__.default.MessageBox = _src_MessageBox_js__WEBPACK_IMPORTED_MODULE_2__.default;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_Dialog_js__WEBPACK_IMPORTED_MODULE_1__.default);


/***/ }),

/***/ "./src/Body.js":
/*!*********************!*\
  !*** ./src/Body.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Body": () => (/* binding */ Body)
/* harmony export */ });
/* harmony import */ var _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools.js */ "./src/DOM/Tools.js");
/**
 * @file
 * Middle section of dialog box
 */

var Body = function Body(dialog, parentDiv) {
  var options = dialog.options;
  var div = document.createElement('div');
  div.classList.add('dialog-cl-body');
  _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__.default.addContent(div, options.content); // div = Tools.createClassedDiv('dialog-cl-body', options.content);

  parentDiv.appendChild(div);
  this.div = div;
};

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
/* harmony export */   "Tools": () => (/* binding */ Tools),
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
/* harmony import */ var resizer_cl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! resizer-cl */ "../resizer-cl/index.js");







/**
 * Flexible and configurable dialog box object
 * @constructor
 *
 * @version 1.0.4 Touch support for title bar dragging
 * @property {element} form Get the form DOM element (if used)
 */

var Dialog = function Dialog(options) {
  var _this = this;

  options = new _Options_js__WEBPACK_IMPORTED_MODULE_0__.Options(options);
  this.options = options;
  var body = null,
      mask = null,
      bottom = null;
  var form = null;
  Object.defineProperties(this, {
    form: {
      get: function get() {
        return form;
      }
    }
  });

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
    var container = div;

    if (options.form) {
      // Create the optional surrounding form
      form = document.createElement('form');
      div.appendChild(form);
      container = form;
    }

    new _TitleBar__WEBPACK_IMPORTED_MODULE_1__.TitleBar(_this, container);
    body = new _Body_js__WEBPACK_IMPORTED_MODULE_2__.Body(_this, container);

    if (options.buttons !== false) {
      bottom = new _Bottom_js__WEBPACK_IMPORTED_MODULE_3__.default(_this, container);
    }

    mask = new _Mask_js__WEBPACK_IMPORTED_MODULE_5__.Mask(_this);
    place(div, options.parent);
    document.addEventListener('keydown', keydown, true);
  };

  var keydown = function keydown(event) {
    if (event.keyCode === 27) {
      event.preventDefault();
      event.stopPropagation();

      _this.close();
    }
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
  /**
   * Place the dialog box centered in the parent.
   * @param div Dialog box div
   * @param parent Parent div
   */


  var place = function place(div, parent) {
    var parentWid;
    var parentHit;

    if (parent === null) {
      parentWid = window.innerWidth;
      parentHit = window.innerHeight;
    } else {
      parentWid = parent.offsetWidth;
      parentHit = parent.offsetHeight;
    }

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
    document.removeEventListener('keydown', keydown, true);
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
/* harmony export */   "Mask": () => (/* binding */ Mask)
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

  this.modal = true; /// Specifies what element the dialog box should be centered in.

  this.parent = null; /// Should we add a form?

  this.form = true;

  for (var property in options) {
    if (options.hasOwnProperty(property)) {
      if (!this.hasOwnProperty(property)) {
        throw new Error("Invalid option " + property);
      }

      this[property] = options[property];
    }
  }
};

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


          var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADwCAMAAADYSUr5AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAABDlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxUYW9AAAAWXRSTlMAL2ZKCEBgGRAzUBq/ImOeRY+UP22gnCApzA0xASwWVSeZwxNxgCM0R8+vaEgKhRw4U+8EHkt/H1pCgoyoov0kAlEDITJqtbjfYocGkW88sq18vsaryLyqpZmKC7AAAA7mSURBVHja7V0JY9u2DqZcy5QcJ26zrZnjrk1zrE3X1/b12H1vb+++T/z/P/JIyRIB8LJiR3Zifs4FUQfxCSQBkFKESEhI2AJIkDuuP2w5AytXT0JYf4kZ0Dv3SwizQNCgBPD6kHJdKvEWAFvFwAXY8dWfvZoEt0CbAMnrQ8r5HbQI4IfbF7B2lj0yYNXfrUKg3GZQBA0IQg1isbMM7rTeBs4t2K4iv8G2hQTvsG0BgQr0bwFuUgK3MGjBzh2sPiBkgv33AZseBXgT6n8USI5QQkJCQkJCQsLGPMEN+0HSitaAO+8yoBAAD/Blp3yAlRBSZ++VEkcFLAKsHfjuNFyU1gU4ATIYPPYaDFn1d9c4UOzIqMjA4SKSAoSKAOivgYMzBeSvsVwmHyCDfMbSB5sPhyVcZz5AxprgtoXDt30USEhISEhISEjYoKe1ujO/0vlhswrYoU9QoSsEStDt+jahEDkbhLfY6rFisHehh4OvzH2BYAUcpeHru84QIsgqt04GMQJJhYDtAY4T2vUBr4Lgul7o+na4DDECIBhvg4jw6zo8sAtVcLE3eAkCYZ0wyJ/biEMmFGxATgthjDsOD5to/Apd1Iu2cccaIgiXR87IbgdEb0jkAhDs90BEmnD/o8A1Hx8fJhMSEhISEhJ2FasvS13RzZCO1ej+U7r80OhUVeTy3Sqw1AXC8TwsUQFULvDk1BJend4ZAqGLa3o/liIIXt8R33IFIumHQEainlg0FNm1dSx2l0ECImvD3WYWYiDInwSImZcrIQQ8HAYczQYsyAqHHdG49ciGWKIC7lJ3dAwQiOfBYQP+wy0CrBrY1aPlvInFCXBXwHsLlyoGCMbP4S5CuGbogxZEmgBrItEm4G7l0ruHtJe82AoE2ojDwFgTF9YMfYQAGckHyHAfAO5+NXSPwsXhscTRhuPjLsDSwxxsfT5AQlohkZCQkJCQIDpEoGsdhsMDMzgj6LXqB50m8Nd8del62h1Hf84jJIQ9xy4ZFDZXBQ6FIVS+Ov2u5+eB6BJ6Ohxit9Q1G27xB/RYCPKzVgbAZkDw9xuIwPsBXPkMOl8tlph+FcCOBd/hayegCTd9BEiIhM/O6etguWt2GrwW4dwZ1kiBdNTQfiIE/Hc8Nt9sJ0RErA+wCOBNYu3hnenUdDLBis7o8/2Ocn8Td5hE8BGiJTrF6xgYaUZHhvIB8eg1tggoln8I54+Sn5OQkJCQkLBVKG74QOZwOyA0XcW94avov01TAc5pFup9FdHZQChER29PbqsFtPGWoaeAAgVDNL4roLYAwASGHzmArZqtAvfybVyu9CfRGdAAvm4DNNwTbDoc0OvitosAgEh1tDKFI9YDK5PhjQ3xNtk2MXlzLMDan67YqAnyWABfr9DQvVXzoeE+IHR7m+i8MFbC+wBwWtx2jYLBUcDZ5dMBAoLLxIIvp7ghfkD0BMXy+8pbGP130T8hISEhYbdQaj+hXH7/N0OFN33VbqwqNxmH9vgy4rnB49pVKkP64+IyzMcbkQFk4g07ATpiX4n7wiPzQvFoAXZAoxKc5/kYOXvV32PL1R34n6YeLTQcEX3bGnPZmtnaX5Q3tR5mMBxCNmRuGvijN3vqkjp2A9cV2yAtz/OiBiNkQghADIA20SFwCxi1nvSeQutKQ2MBvvnu+nTmhEMYnp39DJiA2WwWfgJDADgFJwH7hEDQqqMNihCJCakrSAk/1vBZAIwB/dIXXvQBgCpIanxcHX5sCDj7af8vhICHDx9ay+P9MtvACdD6f4EJoCYFSn+wKSpQ2g8eangtYE+rDuM9kwcoK/tvCdDnRym2+nTmhKoJPH+Om8BMqFugfrYHlNXnigRo/R+9+8JPgGQb1BYp9yQKYeDo6MjfB8CeYkDpjwmovloCqk4QEfBWH/32bbPhrO4Ez7xt3kGAsJ+noAR8jvMTg9Ej9TP3EWA9ovJxBXTBk5MTMCZqWUC5Nx6rH6YJVLKfgJMaiw0yg5+ybA6ZJASUqBf8dfXB+g45AUNGABALGBj9AwS0p/uoAjO54dBnAeVehRI8Mug+dgykTWZZOwpkzfUzrwXYBMSaAC6v+8BcWASU9HrMD4AvY37AksNgXZ8BzcGUZugGW+FIpzfCl7c3cAIqBvJ1OnrlqEJ59VMw12WpPO4KNd5fq/4JCQkJCVuOFy/C5QUE89r1f36KZj3aYfBJNUw9wRkHHGMPFvKAhWf7S8tC/IHVJw+OayraOmab1LCN9S9Lw8BEe5EX2RgFO6rKg8dg/GxP1gPpLxAD6mANNtNEPZtMu4JLy/X9aDXItTNXtGN7obkd4Ht6CnDK9NeO0pHRX/vmbfQr3Y4YCufhN+pzjitUqvtcov3J3KD1+Pu/xaX4J45vMyVkRBZUPh4eI1nXfzTyVRAWzj5Qg0MWpyo7KozrWGcs2ujKJoCFwyBevb378t3bMb7/Y1GKZQn4D/xWff6BFdSuP5Nx8KFi42HGfV9ALRivUGHXe9GIqB+YwPlIcVALj5uMzWMfAYteAFnAOfwdXgDWH6Xs4hbwL/GL+J9JKZ0wCzhhFnDCLGBEYg/VAupOqo1v2fW+qqWv2gpWwTyOHUD3AWi1fJSAV28//1h93PovPHVMQAFV1qmR/wtfq8/f0IoJ0sYr+Wcmo/Kq/Sp87CGgie4K2kSo/QR6eRiOxRGJFxkBJWOY6d+uiKAEIPmzXx5OHv71w4W8BzQpGpNH9O7ZTWAhY/H01Mja9tt8p5MAaxRU5ygCS9p5kvvJosJPMAHWegOTcFLNnZ0uLAumvx3AF2TN2t1vVfc3+PZuS4Bq/0XgeEvRgdWJskd8eJKf+QE87c1k1xtgQvKI68+HQVEv6jLF1YzAo1z4LIghu4muXt4hwCc+UEJCQkLCBjDGiWntysGJtc8D6qlcIzI8DeHzda5++gKm6ucUD80XeGriC/jhh+++gw9Rdc61/hXUH/N38OoVvJsTT7QUPN3Q5BtamW8YM8cH6T8Zj18TBjq97t8eaNW5MhRtgmJgyr3xI+N5/Urjj8YVnY7VCUZWcEOiU8c6VDqXa/ZRrmOpgh0zOVgXmOBKO8ZTeA1rI0C7WugIrXv1TQ3AEPD9jw8e/Pi9qc9YQD7CMzucALJkBKpkFFrwUIg6VVEYX7vU+RhEwEs9V4cvONWs+wiIrKe3p7IyoG1qWslTHry0Fapsfb89/J5enIHcVRiyBRn0+GoeFO0AOvBU8ZzAFjAY4PXq2Xyuw0tDgNJfjP0ZIEfGxRXuUxPH7uaU6V+S6cmvYV8B7iG/lhwPx2ECztSfZ/qrKb6oJl+PkAWw6PXly72Xc7hoT/ha126yPgK4BXxTyadUf6NgNq1wRA83hKlbenx8TAggbf5I4TP1xRY8TL19wHyuGwDuBF+Px5M1doKsD/hm0QecmgxcTsLRua7vkTl8eg4XiAF9ojPU7TXJm0a/jz5afDED8fYB43I+n8McAsPgukeBU52YNfXhodt0MPgKXSxXX4VhAKwwXf+532zgw2BlERU8fQCMNTAB7pmANfoBp1VquvCkD/gjZspaXhe6p3zQlP7+laSvdRFVr7GQhqVO6ZVDcVU/YPM4Ozw8wxZ0rrkqHhSehI+9cjIhISFhtegUr46+84HuYj64s0P6PwN41grvN73u+zuj/3Ot7vPm/kMz0wTGBmYwwwf8zrXQbn0rz2YV/7M+DUA5mo0J3DcE3Pc5Qi4/IjeUWFMPfAOXYabH9Fnw/NdrAPqaz3lsE3rdd8E35MYoIgs3tfx0+JTOzgYegOilB9Ah9DNycVqHAZ4Yq/WfENvP8epje+nuqBhh/Z6qH0/JDrMNEpA39zv3E5CzJg9wWeCynMwm2wQUxGSqheZDEk4TAkqYzWb9ebpGYT8B9jEFsX3SKa5sAf12gpUB1A/NVDocGgIOvRZgW1Dub/Kd+4B+ozXe6d014l1vJ0jEnA+KK48Cvb5fb2YUrmtw0IgHItAHeEbAtd2WTfpF7+m0LNx7b5N1SG9YTEhISEjYIeQQEq990J3kwvJzrtUVffzYcqcDYh/eMKWAEFCVFXiHfFLoH0D5a18wUIfOptyOrHLmO+dWMVQzZH3Gg4QCSkBd1ta5uj1KPb4DIQCX2wS4nvS1ReiXALwYmBNQpT8Wlax+Taz58QkhYBLM8Pg0JiL0TUCPFrAUAT1bQL99gCulsNE+oOdRwM53bHgU2Hk/ICEhISFhtwE7/RxV8WcBn35WEEflYofek6ufI4VPc/Q8Q5bfczxA0fgm/P0HXeWtwxT+pAgQaHWyZmViMWC9TL68mrx9BnApxKe5uMRPW0+PVERLn681igyPh+qrXb4Nx3Q9u5aBykP9GW6pe1su1s1fmDuUjUCvtj/3EFC9Gk3uyfZteyCl3tDIe/pj3r+ny9UWuQdbbAEKl/iO635hClT9loAPa7Qm3lHeOkyqMXCE1ryoYHQMR2MPAbeuE8wALi8ucbdfpyNyoOrf3gg1e6buz7NMJCQkJCTsIvjzATGZL6LqKne93qpyDPz5gJjMl9F1lbteb1U5ev/NOsE7y8h8IWVXuev1VpWj4M8H3DcnaOQD7RseLOTD9l1p9VLaQ7M/koW3/L4pv++9voBg+azO2uBywesv8PMOwWwYWxzNl85Wvw4O8OxwbH+73NrfTJG7yvHsmfs3kPqITz75RND6VE8kL0sA+cMh69Z7wCosILC/sBQK788IiNYHvz7eJc9r/ddHwAi9g85BgOt3F4Wi13dYSMgC9NtG5tCBgHgT0G/f6mLisSYCMQKDTUq4LArvP6/1X44A/nyAo1NrOsFDbycFXPZ3qs5Okl+fd7K0vOHHJ+s2QJ93CKHvYWzVYbSrHEffjsyqjlRXOY6+XdlVXemuckJCQkJCQkIsHAC4Nnn7CaBva4vLt5AACBNQfUgEHSZAgLhZBFT/ni0gM4JAkMXUtgwiWUDqA24SAbs+CiQkJCQkJCSsG/LmeALRVZBQdl/oKtn/B9rqeyXkygTw+32T9F+HBXB9b5T+1AKq5e3Vx0OA6/8N6P25/re2DygbUP2lpb/cGQuo97+5+q9qATde/1VHAY/+u+oHGP1vkR/QiU1pvhMSthz/B/h1OWiyMpswAAAAAElFTkSuQmCC";
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
          return "e0ac1235ed53cfc1f268";
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

/***/ "../resizer-cl/index.js":
/*!******************************!*\
  !*** ../resizer-cl/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _src_resizer_js__WEBPACK_IMPORTED_MODULE_0__.Resizer)
/* harmony export */ });
/* harmony import */ var _src_resizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/resizer.js */ "../resizer-cl/src/resizer.js");

 //window.Resizer = Resizer;

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

var Resizer = function Resizer(sel, options) {
  options = new _Options__WEBPACK_IMPORTED_MODULE_1__.Options(options);

  if (typeof sel === "string") {
    var elements = document.querySelectorAll(sel);

    for (var i = 0; i < elements.length; i++) {
      new _resizer_actual__WEBPACK_IMPORTED_MODULE_0__.ResizerActual(elements[i], options);
    }
  } else if (sel.nodeType) {
    new _resizer_actual__WEBPACK_IMPORTED_MODULE_0__.ResizerActual(sel, options);
  }
};
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
___CSS_LOADER_EXPORT___.push([module.id, "div.dialog-cl {\n  box-sizing: border-box;\n  position: fixed;\n  border: 1px solid #444444;\n  background-color: white;\n  background-image: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  cursor: default;\n  top: 0;\n  width: 350px;\n  min-width: 150px;\n  max-width: 500px;\n  height: auto;\n  min-height: 150px;\n  max-height: 600px; }\n\ndiv.cl-dialog-bottom {\n  box-sizing: border-box;\n  flex: 0 0 44px;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  text-align: right;\n  border-top: 1px solid #cccccc;\n  cursor: default; }\n\ndiv.dialog-cl-body {\n  flex: 0 1 auto;\n  width: 100%;\n  overflow-y: auto;\n  padding: 0.5em; }\n  div.dialog-cl-body p:first-child, div.dialog-cl-body h1:first-child, div.dialog-cl-body h2:first-child {\n    margin-top: 0; }\n  div.dialog-cl-body p:last-child {\n    margin-bottom: 0; }\n\ndiv.cl-dialog-bottom button {\n  display: inline-block;\n  min-width: 7em;\n  margin: 10px 10px 10px 0;\n  padding: 3px 10px;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  font-size: 0.8em;\n  font-weight: bold;\n  border: 1px solid #999;\n  border-radius: 1px;\n  box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.1), inset 0 -10px 20px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  text-align: center;\n  color: #444;\n  background: #fff; }\n\ndiv.cl-dialog-bottom button:active {\n  box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.1), inset 0 10px 20px rgba(0, 0, 0, 0.1); }\n\ndiv.cl-dialog-bottom button:disabled,\ndiv.cl-dialog-bottom button[disabled] {\n  color: #ccc; }\n\ndiv.dialog-cl-top {\n  box-sizing: border-box;\n  background-color: #009688;\n  margin: 0;\n  padding: 0;\n  flex: 0 0 25px;\n  cursor: default;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap; }\n  div.dialog-cl-top h1 {\n    flex-grow: 1;\n    margin: 0;\n    padding: 4px 4px 0 10px;\n    font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n    font-size: 16px;\n    line-height: 16px;\n    user-select: none; }\n  div.dialog-cl-top button.dialog-cl-tb-button {\n    flex: 0 0 25px;\n    position: relative;\n    box-sizing: border-box;\n    height: 25px;\n    width: 25px;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: transparent;\n    outline: none; }\n    div.dialog-cl-top button.dialog-cl-tb-button span {\n      position: absolute;\n      left: 4px;\n      top: 4px; }\n  div.dialog-cl-top .dialog-cl-tb-button:hover {\n    background-color: #e81123;\n    cursor: pointer; }\n\ndiv.dialog-cl div.message-cl {\n  font-size: 1.25em;\n  padding: 1em; }\n\ndiv.dialog-cl-column {\n  text-align: center; }\n  div.dialog-cl-column > div {\n    display: inline-block;\n    padding: 1.5em 0 2.0em 0; }\n  div.dialog-cl-column select {\n    width: 100%; }\n", "",{"version":3,"sources":["webpack://./sass/partials/_dialog.scss","webpack://./sass/partials/_bottom.scss","webpack://./sass/partials/_body.scss","webpack://./sass/partials/_buttons.scss","webpack://./sass/partials/_titlebar.scss","webpack://./sass/partials/_messagebox.scss","webpack://./sass/partials/_column.scss"],"names":[],"mappings":"AAAA;EACI,sBAAsB;EACtB,eAAe;EACf,yBAAyB;EACzB,uBAAuB;EACvB,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,eAAe;EACf,MAAM;EAEN,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,iBAAiB,EAAA;;ACnBrB;EACE,sBAAsB;EACtB,cAAc;EACd,WAAW;EACX,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,6BAA6B;EAC7B,eAAe,EAAA;;ACRjB;EACE,cAAc;EACd,WAAW;EACX,gBAAgB;EAChB,cAAc,EAAA;EAJhB;IAOI,aAAa,EAAA;EAPjB;IAWI,gBAAgB,EAAA;;ACTpB;EAEI,qBAAqB;EACrB,cALc;EAMd,wBAAwB;EACxB,iBAAiB;EACjB,kDAAkD;EAClD,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;EACtB,kBAAkB;EAClB,wFAAgF;EAChF,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,gBAAgB,EAAA;;AAfpB;EAmBI,uFAA+E,EAAA;;AAnBnF;;EAwBI,WAAW,EAAA;;AC1Bf;EACE,sBAAsB;EACtB,yBAAyB;EACzB,SAAS;EACT,UAAU;EACV,cAAc;EACd,eAAe;EAEf,aAAa;EACb,mBAAmB;EACnB,iBAAiB,EAAA;EAVnB;IAaI,YAAY;IAEZ,SAAS;IACT,uBAAuB;IACvB,kDAAkD;IAClD,eAAe;IACf,iBAAiB;IACjB,iBAAiB,EAAA;EApBrB;IAyBI,cAAc;IAEd,kBAAkB;IAClB,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,SAAS;IACT,UAAU;IACV,SAAS;IACT,uBAAuB;IACvB,aAAa,EAAA;IAnCjB;MAsCM,kBAAkB;MAClB,SAAS;MACT,QAAQ,EAAA;EAxCd;IA6CI,yBAAyB;IACzB,eAAe,EAAA;;AC9CnB;EAEI,iBAAiB;EAEjB,YAAY,EAAA;;ACAhB;EACE,kBAAkB,EAAA;EADpB;IAII,qBAAqB;IACrB,wBAAwB,EAAA;EAL5B;IASI,WAAW,EAAA","sourcesContent":["div.dialog-cl {\r\n    box-sizing: border-box;\r\n    position: fixed;\r\n    border: 1px solid #444444;\r\n    background-color: white;\r\n    background-image: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    cursor: default;\r\n    top: 0;\r\n\r\n    width: 350px;\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    height: auto;\r\n    min-height: 150px;\r\n    max-height: 600px;\r\n}\r\n\r\n","div.cl-dialog-bottom {\r\n  box-sizing: border-box;\r\n  flex: 0 0 44px;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  text-align: right;\r\n  border-top: 1px solid #cccccc;\r\n  cursor: default;\r\n}\r\n","div.dialog-cl-body {\r\n  flex: 0 1 auto;\r\n  width: 100%;\r\n  overflow-y: auto;\r\n  padding: 0.5em;\r\n\r\n  p:first-child, h1:first-child, h2:first-child {\r\n    margin-top: 0;\r\n  }\r\n\r\n  p:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n","$button-width: 7em;\r\n\r\ndiv.cl-dialog-bottom {\r\n  button {\r\n    display: inline-block;\r\n    min-width: $button-width;\r\n    margin: 10px 10px 10px 0;\r\n    padding: 3px 10px;\r\n    font-family: \"Trebuchet MS\", Helvetica, sans-serif;\r\n    font-size: 0.8em;\r\n    font-weight: bold;\r\n    border: 1px solid #999;\r\n    border-radius: 1px;\r\n    box-shadow: inset 0 -1px 0 1px rgba(0,0,0,.1), inset 0 -10px 20px rgba(0,0,0,.1);\r\n    cursor: pointer;\r\n    text-align: center;\r\n    color: #444;\r\n    background: #fff;\r\n  }\r\n\r\n  button:active {\r\n    box-shadow: inset 0 -1px 0 1px rgba(0,0,0,.1), inset 0 10px 20px rgba(0,0,0,.1);\r\n  }\r\n\r\n  button:disabled,\r\n  button[disabled] {\r\n    color: #ccc;\r\n  }\r\n}\r\n\r\n","div.dialog-cl-top {\r\n  box-sizing: border-box;\r\n  background-color: #009688;\r\n  margin: 0;\r\n  padding: 0;\r\n  flex: 0 0 25px;\r\n  cursor: default;\r\n\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n\r\n  h1 {\r\n    flex-grow: 1;\r\n\r\n    margin: 0;\r\n    padding: 4px 4px 0 10px;\r\n    font-family: \"Trebuchet MS\", Helvetica, sans-serif;\r\n    font-size: 16px;\r\n    line-height: 16px;\r\n    user-select: none;\r\n  }\r\n\r\n  // Title bar buttons\r\n  button.dialog-cl-tb-button {\r\n    flex: 0 0 25px;\r\n\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    height: 25px;\r\n    width: 25px;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    background: transparent;\r\n    outline: none;\r\n\r\n    span {\r\n      position: absolute;\r\n      left: 4px;\r\n      top: 4px;\r\n    }\r\n  }\r\n\r\n  .dialog-cl-tb-button:hover {\r\n    background-color: #e81123;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n\r\n}\r\n\r\n","div.dialog-cl {\r\n  div.message-cl {\r\n    font-size: 1.25em;\r\n\r\n    padding: 1em;\r\n  }\r\n}","//\r\n// Standard dialog box style: single column of controls\r\n//\r\n\r\ndiv.dialog-cl-column {\r\n  text-align: center;\r\n\r\n  >div {\r\n    display: inline-block;\r\n    padding: 1.5em 0 2.0em 0;\r\n  }\r\n\r\n  select {\r\n    width: 100%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
/******/ 		__webpack_require__.h = () => ("3adda294b2212146e0f7")
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	__webpack_exports__ = __webpack_exports__.default;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RpYWxvZy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL0JvZHkuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL0JvdHRvbS5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9zcmMvRE9NL1Rvb2xzLmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9EaWFsb2cuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL01hc2suanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL01lc3NhZ2VCb3guanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL1RpdGxlQmFyLmpzIiwid2VicGFjazovL0RpYWxvZy9JY29ucy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vRGlhbG9nL0ljb25zL3NyYy9pY29ucy5zY3NzIiwid2VicGFjazovL0RpYWxvZy9JY29ucy9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0RpYWxvZy9JY29ucy9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvSWNvbnMvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvSWNvbnMvc3JjL2ljb25zLnNjc3M/YWM0ZCIsIndlYnBhY2s6Ly9EaWFsb2cvSWNvbnMvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0RpYWxvZy9JY29ucy9zcmMvaW1hZ2VzL2ljb25zLnBuZyIsIndlYnBhY2s6Ly9EaWFsb2cvSWNvbnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2s6L0ljb25zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrOi9JY29ucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2s6L0ljb25zL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCB1cGRhdGUgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2s6L0ljb25zL3dlYnBhY2svcnVudGltZS9nZXQgdXBkYXRlIG1hbmlmZXN0IGZpbGVuYW1lIiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrOi9JY29ucy93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2s6L0ljb25zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2s6L0ljb25zL3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovL0RpYWxvZy9JY29ucy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjazovSWNvbnMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vRGlhbG9nL0ljb25zL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9EaWFsb2cvLi4vcmVzaXplci1jbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi4vcmVzaXplci1jbC9zcmMvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi4vcmVzaXplci1jbC9zcmMvcmVzaXplci1hY3R1YWwuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4uL3Jlc2l6ZXItY2wvc3JjL3Jlc2l6ZXIuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL19kaWFsb2cuc2NzcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL19kaWFsb2cuc2Nzcz9jMGIyIiwid2VicGFjazovL0RpYWxvZy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrL3J1bnRpbWUvYW1kIG9wdGlvbnMiLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCB1cGRhdGUgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2svcnVudGltZS9nZXQgdXBkYXRlIG1hbmlmZXN0IGZpbGVuYW1lIiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjay9ydW50aW1lL2hvdCBtb2R1bGUgcmVwbGFjZW1lbnQiLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIkRpYWxvZyIsIk1lc3NhZ2VCb3giLCJCb2R5IiwiZGlhbG9nIiwicGFyZW50RGl2Iiwib3B0aW9ucyIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIlRvb2xzIiwiY29udGVudCIsImFwcGVuZENoaWxkIiwiQm90dG9tIiwiaW5pdGlhbGl6ZSIsImJ1dHRvbnMiLCJhZGRPayIsImZvckVhY2giLCJpdGVtIiwiYWRkQnV0dG9uIiwiYnV0dG9uIiwidHlwZSIsImlubmVySFRNTCIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidW5kZWZpbmVkIiwiY2xpY2siLCJjbG9zZSIsImZvY3VzIiwiY29udGVudHMiLCJhZGRDbGFzcyIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJhZGRDbGFzc2VzIiwiY2xhc3NlcyIsInNwbGl0IiwiY2xzIiwiY3JlYXRlQ2xhc3NlZERpdiIsImFkZENvbnRlbnQiLCJpc1N0cmluZyIsImlzRWxlbWVudCIsInZhbCIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsIm5vZGVWYWx1ZSIsIk9wdGlvbnMiLCJib2R5IiwibWFzayIsImJvdHRvbSIsImZvcm0iLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZ2V0IiwiekluZGV4Iiwic3R5bGUiLCJwYXJlbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5zdGFsbFJlc2l6YWJsZSIsImNvbnRhaW5lciIsIlRpdGxlQmFyIiwiTWFzayIsInBsYWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleWRvd24iLCJrZXlDb2RlIiwic3RvcFByb3BhZ2F0aW9uIiwicmVzaXplIiwicnNPcHRpb25zIiwiZ3JhYlNpemUiLCJSZXNpemVyIiwidG9QeCIsInBhcmVudFdpZCIsInBhcmVudEhpdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiaGVpZ2h0Iiwid2lkdGgiLCJ0b3AiLCJsZWZ0IiwicmVtb3ZlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1vZGFsIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJidXR0b24xIiwiYnV0dG9uMiIsIk9LQ0FOQ0VMIiwiT0siLCJ0aXRsZUJhckJ1dHRvbnMiLCJ0aXRsZUJhckFkZENsYXNzIiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkVycm9yIiwiaW5zdGFsbGVkTW92ZUhhbmRsZXJzIiwiaW5zdGFsbGVkVG91Y2hIYW5kbGVycyIsImluaXRpYWxYIiwiaW5pdGlhbFkiLCJpbml0aWFsUG9zaXRpb25YIiwiaW5pdGlhbFBvc2l0aW9uWSIsImh0bWwiLCJhZGRDbG9zZSIsImFkZEN1c3RvbSIsImgxIiwibW91c2VEb3duTGlzdGVuZXIiLCJ0b3VjaFN0YXJ0TGlzdGVuZXIiLCJtb3ZlVG8iLCJ4IiwieSIsImR4IiwiZHkiLCJuZXdQb3NpdGlvblgiLCJuZXdQb3NpdGlvblkiLCJpbnN0YWxsTW91c2VIYW5kbGVycyIsInJlbW92ZUhhbmRsZXJzIiwibW91c2VNb3ZlTGlzdGVuZXIiLCJtb3VzZVVwTGlzdGVuZXIiLCJwYWdlWCIsInBhZ2VZIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImUiLCJpbnN0YWxsVG91Y2hIYW5kbGVycyIsInRvdWNoTW92ZUxpc3RlbmVyIiwidG91Y2hFbmRMaXN0ZW5lciIsInRvdWNoZXMiLCJoYW5kbGUiLCJtYXhTcGVlZCIsInVzZU1hc2siLCJSZXNpemVyQWN0dWFsIiwidGltZW91dFBlcmlvZCIsImJvcmRlckJvdHRvbSIsImluc3RhbGxlZE1vdXNlTGlzdGVuZXJzIiwiaW5zdGFsbGVkVG91Y2hMaXN0ZW5lcnMiLCJtaW5IZWlnaHQiLCJnZXRDb21wdXRlZFN0eWxlIiwic3Vic3RyIiwibGVuZ3RoIiwibWluV2lkdGgiLCJ0aW1lciIsInRhcmdldFdpZHRoIiwidGFyZ2V0SGVpZ2h0Iiwic3RhcnQiLCJjdXJzb3JMaXN0ZW5lciIsInNldFRhcmdldCIsInR3IiwidGgiLCJ0aW1lck1vdmVyIiwibWF4UGl4ZWxzIiwiY3VycmVudEhlaWdodCIsImRpZmYiLCJNYXRoIiwiYWJzIiwiY3VycmVudFdpZHRoIiwic2V0VGltZW91dCIsImluaXRpYWxXaWR0aCIsImluaXRpYWxIZWlnaHQiLCJncmFiVHlwZSIsIm1vdmVTdGFydCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwibmV3V2lkdGgiLCJuZXdIZWlnaHQiLCJ3YXNIZWlnaHQiLCJvbkhhbmRsZSIsImluc3RhbGxNYXNrIiwicmVtb3ZlQWxsIiwicmVtb3ZlTWFzayIsIm9wYWNpdHkiLCJjdXJzb3IiLCJjbGVhclRpbWVvdXQiLCJ0b3VjaCIsInNsb3AiLCJwYWdlWU9mZnNldCIsInZlcnQiLCJyaWdodCIsInBhZ2VYT2Zmc2V0IiwiaG9yeiIsInNlbCIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJub2RlVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFD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QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTs7O0FBRUE7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFWQTtBQVdBOzs7QUFBQTtBQUFrRSwyQkFBbEU7QUFBa0U7QUFBbEUsY0FBb0csTUFBcEc7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBLFNBdENBOzs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFzRDtBQUF0RDtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFBK0M7QUFBL0M7QUFDQTtBQUFBLFNBTEE7Ozs7Ozs7Ozs7Ozs7OztBQ0RBOzs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7OztBQUVBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFDLFNBUkQ7Ozs7OztBQVVBOzs7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFJLGVBTEosTUFLSTtBQUNKO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFB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O0FBQUE7Ozs7O0FDRUE7OztBQUNBOzs7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBRkE7Ozs7OztBQUtBOzs7OztBQUVBOzs7OztBQUVBOzs7Ozs7QUFFQTs7O0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOztBQUFBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUEsYUFYQTtBQVlBOzs7QUFBQTtBQUNBOztBQUFFLFdBbkJGO0FBb0JBO0FBQUE7Ozs7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQSxTQVpBOzs7Ozs7QUFjQTs7O0FBQ0E7OztBQUNBOzs7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTs7O0FBRUE7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQSwyQkFEQTs7QUFFQTtBQUFBO0FBQ0E7O0FBSEE7QUFJQTtBQUFHLGFBTEg7QUFNQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFIQTtBQUlBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBLHVDQURBOztBQUVBO0FBQUEsOEJBRkE7O0FBR0E7QUFBQTtBQUNBOztBQUpBO0FBS0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBLG9DQURBOztBQUVBO0FBQUEsOEJBRkE7O0FBR0E7QUFBQTtBQUNBOztBQUpBO0FBS0E7QUFBQTtBQUNBOzs7QUFBQSw4QkFBa0IseUJBQWxCLEVBQTZDLEdBQTdDLEVBQTZDO0FBQzdDO0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQSxvQ0FEQTs7QUFFQTtBQUFBLG1EQUZBOztBQUdBO0FBQUEsc0NBSEE7O0FBSUE7QUFBQTtBQUNBOztBQUxBO0FBTUE7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBLGlEQURBOztBQUVBO0FBQUE7QUFDQTs7QUFIQTtBQUlBO0FBQUE7QUFDQTs7QUFBQTs7O0FBRUE7OztBQUFBO0FBQ0E7QUFBQSw4QkFEQTs7QUFFQTtBQUFBLHNDQUZBOztBQUdBO0FBQUEsOENBSEE7O0FBSUE7QUFBQTtBQUNBOztBQUxBO0FBTUE7QUFBQTs7O0FBRUE7OztBQUFBO0FBQ0E7QUFBQSw0QkFBaUIsWUFBakIsRUFBK0IsR0FBL0IsRUFBK0I7QUFDL0I7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTs7O0FBRUE7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFHQTtBQUFBLFdBSkE7OztBQU1BOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFJLGVBRkosTUFFSTtBQUNKO0FBQUE7QUFDQTtBQUFBLGtDQURBOztBQUVBO0FBQUE7QUFDQTs7QUFIQTtBQUlBO0FBQUE7QUFDQTs7QUFBQTs7QUFDQTs7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQSxtQ0FEQTtBQUVBO0FBQUE7QUFDQTtBQUpBO0FBS0E7O0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUEsbUNBREE7QUFFQTtBQUFBLDBCQUZBO0FBR0E7QUFBQSxtQ0FIQTtBQUlBO0FBQUE7QUFDQTtBQU5BO0FBT0E7O0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFHQTs7QUFBQTs7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBOztBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTtBQUFBOztBQUNBO0FBdENBO0FBdUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBRkE7QUFHQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUEsa0RBREE7QUFFQTtBQUFBO0FBQ0E7QUFIQTtBQUlBO0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTs7QUFBQSwwQkFBZ0IsMEJBQWhCLEVBQTRDLEdBQTVDLEVBQTRDO0FBQzVDO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBLGtGQURBO0FBRUE7QUFBQTs7QUFDQTtBQUFBLHFFQUhBO0FBSUE7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFQQSxjQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQUEsMENBREE7O0FBRUE7QUFBQSxnR0FGQTs7QUFHQTtBQUFBO0FBQ0E7O0FBSkE7QUFLQTtBQUFBO0FBQ0E7O0FBQUE7OztBQUVBOzs7QUFBQTs7O0FBRUE7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFJLGVBRko7QUFHQTs7QUFBQTs7O0FBRUE7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7OztBQUVBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBO0FBQ0E7O0FBQUEsNEJBQWUsMEJBQWYsRUFBMkMsR0FBM0MsRUFBMkM7QUFDM0M7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsNEJBQWUsMEJBQWYsRUFBMkMsR0FBM0MsRUFBMkM7QUFDM0M7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQSwwREFEQTtBQUVBOztBQUFBLGdDQUFpQixxQ0FBakIsRUFBd0QsR0FBeEQsRUFBd0Q7QUFDeEQ7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUcsYUEzREg7O0FBNERBO0FBQUE7QUFDQTtBQUFBOztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7O0FBQUEsOEJBQWtCLCtCQUFsQixFQUFtRCxHQUFuRCxFQUFtRDtBQUNuRDtBQUFBO0FBQ0E7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUEsMERBREE7QUFFQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUEsb0NBQXFCLHFDQUFyQixFQUE0RCxHQUE1RCxFQUE0RDtBQUM1RDtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBLGtFQURBO0FBRUE7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBOzs7QUFBQSxvQ0FBcUIsb0JBQXJCLEVBQTJDLEdBQTNDLEVBQTJDO0FBQzNDO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBUSx1QkFGUixDQUVRO0FBQ1I7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBLGtEQURBOztBQUVBO0FBQUEsc0RBRkE7O0FBR0E7QUFBQSxxRUFIQTs7QUFJQTtBQUFBO0FBQ0E7O0FBTEE7QUFNQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOzs7QUFBQSw4QkFBa0Isc0NBQWxCLEVBQTBELEdBQTFELEVBQTBEO0FBQzFEO0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFLLGlCQUZMLENBRUs7QUFDTDtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFPLHFCQUZQLENBRU87QUFDUDtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUEsbUVBREE7O0FBRUE7QUFBQSw0Q0FGQTs7QUFHQTtBQUFBLHFDQUhBOztBQUlBO0FBQUE7QUFDQTs7QUFMQTtBQU1BO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBTSxtQkFqQk4sTUFpQk07QUFDTjtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUEsbURBREE7O0FBRUE7QUFBQSwwQ0FGQTs7QUFHQTtBQUFBO0FBQ0E7O0FBSkE7QUFLQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7OztBQUVBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUExSkE7QUEySkE7QUFBQTs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQSxTQVZBOzs7O0FBV0E7QUFDQTtBQUFBLGdCQURBO0FBRUE7QUFBQSxxQkFGQTtBQUdBO0FBQUEsc0JBSEE7QUFJQTtBQUFBLGdCQUpBO0FBS0E7QUFBQSxxQkFMQTtBQU1BO0FBQUE7QUFDQTtBQVBBLFVBT0E7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFBRSxXQUhGLEVBR0UsRUFIRjtBQUlBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUhBLGNBR0E7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUUsV0FSRjtBQVNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQSwrRUFEQTtBQUVBO0FBQUEsMEVBRkE7QUFHQTtBQUFBO0FBQ0E7QUFMQSxnQkFLQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQSxhQVZBO0FBV0E7O0FBQUE7QUFDQTs7QUFBQSxTQXRDQTs7Ozs7O0FBd0NBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFBQSxnREFEQSxDQUNxQzs7QUFDckM7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQUUsV0FKRjtBQUtBO0FBQUEsU0FQQTs7OztBQVNBOzs7OztBQUVBOzs7OztBQUVBOzs7Ozs7Ozs7Ozs7QUNoZUE7OztBQUNBOzs7QUFDQTs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FsQk9BO0NBVkEsRTs7Ozs7Ozs7Ozs7Ozs7OztBbUJBQTtDQUdBLDJCOzs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNrQyxPQUFULENBQWlCNUMsT0FBakIsRUFBMEI7QUFDN0JBLFNBQU8sR0FBR0EsT0FBTyxHQUFHQSxPQUFILEdBQWEsRUFBOUIsQ0FENkIsQ0FHN0I7O0FBQ0EsT0FBS2dFLE1BQUwsR0FBYyxVQUFkLENBSjZCLENBTTdCOztBQUNBLE9BQUtrRSxNQUFMLEdBQWMsS0FBZCxDQVA2QixDQVM3Qjs7QUFDQSxPQUFLaEUsUUFBTCxHQUFnQixFQUFoQixDQVY2QixDQVk3Qjs7QUFDQSxPQUFLaUUsUUFBTCxHQUFnQixJQUFoQixDQWI2QixDQWU3Qjs7QUFDQSxPQUFLQyxPQUFMLEdBQWUsSUFBZjs7QUFFQSxPQUFJLElBQUlyQyxRQUFSLElBQW9CL0YsT0FBcEIsRUFBNkI7QUFDekIsUUFBR0EsT0FBTyxDQUFDZ0csY0FBUixDQUF1QkQsUUFBdkIsQ0FBSCxFQUFxQztBQUNqQyxVQUFHLENBQUMsS0FBS0MsY0FBTCxDQUFvQkQsUUFBcEIsQ0FBSixFQUFtQztBQUMvQixjQUFNLElBQUlFLEtBQUosQ0FBVSxvQkFBb0JGLFFBQTlCLENBQU47QUFDSDs7QUFDRCxXQUFLQSxRQUFMLElBQWlCL0YsT0FBTyxDQUFDK0YsUUFBRCxDQUF4QjtBQUNIO0FBQ0o7QUFFSixDOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ00sU0FBU3NDLGFBQVQsQ0FBdUJ6RyxPQUF2QixFQUFnQzVCLE9BQWhDLEVBQXlDO0FBQzVDNEIsU0FBTyxDQUFDeEIsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsU0FBdEIsRUFENEMsQ0FHNUM7O0FBQ0EsTUFBTWlJLGFBQWEsR0FBRyxFQUF0QixDQUo0QyxDQU01QztBQUNBO0FBQ0E7O0FBQ0EsTUFBSXBFLFFBQVEsR0FBR2xFLE9BQU8sQ0FBQ2tFLFFBQXZCO0FBRUEsTUFBSWdFLE1BQU0sR0FBR2xJLE9BQU8sQ0FBQ2tJLE1BQXJCOztBQUNBLE1BQUdBLE1BQU0sS0FBSyxLQUFkLEVBQXFCO0FBQ2pCdEcsV0FBTyxDQUFDd0IsS0FBUixDQUFjWSxNQUFkLEdBQXVCLE1BQXZCO0FBQ0FwQyxXQUFPLENBQUN3QixLQUFSLENBQWNtRixZQUFkLEdBQTZCckUsUUFBUSxHQUFHLGtCQUF4QztBQUNILEdBSEQsTUFHTyxJQUFHZ0UsTUFBTSxLQUFLLFFBQWQsRUFBd0I7QUFDM0J0RyxXQUFPLENBQUN3QixLQUFSLENBQWNZLE1BQWQsR0FBdUIsVUFBdkI7QUFDSCxHQUZNLE1BRUEsSUFBR2tFLE1BQU0sS0FBSyxNQUFkLEVBQXNCLENBRTVCLENBRk0sTUFFQTtBQUNIdEcsV0FBTyxDQUFDd0IsS0FBUixDQUFjWSxNQUFkLEdBQXVCLE1BQXZCO0FBQ0FwQyxXQUFPLENBQUN3QixLQUFSLENBQWNtRixZQUFkLEdBQTZCTCxNQUE3QjtBQUNILEdBdEIyQyxDQXdCNUM7OztBQUNBLE1BQUlNLHVCQUF1QixHQUFHLEtBQTlCLENBekI0QyxDQTJCNUM7O0FBQ0EsTUFBSUMsdUJBQXVCLEdBQUcsS0FBOUI7QUFFQSxNQUFJM0YsSUFBSSxHQUFHLElBQVgsQ0E5QjRDLENBZ0M1Qzs7QUFDQSxNQUFNNkUsSUFBSSxHQUFHL0YsT0FBTyxDQUFDZ0cscUJBQVIsRUFBYjtBQUNBLE1BQUloRCxNQUFNLEdBQUcrQyxJQUFJLENBQUMvQyxNQUFsQjtBQUNBLE1BQUlDLEtBQUssR0FBRzhDLElBQUksQ0FBQzlDLEtBQWpCO0FBRUEsTUFBSTZELFNBQVMsR0FBR0MsZ0JBQWdCLENBQUMvRyxPQUFELENBQWhCLENBQTBCOEcsU0FBMUM7QUFDQUEsV0FBUyxHQUFHQSxTQUFTLENBQUNFLE1BQVYsQ0FBaUIsQ0FBakIsRUFBb0JGLFNBQVMsQ0FBQ0csTUFBVixHQUFtQixDQUF2QyxDQUFaO0FBQ0EsTUFBSUMsUUFBUSxHQUFHSCxnQkFBZ0IsQ0FBQy9HLE9BQUQsQ0FBaEIsQ0FBMEJrSCxRQUF6QztBQUNBQSxVQUFRLEdBQUdBLFFBQVEsQ0FBQ0YsTUFBVCxDQUFnQixDQUFoQixFQUFtQkUsUUFBUSxDQUFDRCxNQUFULEdBQWtCLENBQXJDLENBQVg7QUFFQSxNQUFJRSxLQUFLLEdBQUcsSUFBWjtBQUVBLE1BQUlDLFdBQVcsR0FBRyxJQUFsQjtBQUNBLE1BQUlDLFlBQVksR0FBRyxJQUFuQjs7QUFFQSxXQUFTQyxLQUFULEdBQWlCO0FBQ2I7QUFDQXRILFdBQU8sQ0FBQ2dDLGdCQUFSLENBQXlCLFdBQXpCLEVBQXNDZ0QsaUJBQXRDO0FBQ0FoRixXQUFPLENBQUNnQyxnQkFBUixDQUF5QixZQUF6QixFQUF1Q2lELGtCQUF2QyxFQUhhLENBS2I7QUFDQTs7QUFDQWpGLFdBQU8sQ0FBQ2dDLGdCQUFSLENBQXlCLFdBQXpCLEVBQXNDdUYsY0FBdEM7QUFDSDs7QUFFRCxXQUFTQyxTQUFULENBQW1CQyxFQUFuQixFQUF1QkMsRUFBdkIsRUFBMkI7QUFDdkJOLGVBQVcsR0FBR0ssRUFBZDtBQUNBSixnQkFBWSxHQUFHSyxFQUFmLENBRnVCLENBSXZCOztBQUNBLFFBQUdQLEtBQUssS0FBSyxJQUFiLEVBQW1CO0FBQ2ZRLGdCQUFVO0FBQ2I7QUFDSjs7QUFFRCxXQUFTQSxVQUFULEdBQXNCO0FBQ2xCUixTQUFLLEdBQUcsSUFBUjtBQUVBLFFBQU1TLFNBQVMsR0FBR3hKLE9BQU8sQ0FBQ21JLFFBQVIsR0FBbUJHLGFBQW5CLEdBQW1DLElBQXJEOztBQUVBLFFBQUdXLFlBQVksS0FBSyxJQUFwQixFQUEwQjtBQUN0QixVQUFNUSxhQUFhLEdBQUcsQ0FBQzdFLE1BQXZCO0FBQ0EsVUFBSThFLElBQUksR0FBR1QsWUFBWSxHQUFHUSxhQUExQjs7QUFFQSxVQUFHRSxJQUFJLENBQUNDLEdBQUwsQ0FBU0YsSUFBVCxJQUFpQkYsU0FBcEIsRUFBK0I7QUFDM0JFLFlBQUksR0FBR0EsSUFBSSxHQUFHLENBQVAsR0FBVyxDQUFDRixTQUFaLEdBQXdCQSxTQUEvQjtBQUNBNUUsY0FBTSxHQUFHNkUsYUFBYSxHQUFHQyxJQUF6QjtBQUVBOUgsZUFBTyxDQUFDd0IsS0FBUixDQUFjd0IsTUFBZCxHQUF1QixLQUFLQSxNQUFMLEdBQWMsSUFBckM7QUFDSCxPQUxELE1BS087QUFDSDtBQUNBQSxjQUFNLEdBQUdxRSxZQUFUO0FBQ0FySCxlQUFPLENBQUN3QixLQUFSLENBQWN3QixNQUFkLEdBQXVCLEtBQUtBLE1BQUwsR0FBYyxJQUFyQztBQUNBcUUsb0JBQVksR0FBRyxJQUFmO0FBQ0g7QUFDSjs7QUFFRCxRQUFHRCxXQUFXLEtBQUssSUFBbkIsRUFBeUI7QUFDckIsVUFBTWEsWUFBWSxHQUFHLENBQUNoRixLQUF0Qjs7QUFDQSxVQUFJNkUsS0FBSSxHQUFHVixXQUFXLEdBQUdhLFlBQXpCOztBQUVBLFVBQUdGLElBQUksQ0FBQ0MsR0FBTCxDQUFTRixLQUFULElBQWlCRixTQUFwQixFQUErQjtBQUMzQkUsYUFBSSxHQUFHQSxLQUFJLEdBQUcsQ0FBUCxHQUFXLENBQUNGLFNBQVosR0FBd0JBLFNBQS9CO0FBQ0EzRSxhQUFLLEdBQUdnRixZQUFZLEdBQUdILEtBQXZCO0FBRUE5SCxlQUFPLENBQUN3QixLQUFSLENBQWN5QixLQUFkLEdBQXNCLEtBQUtBLEtBQUwsR0FBYSxJQUFuQztBQUNILE9BTEQsTUFLTztBQUNIO0FBQ0FBLGFBQUssR0FBR21FLFdBQVI7QUFDQXBILGVBQU8sQ0FBQ3dCLEtBQVIsQ0FBY3lCLEtBQWQsR0FBc0IsS0FBS0EsS0FBTCxHQUFhLElBQW5DO0FBQ0FtRSxtQkFBVyxHQUFHLElBQWQ7QUFDSDtBQUNKOztBQUVELFFBQUdDLFlBQVksS0FBSyxJQUFqQixJQUF5QkQsV0FBVyxLQUFLLElBQTVDLEVBQWtEO0FBQzlDRCxXQUFLLEdBQUdlLFVBQVUsQ0FBQ1AsVUFBRCxFQUFhakIsYUFBYixDQUFsQjtBQUNIO0FBRUo7O0FBRUQsTUFBSWxDLFFBQUosRUFBY0MsUUFBZDtBQUNBLE1BQUkwRCxZQUFKLEVBQWtCQyxhQUFsQjtBQUNBLE1BQUlDLFFBQVEsR0FBRyxJQUFmO0FBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFDSSxXQUFTQyxTQUFULENBQW1CbkQsQ0FBbkIsRUFBc0JDLENBQXRCLEVBQXlCO0FBQ3JCWixZQUFRLEdBQUdXLENBQVg7QUFDQVYsWUFBUSxHQUFHVyxDQUFYO0FBQ0EsUUFBSVcsSUFBSSxHQUFHL0YsT0FBTyxDQUFDZ0cscUJBQVIsRUFBWDtBQUNBL0MsU0FBSyxHQUFHLENBQUNqRCxPQUFPLENBQUN1SSxXQUFqQjtBQUNBSixnQkFBWSxHQUFHbEYsS0FBZjtBQUNBRCxVQUFNLEdBQUcsQ0FBQ2hELE9BQU8sQ0FBQ3dJLFlBQWxCO0FBQ0FKLGlCQUFhLEdBQUdwRixNQUFoQjtBQUNBb0UsZUFBVyxHQUFHLElBQWQ7QUFDQUMsZ0JBQVksR0FBRyxJQUFmO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNJLFdBQVNuQyxNQUFULENBQWdCQyxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0I7QUFDbEIsUUFBSUMsRUFBRSxHQUFHRixDQUFDLEdBQUdYLFFBQWI7QUFDQSxRQUFJYyxFQUFFLEdBQUdGLENBQUMsR0FBR1gsUUFBYjtBQUVBLFFBQUlnRSxRQUFRLEdBQUcsSUFBZjtBQUNBLFFBQUlDLFNBQVMsR0FBRyxJQUFoQjs7QUFFQSxRQUFHTCxRQUFRLEtBQUssWUFBYixJQUE2QkEsUUFBUSxLQUFLLE1BQTdDLEVBQXFEO0FBQ2pEO0FBQ0FJLGNBQVEsR0FBR04sWUFBWSxHQUFHOUMsRUFBMUI7O0FBQ0EsVUFBSW9ELFFBQVEsR0FBR3ZCLFFBQWYsRUFBeUI7QUFDckJ1QixnQkFBUSxHQUFHdkIsUUFBWDtBQUNIO0FBRUo7O0FBRUQsUUFBR21CLFFBQVEsS0FBSyxVQUFiLElBQTJCQSxRQUFRLEtBQUssTUFBM0MsRUFBbUQ7QUFDL0MsVUFBTU0sU0FBUyxHQUFHM0ksT0FBTyxDQUFDK0MsWUFBMUIsQ0FEK0MsQ0FHL0M7O0FBQ0EyRixlQUFTLEdBQUdOLGFBQWEsR0FBRzlDLEVBQTVCOztBQUNBLFVBQUlvRCxTQUFTLEdBQUc1QixTQUFoQixFQUEyQjtBQUN2QjRCLGlCQUFTLEdBQUc1QixTQUFaO0FBQ0g7QUFFSjs7QUFFRFUsYUFBUyxDQUFDaUIsUUFBRCxFQUFXQyxTQUFYLENBQVQ7QUFDSCxHQXZLMkMsQ0F5SzVDO0FBQ0E7QUFDQTs7O0FBRUEsV0FBUzFELGlCQUFULENBQTJCaUIsQ0FBM0IsRUFBOEI7QUFDMUIsUUFBTWQsQ0FBQyxHQUFHYyxDQUFDLENBQUNKLEtBQVo7QUFDQSxRQUFNVCxDQUFDLEdBQUdhLENBQUMsQ0FBQ0gsS0FBWjtBQUVBdUMsWUFBUSxHQUFHTyxRQUFRLENBQUN6RCxDQUFELEVBQUlDLENBQUosRUFBTyxLQUFQLENBQW5COztBQUNBLFFBQUdpRCxRQUFRLEtBQUssSUFBaEIsRUFBc0I7QUFDbEJwQyxPQUFDLENBQUM5RCxlQUFGO0FBQ0E4RCxPQUFDLENBQUN4RyxjQUFGO0FBRUE2SSxlQUFTLENBQUNuRCxDQUFELEVBQUlDLENBQUosQ0FBVDtBQUVBeUQsaUJBQVc7QUFDWHBELDBCQUFvQjtBQUN2QjtBQUNKOztBQUVELFdBQVNFLGlCQUFULENBQTJCTSxDQUEzQixFQUE4QjtBQUMxQkEsS0FBQyxDQUFDOUQsZUFBRjtBQUNBOEQsS0FBQyxDQUFDeEcsY0FBRjs7QUFFQSxRQUFJd0csQ0FBQyxDQUFDbEgsT0FBRixLQUFjLENBQWxCLEVBQXFCO0FBQ2pCK0osZUFBUztBQUNUO0FBQ0g7O0FBRUQ1RCxVQUFNLENBQUNlLENBQUMsQ0FBQ0osS0FBSCxFQUFVSSxDQUFDLENBQUNILEtBQVosQ0FBTjtBQUNIOztBQUVELFdBQVNGLGVBQVQsQ0FBeUJLLENBQXpCLEVBQTRCO0FBQ3hCNkMsYUFBUztBQUNaOztBQUVELFdBQVNyRCxvQkFBVCxHQUFnQztBQUM1QkMsa0JBQWM7QUFFZGtCLDJCQUF1QixHQUFHLElBQTFCO0FBQ0F0SSxZQUFRLENBQUMwRCxnQkFBVCxDQUEwQixXQUExQixFQUF1QzJELGlCQUF2QyxFQUEwRCxLQUExRDtBQUNBckgsWUFBUSxDQUFDMEQsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUM0RCxlQUFyQyxFQUFzRCxLQUF0RDtBQUNILEdBbk4yQyxDQXFONUM7QUFDQTtBQUNBOzs7QUFFQSxXQUFTWCxrQkFBVCxDQUE0QmdCLENBQTVCLEVBQStCO0FBQzNCLFFBQU1kLENBQUMsR0FBR2MsQ0FBQyxDQUFDSSxPQUFGLENBQVUsQ0FBVixFQUFhUixLQUF2QjtBQUNBLFFBQU1ULENBQUMsR0FBR2EsQ0FBQyxDQUFDSSxPQUFGLENBQVUsQ0FBVixFQUFhUCxLQUF2QjtBQUVBdUMsWUFBUSxHQUFHTyxRQUFRLENBQUN6RCxDQUFELEVBQUlDLENBQUosRUFBTyxJQUFQLENBQW5COztBQUNBLFFBQUdpRCxRQUFRLEtBQUssSUFBaEIsRUFBc0I7QUFDbEJwQyxPQUFDLENBQUM5RCxlQUFGO0FBQ0E4RCxPQUFDLENBQUN4RyxjQUFGO0FBRUE2SSxlQUFTLENBQUNuRCxDQUFELEVBQUlDLENBQUosQ0FBVDtBQUVBeUQsaUJBQVc7QUFDWDNDLDBCQUFvQjtBQUN2QjtBQUNKOztBQUVELFdBQVNDLGlCQUFULENBQTJCRixDQUEzQixFQUE4QjtBQUMxQkEsS0FBQyxDQUFDOUQsZUFBRixHQUQwQixDQUUxQjs7QUFFQSxRQUFNZ0QsQ0FBQyxHQUFHYyxDQUFDLENBQUNJLE9BQUYsQ0FBVSxDQUFWLEVBQWFSLEtBQXZCO0FBQ0EsUUFBTVQsQ0FBQyxHQUFHYSxDQUFDLENBQUNJLE9BQUYsQ0FBVSxDQUFWLEVBQWFQLEtBQXZCO0FBRUFaLFVBQU0sQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLENBQU47QUFDSDs7QUFFRCxXQUFTZ0IsZ0JBQVQsQ0FBMEJILENBQTFCLEVBQTZCO0FBQ3pCNkMsYUFBUztBQUNaOztBQUVELFdBQVM1QyxvQkFBVCxHQUFnQztBQUM1QlIsa0JBQWM7QUFFZG1CLDJCQUF1QixHQUFHLElBQTFCO0FBQ0F2SSxZQUFRLENBQUMwRCxnQkFBVCxDQUEwQixXQUExQixFQUF1Q21FLGlCQUF2QztBQUNBN0gsWUFBUSxDQUFDMEQsZ0JBQVQsQ0FBMEIsVUFBMUIsRUFBc0NvRSxnQkFBdEM7QUFDQTlILFlBQVEsQ0FBQzBELGdCQUFULENBQTBCLGFBQTFCLEVBQXlDb0UsZ0JBQXpDO0FBQ0gsR0E5UDJDLENBZ1E1QztBQUNBO0FBQ0E7OztBQUVBLFdBQVN5QyxXQUFULEdBQXVCO0FBQ25CLFFBQUcsQ0FBQ3pLLE9BQU8sQ0FBQ29JLE9BQVosRUFBcUI7QUFDakI7QUFDSCxLQUhrQixDQUtuQjs7O0FBQ0F1QyxjQUFVO0FBRVYsUUFBSTlILElBQUksR0FBRzNDLFFBQVEsQ0FBQ29ELGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWDtBQUNBUixRQUFJLEdBQUc1QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBUDtBQUVBMkMsUUFBSSxDQUFDTSxLQUFMLENBQVdpQyxRQUFYLEdBQXNCLE9BQXRCO0FBQ0F2QyxRQUFJLENBQUNNLEtBQUwsQ0FBVzJCLElBQVgsR0FBa0IsQ0FBbEI7QUFDQWpDLFFBQUksQ0FBQ00sS0FBTCxDQUFXMEIsR0FBWCxHQUFpQixDQUFqQjtBQUNBaEMsUUFBSSxDQUFDTSxLQUFMLENBQVd5QixLQUFYLEdBQW1CLE1BQW5CO0FBQ0EvQixRQUFJLENBQUNNLEtBQUwsQ0FBV3dCLE1BQVgsR0FBb0IsTUFBcEI7QUFDQTlCLFFBQUksQ0FBQ00sS0FBTCxDQUFXa0MsZUFBWCxHQUE2QixhQUE3QjtBQUNBeEMsUUFBSSxDQUFDTSxLQUFMLENBQVdELE1BQVgsR0FBb0IsS0FBcEI7QUFDQUwsUUFBSSxDQUFDTSxLQUFMLENBQVd3SCxPQUFYLEdBQXFCLEdBQXJCO0FBQ0E5SCxRQUFJLENBQUNNLEtBQUwsQ0FBV3lILE1BQVgsR0FBb0IsU0FBcEI7QUFFQWhJLFFBQUksQ0FBQ3JDLFdBQUwsQ0FBaUJzQyxJQUFqQjtBQUNIOztBQUVELFdBQVM0SCxTQUFULEdBQXFCO0FBQ2pCLFFBQUczQixLQUFLLEtBQUssSUFBYixFQUFtQjtBQUNmK0Isa0JBQVksQ0FBQy9CLEtBQUQsQ0FBWjtBQUNBQSxXQUFLLEdBQUcsSUFBUjtBQUNIOztBQUVEekIsa0JBQWM7QUFDZHFELGNBQVU7QUFDYjs7QUFFRCxXQUFTckQsY0FBVCxHQUEwQjtBQUN0QixRQUFHa0IsdUJBQUgsRUFBNEI7QUFDeEJ0SSxjQUFRLENBQUNpRixtQkFBVCxDQUE2QixXQUE3QixFQUEwQ29DLGlCQUExQztBQUNBckgsY0FBUSxDQUFDaUYsbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0NxQyxlQUF4QztBQUNBZ0IsNkJBQXVCLEdBQUcsS0FBMUI7QUFDSDs7QUFFRCxRQUFHQyx1QkFBSCxFQUE0QjtBQUN4QnZJLGNBQVEsQ0FBQ2lGLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDNEMsaUJBQTFDO0FBQ0E3SCxjQUFRLENBQUNpRixtQkFBVCxDQUE2QixVQUE3QixFQUF5QzZDLGdCQUF6QztBQUNBOUgsY0FBUSxDQUFDaUYsbUJBQVQsQ0FBNkIsYUFBN0IsRUFBNEM2QyxnQkFBNUM7QUFDQVMsNkJBQXVCLEdBQUcsS0FBMUI7QUFDSDtBQUNKOztBQUVELFdBQVNrQyxVQUFULEdBQXNCO0FBQ2xCLFFBQUc3SCxJQUFJLEtBQUssSUFBWixFQUFrQjtBQUNkLFVBQU1ELElBQUksR0FBRzNDLFFBQVEsQ0FBQ29ELGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBVCxVQUFJLENBQUNxQyxXQUFMLENBQWlCcEMsSUFBakI7QUFDQUEsVUFBSSxHQUFHLElBQVA7QUFDSDtBQUNKO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNJLFdBQVMwSCxRQUFULENBQWtCekQsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCK0QsS0FBeEIsRUFBK0I7QUFDM0IsUUFBSXBELElBQUksR0FBRy9GLE9BQU8sQ0FBQ2dHLHFCQUFSLEVBQVg7QUFFQSxRQUFNb0QsSUFBSSxHQUFHRCxLQUFLLEdBQUcsRUFBSCxHQUFRLENBQTFCO0FBRUEsUUFBSWhJLE1BQU0sR0FBRzRFLElBQUksQ0FBQzVFLE1BQUwsR0FBY3dCLE1BQU0sQ0FBQzBHLFdBQWxDO0FBQ0EsUUFBSUMsSUFBSSxHQUFHbEUsQ0FBQyxJQUFJakUsTUFBTSxHQUFHbUIsUUFBVCxHQUFvQjhHLElBQXBDO0FBRUEsUUFBSUcsS0FBSyxHQUFHeEQsSUFBSSxDQUFDd0QsS0FBTCxHQUFhNUcsTUFBTSxDQUFDNkcsV0FBaEM7QUFDQSxRQUFJQyxJQUFJLEdBQUd0RSxDQUFDLElBQUlvRSxLQUFLLEdBQUdqSCxRQUFSLEdBQW1COEcsSUFBbkM7O0FBRUEsUUFBR2hMLE9BQU8sQ0FBQ2dFLE1BQVIsS0FBbUIsTUFBdEIsRUFBOEI7QUFDMUIsVUFBR2tILElBQUksSUFBSUcsSUFBWCxFQUFpQjtBQUNiLGVBQU8sTUFBUDtBQUNIOztBQUNELFVBQUdILElBQUgsRUFBUztBQUNMLGVBQU8sVUFBUDtBQUNIOztBQUVELFVBQUdHLElBQUgsRUFBUztBQUNMLGVBQU8sWUFBUDtBQUNIO0FBQ0o7O0FBRUQsUUFBRyxDQUFDckwsT0FBTyxDQUFDZ0UsTUFBUixLQUFtQixNQUFuQixJQUE2QmhFLE9BQU8sQ0FBQ2dFLE1BQVIsS0FBbUIsVUFBakQsS0FBZ0VrSCxJQUFuRSxFQUF5RTtBQUNyRSxhQUFPLFVBQVA7QUFDSDs7QUFFRCxRQUFHLENBQUNsTCxPQUFPLENBQUNnRSxNQUFSLEtBQW1CLE1BQW5CLElBQTZCaEUsT0FBTyxDQUFDZ0UsTUFBUixLQUFtQixZQUFqRCxLQUFrRXFILElBQXJFLEVBQTJFO0FBQ3ZFLGFBQU8sWUFBUDtBQUNIOztBQUVELFdBQU8sSUFBUDtBQUNIOztBQUlELE1BQUlSLE1BQU0sR0FBRyxDQUFiOztBQUVBLFdBQVMxQixjQUFULENBQXdCL0gsS0FBeEIsRUFBK0I7QUFDM0I7QUFDQSxRQUFJb0osUUFBUSxDQUFDcEosS0FBSyxDQUFDcUcsS0FBUCxFQUFjckcsS0FBSyxDQUFDc0csS0FBcEIsRUFBMkIsS0FBM0IsQ0FBUixLQUE4QyxJQUFsRCxFQUF3RDtBQUNwRCxVQUFJbUQsTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDZGpKLGVBQU8sQ0FBQ3dCLEtBQVIsQ0FBY3lILE1BQWQsR0FBdUIsU0FBdkI7QUFDQUEsY0FBTSxHQUFHLENBQVQ7QUFDSDtBQUNKLEtBTEQsTUFLTztBQUNILFVBQUlBLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ2RqSixlQUFPLENBQUN3QixLQUFSLENBQWN5SCxNQUFkLEdBQXVCLE1BQXZCO0FBQ0FBLGNBQU0sR0FBRyxDQUFUO0FBQ0g7QUFDSjtBQUNKOztBQUVEM0IsT0FBSztBQUNSLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVYRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU0vRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFTbUgsR0FBVCxFQUFjdEwsT0FBZCxFQUF1QjtBQUMxQ0EsU0FBTyxHQUFHLElBQUk0Qyw2Q0FBSixDQUFZNUMsT0FBWixDQUFWOztBQUVBLE1BQUcsT0FBT3NMLEdBQVAsS0FBZSxRQUFsQixFQUE0QjtBQUN4QixRQUFJQyxRQUFRLEdBQUdyTCxRQUFRLENBQUNzTCxnQkFBVCxDQUEwQkYsR0FBMUIsQ0FBZjs7QUFDQSxTQUFJLElBQUlHLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0YsUUFBUSxDQUFDMUMsTUFBeEIsRUFBZ0M0QyxDQUFDLEVBQWpDLEVBQXFDO0FBQ2pDLFVBQUlwRCwwREFBSixDQUFrQmtELFFBQVEsQ0FBQ0UsQ0FBRCxDQUExQixFQUErQnpMLE9BQS9CO0FBQ0g7QUFDSixHQUxELE1BS08sSUFBR3NMLEdBQUcsQ0FBQ0ksUUFBUCxFQUFpQjtBQUNwQixRQUFJckQsMERBQUosQ0FBa0JpRCxHQUFsQixFQUF1QnRMLE9BQXZCO0FBQ0g7QUFDSixDQVhNO0FBYVAsaUVBQWVtRSxPQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDNEg7QUFDN0I7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLHlEQUF5RCwyQkFBMkIsb0JBQW9CLDhCQUE4Qiw0QkFBNEIsMkJBQTJCLGNBQWMsZUFBZSxrQkFBa0IsMkJBQTJCLHNCQUFzQixvQkFBb0IsV0FBVyxpQkFBaUIscUJBQXFCLHFCQUFxQixpQkFBaUIsc0JBQXNCLHNCQUFzQixFQUFFLDBCQUEwQiwyQkFBMkIsbUJBQW1CLGdCQUFnQixjQUFjLGVBQWUsc0JBQXNCLGtDQUFrQyxvQkFBb0IsRUFBRSx3QkFBd0IsbUJBQW1CLGdCQUFnQixxQkFBcUIsbUJBQW1CLEVBQUUsNEdBQTRHLG9CQUFvQixFQUFFLHFDQUFxQyx1QkFBdUIsRUFBRSxpQ0FBaUMsMEJBQTBCLG1CQUFtQiw2QkFBNkIsc0JBQXNCLHlEQUF5RCxxQkFBcUIsc0JBQXNCLDJCQUEyQix1QkFBdUIsNkZBQTZGLG9CQUFvQix1QkFBdUIsZ0JBQWdCLHFCQUFxQixFQUFFLHdDQUF3Qyw0RkFBNEYsRUFBRSxrRkFBa0YsZ0JBQWdCLEVBQUUsdUJBQXVCLDJCQUEyQiw4QkFBOEIsY0FBYyxlQUFlLG1CQUFtQixvQkFBb0Isa0JBQWtCLHdCQUF3QixzQkFBc0IsRUFBRSwwQkFBMEIsbUJBQW1CLGdCQUFnQiw4QkFBOEIsMkRBQTJELHNCQUFzQix3QkFBd0Isd0JBQXdCLEVBQUUsa0RBQWtELHFCQUFxQix5QkFBeUIsNkJBQTZCLG1CQUFtQixrQkFBa0IsZ0JBQWdCLGlCQUFpQixnQkFBZ0IsOEJBQThCLG9CQUFvQixFQUFFLHlEQUF5RCwyQkFBMkIsa0JBQWtCLGlCQUFpQixFQUFFLGtEQUFrRCxnQ0FBZ0Msc0JBQXNCLEVBQUUsa0NBQWtDLHNCQUFzQixpQkFBaUIsRUFBRSwwQkFBMEIsdUJBQXVCLEVBQUUsZ0NBQWdDLDRCQUE0QiwrQkFBK0IsRUFBRSxpQ0FBaUMsa0JBQWtCLEVBQUUsU0FBUyx3VkFBd1YsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLG1CQUFtQixPQUFPLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsaUJBQWlCLE1BQU0sVUFBVSxVQUFVLFlBQVksZ0JBQWdCLE1BQU0sZUFBZSxNQUFNLGtCQUFrQixNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsa0JBQWtCLE1BQU0sbUJBQW1CLFFBQVEsaUJBQWlCLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGtCQUFrQixPQUFPLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGdCQUFnQixPQUFPLGFBQWEsV0FBVyxlQUFlLE1BQU0sYUFBYSxpQkFBaUIsT0FBTyxZQUFZLGlCQUFpQixNQUFNLGlCQUFpQixNQUFNLFlBQVksa0JBQWtCLE1BQU0sa0RBQWtELCtCQUErQix3QkFBd0Isa0NBQWtDLGdDQUFnQywrQkFBK0Isa0JBQWtCLG1CQUFtQixzQkFBc0IsK0JBQStCLDBCQUEwQix3QkFBd0IsZUFBZSx5QkFBeUIseUJBQXlCLHlCQUF5QixxQkFBcUIsMEJBQTBCLDBCQUEwQixLQUFLLGlDQUFpQyw2QkFBNkIscUJBQXFCLGtCQUFrQixnQkFBZ0IsaUJBQWlCLHdCQUF3QixvQ0FBb0Msc0JBQXNCLEtBQUssMkJBQTJCLHFCQUFxQixrQkFBa0IsdUJBQXVCLHFCQUFxQix5REFBeUQsc0JBQXNCLE9BQU8sd0JBQXdCLHlCQUF5QixPQUFPLEtBQUssOEJBQThCLDhCQUE4QixjQUFjLDhCQUE4QixpQ0FBaUMsaUNBQWlDLDBCQUEwQiw2REFBNkQseUJBQXlCLDBCQUEwQiwrQkFBK0IsMkJBQTJCLHlGQUF5Rix3QkFBd0IsMkJBQTJCLG9CQUFvQix5QkFBeUIsT0FBTyx5QkFBeUIsd0ZBQXdGLE9BQU8sa0RBQWtELG9CQUFvQixPQUFPLEtBQUssOEJBQThCLDZCQUE2QixnQ0FBZ0MsZ0JBQWdCLGlCQUFpQixxQkFBcUIsc0JBQXNCLHdCQUF3QiwwQkFBMEIsd0JBQXdCLGNBQWMscUJBQXFCLHNCQUFzQixnQ0FBZ0MsNkRBQTZELHdCQUF3QiwwQkFBMEIsMEJBQTBCLE9BQU8sZ0VBQWdFLHVCQUF1QiwrQkFBK0IsK0JBQStCLHFCQUFxQixvQkFBb0Isa0JBQWtCLG1CQUFtQixrQkFBa0IsZ0NBQWdDLHNCQUFzQixrQkFBa0IsNkJBQTZCLG9CQUFvQixtQkFBbUIsU0FBUyxPQUFPLHNDQUFzQyxrQ0FBa0Msd0JBQXdCLE9BQU8saUJBQWlCLDBCQUEwQixzQkFBc0IsMEJBQTBCLHlCQUF5QixPQUFPLEtBQUssb0dBQW9HLHlCQUF5QixnQkFBZ0IsOEJBQThCLGlDQUFpQyxPQUFPLGtCQUFrQixvQkFBb0IsT0FBTyxLQUFLLHVCQUF1QjtBQUN0eU87QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixpQ0FBaUMsMkhBQTJIOztBQUU1Siw2QkFBNkIsa0tBQWtLOztBQUUvTCxpREFBaUQsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRCxrSEFBa0g7O0FBRTlaLHNDQUFzQyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxrQkFBa0IsRUFBRSxhQUFhOztBQUVyTCx3Q0FBd0MsZ0ZBQWdGLGVBQWUsZUFBZSxnQkFBZ0Isb0JBQW9CLE1BQU0sMENBQTBDLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLGlEQUFpRCxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhOztBQUV2ZSwrQkFBK0Isb0NBQW9DOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CK0Y7QUFDL0YsWUFBNE47O0FBRTVOOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLDJMQUFPOzs7QUFHeEIsSUFBSSxJQUFVO0FBQ2QsT0FBTyxrTUFBYyxJQUFJLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isa01BQWM7O0FBRWxDLElBQUksaUJBQWlCO0FBQ3JCLE1BQU0scVhBQTJMO0FBQ2pNLE1BQU07QUFBQTtBQUNOLHNDQUFzQyxrTUFBYztBQUNwRCxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQkFBMEIsa01BQWM7O0FBRXhDLHFCQUFxQiwyTEFBTztBQUM1QixPQUFPO0FBQ1A7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxrTUFBYyxNQUFNLEU7Ozs7Ozs7Ozs7O0FDbkV0Qjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7OztVQzVRQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBLG9CQUFvQjtVQUNwQixrREFBa0Qsc0JBQXNCLEVBQUU7VUFDMUU7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0NwQ0EsOEI7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ0pBLDRGOzs7OztXQ0FBLHNEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQSxFOzs7OztXQ1ZBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esc0JBQXNCLDRCQUE0QixRQUFRO1dBQzFEO1dBQ0E7V0FDQTtXQUNBLGdCQUFnQixvQkFBb0I7V0FDcEM7V0FDQSxrR0FBa0csWUFBWSxPQUFPO1dBQ3JIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtFQUFrRSxrQ0FBa0M7V0FDcEc7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0N6Q0E7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLENBQUM7O1dBRUQ7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLDJCQUEyQjtXQUMzQiwyQkFBMkI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRzs7V0FFSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxtQkFBbUIsZ0JBQWdCO1dBQ25DO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0EsbUJBQW1CLGdCQUFnQjtXQUNuQztXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7O1dBRUg7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0EsR0FBRzs7V0FFSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGdCQUFnQixxQ0FBcUM7V0FDckQ7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMOztXQUVBO1dBQ0E7V0FDQSxJQUFJO1dBQ0osR0FBRztXQUNILEVBQUU7V0FDRjs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0EsRUFBRTtXQUNGOztXQUVBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxFQUFFOztXQUVGO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLG1CQUFtQixvQkFBb0I7V0FDdkM7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFOztXQUVGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQSxHQUFHO1dBQ0g7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSixHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0EsQzs7Ozs7V0N0V0EsMkI7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7V0FHQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtCQUFrQiwyQkFBMkI7V0FDN0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0EsaUJBQWlCLGNBQWM7V0FDL0I7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsS0FBSztXQUNuQjtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsWUFBWTtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGdCQUFnQiw0QkFBNEI7V0FDNUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQix1Q0FBdUM7V0FDeEQ7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQSxrQkFBa0IsaUNBQWlDO1dBQ25EO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EscUJBQXFCLHVDQUF1QztXQUM1RDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxxQkFBcUIsc0JBQXNCO1dBQzNDO1dBQ0E7V0FDQSxRQUFRO1dBQ1I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsVUFBVTtXQUNWO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLGtCQUFrQix3Q0FBd0M7V0FDMUQ7V0FDQTtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsT0FBTztXQUNQO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFNBQVM7V0FDVDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFFBQVE7V0FDUjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRSxJQUFJO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0EscUNBQXFDO1dBQ3JDO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7O1dBRUE7O1dBRUE7O1dBRUEsc0I7Ozs7O1VDaGVBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImRpYWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkRpYWxvZ1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJEaWFsb2dcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0ICcuL3NyYy9wb2x5ZmlsbHMvYWxsLmpzJztcclxuaW1wb3J0IERpYWxvZyBmcm9tICcuL3NyYy9EaWFsb2cuanMnO1xyXG5pbXBvcnQgTWVzc2FnZUJveCBmcm9tICcuL3NyYy9NZXNzYWdlQm94LmpzJztcclxuaW1wb3J0ICcuL3NyYy9fZGlhbG9nLnNjc3MnO1xyXG5pbXBvcnQgJ2ljb25zLWNsJztcclxuXHJcbkRpYWxvZy5NZXNzYWdlQm94ID0gTWVzc2FnZUJveDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpYWxvZztcclxuZXhwb3J0IHtEaWFsb2d9O1xyXG5cclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIE1pZGRsZSBzZWN0aW9uIG9mIGRpYWxvZyBib3hcclxuICovXHJcblxyXG5pbXBvcnQgVG9vbHMgZnJvbSAnLi9ET00vVG9vbHMuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBCb2R5ID0gZnVuY3Rpb24oZGlhbG9nLCBwYXJlbnREaXYpIHtcclxuICAgIGxldCBvcHRpb25zID0gZGlhbG9nLm9wdGlvbnM7XHJcblxyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy1jbC1ib2R5Jyk7XHJcblxyXG4gICAgVG9vbHMuYWRkQ29udGVudChkaXYsIG9wdGlvbnMuY29udGVudCk7XHJcblxyXG4gICAgLy8gZGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignZGlhbG9nLWNsLWJvZHknLCBvcHRpb25zLmNvbnRlbnQpO1xyXG4gICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgdGhpcy5kaXYgPSBkaXY7XHJcbn1cclxuIiwiaW1wb3J0IFRvb2xzIGZyb20gJy4vRE9NL1Rvb2xzJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYm90dG9tIGJ1dHRvbnMgc2VjdGlvbiBvZiB0aGUgZGlhbG9nIGJveFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmxldCBCb3R0b20gPSBmdW5jdGlvbihkaWFsb2csIHBhcmVudERpdikge1xyXG4gICAgbGV0IG9wdGlvbnMgPSBkaWFsb2cub3B0aW9ucztcclxuXHJcbiAgICBsZXQgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuICAgICAgICAvLyBsZXQgaHRtbCA9IGA8YnV0dG9uIGNsYXNzPVwiY2wtZGlhbG9nLWJ0blwiPk9rPC9idXR0b24+PGJ1dHRvbiBjbGFzcz1cImNsLWRpYWxvZy1idG5cIj5DYW5jZWw8L2J1dHRvbj5gO1xyXG4gICAgICAgIGxldCBkaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdjbC1kaWFsb2ctYm90dG9tJyk7XHJcbiAgICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnMuYnV0dG9ucyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhZGRPayhkaXYpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuYnV0dG9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhZGRCdXR0b24oZGl2LCBpdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZE9rKGRpdiwgaXRlbSkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnT2snO1xyXG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0gIT09IHVuZGVmaW5lZCAmJiBpdGVtLmNsaWNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xpY2soZGlhbG9nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24uZm9jdXMoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQnV0dG9uKGRpdiwgaXRlbSkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBpdGVtLmNvbnRlbnRzO1xyXG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0gIT09IHVuZGVmaW5lZCAmJiBpdGVtLmNsaWNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xpY2soZGlhbG9nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaXRlbS5jbGFzcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGl0ZW0uY2xhc3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaXRlbS5mb2N1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBidXR0b24uZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpO1xyXG5cclxuICAgIHRoaXMuZGVmYXVsdCA9IGZ1bmN0aW9uKCkge1xyXG5cdCAgICBvcHRpb25zLmJ1dHRvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0ICAgIGlmKGl0ZW0uZGVmYXVsdCA9PT0gdHJ1ZSAmJiBpdGVtLmNsaWNrICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0ICAgIGl0ZW0uY2xpY2soZGlhbG9nKTtcclxuICAgICAgICAgICAgfVxyXG5cdCAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm90dG9tO1xyXG5cclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIENvbnZlbmllbmNlIGZ1bmN0aW9ucyBmb3IgdGhlIERPTS5cclxuICogVG9vbHMgdGhhdCBhdm9pZCBoYXZpbmcgdG8gaGF2ZSBqUXVlcnkgaW5zdGFsbGVkLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBUb29scyA9IGZ1bmN0aW9uKCkge1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCBhIGNsYXNzIHRvIGFuIGVsZW1lbnRcclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0byBhZGQgdG9cclxuICogQHBhcmFtIGNsYXNzTmFtZSBDbGFzcyB0byBhZGRcclxuICovXHJcblRvb2xzLmFkZENsYXNzID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xyXG59XHJcblxyXG5Ub29scy5hZGRDbGFzc2VzID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhc3Nlcykge1xyXG4gICAgaWYoY2xhc3NlcyA9PT0gdW5kZWZpbmVkIHx8IGNsYXNzZXMgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goKGNscykgPT4ge1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzKGVsZW1lbnQsIGNscyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIERJViB3aXRoIGEgcHJvdmlkZWQgY2xhc3MgbmFtZS5cclxuICogQHBhcmFtIGNsYXNzTmFtZSBDbGFzcyB0byBhZGQgdG8gdGhlIGRpdlxyXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50IHRvIHBsYWNlIGluIHRoZSBkaXYuIEhUTUwgb3IgRWxlbWVudFxyXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gQ3JlYXRlZCBET00gRWxlbWVudFxyXG4gKi9cclxuVG9vbHMuY3JlYXRlQ2xhc3NlZERpdiA9IGZ1bmN0aW9uKGNsYXNzTmFtZSwgY29udGVudCkge1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgVG9vbHMuYWRkQ2xhc3MoZGl2LCBjbGFzc05hbWUpO1xyXG4gICAgVG9vbHMuYWRkQ29udGVudChkaXYsIGNvbnRlbnQpO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCBjb250ZW50IHRvIGFuIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdG8gYWRkIHRvXHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQuIENhbiBiZSBIVE1MIG9yIGFuIEVsZW1lbnQuXHJcbiAqL1xyXG5Ub29scy5hZGRDb250ZW50ID0gZnVuY3Rpb24oZWxlbWVudCwgY29udGVudCkge1xyXG4gICAgaWYoVG9vbHMuaXNTdHJpbmcoY29udGVudCkpIHtcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCArPSBjb250ZW50O1xyXG4gICAgfSBlbHNlIGlmKFRvb2xzLmlzRWxlbWVudChjb250ZW50KSkge1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblRvb2xzLmlzU3RyaW5nID0gZnVuY3Rpb24odmFsKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHwgKCghIXZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JykgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKTtcclxufVxyXG5cclxuVG9vbHMuaXNFbGVtZW50ID0gZnVuY3Rpb24odmFsKSB7XHJcbiAgICByZXR1cm4gdmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsICYmIHZhbC5ub2RlVmFsdWUgIT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vbHM7XHJcblxyXG4iLCJpbXBvcnQge09wdGlvbnN9IGZyb20gJy4vT3B0aW9ucy5qcyc7XHJcbmltcG9ydCB7VGl0bGVCYXJ9IGZyb20gJy4vVGl0bGVCYXInO1xyXG5pbXBvcnQge0JvZHl9IGZyb20gJy4vQm9keS5qcyc7XHJcbmltcG9ydCBCb3R0b20gZnJvbSAnLi9Cb3R0b20uanMnO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSAnLi9ET00vVG9vbHMuanMnO1xyXG5pbXBvcnQge01hc2t9IGZyb20gJy4vTWFzay5qcyc7XHJcblxyXG5pbXBvcnQgUmVzaXplciBmcm9tICdyZXNpemVyLWNsJztcclxuXHJcbi8qKlxyXG4gKiBGbGV4aWJsZSBhbmQgY29uZmlndXJhYmxlIGRpYWxvZyBib3ggb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKlxyXG4gKiBAdmVyc2lvbiAxLjAuNCBUb3VjaCBzdXBwb3J0IGZvciB0aXRsZSBiYXIgZHJhZ2dpbmdcclxuICogQHByb3BlcnR5IHtlbGVtZW50fSBmb3JtIEdldCB0aGUgZm9ybSBET00gZWxlbWVudCAoaWYgdXNlZClcclxuICovXHJcbmxldCBEaWFsb2cgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gbmV3IE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cclxuICAgIGxldCBib2R5ID0gbnVsbCwgbWFzayA9IG51bGwsIGJvdHRvbSA9IG51bGw7XHJcbiAgICBsZXQgZm9ybSA9IG51bGw7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgIGZvcm06IHtnZXQ6IGZ1bmN0aW9uKCkge3JldHVybiBmb3JtfX1cclxuICAgIH0pXHJcblxyXG4gICAgbGV0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgRGlhbG9nLnpJbmRleCArPSAyO1xyXG4gICAgICAgIHRoaXMuekluZGV4ID0gRGlhbG9nLnpJbmRleDtcclxuXHJcbiAgICAgICAgbGV0IGRpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2RpYWxvZy1jbCcpO1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzZXMoZGl2LCBvcHRpb25zLmFkZENsYXNzKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXYgPSBkaXY7XHJcbiAgICAgICAgZGl2LnN0eWxlLnpJbmRleCA9IHRoaXMuekluZGV4O1xyXG5cclxuICAgICAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICBpbnN0YWxsUmVzaXphYmxlKGRpdik7XHJcblxyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBkaXY7XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnMuZm9ybSkge1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIG9wdGlvbmFsIHN1cnJvdW5kaW5nIGZvcm1cclxuICAgICAgICAgICAgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyID0gZm9ybTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ldyBUaXRsZUJhcih0aGlzLCBjb250YWluZXIpO1xyXG4gICAgICAgIGJvZHkgPSBuZXcgQm9keSh0aGlzLCBjb250YWluZXIpO1xyXG4gICAgICAgIGlmKG9wdGlvbnMuYnV0dG9ucyAhPT0gZmFsc2UpIHtcclxuXHQgICAgICAgIGJvdHRvbSA9IG5ldyBCb3R0b20odGhpcywgY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFzayA9IG5ldyBNYXNrKHRoaXMpO1xyXG5cclxuICAgICAgICBwbGFjZShkaXYsIG9wdGlvbnMucGFyZW50KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWRvd24sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGtleWRvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBpbnN0YWxsUmVzaXphYmxlID0gKGRpdikgPT4ge1xyXG4gICAgICAgIGlmKG9wdGlvbnMucmVzaXplICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgbGV0IHJzT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICdyZXNpemUnOiBvcHRpb25zLnJlc2l6ZSxcclxuICAgICAgICAgICAgICAgICdoYW5kbGUnOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAnZ3JhYlNpemUnOiBvcHRpb25zLmdyYWJTaXplXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBuZXcgUmVzaXplcihkaXYsIHJzT3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiB0b1B4KHZhbCkge1xyXG4gICAgICAgIHJldHVybiAnJyArIHZhbCArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQbGFjZSB0aGUgZGlhbG9nIGJveCBjZW50ZXJlZCBpbiB0aGUgcGFyZW50LlxyXG4gICAgICogQHBhcmFtIGRpdiBEaWFsb2cgYm94IGRpdlxyXG4gICAgICogQHBhcmFtIHBhcmVudCBQYXJlbnQgZGl2XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHBsYWNlID0gKGRpdiwgcGFyZW50KSA9PiB7XHJcbiAgICAgICAgbGV0IHBhcmVudFdpZDtcclxuICAgICAgICBsZXQgcGFyZW50SGl0O1xyXG5cclxuICAgICAgICBpZihwYXJlbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcGFyZW50V2lkID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgICAgIHBhcmVudEhpdCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYXJlbnRXaWQgPSBwYXJlbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgIHBhcmVudEhpdCA9IHBhcmVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGVpZ2h0ID0gZGl2Lm9mZnNldEhlaWdodDtcclxuICAgICAgICBsZXQgd2lkdGggPSBkaXYub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICAgIGxldCB0b3AgPSBwYXJlbnRIaXQvMiAtIGhlaWdodC8yO1xyXG4gICAgICAgIGlmKHRvcCA8IDEwKSB7XHJcbiAgICAgICAgICAgIHRvcCA9IDEwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxlZnQgPSBwYXJlbnRXaWQvMiAtIHdpZHRoLzI7XHJcbiAgICAgICAgaWYobGVmdCA8IDApIHtcclxuICAgICAgICAgICAgbGVmdCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYuc3R5bGUubGVmdCA9IHRvUHgobGVmdCk7XHJcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IHRvUHgodG9wKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCk7XHJcblxyXG4gICAgdGhpcy5hZGRDb250ZW50ID0gZnVuY3Rpb24oY29udGVudCkge1xyXG4gICAgICAgIFRvb2xzLmFkZENvbnRlbnQoYm9keS5kaXYsIGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2xvc2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBtYXNrLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kaXYpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlkb3duLCB0cnVlKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBDYWxsaW5nIGlzIGVxdWl2YWxlbnQgdG8gcHJlc3NpbmcgdGhlIGZpcnN0IGRlZmF1bHQgYnV0dG9uXHJcblx0ICovXHJcblx0dGhpcy5kZWZhdWx0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYoYm90dG9tICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJvdHRvbS5kZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5EaWFsb2cuekluZGV4ID0gMTAwMDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaWFsb2c7XHJcblxyXG4iLCIvKipcclxuICogTWFzayB0aGF0IGFsbG93cyB0aGUgZGlhbG9nIGJveCB0byBiZSBtb2RhbC5cclxuICovXHJcblxyXG5pbXBvcnQgVG9vbHMgZnJvbSAnLi9ET00vVG9vbHMuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1hc2sgPSBmdW5jdGlvbihkaWFsb2cpIHtcclxuICAgIGxldCBvcHRpb25zID0gZGlhbG9nLm9wdGlvbnM7XHJcblxyXG4gICAgbGV0IG1hc2sgPSBudWxsO1xyXG5cclxuICAgIGlmKG9wdGlvbnMubW9kYWwpIHtcclxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBtYXNrID0gIFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ21hc2snKTsgLy8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIG1hc2suc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgIG1hc2suc3R5bGUubGVmdCA9IDA7XHJcbiAgICAgICAgbWFzay5zdHlsZS50b3AgPSAwO1xyXG4gICAgICAgIG1hc2suc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICBtYXNrLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICBtYXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgbWFzay5zdHlsZS56SW5kZXggPSBkaWFsb2cuekluZGV4IC0gMTtcclxuXHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtYXNrKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKG1hc2sgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobWFzayk7XHJcbiAgICAgICAgICAgIG1hc2sgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiLyoqXHJcbiAqIEhhbmR5IFNpbXBsZSBNZXNzYWdlIEJveFxyXG4gKi9cclxuXHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9EaWFsb2cuanMnO1xyXG5cclxubGV0IE1lc3NhZ2VCb3ggPSBmdW5jdGlvbih0aXRsZSwgbWVzc2FnZSwgdHlwZSwgYnV0dG9uMSwgYnV0dG9uMikge1xyXG4gICAgLy8gRGVmYXVsdDogT0tcclxuICAgIGxldCBidXR0b25zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29udGVudHM6ICdPaycsXHJcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbihkaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgIGlmKGJ1dHRvbjEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjEoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnZm9jdXMnOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICBpZih0eXBlID09PSBNZXNzYWdlQm94Lk9LQ0FOQ0VMKSB7XHJcbiAgICAgICAgYnV0dG9ucyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGVudHM6ICdPaycsXHJcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oZGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYnV0dG9uMSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjEoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJ2ZvY3VzJzogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50czogJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oZGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYnV0dG9uMiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgICBsZXQgZGlhbG9nID0gbmV3IERpYWxvZyh7XHJcbiAgICAgICAgICAndGl0bGUnOiB0aXRsZSxcclxuICAgICAgICAgICdjb250ZW50JzogJzxkaXYgY2xhc3M9XCJtZXNzYWdlLWNsXCI+PHA+JyArIG1lc3NhZ2UgKyAnPC9wPjwvZGl2PicsXHJcbiAgICAgICAgICAnYnV0dG9ucyc6IGJ1dHRvbnNcclxuICAgICB9KTtcclxufVxyXG5cclxuTWVzc2FnZUJveC5PSyA9IDA7XHJcbk1lc3NhZ2VCb3guT0tDQU5DRUwgPSAxO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUJveDtcclxuXHJcbiIsIi8qKlxyXG4gKiBWYXJpb3VzIGludGVyZmFjZSBvcHRpb25zIHdlIGNhbiBzZWxlY3RcclxuICovXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIG9wdGlvbnMuXHJcbiAqIEBwYXJhbSBvcHRpb25zIFVzZXIgcHJvdmlkZWQgb3B0aW9ucyB0aGF0IG92ZXJyaWRlIHRoZSBkZWZhdWx0IHZhbHVlcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgT3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zID8gb3B0aW9ucyA6IHt9O1xyXG5cclxuICAgIC8vLyBUaXRsZSBiYXIgdGV4dFxyXG4gICAgdGhpcy50aXRsZSA9ICdEaWFsb2cgQm94JztcclxuXHJcbiAgICAvLy8gQW55IGFkZGVkIGNsYXNzIG9yIGNsYXNzZXMgZm9yIHRoZSBtYWluIGRpYWxvZyBib3ggZGl2XHJcbiAgICAvLy8gQ2FuIGJlIGEgc3RyaW5nIG9yIG11bHRpcGxlIHN0cmluZ3Mgc3BhY2UgZGVsaW1pdGVkXHJcbiAgICB0aGlzLmFkZENsYXNzID0gbnVsbDtcclxuXHJcbiAgICAvLy8gSXMgdGhpcyBkaWFsb2cgYm94IHJlc2l6YWJsZT9cclxuICAgIC8vLyBPcHRpb25zIGFyZTogJ25vbmUnLCAndmVydGljYWwnLCAnaG9yaXpvbnRhbCdcclxuICAgIHRoaXMucmVzaXplID0gJ25vbmUnO1xyXG5cclxuICAgIC8vLyBTaXplIG9mIHRoZSBib3JkZXIgZWRnZSB3ZSBjYW4gZ3JhYiBpZiByZXNpemFibGUgaW4gcGl4ZWxzXHJcbiAgICB0aGlzLmdyYWJTaXplID0gNDtcclxuXHJcbiAgICAvLy8gQXJyYXkgb2YgdGl0bGUgYmFyIGJ1dHRvbnMgdG8gYWRkLlxyXG4gICAgLy8vIElmIG51bGwsIGEgY2xvc2UgYnV0dG9uIGlzIGFkZGVkIGF1dG9tYXRpY2FsbHkuXHJcbiAgICAvLy8gT3RoZXJ3aXNlLCBhbiBhcnJheSBvZiBvYmplY3RzLCB3aXRoIHRoZXNlIGZpZWxkczpcclxuICAgIC8vLyAgIHR5cGU6ICdjbG9zZScgZm9yIGEgY2xvc2UgIGJ1dHRvbiwgJ2N1c3RvbScgZm9yIGN1c3RvbSBidXR0b24gY29udGVudHNcclxuICAgIC8vLyAgIGNvbnRlbnRzOiBIVE1MIHRvIHBsYWNlIGluc2lkZSBidXR0b24gdGFnXHJcbiAgICAvLy8gICBjbGljazogQ2xpY2sgaGFuZGxlclxyXG4gICAgdGhpcy50aXRsZUJhckJ1dHRvbnMgPSBudWxsO1xyXG5cclxuICAgIC8vLyBBbnkgYWRkZWQgY2xhc3Mgb3IgY2xhc3NlcyBmb3IgdGhlIHRpdGxlIGJhciBkaXZcclxuICAgIC8vLyBDYW4gYmUgYSBzdHJpbmcgb3IgbXVsdGlwbGUgc3RyaW5ncyBzcGFjZSBkZWxpbWl0ZWRcclxuICAgIHRoaXMudGl0bGVCYXJBZGRDbGFzcyA9IG51bGw7XHJcblxyXG4gICAgLy8vIEFycmF5IG9mIGJ1dHRvbnMgZm9yIHRoZSBib3R0b20uXHJcbiAgICAvLy8gSWYgbnVsbCwgYW4gT2sgYnV0dG9uIGlzIGFkZGVkIGF1dG9tYXRpY2FsbHkuXHJcbiAgICAvLy8gT3RoZXJ3aXNlLCBhbiBhcnJheSBvZiBvYmplY3RzLCB3aXRoIHRoZXNlIGZpZWxkczpcclxuICAgIC8vLyAgIGNvbnRlbnRzOiBJZiBwcm92aWRlZCwgSFRNTCB0byBwbGFjZSBpbnNpZGUgYnV0dG9uIHRhZ1xyXG4gICAgLy8vICAgY2xpY2s6IENsaWNrIGhhbmRsZXJcclxuICAgIC8vLyAgIGZvY3VzOiB0cnVlIGlmIHdlIHdhbnQgdG8gc2V0IGZvY3VzIG9uIHRoaXMgYnV0dG9uXHJcbiAgICAvLy8gICBkZWZhdWx0OiB0cnVlIGlmIHRoaXMgaXMgdGhlIGRlZmF1bHQgYnV0dG9uXHJcbiAgICAvLy8gICBjbGFzczogQ2xhc3MgdG8gYWRkIHRvIHRoZSBidXR0b25cclxuICAgIHRoaXMuYnV0dG9ucyA9IG51bGw7XHJcblxyXG4gICAgLy8vIENvbnRlbnQgdG8gYWRkIHRvIHRoZSBkaWFsb2cgYm94LiBJZiBudWxsLCBub25lIGlzIGFkZGVkIG9uIGNyZWF0aW9uLlxyXG4gICAgdGhpcy5jb250ZW50ID0gbnVsbDtcclxuXHJcbiAgICAvLy8gSXMgdGhpcyBhIG1vZGFsIGRpYWxvZyBib3g/IElmIHRydWUsIGNvbnRyb2xzIHVuZGVybmVhdGggYXJlIGRpc2FibGVkLlxyXG4gICAgdGhpcy5tb2RhbCA9IHRydWU7XHJcblxyXG4gICAgLy8vIFNwZWNpZmllcyB3aGF0IGVsZW1lbnQgdGhlIGRpYWxvZyBib3ggc2hvdWxkIGJlIGNlbnRlcmVkIGluLlxyXG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xyXG5cclxuICAgIC8vLyBTaG91bGQgd2UgYWRkIGEgZm9ybT9cclxuICAgIHRoaXMuZm9ybSA9IHRydWU7XHJcblxyXG4gICAgZm9yKHZhciBwcm9wZXJ0eSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbiBcIiArIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IG9wdGlvbnNbcHJvcGVydHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFRpdGxlIGJhciBtYW5hZ2VtZW50XHJcbiAqL1xyXG5cclxuaW1wb3J0IFRvb2xzIGZyb20gJy4vRE9NL1Rvb2xzLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUaXRsZUJhcihkaWFsb2csIHBhcmVudERpdikge1xyXG4gICAgbGV0IG9wdGlvbnMgPSBkaWFsb2cub3B0aW9ucztcclxuXHJcbiAgICAvLy8gTW91c2UgbW92ZSBldmVudCBoYW5kbGVycyBpbnN0YWxsZWQgZmxhZ1xyXG4gICAgbGV0IGluc3RhbGxlZE1vdmVIYW5kbGVycyA9IGZhbHNlO1xyXG5cclxuICAgIC8vLyBUb3VjaCBtb3ZlIGV2ZW50IGhhbmRsZXJzIGluc3RhbGxlZCBmbGFnXHJcbiAgICBsZXQgaW5zdGFsbGVkVG91Y2hIYW5kbGVycyA9IGZhbHNlO1xyXG5cclxuICAgIGxldCBpbml0aWFsWCwgaW5pdGlhbFk7XHJcbiAgICBsZXQgaW5pdGlhbFBvc2l0aW9uWCwgaW5pdGlhbFBvc2l0aW9uWTtcclxuXHJcbiAgICBsZXQgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgaHRtbCA9IGA8aDE+JHtvcHRpb25zLnRpdGxlfTwvaDE+YDtcclxuICAgICAgICBsZXQgZGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignZGlhbG9nLWNsLXRvcCcsIGh0bWwpO1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzZXMoZGl2LCBvcHRpb25zLnRpdGxlQmFyQWRkQ2xhc3MpO1xyXG4gICAgICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICBpZihvcHRpb25zLnRpdGxlQmFyQnV0dG9ucyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhZGRDbG9zZShkaXYpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMudGl0bGVCYXJCdXR0b25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGl0ZW0udHlwZSA9PT0gJ2Nsb3NlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZENsb3NlKGRpdiwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaXRlbS50eXBlID09PSAnY3VzdG9tJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEN1c3RvbShkaXYsIGl0ZW0pOyAvLyBhZGRDdXN0b20oZGl2LCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbGV0IGgxID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XHJcblxyXG4gICAgICAgIGgxLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bkxpc3RlbmVyKTtcclxuICAgICAgICBoMS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG91Y2hTdGFydExpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZENsb3NlKGRpdiwgaXRlbSkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyhidXR0b24sICdkaWFsb2ctY2wtdGItYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cImljb25zLWNsIGljb25zLWNsLWNsb3NlXCI+JztcclxuICAgICAgICBidXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZihpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbS5jbGljayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQ3VzdG9tKGRpdiwgaXRlbSkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyhidXR0b24sICdkaWFsb2ctY2wtdGItYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGl0ZW0uY29udGVudHM7XHJcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYoaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uY2xpY2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGljaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW92ZVRvKHgsIHkpIHtcclxuICAgICAgICBsZXQgZHggPSB4IC0gaW5pdGlhbFg7XHJcbiAgICAgICAgbGV0IGR5ID0geSAtIGluaXRpYWxZO1xyXG5cclxuICAgICAgICBsZXQgbmV3UG9zaXRpb25YID0gaW5pdGlhbFBvc2l0aW9uWCArIGR4O1xyXG4gICAgICAgIGxldCBuZXdQb3NpdGlvblkgPSBpbml0aWFsUG9zaXRpb25ZICsgZHk7XHJcblxyXG4gICAgICAgIGRpYWxvZy5kaXYuc3R5bGUubGVmdCA9IG5ld1Bvc2l0aW9uWCArICdweCc7XHJcbiAgICAgICAgZGlhbG9nLmRpdi5zdHlsZS50b3AgPSBuZXdQb3NpdGlvblkgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBNb3VzZSBoYW5kbGVyc1xyXG4gICAgLy9cclxuXHJcbiAgICBmdW5jdGlvbiBpbnN0YWxsTW91c2VIYW5kbGVycygpIHtcclxuICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG5cclxuICAgICAgICBpbnN0YWxsZWRNb3ZlSGFuZGxlcnMgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcExpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VEb3duTGlzdGVuZXIoZXZlbnQpIHtcclxuICAgICAgICBpbml0aWFsWCA9IGV2ZW50LnBhZ2VYO1xyXG4gICAgICAgIGluaXRpYWxZID0gZXZlbnQucGFnZVk7XHJcblxyXG4gICAgICAgIGxldCByZWN0ID0gZGlhbG9nLmRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBpbml0aWFsUG9zaXRpb25YID0gcmVjdC5sZWZ0O1xyXG4gICAgICAgIGluaXRpYWxQb3NpdGlvblkgPSByZWN0LnRvcDtcclxuXHJcbiAgICAgICAgaW5zdGFsbE1vdXNlSGFuZGxlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZU1vdmVMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgaWYoZS5idXR0b25zICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUhhbmRsZXJzKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1vdmVUbyhlLnBhZ2VYLCBlLnBhZ2VZKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZVVwTGlzdGVuZXIoZSkge1xyXG4gICAgICAgIHJlbW92ZUhhbmRsZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIFRvdWNoIGhhbmRsZXJzXHJcbiAgICAvL1xyXG5cclxuICAgIGZ1bmN0aW9uIGluc3RhbGxUb3VjaEhhbmRsZXJzKCkge1xyXG4gICAgICAgIHJlbW92ZUhhbmRsZXJzKCk7XHJcblxyXG4gICAgICAgIGluc3RhbGxlZFRvdWNoSGFuZGxlcnMgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hFbmRMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHRvdWNoU3RhcnRMaXN0ZW5lcihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGluaXRpYWxYID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWDtcclxuICAgICAgICBpbml0aWFsWSA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVk7XHJcblxyXG4gICAgICAgIGxldCByZWN0ID0gZGlhbG9nLmRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBpbml0aWFsUG9zaXRpb25YID0gcmVjdC5sZWZ0O1xyXG4gICAgICAgIGluaXRpYWxQb3NpdGlvblkgPSByZWN0LnRvcDtcclxuXHJcbiAgICAgICAgaW5zdGFsbFRvdWNoSGFuZGxlcnMoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gdG91Y2hNb3ZlTGlzdGVuZXIoZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIG1vdmVUbyhlLnRvdWNoZXNbMF0ucGFnZVgsIGUudG91Y2hlc1swXS5wYWdlWSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG91Y2hFbmRMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgcmVtb3ZlSGFuZGxlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhbGwgaW5zdGFsbGVkIHRlbXBvcmFyeSBoYW5kbGVyc1xyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiByZW1vdmVIYW5kbGVycygpIHtcclxuICAgICAgICBpZihpbnN0YWxsZWRNb3ZlSGFuZGxlcnMpIHtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGluc3RhbGxlZE1vdmVIYW5kbGVycyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaW5zdGFsbGVkVG91Y2hIYW5kbGVycykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaE1vdmVMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hFbmRMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hFbmRMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGluc3RhbGxlZFRvdWNoSGFuZGxlcnMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpO1xyXG59XHJcblxyXG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJJY29uc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJJY29uc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9pbWFnZXMvaWNvbnMucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmljb25zLWNsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1uZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1zZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1zdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1udyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMi1uLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTItZS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLW5lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtc2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1zdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLW53IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMi1uLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0yLWUtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtbmUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMS1zZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMS1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLXN3IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtbncge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0yLW4tcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTItbmUtc3cge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0yLWUtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTItc2Utbncge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3N0b3AtMS1uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3dzdG9wLTEtZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93c3RvcC0xLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3N0b3AtMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtbmUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtc2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtc3cge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtbncge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTItbi1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0yLW5lLXN3IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0yLWUtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMi1zZS1udyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2tzdG9wLTEtbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2tzdG9wLTEtZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2tzdG9wLTEtcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2tzdG9wLTEtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93cmV0dXJudGhpY2stMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC02NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3dyZXR1cm50aGljay0xLWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtNjRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWZvbGRlci1jb2xsYXBzZWQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1mb2xkZXItb3BlbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZG9jdW1lbnQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWRvY3VtZW50LWIge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLW5vdGUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLW1haWwtY2xvc2VkIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1tYWlsLW9wZW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXN1aXRjYXNlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY29tbWVudCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBlcnNvbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXByaW50IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJhc2gge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1sb2NrZWQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC11bmxvY2tlZCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWJvb2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdGFnIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtaG9tZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1mbGFnIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FsY3VsYXRvciB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcnQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1wZW5jaWwge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jbG9jayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWRpc2sge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYWxlbmRhciB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC16b29taW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtem9vbW91dCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zZWFyY2gge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtd3JlbmNoIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWdlYXIge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtaGVhcnQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc3RhciB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1saW5rIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1wbHVzIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGx1c3RoaWNrIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbWludXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1taW51c3RoaWNrIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wta2V5IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbGlnaHRidWxiIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc2Npc3NvcnMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2xpcGJvYXJkIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNvcHkge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY29udGFjdCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1pbWFnZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC12aWRlbyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zY3JpcHQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2xvc2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jbG9zZXRoaWNrIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYWxlcnQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtaW5mbyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLW5vdGljZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWhlbHAge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jaGVjayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWJ1bGxldCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXJhZGlvLW9mZiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXJhZGlvLW9uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBpbi13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBpbi1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBsYXkge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGF1c2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zZWVrLW5leHQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zZWVrLXByZXYge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zZWVrLWVuZCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXNlZWstZmlyc3Qge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zdG9wIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZWplY3Qge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdm9sdW1lLW9mZiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC12b2x1bWUtb24ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTE2MHB4OyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vaWNvbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQix5REFBdUM7RUFDdkMsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTtFQVBaO0lBYUksd0JBQXdCLEVBQUE7RUFiNUI7SUFpQkksNEJBQTRCLEVBQUE7RUFqQmhDO0lBcUJJLDRCQUFnQyxFQUFBO0VBckJwQztJQXlCSSw0QkFBZ0MsRUFBQTtFQXpCcEM7SUE2QkksNEJBQWdDLEVBQUE7RUE3QnBDO0lBaUNJLDRCQUFnQyxFQUFBO0VBakNwQztJQXFDSSw0QkFBZ0MsRUFBQTtFQXJDcEM7SUF5Q0ksNkJBQWdDLEVBQUE7RUF6Q3BDO0lBNkNJLDZCQUFnQyxFQUFBO0VBN0NwQztJQWlESSw2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Q0FBMEMsRUFBQTtFQTdUaEQ7SUE2VE0saUNBQTBDLEVBQUE7RUE3VGhEO0lBNlRNLGtDQUEwQyxFQUFBO0VBN1RoRDtJQTZUTSxrQ0FBMEMsRUFBQTtFQTdUaEQ7SUE2VE0sa0NBQTBDLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmljb25zLWNsIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvaWNvbnMucG5nKTtcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuXFxyXFxuICAvL1xcclxcbiAgLy8gUm93IDFcXHJcXG4gIC8vXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTEtbiB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtY2FyZXQtMS1uZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTEtZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIgKiAtMTZweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jYXJldC0xLXNlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMyAqIC0xNnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTEtcyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQgKiAtMTZweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jYXJldC0xLXN3IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNSAqIC0xNnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTEtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDYgKiAtMTZweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jYXJldC0xLW53IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNyAqIC0xNnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTItbi1zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOCAqIC0xNnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTItZS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOSAqIC0xNnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvL1xcclxcbiAgLy8gUm93IDJcXHJcXG4gIC8vXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTEtbiB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgKiAtMTZweCAtMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtdHJpYW5nbGUtMS1uZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEgKiAtMTZweCAtMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtdHJpYW5nbGUtMS1lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMiAqIC0xNnB4IC0xNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC10cmlhbmdsZS0xLXNlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMyAqIC0xNnB4IC0xNnB4O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgJi5pY29ucy1jbC10cmlhbmdsZS0xLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0ICogLTE2cHggLTE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTEtc3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1ICogLTE2cHggLTE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTEtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDYgKiAtMTZweCAtMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtdHJpYW5nbGUtMS1udyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDcgKiAtMTZweCAtMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtdHJpYW5nbGUtMi1uLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA4ICogLTE2cHggLTE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTItZS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOSAqIC0xNnB4IC0xNnB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvL1xcclxcbiAgLy8gUm93IDNcXHJcXG4gIC8vXFxyXFxuICAmLmljb25zLWNsLWFycm93LTEtbiB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMS1uZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMS1lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMiAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvdy0xLXNlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMyAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvdy0xLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0ICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTEtc3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1ICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTEtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDYgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMS1udyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDcgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMi1uLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA4ICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTItbmUtc3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5ICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTItZS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMi1zZS1udyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDExICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93c3RvcC0xLW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMiAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3N0b3AtMS1lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTMgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3dzdG9wLTEtcyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE0ICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93c3RvcC0xLXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNSAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLy9cXHJcXG4gIC8vIFJvdyA0XFxyXFxuICAvL1xcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTEtbiB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0xLW5lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMSAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTEtZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0xLXNlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMyAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTEtcyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0xLXN3IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNSAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTEtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDYgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0xLW53IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNyAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTItbi1zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOCAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTItbmUtc3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5ICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2stMi1lLXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMCAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTItc2Utbncge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMSAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMiAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLWUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMyAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNCAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNSAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLy9cXHJcXG4gIC8vIFJvdyA1XFxyXFxuICAmLmljb25zLWNsLWFycm93cmV0dXJudGhpY2stMS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAqIC0xNnB4IC02NHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3JldHVybnRoaWNrLTEtZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIgKiAtMTZweCAtNjRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIHVpLWljb24tYXJyb3dyZXR1cm50aGljay0xLW4gIHVpLWljb24tYXJyb3dyZXR1cm50aGljay0xLXMgIHVpLWljb24tYXJyb3dyZXR1cm4tMS13ICB1aS1pY29uLWFycm93cmV0dXJuLTEtbiAgdWktaWNvbi1hcnJvd3JldHVybi0xLWUgIHVpLWljb24tYXJyb3dyZXR1cm4tMS1zICB1aS1pY29uLWFycm93cmVmcmVzaC0xLXcgIHVpLWljb24tYXJyb3dyZWZyZXNoLTEtbiAgdWktaWNvbi1hcnJvd3JlZnJlc2gtMS1lICB1aS1pY29uLWFycm93cmVmcmVzaC0xLXNcXHJcXG4gIC8vIHVpLWljb24tYXJyb3ctNCAgdWktaWNvbi1hcnJvdy00LWRpYWcgIHVpLWljb24tZXh0bGluayAgdWktaWNvbi1uZXd3aW4gIHVpLWljb24tcmVmcmVzaCAgdWktaWNvbi1zaHVmZmxlICB1aS1pY29uLXRyYW5zZmVyLWUtdyAgdWktaWNvbi10cmFuc2ZlcnRoaWNrLWUtd1xcclxcblxcclxcbiAgLy9cXHJcXG4gIC8vIFJvdyA2XFxyXFxuICAvL1xcclxcbiAgJGxpc3Q6IGZvbGRlci1jb2xsYXBzZWQgZm9sZGVyLW9wZW4gZG9jdW1lbnQgZG9jdW1lbnQtYiBub3RlIG1haWwtY2xvc2VkIG1haWwtb3BlbiBzdWl0Y2FzZSBjb21tZW50IHBlcnNvbiBwcmludCB0cmFzaCBsb2NrZWQgdW5sb2NrZWQgYm9va21hcmsgdGFnO1xcclxcbiAgJHg6IDA7XFxyXFxuXFxyXFxuICBAZWFjaCAkaXRlbSBpbiAkbGlzdCB7XFxyXFxuICAgICYuaWNvbnMtY2wtI3skaXRlbX0ge1xcclxcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR4ICogLTE2cHggLTk2cHhcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAkeDogJHgrMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vXFxyXFxuICAvLyBSb3cgN1xcclxcbiAgLy9cXHJcXG4gICRsaXN0OiBob21lIGZsYWcgY2FsY3VsYXRvciBjYXJ0IHBlbmNpbCBjbG9jayBkaXNrIGNhbGVuZGFyIHpvb21pbiB6b29tb3V0IHNlYXJjaCB3cmVuY2ggZ2VhciBoZWFydCBzdGFyIGxpbms7XFxyXFxuICAkeDogMDtcXHJcXG5cXHJcXG4gIEBlYWNoICRpdGVtIGluICRsaXN0IHtcXHJcXG4gICAgJi5pY29ucy1jbC0jeyRpdGVtfSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHggKiAtMTZweCAtMTEycHhcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAkeDogJHgrMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vXFxyXFxuICAvLyBSb3cgOFxcclxcbiAgLy9cXHJcXG4gICRsaXN0OiBjYW5jZWwgIHBsdXMgIHBsdXN0aGljayAgbWludXMgIG1pbnVzdGhpY2sgIGtleSAgbGlnaHRidWxiICBzY2lzc29ycyAgY2xpcGJvYXJkICBjb3B5ICBjb250YWN0ICBpbWFnZSAgdmlkZW8gIHNjcmlwdDtcXHJcXG4gICR4OiAwO1xcclxcblxcclxcbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xcclxcbiAgICAmLmljb25zLWNsLSN7JGl0ZW19IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkeCAqIC0xNnB4IC0xMjhweFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICR4OiAkeCsxO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jbG9zZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xMjhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtY2xvc2V0aGljayB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xMjhweDtcXHJcXG4gIH1cXHJcXG4gIC8vIHVpLWljb24tY2FuY2VsICB1aS1pY29uLXBsdXMgIHVpLWljb24tcGx1c3RoaWNrICB1aS1pY29uLW1pbnVzICB1aS1pY29uLW1pbnVzdGhpY2sgIHVpLWljb24ta2V5ICB1aS1pY29uLWxpZ2h0YnVsYiAgdWktaWNvbi1zY2lzc29ycyAgdWktaWNvbi1jbGlwYm9hcmQgIHVpLWljb24tY29weSAgdWktaWNvbi1jb250YWN0ICB1aS1pY29uLWltYWdlICB1aS1pY29uLXZpZGVvICB1aS1pY29uLXNjcmlwdFxcclxcblxcclxcbiAgLy8gUm93IDlcXHJcXG4gICRsaXN0OiBhbGVydCBpbmZvICBub3RpY2UgaGVscCBjaGVjayAgYnVsbGV0ICByYWRpby1vZmYgIHJhZGlvLW9uICBwaW4tdyAgcGluLXM7XFxyXFxuICAkeDogMDtcXHJcXG5cXHJcXG4gIEBlYWNoICRpdGVtIGluICRsaXN0IHtcXHJcXG4gICAgJi5pY29ucy1jbC0jeyRpdGVtfSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHggKiAtMTZweCA5ICogLTE2cHhcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAkeDogJHgrMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vICBSb3cgMTBcXHJcXG4gICRsaXN0OiBwbGF5IHBhdXNlIHNlZWstbmV4dCAgc2Vlay1wcmV2ICBzZWVrLWVuZCAgc2Vlay1maXJzdCAgc3RvcCAgZWplY3QgIHZvbHVtZS1vZmYgIHZvbHVtZS1vbjtcXHJcXG4gICR4OiAwO1xcclxcblxcclxcbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xcclxcbiAgICAmLmljb25zLWNsLSN7JGl0ZW19IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkeCAqIC0xNnB4IDEwICogLTE2cHhcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAkeDogJHgrMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gLy8gdWktaWNvbi1wb3dlciAgdWktaWNvbi1zaWduYWwtZGlhZyAgdWktaWNvbi1zaWduYWwgIHVpLWljb24tYmF0dGVyeS0wICB1aS1pY29uLWJhdHRlcnktMSAgdWktaWNvbi1iYXR0ZXJ5LTIgIHVpLWljb24tYmF0dGVyeS0zXFxyXFxuICAvLyB1aS1pY29uLWNpcmNsZS1wbHVzICB1aS1pY29uLWNpcmNsZS1taW51cyAgdWktaWNvbi1jaXJjbGUtY2xvc2UgIHVpLWljb24tY2lyY2xlLXRyaWFuZ2xlLWUgIHVpLWljb24tY2lyY2xlLXRyaWFuZ2xlLXMgIHVpLWljb24tY2lyY2xlLXRyaWFuZ2xlLXcgIHVpLWljb24tY2lyY2xlLXRyaWFuZ2xlLW4gIHVpLWljb24tY2lyY2xlLWFycm93LWUgIHVpLWljb24tY2lyY2xlLWFycm93LXMgIHVpLWljb24tY2lyY2xlLWFycm93LXcgIHVpLWljb24tY2lyY2xlLWFycm93LW4gIHVpLWljb24tY2lyY2xlLXpvb21pbiAgdWktaWNvbi1jaXJjbGUtem9vbW91dCAgdWktaWNvbi1jaXJjbGUtY2hlY2tcXHJcXG4vLyB1aS1pY29uLWNpcmNsZXNtYWxsLXBsdXMgIHVpLWljb24tY2lyY2xlc21hbGwtbWludXMgIHVpLWljb24tY2lyY2xlc21hbGwtY2xvc2UgIHVpLWljb24tc3F1YXJlc21hbGwtcGx1cyAgdWktaWNvbi1zcXVhcmVzbWFsbC1taW51cyAgdWktaWNvbi1zcXVhcmVzbWFsbC1jbG9zZVxcclxcbi8vIHVpLWljb24tZ3JpcC1kb3R0ZWQtdmVydGljYWwgIHVpLWljb24tZ3JpcC1kb3R0ZWQtaG9yaXpvbnRhbCAgdWktaWNvbi1ncmlwLXNvbGlkLXZlcnRpY2FsICB1aS1pY29uLWdyaXAtc29saWQtaG9yaXpvbnRhbCAgdWktaWNvbi1ncmlwc21hbGwtZGlhZ29uYWwtc2UgIHVpLWljb24tZ3JpcC1kaWFnb25hbC1zZVxcclxcblxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2ljb25zLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaWNvbnMuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscywgdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVFBQUFBRHdDQU1BQUFEWVNVcjVBQUFCUzJsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU0x2dTc4aUlHbGtQU0pYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUWlQejRLUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpUVdSdlltVWdXRTFRSUVOdmNtVWdOUzQyTFdNeE5ESWdOemt1TVRZd09USTBMQ0F5TURFM0x6QTNMekV6TFRBeE9qQTJPak01SUNBZ0lDQWdJQ0FpUGdvZ1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNEtJQ0E4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBpSWk4K0NpQThMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K25oeGc3d0FBQUFSblFVMUJBQUN4and2OFlRVUFBQUFCYzFKSFFnQ3V6aHpwQUFBQkRsQk1WRVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJ4VVlXOUFBQUFXWFJTVGxNQUwyWktDRUJnR1JBelVCcS9JbU9lUlkrVVAyMmduQ0FwekEweEFTd1dWU2Vad3hOeGdDTTBSOCt2YUVnS2hSdzRVKzhFSGt0L0gxcENnb3lvb3Ywa0FsRURJVEpxdGJqZllvY0drVzg4c3ExOHZzYXJ5THlxcFptS0M3QUFBQTdtU1VSQlZIamE3VjBKWTl1MkRxWmN5NVFjSjI2enJabmpyazF6ckUzWDEvYjEySDF2YisrK1Qvei9QL0pJeVJJQjhMSmlSM1ppZnM0RlVRZnhDU1FCa0ZLRVNFaEkyQUpJa0R1dVAydzVBeXRYVDBKWWY0a1owRHYzU3dpelFOQ2dCUEQ2a0hKZEt2RVdBRnZGd0FYWThkV2Z2Wm9FdDBDYkFNbnJROHI1SGJRSTRJZmJGN0IybGoweVlOWGZyVUtnM0daUUJBMElRZzFpc2JNTTdyVGVCczR0Mks0aXY4RzJoUVR2c0cwQmdRcjBid0Z1VWdLM01HakJ6aDJzUGlCa2d2MzNBWnNlQlhnVDZuOFVTSTVRUWtKQ1FrSkNRc0xHUE1FTiswSFNpdGFBTys4eW9CQUFEL0JscDN5QWxSQlNaKytWRWtjRkxBS3NIZmp1TkZ5VTFnVTRBVElZUFBZYURGbjFkOWM0VU96SXFNakE0U0tTQW9TS0FPaXZnWU16QmVTdnNWd21IeUNEZk1iU0I1c1BoeVZjWno1QXhwcmd0b1hEdDMwVVNFaElTRWhJU0VqWW9LZTF1ak8vMHZsaHN3cllvVTlRb1NzRVN0RHQramFoRURrYmhMZlk2ckZpc0hlaGg0T3Z6SDJCWUFVY3BlSHJ1ODRRSXNncXQwNEdNUUpKaFlEdEFZNFQydlVCcjRMZ3VsN28rbmE0RERFQ0lCaHZnNGp3NnpvOHNBdFZjTEUzZUFrQ1laMHd5Si9iaUVNbUZHeEFUZ3RoakRzT0Q1dG8vQXBkMUl1MmNjY2FJZ2lYUjg3SWJnZEViMGprQWhEczkwQkVtbkQvbzhBMUh4OGZKaE1TRWhJU0VoSjJGYXN2UzEzUnpaQ08xZWorVTdyODBPaFVWZVR5M1NxdzFBWEM4VHdzVVFGVUx2RGsxQkplbmQ0WkFxR0xhM28vbGlJSVh0OFIzM0lGSXVtSFFFYWlubGcwRk5tMWRTeDJsMEVDSW12RDNXWVdZaURJbndTSW1aY3JJUVE4SEFZY3pRWXN5QXFISGRHNDljaUdXS0lDN2xKM2RBd1FpT2ZCWVFQK3d5MENyQnJZMWFQbHZJbkZDWEJYd0hzTGx5b0dDTWJQNFM1Q3VHYm9neFpFbWdCckl0RW00RzdsMHJ1SHRKZTgyQW9FMm9qRHdGZ1RGOVlNZllRQUdja0h5SEFmQU81K05YU1B3c1hoc2NUUmh1UGpMc0RTd3h4c2ZUNUFRbG9oa1pDUWtKQ1FJRHBFb0dzZGhzTURNemdqNkxYcUI1MG04TmQ4ZGVsNjJoMUhmODRqSklROXh5NFpGRFpYQlE2RklWUytPdjJ1NStlQjZCSjZPaHhpdDlRMUcyN3hCL1JZQ1BLelZnYkFaa0R3OXh1SXdQc0JYUGtNT2w4dGxwaCtGY0NPQmQvaGF5ZWdDVGQ5QkVpSWhNL082ZXRndVd0Mkdyd1c0ZHdaMWtpQmROVFFmaUlFL0hjOE50OXNKMFJFckErd0NPQk5ZdTNobmVuVWRETEJpczdvOC8yT2NuOFRkNWhFOEJHaUpUckY2eGdZYVVaSGh2SUI4ZWcxdGdnb2xuOEk1NCtTbjVPUWtKQ1FrTEJWS0c3NFFPWndPeUEwWGNXOTRhdm92MDFUQWM1cEZ1cDlGZEhaUUNoRVIyOVBicXNGdFBHV29hZUFBZ1ZETkw0cm9MWUF3QVNHSHptQXJacXRBdmZ5YlZ5dTlDZlJHZEFBdm00RE5Od1RiRG9jME92aXRvc0FnRWgxdERLRkk5WURLNVBoalEzeE50azJNWGx6TE1EYW42N1lxQW55V0FCZnI5RFF2Vlh6b2VFK0lIUjdtK2k4TUZiQyt3QndXdHgyallMQlVjRFo1ZE1CQW9MTHhJSXZwN2doZmtEMEJNWHkrOHBiR1AxMzBUOGhJU0VoWWJkUWFqK2hYSDcvTjBPRk4zM1ZicXdxTnhtSDl2Z3k0cm5CNDlwVktrUDY0K0l5ek1jYmtRRms0ZzA3QVRwaVg0bjd3aVB6UXZGb0FYWkFveEtjNS9rWU9YdlYzMlBMMVIzNG42WWVMVFFjRVgzYkduUFptdG5hWDVRM3RSNW1NQnhDTm1SdUd2aWpOM3Zxa2pwMkE5Y1YyeUF0ei9PaUJpTmtRZ2hBRElBMjBTRndDeGkxbnZTZVF1dEtRMk1CdnZudStuVG1oRU1ZbnAzOURKaUEyV3dXZmdKREFEZ0ZKd0g3aEVEUXFxTU5paENKQ2FrclNBay8xdkJaQUl3Qi9kSVhYdlFCZ0NwSWFueGNIWDVzQ0RqN2FmOHZoSUNIRHg5YXkrUDlNdHZBQ2RENmY0RUpvQ1lGU24rd0tTcFEyZzhlYW5ndFlFK3JEdU05a3djb0svdHZDZERuUnltMituVG1oS29KUEgrT204Qk1xRnVnZnJZSGxOWG5pZ1JvL1IrOSs4SlBnR1FiMUJZcDl5UUtZZURvNk1qZkI4Q2VZa0Rwandtb3Zsb0NxazRRRWZCV0gvMzJiYlBock80RXo3eHQza0dBc0orbm9BUjhqdk1UZzlFajlUUDNFV0E5b3ZKeEJYVEJrNU1UTUNacVdVQzVOeDZySDZZSlZMS2ZnSk1haXcweWc1K3liQTZaSkFTVXFCZjhkZlhCK2c0NUFVTkdBQkFMR0JqOUF3UzBwL3VvQWpPNTRkQm5BZVZlaFJJOE11ZytkZ3lrVFdaWk93cGt6ZlV6cndYWUJNU2FBQzZ2KzhCY1dBU1U5SHJNRDRBdlkzN0Frc05nWFo4QnpjR1VadWdHVytGSXB6ZkNsN2MzY0FJcUJ2SjFPbnJscUVKNTlWTXcxMldwUE80S05kNWZxLzRKQ1FrSkNWdU9GeS9DNVFVRTg5cjFmMzZLWmozYVlmQkpOVXc5d1JrSEhHTVBGdktBaFdmN1M4dEMvSUhWSncrT2F5cmFPbWFiMUxDTjlTOUx3OEJFZTVFWDJSZ0ZPNnJLZzhkZy9HeFAxZ1BwTHhBRDZtQU5OdE5FUFp0TXU0Skx5L1g5YURYSXRUTlh0R043b2JrZDRIdDZDbkRLOU5lTzBwSFJYL3ZtYmZRcjNZNFlDdWZoTitwemppdFVxdnRjb3YzSjNLRDErUHUveGFYNEo0NXZNeVZrUkJaVVBoNGVJMW5YZnpUeVZSQVd6ajVRZzBNV3B5bzdLb3pyV0djczJ1aktKb0NGd3lCZXZiMzc4dDNiTWI3L1kxR0taUW40RC94V2ZmNkJGZFN1UDVOeDhLRmk0MkhHZlY5QUxSaXZVR0hYZTlHSXFCK1l3UGxJY1ZBTGo1dU16V01mQVl0ZUFGbkFPZndkWGdEV0g2WHM0aGJ3TC9HTCtKOUpLWjB3Q3poaEZuRENMR0JFWWcvVkF1cE9xbzF2MmZXK3FxV3YyZ3BXd1R5T0hVRDNBV2kxZkpTQVYyOC8vMWg5M1BvdlBIVk1RQUZWMXFtUi93dGZxOC9mMElvSjBzWXIrV2Ntby9LcS9TcDg3Q0dnaWU0SzJrU28vUVI2ZVJpT3hSR0pGeGtCSldPWTZkK3VpS0FFSVBtelh4NU9IdjcxdzRXOEJ6UXBHcE5IOU83WlRXQWhZL0gwMU1qYTl0dDhwNU1BYXhSVTV5Z0NTOXA1a3Z2Sm9zSlBNQUhXZWdPVGNGTE5uWjB1TEF1bXZ4M0FGMlROMnQxdlZmYzMrUFp1UzRCcS8wWGdlRXZSZ2RXSnNrZDhlSktmK1FFODdjMWsxeHRnUXZLSTY4K0hRVkV2NmpMRjFZekFvMXo0TElnaHU0bXVYdDRod0NjK1VFSkNRa0xDQmpER2lXbnR5c0dKdGM4RDZxbGNJekk4RGVIemRhNSsrZ0ttNnVjVUQ4MFhlR3JpQy9qaGgrKytndzlSZGM2MS9oWFVIL04zOE9vVnZKc1RUN1FVUE4zUTVCdGFtVzhZTThjSDZUOFpqMThUQmpxOTd0OGVhTlc1TWhSdGdtSmd5cjN4SStONS9VcmpqOFlWblk3VkNVWldjRU9pVThjNlZEcVhhL1pScm1PcGdoMHpPVmdYbU9CS084WlRlQTFySTBDN1d1Z0lyWHYxVFEzQUVQRDlqdzhlL1BpOXFjOVlRRDdDTXp1Y0FMSmtCS3BrRkZyd1VJZzZWVkVZWDd2VStSaEV3RXM5VjRjdk9OV3Mrd2lJcktlM3A3SXlvRzFxV3NsVEhyeTBGYXBzZmI4OS9KNWVuSUhjVlJpeUJSbjArR29lRk8wQU92QlU4WnpBRmpBWTRQWHEyWHl1dzB0RGdOSmZqUDBaSUVmR3hSWHVVeFBIN3VhVTZWK1M2Y212WVY4QjdpRy9saHdQeDJFQ3p0U2ZaL3FyS2I2b0psK1BrQVd3NlBYbHk3MlhjN2hvVC9oYTEyNnlQZ0s0Qlh4VHlhZFVmNk5nTnExd1JBODNoS2xiZW54OFRBZ2diZjVJNFRQMXhSWThUTDE5d0h5dUd3RHVCRitQeDVNMWRvS3NEL2htMFFlY21neGNUc0xSdWE3dmtUbDhlZzRYaUFGOW9qUFU3VFhKbTBhL2p6NWFmREVEOGZZQjQzSStuOE1jQXNQZ3VrZUJVNTJZTmZYaG9kdDBNUGdLWFN4WFg0VmhBS3d3WGYrNTMyemd3MkJsRVJVOGZRQ01OVEFCN3BtQU5mb0JwMVZxdXZDa0QvZ2pac3BhWGhlNnAzelFsUDcrbGFTdmRSRlZyN0dRaHFWTzZaVkRjVlUvWVBNNE96dzh3eFowcnJrcUhoU2VoSSs5Y2pJaElTRmh0ZWdVcjQ2Kzg0SHVZajY0czBQNlB3TjQxZ3J2TjczdSt6dWovM090N3ZQbS9rTXowd1RHQm1Zd3d3Zjh6clhRYm4wcnoyWVYvN00rRFVBNW1vMEozRGNFM1BjNVFpNC9JamVVV0ZNUGZBT1hZYWJIOUZudy9OZHJBUHFhejNsc0UzcmRkOEUzNU1Zb0lnczN0ZngwK0pUT3pnWWVnT2lsQjlBaDlETnljVnFIQVo0WXEvV2ZFTnZQOGVwamUrbnVxQmhoL1o2cUgwL0pEck1ORXBBMzl6djNFNUN6Smc5d1dlQ3luTXdtMndRVXhHU3FoZVpERWs0VEFrcVl6V2I5ZWJwR1lUOEI5akVGc1gzU0thNXNBZjEyZ3BVQjFBL05WRG9jR2dJT3ZSWmdXMUR1Yi9LZCs0QitvelhlNmQwMTRsMXZKMGpFbkErS0s0OEN2YjVmYjJZVXJtdHcwSWdISXRBSGVFYkF0ZDJXVGZwRjcrbTBMTng3YjVOMVNHOVlURWhJU0VqWUllUVFFcTk5MEoza3d2SnpydFVWZmZ6WWNxY0RZaC9lTUtXQUVGQ1ZGWGlIZkZMb0gwRDVhMTh3VUlmT3B0eU9ySExtTytkV01WUXpaSDNHZzRRQ1NrQmQxdGE1dWoxS1BiNERJUUNYMndTNG52UzFSZWlYQUx3WW1CTlFwVDhXbGF4K1RhejU4UWtoWUJMTThQZzBKaUwwVFVDUEZyQVVBVDFiUUw5OWdDdWxzTkUrb09kUndNNTNiSGdVMkhrL0lDRWhJU0ZodHdFNy9SeFY4V2NCbjM1V0VFZmxZb2ZlazZ1Zkk0VlBjL1E4UTViZmN6eEEwZmdtL1AwSFhlV3R3eFQrcEFnUWFIV3labVZpTVdDOVRMNjhtcng5Qm5BcHhLZTV1TVJQVzArUFZFUkxuNjgxaWd5UGgrcXJYYjROeDNROXU1YUJ5a1A5R1c2cGUxc3UxczFmbUR1VWpVQ3Z0ai8zRUZDOUdrM3V5Zlp0ZXlDbDN0REllL3BqM3Irbnk5VVd1UWRiYkFFS2wvaU82MzVoQ2xUOWxvQVBhN1FtM2xIZU9reXFNWENFMXJ5b1lIUU1SMk1QQWJldUU4d0FMaTh1Y2JkZnB5TnlvT3JmM2dnMWU2YnV6N05NSkNRa0pDVHNJdmp6QVRHWkw2THFLbmU5M3FweURQejVnSmpNbDlGMWxidGViMVU1ZXYvTk9zRTd5OGg4SVdWWHVldjFWcFdqNE04SDNEY25hT1FEN1JzZUxPVEQ5bDFwOVZMYVE3TS9rb1czL0w0cHYrKzl2b0JnK2F6TzJ1Qnl3ZXN2OFBNT3dXd1lXeHpObDg1V3Z3NE84T3h3YkgrNzNOcmZUSkc3eXZIc21mczNrUHFJVHo3NVJORDZWRThrTDBzQStjTWg2OVo3d0Nvc0lMQy9zQlFLNzg4SWlOWUh2ejdlSmM5ci9kZEh3QWk5Zzg1QmdPdDNGNFdpMTNkWVNNZ0M5TnRHNXRDQmdIZ1QwRy9mNm1MaXNTWUNNUUtEVFVxNExBcnZQNi8xWDQ0QS9ueUFvMU5yT3NGRGJ5Y0ZYUFozcXM1T2tsK2ZkN0swdk9ISEorczJRSjkzQ0tIdllXelZZYlNySEVmZmpzeXFqbFJYT1k2K1hkbFZYZW11Y2tKQ1FrSkNRa0lzSEFDNE5ubjdDYUJ2YTR2THQ1QUFDQk5RZlVnRUhTWkFnTGhaQkZUL25pMGdNNEpBa01YVXRnd2lXVURxQTI0U0FicytDaVFrSkNRa0pDU3NHL0xtZUFMUlZaQlFkbC9vS3RuL0I5cnFleVhreWdUdyszMlQ5RitIQlhCOWI1VCsxQUtxNWUzVngwT0E2LzhONlAyNS9yZTJEeWdiVVAybHBiL2NHUXVvOTcrNStxOXFBVGRlLzFWSEFZLyt1K29IR1AxdmtSL1FpVTFwdmhNU3Roei9CL2gxT1dpeU1wc3dBQUFBQUVsRlRrU3VRbUNDXCIiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHR2YXIgZXhlY09wdGlvbnMgPSB7IGlkOiBtb2R1bGVJZCwgbW9kdWxlOiBtb2R1bGUsIGZhY3Rvcnk6IF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLCByZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fIH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uaS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHsgaGFuZGxlcihleGVjT3B0aW9ucyk7IH0pO1xuXHRtb2R1bGUgPSBleGVjT3B0aW9ucy5tb2R1bGU7XG5cdGV4ZWNPcHRpb25zLmZhY3RvcnkuY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgZXhlY09wdGlvbnMucmVxdWlyZSk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbl9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgZXhlY3V0aW9uIGludGVyY2VwdG9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBbXTtcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmh1ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1yRiA9ICgpID0+IChcIkljb25zLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzb25cIik7IiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwiSWNvbnM6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgY3VycmVudE1vZHVsZURhdGEgPSB7fTtcbnZhciBpbnN0YWxsZWRNb2R1bGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jO1xuXG4vLyBtb2R1bGUgYW5kIHJlcXVpcmUgY3JlYXRpb25cbnZhciBjdXJyZW50Q2hpbGRNb2R1bGU7XG52YXIgY3VycmVudFBhcmVudHMgPSBbXTtcblxuLy8gc3RhdHVzXG52YXIgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzID0gW107XG52YXIgY3VycmVudFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4vLyB3aGlsZSBkb3dubG9hZGluZ1xudmFyIGJsb2NraW5nUHJvbWlzZXM7XG5cbi8vIFRoZSB1cGRhdGUgaW5mb1xudmFyIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzO1xudmFyIHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckQgPSBjdXJyZW50TW9kdWxlRGF0YTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5pLnB1c2goZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0dmFyIG1vZHVsZSA9IG9wdGlvbnMubW9kdWxlO1xuXHR2YXIgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUob3B0aW9ucy5yZXF1aXJlLCBvcHRpb25zLmlkKTtcblx0bW9kdWxlLmhvdCA9IGNyZWF0ZU1vZHVsZUhvdE9iamVjdChvcHRpb25zLmlkLCBtb2R1bGUpO1xuXHRtb2R1bGUucGFyZW50cyA9IGN1cnJlbnRQYXJlbnRzO1xuXHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0b3B0aW9ucy5yZXF1aXJlID0gcmVxdWlyZTtcbn0pO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1ySSA9IHt9O1xuXG5mdW5jdGlvbiBjcmVhdGVSZXF1aXJlKHJlcXVpcmUsIG1vZHVsZUlkKSB7XG5cdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXHRpZiAoIW1lKSByZXR1cm4gcmVxdWlyZTtcblx0dmFyIGZuID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcblx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuXHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcblx0XHRcdFx0dmFyIHBhcmVudHMgPSBpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHM7XG5cdFx0XHRcdGlmIChwYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuXHRcdFx0XHRcdHBhcmVudHMucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcblx0XHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcblx0XHRcdH1cblx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuXHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcblx0XHRcdFx0XHRyZXF1ZXN0ICtcblx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuXHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHQpO1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcXVpcmUocmVxdWVzdCk7XG5cdH07XG5cdHZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiByZXF1aXJlW25hbWVdO1xuXHRcdFx0fSxcblx0XHRcdHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJlcXVpcmVbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXHRmb3IgKHZhciBuYW1lIGluIHJlcXVpcmUpIHtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlcXVpcmUsIG5hbWUpICYmIG5hbWUgIT09IFwiZVwiKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcihuYW1lKSk7XG5cdFx0fVxuXHR9XG5cdGZuLmUgPSBmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdHJldHVybiB0cmFja0Jsb2NraW5nUHJvbWlzZShyZXF1aXJlLmUoY2h1bmtJZCkpO1xuXHR9O1xuXHRyZXR1cm4gZm47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZHVsZUhvdE9iamVjdChtb2R1bGVJZCwgbWUpIHtcblx0dmFyIGhvdCA9IHtcblx0XHQvLyBwcml2YXRlIHN0dWZmXG5cdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuXHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuXHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuXHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuXHRcdF9tYWluOiBjdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXHRcdF9yZXF1aXJlU2VsZjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBtZS5wYXJlbnRzLnNsaWNlKCk7XG5cdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSBtb2R1bGVJZDtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuXHRcdH0sXG5cblx0XHQvLyBNb2R1bGUgQVBJXG5cdFx0YWN0aXZlOiB0cnVlLFxuXHRcdGFjY2VwdDogZnVuY3Rpb24gKGRlcCwgY2FsbGJhY2spIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0fSxcblx0XHRkZWNsaW5lOiBmdW5jdGlvbiAoZGVwKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcblx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuXHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuXHRcdH0sXG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXHRcdGludmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG5cdFx0XHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHNldFN0YXR1cyhcInJlYWR5XCIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdFx0Y2FzZSBcImNoZWNrXCI6XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlXCI6XG5cdFx0XHRcdGNhc2UgXCJhcHBseVwiOlxuXHRcdFx0XHRcdChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2goXG5cdFx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuXHRcdGNoZWNrOiBob3RDaGVjayxcblx0XHRhcHBseTogaG90QXBwbHksXG5cdFx0c3RhdHVzOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0aWYgKCFsKSByZXR1cm4gY3VycmVudFN0YXR1cztcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHZhciBpZHggPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcblx0XHRcdGlmIChpZHggPj0gMCkgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cblx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcblx0XHRkYXRhOiBjdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cblx0fTtcblx0Y3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuXHRyZXR1cm4gaG90O1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XG5cdGN1cnJlbnRTdGF0dXMgPSBuZXdTdGF0dXM7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuXHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG59XG5cbmZ1bmN0aW9uIHRyYWNrQmxvY2tpbmdQcm9taXNlKHByb21pc2UpIHtcblx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRzZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuXHRcdFx0YmxvY2tpbmdQcm9taXNlcy5wdXNoKHByb21pc2UpO1xuXHRcdFx0d2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdGJsb2NraW5nUHJvbWlzZXMucHVzaChwcm9taXNlKTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fVxufVxuXG5mdW5jdGlvbiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmbikge1xuXHRpZiAoYmxvY2tpbmdQcm9taXNlcy5sZW5ndGggPT09IDApIHJldHVybiBmbigpO1xuXHR2YXIgYmxvY2tlciA9IGJsb2NraW5nUHJvbWlzZXM7XG5cdGJsb2NraW5nUHJvbWlzZXMgPSBbXTtcblx0cmV0dXJuIFByb21pc2UuYWxsKGJsb2NrZXIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmbik7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBob3RDaGVjayhhcHBseU9uVXBkYXRlKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcImlkbGVcIikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuXHR9XG5cdHNldFN0YXR1cyhcImNoZWNrXCIpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNKCkudGhlbihmdW5jdGlvbiAodXBkYXRlKSB7XG5cdFx0aWYgKCF1cGRhdGUpIHtcblx0XHRcdHNldFN0YXR1cyhhcHBseUludmFsaWRhdGVkTW9kdWxlcygpID8gXCJyZWFkeVwiIDogXCJpZGxlXCIpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0c2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcblxuXHRcdHZhciB1cGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRcdGJsb2NraW5nUHJvbWlzZXMgPSBbXTtcblx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKFxuXHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDKS5yZWR1Y2UoZnVuY3Rpb24gKFxuXHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0a2V5XG5cdFx0XHQpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJDW2tleV0oXG5cdFx0XHRcdFx0dXBkYXRlLmMsXG5cdFx0XHRcdFx0dXBkYXRlLnIsXG5cdFx0XHRcdFx0dXBkYXRlLm0sXG5cdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMsXG5cdFx0XHRcdFx0dXBkYXRlZE1vZHVsZXNcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0dXJuIHByb21pc2VzO1xuXHRcdFx0fSxcblx0XHRcdFtdKVxuXHRcdCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpZiAoYXBwbHlPblVwZGF0ZSkge1xuXHRcdFx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KGFwcGx5T25VcGRhdGUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNldFN0YXR1cyhcInJlYWR5XCIpO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHVwZGF0ZWRNb2R1bGVzO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwicmVhZHlcIikge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJuYWxBcHBseShvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCk7XG5cblx0dmFyIHJlc3VsdHMgPSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycy5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHtcblx0XHRyZXR1cm4gaGFuZGxlcihvcHRpb25zKTtcblx0fSk7XG5cdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gdW5kZWZpbmVkO1xuXG5cdHZhciBlcnJvcnMgPSByZXN1bHRzXG5cdFx0Lm1hcChmdW5jdGlvbiAocikge1xuXHRcdFx0cmV0dXJuIHIuZXJyb3I7XG5cdFx0fSlcblx0XHQuZmlsdGVyKEJvb2xlYW4pO1xuXG5cdGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuXHRcdHNldFN0YXR1cyhcImFib3J0XCIpO1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IGVycm9yc1swXTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuXHRzZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuXG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5kaXNwb3NlKSByZXN1bHQuZGlzcG9zZSgpO1xuXHR9KTtcblxuXHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG5cdHNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG5cdHZhciBlcnJvcjtcblx0dmFyIHJlcG9ydEVycm9yID0gZnVuY3Rpb24gKGVycikge1xuXHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuXHR9O1xuXG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0cmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRpZiAocmVzdWx0LmFwcGx5KSB7XG5cdFx0XHR2YXIgbW9kdWxlcyA9IHJlc3VsdC5hcHBseShyZXBvcnRFcnJvcik7XG5cdFx0XHRpZiAobW9kdWxlcykge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChtb2R1bGVzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcblx0aWYgKGVycm9yKSB7XG5cdFx0c2V0U3RhdHVzKFwiZmFpbFwiKTtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9KTtcblx0fVxuXG5cdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcblx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChsaXN0KSB7XG5cdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0aWYgKGxpc3QuaW5kZXhPZihtb2R1bGVJZCkgPCAwKSBsaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbGlzdDtcblx0XHR9KTtcblx0fVxuXG5cdHNldFN0YXR1cyhcImlkbGVcIik7XG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbn1cblxuZnVuY3Rpb24gYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG5cdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcblx0XHRpZiAoIWN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzKSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHVuZGVmaW5lZDtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufSIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJJY29uc1wiOiAwXG59O1xuXG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG52YXIgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdDtcbnZhciB3YWl0aW5nVXBkYXRlUmVzb2x2ZXMgPSB7fTtcbmZ1bmN0aW9uIGxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gcmVzb2x2ZTtcblx0XHQvLyBzdGFydCB1cGRhdGUgY2h1bmsgbG9hZGluZ1xuXHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmh1KGNodW5rSWQpO1xuXHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHRcdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkXG5cdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBob3QgdXBkYXRlIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkKTtcblx0fSk7XG59XG5cbnNlbGZbXCJ3ZWJwYWNrSG90VXBkYXRlSWNvbnNcIl0gPSAoY2h1bmtJZCwgbW9yZU1vZHVsZXMsIHJ1bnRpbWUpID0+IHtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdGlmKGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QpIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIGN1cnJlbnRVcGRhdGVSdW50aW1lLnB1c2gocnVudGltZSk7XG5cdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSgpO1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0fVxufTtcblxudmFyIGN1cnJlbnRVcGRhdGVDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZTtcbnZhciBjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcztcbnZhciBjdXJyZW50VXBkYXRlUnVudGltZTtcbmZ1bmN0aW9uIGFwcGx5SGFuZGxlcihvcHRpb25zKSB7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXI7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB1bmRlZmluZWQ7XG5cdGZ1bmN0aW9uIGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyh1cGRhdGVNb2R1bGVJZCkge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG5cdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoYWluOiBbaWRdLFxuXHRcdFx0XHRpZDogaWRcblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcblx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcblx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhbW9kdWxlIHx8XG5cdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcblx0XHRcdClcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW3BhcmVudElkXTtcblx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcblx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuXHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG5cdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG5cdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0aWQ6IHBhcmVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG5cdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG5cdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcblx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGJbaV07XG5cdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG5cdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cblx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuXHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKG1vZHVsZSkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgbW9kdWxlLmlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG5cdFx0KTtcblx0fTtcblxuXHRmb3IgKHZhciBtb2R1bGVJZCBpbiBjdXJyZW50VXBkYXRlKSB7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRcdHZhciBuZXdNb2R1bGVGYWN0b3J5ID0gY3VycmVudFVwZGF0ZVttb2R1bGVJZF07XG5cdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG5cdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0aWYgKG5ld01vZHVsZUZhY3RvcnkpIHtcblx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKG1vZHVsZUlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdCA9IHtcblx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuXHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcblx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG5cdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcblx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcblx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuXHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRlcnJvcjogYWJvcnRFcnJvclxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvQXBwbHkpIHtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBuZXdNb2R1bGVGYWN0b3J5O1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuXHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcblx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y3VycmVudFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuXHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG5cdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcblx0Zm9yICh2YXIgaiA9IDA7IGogPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBqKyspIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tqXTtcblx0XHRpZiAoXG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF0gJiZcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZCAmJlxuXHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuXHRcdFx0YXBwbGllZFVwZGF0ZVtvdXRkYXRlZE1vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG5cdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuXHRcdFx0IV9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuXHRcdCkge1xuXHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuXHRcdFx0XHRtb2R1bGU6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdHJlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXS5ob3QuX3JlcXVpcmVTZWxmLFxuXHRcdFx0XHRlcnJvckhhbmRsZXI6IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuXG5cdHJldHVybiB7XG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0fSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHVuZGVmaW5lZDtcblxuXHRcdFx0dmFyIGlkeDtcblx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG5cdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cblx0XHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuXHRcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcblx0XHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGRpc3Bvc2VIYW5kbGVyc1tqXS5jYWxsKG51bGwsIGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yRFttb2R1bGVJZF0gPSBkYXRhO1xuXG5cdFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG5cdFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG5cdFx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZS5jaGlsZHJlbltqXV07XG5cdFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG5cdFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcblx0XHRcdFx0XHRpZiAoaWR4ID49IDApIHtcblx0XHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG5cdFx0XHR2YXIgZGVwZW5kZW5jeTtcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGFwcGx5OiBmdW5jdGlvbiAocmVwb3J0RXJyb3IpIHtcblx0XHRcdC8vIGluc2VydCBuZXcgY29kZVxuXHRcdFx0Zm9yICh2YXIgdXBkYXRlTW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGFwcGxpZWRVcGRhdGUsIHVwZGF0ZU1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVt1cGRhdGVNb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBydW4gbmV3IHJ1bnRpbWUgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50VXBkYXRlUnVudGltZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlUnVudGltZVtpXShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdHZhciBhY2NlcHRDYWxsYmFjayA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdGlmIChhY2NlcHRDYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihhY2NlcHRDYWxsYmFjaykgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChhY2NlcHRDYWxsYmFjayk7XG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzLnB1c2goZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgY2FsbGJhY2tzLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzW2tdLmNhbGwobnVsbCwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIG8gPSAwOyBvIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgbysrKSB7XG5cdFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW29dO1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpdGVtLnJlcXVpcmUobW9kdWxlSWQpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fVxuXHR9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJLmpzb25wID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBhcHBseUhhbmRsZXJzKSB7XG5cdGlmICghY3VycmVudFVwZGF0ZSkge1xuXHRcdGN1cnJlbnRVcGRhdGUgPSB7fTtcblx0XHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gW107XG5cdFx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdH1cblx0aWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdO1xuXHR9XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLmpzb25wID0gZnVuY3Rpb24gKFxuXHRjaHVua0lkcyxcblx0cmVtb3ZlZENodW5rcyxcblx0cmVtb3ZlZE1vZHVsZXMsXG5cdHByb21pc2VzLFxuXHRhcHBseUhhbmRsZXJzLFxuXHR1cGRhdGVkTW9kdWxlc0xpc3Rcbikge1xuXHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHt9O1xuXHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHJlbW92ZWRDaHVua3M7XG5cdGN1cnJlbnRVcGRhdGUgPSByZW1vdmVkTW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG5cdFx0b2JqW2tleV0gPSBmYWxzZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9LCB7fSk7XG5cdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdGNodW5rSWRzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRpZiAoXG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHQpIHtcblx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkpO1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0fVxuXHR9KTtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtciA9IGZ1bmN0aW9uIChjaHVua0lkLCBwcm9taXNlcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzICYmXG5cdFx0XHRcdCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZUNodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHRcdCkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSk7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yTSA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBmZXRjaCA9PT0gXCJ1bmRlZmluZWRcIikgdGhyb3cgbmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0OiBuZWVkIGZldGNoIEFQSVwiKTtcblx0cmV0dXJuIGZldGNoKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaG1yRigpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSByZXR1cm47IC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcblx0XHRpZighcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1cGRhdGUgbWFuaWZlc3QgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KTtcbn07XG5cbi8vIG5vIGRlZmVycmVkIHN0YXJ0dXBcblxuLy8gbm8ganNvbnAgZnVuY3Rpb25cblxuLy8gbm8gZGVmZXJyZWQgc3RhcnR1cCIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pY29ucy5qc1wiKTtcbiIsImltcG9ydCB7UmVzaXplcn0gZnJvbSAnLi9zcmMvcmVzaXplci5qcyc7XHJcblxyXG5leHBvcnQge1Jlc2l6ZXIgYXMgZGVmYXVsdH07XHJcbi8vd2luZG93LlJlc2l6ZXIgPSBSZXNpemVyO1xyXG4iLCIvKipcclxuICogVmFyaW91cyBpbnRlcmZhY2Ugb3B0aW9ucyB3ZSBjYW4gc2VsZWN0XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBvcHRpb25zLlxyXG4gKiBAcGFyYW0gb3B0aW9ucyBVc2VyIHByb3ZpZGVkIG9wdGlvbnMgdGhhdCBvdmVycmlkZSB0aGUgZGVmYXVsdCB2YWx1ZXMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIE9wdGlvbnMob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgPyBvcHRpb25zIDoge307XHJcblxyXG4gICAgLy8vIE9wdGlvbnM6IHZlcnRpY2FsLCBob3Jpem9udGFsLCBib3RoXHJcbiAgICB0aGlzLnJlc2l6ZSA9ICd2ZXJ0aWNhbCc7XHJcblxyXG4gICAgLy8vIFRoZSByZXNpemluZyBoYW5kbGVcclxuICAgIHRoaXMuaGFuZGxlID0gJ2Jhcic7XHJcblxyXG4gICAgLy8vIFJhbmdlIGZvciBncmFiYmluZ1xyXG4gICAgdGhpcy5ncmFiU2l6ZSA9IDEwO1xyXG5cclxuICAgIC8vLyBNYXhpbXVtIHNwZWVkIHdlIGNhbiByZXNpemUgaW4gcGl4ZWxzIHBlciBzZWNvbmRcclxuICAgIHRoaXMubWF4U3BlZWQgPSAxMDAwO1xyXG5cclxuICAgIC8vLyBVc2UgYSBtYXNrICh1c2VmdWwgZm9yIGlmcmFtZXNcclxuICAgIHRoaXMudXNlTWFzayA9IHRydWU7XHJcblxyXG4gICAgZm9yKHZhciBwcm9wZXJ0eSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbiBcIiArIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IG9wdGlvbnNbcHJvcGVydHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsIlxyXG5leHBvcnQgZnVuY3Rpb24gUmVzaXplckFjdHVhbChlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Jlc2l6ZXInKTtcclxuXHJcbiAgICAvLyBUaW1lb3V0IHBlcmlvZCBmb3IgYW5pbWF0ZWQgcmVzaXppbmdcclxuICAgIGNvbnN0IHRpbWVvdXRQZXJpb2QgPSAyMDtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gSGFuZGxlIG9wdGlvbnNcclxuICAgIC8vXHJcbiAgICBsZXQgZ3JhYlNpemUgPSBvcHRpb25zLmdyYWJTaXplO1xyXG5cclxuICAgIGxldCBoYW5kbGUgPSBvcHRpb25zLmhhbmRsZTtcclxuICAgIGlmKGhhbmRsZSA9PT0gJ2JhcicpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlc2l6ZSA9ICdub25lJztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmJvcmRlckJvdHRvbSA9IGdyYWJTaXplICsgJ3B4IHNvbGlkICMxODQ1M0InO1xyXG4gICAgfSBlbHNlIGlmKGhhbmRsZSA9PT0gJ2hhbmRsZScpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlc2l6ZSA9ICd2ZXJ0aWNhbCc7XHJcbiAgICB9IGVsc2UgaWYoaGFuZGxlID09PSAnbm9uZScpIHtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVzaXplID0gJ25vbmUnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyQm90dG9tID0gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLyBBcmUgbW91c2UgbW92ZSBldmVudCBoYW5kbGVycyBpbnN0YWxsZWQ/XHJcbiAgICBsZXQgaW5zdGFsbGVkTW91c2VMaXN0ZW5lcnMgPSBmYWxzZTtcclxuXHJcbiAgICAvLy8gQXJlIHRvdWNoIG1vdmUgZXZlbnQgaGFuZGxlcnMgaW5zdGFsbGVkP1xyXG4gICAgbGV0IGluc3RhbGxlZFRvdWNoTGlzdGVuZXJzID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IG1hc2sgPSBudWxsO1xyXG5cclxuICAgIC8vLyBHZXQgdGhlIG1pbmltdW0gaGVpZ2h0IGFuZCB3aWR0aCBwcm9wZXJ0aWVzXHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGxldCBoZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgIGxldCB3aWR0aCA9IHJlY3Qud2lkdGg7XHJcblxyXG4gICAgbGV0IG1pbkhlaWdodCA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkubWluSGVpZ2h0O1xyXG4gICAgbWluSGVpZ2h0ID0gbWluSGVpZ2h0LnN1YnN0cigwLCBtaW5IZWlnaHQubGVuZ3RoIC0gMik7XHJcbiAgICBsZXQgbWluV2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLm1pbldpZHRoO1xyXG4gICAgbWluV2lkdGggPSBtaW5XaWR0aC5zdWJzdHIoMCwgbWluV2lkdGgubGVuZ3RoIC0gMik7XHJcblxyXG4gICAgbGV0IHRpbWVyID0gbnVsbDtcclxuXHJcbiAgICBsZXQgdGFyZ2V0V2lkdGggPSBudWxsO1xyXG4gICAgbGV0IHRhcmdldEhlaWdodCA9IG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gSW5zdGFsbCB0aGUgbW91c2UgZG93biBhbmQgdG91Y2ggc3RhcnQgbGlzdGVuZXJzXHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25MaXN0ZW5lcik7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG91Y2hTdGFydExpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgLy8gSW5zdGFsbCB0aGUgY3Vyc29yIGxpc3RlbmVyXHJcbiAgICAgICAgLy8gVGhpcyBzd2FwcyB0aGUgY3Vyc29yIHdoZW4gd2UgaG92ZXIgdGhlIG1vdXNlIG92ZXIgdGhlIGdyYWIgYmFyXHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBjdXJzb3JMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0VGFyZ2V0KHR3LCB0aCkge1xyXG4gICAgICAgIHRhcmdldFdpZHRoID0gdHc7XHJcbiAgICAgICAgdGFyZ2V0SGVpZ2h0ID0gdGg7XHJcblxyXG4gICAgICAgIC8vIElmIGEgdGltZXIgaXMgbm90IGFjdGl2ZSwgY3JlYXRlIG9uZS5cclxuICAgICAgICBpZih0aW1lciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aW1lck1vdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRpbWVyTW92ZXIoKSB7XHJcbiAgICAgICAgdGltZXIgPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBtYXhQaXhlbHMgPSBvcHRpb25zLm1heFNwZWVkICogdGltZW91dFBlcmlvZCAvIDEwMDA7XHJcblxyXG4gICAgICAgIGlmKHRhcmdldEhlaWdodCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SGVpZ2h0ID0gK2hlaWdodDtcclxuICAgICAgICAgICAgbGV0IGRpZmYgPSB0YXJnZXRIZWlnaHQgLSBjdXJyZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgaWYoTWF0aC5hYnMoZGlmZikgPiBtYXhQaXhlbHMpIHtcclxuICAgICAgICAgICAgICAgIGRpZmYgPSBkaWZmIDwgMCA/IC1tYXhQaXhlbHMgOiBtYXhQaXhlbHM7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBjdXJyZW50SGVpZ2h0ICsgZGlmZjtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcnICsgaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vdCByYXRlIGxpbWl0ZWRcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IHRhcmdldEhlaWdodDtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJycgKyBoZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0SGVpZ2h0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGFyZ2V0V2lkdGggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFdpZHRoID0gK3dpZHRoO1xyXG4gICAgICAgICAgICBsZXQgZGlmZiA9IHRhcmdldFdpZHRoIC0gY3VycmVudFdpZHRoO1xyXG5cclxuICAgICAgICAgICAgaWYoTWF0aC5hYnMoZGlmZikgPiBtYXhQaXhlbHMpIHtcclxuICAgICAgICAgICAgICAgIGRpZmYgPSBkaWZmIDwgMCA/IC1tYXhQaXhlbHMgOiBtYXhQaXhlbHM7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IGN1cnJlbnRXaWR0aCArIGRpZmY7XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcnICsgd2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gTm90IHJhdGUgbGltaXRlZFxyXG4gICAgICAgICAgICAgICAgd2lkdGggPSB0YXJnZXRXaWR0aDtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnJyArIHdpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIHRhcmdldFdpZHRoID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGFyZ2V0SGVpZ2h0ICE9PSBudWxsIHx8IHRhcmdldFdpZHRoICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dCh0aW1lck1vdmVyLCB0aW1lb3V0UGVyaW9kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxldCBpbml0aWFsWCwgaW5pdGlhbFk7XHJcbiAgICBsZXQgaW5pdGlhbFdpZHRoLCBpbml0aWFsSGVpZ2h0O1xyXG4gICAgbGV0IGdyYWJUeXBlID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0IHRoZSByZXNpemluZyBvbiBhIG1vdXNlIGRvd24gb3IgdG91Y2hcclxuICAgICAqIEBwYXJhbSB4IE1vdXNlIG9yIHRvdWNoIFggaW4gcGl4ZWxzXHJcbiAgICAgKiBAcGFyYW0geSBNb3VzZSBvciB0b3VjaCBZIGluIHBpeGVsc1xyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBtb3ZlU3RhcnQoeCwgeSkge1xyXG4gICAgICAgIGluaXRpYWxYID0geDtcclxuICAgICAgICBpbml0aWFsWSA9IHk7XHJcbiAgICAgICAgbGV0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHdpZHRoID0gK2VsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgaW5pdGlhbFdpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgaGVpZ2h0ID0gK2VsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGluaXRpYWxIZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGFyZ2V0V2lkdGggPSBudWxsO1xyXG4gICAgICAgIHRhcmdldEhlaWdodCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgYSBtb3VzZSBvciBmaW5nZXIgbW92ZSB0byBhIG5ldyBwb3NpdGlvbixcclxuICAgICAqIHJlc3VsdGluZyBpbiBhIHJlc2l6ZSByZXF1ZXN0LlxyXG4gICAgICogQHBhcmFtIHggTW91c2Ugb3IgdG91Y2ggWCBpbiBwaXhlbHNcclxuICAgICAqIEBwYXJhbSB5IE1vdXNlIG9yIHRvdWNoIFkgaW4gcGl4ZWxzXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIG1vdmVUbyh4LCB5KSB7XHJcbiAgICAgICAgbGV0IGR4ID0geCAtIGluaXRpYWxYO1xyXG4gICAgICAgIGxldCBkeSA9IHkgLSBpbml0aWFsWTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1dpZHRoID0gbnVsbDtcclxuICAgICAgICBsZXQgbmV3SGVpZ2h0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYoZ3JhYlR5cGUgPT09ICdob3Jpem9udGFsJyB8fCBncmFiVHlwZSA9PT0gJ2JvdGgnKSB7XHJcbiAgICAgICAgICAgIC8vIENvbXB1dGUgYSBkZXNpcmVkIG5ldyB3aWR0aFxyXG4gICAgICAgICAgICBuZXdXaWR0aCA9IGluaXRpYWxXaWR0aCArIGR4O1xyXG4gICAgICAgICAgICBpZiAobmV3V2lkdGggPCBtaW5XaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSBtaW5XaWR0aDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGdyYWJUeXBlID09PSAndmVydGljYWwnIHx8IGdyYWJUeXBlID09PSAnYm90aCcpIHtcclxuICAgICAgICAgICAgY29uc3Qgd2FzSGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBDb21wdXRlIGEgZGVzaXJlZCBuZXcgaGVpZ2h0XHJcbiAgICAgICAgICAgIG5ld0hlaWdodCA9IGluaXRpYWxIZWlnaHQgKyBkeTtcclxuICAgICAgICAgICAgaWYgKG5ld0hlaWdodCA8IG1pbkhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gbWluSGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGFyZ2V0KG5ld1dpZHRoLCBuZXdIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBNb3VzZSBIYW5kbGluZ1xyXG4gICAgLy9cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZURvd25MaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGUucGFnZVg7XHJcbiAgICAgICAgY29uc3QgeSA9IGUucGFnZVk7XHJcblxyXG4gICAgICAgIGdyYWJUeXBlID0gb25IYW5kbGUoeCwgeSwgZmFsc2UpO1xyXG4gICAgICAgIGlmKGdyYWJUeXBlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIG1vdmVTdGFydCh4LCB5KTtcclxuXHJcbiAgICAgICAgICAgIGluc3RhbGxNYXNrKCk7XHJcbiAgICAgICAgICAgIGluc3RhbGxNb3VzZUhhbmRsZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlTW92ZUxpc3RlbmVyKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKGUuYnV0dG9ucyAhPT0gMSkge1xyXG4gICAgICAgICAgICByZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbW92ZVRvKGUucGFnZVgsIGUucGFnZVkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlVXBMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgcmVtb3ZlQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1vdXNlSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgcmVtb3ZlSGFuZGxlcnMoKTtcclxuXHJcbiAgICAgICAgaW5zdGFsbGVkTW91c2VMaXN0ZW5lcnMgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUxpc3RlbmVyLCBmYWxzZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBMaXN0ZW5lciwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBUb3VjaCBIYW5kbGluZ1xyXG4gICAgLy9cclxuXHJcbiAgICBmdW5jdGlvbiB0b3VjaFN0YXJ0TGlzdGVuZXIoZSkge1xyXG4gICAgICAgIGNvbnN0IHggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XHJcbiAgICAgICAgY29uc3QgeSA9IGUudG91Y2hlc1swXS5wYWdlWTtcclxuXHJcbiAgICAgICAgZ3JhYlR5cGUgPSBvbkhhbmRsZSh4LCB5LCB0cnVlKTtcclxuICAgICAgICBpZihncmFiVHlwZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBtb3ZlU3RhcnQoeCwgeSk7XHJcblxyXG4gICAgICAgICAgICBpbnN0YWxsTWFzaygpO1xyXG4gICAgICAgICAgICBpbnN0YWxsVG91Y2hIYW5kbGVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b3VjaE1vdmVMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAvL2UucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgeCA9IGUudG91Y2hlc1swXS5wYWdlWDtcclxuICAgICAgICBjb25zdCB5ID0gZS50b3VjaGVzWzBdLnBhZ2VZO1xyXG5cclxuICAgICAgICBtb3ZlVG8oeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG91Y2hFbmRMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgcmVtb3ZlQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5zdGFsbFRvdWNoSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgcmVtb3ZlSGFuZGxlcnMoKTtcclxuXHJcbiAgICAgICAgaW5zdGFsbGVkVG91Y2hMaXN0ZW5lcnMgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hFbmRMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIE1hc2tcclxuICAgIC8vXHJcblxyXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1hc2soKSB7XHJcbiAgICAgICAgaWYoIW9wdGlvbnMudXNlTWFzaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBFbnN1cmUgbm9uZSBjdXJyZW50bHkgZXhpc3RzXHJcbiAgICAgICAgcmVtb3ZlTWFzaygpO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIG1hc2suc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgIG1hc2suc3R5bGUubGVmdCA9IDA7XHJcbiAgICAgICAgbWFzay5zdHlsZS50b3AgPSAwO1xyXG4gICAgICAgIG1hc2suc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICBtYXNrLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICBtYXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgbWFzay5zdHlsZS56SW5kZXggPSAxMDAwMDtcclxuICAgICAgICBtYXNrLnN0eWxlLm9wYWNpdHkgPSAwLjU7XHJcbiAgICAgICAgbWFzay5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcblxyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsKCkge1xyXG4gICAgICAgIGlmKHRpbWVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgICAgIHRpbWVyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbW92ZUhhbmRsZXJzKCk7XHJcbiAgICAgICAgcmVtb3ZlTWFzaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUhhbmRsZXJzKCkge1xyXG4gICAgICAgIGlmKGluc3RhbGxlZE1vdXNlTGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGluc3RhbGxlZE1vdXNlTGlzdGVuZXJzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpbnN0YWxsZWRUb3VjaExpc3RlbmVycykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaE1vdmVMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hFbmRMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hFbmRMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGluc3RhbGxlZFRvdWNoTGlzdGVuZXJzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZU1hc2soKSB7XHJcbiAgICAgICAgaWYobWFzayAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1hc2spO1xyXG4gICAgICAgICAgICBtYXNrID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgYW4geCx5IGxvY2F0aW9uIGlzIG92ZXIgYSBoYW5kbGUgZm9yIG1hbmlwdWxhdGluZ1xyXG4gICAgICogdGhlIHJlc2l6ZWFibGUgb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHggbG9jYXRpb24gaW4gcGl4ZWxzXHJcbiAgICAgKiBAcGFyYW0geSBsb2NhdGlvbiBpbiBwaXhlbHNcclxuICAgICAqIEByZXR1cm5zIHN0cmluZ3xudWxsIGlmIG5vdCwgJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnYm90aCcgaWYgb3ZlciBoYW5kbGUgYW5kIG1vZGUgYXZhaWxhYmxlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBvbkhhbmRsZSh4LCB5LCB0b3VjaCkge1xyXG4gICAgICAgIGxldCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2xvcCA9IHRvdWNoID8gMTAgOiAwO1xyXG5cclxuICAgICAgICBsZXQgYm90dG9tID0gcmVjdC5ib3R0b20gKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgbGV0IHZlcnQgPSB5ID49IGJvdHRvbSAtIGdyYWJTaXplIC0gc2xvcDtcclxuXHJcbiAgICAgICAgbGV0IHJpZ2h0ID0gcmVjdC5yaWdodCArIHdpbmRvdy5wYWdlWE9mZnNldDtcclxuICAgICAgICBsZXQgaG9yeiA9IHggPj0gcmlnaHQgLSBncmFiU2l6ZSAtIHNsb3A7XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnMucmVzaXplID09PSAnYm90aCcpIHtcclxuICAgICAgICAgICAgaWYodmVydCAmJiBob3J6KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2JvdGgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHZlcnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAndmVydGljYWwnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihob3J6KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hvcml6b250YWwnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZigob3B0aW9ucy5yZXNpemUgPT09ICdib3RoJyB8fCBvcHRpb25zLnJlc2l6ZSA9PT0gJ3ZlcnRpY2FsJykgJiYgdmVydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKChvcHRpb25zLnJlc2l6ZSA9PT0gJ2JvdGgnIHx8IG9wdGlvbnMucmVzaXplID09PSAnaG9yaXpvbnRhbCcpICYmIGhvcnopIHtcclxuICAgICAgICAgICAgcmV0dXJuICdob3Jpem9udGFsJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgbGV0IGN1cnNvciA9IDA7XHJcblxyXG4gICAgZnVuY3Rpb24gY3Vyc29yTGlzdGVuZXIoZXZlbnQpIHtcclxuICAgICAgICAvLyBTd2FwIHRoZSBjdXJzb3Igd2hlbiB3ZSBhcmUgb3ZlciB0aGUgaGFuZGxlXHJcbiAgICAgICAgaWYgKG9uSGFuZGxlKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSwgZmFsc2UpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJzb3IgIT09IDIpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yID0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJzb3IgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ3RleHQnO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBWZXJ0aWNhbCByZXNpemUgc3VwcG9ydCBmb3IgZGl2LCB0ZXh0YXJlYSwgaWZyYW1lLCBldGMuXHJcbiAqXHJcbiAqIEEgcHJvYmxlbSB3aXRoIHRoZSByZXNpemUgZmVhdHVyZSBvZiB0ZXh0YXJlYSBhbmQgaWZyYW1lIGlzIHRoYXQgaXQgZG9lcyBub3Qgd29yayBpbiBhbGxcclxuICogYnJvd3NlcnMgKGVzcGVjaWFsbHkgRWRnZSkgYW5kIGlzIG9mdGVuIHF1aXRlIHF1aXJreS4gVGhpcyBzbWFsbCBwYWNrYWdlIGFsbG93cyB5b3UgdG9cclxuICogYWRkIHZlcnRpY2FsIHJlc2l6ZSBhYmlsaXR5IHRvIGp1c3QgYWJvdXQgYW55dGhpbmcuXHJcbiAqXHJcbiAqIEB2ZXJzaW9uIDIuNC4wIEFkZGVkIHRvdWNoIHN1cHBvcnQuIExpbWl0ZWQgc3BlZWQgb2YgcmVzaXppbmcgdG8gYXZvaWQgaXNzdWUgd2hlbiBzY3JvbGxpbmcuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtSZXNpemVyQWN0dWFsfSBmcm9tICcuL3Jlc2l6ZXItYWN0dWFsJztcclxuaW1wb3J0IHtPcHRpb25zfSBmcm9tICcuL09wdGlvbnMnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDb25zdHJ1Y3RvciBmb3IgYSBSZXNpemVyIG9iamVjdFxyXG4gKiBAcGFyYW0gc2VsIFNlbGVjdG9yIG9yIERPTSBlbGVtZW50XHJcbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgb2JqZWN0LlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBSZXNpemVyID0gZnVuY3Rpb24oc2VsLCBvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gbmV3IE9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG4gICAgaWYodHlwZW9mIHNlbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBuZXcgUmVzaXplckFjdHVhbChlbGVtZW50c1tpXSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmKHNlbC5ub2RlVHlwZSkge1xyXG4gICAgICAgIG5ldyBSZXNpemVyQWN0dWFsKHNlbCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2l6ZXI7XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmRpYWxvZy1jbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDQ0NDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgbWluLXdpZHRoOiAxNTBweDtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtaW4taGVpZ2h0OiAxNTBweDtcXG4gIG1heC1oZWlnaHQ6IDYwMHB4OyB9XFxuXFxuZGl2LmNsLWRpYWxvZy1ib3R0b20ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZsZXg6IDAgMCA0NHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2NjYztcXG4gIGN1cnNvcjogZGVmYXVsdDsgfVxcblxcbmRpdi5kaWFsb2ctY2wtYm9keSB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHBhZGRpbmc6IDAuNWVtOyB9XFxuICBkaXYuZGlhbG9nLWNsLWJvZHkgcDpmaXJzdC1jaGlsZCwgZGl2LmRpYWxvZy1jbC1ib2R5IGgxOmZpcnN0LWNoaWxkLCBkaXYuZGlhbG9nLWNsLWJvZHkgaDI6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAwOyB9XFxuICBkaXYuZGlhbG9nLWNsLWJvZHkgcDpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbmRpdi5jbC1kaWFsb2ctYm90dG9tIGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtaW4td2lkdGg6IDdlbTtcXG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMDtcXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAtMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjNDQ0O1xcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxcblxcbmRpdi5jbC1kaWFsb2ctYm90dG9tIGJ1dHRvbjphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuXFxuZGl2LmNsLWRpYWxvZy1ib3R0b20gYnV0dG9uOmRpc2FibGVkLFxcbmRpdi5jbC1kaWFsb2ctYm90dG9tIGJ1dHRvbltkaXNhYmxlZF0ge1xcbiAgY29sb3I6ICNjY2M7IH1cXG5cXG5kaXYuZGlhbG9nLWNsLXRvcCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmbGV4OiAwIDAgMjVweDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiBub3dyYXA7IH1cXG4gIGRpdi5kaWFsb2ctY2wtdG9wIGgxIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDRweCA0cHggMCAxMHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMTZweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gIGRpdi5kaWFsb2ctY2wtdG9wIGJ1dHRvbi5kaWFsb2ctY2wtdGItYnV0dG9uIHtcXG4gICAgZmxleDogMCAwIDI1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIGRpdi5kaWFsb2ctY2wtdG9wIGJ1dHRvbi5kaWFsb2ctY2wtdGItYnV0dG9uIHNwYW4ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiA0cHg7XFxuICAgICAgdG9wOiA0cHg7IH1cXG4gIGRpdi5kaWFsb2ctY2wtdG9wIC5kaWFsb2ctY2wtdGItYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4MTEyMztcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuZGl2LmRpYWxvZy1jbCBkaXYubWVzc2FnZS1jbCB7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIHBhZGRpbmc6IDFlbTsgfVxcblxcbmRpdi5kaWFsb2ctY2wtY29sdW1uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgZGl2LmRpYWxvZy1jbC1jb2x1bW4gPiBkaXYge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDEuNWVtIDAgMi4wZW0gMDsgfVxcbiAgZGl2LmRpYWxvZy1jbC1jb2x1bW4gc2VsZWN0IHtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zYXNzL3BhcnRpYWxzL19kaWFsb2cuc2Nzc1wiLFwid2VicGFjazovLy4vc2Fzcy9wYXJ0aWFscy9fYm90dG9tLnNjc3NcIixcIndlYnBhY2s6Ly8uL3Nhc3MvcGFydGlhbHMvX2JvZHkuc2Nzc1wiLFwid2VicGFjazovLy4vc2Fzcy9wYXJ0aWFscy9fYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zYXNzL3BhcnRpYWxzL190aXRsZWJhci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zYXNzL3BhcnRpYWxzL19tZXNzYWdlYm94LnNjc3NcIixcIndlYnBhY2s6Ly8uL3Nhc3MvcGFydGlhbHMvX2NvbHVtbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixNQUFNO0VBRU4sWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUNuQnJCO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGVBQWUsRUFBQTs7QUNSakI7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7RUFKaEI7SUFPSSxhQUFhLEVBQUE7RUFQakI7SUFXSSxnQkFBZ0IsRUFBQTs7QUNUcEI7RUFFSSxxQkFBcUI7RUFDckIsY0FMYztFQU1kLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsa0RBQWtEO0VBQ2xELGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix3RkFBZ0Y7RUFDaEYsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBZnBCO0VBbUJJLHVGQUErRSxFQUFBOztBQW5CbkY7O0VBd0JJLFdBQVcsRUFBQTs7QUMxQmY7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0FBYztFQUNkLGVBQWU7RUFFZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBO0VBVm5CO0lBYUksWUFBWTtJQUVaLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsa0RBQWtEO0lBQ2xELGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUE7RUFwQnJCO0lBeUJJLGNBQWM7SUFFZCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGFBQWEsRUFBQTtJQW5DakI7TUFzQ00sa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxRQUFRLEVBQUE7RUF4Q2Q7SUE2Q0kseUJBQXlCO0lBQ3pCLGVBQWUsRUFBQTs7QUM5Q25CO0VBRUksaUJBQWlCO0VBRWpCLFlBQVksRUFBQTs7QUNBaEI7RUFDRSxrQkFBa0IsRUFBQTtFQURwQjtJQUlJLHFCQUFxQjtJQUNyQix3QkFBd0IsRUFBQTtFQUw1QjtJQVNJLFdBQVcsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJkaXYuZGlhbG9nLWNsIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDQ0NDQ0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gICAgbWluLXdpZHRoOiAxNTBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgbWF4LWhlaWdodDogNjAwcHg7XFxyXFxufVxcclxcblxcclxcblwiLFwiZGl2LmNsLWRpYWxvZy1ib3R0b20ge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZsZXg6IDAgMCA0NHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2NjYztcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXCIsXCJkaXYuZGlhbG9nLWNsLWJvZHkge1xcclxcbiAgZmxleDogMCAxIGF1dG87XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG5cXHJcXG4gIHA6Zmlyc3QtY2hpbGQsIGgxOmZpcnN0LWNoaWxkLCBoMjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBwOmxhc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIixcIiRidXR0b24td2lkdGg6IDdlbTtcXHJcXG5cXHJcXG5kaXYuY2wtZGlhbG9nLWJvdHRvbSB7XFxyXFxuICBidXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIG1pbi13aWR0aDogJGJ1dHRvbi13aWR0aDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwO1xcclxcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDFweCByZ2JhKDAsMCwwLC4xKSwgaW5zZXQgMCAtMTBweCAyMHB4IHJnYmEoMCwwLDAsLjEpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICM0NDQ7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBidXR0b246YWN0aXZlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMXB4IHJnYmEoMCwwLDAsLjEpLCBpbnNldCAwIDEwcHggMjBweCByZ2JhKDAsMCwwLC4xKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGJ1dHRvbjpkaXNhYmxlZCxcXHJcXG4gIGJ1dHRvbltkaXNhYmxlZF0ge1xcclxcbiAgICBjb2xvcjogI2NjYztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsXCJkaXYuZGlhbG9nLWNsLXRvcCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmbGV4OiAwIDAgMjVweDtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuXFxyXFxuICBoMSB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiA0cHggNHB4IDAgMTBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gVGl0bGUgYmFyIGJ1dHRvbnNcXHJcXG4gIGJ1dHRvbi5kaWFsb2ctY2wtdGItYnV0dG9uIHtcXHJcXG4gICAgZmxleDogMCAwIDI1cHg7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcblxcclxcbiAgICBzcGFuIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgbGVmdDogNHB4O1xcclxcbiAgICAgIHRvcDogNHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGlhbG9nLWNsLXRiLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlODExMjM7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXCIsXCJkaXYuZGlhbG9nLWNsIHtcXHJcXG4gIGRpdi5tZXNzYWdlLWNsIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gIH1cXHJcXG59XCIsXCIvL1xcclxcbi8vIFN0YW5kYXJkIGRpYWxvZyBib3ggc3R5bGU6IHNpbmdsZSBjb2x1bW4gb2YgY29udHJvbHNcXHJcXG4vL1xcclxcblxcclxcbmRpdi5kaWFsb2ctY2wtY29sdW1uIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gID5kaXYge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDEuNWVtIDAgMi4wZW0gMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNlbGVjdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzNdIS4vX2RpYWxvZy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVszXSEuL19kaWFsb2cuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscywgdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0dmFyIGV4ZWNPcHRpb25zID0geyBpZDogbW9kdWxlSWQsIG1vZHVsZTogbW9kdWxlLCBmYWN0b3J5OiBfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSwgcmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7IGhhbmRsZXIoZXhlY09wdGlvbnMpOyB9KTtcblx0bW9kdWxlID0gZXhlY09wdGlvbnMubW9kdWxlO1xuXHRleGVjT3B0aW9ucy5mYWN0b3J5LmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGV4ZWNPcHRpb25zLnJlcXVpcmUpO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbl9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgZXhlY3V0aW9uIGludGVyY2VwdG9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBbXTtcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5hbWRPID0ge307IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmh1ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1yRiA9ICgpID0+IChcIkRpYWxvZy5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc29uXCIpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNhZGRhMjk0YjIyMTIxNDZlMGY3XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZSA9IE9iamVjdC5jcmVhdGUobW9kdWxlKTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHNldDogKCkgPT4ge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFUyBNb2R1bGVzIG1heSBub3QgYXNzaWduIG1vZHVsZS5leHBvcnRzIG9yIGV4cG9ydHMuKiwgVXNlIEVTTSBleHBvcnQgc3ludGF4LCBpbnN0ZWFkOiAnICsgbW9kdWxlLmlkKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwiRGlhbG9nOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIGN1cnJlbnRNb2R1bGVEYXRhID0ge307XG52YXIgaW5zdGFsbGVkTW9kdWxlcyA9IF9fd2VicGFja19yZXF1aXJlX18uYztcblxuLy8gbW9kdWxlIGFuZCByZXF1aXJlIGNyZWF0aW9uXG52YXIgY3VycmVudENoaWxkTW9kdWxlO1xudmFyIGN1cnJlbnRQYXJlbnRzID0gW107XG5cbi8vIHN0YXR1c1xudmFyIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycyA9IFtdO1xudmFyIGN1cnJlbnRTdGF0dXMgPSBcImlkbGVcIjtcblxuLy8gd2hpbGUgZG93bmxvYWRpbmdcbnZhciBibG9ja2luZ1Byb21pc2VzO1xuXG4vLyBUaGUgdXBkYXRlIGluZm9cbnZhciBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycztcbnZhciBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJEID0gY3VycmVudE1vZHVsZURhdGE7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaS5wdXNoKGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdHZhciBtb2R1bGUgPSBvcHRpb25zLm1vZHVsZTtcblx0dmFyIHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKG9wdGlvbnMucmVxdWlyZSwgb3B0aW9ucy5pZCk7XG5cdG1vZHVsZS5ob3QgPSBjcmVhdGVNb2R1bGVIb3RPYmplY3Qob3B0aW9ucy5pZCwgbW9kdWxlKTtcblx0bW9kdWxlLnBhcmVudHMgPSBjdXJyZW50UGFyZW50cztcblx0bW9kdWxlLmNoaWxkcmVuID0gW107XG5cdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdG9wdGlvbnMucmVxdWlyZSA9IHJlcXVpcmU7XG59KTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkgPSB7fTtcblxuZnVuY3Rpb24gY3JlYXRlUmVxdWlyZShyZXF1aXJlLCBtb2R1bGVJZCkge1xuXHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblx0aWYgKCFtZSkgcmV0dXJuIHJlcXVpcmU7XG5cdHZhciBmbiA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG5cdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcblx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRzID0gaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzO1xuXHRcdFx0XHRpZiAocGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRwYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG5cdFx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG5cdFx0XHR9XG5cdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcblx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG5cdFx0XHRcdFx0cmVxdWVzdCArXG5cdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcblx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0KTtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdFx0fVxuXHRcdHJldHVybiByZXF1aXJlKHJlcXVlc3QpO1xuXHR9O1xuXHR2YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gcmVxdWlyZVtuYW1lXTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXF1aXJlW25hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblx0Zm9yICh2YXIgbmFtZSBpbiByZXF1aXJlKSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXF1aXJlLCBuYW1lKSAmJiBuYW1lICE9PSBcImVcIikge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSkpO1xuXHRcdH1cblx0fVxuXHRmbi5lID0gZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRyZXR1cm4gdHJhY2tCbG9ja2luZ1Byb21pc2UocmVxdWlyZS5lKGNodW5rSWQpKTtcblx0fTtcblx0cmV0dXJuIGZuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2R1bGVIb3RPYmplY3QobW9kdWxlSWQsIG1lKSB7XG5cdHZhciBob3QgPSB7XG5cdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuXHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG5cdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcblx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcblx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcblx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcblx0XHRfbWFpbjogY3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblx0XHRfcmVxdWlyZVNlbGY6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gbWUucGFyZW50cy5zbGljZSgpO1xuXHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gbW9kdWxlSWQ7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcblx0XHR9LFxuXG5cdFx0Ly8gTW9kdWxlIEFQSVxuXHRcdGFjdGl2ZTogdHJ1ZSxcblx0XHRhY2NlcHQ6IGZ1bmN0aW9uIChkZXAsIGNhbGxiYWNrKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdH0sXG5cdFx0ZGVjbGluZTogZnVuY3Rpb24gKGRlcCkge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcblx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuXHRcdFx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuXHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcblx0XHRcdFx0XHQocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKFxuXHRcdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gTWFuYWdlbWVudCBBUElcblx0XHRjaGVjazogaG90Q2hlY2ssXG5cdFx0YXBwbHk6IGhvdEFwcGx5LFxuXHRcdHN0YXR1czogZnVuY3Rpb24gKGwpIHtcblx0XHRcdGlmICghbCkgcmV0dXJuIGN1cnJlbnRTdGF0dXM7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHR2YXIgaWR4ID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG5cdFx0XHRpZiAoaWR4ID49IDApIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXG5cdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG5cdFx0ZGF0YTogY3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG5cdH07XG5cdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcblx0cmV0dXJuIGhvdDtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdHVzKG5ld1N0YXR1cykge1xuXHRjdXJyZW50U3RhdHVzID0gbmV3U3RhdHVzO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcblx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xufVxuXG5mdW5jdGlvbiB0cmFja0Jsb2NraW5nUHJvbWlzZShwcm9taXNlKSB7XG5cdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0c2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcblx0XHRcdGJsb2NraW5nUHJvbWlzZXMucHVzaChwcm9taXNlKTtcblx0XHRcdHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRibG9ja2luZ1Byb21pc2VzLnB1c2gocHJvbWlzZSk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pIHtcblx0aWYgKGJsb2NraW5nUHJvbWlzZXMubGVuZ3RoID09PSAwKSByZXR1cm4gZm4oKTtcblx0dmFyIGJsb2NrZXIgPSBibG9ja2luZ1Byb21pc2VzO1xuXHRibG9ja2luZ1Byb21pc2VzID0gW107XG5cdHJldHVybiBQcm9taXNlLmFsbChibG9ja2VyKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaG90Q2hlY2soYXBwbHlPblVwZGF0ZSkge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcblx0fVxuXHRzZXRTdGF0dXMoXCJjaGVja1wiKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uaG1yTSgpLnRoZW4oZnVuY3Rpb24gKHVwZGF0ZSkge1xuXHRcdGlmICghdXBkYXRlKSB7XG5cdFx0XHRzZXRTdGF0dXMoYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHNldFN0YXR1cyhcInByZXBhcmVcIik7XG5cblx0XHR2YXIgdXBkYXRlZE1vZHVsZXMgPSBbXTtcblx0XHRibG9ja2luZ1Byb21pc2VzID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblxuXHRcdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1yQykucmVkdWNlKGZ1bmN0aW9uIChcblx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdGtleVxuXHRcdFx0KSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yQ1trZXldKFxuXHRcdFx0XHRcdHVwZGF0ZS5jLFxuXHRcdFx0XHRcdHVwZGF0ZS5yLFxuXHRcdFx0XHRcdHVwZGF0ZS5tLFxuXHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLFxuXHRcdFx0XHRcdHVwZGF0ZWRNb2R1bGVzXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiBwcm9taXNlcztcblx0XHRcdH0sXG5cdFx0XHRbXSlcblx0XHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKGFwcGx5T25VcGRhdGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShhcHBseU9uVXBkYXRlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblxuXHRcdFx0XHRcdHJldHVybiB1cGRhdGVkTW9kdWxlcztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcInJlYWR5XCIpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG5cdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG5cdH0pO1xuXHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcblxuXHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuXHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcblx0XHRcdHJldHVybiByLmVycm9yO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0XHRzZXRTdGF0dXMoXCJhYm9ydFwiKTtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcnNbMF07XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcblx0c2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcblxuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcblx0fSk7XG5cblx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuXHRzZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuXHR2YXIgZXJyb3I7XG5cdHZhciByZXBvcnRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcblx0fTtcblxuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5hcHBseSkge1xuXHRcdFx0dmFyIG1vZHVsZXMgPSByZXN1bHQuYXBwbHkocmVwb3J0RXJyb3IpO1xuXHRcdFx0aWYgKG1vZHVsZXMpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gobW9kdWxlc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG5cdGlmIChlcnJvcikge1xuXHRcdHNldFN0YXR1cyhcImZhaWxcIik7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fSk7XG5cdH1cblxuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuXHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0fSk7XG5cdH1cblxuXHRzZXRTdGF0dXMoXCJpZGxlXCIpO1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycykgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiRGlhbG9nXCI6IDBcbn07XG5cblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbnZhciBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0O1xudmFyIHdhaXRpbmdVcGRhdGVSZXNvbHZlcyA9IHt9O1xuZnVuY3Rpb24gbG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSByZXNvbHZlO1xuXHRcdC8vIHN0YXJ0IHVwZGF0ZSBjaHVuayBsb2FkaW5nXG5cdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaHUoY2h1bmtJZCk7XG5cdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWRcblx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGhvdCB1cGRhdGUgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQpO1xuXHR9KTtcbn1cblxuc2VsZltcIndlYnBhY2tIb3RVcGRhdGVEaWFsb2dcIl0gPSAoY2h1bmtJZCwgbW9yZU1vZHVsZXMsIHJ1bnRpbWUpID0+IHtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdGlmKGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QpIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIGN1cnJlbnRVcGRhdGVSdW50aW1lLnB1c2gocnVudGltZSk7XG5cdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSgpO1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0fVxufTtcblxudmFyIGN1cnJlbnRVcGRhdGVDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZTtcbnZhciBjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcztcbnZhciBjdXJyZW50VXBkYXRlUnVudGltZTtcbmZ1bmN0aW9uIGFwcGx5SGFuZGxlcihvcHRpb25zKSB7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXI7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB1bmRlZmluZWQ7XG5cdGZ1bmN0aW9uIGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyh1cGRhdGVNb2R1bGVJZCkge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG5cdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoYWluOiBbaWRdLFxuXHRcdFx0XHRpZDogaWRcblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcblx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcblx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhbW9kdWxlIHx8XG5cdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcblx0XHRcdClcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW3BhcmVudElkXTtcblx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcblx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuXHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG5cdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG5cdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0aWQ6IHBhcmVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG5cdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG5cdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcblx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGJbaV07XG5cdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG5cdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cblx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuXHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKG1vZHVsZSkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgbW9kdWxlLmlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG5cdFx0KTtcblx0fTtcblxuXHRmb3IgKHZhciBtb2R1bGVJZCBpbiBjdXJyZW50VXBkYXRlKSB7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRcdHZhciBuZXdNb2R1bGVGYWN0b3J5ID0gY3VycmVudFVwZGF0ZVttb2R1bGVJZF07XG5cdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG5cdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0aWYgKG5ld01vZHVsZUZhY3RvcnkpIHtcblx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKG1vZHVsZUlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdCA9IHtcblx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuXHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcblx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG5cdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcblx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcblx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuXHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRlcnJvcjogYWJvcnRFcnJvclxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvQXBwbHkpIHtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBuZXdNb2R1bGVGYWN0b3J5O1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuXHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcblx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y3VycmVudFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuXHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG5cdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcblx0Zm9yICh2YXIgaiA9IDA7IGogPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBqKyspIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tqXTtcblx0XHRpZiAoXG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF0gJiZcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZCAmJlxuXHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuXHRcdFx0YXBwbGllZFVwZGF0ZVtvdXRkYXRlZE1vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG5cdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuXHRcdFx0IV9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuXHRcdCkge1xuXHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuXHRcdFx0XHRtb2R1bGU6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdHJlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXS5ob3QuX3JlcXVpcmVTZWxmLFxuXHRcdFx0XHRlcnJvckhhbmRsZXI6IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuXG5cdHJldHVybiB7XG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0fSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHVuZGVmaW5lZDtcblxuXHRcdFx0dmFyIGlkeDtcblx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG5cdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cblx0XHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuXHRcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcblx0XHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGRpc3Bvc2VIYW5kbGVyc1tqXS5jYWxsKG51bGwsIGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yRFttb2R1bGVJZF0gPSBkYXRhO1xuXG5cdFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG5cdFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG5cdFx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZS5jaGlsZHJlbltqXV07XG5cdFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG5cdFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcblx0XHRcdFx0XHRpZiAoaWR4ID49IDApIHtcblx0XHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG5cdFx0XHR2YXIgZGVwZW5kZW5jeTtcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGFwcGx5OiBmdW5jdGlvbiAocmVwb3J0RXJyb3IpIHtcblx0XHRcdC8vIGluc2VydCBuZXcgY29kZVxuXHRcdFx0Zm9yICh2YXIgdXBkYXRlTW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGFwcGxpZWRVcGRhdGUsIHVwZGF0ZU1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVt1cGRhdGVNb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBydW4gbmV3IHJ1bnRpbWUgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50VXBkYXRlUnVudGltZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlUnVudGltZVtpXShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdHZhciBhY2NlcHRDYWxsYmFjayA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdGlmIChhY2NlcHRDYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihhY2NlcHRDYWxsYmFjaykgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChhY2NlcHRDYWxsYmFjayk7XG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzLnB1c2goZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgY2FsbGJhY2tzLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzW2tdLmNhbGwobnVsbCwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIG8gPSAwOyBvIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgbysrKSB7XG5cdFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW29dO1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpdGVtLnJlcXVpcmUobW9kdWxlSWQpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fVxuXHR9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJLmpzb25wID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBhcHBseUhhbmRsZXJzKSB7XG5cdGlmICghY3VycmVudFVwZGF0ZSkge1xuXHRcdGN1cnJlbnRVcGRhdGUgPSB7fTtcblx0XHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gW107XG5cdFx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdH1cblx0aWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdO1xuXHR9XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLmpzb25wID0gZnVuY3Rpb24gKFxuXHRjaHVua0lkcyxcblx0cmVtb3ZlZENodW5rcyxcblx0cmVtb3ZlZE1vZHVsZXMsXG5cdHByb21pc2VzLFxuXHRhcHBseUhhbmRsZXJzLFxuXHR1cGRhdGVkTW9kdWxlc0xpc3Rcbikge1xuXHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHt9O1xuXHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHJlbW92ZWRDaHVua3M7XG5cdGN1cnJlbnRVcGRhdGUgPSByZW1vdmVkTW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG5cdFx0b2JqW2tleV0gPSBmYWxzZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9LCB7fSk7XG5cdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdGNodW5rSWRzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRpZiAoXG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHQpIHtcblx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkpO1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0fVxuXHR9KTtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtciA9IGZ1bmN0aW9uIChjaHVua0lkLCBwcm9taXNlcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzICYmXG5cdFx0XHRcdCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZUNodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHRcdCkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSk7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yTSA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBmZXRjaCA9PT0gXCJ1bmRlZmluZWRcIikgdGhyb3cgbmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0OiBuZWVkIGZldGNoIEFQSVwiKTtcblx0cmV0dXJuIGZldGNoKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaG1yRigpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSByZXR1cm47IC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcblx0XHRpZighcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1cGRhdGUgbWFuaWZlc3QgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KTtcbn07XG5cbi8vIG5vIGRlZmVycmVkIHN0YXJ0dXBcblxuLy8gbm8ganNvbnAgZnVuY3Rpb25cblxuLy8gbm8gZGVmZXJyZWQgc3RhcnR1cCIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==