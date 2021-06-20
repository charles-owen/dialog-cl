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
/* harmony import */ var icons_cl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons-cl */ "../../.yarn/cache/icons-cl-npm-1.1.3-426eaac07d-7b0c456a81.zip/node_modules/icons-cl/dist/icons.js");
/* harmony import */ var icons_cl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_cl__WEBPACK_IMPORTED_MODULE_4__);





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
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../.yarn/cache/@babel-runtime-npm-7.14.6-3272013297-dd931f6ef1.zip/node_modules/@babel/runtime/helpers/esm/typeof.js");


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
  return typeof val === 'string' || !!val && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(val) === 'object' && Object.prototype.toString.call(val) === '[object String]';
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
/* harmony import */ var resizer_cl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! resizer-cl */ "../../.yarn/cache/resizer-cl-npm-2.4.3-b618b20eb7-cacb0c49e5.zip/node_modules/resizer-cl/index.js");







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

/***/ "../../.yarn/$$virtual/css-loader-virtual-bf014a1251/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/cjs.js!../../.yarn/$$virtual/resolve-url-loader-virtual-0423a67b12/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-04e9f91dc8.zip/node_modules/resolve-url-loader/index.js!../../.yarn/$$virtual/sass-loader-virtual-da70689b4f/0/cache/sass-loader-npm-12.1.0-6188089e12-75f523e64c.zip/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/_dialog.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/$$virtual/css-loader-virtual-bf014a1251/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/cjs.js!../../.yarn/$$virtual/resolve-url-loader-virtual-0423a67b12/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-04e9f91dc8.zip/node_modules/resolve-url-loader/index.js!../../.yarn/$$virtual/sass-loader-virtual-da70689b4f/0/cache/sass-loader-npm-12.1.0-6188089e12-75f523e64c.zip/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/_dialog.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_bf014a1251_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../.yarn/$$virtual/css-loader-virtual-bf014a1251/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../.yarn/$$virtual/css-loader-virtual-bf014a1251/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_bf014a1251_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_css_loader_virtual_bf014a1251_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_bf014a1251_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../.yarn/$$virtual/css-loader-virtual-bf014a1251/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/runtime/api.js */ "../../.yarn/$$virtual/css-loader-virtual-bf014a1251/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_bf014a1251_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_css_loader_virtual_bf014a1251_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _yarn_$$virtual_css_loader_virtual_bf014a1251_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_yarn_$$virtual_css_loader_virtual_bf014a1251_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div.dialog-cl {\n  box-sizing: border-box;\n  position: fixed;\n  border: 1px solid #444444;\n  background-color: white;\n  background-image: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  cursor: default;\n  top: 0;\n  width: 350px;\n  min-width: 150px;\n  max-width: 500px;\n  height: auto;\n  min-height: 150px;\n  max-height: 600px;\n}\n\ndiv.cl-dialog-bottom {\n  box-sizing: border-box;\n  flex: 0 0 44px;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  text-align: right;\n  border-top: 1px solid #cccccc;\n  cursor: default;\n}\n\ndiv.dialog-cl-body {\n  flex: 0 1 auto;\n  width: 100%;\n  overflow-y: auto;\n  padding: 0.5em;\n}\ndiv.dialog-cl-body p:first-child, div.dialog-cl-body h1:first-child, div.dialog-cl-body h2:first-child {\n  margin-top: 0;\n}\ndiv.dialog-cl-body p:last-child {\n  margin-bottom: 0;\n}\n\ndiv.cl-dialog-bottom button {\n  display: inline-block;\n  min-width: 7em;\n  margin: 10px 10px 10px 0;\n  padding: 3px 10px;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  font-size: 0.8em;\n  font-weight: bold;\n  border: 1px solid #999;\n  border-radius: 1px;\n  box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.1), inset 0 -10px 20px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  text-align: center;\n  color: #444;\n  background: #fff;\n}\ndiv.cl-dialog-bottom button:active {\n  box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.1), inset 0 10px 20px rgba(0, 0, 0, 0.1);\n}\ndiv.cl-dialog-bottom button:disabled,\ndiv.cl-dialog-bottom button[disabled] {\n  color: #ccc;\n}\n\ndiv.dialog-cl-top {\n  box-sizing: border-box;\n  background-color: #009688;\n  margin: 0;\n  padding: 0;\n  flex: 0 0 25px;\n  cursor: default;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\ndiv.dialog-cl-top h1 {\n  flex-grow: 1;\n  margin: 0;\n  padding: 4px 4px 0 10px;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  font-size: 16px;\n  line-height: 16px;\n  user-select: none;\n}\ndiv.dialog-cl-top button.dialog-cl-tb-button {\n  flex: 0 0 25px;\n  position: relative;\n  box-sizing: border-box;\n  height: 25px;\n  width: 25px;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  outline: none;\n}\ndiv.dialog-cl-top button.dialog-cl-tb-button span {\n  position: absolute;\n  left: 4px;\n  top: 4px;\n}\ndiv.dialog-cl-top .dialog-cl-tb-button:hover {\n  background-color: #e81123;\n  cursor: pointer;\n}\n\ndiv.dialog-cl div.message-cl {\n  font-size: 1.25em;\n  padding: 1em;\n}\n\ndiv.dialog-cl-column {\n  text-align: center;\n}\ndiv.dialog-cl-column > div {\n  display: inline-block;\n  padding: 1.5em 0 2em 0;\n}\ndiv.dialog-cl-column select {\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/sass/partials/_dialog.scss","webpack://./src/_dialog.scss","webpack://./src/sass/partials/_bottom.scss","webpack://./src/sass/partials/_body.scss","webpack://./src/sass/partials/_buttons.scss","webpack://./src/sass/partials/_titlebar.scss","webpack://./src/sass/partials/_messagebox.scss","webpack://./src/sass/partials/_column.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;EACA,eAAA;EACA,yBAAA;EACA,uBAAA;EACA,sBAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,eAAA;EACA,MAAA;EAEA,YAAA;EACA,gBAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,iBAAA;ACAJ;;ACnBA;EACE,sBAAA;EACA,cAAA;EACA,WAAA;EACA,SAAA;EACA,UAAA;EACA,iBAAA;EACA,6BAAA;EACA,eAAA;ADsBF;;AE9BA;EACE,cAAA;EACA,WAAA;EACA,gBAAA;EACA,cAAA;AFiCF;AE/BE;EACE,aAAA;AFiCJ;AE9BE;EACE,gBAAA;AFgCJ;;AGxCE;EACE,qBAAA;EACA,cALW;EAMX,wBAAA;EACA,iBAAA;EACA,kDAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;EACA,wFAAA;EACA,eAAA;EACA,kBAAA;EACA,WAAA;EACA,gBAAA;AH2CJ;AGxCE;EACE,uFAAA;AH0CJ;AGvCE;;EAEE,WAAA;AHyCJ;;AInEA;EACE,sBAAA;EACA,yBAAA;EACA,SAAA;EACA,UAAA;EACA,cAAA;EACA,eAAA;EAEA,aAAA;EACA,mBAAA;EACA,iBAAA;AJqEF;AInEE;EACE,YAAA;EAEA,SAAA;EACA,uBAAA;EACA,kDAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;AJoEJ;AIhEE;EACE,cAAA;EAEA,kBAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,UAAA;EACA,SAAA;EACA,uBAAA;EACA,aAAA;AJiEJ;AI/DI;EACE,kBAAA;EACA,SAAA;EACA,QAAA;AJiEN;AI7DE;EACE,yBAAA;EACA,eAAA;AJ+DJ;;AK5GE;EACE,iBAAA;EAEA,YAAA;AL8GJ;;AM9GA;EACE,kBAAA;ANiHF;AM/GE;EACE,qBAAA;EACA,sBAAA;ANiHJ;AM9GE;EACE,WAAA;ANgHJ","sourcesContent":["div.dialog-cl {\r\n    box-sizing: border-box;\r\n    position: fixed;\r\n    border: 1px solid #444444;\r\n    background-color: white;\r\n    background-image: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    cursor: default;\r\n    top: 0;\r\n\r\n    width: 350px;\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    height: auto;\r\n    min-height: 150px;\r\n    max-height: 600px;\r\n}\r\n\r\n","div.dialog-cl {\n  box-sizing: border-box;\n  position: fixed;\n  border: 1px solid #444444;\n  background-color: white;\n  background-image: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  cursor: default;\n  top: 0;\n  width: 350px;\n  min-width: 150px;\n  max-width: 500px;\n  height: auto;\n  min-height: 150px;\n  max-height: 600px;\n}\n\ndiv.cl-dialog-bottom {\n  box-sizing: border-box;\n  flex: 0 0 44px;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  text-align: right;\n  border-top: 1px solid #cccccc;\n  cursor: default;\n}\n\ndiv.dialog-cl-body {\n  flex: 0 1 auto;\n  width: 100%;\n  overflow-y: auto;\n  padding: 0.5em;\n}\ndiv.dialog-cl-body p:first-child, div.dialog-cl-body h1:first-child, div.dialog-cl-body h2:first-child {\n  margin-top: 0;\n}\ndiv.dialog-cl-body p:last-child {\n  margin-bottom: 0;\n}\n\ndiv.cl-dialog-bottom button {\n  display: inline-block;\n  min-width: 7em;\n  margin: 10px 10px 10px 0;\n  padding: 3px 10px;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  font-size: 0.8em;\n  font-weight: bold;\n  border: 1px solid #999;\n  border-radius: 1px;\n  box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.1), inset 0 -10px 20px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  text-align: center;\n  color: #444;\n  background: #fff;\n}\ndiv.cl-dialog-bottom button:active {\n  box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.1), inset 0 10px 20px rgba(0, 0, 0, 0.1);\n}\ndiv.cl-dialog-bottom button:disabled,\ndiv.cl-dialog-bottom button[disabled] {\n  color: #ccc;\n}\n\ndiv.dialog-cl-top {\n  box-sizing: border-box;\n  background-color: #009688;\n  margin: 0;\n  padding: 0;\n  flex: 0 0 25px;\n  cursor: default;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\ndiv.dialog-cl-top h1 {\n  flex-grow: 1;\n  margin: 0;\n  padding: 4px 4px 0 10px;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  font-size: 16px;\n  line-height: 16px;\n  user-select: none;\n}\ndiv.dialog-cl-top button.dialog-cl-tb-button {\n  flex: 0 0 25px;\n  position: relative;\n  box-sizing: border-box;\n  height: 25px;\n  width: 25px;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  outline: none;\n}\ndiv.dialog-cl-top button.dialog-cl-tb-button span {\n  position: absolute;\n  left: 4px;\n  top: 4px;\n}\ndiv.dialog-cl-top .dialog-cl-tb-button:hover {\n  background-color: #e81123;\n  cursor: pointer;\n}\n\ndiv.dialog-cl div.message-cl {\n  font-size: 1.25em;\n  padding: 1em;\n}\n\ndiv.dialog-cl-column {\n  text-align: center;\n}\ndiv.dialog-cl-column > div {\n  display: inline-block;\n  padding: 1.5em 0 2em 0;\n}\ndiv.dialog-cl-column select {\n  width: 100%;\n}","div.cl-dialog-bottom {\r\n  box-sizing: border-box;\r\n  flex: 0 0 44px;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  text-align: right;\r\n  border-top: 1px solid #cccccc;\r\n  cursor: default;\r\n}\r\n","div.dialog-cl-body {\r\n  flex: 0 1 auto;\r\n  width: 100%;\r\n  overflow-y: auto;\r\n  padding: 0.5em;\r\n\r\n  p:first-child, h1:first-child, h2:first-child {\r\n    margin-top: 0;\r\n  }\r\n\r\n  p:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n","$button-width: 7em;\r\n\r\ndiv.cl-dialog-bottom {\r\n  button {\r\n    display: inline-block;\r\n    min-width: $button-width;\r\n    margin: 10px 10px 10px 0;\r\n    padding: 3px 10px;\r\n    font-family: \"Trebuchet MS\", Helvetica, sans-serif;\r\n    font-size: 0.8em;\r\n    font-weight: bold;\r\n    border: 1px solid #999;\r\n    border-radius: 1px;\r\n    box-shadow: inset 0 -1px 0 1px rgba(0,0,0,.1), inset 0 -10px 20px rgba(0,0,0,.1);\r\n    cursor: pointer;\r\n    text-align: center;\r\n    color: #444;\r\n    background: #fff;\r\n  }\r\n\r\n  button:active {\r\n    box-shadow: inset 0 -1px 0 1px rgba(0,0,0,.1), inset 0 10px 20px rgba(0,0,0,.1);\r\n  }\r\n\r\n  button:disabled,\r\n  button[disabled] {\r\n    color: #ccc;\r\n  }\r\n}\r\n\r\n","div.dialog-cl-top {\r\n  box-sizing: border-box;\r\n  background-color: #009688;\r\n  margin: 0;\r\n  padding: 0;\r\n  flex: 0 0 25px;\r\n  cursor: default;\r\n\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n\r\n  h1 {\r\n    flex-grow: 1;\r\n\r\n    margin: 0;\r\n    padding: 4px 4px 0 10px;\r\n    font-family: \"Trebuchet MS\", Helvetica, sans-serif;\r\n    font-size: 16px;\r\n    line-height: 16px;\r\n    user-select: none;\r\n  }\r\n\r\n  // Title bar buttons\r\n  button.dialog-cl-tb-button {\r\n    flex: 0 0 25px;\r\n\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    height: 25px;\r\n    width: 25px;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    background: transparent;\r\n    outline: none;\r\n\r\n    span {\r\n      position: absolute;\r\n      left: 4px;\r\n      top: 4px;\r\n    }\r\n  }\r\n\r\n  .dialog-cl-tb-button:hover {\r\n    background-color: #e81123;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n\r\n}\r\n\r\n","div.dialog-cl {\r\n  div.message-cl {\r\n    font-size: 1.25em;\r\n\r\n    padding: 1em;\r\n  }\r\n}","//\r\n// Standard dialog box style: single column of controls\r\n//\r\n\r\ndiv.dialog-cl-column {\r\n  text-align: center;\r\n\r\n  >div {\r\n    display: inline-block;\r\n    padding: 1.5em 0 2.0em 0;\r\n  }\r\n\r\n  select {\r\n    width: 100%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../.yarn/$$virtual/css-loader-virtual-bf014a1251/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/runtime/api.js":
/*!**************************************************************************************************************************************************************!*\
  !*** ../../.yarn/$$virtual/css-loader-virtual-bf014a1251/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/runtime/api.js ***!
  \**************************************************************************************************************************************************************/
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

/***/ "../../.yarn/$$virtual/css-loader-virtual-bf014a1251/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/$$virtual/css-loader-virtual-bf014a1251/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_3362c27dd8_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_ffc3054882_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../.yarn/$$virtual/style-loader-virtual-3362c27dd8/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-ffc3054882.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../.yarn/$$virtual/style-loader-virtual-3362c27dd8/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-ffc3054882.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_3362c27dd8_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_ffc3054882_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_style_loader_virtual_3362c27dd8_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_ffc3054882_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_bf014a1251_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_0423a67b12_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_da70689b4f_0_cache_sass_loader_npm_12_1_0_6188089e12_75f523e64c_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../.yarn/$$virtual/css-loader-virtual-bf014a1251/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/cjs.js!../../../.yarn/$$virtual/resolve-url-loader-virtual-0423a67b12/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-04e9f91dc8.zip/node_modules/resolve-url-loader/index.js!../../../.yarn/$$virtual/sass-loader-virtual-da70689b4f/0/cache/sass-loader-npm-12.1.0-6188089e12-75f523e64c.zip/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./_dialog.scss */ "../../.yarn/$$virtual/css-loader-virtual-bf014a1251/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/cjs.js!../../.yarn/$$virtual/resolve-url-loader-virtual-0423a67b12/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-04e9f91dc8.zip/node_modules/resolve-url-loader/index.js!../../.yarn/$$virtual/sass-loader-virtual-da70689b4f/0/cache/sass-loader-npm-12.1.0-6188089e12-75f523e64c.zip/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/_dialog.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _yarn_$$virtual_style_loader_virtual_3362c27dd8_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_ffc3054882_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_$$virtual_css_loader_virtual_bf014a1251_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_0423a67b12_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_da70689b4f_0_cache_sass_loader_npm_12_1_0_6188089e12_75f523e64c_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_yarn_$$virtual_css_loader_virtual_bf014a1251_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_0423a67b12_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_da70689b4f_0_cache_sass_loader_npm_12_1_0_6188089e12_75f523e64c_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
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
    var oldLocals = _yarn_$$virtual_css_loader_virtual_bf014a1251_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_0423a67b12_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_da70689b4f_0_cache_sass_loader_npm_12_1_0_6188089e12_75f523e64c_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../.yarn/$$virtual/css-loader-virtual-bf014a1251/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/cjs.js!../../../.yarn/$$virtual/resolve-url-loader-virtual-0423a67b12/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-04e9f91dc8.zip/node_modules/resolve-url-loader/index.js!../../../.yarn/$$virtual/sass-loader-virtual-da70689b4f/0/cache/sass-loader-npm-12.1.0-6188089e12-75f523e64c.zip/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./_dialog.scss */ "../../.yarn/$$virtual/css-loader-virtual-bf014a1251/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/cjs.js!../../.yarn/$$virtual/resolve-url-loader-virtual-0423a67b12/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-04e9f91dc8.zip/node_modules/resolve-url-loader/index.js!../../.yarn/$$virtual/sass-loader-virtual-da70689b4f/0/cache/sass-loader-npm-12.1.0-6188089e12-75f523e64c.zip/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/_dialog.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _yarn_$$virtual_css_loader_virtual_bf014a1251_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_0423a67b12_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_da70689b4f_0_cache_sass_loader_npm_12_1_0_6188089e12_75f523e64c_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../.yarn/$$virtual/css-loader-virtual-bf014a1251/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/cjs.js!../../../.yarn/$$virtual/resolve-url-loader-virtual-0423a67b12/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-04e9f91dc8.zip/node_modules/resolve-url-loader/index.js!../../../.yarn/$$virtual/sass-loader-virtual-da70689b4f/0/cache/sass-loader-npm-12.1.0-6188089e12-75f523e64c.zip/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./_dialog.scss */ "../../.yarn/$$virtual/css-loader-virtual-bf014a1251/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/cjs.js!../../.yarn/$$virtual/resolve-url-loader-virtual-0423a67b12/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-04e9f91dc8.zip/node_modules/resolve-url-loader/index.js!../../.yarn/$$virtual/sass-loader-virtual-da70689b4f/0/cache/sass-loader-npm-12.1.0-6188089e12-75f523e64c.zip/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/_dialog.scss");
(function () {
        if (!isEqualLocals(oldLocals, _yarn_$$virtual_css_loader_virtual_bf014a1251_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_0423a67b12_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_da70689b4f_0_cache_sass_loader_npm_12_1_0_6188089e12_75f523e64c_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _yarn_$$virtual_css_loader_virtual_bf014a1251_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_0423a67b12_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_da70689b4f_0_cache_sass_loader_npm_12_1_0_6188089e12_75f523e64c_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_yarn_$$virtual_css_loader_virtual_bf014a1251_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_0423a67b12_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_da70689b4f_0_cache_sass_loader_npm_12_1_0_6188089e12_75f523e64c_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_$$virtual_css_loader_virtual_bf014a1251_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_0423a67b12_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_da70689b4f_0_cache_sass_loader_npm_12_1_0_6188089e12_75f523e64c_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "../../.yarn/$$virtual/style-loader-virtual-3362c27dd8/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-ffc3054882.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/$$virtual/style-loader-virtual-3362c27dd8/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-ffc3054882.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************************************************************************************************************************/
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

/***/ }),

/***/ "../../.yarn/cache/@babel-runtime-npm-7.14.6-3272013297-dd931f6ef1.zip/node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!*******************************************************************************************************************************!*\
  !*** ../../.yarn/cache/@babel-runtime-npm-7.14.6-3272013297-dd931f6ef1.zip/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "../../.yarn/cache/icons-cl-npm-1.1.3-426eaac07d-7b0c456a81.zip/node_modules/icons-cl/dist/icons.js":
/*!**********************************************************************************************************!*\
  !*** ../../.yarn/cache/icons-cl-npm-1.1.3-426eaac07d-7b0c456a81.zip/node_modules/icons-cl/dist/icons.js ***!
  \**********************************************************************************************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/icons.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/icons.scss ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __nested_webpack_require_1257__) => {

__nested_webpack_require_1257__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_1257__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_1257__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_1257__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_1257__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_1257__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_1257__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_1257__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_icons_png__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_1257__(/*! ./images/icons.png */ "./src/images/icons.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_icons_png__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".icons-cl {\n  display: inline-block;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  width: 16px;\n  height: 16px;\n  overflow: hidden;\n  color: transparent;\n  padding: 0; }\n  .icons-cl.icons-cl-caret-1-n {\n    background-position: 0 0; }\n  .icons-cl.icons-cl-caret-1-ne {\n    background-position: -16px 0; }\n  .icons-cl.icons-cl-caret-1-e {\n    background-position: -32px 0; }\n  .icons-cl.icons-cl-caret-1-se {\n    background-position: -48px 0; }\n  .icons-cl.icons-cl-caret-1-s {\n    background-position: -64px 0; }\n  .icons-cl.icons-cl-caret-1-sw {\n    background-position: -80px 0; }\n  .icons-cl.icons-cl-caret-1-w {\n    background-position: -96px 0; }\n  .icons-cl.icons-cl-caret-1-nw {\n    background-position: -112px 0; }\n  .icons-cl.icons-cl-caret-2-n-s {\n    background-position: -128px 0; }\n  .icons-cl.icons-cl-caret-2-e-w {\n    background-position: -144px 0; }\n  .icons-cl.icons-cl-triangle-1-n {\n    background-position: 0px -16px; }\n  .icons-cl.icons-cl-triangle-1-ne {\n    background-position: -16px -16px; }\n  .icons-cl.icons-cl-triangle-1-e {\n    background-position: -32px -16px; }\n  .icons-cl.icons-cl-triangle-1-se {\n    background-position: -48px -16px; }\n  .icons-cl.icons-cl-triangle-1-s {\n    background-position: -64px -16px; }\n  .icons-cl.icons-cl-triangle-1-sw {\n    background-position: -80px -16px; }\n  .icons-cl.icons-cl-triangle-1-w {\n    background-position: -96px -16px; }\n  .icons-cl.icons-cl-triangle-1-nw {\n    background-position: -112px -16px; }\n  .icons-cl.icons-cl-triangle-2-n-s {\n    background-position: -128px -16px; }\n  .icons-cl.icons-cl-triangle-2-e-w {\n    background-position: -144px -16px; }\n  .icons-cl.icons-cl-arrow-1-n {\n    background-position: 0px -32px; }\n  .icons-cl.icons-cl-arrow-1-ne {\n    background-position: -16px -32px; }\n  .icons-cl.icons-cl-arrow-1-e {\n    background-position: -32px -32px; }\n  .icons-cl.icons-cl-arrow-1-se {\n    background-position: -48px -32px; }\n  .icons-cl.icons-cl-arrow-1-s {\n    background-position: -64px -32px; }\n  .icons-cl.icons-cl-arrow-1-sw {\n    background-position: -80px -32px; }\n  .icons-cl.icons-cl-arrow-1-w {\n    background-position: -96px -32px; }\n  .icons-cl.icons-cl-arrow-1-nw {\n    background-position: -112px -32px; }\n  .icons-cl.icons-cl-arrow-2-n-s {\n    background-position: -128px -32px; }\n  .icons-cl.icons-cl-arrow-2-ne-sw {\n    background-position: -144px -32px; }\n  .icons-cl.icons-cl-arrow-2-e-w {\n    background-position: -160px -32px; }\n  .icons-cl.icons-cl-arrow-2-se-nw {\n    background-position: -176px -32px; }\n  .icons-cl.icons-cl-arrowstop-1-n {\n    background-position: -192px -32px; }\n  .icons-cl.icons-cl-arrowstop-1-e {\n    background-position: -208px -32px; }\n  .icons-cl.icons-cl-arrowstop-1-s {\n    background-position: -224px -32px; }\n  .icons-cl.icons-cl-arrowstop-1-w {\n    background-position: -240px -32px; }\n  .icons-cl.icons-cl-arrowthick-1-n {\n    background-position: 0px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-ne {\n    background-position: -16px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-e {\n    background-position: -32px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-se {\n    background-position: -48px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-s {\n    background-position: -64px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-sw {\n    background-position: -80px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-w {\n    background-position: -96px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-nw {\n    background-position: -112px -48px; }\n  .icons-cl.icons-cl-arrowthick-2-n-s {\n    background-position: -128px -48px; }\n  .icons-cl.icons-cl-arrowthick-2-ne-sw {\n    background-position: -144px -48px; }\n  .icons-cl.icons-cl-arrowthick-2-e-w {\n    background-position: -160px -48px; }\n  .icons-cl.icons-cl-arrowthick-2-se-nw {\n    background-position: -176px -48px; }\n  .icons-cl.icons-cl-arrowthickstop-1-n {\n    background-position: -192px -48px; }\n  .icons-cl.icons-cl-arrowthickstop-1-e {\n    background-position: -208px -48px; }\n  .icons-cl.icons-cl-arrowthickstop-1-s {\n    background-position: -224px -48px; }\n  .icons-cl.icons-cl-arrowthickstop-1-w {\n    background-position: -240px -48px; }\n  .icons-cl.icons-cl-arrowreturnthick-1-w {\n    background-position: 0px -64px; }\n  .icons-cl.icons-cl-arrowreturnthick-1-e {\n    background-position: -32px -64px; }\n  .icons-cl.icons-cl-folder-collapsed {\n    background-position: 0px -96px; }\n  .icons-cl.icons-cl-folder-open {\n    background-position: -16px -96px; }\n  .icons-cl.icons-cl-document {\n    background-position: -32px -96px; }\n  .icons-cl.icons-cl-document-b {\n    background-position: -48px -96px; }\n  .icons-cl.icons-cl-note {\n    background-position: -64px -96px; }\n  .icons-cl.icons-cl-mail-closed {\n    background-position: -80px -96px; }\n  .icons-cl.icons-cl-mail-open {\n    background-position: -96px -96px; }\n  .icons-cl.icons-cl-suitcase {\n    background-position: -112px -96px; }\n  .icons-cl.icons-cl-comment {\n    background-position: -128px -96px; }\n  .icons-cl.icons-cl-person {\n    background-position: -144px -96px; }\n  .icons-cl.icons-cl-print {\n    background-position: -160px -96px; }\n  .icons-cl.icons-cl-trash {\n    background-position: -176px -96px; }\n  .icons-cl.icons-cl-locked {\n    background-position: -192px -96px; }\n  .icons-cl.icons-cl-unlocked {\n    background-position: -208px -96px; }\n  .icons-cl.icons-cl-bookmark {\n    background-position: -224px -96px; }\n  .icons-cl.icons-cl-tag {\n    background-position: -240px -96px; }\n  .icons-cl.icons-cl-home {\n    background-position: 0px -112px; }\n  .icons-cl.icons-cl-flag {\n    background-position: -16px -112px; }\n  .icons-cl.icons-cl-calculator {\n    background-position: -32px -112px; }\n  .icons-cl.icons-cl-cart {\n    background-position: -48px -112px; }\n  .icons-cl.icons-cl-pencil {\n    background-position: -64px -112px; }\n  .icons-cl.icons-cl-clock {\n    background-position: -80px -112px; }\n  .icons-cl.icons-cl-disk {\n    background-position: -96px -112px; }\n  .icons-cl.icons-cl-calendar {\n    background-position: -112px -112px; }\n  .icons-cl.icons-cl-zoomin {\n    background-position: -128px -112px; }\n  .icons-cl.icons-cl-zoomout {\n    background-position: -144px -112px; }\n  .icons-cl.icons-cl-search {\n    background-position: -160px -112px; }\n  .icons-cl.icons-cl-wrench {\n    background-position: -176px -112px; }\n  .icons-cl.icons-cl-gear {\n    background-position: -192px -112px; }\n  .icons-cl.icons-cl-heart {\n    background-position: -208px -112px; }\n  .icons-cl.icons-cl-star {\n    background-position: -224px -112px; }\n  .icons-cl.icons-cl-link {\n    background-position: -240px -112px; }\n  .icons-cl.icons-cl-cancel {\n    background-position: 0px -128px; }\n  .icons-cl.icons-cl-plus {\n    background-position: -16px -128px; }\n  .icons-cl.icons-cl-plusthick {\n    background-position: -32px -128px; }\n  .icons-cl.icons-cl-minus {\n    background-position: -48px -128px; }\n  .icons-cl.icons-cl-minusthick {\n    background-position: -64px -128px; }\n  .icons-cl.icons-cl-key {\n    background-position: -80px -128px; }\n  .icons-cl.icons-cl-lightbulb {\n    background-position: -96px -128px; }\n  .icons-cl.icons-cl-scissors {\n    background-position: -112px -128px; }\n  .icons-cl.icons-cl-clipboard {\n    background-position: -128px -128px; }\n  .icons-cl.icons-cl-copy {\n    background-position: -144px -128px; }\n  .icons-cl.icons-cl-contact {\n    background-position: -160px -128px; }\n  .icons-cl.icons-cl-image {\n    background-position: -176px -128px; }\n  .icons-cl.icons-cl-video {\n    background-position: -192px -128px; }\n  .icons-cl.icons-cl-script {\n    background-position: -208px -128px; }\n  .icons-cl.icons-cl-close {\n    background-position: -80px -128px; }\n  .icons-cl.icons-cl-closethick {\n    background-position: -96px -128px; }\n  .icons-cl.icons-cl-alert {\n    background-position: 0px -144px; }\n  .icons-cl.icons-cl-info {\n    background-position: -16px -144px; }\n  .icons-cl.icons-cl-notice {\n    background-position: -32px -144px; }\n  .icons-cl.icons-cl-help {\n    background-position: -48px -144px; }\n  .icons-cl.icons-cl-check {\n    background-position: -64px -144px; }\n  .icons-cl.icons-cl-bullet {\n    background-position: -80px -144px; }\n  .icons-cl.icons-cl-radio-off {\n    background-position: -96px -144px; }\n  .icons-cl.icons-cl-radio-on {\n    background-position: -112px -144px; }\n  .icons-cl.icons-cl-pin-w {\n    background-position: -128px -144px; }\n  .icons-cl.icons-cl-pin-s {\n    background-position: -144px -144px; }\n  .icons-cl.icons-cl-play {\n    background-position: 0px -160px; }\n  .icons-cl.icons-cl-pause {\n    background-position: -16px -160px; }\n  .icons-cl.icons-cl-seek-next {\n    background-position: -32px -160px; }\n  .icons-cl.icons-cl-seek-prev {\n    background-position: -48px -160px; }\n  .icons-cl.icons-cl-seek-end {\n    background-position: -64px -160px; }\n  .icons-cl.icons-cl-seek-first {\n    background-position: -80px -160px; }\n  .icons-cl.icons-cl-stop {\n    background-position: -96px -160px; }\n  .icons-cl.icons-cl-eject {\n    background-position: -112px -160px; }\n  .icons-cl.icons-cl-volume-off {\n    background-position: -128px -160px; }\n  .icons-cl.icons-cl-volume-on {\n    background-position: -144px -160px; }\n", "",{"version":3,"sources":["webpack://./icons.scss"],"names":[],"mappings":"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","sourcesContent":[".icons-cl {\r\n  display: inline-block;\r\n  background-image: url(images/icons.png);\r\n  width: 16px;\r\n  height: 16px;\r\n  overflow: hidden;\r\n  color: transparent;\r\n  padding: 0;\r\n\r\n  //\r\n  // Row 1\r\n  //\r\n  &.icons-cl-caret-1-n {\r\n    background-position: 0 0;\r\n  }\r\n\r\n  &.icons-cl-caret-1-ne {\r\n    background-position: -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-1-e {\r\n    background-position: 2 * -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-1-se {\r\n    background-position: 3 * -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-1-s {\r\n    background-position: 4 * -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-1-sw {\r\n    background-position: 5 * -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-1-w {\r\n    background-position: 6 * -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-1-nw {\r\n    background-position: 7 * -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-2-n-s {\r\n    background-position: 8 * -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-2-e-w {\r\n    background-position: 9 * -16px 0;\r\n  }\r\n\r\n  //\r\n  // Row 2\r\n  //\r\n  &.icons-cl-triangle-1-n {\r\n    background-position: 0 * -16px -16px;\r\n  }\r\n\r\n  &.icons-cl-triangle-1-ne {\r\n    background-position: 1 * -16px -16px;\r\n  }\r\n\r\n  &.icons-cl-triangle-1-e {\r\n    background-position: 2 * -16px -16px;\r\n  }\r\n\r\n  &.icons-cl-triangle-1-se {\r\n    background-position: 3 * -16px -16px;\r\n  }\r\n\r\n\r\n  &.icons-cl-triangle-1-s {\r\n    background-position: 4 * -16px -16px;\r\n  }\r\n\r\n\r\n  &.icons-cl-triangle-1-sw {\r\n    background-position: 5 * -16px -16px;\r\n  }\r\n\r\n\r\n  &.icons-cl-triangle-1-w {\r\n    background-position: 6 * -16px -16px;\r\n  }\r\n\r\n\r\n  &.icons-cl-triangle-1-nw {\r\n    background-position: 7 * -16px -16px;\r\n  }\r\n\r\n  &.icons-cl-triangle-2-n-s {\r\n    background-position: 8 * -16px -16px;\r\n  }\r\n\r\n  &.icons-cl-triangle-2-e-w {\r\n    background-position: 9 * -16px -16px;\r\n  }\r\n  \r\n  //\r\n  // Row 3\r\n  //\r\n  &.icons-cl-arrow-1-n {\r\n    background-position: 0 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-1-ne {\r\n    background-position: 1 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-1-e {\r\n    background-position: 2 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-1-se {\r\n    background-position: 3 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-1-s {\r\n    background-position: 4 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-1-sw {\r\n    background-position: 5 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-1-w {\r\n    background-position: 6 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-1-nw {\r\n    background-position: 7 * -16px -32px;\r\n  }\r\n\r\n\r\n  &.icons-cl-arrow-2-n-s {\r\n    background-position: 8 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-2-ne-sw {\r\n    background-position: 9 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-2-e-w {\r\n    background-position: 10 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-2-se-nw {\r\n    background-position: 11 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrowstop-1-n {\r\n    background-position: 12 * -16px -32px;\r\n  }\r\n\r\n\r\n  &.icons-cl-arrowstop-1-e {\r\n    background-position: 13 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrowstop-1-s {\r\n    background-position: 14 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrowstop-1-w {\r\n    background-position: 15 * -16px -32px;\r\n  }\r\n\r\n  //\r\n  // Row 4\r\n  //\r\n  &.icons-cl-arrowthick-1-n {\r\n    background-position: 0 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-1-ne {\r\n    background-position: 1 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-1-e {\r\n    background-position: 2 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-1-se {\r\n    background-position: 3 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-1-s {\r\n    background-position: 4 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-1-sw {\r\n    background-position: 5 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-1-w {\r\n    background-position: 6 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-1-nw {\r\n    background-position: 7 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-2-n-s {\r\n    background-position: 8 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-2-ne-sw {\r\n    background-position: 9 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-2-e-w {\r\n    background-position: 10 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-2-se-nw {\r\n    background-position: 11 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthickstop-1-n {\r\n    background-position: 12 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthickstop-1-e {\r\n    background-position: 13 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthickstop-1-s {\r\n    background-position: 14 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthickstop-1-w {\r\n    background-position: 15 * -16px -48px;\r\n  }\r\n\r\n  //\r\n  // Row 5\r\n  &.icons-cl-arrowreturnthick-1-w {\r\n    background-position: 0 * -16px -64px;\r\n  }\r\n\r\n  &.icons-cl-arrowreturnthick-1-e {\r\n    background-position: 2 * -16px -64px;\r\n  }\r\n\r\n  // ui-icon-arrowreturnthick-1-n  ui-icon-arrowreturnthick-1-s  ui-icon-arrowreturn-1-w  ui-icon-arrowreturn-1-n  ui-icon-arrowreturn-1-e  ui-icon-arrowreturn-1-s  ui-icon-arrowrefresh-1-w  ui-icon-arrowrefresh-1-n  ui-icon-arrowrefresh-1-e  ui-icon-arrowrefresh-1-s\r\n  // ui-icon-arrow-4  ui-icon-arrow-4-diag  ui-icon-extlink  ui-icon-newwin  ui-icon-refresh  ui-icon-shuffle  ui-icon-transfer-e-w  ui-icon-transferthick-e-w\r\n\r\n  //\r\n  // Row 6\r\n  //\r\n  $list: folder-collapsed folder-open document document-b note mail-closed mail-open suitcase comment person print trash locked unlocked bookmark tag;\r\n  $x: 0;\r\n\r\n  @each $item in $list {\r\n    &.icons-cl-#{$item} {\r\n      background-position: $x * -16px -96px\r\n    }\r\n\r\n    $x: $x+1;\r\n  }\r\n\r\n  //\r\n  // Row 7\r\n  //\r\n  $list: home flag calculator cart pencil clock disk calendar zoomin zoomout search wrench gear heart star link;\r\n  $x: 0;\r\n\r\n  @each $item in $list {\r\n    &.icons-cl-#{$item} {\r\n      background-position: $x * -16px -112px\r\n    }\r\n\r\n    $x: $x+1;\r\n  }\r\n\r\n  //\r\n  // Row 8\r\n  //\r\n  $list: cancel  plus  plusthick  minus  minusthick  key  lightbulb  scissors  clipboard  copy  contact  image  video  script;\r\n  $x: 0;\r\n\r\n  @each $item in $list {\r\n    &.icons-cl-#{$item} {\r\n      background-position: $x * -16px -128px\r\n    }\r\n\r\n    $x: $x+1;\r\n  }\r\n\r\n  &.icons-cl-close {\r\n    background-position: -80px -128px;\r\n  }\r\n\r\n  &.icons-cl-closethick {\r\n    background-position: -96px -128px;\r\n  }\r\n  // ui-icon-cancel  ui-icon-plus  ui-icon-plusthick  ui-icon-minus  ui-icon-minusthick  ui-icon-key  ui-icon-lightbulb  ui-icon-scissors  ui-icon-clipboard  ui-icon-copy  ui-icon-contact  ui-icon-image  ui-icon-video  ui-icon-script\r\n\r\n  // Row 9\r\n  $list: alert info  notice help check  bullet  radio-off  radio-on  pin-w  pin-s;\r\n  $x: 0;\r\n\r\n  @each $item in $list {\r\n    &.icons-cl-#{$item} {\r\n      background-position: $x * -16px 9 * -16px\r\n    }\r\n\r\n    $x: $x+1;\r\n  }\r\n\r\n  //  Row 10\r\n  $list: play pause seek-next  seek-prev  seek-end  seek-first  stop  eject  volume-off  volume-on;\r\n  $x: 0;\r\n\r\n  @each $item in $list {\r\n    &.icons-cl-#{$item} {\r\n      background-position: $x * -16px 10 * -16px\r\n    }\r\n\r\n    $x: $x+1;\r\n  }\r\n\r\n // ui-icon-power  ui-icon-signal-diag  ui-icon-signal  ui-icon-battery-0  ui-icon-battery-1  ui-icon-battery-2  ui-icon-battery-3\r\n  // ui-icon-circle-plus  ui-icon-circle-minus  ui-icon-circle-close  ui-icon-circle-triangle-e  ui-icon-circle-triangle-s  ui-icon-circle-triangle-w  ui-icon-circle-triangle-n  ui-icon-circle-arrow-e  ui-icon-circle-arrow-s  ui-icon-circle-arrow-w  ui-icon-circle-arrow-n  ui-icon-circle-zoomin  ui-icon-circle-zoomout  ui-icon-circle-check\r\n// ui-icon-circlesmall-plus  ui-icon-circlesmall-minus  ui-icon-circlesmall-close  ui-icon-squaresmall-plus  ui-icon-squaresmall-minus  ui-icon-squaresmall-close\r\n// ui-icon-grip-dotted-vertical  ui-icon-grip-dotted-horizontal  ui-icon-grip-solid-vertical  ui-icon-grip-solid-horizontal  ui-icon-gripsmall-diagonal-se  ui-icon-grip-diagonal-se\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {



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

/***/ "../../node_modules/css-loader/dist/runtime/getUrl.js":
/*!************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

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

/***/ }),

/***/ "./src/icons.scss":
/*!************************!*\
  !*** ./src/icons.scss ***!
  \************************/
/***/ ((module, __webpack_exports__, __nested_webpack_require_30417__) => {

__nested_webpack_require_30417__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_30417__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_30417__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_30417__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_30417__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./icons.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/icons.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
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
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./icons.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/icons.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_30417__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./icons.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/icons.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_35785__) => {



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
    var nonce =   true ? __nested_webpack_require_35785__.nc : 0;

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

/***/ }),

/***/ "./src/images/icons.png":
/*!******************************!*\
  !*** ./src/images/icons.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_42799__) => {

__nested_webpack_require_42799__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_42799__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_49463__) => {

__nested_webpack_require_49463__.r(__webpack_exports__);
/* harmony import */ var _icons_scss__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_49463__(/*! ./icons.scss */ "./src/icons.scss");



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_49896__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __nested_webpack_require_49896__ };
/******/ 		__nested_webpack_require_49896__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_49896__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_49896__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__nested_webpack_require_49896__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_49896__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nested_webpack_require_49896__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_49896__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_49896__.o(definition, key) && !__nested_webpack_require_49896__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__nested_webpack_require_49896__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __nested_webpack_require_49896__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__nested_webpack_require_49896__.hmrF = () => ("Icons." + __nested_webpack_require_49896__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__nested_webpack_require_49896__.h = () => ("e0ac1235ed53cfc1f268")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_49896__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "Icons:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__nested_webpack_require_49896__.l = (url, done, key, chunkId) => {
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
/******/ 				if (__nested_webpack_require_49896__.nc) {
/******/ 					script.setAttribute("nonce", __nested_webpack_require_49896__.nc);
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
/******/ 		__nested_webpack_require_49896__.r = (exports) => {
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
/******/ 		var installedModules = __nested_webpack_require_49896__.c;
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
/******/ 		__nested_webpack_require_49896__.hmrD = currentModuleData;
/******/ 		
/******/ 		__nested_webpack_require_49896__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__nested_webpack_require_49896__.hmrC = {};
/******/ 		__nested_webpack_require_49896__.hmrI = {};
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
/******/ 					__nested_webpack_require_49896__(moduleId);
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
/******/ 							Object.keys(__nested_webpack_require_49896__.hmrI).forEach(function (key) {
/******/ 								__nested_webpack_require_49896__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__nested_webpack_require_49896__.hmrI).forEach(function (key) {
/******/ 								__nested_webpack_require_49896__.hmrI[key](
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
/******/ 			return __nested_webpack_require_49896__.hmrM().then(function (update) {
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
/******/ 					Object.keys(__nested_webpack_require_49896__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__nested_webpack_require_49896__.hmrC[key](
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
/******/ 				Object.keys(__nested_webpack_require_49896__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__nested_webpack_require_49896__.hmrI[key](
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
/******/ 		__nested_webpack_require_49896__.p = "";
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
/******/ 			"Icons": 0
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
/******/ 				var url = __nested_webpack_require_49896__.p + __nested_webpack_require_49896__.hu(chunkId);
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
/******/ 				__nested_webpack_require_49896__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateIcons"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__nested_webpack_require_49896__.o(moreModules, moduleId)) {
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
/******/ 			if (__nested_webpack_require_49896__.f) delete __nested_webpack_require_49896__.f.jsonpHmr;
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
/******/ 					var module = __nested_webpack_require_49896__.c[moduleId];
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
/******/ 						var parent = __nested_webpack_require_49896__.c[parentId];
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
/******/ 				if (__nested_webpack_require_49896__.o(currentUpdate, moduleId)) {
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
/******/ 							if (__nested_webpack_require_49896__.o(result.outdatedDependencies, moduleId)) {
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
/******/ 					__nested_webpack_require_49896__.c[outdatedModuleId] &&
/******/ 					__nested_webpack_require_49896__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__nested_webpack_require_49896__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __nested_webpack_require_49896__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __nested_webpack_require_49896__.c[outdatedModuleId].hot._selfAccepted
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
/******/ 						var module = __nested_webpack_require_49896__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__nested_webpack_require_49896__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __nested_webpack_require_49896__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __nested_webpack_require_49896__.c[module.children[j]];
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
/******/ 						if (__nested_webpack_require_49896__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __nested_webpack_require_49896__.c[outdatedModuleId];
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
/******/ 						if (__nested_webpack_require_49896__.o(appliedUpdate, updateModuleId)) {
/******/ 							__nested_webpack_require_49896__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__nested_webpack_require_49896__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__nested_webpack_require_49896__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __nested_webpack_require_49896__.c[outdatedModuleId];
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
/******/ 		__nested_webpack_require_49896__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__nested_webpack_require_49896__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __nested_webpack_require_49896__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__nested_webpack_require_49896__.hmrC.jsonp = function (
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
/******/ 					__nested_webpack_require_49896__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__nested_webpack_require_49896__.f) {
/******/ 				__nested_webpack_require_49896__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__nested_webpack_require_49896__.o(currentUpdateChunks, chunkId) &&
/******/ 						__nested_webpack_require_49896__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__nested_webpack_require_49896__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__nested_webpack_require_49896__.p + __nested_webpack_require_49896__.hmrF()).then((response) => {
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
/******/ 	var __webpack_exports__ = __nested_webpack_require_49896__("./src/icons.js");
/******/ 	__webpack_exports__ = __webpack_exports__.default;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JY29ucy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSWNvbnMvLi9zcmMvaWNvbnMuc2NzcyIsIndlYnBhY2s6Ly9JY29ucy8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0ljb25zLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL0ljb25zLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vSWNvbnMvLi9zcmMvaWNvbnMuc2Nzcz81NmZiIiwid2VicGFjazovL0ljb25zLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9JY29ucy8uL3NyYy9pbWFnZXMvaWNvbnMucG5nIiwid2VicGFjazovL0ljb25zLy4vc3JjL2ljb25zLmpzIiwid2VicGFjazovL0ljb25zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0ljb25zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0ljb25zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9JY29ucy93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgdXBkYXRlIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL0ljb25zL3dlYnBhY2svcnVudGltZS9nZXQgdXBkYXRlIG1hbmlmZXN0IGZpbGVuYW1lIiwid2VicGFjazovL0ljb25zL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9JY29ucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0ljb25zL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9JY29ucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0ljb25zL3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovL0ljb25zL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL0ljb25zL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL0ljb25zL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDNEg7QUFDN0I7QUFDTztBQUN2QztBQUMvRCw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0IsQ0FBQyxzREFBNkI7QUFDdEc7QUFDQSxxREFBcUQsMEJBQTBCLHNFQUFzRSxnQkFBZ0IsaUJBQWlCLHFCQUFxQix1QkFBdUIsZUFBZSxFQUFFLGtDQUFrQywrQkFBK0IsRUFBRSxtQ0FBbUMsbUNBQW1DLEVBQUUsa0NBQWtDLG1DQUFtQyxFQUFFLG1DQUFtQyxtQ0FBbUMsRUFBRSxrQ0FBa0MsbUNBQW1DLEVBQUUsbUNBQW1DLG1DQUFtQyxFQUFFLGtDQUFrQyxtQ0FBbUMsRUFBRSxtQ0FBbUMsb0NBQW9DLEVBQUUsb0NBQW9DLG9DQUFvQyxFQUFFLG9DQUFvQyxvQ0FBb0MsRUFBRSxxQ0FBcUMscUNBQXFDLEVBQUUsc0NBQXNDLHVDQUF1QyxFQUFFLHFDQUFxQyx1Q0FBdUMsRUFBRSxzQ0FBc0MsdUNBQXVDLEVBQUUscUNBQXFDLHVDQUF1QyxFQUFFLHNDQUFzQyx1Q0FBdUMsRUFBRSxxQ0FBcUMsdUNBQXVDLEVBQUUsc0NBQXNDLHdDQUF3QyxFQUFFLHVDQUF1Qyx3Q0FBd0MsRUFBRSx1Q0FBdUMsd0NBQXdDLEVBQUUsa0NBQWtDLHFDQUFxQyxFQUFFLG1DQUFtQyx1Q0FBdUMsRUFBRSxrQ0FBa0MsdUNBQXVDLEVBQUUsbUNBQW1DLHVDQUF1QyxFQUFFLGtDQUFrQyx1Q0FBdUMsRUFBRSxtQ0FBbUMsdUNBQXVDLEVBQUUsa0NBQWtDLHVDQUF1QyxFQUFFLG1DQUFtQyx3Q0FBd0MsRUFBRSxvQ0FBb0Msd0NBQXdDLEVBQUUsc0NBQXNDLHdDQUF3QyxFQUFFLG9DQUFvQyx3Q0FBd0MsRUFBRSxzQ0FBc0Msd0NBQXdDLEVBQUUsc0NBQXNDLHdDQUF3QyxFQUFFLHNDQUFzQyx3Q0FBd0MsRUFBRSxzQ0FBc0Msd0NBQXdDLEVBQUUsc0NBQXNDLHdDQUF3QyxFQUFFLHVDQUF1QyxxQ0FBcUMsRUFBRSx3Q0FBd0MsdUNBQXVDLEVBQUUsdUNBQXVDLHVDQUF1QyxFQUFFLHdDQUF3Qyx1Q0FBdUMsRUFBRSx1Q0FBdUMsdUNBQXVDLEVBQUUsd0NBQXdDLHVDQUF1QyxFQUFFLHVDQUF1Qyx1Q0FBdUMsRUFBRSx3Q0FBd0Msd0NBQXdDLEVBQUUseUNBQXlDLHdDQUF3QyxFQUFFLDJDQUEyQyx3Q0FBd0MsRUFBRSx5Q0FBeUMsd0NBQXdDLEVBQUUsMkNBQTJDLHdDQUF3QyxFQUFFLDJDQUEyQyx3Q0FBd0MsRUFBRSwyQ0FBMkMsd0NBQXdDLEVBQUUsMkNBQTJDLHdDQUF3QyxFQUFFLDJDQUEyQyx3Q0FBd0MsRUFBRSw2Q0FBNkMscUNBQXFDLEVBQUUsNkNBQTZDLHVDQUF1QyxFQUFFLHlDQUF5QyxxQ0FBcUMsRUFBRSxvQ0FBb0MsdUNBQXVDLEVBQUUsaUNBQWlDLHVDQUF1QyxFQUFFLG1DQUFtQyx1Q0FBdUMsRUFBRSw2QkFBNkIsdUNBQXVDLEVBQUUsb0NBQW9DLHVDQUF1QyxFQUFFLGtDQUFrQyx1Q0FBdUMsRUFBRSxpQ0FBaUMsd0NBQXdDLEVBQUUsZ0NBQWdDLHdDQUF3QyxFQUFFLCtCQUErQix3Q0FBd0MsRUFBRSw4QkFBOEIsd0NBQXdDLEVBQUUsOEJBQThCLHdDQUF3QyxFQUFFLCtCQUErQix3Q0FBd0MsRUFBRSxpQ0FBaUMsd0NBQXdDLEVBQUUsaUNBQWlDLHdDQUF3QyxFQUFFLDRCQUE0Qix3Q0FBd0MsRUFBRSw2QkFBNkIsc0NBQXNDLEVBQUUsNkJBQTZCLHdDQUF3QyxFQUFFLG1DQUFtQyx3Q0FBd0MsRUFBRSw2QkFBNkIsd0NBQXdDLEVBQUUsK0JBQStCLHdDQUF3QyxFQUFFLDhCQUE4Qix3Q0FBd0MsRUFBRSw2QkFBNkIsd0NBQXdDLEVBQUUsaUNBQWlDLHlDQUF5QyxFQUFFLCtCQUErQix5Q0FBeUMsRUFBRSxnQ0FBZ0MseUNBQXlDLEVBQUUsK0JBQStCLHlDQUF5QyxFQUFFLCtCQUErQix5Q0FBeUMsRUFBRSw2QkFBNkIseUNBQXlDLEVBQUUsOEJBQThCLHlDQUF5QyxFQUFFLDZCQUE2Qix5Q0FBeUMsRUFBRSw2QkFBNkIseUNBQXlDLEVBQUUsK0JBQStCLHNDQUFzQyxFQUFFLDZCQUE2Qix3Q0FBd0MsRUFBRSxrQ0FBa0Msd0NBQXdDLEVBQUUsOEJBQThCLHdDQUF3QyxFQUFFLG1DQUFtQyx3Q0FBd0MsRUFBRSw0QkFBNEIsd0NBQXdDLEVBQUUsa0NBQWtDLHdDQUF3QyxFQUFFLGlDQUFpQyx5Q0FBeUMsRUFBRSxrQ0FBa0MseUNBQXlDLEVBQUUsNkJBQTZCLHlDQUF5QyxFQUFFLGdDQUFnQyx5Q0FBeUMsRUFBRSw4QkFBOEIseUNBQXlDLEVBQUUsOEJBQThCLHlDQUF5QyxFQUFFLCtCQUErQix5Q0FBeUMsRUFBRSw4QkFBOEIsd0NBQXdDLEVBQUUsbUNBQW1DLHdDQUF3QyxFQUFFLDhCQUE4QixzQ0FBc0MsRUFBRSw2QkFBNkIsd0NBQXdDLEVBQUUsK0JBQStCLHdDQUF3QyxFQUFFLDZCQUE2Qix3Q0FBd0MsRUFBRSw4QkFBOEIsd0NBQXdDLEVBQUUsK0JBQStCLHdDQUF3QyxFQUFFLGtDQUFrQyx3Q0FBd0MsRUFBRSxpQ0FBaUMseUNBQXlDLEVBQUUsOEJBQThCLHlDQUF5QyxFQUFFLDhCQUE4Qix5Q0FBeUMsRUFBRSw2QkFBNkIsc0NBQXNDLEVBQUUsOEJBQThCLHdDQUF3QyxFQUFFLGtDQUFrQyx3Q0FBd0MsRUFBRSxrQ0FBa0Msd0NBQXdDLEVBQUUsaUNBQWlDLHdDQUF3QyxFQUFFLG1DQUFtQyx3Q0FBd0MsRUFBRSw2QkFBNkIsd0NBQXdDLEVBQUUsOEJBQThCLHlDQUF5QyxFQUFFLG1DQUFtQyx5Q0FBeUMsRUFBRSxrQ0FBa0MseUNBQXlDLEVBQUUsU0FBUyw2RUFBNkUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsZ0JBQWdCLEtBQUssaUJBQWlCLE1BQU0sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8saURBQWlELDRCQUE0Qiw4Q0FBOEMsa0JBQWtCLG1CQUFtQix1QkFBdUIseUJBQXlCLGlCQUFpQiw4REFBOEQsaUNBQWlDLE9BQU8saUNBQWlDLHFDQUFxQyxPQUFP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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0JBQWtCLDJCQUEyQjtXQUM3QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQSxpQkFBaUIsY0FBYztXQUMvQjtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0EsY0FBYyxLQUFLO1dBQ25CO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsY0FBYyxZQUFZO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsZ0JBQWdCLDRCQUE0QjtXQUM1QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0M7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHVDQUF1QztXQUN4RDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLGtCQUFrQixpQ0FBaUM7V0FDbkQ7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxxQkFBcUIsdUNBQXVDO1dBQzVEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHFCQUFxQixzQkFBc0I7V0FDM0M7V0FDQTtXQUNBLFFBQVE7V0FDUjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxVQUFVO1dBQ1Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0Esa0JBQWtCLHdDQUF3QztXQUMxRDtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxPQUFPO1dBQ1A7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsU0FBUztXQUNUO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsUUFBUTtXQUNSO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFLElBQUk7V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxxQ0FBcUM7V0FDckM7V0FDQTtXQUNBLEVBQUU7V0FDRjs7V0FFQTs7V0FFQTs7V0FFQSxzQjs7Ozs7VUNoZUE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaWNvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJJY29uc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJJY29uc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9pbWFnZXMvaWNvbnMucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmljb25zLWNsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1uZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1zZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1zdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1udyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMi1uLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTItZS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLW5lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtc2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1zdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLW53IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMi1uLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0yLWUtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtbmUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMS1zZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMS1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLXN3IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtbncge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0yLW4tcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTItbmUtc3cge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0yLWUtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTItc2Utbncge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3N0b3AtMS1uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3dzdG9wLTEtZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93c3RvcC0xLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3N0b3AtMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtbmUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtc2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtc3cge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtbncge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTItbi1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0yLW5lLXN3IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0yLWUtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMi1zZS1udyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2tzdG9wLTEtbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2tzdG9wLTEtZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2tzdG9wLTEtcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2tzdG9wLTEtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93cmV0dXJudGhpY2stMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC02NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3dyZXR1cm50aGljay0xLWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtNjRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWZvbGRlci1jb2xsYXBzZWQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1mb2xkZXItb3BlbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZG9jdW1lbnQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWRvY3VtZW50LWIge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLW5vdGUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLW1haWwtY2xvc2VkIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1tYWlsLW9wZW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXN1aXRjYXNlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY29tbWVudCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBlcnNvbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXByaW50IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJhc2gge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1sb2NrZWQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC11bmxvY2tlZCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWJvb2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdGFnIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtaG9tZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1mbGFnIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FsY3VsYXRvciB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcnQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1wZW5jaWwge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jbG9jayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWRpc2sge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYWxlbmRhciB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC16b29taW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtem9vbW91dCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zZWFyY2gge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtd3JlbmNoIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWdlYXIge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtaGVhcnQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc3RhciB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1saW5rIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1wbHVzIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGx1c3RoaWNrIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbWludXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1taW51c3RoaWNrIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wta2V5IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbGlnaHRidWxiIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc2Npc3NvcnMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2xpcGJvYXJkIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNvcHkge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY29udGFjdCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1pbWFnZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC12aWRlbyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zY3JpcHQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2xvc2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jbG9zZXRoaWNrIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYWxlcnQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtaW5mbyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLW5vdGljZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWhlbHAge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jaGVjayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWJ1bGxldCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXJhZGlvLW9mZiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXJhZGlvLW9uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBpbi13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBpbi1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBsYXkge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGF1c2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zZWVrLW5leHQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zZWVrLXByZXYge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zZWVrLWVuZCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXNlZWstZmlyc3Qge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zdG9wIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZWplY3Qge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdm9sdW1lLW9mZiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC12b2x1bWUtb24ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTE2MHB4OyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vaWNvbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQix5REFBdUM7RUFDdkMsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTtFQVBaO0lBYUksd0JBQXdCLEVBQUE7RUFiNUI7SUFpQkksNEJBQTRCLEVBQUE7RUFqQmhDO0lBcUJJLDRCQUFnQyxFQUFBO0VBckJwQztJQXlCSSw0QkFBZ0MsRUFBQTtFQXpCcEM7SUE2QkksNEJBQWdDLEVBQUE7RUE3QnBDO0lBaUNJLDRCQUFnQyxFQUFBO0VBakNwQztJQXFDSSw0QkFBZ0MsRUFBQTtFQXJDcEM7SUF5Q0ksNkJBQWdDLEVBQUE7RUF6Q3BDO0lBNkNJLDZCQUFnQyxFQUFBO0VBN0NwQztJQWlESSw2QkFBZ0MsRUFBQTtFQWpEcEM7SUF3REksOEJBQW9DLEVBQUE7RUF4RHhDO0lBNERJLGdDQUFvQyxF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QUFBO0VBN1RoRDtJQTZUTSxrQ0FBMEMsRUFBQTtFQTdUaEQ7SUE2VE0sa0NBQTBDLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmljb25zLWNsIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvaWNvbnMucG5nKTtcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuXFxyXFxuICAvL1xcclxcbiAgLy8gUm93IDFcXHJcXG4gIC8vXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTEtbiB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtY2FyZXQtMS1uZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTEtZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIgKiAtMTZweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jYXJldC0xLXNlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMyAqIC0xNnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTEtcyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQgKiAtMTZweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jYXJldC0xLXN3IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNSAqIC0xNnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTEtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDYgKiAtMTZweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jYXJldC0xLW53IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNyAqIC0xNnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTItbi1zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOCAqIC0xNnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTItZS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOSAqIC0xNnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvL1xcclxcbiAgLy8gUm93IDJcXHJcXG4gIC8vXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTEtbiB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgKiAtMTZweCAtMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtdHJpYW5nbGUtMS1uZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEgKiAtMTZweCAtMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtdHJpYW5nbGUtMS1lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMiAqIC0xNnB4IC0xNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC10cmlhbmdsZS0xLXNlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMyAqIC0xNnB4IC0xNnB4O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgJi5pY29ucy1jbC10cmlhbmdsZS0xLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0ICogLTE2cHggLTE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTEtc3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1ICogLTE2cHggLTE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTEtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDYgKiAtMTZweCAtMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtdHJpYW5nbGUtMS1udyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDcgKiAtMTZweCAtMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtdHJpYW5nbGUtMi1uLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA4ICogLTE2cHggLTE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTItZS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOSAqIC0xNnB4IC0xNnB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvL1xcclxcbiAgLy8gUm93IDNcXHJcXG4gIC8vXFxyXFxuICAmLmljb25zLWNsLWFycm93LTEtbiB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMS1uZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMS1lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMiAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvdy0xLXNlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMyAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvdy0xLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0ICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTEtc3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1ICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTEtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDYgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMS1udyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDcgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMi1uLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA4ICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTItbmUtc3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5ICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTItZS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMi1zZS1udyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDExICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93c3RvcC0xLW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMiAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3N0b3AtMS1lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTMgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3dzdG9wLTEtcyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE0ICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93c3RvcC0xLXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNSAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLy9cXHJcXG4gIC8vIFJvdyA0XFxyXFxuICAvL1xcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTEtbiB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0xLW5lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMSAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTEtZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0xLXNlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMyAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTEtcyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0xLXN3IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNSAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTEtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDYgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0xLW53IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNyAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTItbi1zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOCAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTItbmUtc3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5ICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2stMi1lLXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMCAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTItc2Utbncge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMSAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMiAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLWUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMyAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNCAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNSAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLy9cXHJcXG4gIC8vIFJvdyA1XFxyXFxuICAmLmljb25zLWNsLWFycm93cmV0dXJudGhpY2stMS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAqIC0xNnB4IC02NHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3JldHVybnRoaWNrLTEtZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIgKiAtMTZweCAtNjRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIHVpLWljb24tYXJyb3dyZXR1cm50aGljay0xLW4gIHVpLWljb24tYXJyb3dyZXR1cm50aGljay0xLXMgIHVpLWljb24tYXJyb3dyZXR1cm4tMS13ICB1aS1pY29uLWFycm93cmV0dXJuLTEtbiAgdWktaWNvbi1hcnJvd3JldHVybi0xLWUgIHVpLWljb24tYXJyb3dyZXR1cm4tMS1zICB1aS1pY29uLWFycm93cmVmcmVzaC0xLXcgIHVpLWljb24tYXJyb3dyZWZyZXNoLTEtbiAgdWktaWNvbi1hcnJvd3JlZnJlc2gtMS1lICB1aS1pY29uLWFycm93cmVmcmVzaC0xLXNcXHJcXG4gIC8vIHVpLWljb24tYXJyb3ctNCAgdWktaWNvbi1hcnJvdy00LWRpYWcgIHVpLWljb24tZXh0bGluayAgdWktaWNvbi1uZXd3aW4gIHVpLWljb24tcmVmcmVzaCAgdWktaWNvbi1zaHVmZmxlICB1aS1pY29uLXRyYW5zZmVyLWUtdyAgdWktaWNvbi10cmFuc2ZlcnRoaWNrLWUtd1xcclxcblxcclxcbiAgLy9cXHJcXG4gIC8vIFJvdyA2XFxyXFxuICAvL1xcclxcbiAgJGxpc3Q6IGZvbGRlci1jb2xsYXBzZWQgZm9sZGVyLW9wZW4gZG9jdW1lbnQgZG9jdW1lbnQtYiBub3RlIG1haWwtY2xvc2VkIG1haWwtb3BlbiBzdWl0Y2FzZSBjb21tZW50IHBlcnNvbiBwcmludCB0cmFzaCBsb2NrZWQgdW5sb2NrZWQgYm9va21hcmsgdGFnO1xcclxcbiAgJHg6IDA7XFxyXFxuXFxyXFxuICBAZWFjaCAkaXRlbSBpbiAkbGlzdCB7XFxyXFxuICAgICYuaWNvbnMtY2wtI3skaXRlbX0ge1xcclxcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR4ICogLTE2cHggLTk2cHhcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAkeDogJHgrMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vXFxyXFxuICAvLyBSb3cgN1xcclxcbiAgLy9cXHJcXG4gICRsaXN0OiBob21lIGZsYWcgY2FsY3VsYXRvciBjYXJ0IHBlbmNpbCBjbG9jayBkaXNrIGNhbGVuZGFyIHpvb21pbiB6b29tb3V0IHNlYXJjaCB3cmVuY2ggZ2VhciBoZWFydCBzdGFyIGxpbms7XFxyXFxuICAkeDogMDtcXHJcXG5cXHJcXG4gIEBlYWNoICRpdGVtIGluICRsaXN0IHtcXHJcXG4gICAgJi5pY29ucy1jbC0jeyRpdGVtfSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHggKiAtMTZweCAtMTEycHhcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAkeDogJHgrMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vXFxyXFxuICAvLyBSb3cgOFxcclxcbiAgLy9cXHJcXG4gICRsaXN0OiBjYW5jZWwgIHBsdXMgIHBsdXN0aGljayAgbWludXMgIG1pbnVzdGhpY2sgIGtleSAgbGlnaHRidWxiICBzY2lzc29ycyAgY2xpcGJvYXJkICBjb3B5ICBjb250YWN0ICBpbWFnZSAgdmlkZW8gIHNjcmlwdDtcXHJcXG4gICR4OiAwO1xcclxcblxcclxcbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xcclxcbiAgICAmLmljb25zLWNsLSN7JGl0ZW19IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkeCAqIC0xNnB4IC0xMjhweFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICR4OiAkeCsxO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jbG9zZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xMjhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtY2xvc2V0aGljayB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xMjhweDtcXHJcXG4gIH1cXHJcXG4gIC8vIHVpLWljb24tY2FuY2VsICB1aS1pY29uLXBsdXMgIHVpLWljb24tcGx1c3RoaWNrICB1aS1pY29uLW1pbnVzICB1aS1pY29uLW1pbnVzdGhpY2sgIHVpLWljb24ta2V5ICB1aS1pY29uLWxpZ2h0YnVsYiAgdWktaWNvbi1zY2lzc29ycyAgdWktaWNvbi1jbGlwYm9hcmQgIHVpLWljb24tY29weSAgdWktaWNvbi1jb250YWN0ICB1aS1pY29uLWltYWdlICB1aS1pY29uLXZpZGVvICB1aS1pY29uLXNjcmlwdFxcclxcblxcclxcbiAgLy8gUm93IDlcXHJcXG4gICRsaXN0OiBhbGVydCBpbmZvICBub3RpY2UgaGVscCBjaGVjayAgYnVsbGV0ICByYWRpby1vZmYgIHJhZGlvLW9uICBwaW4tdyAgcGluLXM7XFxyXFxuICAkeDogMDtcXHJcXG5cXHJcXG4gIEBlYWNoICRpdGVtIGluICRsaXN0IHtcXHJcXG4gICAgJi5pY29ucy1jbC0jeyRpdGVtfSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHggKiAtMTZweCA5ICogLTE2cHhcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAkeDogJHgrMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vICBSb3cgMTBcXHJcXG4gICRsaXN0OiBwbGF5IHBhdXNlIHNlZWstbmV4dCAgc2Vlay1wcmV2ICBzZWVrLWVuZCAgc2Vlay1maXJzdCAgc3RvcCAgZWplY3QgIHZvbHVtZS1vZmYgIHZvbHVtZS1vbjtcXHJcXG4gICR4OiAwO1xcclxcblxcclxcbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xcclxcbiAgICAmLmljb25zLWNsLSN7JGl0ZW19IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkeCAqIC0xNnB4IDEwICogLTE2cHhcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAkeDogJHgrMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gLy8gdWktaWNvbi1wb3dlciAgdWktaWNvbi1zaWduYWwtZGlhZyAgdWktaWNvbi1zaWduYWwgIHVpLWljb24tYmF0dGVyeS0wICB1aS1pY29uLWJhdHRlcnktMSAgdWktaWNvbi1iYXR0ZXJ5LTIgIHVpLWljb24tYmF0dGVyeS0zXFxyXFxuICAvLyB1aS1pY29uLWNpcmNsZS1wbHVzICB1aS1pY29uLWNpcmNsZS1taW51cyAgdWktaWNvbi1jaXJjbGUtY2xvc2UgIHVpLWljb24tY2lyY2xlLXRyaWFuZ2xlLWUgIHVpLWljb24tY2lyY2xlLXRyaWFuZ2xlLXMgIHVpLWljb24tY2lyY2xlLXRyaWFuZ2xlLXcgIHVpLWljb24tY2lyY2xlLXRyaWFuZ2xlLW4gIHVpLWljb24tY2lyY2xlLWFycm93LWUgIHVpLWljb24tY2lyY2xlLWFycm93LXMgIHVpLWljb24tY2lyY2xlLWFycm93LXcgIHVpLWljb24tY2lyY2xlLWFycm93LW4gIHVpLWljb24tY2lyY2xlLXpvb21pbiAgdWktaWNvbi1jaXJjbGUtem9vbW91dCAgdWktaWNvbi1jaXJjbGUtY2hlY2tcXHJcXG4vLyB1aS1pY29uLWNpcmNsZXNtYWxsLXBsdXMgIHVpLWljb24tY2lyY2xlc21hbGwtbWludXMgIHVpLWljb24tY2lyY2xlc21hbGwtY2xvc2UgIHVpLWljb24tc3F1YXJlc21hbGwtcGx1cyAgdWktaWNvbi1zcXVhcmVzbWFsbC1taW51cyAgdWktaWNvbi1zcXVhcmVzbWFsbC1jbG9zZVxcclxcbi8vIHVpLWljb24tZ3JpcC1kb3R0ZWQtdmVydGljYWwgIHVpLWljb24tZ3JpcC1kb3R0ZWQtaG9yaXpvbnRhbCAgdWktaWNvbi1ncmlwLXNvbGlkLXZlcnRpY2FsICB1aS1pY29uLWdyaXAtc29saWQtaG9yaXpvbnRhbCAgdWktaWNvbi1ncmlwc21hbGwtZGlhZ29uYWwtc2UgIHVpLWljb24tZ3JpcC1kaWFnb25hbC1zZVxcclxcblxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2ljb25zLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaWNvbnMuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscywgdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVFBQUFBRHdDQU1BQUFEWVNVcjVBQUFCUzJsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU0x2dTc4aUlHbGtQU0pYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUWlQejRLUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpUVdSdlltVWdXRTFRSUVOdmNtVWdOUzQyTFdNeE5ESWdOemt1TVRZd09USTBMQ0F5TURFM0x6QTNMekV6TFRBeE9qQTJPak01SUNBZ0lDQWdJQ0FpUGdvZ1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNEtJQ0E4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBpSWk4K0NpQThMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K25oeGc3d0FBQUFSblFVMUJBQUN4and2OFlRVUFBQUFCYzFKSFFnQ3V6aHpwQUFBQkRsQk1WRVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJ4VVlXOUFBQUFXWFJTVGxNQUwyWktDRUJnR1JBelVCcS9JbU9lUlkrVVAyMmduQ0FwekEweEFTd1dWU2Vad3hOeGdDTTBSOCt2YUVnS2hSdzRVKzhFSGt0L0gxcENnb3lvb3Ywa0FsRURJVEpxdGJqZllvY0drVzg4c3ExOHZzYXJ5THlxcFptS0M3QUFBQTdtU1VSQlZIamE3VjBKWTl1MkRxWmN5NVFjSjI2enJabmpyazF6ckUzWDEvYjEySDF2YisrK1Qvei9QL0pJeVJJQjhMSmlSM1ppZnM0RlVRZnhDU1FCa0ZLRVNFaEkyQUpJa0R1dVAydzVBeXRYVDBKWWY0a1owRHYzU3dpelFOQ2dCUEQ2a0hKZEt2RVdBRnZGd0FYWThkV2Z2Wm9FdDBDYkFNbnJROHI1SGJRSTRJZmJGN0IybGoweVlOWGZyVUtnM0daUUJBMElRZzFpc2JNTTdyVGVCczR0Mks0aXY4RzJoUVR2c0cwQmdRcjBid0Z1VWdLM01HakJ6aDJzUGlCa2d2MzNBWnNlQlhnVDZuOFVTSTVRUWtKQ1FrSkNRc0xHUE1FTiswSFNpdGFBTys4eW9CQUFEL0JscDN5QWxSQlNaKytWRWtjRkxBS3NIZmp1TkZ5VTFnVTRBVElZUFBZYURGbjFkOWM0VU96SXFNakE0U0tTQW9TS0FPaXZnWU16QmVTdnNWd21IeUNEZk1iU0I1c1BoeVZjWno1QXhwcmd0b1hEdDMwVVNFaElTRWhJU0VqWW9LZTF1ak8vMHZsaHN3cllvVTlRb1NzRVN0RHQramFoRURrYmhMZlk2ckZpc0hlaGg0T3Z6SDJCWUFVY3BlSHJ1ODRRSXNncXQwNEdNUUpKaFlEdEFZNFQydlVCcjRMZ3VsN28rbmE0RERFQ0lCaHZnNGp3NnpvOHNBdFZjTEUzZUFrQ1laMHd5Si9iaUVNbUZHeEFUZ3RoakRzT0Q1dG8vQXBkMUl1MmNjY2FJZ2lYUjg3SWJnZEViMGprQWhEczkwQkVtbkQvbzhBMUh4OGZKaE1TRWhJU0VoSjJGYXN2UzEzUnpaQ08xZWorVTdyODBPaFVWZVR5M1NxdzFBWEM4VHdzVVFGVUx2RGsxQkplbmQ0WkFxR0xhM28vbGlJSVh0OFIzM0lGSXVtSFFFYWlubGcwRk5tMWRTeDJsMEVDSW12RDNXWVdZaURJbndTSW1aY3JJUVE4SEFZY3pRWXN5QXFISGRHNDljaUdXS0lDN2xKM2RBd1FpT2ZCWVFQK3d5MENyQnJZMWFQbHZJbkZDWEJYd0hzTGx5b0dDTWJQNFM1Q3VHYm9neFpFbWdCckl0RW00RzdsMHJ1SHRKZTgyQW9FMm9qRHdGZ1RGOVlNZllRQUdja0h5SEFmQU81K05YU1B3c1hoc2NUUmh1UGpMc0RTd3h4c2ZUNUFRbG9oa1pDUWtKQ1FJRHBFb0dzZGhzTURNemdqNkxYcUI1MG04TmQ4ZGVsNjJoMUhmODRqSklROXh5NFpGRFpYQlE2RklWUytPdjJ1NStlQjZCSjZPaHhpdDlRMUcyN3hCL1JZQ1BLelZnYkFaa0R3OXh1SXdQc0JYUGtNT2w4dGxwaCtGY0NPQmQvaGF5ZWdDVGQ5QkVpSWhNL082ZXRndVd0Mkdyd1c0ZHdaMWtpQmROVFFmaUlFL0hjOE50OXNKMFJFckErd0NPQk5ZdTNobmVuVWRETEJpczdvOC8yT2NuOFRkNWhFOEJHaUpUckY2eGdZYVVaSGh2SUI4ZWcxdGdnb2xuOEk1NCtTbjVPUWtKQ1FrTEJWS0c3NFFPWndPeUEwWGNXOTRhdm92MDFUQWM1cEZ1cDlGZEhaUUNoRVIyOVBicXNGdFBHV29hZUFBZ1ZETkw0cm9MWUF3QVNHSHptQXJacXRBdmZ5YlZ5dTlDZlJHZEFBdm00RE5Od1RiRG9jME92aXRvc0FnRWgxdERLRkk5WURLNVBoalEzeE50azJNWGx6TE1EYW42N1lxQW55V0FCZnI5RFF2Vlh6b2VFK0lIUjdtK2k4TUZiQyt3QndXdHgyallMQlVjRFo1ZE1CQW9MTHhJSXZwN2doZmtEMEJNWHkrOHBiR1AxMzBUOGhJU0VoWWJkUWFqK2hYSDcvTjBPRk4zM1ZicXdxTnhtSDl2Z3k0cm5CNDlwVktrUDY0K0l5ek1jYmtRRms0ZzA3QVRwaVg0bjd3aVB6UXZGb0FYWkFveEtjNS9rWU9YdlYzMlBMMVIzNG42WWVMVFFjRVgzYkduUFptdG5hWDVRM3RSNW1NQnhDTm1SdUd2aWpOM3Zxa2pwMkE5Y1YyeUF0ei9PaUJpTmtRZ2hBRElBMjBTRndDeGkxbnZTZVF1dEtRMk1CdnZudStuVG1oRU1ZbnAzOURKaUEyV3dXZmdKREFEZ0ZKd0g3aEVEUXFxTU5paENKQ2FrclNBay8xdkJaQUl3Qi9kSVhYdlFCZ0NwSWFueGNIWDVzQ0RqN2FmOHZoSUNIRHg5YXkrUDlNdHZBQ2RENmY0RUpvQ1lGU24rd0tTcFEyZzhlYW5ndFlFK3JEdU05a3djb0svdHZDZERuUnltMituVG1oS29KUEgrT204Qk1xRnVnZnJZSGxOWG5pZ1JvL1IrOSs4SlBnR1FiMUJZcDl5UUtZZURvNk1qZkI4Q2VZa0Rwandtb3Zsb0NxazRRRWZCV0gvMzJiYlBock80RXo3eHQza0dBc0orbm9BUjhqdk1UZzlFajlUUDNFV0E5b3ZKeEJYVEJrNU1UTUNacVdVQzVOeDZySDZZSlZMS2ZnSk1haXcweWc1K3liQTZaSkFTVXFCZjhkZlhCK2c0NUFVTkdBQkFMR0JqOUF3UzBwL3VvQWpPNTRkQm5BZVZlaFJJOE11ZytkZ3lrVFdaWk93cGt6ZlV6cndYWUJNU2FBQzZ2KzhCY1dBU1U5SHJNRDRBdlkzN0Frc05nWFo4QnpjR1VadWdHVytGSXB6ZkNsN2MzY0FJcUJ2SjFPbnJscUVKNTlWTXcxMldwUE80S05kNWZxLzRKQ1FrSkNWdU9GeS9DNVFVRTg5cjFmMzZLWmozYVlmQkpOVXc5d1JrSEhHTVBGdktBaFdmN1M4dEMvSUhWSncrT2F5cmFPbWFiMUxDTjlTOUx3OEJFZTVFWDJSZ0ZPNnJLZzhkZy9HeFAxZ1BwTHhBRDZtQU5OdE5FUFp0TXU0Skx5L1g5YURYSXRUTlh0R043b2JrZDRIdDZDbkRLOU5lTzBwSFJYL3ZtYmZRcjNZNFlDdWZoTitwemppdFVxdnRjb3YzSjNLRDErUHUveGFYNEo0NXZNeVZrUkJaVVBoNGVJMW5YZnpUeVZSQVd6ajVRZzBNV3B5bzdLb3pyV0djczJ1aktKb0NGd3lCZXZiMzc4dDNiTWI3L1kxR0taUW40RC94V2ZmNkJGZFN1UDVOeDhLRmk0MkhHZlY5QUxSaXZVR0hYZTlHSXFCK1l3UGxJY1ZBTGo1dU16V01mQVl0ZUFGbkFPZndkWGdEV0g2WHM0aGJ3TC9HTCtKOUpLWjB3Q3poaEZuRENMR0JFWWcvVkF1cE9xbzF2MmZXK3FxV3YyZ3BXd1R5T0hVRDNBV2kxZkpTQVYyOC8vMWg5M1BvdlBIVk1RQUZWMXFtUi93dGZxOC9mMElvSjBzWXIrV2Ntby9LcS9TcDg3Q0dnaWU0SzJrU28vUVI2ZVJpT3hSR0pGeGtCSldPWTZkK3VpS0FFSVBtelh4NU9IdjcxdzRXOEJ6UXBHcE5IOU83WlRXQWhZL0gwMU1qYTl0dDhwNU1BYXhSVTV5Z0NTOXA1a3Z2Sm9zSlBNQUhXZWdPVGNGTE5uWjB1TEF1bXZ4M0FGMlROMnQxdlZmYzMrUFp1UzRCcS8wWGdlRXZSZ2RXSnNrZDhlSktmK1FFODdjMWsxeHRnUXZLSTY4K0hRVkV2NmpMRjFZekFvMXo0TElnaHU0bXVYdDRod0NjK1VFSkNRa0xDQmpER2lXbnR5c0dKdGM4RDZxbGNJekk4RGVIemRhNSsrZ0ttNnVjVUQ4MFhlR3JpQy9qaGgrKytndzlSZGM2MS9oWFVIL04zOE9vVnZKc1RUN1FVUE4zUTVCdGFtVzhZTThjSDZUOFpqMThUQmpxOTd0OGVhTlc1TWhSdGdtSmd5cjN4SStONS9VcmpqOFlWblk3VkNVWldjRU9pVThjNlZEcVhhL1pScm1PcGdoMHpPVmdYbU9CS084WlRlQTFySTBDN1d1Z0lyWHYxVFEzQUVQRDlqdzhlL1BpOXFjOVlRRDdDTXp1Y0FMSmtCS3BrRkZyd1VJZzZWVkVZWDd2VStSaEV3RXM5VjRjdk9OV3Mrd2lJcktlM3A3SXlvRzFxV3NsVEhyeTBGYXBzZmI4OS9KNWVuSUhjVlJpeUJSbjArR29lRk8wQU92QlU4WnpBRmpBWTRQWHEyWHl1dzB0RGdOSmZqUDBaSUVmR3hSWHVVeFBIN3VhVTZWK1M2Y212WVY4QjdpRy9saHdQeDJFQ3p0U2ZaL3FyS2I2b0psK1BrQVd3NlBYbHk3MlhjN2hvVC9oYTEyNnlQZ0s0Qlh4VHlhZFVmNk5nTnExd1JBODNoS2xiZW54OFRBZ2diZjVJNFRQMXhSWThUTDE5d0h5dUd3RHVCRitQeDVNMWRvS3NEL2htMFFlY21neGNUc0xSdWE3dmtUbDhlZzRYaUFGOW9qUFU3VFhKbTBhL2p6NWFmREVEOGZZQjQzSStuOE1jQXNQZ3VrZUJVNTJZTmZYaG9kdDBNUGdLWFN4WFg0VmhBS3d3WGYrNTMyemd3MkJsRVJVOGZRQ01OVEFCN3BtQU5mb0JwMVZxdXZDa0QvZ2pac3BhWGhlNnAzelFsUDcrbGFTdmRSRlZyN0dRaHFWTzZaVkRjVlUvWVBNNE96dzh3eFowcnJrcUhoU2VoSSs5Y2pJaElTRmh0ZWdVcjQ2Kzg0SHVZajY0czBQNlB3TjQxZ3J2TjczdSt6dWovM090N3ZQbS9rTXowd1RHQm1Zd3d3Zjh6clhRYm4wcnoyWVYvN00rRFVBNW1vMEozRGNFM1BjNVFpNC9JamVVV0ZNUGZBT1hZYWJIOUZudy9OZHJBUHFhejNsc0UzcmRkOEUzNU1Zb0lnczN0ZngwK0pUT3pnWWVnT2lsQjlBaDlETnljVnFIQVo0WXEvV2ZFTnZQOGVwamUrbnVxQmhoL1o2cUgwL0pEck1ORXBBMzl6djNFNUN6Smc5d1dlQ3luTXdtMndRVXhHU3FoZVpERWs0VEFrcVl6V2I5ZWJwR1lUOEI5akVGc1gzU0thNXNBZjEyZ3BVQjFBL05WRG9jR2dJT3ZSWmdXMUR1Yi9LZCs0QitvelhlNmQwMTRsMXZKMGpFbkErS0s0OEN2YjVmYjJZVXJtdHcwSWdISXRBSGVFYkF0ZDJXVGZwRjcrbTBMTng3YjVOMVNHOVlURWhJU0VqWUllUVFFcTk5MEoza3d2SnpydFVWZmZ6WWNxY0RZaC9lTUtXQUVGQ1ZGWGlIZkZMb0gwRDVhMTh3VUlmT3B0eU9ySExtTytkV01WUXpaSDNHZzRRQ1NrQmQxdGE1dWoxS1BiNERJUUNYMndTNG52UzFSZWlYQUx3WW1CTlFwVDhXbGF4K1RhejU4UWtoWUJMTThQZzBKaUwwVFVDUEZyQVVBVDFiUUw5OWdDdWxzTkUrb09kUndNNTNiSGdVMkhrL0lDRWhJU0ZodHdFNy9SeFY4V2NCbjM1V0VFZmxZb2ZlazZ1Zkk0VlBjL1E4UTViZmN6eEEwZmdtL1AwSFhlV3R3eFQrcEFnUWFIV3labVZpTVdDOVRMNjhtcng5Qm5BcHhLZTV1TVJQVzArUFZFUkxuNjgxaWd5UGgrcXJYYjROeDNROXU1YUJ5a1A5R1c2cGUxc3UxczFmbUR1VWpVQ3Z0ai8zRUZDOUdrM3V5Zlp0ZXlDbDN0REllL3BqM3Irbnk5VVd1UWRiYkFFS2wvaU82MzVoQ2xUOWxvQVBhN1FtM2xIZU9reXFNWENFMXJ5b1lIUU1SMk1QQWJldUU4d0FMaTh1Y2JkZnB5TnlvT3JmM2dnMWU2YnV6N05NSkNRa0pDVHNJdmp6QVRHWkw2THFLbmU5M3FweURQejVnSmpNbDlGMWxidGViMVU1ZXYvTk9zRTd5OGg4SVdWWHVldjFWcFdqNE04SDNEY25hT1FEN1JzZUxPVEQ5bDFwOVZMYVE3TS9rb1czL0w0cHYrKzl2b0JnK2F6TzJ1Qnl3ZXN2OFBNT3dXd1lXeHpObDg1V3Z3NE84T3h3YkgrNzNOcmZUSkc3eXZIc21mczNrUHFJVHo3NVJORDZWRThrTDBzQStjTWg2OVo3d0Nvc0lMQy9zQlFLNzg4SWlOWUh2ejdlSmM5ci9kZEh3QWk5Zzg1QmdPdDNGNFdpMTNkWVNNZ0M5TnRHNXRDQmdIZ1QwRy9mNm1MaXNTWUNNUUtEVFVxNExBcnZQNi8xWDQ0QS9ueUFvMU5yT3NGRGJ5Y0ZYUFozcXM1T2tsK2ZkN0swdk9ISEorczJRSjkzQ0tIdllXelZZYlNySEVmZmpzeXFqbFJYT1k2K1hkbFZYZW11Y2tKQ1FrSkNRa0lzSEFDNE5ubjdDYUJ2YTR2THQ1QUFDQk5RZlVnRUhTWkFnTGhaQkZUL25pMGdNNEpBa01YVXRnd2lXVURxQTI0U0FicytDaVFrSkNRa0pDU3NHL0xtZUFMUlZaQlFkbC9vS3RuL0I5cnFleVhreWdUdyszMlQ5RitIQlhCOWI1VCsxQUtxNWUzVngwT0E2LzhONlAyNS9yZTJEeWdiVVAybHBiL2NHUXVvOTcrNStxOXFBVGRlLzFWSEFZLyt1K29IR1AxdmtSL1FpVTFwdmhNU3Roei9CL2gxT1dpeU1wc3dBQUFBQUVsRlRrU3VRbUNDXCIiLCJpbXBvcnQgJy4vaWNvbnMuc2Nzcyc7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdHZhciBleGVjT3B0aW9ucyA9IHsgaWQ6IG1vZHVsZUlkLCBtb2R1bGU6IG1vZHVsZSwgZmFjdG9yeTogX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0sIHJlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18gfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5pLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikgeyBoYW5kbGVyKGV4ZWNPcHRpb25zKTsgfSk7XG5cdG1vZHVsZSA9IGV4ZWNPcHRpb25zLm1vZHVsZTtcblx0ZXhlY09wdGlvbnMuZmFjdG9yeS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBleGVjT3B0aW9ucy5yZXF1aXJlKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBleGVjdXRpb24gaW50ZXJjZXB0b3Jcbl9fd2VicGFja19yZXF1aXJlX18uaSA9IFtdO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uaHUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGID0gKCkgPT4gKFwiSWNvbnMuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNvblwiKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMGFjMTIzNWVkNTNjZmMxZjI2OFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJJY29uczpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHQ7XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBjdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xudmFyIGluc3RhbGxlZE1vZHVsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmM7XG5cbi8vIG1vZHVsZSBhbmQgcmVxdWlyZSBjcmVhdGlvblxudmFyIGN1cnJlbnRDaGlsZE1vZHVsZTtcbnZhciBjdXJyZW50UGFyZW50cyA9IFtdO1xuXG4vLyBzdGF0dXNcbnZhciByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMgPSBbXTtcbnZhciBjdXJyZW50U3RhdHVzID0gXCJpZGxlXCI7XG5cbi8vIHdoaWxlIGRvd25sb2FkaW5nXG52YXIgYmxvY2tpbmdQcm9taXNlcztcblxuLy8gVGhlIHVwZGF0ZSBpbmZvXG52YXIgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnM7XG52YXIgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbl9fd2VicGFja19yZXF1aXJlX18uaG1yRCA9IGN1cnJlbnRNb2R1bGVEYXRhO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkucHVzaChmdW5jdGlvbiAob3B0aW9ucykge1xuXHR2YXIgbW9kdWxlID0gb3B0aW9ucy5tb2R1bGU7XG5cdHZhciByZXF1aXJlID0gY3JlYXRlUmVxdWlyZShvcHRpb25zLnJlcXVpcmUsIG9wdGlvbnMuaWQpO1xuXHRtb2R1bGUuaG90ID0gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG9wdGlvbnMuaWQsIG1vZHVsZSk7XG5cdG1vZHVsZS5wYXJlbnRzID0gY3VycmVudFBhcmVudHM7XG5cdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRvcHRpb25zLnJlcXVpcmUgPSByZXF1aXJlO1xufSk7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yQyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJID0ge307XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlcXVpcmUocmVxdWlyZSwgbW9kdWxlSWQpIHtcblx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cdGlmICghbWUpIHJldHVybiByZXF1aXJlO1xuXHR2YXIgZm4gPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuXHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG5cdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuXHRcdFx0XHR2YXIgcGFyZW50cyA9IGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cztcblx0XHRcdFx0aWYgKHBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG5cdFx0XHRcdFx0cGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuXHRcdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG5cdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuXHRcdFx0XHRcdHJlcXVlc3QgK1xuXHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG5cdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdCk7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVxdWlyZShyZXF1ZXN0KTtcblx0fTtcblx0dmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHJlcXVpcmVbbmFtZV07XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmVxdWlyZVtuYW1lXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cdGZvciAodmFyIG5hbWUgaW4gcmVxdWlyZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVxdWlyZSwgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKG5hbWUpKTtcblx0XHR9XG5cdH1cblx0Zm4uZSA9IGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0cmV0dXJuIHRyYWNrQmxvY2tpbmdQcm9taXNlKHJlcXVpcmUuZShjaHVua0lkKSk7XG5cdH07XG5cdHJldHVybiBmbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG1vZHVsZUlkLCBtZSkge1xuXHR2YXIgaG90ID0ge1xuXHRcdC8vIHByaXZhdGUgc3R1ZmZcblx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG5cdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG5cdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG5cdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG5cdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG5cdFx0X21haW46IGN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cdFx0X3JlcXVpcmVTZWxmOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IG1lLnBhcmVudHMuc2xpY2UoKTtcblx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IG1vZHVsZUlkO1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG5cdFx0fSxcblxuXHRcdC8vIE1vZHVsZSBBUElcblx0XHRhY3RpdmU6IHRydWUsXG5cdFx0YWNjZXB0OiBmdW5jdGlvbiAoZGVwLCBjYWxsYmFjaykge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHR9LFxuXHRcdGRlY2xpbmU6IGZ1bmN0aW9uIChkZXApIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG5cdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG5cdFx0fSxcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cdFx0aW52YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5fc2VsZkludmFsaWRhdGVkID0gdHJ1ZTtcblx0XHRcdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdFx0XHRjYXNlIFwiaWRsZVwiOlxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcblx0XHRcdFx0Y2FzZSBcImFwcGx5XCI6XG5cdFx0XHRcdFx0KHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChcblx0XHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBpZ25vcmUgcmVxdWVzdHMgaW4gZXJyb3Igc3RhdGVzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIE1hbmFnZW1lbnQgQVBJXG5cdFx0Y2hlY2s6IGhvdENoZWNrLFxuXHRcdGFwcGx5OiBob3RBcHBseSxcblx0XHRzdGF0dXM6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRpZiAoIWwpIHJldHVybiBjdXJyZW50U3RhdHVzO1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0dmFyIGlkeCA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblxuXHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuXHRcdGRhdGE6IGN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuXHR9O1xuXHRjdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG5cdHJldHVybiBob3Q7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXR1cyhuZXdTdGF0dXMpIHtcblx0Y3VycmVudFN0YXR1cyA9IG5ld1N0YXR1cztcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG5cdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbn1cblxuZnVuY3Rpb24gdHJhY2tCbG9ja2luZ1Byb21pc2UocHJvbWlzZSkge1xuXHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdHNldFN0YXR1cyhcInByZXBhcmVcIik7XG5cdFx0XHRibG9ja2luZ1Byb21pc2VzLnB1c2gocHJvbWlzZSk7XG5cdFx0XHR3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNldFN0YXR1cyhcInJlYWR5XCIpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0YmxvY2tpbmdQcm9taXNlcy5wdXNoKHByb21pc2UpO1xuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKSB7XG5cdGlmIChibG9ja2luZ1Byb21pc2VzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZuKCk7XG5cdHZhciBibG9ja2VyID0gYmxvY2tpbmdQcm9taXNlcztcblx0YmxvY2tpbmdQcm9taXNlcyA9IFtdO1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoYmxvY2tlcikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5T25VcGRhdGUpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG5cdH1cblx0c2V0U3RhdHVzKFwiY2hlY2tcIik7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0oKS50aGVuKGZ1bmN0aW9uICh1cGRhdGUpIHtcblx0XHRpZiAoIXVwZGF0ZSkge1xuXHRcdFx0c2V0U3RhdHVzKGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIik7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRzZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuXG5cdFx0dmFyIHVwZGF0ZWRNb2R1bGVzID0gW107XG5cdFx0YmxvY2tpbmdQcm9taXNlcyA9IFtdO1xuXHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoXG5cdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMpLnJlZHVjZShmdW5jdGlvbiAoXG5cdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRrZXlcblx0XHRcdCkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckNba2V5XShcblx0XHRcdFx0XHR1cGRhdGUuYyxcblx0XHRcdFx0XHR1cGRhdGUucixcblx0XHRcdFx0XHR1cGRhdGUubSxcblx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyxcblx0XHRcdFx0XHR1cGRhdGVkTW9kdWxlc1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdFx0XHR9LFxuXHRcdFx0W10pXG5cdFx0KS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmIChhcHBseU9uVXBkYXRlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkoYXBwbHlPblVwZGF0ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG5cblx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZE1vZHVsZXM7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJyZWFkeVwiKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0YXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKTtcblxuXHR2YXIgcmVzdWx0cyA9IGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLm1hcChmdW5jdGlvbiAoaGFuZGxlcikge1xuXHRcdHJldHVybiBoYW5kbGVyKG9wdGlvbnMpO1xuXHR9KTtcblx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSB1bmRlZmluZWQ7XG5cblx0dmFyIGVycm9ycyA9IHJlc3VsdHNcblx0XHQubWFwKGZ1bmN0aW9uIChyKSB7XG5cdFx0XHRyZXR1cm4gci5lcnJvcjtcblx0XHR9KVxuXHRcdC5maWx0ZXIoQm9vbGVhbik7XG5cblx0aWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG5cdFx0c2V0U3RhdHVzKFwiYWJvcnRcIik7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgZXJyb3JzWzBdO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG5cdHNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG5cblx0cmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRpZiAocmVzdWx0LmRpc3Bvc2UpIHJlc3VsdC5kaXNwb3NlKCk7XG5cdH0pO1xuXG5cdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2Vcblx0c2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cblx0dmFyIGVycm9yO1xuXHR2YXIgcmVwb3J0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG5cdH07XG5cblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuYXBwbHkpIHtcblx0XHRcdHZhciBtb2R1bGVzID0gcmVzdWx0LmFwcGx5KHJlcG9ydEVycm9yKTtcblx0XHRcdGlmIChtb2R1bGVzKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKG1vZHVsZXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuXHRpZiAoZXJyb3IpIHtcblx0XHRzZXRTdGF0dXMoXCJmYWlsXCIpO1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH0pO1xuXHR9XG5cblx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGxpc3QpIHtcblx0XHRcdG91dGRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBsaXN0O1xuXHRcdH0pO1xuXHR9XG5cblx0c2V0U3RhdHVzKFwiaWRsZVwiKTtcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xufVxuXG5mdW5jdGlvbiBhcHBseUludmFsaWRhdGVkTW9kdWxlcygpIHtcblx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdGlmICghY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMpIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdW5kZWZpbmVkO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIkljb25zXCI6IDBcbn07XG5cblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbnZhciBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0O1xudmFyIHdhaXRpbmdVcGRhdGVSZXNvbHZlcyA9IHt9O1xuZnVuY3Rpb24gbG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSByZXNvbHZlO1xuXHRcdC8vIHN0YXJ0IHVwZGF0ZSBjaHVuayBsb2FkaW5nXG5cdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaHUoY2h1bmtJZCk7XG5cdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWRcblx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGhvdCB1cGRhdGUgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQpO1xuXHR9KTtcbn1cblxuc2VsZltcIndlYnBhY2tIb3RVcGRhdGVJY29uc1wiXSA9IChjaHVua0lkLCBtb3JlTW9kdWxlcywgcnVudGltZSkgPT4ge1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0aWYoY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCkgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgY3VycmVudFVwZGF0ZVJ1bnRpbWUucHVzaChydW50aW1lKTtcblx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKCk7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHR9XG59O1xuXG52YXIgY3VycmVudFVwZGF0ZUNodW5rcztcbnZhciBjdXJyZW50VXBkYXRlO1xudmFyIGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGVSdW50aW1lO1xuZnVuY3Rpb24gYXBwbHlIYW5kbGVyKG9wdGlvbnMpIHtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikgZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtcjtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHVuZGVmaW5lZDtcblx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKHVwZGF0ZU1vZHVsZUlkKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG5cdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cblx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hhaW46IFtpZF0sXG5cdFx0XHRcdGlkOiBpZFxuXHRcdFx0fTtcblx0XHR9KTtcblx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuXHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuXHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFtb2R1bGUgfHxcblx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuXHRcdFx0KVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG5cdFx0XHRcdHZhciBwYXJlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbcGFyZW50SWRdO1xuXHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG5cdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcblx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcblx0XHRcdFx0cXVldWUucHVzaCh7XG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRpZDogcGFyZW50SWRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcblx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcblx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuXHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gYltpXTtcblx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcblx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuXHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG5cdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUobW9kdWxlKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyBtb2R1bGUuaWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcblx0XHQpO1xuXHR9O1xuXG5cdGZvciAodmFyIG1vZHVsZUlkIGluIGN1cnJlbnRVcGRhdGUpIHtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdFx0dmFyIG5ld01vZHVsZUZhY3RvcnkgPSBjdXJyZW50VXBkYXRlW21vZHVsZUlkXTtcblx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cblx0XHRcdHZhciByZXN1bHQ7XG5cdFx0XHRpZiAobmV3TW9kdWxlRmFjdG9yeSkge1xuXHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHMobW9kdWxlSWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0ID0ge1xuXHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG5cdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcblx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcblx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuXHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuXHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGVycm9yOiBhYm9ydEVycm9yXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9BcHBseSkge1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IG5ld01vZHVsZUZhY3Rvcnk7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG5cdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcblx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjdXJyZW50VXBkYXRlID0gdW5kZWZpbmVkO1xuXG5cdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cblx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuXHRmb3IgKHZhciBqID0gMDsgaiA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGorKykge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2pdO1xuXHRcdGlmIChcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXSAmJlxuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkICYmXG5cdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG5cdFx0XHRhcHBsaWVkVXBkYXRlW291dGRhdGVkTW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcblx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG5cdFx0XHQhX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdLmhvdC5fc2VsZkludmFsaWRhdGVkXG5cdFx0KSB7XG5cdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG5cdFx0XHRcdG1vZHVsZTogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0cmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdLmhvdC5fcmVxdWlyZVNlbGYsXG5cdFx0XHRcdGVycm9ySGFuZGxlcjogX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG5cblx0cmV0dXJuIHtcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHR9KTtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gdW5kZWZpbmVkO1xuXG5cdFx0XHR2YXIgaWR4O1xuXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG5cdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuXHRcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG5cdFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuXHRcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0ZGlzcG9zZUhhbmRsZXJzW2pdLmNhbGwobnVsbCwgZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJEW21vZHVsZUlkXSA9IGRhdGE7XG5cblx0XHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcblx0XHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcblx0XHRcdFx0ZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcblx0XHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcblx0XHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuXHRcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuXHRcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cblx0XHRcdHZhciBkZXBlbmRlbmN5O1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXBwbHk6IGZ1bmN0aW9uIChyZXBvcnRFcnJvcikge1xuXHRcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG5cdFx0XHRmb3IgKHZhciB1cGRhdGVNb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oYXBwbGllZFVwZGF0ZSwgdXBkYXRlTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW3VwZGF0ZU1vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJ1biBuZXcgcnVudGltZSBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRVcGRhdGVSdW50aW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lW2ldKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0dmFyIGFjY2VwdENhbGxiYWNrID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0aWYgKGFjY2VwdENhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGFjY2VwdENhbGxiYWNrKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGFjY2VwdENhbGxiYWNrKTtcblx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MucHVzaChkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBjYWxsYmFja3MubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3Nba10uY2FsbChudWxsLCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgbyA9IDA7IG8gPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBvKyspIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbb107XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGl0ZW0ucmVxdWlyZShtb2R1bGVJZCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9XG5cdH07XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkuanNvbnAgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGFwcGx5SGFuZGxlcnMpIHtcblx0aWYgKCFjdXJyZW50VXBkYXRlKSB7XG5cdFx0Y3VycmVudFVwZGF0ZSA9IHt9O1xuXHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSBbXTtcblx0XHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0fVxuXHRpZiAoIV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF07XG5cdH1cbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMuanNvbnAgPSBmdW5jdGlvbiAoXG5cdGNodW5rSWRzLFxuXHRyZW1vdmVkQ2h1bmtzLFxuXHRyZW1vdmVkTW9kdWxlcyxcblx0cHJvbWlzZXMsXG5cdGFwcGx5SGFuZGxlcnMsXG5cdHVwZGF0ZWRNb2R1bGVzTGlzdFxuKSB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0ge307XG5cdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gcmVtb3ZlZENodW5rcztcblx0Y3VycmVudFVwZGF0ZSA9IHJlbW92ZWRNb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcblx0XHRvYmpba2V5XSA9IGZhbHNlO1xuXHRcdHJldHVybiBvYmo7XG5cdH0sIHt9KTtcblx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0Y2h1bmtJZHMuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdGlmIChcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuXHRcdCkge1xuXHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHR9XG5cdH0pO1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yID0gZnVuY3Rpb24gKGNodW5rSWQsIHByb21pc2VzKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3MgJiZcblx0XHRcdFx0IV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuXHRcdFx0KSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpKTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIGZldGNoID09PSBcInVuZGVmaW5lZFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnQ6IG5lZWQgZmV0Y2ggQVBJXCIpO1xuXHRyZXR1cm4gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGKCkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0aWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHJldHVybjsgLy8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuXHRcdGlmKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVwZGF0ZSBtYW5pZmVzdCBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuLy8gbm8gZGVmZXJyZWQgc3RhcnR1cFxuXG4vLyBubyBqc29ucCBmdW5jdGlvblxuXG4vLyBubyBkZWZlcnJlZCBzdGFydHVwIiwiLy8gbW9kdWxlIGNhY2hlIGFyZSB1c2VkIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2ljb25zLmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "../../.yarn/cache/resizer-cl-npm-2.4.3-b618b20eb7-cacb0c49e5.zip/node_modules/resizer-cl/index.js":
/*!*********************************************************************************************************!*\
  !*** ../../.yarn/cache/resizer-cl-npm-2.4.3-b618b20eb7-cacb0c49e5.zip/node_modules/resizer-cl/index.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _src_resizer_js__WEBPACK_IMPORTED_MODULE_0__.Resizer)
/* harmony export */ });
/* harmony import */ var _src_resizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/resizer.js */ "../../.yarn/cache/resizer-cl-npm-2.4.3-b618b20eb7-cacb0c49e5.zip/node_modules/resizer-cl/src/resizer.js");



//window.Resizer = Resizer;


/***/ }),

/***/ "../../.yarn/cache/resizer-cl-npm-2.4.3-b618b20eb7-cacb0c49e5.zip/node_modules/resizer-cl/src/Options.js":
/*!***************************************************************************************************************!*\
  !*** ../../.yarn/cache/resizer-cl-npm-2.4.3-b618b20eb7-cacb0c49e5.zip/node_modules/resizer-cl/src/Options.js ***!
  \***************************************************************************************************************/
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
    options = options ? options : {};

    /// Options: vertical, horizontal, both
    this.resize = 'vertical';

    /// The resizing handle
    this.handle = 'bar';

    /// Range for grabbing
    this.grabSize = 10;

    /// Maximum speed we can resize in pixels per second
    this.maxSpeed = 1000;

    /// Use a mask (useful for iframes
    this.useMask = true;

    for(var property in options) {
        if(options.hasOwnProperty(property)) {
            if(!this.hasOwnProperty(property)) {
                throw new Error("Invalid option " + property);
            }
            this[property] = options[property];
        }
    }

}



/***/ }),

/***/ "../../.yarn/cache/resizer-cl-npm-2.4.3-b618b20eb7-cacb0c49e5.zip/node_modules/resizer-cl/src/resizer-actual.js":
/*!**********************************************************************************************************************!*\
  !*** ../../.yarn/cache/resizer-cl-npm-2.4.3-b618b20eb7-cacb0c49e5.zip/node_modules/resizer-cl/src/resizer-actual.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizerActual": () => (/* binding */ ResizerActual)
/* harmony export */ });

function ResizerActual(element, options) {
    element.classList.add('resizer');

    // Timeout period for animated resizing
    const timeoutPeriod = 20;

    //
    // Handle options
    //
    let grabSize = options.grabSize;

    let handle = options.handle;
    if(handle === 'bar') {
        element.style.resize = 'none';
        element.style.borderBottom = grabSize + 'px solid #18453B';
    } else if(handle === 'handle') {
        element.style.resize = 'vertical';
    } else if(handle === 'none') {

    } else {
        element.style.resize = 'none';
        element.style.borderBottom = handle;
    }

    /// Are mouse move event handlers installed?
    let installedMouseListeners = false;

    /// Are touch move event handlers installed?
    let installedTouchListeners = false;

    let mask = null;

    /// Get the minimum height and width properties
    const rect = element.getBoundingClientRect();
    let height = rect.height;
    let width = rect.width;

    let minHeight = getComputedStyle(element).minHeight;
    minHeight = minHeight.substr(0, minHeight.length - 2);
    let minWidth = getComputedStyle(element).minWidth;
    minWidth = minWidth.substr(0, minWidth.length - 2);

    let timer = null;

    let targetWidth = null;
    let targetHeight = null;

    function start() {
        // Install the mouse down and touch start listeners
        element.addEventListener('mousedown', mouseDownListener);
        element.addEventListener('touchstart', touchStartListener);

        // Install the cursor listener
        // This swaps the cursor when we hover the mouse over the grab bar
        element.addEventListener('mousemove', cursorListener);
    }

    function setTarget(tw, th) {
        targetWidth = tw;
        targetHeight = th;

        // If a timer is not active, create one.
        if(timer === null) {
            timerMover();
        }
    }

    function timerMover() {
        timer = null;

        const maxPixels = options.maxSpeed * timeoutPeriod / 1000;

        if(targetHeight !== null) {
            const currentHeight = +height;
            let diff = targetHeight - currentHeight;

            if(Math.abs(diff) > maxPixels) {
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

        if(targetWidth !== null) {
            const currentWidth = +width;
            let diff = targetWidth - currentWidth;

            if(Math.abs(diff) > maxPixels) {
                diff = diff < 0 ? -maxPixels : maxPixels;
                width = currentWidth + diff;

                element.style.width = '' + width + 'px';
            } else {
                // Not rate limited
                width = targetWidth;
                element.style.width = '' + width + 'px';
                targetWidth = null;
            }
        }

        if(targetHeight !== null || targetWidth !== null) {
            timer = setTimeout(timerMover, timeoutPeriod);
        }

    }

    let initialX, initialY;
    let initialWidth, initialHeight;
    let grabType = null;

    /**
     * Start the resizing on a mouse down or touch
     * @param x Mouse or touch X in pixels
     * @param y Mouse or touch Y in pixels
     */
    function moveStart(x, y) {
        initialX = x;
        initialY = y;
        let rect = element.getBoundingClientRect();
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
        let dx = x - initialX;
        let dy = y - initialY;

        let newWidth = null;
        let newHeight = null;

        if(grabType === 'horizontal' || grabType === 'both') {
            // Compute a desired new width
            newWidth = initialWidth + dx;
            if (newWidth < minWidth) {
                newWidth = minWidth;
            }

        }

        if(grabType === 'vertical' || grabType === 'both') {
            const wasHeight = element.offsetHeight;

            // Compute a desired new height
            newHeight = initialHeight + dy;
            if (newHeight < minHeight) {
                newHeight = minHeight;
            }

        }

        setTarget(newWidth, newHeight);
    }

    //
    // Mouse Handling
    //

    function mouseDownListener(e) {
        const x = e.pageX;
        const y = e.pageY;

        grabType = onHandle(x, y, false);
        if(grabType !== null) {
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
    }

    //
    // Touch Handling
    //

    function touchStartListener(e) {
        const x = e.touches[0].pageX;
        const y = e.touches[0].pageY;

        grabType = onHandle(x, y, true);
        if(grabType !== null) {
            e.stopPropagation();
            e.preventDefault();

            moveStart(x, y);

            installMask();
            installTouchHandlers();
        }
    }

    function touchMoveListener(e) {
        e.stopPropagation();
        //e.preventDefault();

        const x = e.touches[0].pageX;
        const y = e.touches[0].pageY;

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
    }

    //
    // Mask
    //

    function installMask() {
        if(!options.useMask) {
            return;
        }

        // Ensure none currently exists
        removeMask();

        let body = document.querySelector('body');
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
        if(timer !== null) {
            clearTimeout(timer);
            timer = null;
        }

        removeHandlers();
        removeMask();
    }

    function removeHandlers() {
        if(installedMouseListeners) {
            document.removeEventListener('mousemove', mouseMoveListener);
            document.removeEventListener('mouseup', mouseUpListener);
            installedMouseListeners = false;
        }

        if(installedTouchListeners) {
            document.removeEventListener('touchmove', touchMoveListener);
            document.removeEventListener('touchend', touchEndListener);
            document.removeEventListener('touchcancel', touchEndListener);
            installedTouchListeners = false;
        }
    }

    function removeMask() {
        if(mask !== null) {
            const body = document.querySelector('body');
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
        let rect = element.getBoundingClientRect();

        const slop = touch ? 10 : 0;

        let bottom = rect.bottom + window.pageYOffset;
        let vert = y >= bottom - grabSize - slop;

        let right = rect.right + window.pageXOffset;
        let horz = x >= right - grabSize - slop;

        if(options.resize === 'both') {
            if(vert && horz) {
                return 'both';
            }
            if(vert) {
                return 'vertical';
            }

            if(horz) {
                return 'horizontal';
            }
        }

        if((options.resize === 'both' || options.resize === 'vertical') && vert) {
            return 'vertical';
        }

        if((options.resize === 'both' || options.resize === 'horizontal') && horz) {
            return 'horizontal';
        }

        return null;
    }



    let cursor = 0;

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

/***/ "../../.yarn/cache/resizer-cl-npm-2.4.3-b618b20eb7-cacb0c49e5.zip/node_modules/resizer-cl/src/resizer.js":
/*!***************************************************************************************************************!*\
  !*** ../../.yarn/cache/resizer-cl-npm-2.4.3-b618b20eb7-cacb0c49e5.zip/node_modules/resizer-cl/src/resizer.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Resizer": () => (/* binding */ Resizer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resizer_actual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resizer-actual */ "../../.yarn/cache/resizer-cl-npm-2.4.3-b618b20eb7-cacb0c49e5.zip/node_modules/resizer-cl/src/resizer-actual.js");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options */ "../../.yarn/cache/resizer-cl-npm-2.4.3-b618b20eb7-cacb0c49e5.zip/node_modules/resizer-cl/src/Options.js");
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
const Resizer = function(sel, options) {
    options = new _Options__WEBPACK_IMPORTED_MODULE_1__.Options(options);

    if(typeof sel === "string") {
        var elements = document.querySelectorAll(sel);
        for(var i=0; i<elements.length; i++) {
            new _resizer_actual__WEBPACK_IMPORTED_MODULE_0__.ResizerActual(elements[i], options);
        }
    } else if(sel.nodeType) {
        new _resizer_actual__WEBPACK_IMPORTED_MODULE_0__.ResizerActual(sel, options);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Resizer);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
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
/******/ 		__webpack_require__.h = () => ("f6e6c2dac1258de40a41")
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
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
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
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"Dialog": 0
/******/ 		};
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
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
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
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
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
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
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
/******/ 										reportError(err);
/******/ 									}
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RpYWxvZy8uL2luZGV4LmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9Cb2R5LmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9Cb3R0b20uanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL0RPTS9Ub29scy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9zcmMvRGlhbG9nLmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9NYXNrLmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9NZXNzYWdlQm94LmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9PcHRpb25zLmpzIiwid2VicGFjazovL0RpYWxvZy8uL3NyYy9UaXRsZUJhci5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi9zcmMvX2RpYWxvZy5zY3NzIiwid2VicGFjazovL0RpYWxvZy8uLi8uLi8ueWFybi8kJHZpcnR1YWwvY3NzLWxvYWRlci12aXJ0dWFsLWJmMDE0YTEyNTEvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS01LjIuNi0xMThjNmQ0MDllLWI5ZTVhMzIyNDYuemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4uLy4uLy55YXJuLyQkdmlydHVhbC9jc3MtbG9hZGVyLXZpcnR1YWwtYmYwMTRhMTI1MS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTUuMi42LTExOGM2ZDQwOWUtYjllNWEzMjI0Ni56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4vc3JjL19kaWFsb2cuc2Nzcz9kNDI5Iiwid2VicGFjazovL0RpYWxvZy8uLi8uLi8ueWFybi8kJHZpcnR1YWwvc3R5bGUtbG9hZGVyLXZpcnR1YWwtMzM2MmMyN2RkOC8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMi4wLjAtYjlhNWM0YTJhYS1mZmMzMDU0ODgyLnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4uLy4uLy55YXJuL2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjE0LjYtMzI3MjAxMzI5Ny1kZDkzMWY2ZWYxLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL0RpYWxvZy8uLi8uLi8ueWFybi9jYWNoZS9pY29ucy1jbC1ucG0tMS4xLjMtNDI2ZWFhYzA3ZC03YjBjNDU2YTgxLnppcC9ub2RlX21vZHVsZXMvaWNvbnMtY2wvZGlzdC9pY29ucy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi4vLi4vLnlhcm4vY2FjaGUvcmVzaXplci1jbC1ucG0tMi40LjMtYjYxOGIyMGViNy1jYWNiMGM0OWU1LnppcC9ub2RlX21vZHVsZXMvcmVzaXplci1jbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi4vLi4vLnlhcm4vY2FjaGUvcmVzaXplci1jbC1ucG0tMi40LjMtYjYxOGIyMGViNy1jYWNiMGM0OWU1LnppcC9ub2RlX21vZHVsZXMvcmVzaXplci1jbC9zcmMvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9EaWFsb2cvLi4vLi4vLnlhcm4vY2FjaGUvcmVzaXplci1jbC1ucG0tMi40LjMtYjYxOGIyMGViNy1jYWNiMGM0OWU1LnppcC9ub2RlX21vZHVsZXMvcmVzaXplci1jbC9zcmMvcmVzaXplci1hY3R1YWwuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nLy4uLy4uLy55YXJuL2NhY2hlL3Jlc2l6ZXItY2wtbnBtLTIuNC4zLWI2MThiMjBlYjctY2FjYjBjNDllNS56aXAvbm9kZV9tb2R1bGVzL3Jlc2l6ZXItY2wvc3JjL3Jlc2l6ZXIuanMiLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgdXBkYXRlIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrL3J1bnRpbWUvZ2V0IHVwZGF0ZSBtYW5pZmVzdCBmaWxlbmFtZSIsIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovL0RpYWxvZy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9EaWFsb2cvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vRGlhbG9nL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJEaWFsb2ciLCJNZXNzYWdlQm94IiwiQm9keSIsImRpYWxvZyIsInBhcmVudERpdiIsIm9wdGlvbnMiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJUb29scyIsImNvbnRlbnQiLCJhcHBlbmRDaGlsZCIsIkJvdHRvbSIsImluaXRpYWxpemUiLCJidXR0b25zIiwiYWRkT2siLCJmb3JFYWNoIiwiaXRlbSIsImFkZEJ1dHRvbiIsImJ1dHRvbiIsInR5cGUiLCJpbm5lckhUTUwiLCJvbmNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVuZGVmaW5lZCIsImNsaWNrIiwiY2xvc2UiLCJmb2N1cyIsImNvbnRlbnRzIiwiYWRkQ2xhc3MiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiYWRkQ2xhc3NlcyIsImNsYXNzZXMiLCJzcGxpdCIsImNscyIsImNyZWF0ZUNsYXNzZWREaXYiLCJhZGRDb250ZW50IiwiaXNTdHJpbmciLCJpc0VsZW1lbnQiLCJ2YWwiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJub2RlVmFsdWUiLCJPcHRpb25zIiwiYm9keSIsIm1hc2siLCJib3R0b20iLCJmb3JtIiwiZGVmaW5lUHJvcGVydGllcyIsImdldCIsInpJbmRleCIsInN0eWxlIiwicGFyZW50IiwicXVlcnlTZWxlY3RvciIsImluc3RhbGxSZXNpemFibGUiLCJjb250YWluZXIiLCJUaXRsZUJhciIsIk1hc2siLCJwbGFjZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlkb3duIiwia2V5Q29kZSIsInN0b3BQcm9wYWdhdGlvbiIsInJlc2l6ZSIsInJzT3B0aW9ucyIsImdyYWJTaXplIiwiUmVzaXplciIsInRvUHgiLCJwYXJlbnRXaWQiLCJwYXJlbnRIaXQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImhlaWdodCIsIndpZHRoIiwidG9wIiwibGVmdCIsInJlbW92ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtb2RhbCIsInBvc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwidGl0bGUiLCJtZXNzYWdlIiwiYnV0dG9uMSIsImJ1dHRvbjIiLCJPS0NBTkNFTCIsIk9LIiwidGl0bGVCYXJCdXR0b25zIiwidGl0bGVCYXJBZGRDbGFzcyIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJFcnJvciIsImluc3RhbGxlZE1vdmVIYW5kbGVycyIsImluc3RhbGxlZFRvdWNoSGFuZGxlcnMiLCJpbml0aWFsWCIsImluaXRpYWxZIiwiaW5pdGlhbFBvc2l0aW9uWCIsImluaXRpYWxQb3NpdGlvblkiLCJodG1sIiwiYWRkQ2xvc2UiLCJhZGRDdXN0b20iLCJoMSIsIm1vdXNlRG93bkxpc3RlbmVyIiwidG91Y2hTdGFydExpc3RlbmVyIiwibW92ZVRvIiwieCIsInkiLCJkeCIsImR5IiwibmV3UG9zaXRpb25YIiwibmV3UG9zaXRpb25ZIiwiaW5zdGFsbE1vdXNlSGFuZGxlcnMiLCJyZW1vdmVIYW5kbGVycyIsIm1vdXNlTW92ZUxpc3RlbmVyIiwibW91c2VVcExpc3RlbmVyIiwicGFnZVgiLCJwYWdlWSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlIiwiaW5zdGFsbFRvdWNoSGFuZGxlcnMiLCJ0b3VjaE1vdmVMaXN0ZW5lciIsInRvdWNoRW5kTGlzdGVuZXIiLCJ0b3VjaGVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsOERBQUEsR0FBb0JDLHVEQUFwQjtBQUVBLGlFQUFlRCxtREFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR08sSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBU0MsTUFBVCxFQUFpQkMsU0FBakIsRUFBNEI7QUFDNUMsTUFBSUMsT0FBTyxHQUFHRixNQUFNLENBQUNFLE9BQXJCO0FBRUEsTUFBSUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBRixLQUFHLENBQUNHLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixnQkFBbEI7QUFFQUMsK0RBQUEsQ0FBaUJMLEdBQWpCLEVBQXNCRCxPQUFPLENBQUNPLE9B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QixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFr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QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsS0FBSSxHQUFHLGdDQUFtQixNQUFNLENBQUM7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztB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QUFnQjtXQUNuQztXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7O1dBRUg7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0EsR0FBRzs7V0FFSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGdCQUFnQixxQ0FBcUM7V0FDckQ7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMOztXQUVBO1dBQ0E7V0FDQSxJQUFJO1dBQ0osR0FBRztXQUNILEVBQUU7V0FDRjs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0EsRUFBRTtXQUNGOztXQUVB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QU07V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsUUFBUTtXQUNSO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFLElBQUk7V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxxQ0FBcUM7V0FDckM7V0FDQTtXQUNBLEVBQUU7V0FDRjs7V0FFQTs7V0FFQSxvQjs7Ozs7VUM1ZkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRGlhbG9nXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkRpYWxvZ1wiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImltcG9ydCAnLi9zcmMvcG9seWZpbGxzL2FsbC5qcyc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9zcmMvRGlhbG9nLmpzJztcclxuaW1wb3J0IE1lc3NhZ2VCb3ggZnJvbSAnLi9zcmMvTWVzc2FnZUJveC5qcyc7XHJcbmltcG9ydCAnLi9zcmMvX2RpYWxvZy5zY3NzJztcclxuaW1wb3J0ICdpY29ucy1jbCc7XHJcblxyXG5EaWFsb2cuTWVzc2FnZUJveCA9IE1lc3NhZ2VCb3g7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaWFsb2c7XHJcbmV4cG9ydCB7RGlhbG9nfTtcclxuXHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBNaWRkbGUgc2VjdGlvbiBvZiBkaWFsb2cgYm94XHJcbiAqL1xyXG5cclxuaW1wb3J0IFRvb2xzIGZyb20gJy4vRE9NL1Rvb2xzLmpzJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQm9keSA9IGZ1bmN0aW9uKGRpYWxvZywgcGFyZW50RGl2KSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGRpYWxvZy5vcHRpb25zO1xyXG5cclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctY2wtYm9keScpO1xyXG5cclxuICAgIFRvb2xzLmFkZENvbnRlbnQoZGl2LCBvcHRpb25zLmNvbnRlbnQpO1xyXG5cclxuICAgIC8vIGRpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2RpYWxvZy1jbC1ib2R5Jywgb3B0aW9ucy5jb250ZW50KTtcclxuICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgIHRoaXMuZGl2ID0gZGl2O1xyXG59XHJcbiIsImltcG9ydCBUb29scyBmcm9tICcuL0RPTS9Ub29scyc7XHJcblxyXG4vKipcclxuICogVGhlIGJvdHRvbSBidXR0b25zIHNlY3Rpb24gb2YgdGhlIGRpYWxvZyBib3hcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5sZXQgQm90dG9tID0gZnVuY3Rpb24oZGlhbG9nLCBwYXJlbnREaXYpIHtcclxuICAgIGxldCBvcHRpb25zID0gZGlhbG9nLm9wdGlvbnM7XHJcblxyXG4gICAgbGV0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gbGV0IGh0bWwgPSBgPGJ1dHRvbiBjbGFzcz1cImNsLWRpYWxvZy1idG5cIj5PazwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJjbC1kaWFsb2ctYnRuXCI+Q2FuY2VsPC9idXR0b24+YDtcclxuICAgICAgICBsZXQgZGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignY2wtZGlhbG9nLWJvdHRvbScpO1xyXG4gICAgICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICBpZihvcHRpb25zLmJ1dHRvbnMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgYWRkT2soZGl2KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcHRpb25zLmJ1dHRvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWRkQnV0dG9uKGRpdiwgaXRlbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRPayhkaXYsIGl0ZW0pIHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLnR5cGUgPSAnc3VibWl0JztcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ09rJztcclxuICAgICAgICBidXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZihpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbS5jbGljayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsaWNrKGRpYWxvZyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uLmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEJ1dHRvbihkaXYsIGl0ZW0pIHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLnR5cGUgPSAnc3VibWl0JztcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gaXRlbS5jb250ZW50cztcclxuICAgICAgICBidXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZihpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbS5jbGljayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsaWNrKGRpYWxvZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGl0ZW0uY2xhc3MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChpdGVtLmNsYXNzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGl0ZW0uZm9jdXMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgYnV0dG9uLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKTtcclxuXHJcbiAgICB0aGlzLmRlZmF1bHQgPSBmdW5jdGlvbigpIHtcclxuXHQgICAgb3B0aW9ucy5idXR0b25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdCAgICBpZihpdGVtLmRlZmF1bHQgPT09IHRydWUgJiYgaXRlbS5jbGljayAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdCAgICBpdGVtLmNsaWNrKGRpYWxvZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHQgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvdHRvbTtcclxuXHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBDb252ZW5pZW5jZSBmdW5jdGlvbnMgZm9yIHRoZSBET00uXHJcbiAqIFRvb2xzIHRoYXQgYXZvaWQgaGF2aW5nIHRvIGhhdmUgalF1ZXJ5IGluc3RhbGxlZC5cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgVG9vbHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgYSBjbGFzcyB0byBhbiBlbGVtZW50XHJcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdG8gYWRkIHRvXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUgQ2xhc3MgdG8gYWRkXHJcbiAqL1xyXG5Ub29scy5hZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcclxufVxyXG5cclxuVG9vbHMuYWRkQ2xhc3NlcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzZXMpIHtcclxuICAgIGlmKGNsYXNzZXMgPT09IHVuZGVmaW5lZCB8fCBjbGFzc2VzID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKChjbHMpID0+IHtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyhlbGVtZW50LCBjbHMpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBESVYgd2l0aCBhIHByb3ZpZGVkIGNsYXNzIG5hbWUuXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUgQ2xhc3MgdG8gYWRkIHRvIHRoZSBkaXZcclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudCB0byBwbGFjZSBpbiB0aGUgZGl2LiBIVE1MIG9yIEVsZW1lbnRcclxuICogQHJldHVybnMge0VsZW1lbnR9IENyZWF0ZWQgRE9NIEVsZW1lbnRcclxuICovXHJcblRvb2xzLmNyZWF0ZUNsYXNzZWREaXYgPSBmdW5jdGlvbihjbGFzc05hbWUsIGNvbnRlbnQpIHtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIFRvb2xzLmFkZENsYXNzKGRpdiwgY2xhc3NOYW1lKTtcclxuICAgIFRvb2xzLmFkZENvbnRlbnQoZGl2LCBjb250ZW50KTtcclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgY29udGVudCB0byBhbiBlbGVtZW50LlxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGFkZCB0b1xyXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50LiBDYW4gYmUgSFRNTCBvciBhbiBFbGVtZW50LlxyXG4gKi9cclxuVG9vbHMuYWRkQ29udGVudCA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNvbnRlbnQpIHtcclxuICAgIGlmKFRvb2xzLmlzU3RyaW5nKGNvbnRlbnQpKSB7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gY29udGVudDtcclxuICAgIH0gZWxzZSBpZihUb29scy5pc0VsZW1lbnQoY29udGVudCkpIHtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Ub29scy5pc1N0cmluZyA9IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8ICgoISF2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBTdHJpbmddJyk7XHJcbn1cclxuXHJcblRvb2xzLmlzRWxlbWVudCA9IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgcmV0dXJuIHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCAmJiB2YWwubm9kZVZhbHVlICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xzO1xyXG5cclxuIiwiaW1wb3J0IHtPcHRpb25zfSBmcm9tICcuL09wdGlvbnMuanMnO1xyXG5pbXBvcnQge1RpdGxlQmFyfSBmcm9tICcuL1RpdGxlQmFyJztcclxuaW1wb3J0IHtCb2R5fSBmcm9tICcuL0JvZHkuanMnO1xyXG5pbXBvcnQgQm90dG9tIGZyb20gJy4vQm90dG9tLmpzJztcclxuaW1wb3J0IFRvb2xzIGZyb20gJy4vRE9NL1Rvb2xzLmpzJztcclxuaW1wb3J0IHtNYXNrfSBmcm9tICcuL01hc2suanMnO1xyXG5cclxuaW1wb3J0IFJlc2l6ZXIgZnJvbSAncmVzaXplci1jbCc7XHJcblxyXG4vKipcclxuICogRmxleGlibGUgYW5kIGNvbmZpZ3VyYWJsZSBkaWFsb2cgYm94IG9iamVjdFxyXG4gKiBAY29uc3RydWN0b3JcclxuICpcclxuICogQHZlcnNpb24gMS4wLjQgVG91Y2ggc3VwcG9ydCBmb3IgdGl0bGUgYmFyIGRyYWdnaW5nXHJcbiAqIEBwcm9wZXJ0eSB7ZWxlbWVudH0gZm9ybSBHZXQgdGhlIGZvcm0gRE9NIGVsZW1lbnQgKGlmIHVzZWQpXHJcbiAqL1xyXG5sZXQgRGlhbG9nID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IG5ldyBPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHJcbiAgICBsZXQgYm9keSA9IG51bGwsIG1hc2sgPSBudWxsLCBib3R0b20gPSBudWxsO1xyXG4gICAgbGV0IGZvcm0gPSBudWxsO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBmb3JtOiB7Z2V0OiBmdW5jdGlvbigpIHtyZXR1cm4gZm9ybX19XHJcbiAgICB9KVxyXG5cclxuICAgIGxldCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIERpYWxvZy56SW5kZXggKz0gMjtcclxuICAgICAgICB0aGlzLnpJbmRleCA9IERpYWxvZy56SW5kZXg7XHJcblxyXG4gICAgICAgIGxldCBkaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdkaWFsb2ctY2wnKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzc2VzKGRpdiwgb3B0aW9ucy5hZGRDbGFzcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZGl2ID0gZGl2O1xyXG4gICAgICAgIGRpdi5zdHlsZS56SW5kZXggPSB0aGlzLnpJbmRleDtcclxuXHJcbiAgICAgICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgaW5zdGFsbFJlc2l6YWJsZShkaXYpO1xyXG5cclxuICAgICAgICBsZXQgY29udGFpbmVyID0gZGl2O1xyXG5cclxuICAgICAgICBpZihvcHRpb25zLmZvcm0pIHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBvcHRpb25hbCBzdXJyb3VuZGluZyBmb3JtXHJcbiAgICAgICAgICAgIGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGZvcm07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXcgVGl0bGVCYXIodGhpcywgY29udGFpbmVyKTtcclxuICAgICAgICBib2R5ID0gbmV3IEJvZHkodGhpcywgY29udGFpbmVyKTtcclxuICAgICAgICBpZihvcHRpb25zLmJ1dHRvbnMgIT09IGZhbHNlKSB7XHJcblx0ICAgICAgICBib3R0b20gPSBuZXcgQm90dG9tKHRoaXMsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hc2sgPSBuZXcgTWFzayh0aGlzKTtcclxuXHJcbiAgICAgICAgcGxhY2UoZGl2LCBvcHRpb25zLnBhcmVudCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlkb3duLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBrZXlkb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgaW5zdGFsbFJlc2l6YWJsZSA9IChkaXYpID0+IHtcclxuICAgICAgICBpZihvcHRpb25zLnJlc2l6ZSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIGxldCByc09wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAncmVzaXplJzogb3B0aW9ucy5yZXNpemUsXHJcbiAgICAgICAgICAgICAgICAnaGFuZGxlJzogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgJ2dyYWJTaXplJzogb3B0aW9ucy5ncmFiU2l6ZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbmV3IFJlc2l6ZXIoZGl2LCByc09wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gdG9QeCh2YWwpIHtcclxuICAgICAgICByZXR1cm4gJycgKyB2YWwgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGxhY2UgdGhlIGRpYWxvZyBib3ggY2VudGVyZWQgaW4gdGhlIHBhcmVudC5cclxuICAgICAqIEBwYXJhbSBkaXYgRGlhbG9nIGJveCBkaXZcclxuICAgICAqIEBwYXJhbSBwYXJlbnQgUGFyZW50IGRpdlxyXG4gICAgICovXHJcbiAgICBjb25zdCBwbGFjZSA9IChkaXYsIHBhcmVudCkgPT4ge1xyXG4gICAgICAgIGxldCBwYXJlbnRXaWQ7XHJcbiAgICAgICAgbGV0IHBhcmVudEhpdDtcclxuXHJcbiAgICAgICAgaWYocGFyZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHBhcmVudFdpZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgICAgICBwYXJlbnRIaXQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGFyZW50V2lkID0gcGFyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICBwYXJlbnRIaXQgPSBwYXJlbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGRpdi5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gZGl2Lm9mZnNldFdpZHRoO1xyXG5cclxuICAgICAgICBsZXQgdG9wID0gcGFyZW50SGl0LzIgLSBoZWlnaHQvMjtcclxuICAgICAgICBpZih0b3AgPCAxMCkge1xyXG4gICAgICAgICAgICB0b3AgPSAxMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsZWZ0ID0gcGFyZW50V2lkLzIgLSB3aWR0aC8yO1xyXG4gICAgICAgIGlmKGxlZnQgPCAwKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSB0b1B4KGxlZnQpO1xyXG4gICAgICAgIGRpdi5zdHlsZS50b3AgPSB0b1B4KHRvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpO1xyXG5cclxuICAgIHRoaXMuYWRkQ29udGVudCA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcclxuICAgICAgICBUb29scy5hZGRDb250ZW50KGJvZHkuZGl2LCBjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsb3NlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbWFzay5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmRpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZGl2KTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93biwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG4gICAgICogQ2FsbGluZyBpcyBlcXVpdmFsZW50IHRvIHByZXNzaW5nIHRoZSBmaXJzdCBkZWZhdWx0IGJ1dHRvblxyXG5cdCAqL1xyXG5cdHRoaXMuZGVmYXVsdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKGJvdHRvbSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBib3R0b20uZGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuRGlhbG9nLnpJbmRleCA9IDEwMDAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nO1xyXG5cclxuIiwiLyoqXHJcbiAqIE1hc2sgdGhhdCBhbGxvd3MgdGhlIGRpYWxvZyBib3ggdG8gYmUgbW9kYWwuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFRvb2xzIGZyb20gJy4vRE9NL1Rvb2xzLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBNYXNrID0gZnVuY3Rpb24oZGlhbG9nKSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGRpYWxvZy5vcHRpb25zO1xyXG5cclxuICAgIGxldCBtYXNrID0gbnVsbDtcclxuXHJcbiAgICBpZihvcHRpb25zLm1vZGFsKSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgbWFzayA9ICBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdtYXNrJyk7IC8vIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBtYXNrLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICBtYXNrLnN0eWxlLmxlZnQgPSAwO1xyXG4gICAgICAgIG1hc2suc3R5bGUudG9wID0gMDtcclxuICAgICAgICBtYXNrLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgbWFzay5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgbWFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgIG1hc2suc3R5bGUuekluZGV4ID0gZGlhbG9nLnpJbmRleCAtIDE7XHJcblxyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZihtYXNrICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1hc2spO1xyXG4gICAgICAgICAgICBtYXNrID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8qKlxyXG4gKiBIYW5keSBTaW1wbGUgTWVzc2FnZSBCb3hcclxuICovXHJcblxyXG5pbXBvcnQgRGlhbG9nIGZyb20gJy4vRGlhbG9nLmpzJztcclxuXHJcbmxldCBNZXNzYWdlQm94ID0gZnVuY3Rpb24odGl0bGUsIG1lc3NhZ2UsIHR5cGUsIGJ1dHRvbjEsIGJ1dHRvbjIpIHtcclxuICAgIC8vIERlZmF1bHQ6IE9LXHJcbiAgICBsZXQgYnV0dG9ucyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnRlbnRzOiAnT2snLFxyXG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oZGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICBpZihidXR0b24xICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24xKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2ZvY3VzJzogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgaWYodHlwZSA9PT0gTWVzc2FnZUJveC5PS0NBTkNFTCkge1xyXG4gICAgICAgIGJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRzOiAnT2snLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKGRpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGJ1dHRvbjEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24xKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdmb2N1cyc6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGVudHM6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKGRpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGJ1dHRvbjIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgICAgbGV0IGRpYWxvZyA9IG5ldyBEaWFsb2coe1xyXG4gICAgICAgICAgJ3RpdGxlJzogdGl0bGUsXHJcbiAgICAgICAgICAnY29udGVudCc6ICc8ZGl2IGNsYXNzPVwibWVzc2FnZS1jbFwiPjxwPicgKyBtZXNzYWdlICsgJzwvcD48L2Rpdj4nLFxyXG4gICAgICAgICAgJ2J1dHRvbnMnOiBidXR0b25zXHJcbiAgICAgfSk7XHJcbn1cclxuXHJcbk1lc3NhZ2VCb3guT0sgPSAwO1xyXG5NZXNzYWdlQm94Lk9LQ0FOQ0VMID0gMTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VCb3g7XHJcblxyXG4iLCIvKipcclxuICogVmFyaW91cyBpbnRlcmZhY2Ugb3B0aW9ucyB3ZSBjYW4gc2VsZWN0XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBvcHRpb25zLlxyXG4gKiBAcGFyYW0gb3B0aW9ucyBVc2VyIHByb3ZpZGVkIG9wdGlvbnMgdGhhdCBvdmVycmlkZSB0aGUgZGVmYXVsdCB2YWx1ZXMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyA/IG9wdGlvbnMgOiB7fTtcclxuXHJcbiAgICAvLy8gVGl0bGUgYmFyIHRleHRcclxuICAgIHRoaXMudGl0bGUgPSAnRGlhbG9nIEJveCc7XHJcblxyXG4gICAgLy8vIEFueSBhZGRlZCBjbGFzcyBvciBjbGFzc2VzIGZvciB0aGUgbWFpbiBkaWFsb2cgYm94IGRpdlxyXG4gICAgLy8vIENhbiBiZSBhIHN0cmluZyBvciBtdWx0aXBsZSBzdHJpbmdzIHNwYWNlIGRlbGltaXRlZFxyXG4gICAgdGhpcy5hZGRDbGFzcyA9IG51bGw7XHJcblxyXG4gICAgLy8vIElzIHRoaXMgZGlhbG9nIGJveCByZXNpemFibGU/XHJcbiAgICAvLy8gT3B0aW9ucyBhcmU6ICdub25lJywgJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnXHJcbiAgICB0aGlzLnJlc2l6ZSA9ICdub25lJztcclxuXHJcbiAgICAvLy8gU2l6ZSBvZiB0aGUgYm9yZGVyIGVkZ2Ugd2UgY2FuIGdyYWIgaWYgcmVzaXphYmxlIGluIHBpeGVsc1xyXG4gICAgdGhpcy5ncmFiU2l6ZSA9IDQ7XHJcblxyXG4gICAgLy8vIEFycmF5IG9mIHRpdGxlIGJhciBidXR0b25zIHRvIGFkZC5cclxuICAgIC8vLyBJZiBudWxsLCBhIGNsb3NlIGJ1dHRvbiBpcyBhZGRlZCBhdXRvbWF0aWNhbGx5LlxyXG4gICAgLy8vIE90aGVyd2lzZSwgYW4gYXJyYXkgb2Ygb2JqZWN0cywgd2l0aCB0aGVzZSBmaWVsZHM6XHJcbiAgICAvLy8gICB0eXBlOiAnY2xvc2UnIGZvciBhIGNsb3NlICBidXR0b24sICdjdXN0b20nIGZvciBjdXN0b20gYnV0dG9uIGNvbnRlbnRzXHJcbiAgICAvLy8gICBjb250ZW50czogSFRNTCB0byBwbGFjZSBpbnNpZGUgYnV0dG9uIHRhZ1xyXG4gICAgLy8vICAgY2xpY2s6IENsaWNrIGhhbmRsZXJcclxuICAgIHRoaXMudGl0bGVCYXJCdXR0b25zID0gbnVsbDtcclxuXHJcbiAgICAvLy8gQW55IGFkZGVkIGNsYXNzIG9yIGNsYXNzZXMgZm9yIHRoZSB0aXRsZSBiYXIgZGl2XHJcbiAgICAvLy8gQ2FuIGJlIGEgc3RyaW5nIG9yIG11bHRpcGxlIHN0cmluZ3Mgc3BhY2UgZGVsaW1pdGVkXHJcbiAgICB0aGlzLnRpdGxlQmFyQWRkQ2xhc3MgPSBudWxsO1xyXG5cclxuICAgIC8vLyBBcnJheSBvZiBidXR0b25zIGZvciB0aGUgYm90dG9tLlxyXG4gICAgLy8vIElmIG51bGwsIGFuIE9rIGJ1dHRvbiBpcyBhZGRlZCBhdXRvbWF0aWNhbGx5LlxyXG4gICAgLy8vIE90aGVyd2lzZSwgYW4gYXJyYXkgb2Ygb2JqZWN0cywgd2l0aCB0aGVzZSBmaWVsZHM6XHJcbiAgICAvLy8gICBjb250ZW50czogSWYgcHJvdmlkZWQsIEhUTUwgdG8gcGxhY2UgaW5zaWRlIGJ1dHRvbiB0YWdcclxuICAgIC8vLyAgIGNsaWNrOiBDbGljayBoYW5kbGVyXHJcbiAgICAvLy8gICBmb2N1czogdHJ1ZSBpZiB3ZSB3YW50IHRvIHNldCBmb2N1cyBvbiB0aGlzIGJ1dHRvblxyXG4gICAgLy8vICAgZGVmYXVsdDogdHJ1ZSBpZiB0aGlzIGlzIHRoZSBkZWZhdWx0IGJ1dHRvblxyXG4gICAgLy8vICAgY2xhc3M6IENsYXNzIHRvIGFkZCB0byB0aGUgYnV0dG9uXHJcbiAgICB0aGlzLmJ1dHRvbnMgPSBudWxsO1xyXG5cclxuICAgIC8vLyBDb250ZW50IHRvIGFkZCB0byB0aGUgZGlhbG9nIGJveC4gSWYgbnVsbCwgbm9uZSBpcyBhZGRlZCBvbiBjcmVhdGlvbi5cclxuICAgIHRoaXMuY29udGVudCA9IG51bGw7XHJcblxyXG4gICAgLy8vIElzIHRoaXMgYSBtb2RhbCBkaWFsb2cgYm94PyBJZiB0cnVlLCBjb250cm9scyB1bmRlcm5lYXRoIGFyZSBkaXNhYmxlZC5cclxuICAgIHRoaXMubW9kYWwgPSB0cnVlO1xyXG5cclxuICAgIC8vLyBTcGVjaWZpZXMgd2hhdCBlbGVtZW50IHRoZSBkaWFsb2cgYm94IHNob3VsZCBiZSBjZW50ZXJlZCBpbi5cclxuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcclxuXHJcbiAgICAvLy8gU2hvdWxkIHdlIGFkZCBhIGZvcm0/XHJcbiAgICB0aGlzLmZvcm0gPSB0cnVlO1xyXG5cclxuICAgIGZvcih2YXIgcHJvcGVydHkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIGlmKG9wdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb24gXCIgKyBwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBvcHRpb25zW3Byb3BlcnR5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBUaXRsZSBiYXIgbWFuYWdlbWVudFxyXG4gKi9cclxuXHJcbmltcG9ydCBUb29scyBmcm9tICcuL0RPTS9Ub29scy5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGl0bGVCYXIoZGlhbG9nLCBwYXJlbnREaXYpIHtcclxuICAgIGxldCBvcHRpb25zID0gZGlhbG9nLm9wdGlvbnM7XHJcblxyXG4gICAgLy8vIE1vdXNlIG1vdmUgZXZlbnQgaGFuZGxlcnMgaW5zdGFsbGVkIGZsYWdcclxuICAgIGxldCBpbnN0YWxsZWRNb3ZlSGFuZGxlcnMgPSBmYWxzZTtcclxuXHJcbiAgICAvLy8gVG91Y2ggbW92ZSBldmVudCBoYW5kbGVycyBpbnN0YWxsZWQgZmxhZ1xyXG4gICAgbGV0IGluc3RhbGxlZFRvdWNoSGFuZGxlcnMgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgaW5pdGlhbFgsIGluaXRpYWxZO1xyXG4gICAgbGV0IGluaXRpYWxQb3NpdGlvblgsIGluaXRpYWxQb3NpdGlvblk7XHJcblxyXG4gICAgbGV0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGh0bWwgPSBgPGgxPiR7b3B0aW9ucy50aXRsZX08L2gxPmA7XHJcbiAgICAgICAgbGV0IGRpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2RpYWxvZy1jbC10b3AnLCBodG1sKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzc2VzKGRpdiwgb3B0aW9ucy50aXRsZUJhckFkZENsYXNzKTtcclxuICAgICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy50aXRsZUJhckJ1dHRvbnMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgYWRkQ2xvc2UoZGl2KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcHRpb25zLnRpdGxlQmFyQnV0dG9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihpdGVtLnR5cGUgPT09ICdjbG9zZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRDbG9zZShkaXYsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGl0ZW0udHlwZSA9PT0gJ2N1c3RvbScpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRDdXN0b20oZGl2LCBpdGVtKTsgLy8gYWRkQ3VzdG9tKGRpdiwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBoMSA9IGRpdi5xdWVyeVNlbGVjdG9yKCdoMScpO1xyXG5cclxuICAgICAgICBoMS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25MaXN0ZW5lcik7XHJcbiAgICAgICAgaDEuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvdWNoU3RhcnRMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRDbG9zZShkaXYsIGl0ZW0pIHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgVG9vbHMuYWRkQ2xhc3MoYnV0dG9uLCAnZGlhbG9nLWNsLXRiLWJ1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJpY29ucy1jbCBpY29ucy1jbC1jbG9zZVwiPic7XHJcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYoaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uY2xpY2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGljaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEN1c3RvbShkaXYsIGl0ZW0pIHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgVG9vbHMuYWRkQ2xhc3MoYnV0dG9uLCAnZGlhbG9nLWNsLXRiLWJ1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBpdGVtLmNvbnRlbnRzO1xyXG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0gIT09IHVuZGVmaW5lZCAmJiBpdGVtLmNsaWNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xpY2soKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdmVUbyh4LCB5KSB7XHJcbiAgICAgICAgbGV0IGR4ID0geCAtIGluaXRpYWxYO1xyXG4gICAgICAgIGxldCBkeSA9IHkgLSBpbml0aWFsWTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uWCA9IGluaXRpYWxQb3NpdGlvblggKyBkeDtcclxuICAgICAgICBsZXQgbmV3UG9zaXRpb25ZID0gaW5pdGlhbFBvc2l0aW9uWSArIGR5O1xyXG5cclxuICAgICAgICBkaWFsb2cuZGl2LnN0eWxlLmxlZnQgPSBuZXdQb3NpdGlvblggKyAncHgnO1xyXG4gICAgICAgIGRpYWxvZy5kaXYuc3R5bGUudG9wID0gbmV3UG9zaXRpb25ZICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gTW91c2UgaGFuZGxlcnNcclxuICAgIC8vXHJcblxyXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1vdXNlSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgcmVtb3ZlSGFuZGxlcnMoKTtcclxuXHJcbiAgICAgICAgaW5zdGFsbGVkTW92ZUhhbmRsZXJzID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVMaXN0ZW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlRG93bkxpc3RlbmVyKGV2ZW50KSB7XHJcbiAgICAgICAgaW5pdGlhbFggPSBldmVudC5wYWdlWDtcclxuICAgICAgICBpbml0aWFsWSA9IGV2ZW50LnBhZ2VZO1xyXG5cclxuICAgICAgICBsZXQgcmVjdCA9IGRpYWxvZy5kaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgaW5pdGlhbFBvc2l0aW9uWCA9IHJlY3QubGVmdDtcclxuICAgICAgICBpbml0aWFsUG9zaXRpb25ZID0gcmVjdC50b3A7XHJcblxyXG4gICAgICAgIGluc3RhbGxNb3VzZUhhbmRsZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VNb3ZlTGlzdGVuZXIoZSkge1xyXG4gICAgICAgIGlmKGUuYnV0dG9ucyAhPT0gMSkge1xyXG4gICAgICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtb3ZlVG8oZS5wYWdlWCwgZS5wYWdlWSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VVcExpc3RlbmVyKGUpIHtcclxuICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBUb3VjaCBoYW5kbGVyc1xyXG4gICAgLy9cclxuXHJcbiAgICBmdW5jdGlvbiBpbnN0YWxsVG91Y2hIYW5kbGVycygpIHtcclxuICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG5cclxuICAgICAgICBpbnN0YWxsZWRUb3VjaEhhbmRsZXJzID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaE1vdmVMaXN0ZW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaEVuZExpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRvdWNoRW5kTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiB0b3VjaFN0YXJ0TGlzdGVuZXIoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpbml0aWFsWCA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVg7XHJcbiAgICAgICAgaW5pdGlhbFkgPSBldmVudC50b3VjaGVzWzBdLnBhZ2VZO1xyXG5cclxuICAgICAgICBsZXQgcmVjdCA9IGRpYWxvZy5kaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgaW5pdGlhbFBvc2l0aW9uWCA9IHJlY3QubGVmdDtcclxuICAgICAgICBpbml0aWFsUG9zaXRpb25ZID0gcmVjdC50b3A7XHJcblxyXG4gICAgICAgIGluc3RhbGxUb3VjaEhhbmRsZXJzKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHRvdWNoTW92ZUxpc3RlbmVyKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBtb3ZlVG8oZS50b3VjaGVzWzBdLnBhZ2VYLCBlLnRvdWNoZXNbMF0ucGFnZVkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvdWNoRW5kTGlzdGVuZXIoZSkge1xyXG4gICAgICAgIHJlbW92ZUhhbmRsZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgYWxsIGluc3RhbGxlZCB0ZW1wb3JhcnkgaGFuZGxlcnNcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgaWYoaW5zdGFsbGVkTW92ZUhhbmRsZXJzKSB7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBpbnN0YWxsZWRNb3ZlSGFuZGxlcnMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGluc3RhbGxlZFRvdWNoSGFuZGxlcnMpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2hNb3ZlTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRvdWNoRW5kTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBpbnN0YWxsZWRUb3VjaEhhbmRsZXJzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKTtcclxufVxyXG5cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy55YXJuLyQkdmlydHVhbC9jc3MtbG9hZGVyLXZpcnR1YWwtYmYwMTRhMTI1MS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTUuMi42LTExOGM2ZDQwOWUtYjllNWEzMjI0Ni56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy55YXJuLyQkdmlydHVhbC9jc3MtbG9hZGVyLXZpcnR1YWwtYmYwMTRhMTI1MS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTUuMi42LTExOGM2ZDQwOWUtYjllNWEzMjI0Ni56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmRpYWxvZy1jbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDQ0NDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgbWluLXdpZHRoOiAxNTBweDtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtaW4taGVpZ2h0OiAxNTBweDtcXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xcbn1cXG5cXG5kaXYuY2wtZGlhbG9nLWJvdHRvbSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZmxleDogMCAwIDQ0cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjY2NjO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG5kaXYuZGlhbG9nLWNsLWJvZHkge1xcbiAgZmxleDogMCAxIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuZGl2LmRpYWxvZy1jbC1ib2R5IHA6Zmlyc3QtY2hpbGQsIGRpdi5kaWFsb2ctY2wtYm9keSBoMTpmaXJzdC1jaGlsZCwgZGl2LmRpYWxvZy1jbC1ib2R5IGgyOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcbmRpdi5kaWFsb2ctY2wtYm9keSBwOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuZGl2LmNsLWRpYWxvZy1ib3R0b20gYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1pbi13aWR0aDogN2VtO1xcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwO1xcbiAgcGFkZGluZzogM3B4IDEwcHg7XFxuICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuICBib3JkZXItcmFkaXVzOiAxcHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAwIC0xMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM0NDQ7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG5kaXYuY2wtZGlhbG9nLWJvdHRvbSBidXR0b246YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuZGl2LmNsLWRpYWxvZy1ib3R0b20gYnV0dG9uOmRpc2FibGVkLFxcbmRpdi5jbC1kaWFsb2ctYm90dG9tIGJ1dHRvbltkaXNhYmxlZF0ge1xcbiAgY29sb3I6ICNjY2M7XFxufVxcblxcbmRpdi5kaWFsb2ctY2wtdG9wIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZsZXg6IDAgMCAyNXB4O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuZGl2LmRpYWxvZy1jbC10b3AgaDEge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNHB4IDRweCAwIDEwcHg7XFxuICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbmRpdi5kaWFsb2ctY2wtdG9wIGJ1dHRvbi5kaWFsb2ctY2wtdGItYnV0dG9uIHtcXG4gIGZsZXg6IDAgMCAyNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuZGl2LmRpYWxvZy1jbC10b3AgYnV0dG9uLmRpYWxvZy1jbC10Yi1idXR0b24gc3BhbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA0cHg7XFxuICB0b3A6IDRweDtcXG59XFxuZGl2LmRpYWxvZy1jbC10b3AgLmRpYWxvZy1jbC10Yi1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4MTEyMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2LmRpYWxvZy1jbCBkaXYubWVzc2FnZS1jbCB7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuZGl2LmRpYWxvZy1jbC1jb2x1bW4ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5kaXYuZGlhbG9nLWNsLWNvbHVtbiA+IGRpdiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAxLjVlbSAwIDJlbSAwO1xcbn1cXG5kaXYuZGlhbG9nLWNsLWNvbHVtbiBzZWxlY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL3BhcnRpYWxzL19kaWFsb2cuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL19kaWFsb2cuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvcGFydGlhbHMvX2JvdHRvbS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9wYXJ0aWFscy9fYm9keS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9wYXJ0aWFscy9fYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9wYXJ0aWFscy9fdGl0bGViYXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvcGFydGlhbHMvX21lc3NhZ2Vib3guc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvcGFydGlhbHMvX2NvbHVtbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0FKOztBQ25CQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FEc0JGOztBRTlCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FGaUNGO0FFL0JFO0VBQ0UsYUFBQTtBRmlDSjtBRTlCRTtFQUNFLGdCQUFBO0FGZ0NKOztBR3hDRTtFQUNFLHFCQUFBO0VBQ0EsY0FMVztFQU1YLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrREFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0ZBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUgyQ0o7QUd4Q0U7RUFDRSx1RkFBQTtBSDBDSjtBR3ZDRTs7RUFFRSxXQUFBO0FIeUNKOztBSW5FQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUpxRUY7QUluRUU7RUFDRSxZQUFBO0VBRUEsU0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0RBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBSm9FSjtBSWhFRTtFQUNFLGNBQUE7RUFFQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUppRUo7QUkvREk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FKaUVOO0FJN0RFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FKK0RKOztBSzVHRTtFQUNFLGlCQUFBO0VBRUEsWUFBQTtBTDhHSjs7QU05R0E7RUFDRSxrQkFBQTtBTmlIRjtBTS9HRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QU5pSEo7QU05R0U7RUFDRSxXQUFBO0FOZ0hKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpdi5kaWFsb2ctY2wge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NDQ0NDQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXCIsXCJkaXYuZGlhbG9nLWNsIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDQ0NDQ0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMzUwcHg7XFxuICBtaW4td2lkdGg6IDE1MHB4O1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xcbiAgbWF4LWhlaWdodDogNjAwcHg7XFxufVxcblxcbmRpdi5jbC1kaWFsb2ctYm90dG9tIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmbGV4OiAwIDAgNDRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2NjY2M7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbmRpdi5kaWFsb2ctY2wtYm9keSB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbn1cXG5kaXYuZGlhbG9nLWNsLWJvZHkgcDpmaXJzdC1jaGlsZCwgZGl2LmRpYWxvZy1jbC1ib2R5IGgxOmZpcnN0LWNoaWxkLCBkaXYuZGlhbG9nLWNsLWJvZHkgaDI6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuZGl2LmRpYWxvZy1jbC1ib2R5IHA6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG5kaXYuY2wtZGlhbG9nLWJvdHRvbSBidXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWluLXdpZHRoOiA3ZW07XFxuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDA7XFxuICBwYWRkaW5nOiAzcHggMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgLTEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzQ0NDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbmRpdi5jbC1kaWFsb2ctYm90dG9tIGJ1dHRvbjphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5kaXYuY2wtZGlhbG9nLWJvdHRvbSBidXR0b246ZGlzYWJsZWQsXFxuZGl2LmNsLWRpYWxvZy1ib3R0b20gYnV0dG9uW2Rpc2FibGVkXSB7XFxuICBjb2xvcjogI2NjYztcXG59XFxuXFxuZGl2LmRpYWxvZy1jbC10b3Age1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZmxleDogMCAwIDI1cHg7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbn1cXG5kaXYuZGlhbG9nLWNsLXRvcCBoMSB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA0cHggNHB4IDAgMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuZGl2LmRpYWxvZy1jbC10b3AgYnV0dG9uLmRpYWxvZy1jbC10Yi1idXR0b24ge1xcbiAgZmxleDogMCAwIDI1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5kaXYuZGlhbG9nLWNsLXRvcCBidXR0b24uZGlhbG9nLWNsLXRiLWJ1dHRvbiBzcGFuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDRweDtcXG4gIHRvcDogNHB4O1xcbn1cXG5kaXYuZGlhbG9nLWNsLXRvcCAuZGlhbG9nLWNsLXRiLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTgxMTIzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5kaXYuZGlhbG9nLWNsIGRpdi5tZXNzYWdlLWNsIHtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG5kaXYuZGlhbG9nLWNsLWNvbHVtbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmRpdi5kaWFsb2ctY2wtY29sdW1uID4gZGl2IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDEuNWVtIDAgMmVtIDA7XFxufVxcbmRpdi5kaWFsb2ctY2wtY29sdW1uIHNlbGVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG59XCIsXCJkaXYuY2wtZGlhbG9nLWJvdHRvbSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZmxleDogMCAwIDQ0cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjY2NjO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cIixcImRpdi5kaWFsb2ctY2wtYm9keSB7XFxyXFxuICBmbGV4OiAwIDEgYXV0bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcblxcclxcbiAgcDpmaXJzdC1jaGlsZCwgaDE6Zmlyc3QtY2hpbGQsIGgyOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHA6bGFzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblwiLFwiJGJ1dHRvbi13aWR0aDogN2VtO1xcclxcblxcclxcbmRpdi5jbC1kaWFsb2ctYm90dG9tIHtcXHJcXG4gIGJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbWluLXdpZHRoOiAkYnV0dG9uLXdpZHRoO1xcclxcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDA7XFxyXFxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMXB4IHJnYmEoMCwwLDAsLjEpLCBpbnNldCAwIC0xMHB4IDIwcHggcmdiYSgwLDAsMCwuMSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogIzQ0NDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGJ1dHRvbjphY3RpdmUge1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAxcHggcmdiYSgwLDAsMCwuMSksIGluc2V0IDAgMTBweCAyMHB4IHJnYmEoMCwwLDAsLjEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uOmRpc2FibGVkLFxcclxcbiAgYnV0dG9uW2Rpc2FibGVkXSB7XFxyXFxuICAgIGNvbG9yOiAjY2NjO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIixcImRpdi5kaWFsb2ctY2wtdG9wIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZsZXg6IDAgMCAyNXB4O1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG5cXHJcXG4gIGgxIHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcblxcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDRweCA0cHggMCAxMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTZweDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyBUaXRsZSBiYXIgYnV0dG9uc1xcclxcbiAgYnV0dG9uLmRpYWxvZy1jbC10Yi1idXR0b24ge1xcclxcbiAgICBmbGV4OiAwIDAgMjVweDtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuXFxyXFxuICAgIHNwYW4ge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBsZWZ0OiA0cHg7XFxyXFxuICAgICAgdG9wOiA0cHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kaWFsb2ctY2wtdGItYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4MTEyMztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cIixcImRpdi5kaWFsb2ctY2wge1xcclxcbiAgZGl2Lm1lc3NhZ2UtY2wge1xcclxcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgfVxcclxcbn1cIixcIi8vXFxyXFxuLy8gU3RhbmRhcmQgZGlhbG9nIGJveCBzdHlsZTogc2luZ2xlIGNvbHVtbiBvZiBjb250cm9sc1xcclxcbi8vXFxyXFxuXFxyXFxuZGl2LmRpYWxvZy1jbC1jb2x1bW4ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgPmRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcGFkZGluZzogMS41ZW0gMCAyLjBlbSAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgc2VsZWN0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8ueWFybi8kJHZpcnR1YWwvc3R5bGUtbG9hZGVyLXZpcnR1YWwtMzM2MmMyN2RkOC8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMi4wLjAtYjlhNWM0YTJhYS1mZmMzMDU0ODgyLnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy55YXJuLyQkdmlydHVhbC9jc3MtbG9hZGVyLXZpcnR1YWwtYmYwMTRhMTI1MS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTUuMi42LTExOGM2ZDQwOWUtYjllNWEzMjI0Ni56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLnlhcm4vJCR2aXJ0dWFsL3Jlc29sdmUtdXJsLWxvYWRlci12aXJ0dWFsLTA0MjNhNjdiMTIvMC9jYWNoZS9yZXNvbHZlLXVybC1sb2FkZXItbnBtLTQuMC4wLTJhOWMxOGQ4NmItMDRlOWY5MWRjOC56aXAvbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8ueWFybi8kJHZpcnR1YWwvc2Fzcy1sb2FkZXItdmlydHVhbC1kYTcwNjg5YjRmLzAvY2FjaGUvc2Fzcy1sb2FkZXItbnBtLTEyLjEuMC02MTg4MDg5ZTEyLTc1ZjUyM2U2NGMuemlwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbM10hLi9fZGlhbG9nLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLnlhcm4vJCR2aXJ0dWFsL2Nzcy1sb2FkZXItdmlydHVhbC1iZjAxNGExMjUxLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNS4yLjYtMTE4YzZkNDA5ZS1iOWU1YTMyMjQ2LnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8ueWFybi8kJHZpcnR1YWwvcmVzb2x2ZS11cmwtbG9hZGVyLXZpcnR1YWwtMDQyM2E2N2IxMi8wL2NhY2hlL3Jlc29sdmUtdXJsLWxvYWRlci1ucG0tNC4wLjAtMmE5YzE4ZDg2Yi0wNGU5ZjkxZGM4LnppcC9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy55YXJuLyQkdmlydHVhbC9zYXNzLWxvYWRlci12aXJ0dWFsLWRhNzA2ODliNGYvMC9jYWNoZS9zYXNzLWxvYWRlci1ucG0tMTIuMS4wLTYxODgwODllMTItNzVmNTIzZTY0Yy56aXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVszXSEuL19kaWFsb2cuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscywgdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufSIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkljb25zXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkljb25zXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKCgpID0+IHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHRcInVzZSBzdHJpY3RcIjtcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVzX18gPSAoe1xuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL3NyYy9pY29ucy5zY3NzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL3NyYy9pY29ucy5zY3NzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKChtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pID0+IHtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIHtcbi8qIGhhcm1vbnkgZXhwb3J0ICovICAgXCJkZWZhdWx0XCI6ICgpID0+IChfX1dFQlBBQ0tfREVGQVVMVF9FWFBPUlRfXylcbi8qIGhhcm1vbnkgZXhwb3J0ICovIH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X3J1bnRpbWVfY3NzV2l0aE1hcHBpbmdUb1N0cmluZ19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9ydW50aW1lX2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmdfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9ydW50aW1lX2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmdfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfcnVudGltZV9hcGlfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X3J1bnRpbWVfYXBpX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfcnVudGltZV9hcGlfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfcnVudGltZV9nZXRVcmxfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X3J1bnRpbWVfZ2V0VXJsX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfcnVudGltZV9nZXRVcmxfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2ltYWdlc19pY29uc19wbmdfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaW1hZ2VzL2ljb25zLnBuZyAqLyBcIi4vc3JjL2ltYWdlcy9pY29ucy5wbmdcIik7XG4vLyBJbXBvcnRzXG5cblxuXG5cbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X3J1bnRpbWVfYXBpX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdCgpKChfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9ydW50aW1lX2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmdfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0KCkpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfcnVudGltZV9nZXRVcmxfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0KCkoX2ltYWdlc19pY29uc19wbmdfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXy5kZWZhdWx0KTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pY29ucy1jbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtbmUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtc2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtc3cge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtbncge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTItbi1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0yLWUtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1uZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLXNlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtc3cge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1udyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTItbi1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMi1lLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLW5lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtc2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMS1zdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLW53IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMi1uLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0yLW5lLXN3IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMi1lLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0yLXNlLW53IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3dzdG9wLTEtbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93c3RvcC0xLWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3N0b3AtMS1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3dzdG9wLTEtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLW5lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLXNlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLXN3IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLW53IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0yLW4tcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMi1uZS1zdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMi1lLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTItc2Utbncge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3JldHVybnRoaWNrLTEtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtNjRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93cmV0dXJudGhpY2stMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTY0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1mb2xkZXItY29sbGFwc2VkIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZm9sZGVyLW9wZW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWRvY3VtZW50IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1kb2N1bWVudC1iIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1ub3RlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1tYWlsLWNsb3NlZCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbWFpbC1vcGVuIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zdWl0Y2FzZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNvbW1lbnQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1wZXJzb24ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1wcmludCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyYXNoIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbG9ja2VkIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdW5sb2NrZWQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1ib29rbWFyayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRhZyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWhvbWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZmxhZyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhbGN1bGF0b3Ige1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJ0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGVuY2lsIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2xvY2sge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1kaXNrIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FsZW5kYXIge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtem9vbWluIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXpvb21vdXQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc2VhcmNoIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXdyZW5jaCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1nZWFyIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWhlYXJ0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXN0YXIge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbGluayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGx1cyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBsdXN0aGljayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLW1pbnVzIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbWludXN0aGljayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWtleSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWxpZ2h0YnVsYiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXNjaXNzb3JzIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNsaXBib2FyZCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jb3B5IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNvbnRhY3Qge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtaW1hZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdmlkZW8ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc2NyaXB0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNsb3NlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2xvc2V0aGljayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFsZXJ0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWluZm8ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1ub3RpY2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1oZWxwIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2hlY2sge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1idWxsZXQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1yYWRpby1vZmYge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1yYWRpby1vbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1waW4tdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1waW4tcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1wbGF5IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBhdXNlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc2Vlay1uZXh0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc2Vlay1wcmV2IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc2Vlay1lbmQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zZWVrLWZpcnN0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc3RvcCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWVqZWN0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXZvbHVtZS1vZmYge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdm9sdW1lLW9uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xNjBweDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2ljb25zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIseURBQXVDO0VBQ3ZDLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7RUFQWjtJQWFJLHdCQUF3QixFQUFBO0VBYjVCO0lBaUJJLDRCQUE0QixFQUFBO0VBakJoQztJQXFCSSw0QkFBZ0MsRUFBQTtFQXJCcEM7SUF5QkksNEJBQWdDLEVBQUE7RUF6QnBDO0lBNkJJLDRCQUFnQyxFQUFBO0VBN0JwQztJQWlDSSw0QkFBZ0MsRUFBQTtFQWpDcEM7SUFxQ0ksNEJBQWdDLEVBQUE7RUFyQ3BDO0lBeUNJLDZCQUFnQyxFQUFBO0VBekNwQztJQTZDSSw2QkFBZ0MsRUFBQTtFQTdDcEM7SUFpREksNkJBQWdDLEVBQUE7RUFqRHBDO0lBd0RJLDhCQUFvQyxFQUFBO0VBeER4QztJQTRESSxnQ0FBb0MsRUFBQTtFQTVEeEM7SUFnRUksZ0NBQW9DLEVBQUE7RUFoRXhDO0lBb0VJLGdDQUFvQyxFQUFBO0VBcEV4QztJQXlFSSxnQ0FBb0MsRUFBQTtFQXpFeEM7SUE4RUksZ0NBQW9DLEVBQUE7RUE5RXhDO0lBbUZJLGdDQUFvQyxFQUFBO0VBbkZ4QztJQXdGSSxpQ0FBb0MsRUFBQTtFQXhGeEM7SUE0Rkks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aUNBQXNDLEVBQUE7RUE1UjVDO0lBNFJNLGlDQUFzQyxFQUFBO0VBNVI1QztJQTRSTSxpQ0FBc0MsRUFBQTtFQTVSNUM7SUE0Uk0sa0NBQXNDLEVBQUE7RUE1UjVDO0lBNFJNLGtDQUFzQyxFQUFBO0VBNVI1QztJQTRSTSxrQ0FBc0MsRUFBQTtFQTVSNUM7SUE0Uk0sa0NBQXNDLEVBQUE7RUE1UjVDO0lBNFJNLGtDQUFzQyxFQUFBO0VBNVI1QztJQTRSTSxrQ0FBc0MsRUFBQTtFQTVSNUM7SUE0Uk0sa0NBQXNDLEVBQUE7RUE1UjVDO0lBbVNJLGlDQUFpQyxFQUFBO0VBblNyQztJQXVTSSxpQ0FBaUMsRUFBQTtFQXZTckM7SUFpVE0sK0JBQXlDLEVBQUE7RUFqVC9DO0lBaVRNLGlDQUF5QyxFQUFBO0VBalQvQztJQWlUTSxpQ0FBeUMsRUFBQTtFQWpUL0M7SUFpVE0saUNBQXlDLEVBQUE7RUFqVC9DO0lBaVRNLGlDQUF5QyxFQUFBO0VBalQvQztJQWlUTSxpQ0FBeUMsRUFBQTtFQWpUL0M7SUFpVE0saUNBQXlDLEVBQUE7RUFqVC9DO0lBaVRNLGtDQUF5QyxFQUFBO0VBalQvQztJQWlUTSxrQ0FBeUMsRUFBQTtFQWpUL0M7SUFpVE0sa0NBQXlDLEVBQUE7RUFqVC9DO0lBNlRNLCtCQUEwQyxFQUFBO0VBN1RoRDtJQTZUTSxpQ0FBMEMsRUFBQTtFQTdUaEQ7SUE2VE0saUNBQTBDLEVBQUE7RUE3VGhEO0lBNlRNLGlDQUEwQyxFQUFBO0VBN1RoRDtJQTZUTSxpQ0FBMEMsRUFBQTtFQTdUaEQ7SUE2VE0saUNBQTBDLEVBQUE7RUE3VGhEO0lBNlRNLGlDQUEwQyxFQUFBO0VBN1RoRDtJQTZUTSxrQ0FBMEMsRUFBQTtFQTdUaEQ7SUE2VE0sa0NBQTBDLEVBQUE7RUE3VGhEO0lBNlRNLGtDQUEwQyxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pY29ucy1jbCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL2ljb25zLnBuZyk7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcclxcbiAgLy9cXHJcXG4gIC8vIFJvdyAxXFxyXFxuICAvL1xcclxcbiAgJi5pY29ucy1jbC1jYXJldC0xLW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTEtbmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jYXJldC0xLWUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyICogLTE2cHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtY2FyZXQtMS1zZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMgKiAtMTZweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jYXJldC0xLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0ICogLTE2cHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtY2FyZXQtMS1zdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUgKiAtMTZweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jYXJldC0xLXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA2ICogLTE2cHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtY2FyZXQtMS1udyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDcgKiAtMTZweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jYXJldC0yLW4tcyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDggKiAtMTZweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jYXJldC0yLWUtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDkgKiAtMTZweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy9cXHJcXG4gIC8vIFJvdyAyXFxyXFxuICAvL1xcclxcbiAgJi5pY29ucy1jbC10cmlhbmdsZS0xLW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwICogLTE2cHggLTE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTEtbmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxICogLTE2cHggLTE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTEtZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIgKiAtMTZweCAtMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtdHJpYW5nbGUtMS1zZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMgKiAtMTZweCAtMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtdHJpYW5nbGUtMS1zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNCAqIC0xNnB4IC0xNnB4O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgJi5pY29ucy1jbC10cmlhbmdsZS0xLXN3IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNSAqIC0xNnB4IC0xNnB4O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgJi5pY29ucy1jbC10cmlhbmdsZS0xLXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA2ICogLTE2cHggLTE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTEtbncge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA3ICogLTE2cHggLTE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTItbi1zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOCAqIC0xNnB4IC0xNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC10cmlhbmdsZS0yLWUtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDkgKiAtMTZweCAtMTZweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLy9cXHJcXG4gIC8vIFJvdyAzXFxyXFxuICAvL1xcclxcbiAgJi5pY29ucy1jbC1hcnJvdy0xLW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTEtbmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTEtZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMS1zZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMS1zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNCAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvdy0xLXN3IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNSAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvdy0xLXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA2ICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTEtbncge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA3ICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTItbi1zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOCAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvdy0yLW5lLXN3IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOSAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvdy0yLWUtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTItc2Utbncge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMSAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3N0b3AtMS1uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTIgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3dzdG9wLTEtZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEzICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93c3RvcC0xLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNCAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3N0b3AtMS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTUgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vXFxyXFxuICAvLyBSb3cgNFxcclxcbiAgLy9cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0xLW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2stMS1uZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0xLWUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2stMS1zZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0xLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0ICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2stMS1zdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0xLXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA2ICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2stMS1udyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDcgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0yLW4tcyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDggKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0yLW5lLXN3IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOSAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTItZS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0yLXNlLW53IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTEgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS1uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTIgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS1lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTMgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS1zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTQgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTUgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vXFxyXFxuICAvLyBSb3cgNVxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3JldHVybnRoaWNrLTEtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgKiAtMTZweCAtNjRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3dyZXR1cm50aGljay0xLWUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyICogLTE2cHggLTY0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyB1aS1pY29uLWFycm93cmV0dXJudGhpY2stMS1uICB1aS1pY29uLWFycm93cmV0dXJudGhpY2stMS1zICB1aS1pY29uLWFycm93cmV0dXJuLTEtdyAgdWktaWNvbi1hcnJvd3JldHVybi0xLW4gIHVpLWljb24tYXJyb3dyZXR1cm4tMS1lICB1aS1pY29uLWFycm93cmV0dXJuLTEtcyAgdWktaWNvbi1hcnJvd3JlZnJlc2gtMS13ICB1aS1pY29uLWFycm93cmVmcmVzaC0xLW4gIHVpLWljb24tYXJyb3dyZWZyZXNoLTEtZSAgdWktaWNvbi1hcnJvd3JlZnJlc2gtMS1zXFxyXFxuICAvLyB1aS1pY29uLWFycm93LTQgIHVpLWljb24tYXJyb3ctNC1kaWFnICB1aS1pY29uLWV4dGxpbmsgIHVpLWljb24tbmV3d2luICB1aS1pY29uLXJlZnJlc2ggIHVpLWljb24tc2h1ZmZsZSAgdWktaWNvbi10cmFuc2Zlci1lLXcgIHVpLWljb24tdHJhbnNmZXJ0aGljay1lLXdcXHJcXG5cXHJcXG4gIC8vXFxyXFxuICAvLyBSb3cgNlxcclxcbiAgLy9cXHJcXG4gICRsaXN0OiBmb2xkZXItY29sbGFwc2VkIGZvbGRlci1vcGVuIGRvY3VtZW50IGRvY3VtZW50LWIgbm90ZSBtYWlsLWNsb3NlZCBtYWlsLW9wZW4gc3VpdGNhc2UgY29tbWVudCBwZXJzb24gcHJpbnQgdHJhc2ggbG9ja2VkIHVubG9ja2VkIGJvb2ttYXJrIHRhZztcXHJcXG4gICR4OiAwO1xcclxcblxcclxcbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xcclxcbiAgICAmLmljb25zLWNsLSN7JGl0ZW19IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkeCAqIC0xNnB4IC05NnB4XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJHg6ICR4KzE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvL1xcclxcbiAgLy8gUm93IDdcXHJcXG4gIC8vXFxyXFxuICAkbGlzdDogaG9tZSBmbGFnIGNhbGN1bGF0b3IgY2FydCBwZW5jaWwgY2xvY2sgZGlzayBjYWxlbmRhciB6b29taW4gem9vbW91dCBzZWFyY2ggd3JlbmNoIGdlYXIgaGVhcnQgc3RhciBsaW5rO1xcclxcbiAgJHg6IDA7XFxyXFxuXFxyXFxuICBAZWFjaCAkaXRlbSBpbiAkbGlzdCB7XFxyXFxuICAgICYuaWNvbnMtY2wtI3skaXRlbX0ge1xcclxcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR4ICogLTE2cHggLTExMnB4XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJHg6ICR4KzE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvL1xcclxcbiAgLy8gUm93IDhcXHJcXG4gIC8vXFxyXFxuICAkbGlzdDogY2FuY2VsICBwbHVzICBwbHVzdGhpY2sgIG1pbnVzICBtaW51c3RoaWNrICBrZXkgIGxpZ2h0YnVsYiAgc2Npc3NvcnMgIGNsaXBib2FyZCAgY29weSAgY29udGFjdCAgaW1hZ2UgIHZpZGVvICBzY3JpcHQ7XFxyXFxuICAkeDogMDtcXHJcXG5cXHJcXG4gIEBlYWNoICRpdGVtIGluICRsaXN0IHtcXHJcXG4gICAgJi5pY29ucy1jbC0jeyRpdGVtfSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHggKiAtMTZweCAtMTI4cHhcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAkeDogJHgrMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtY2xvc2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTI4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNsb3NldGhpY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTI4cHg7XFxyXFxuICB9XFxyXFxuICAvLyB1aS1pY29uLWNhbmNlbCAgdWktaWNvbi1wbHVzICB1aS1pY29uLXBsdXN0aGljayAgdWktaWNvbi1taW51cyAgdWktaWNvbi1taW51c3RoaWNrICB1aS1pY29uLWtleSAgdWktaWNvbi1saWdodGJ1bGIgIHVpLWljb24tc2Npc3NvcnMgIHVpLWljb24tY2xpcGJvYXJkICB1aS1pY29uLWNvcHkgIHVpLWljb24tY29udGFjdCAgdWktaWNvbi1pbWFnZSAgdWktaWNvbi12aWRlbyAgdWktaWNvbi1zY3JpcHRcXHJcXG5cXHJcXG4gIC8vIFJvdyA5XFxyXFxuICAkbGlzdDogYWxlcnQgaW5mbyAgbm90aWNlIGhlbHAgY2hlY2sgIGJ1bGxldCAgcmFkaW8tb2ZmICByYWRpby1vbiAgcGluLXcgIHBpbi1zO1xcclxcbiAgJHg6IDA7XFxyXFxuXFxyXFxuICBAZWFjaCAkaXRlbSBpbiAkbGlzdCB7XFxyXFxuICAgICYuaWNvbnMtY2wtI3skaXRlbX0ge1xcclxcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR4ICogLTE2cHggOSAqIC0xNnB4XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJHg6ICR4KzE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAgUm93IDEwXFxyXFxuICAkbGlzdDogcGxheSBwYXVzZSBzZWVrLW5leHQgIHNlZWstcHJldiAgc2Vlay1lbmQgIHNlZWstZmlyc3QgIHN0b3AgIGVqZWN0ICB2b2x1bWUtb2ZmICB2b2x1bWUtb247XFxyXFxuICAkeDogMDtcXHJcXG5cXHJcXG4gIEBlYWNoICRpdGVtIGluICRsaXN0IHtcXHJcXG4gICAgJi5pY29ucy1jbC0jeyRpdGVtfSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHggKiAtMTZweCAxMCAqIC0xNnB4XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJHg6ICR4KzE7XFxyXFxuICB9XFxyXFxuXFxyXFxuIC8vIHVpLWljb24tcG93ZXIgIHVpLWljb24tc2lnbmFsLWRpYWcgIHVpLWljb24tc2lnbmFsICB1aS1pY29uLWJhdHRlcnktMCAgdWktaWNvbi1iYXR0ZXJ5LTEgIHVpLWljb24tYmF0dGVyeS0yICB1aS1pY29uLWJhdHRlcnktM1xcclxcbiAgLy8gdWktaWNvbi1jaXJjbGUtcGx1cyAgdWktaWNvbi1jaXJjbGUtbWludXMgIHVpLWljb24tY2lyY2xlLWNsb3NlICB1aS1pY29uLWNpcmNsZS10cmlhbmdsZS1lICB1aS1pY29uLWNpcmNsZS10cmlhbmdsZS1zICB1aS1pY29uLWNpcmNsZS10cmlhbmdsZS13ICB1aS1pY29uLWNpcmNsZS10cmlhbmdsZS1uICB1aS1pY29uLWNpcmNsZS1hcnJvdy1lICB1aS1pY29uLWNpcmNsZS1hcnJvdy1zICB1aS1pY29uLWNpcmNsZS1hcnJvdy13ICB1aS1pY29uLWNpcmNsZS1hcnJvdy1uICB1aS1pY29uLWNpcmNsZS16b29taW4gIHVpLWljb24tY2lyY2xlLXpvb21vdXQgIHVpLWljb24tY2lyY2xlLWNoZWNrXFxyXFxuLy8gdWktaWNvbi1jaXJjbGVzbWFsbC1wbHVzICB1aS1pY29uLWNpcmNsZXNtYWxsLW1pbnVzICB1aS1pY29uLWNpcmNsZXNtYWxsLWNsb3NlICB1aS1pY29uLXNxdWFyZXNtYWxsLXBsdXMgIHVpLWljb24tc3F1YXJlc21hbGwtbWludXMgIHVpLWljb24tc3F1YXJlc21hbGwtY2xvc2VcXHJcXG4vLyB1aS1pY29uLWdyaXAtZG90dGVkLXZlcnRpY2FsICB1aS1pY29uLWdyaXAtZG90dGVkLWhvcml6b250YWwgIHVpLWljb24tZ3JpcC1zb2xpZC12ZXJ0aWNhbCAgdWktaWNvbi1ncmlwLXNvbGlkLWhvcml6b250YWwgIHVpLWljb24tZ3JpcHNtYWxsLWRpYWdvbmFsLXNlICB1aS1pY29uLWdyaXAtZGlhZ29uYWwtc2VcXHJcXG5cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IF9fV0VCUEFDS19ERUZBVUxUX0VYUE9SVF9fID0gKF9fX0NTU19MT0FERVJfRVhQT1JUX19fKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKChtb2R1bGUpID0+IHtcblxuXG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoKG1vZHVsZSkgPT4ge1xuXG5cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoKG1vZHVsZSkgPT4ge1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2ljb25zLnNjc3NcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pY29ucy5zY3NzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykgPT4ge1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuLyogaGFybW9ueSBleHBvcnQgKi8gICBcImRlZmF1bHRcIjogKCkgPT4gKF9fV0VCUEFDS19ERUZBVUxUX0VYUE9SVF9fKVxuLyogaGFybW9ueSBleHBvcnQgKi8gfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX25vZGVfbW9kdWxlc19zdHlsZV9sb2FkZXJfZGlzdF9ydW50aW1lX2luamVjdFN0eWxlc0ludG9TdHlsZVRhZ19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbm9kZV9tb2R1bGVzX3N0eWxlX2xvYWRlcl9kaXN0X3J1bnRpbWVfaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oX25vZGVfbW9kdWxlc19zdHlsZV9sb2FkZXJfZGlzdF9ydW50aW1lX2luamVjdFN0eWxlc0ludG9TdHlsZVRhZ19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfbm9kZV9tb2R1bGVzX3Jlc29sdmVfdXJsX2xvYWRlcl9pbmRleF9qc19ub2RlX21vZHVsZXNfc2Fzc19sb2FkZXJfZGlzdF9janNfanNfcnVsZVNldF8xX3J1bGVzXzFfdXNlXzNfaWNvbnNfc2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pY29ucy5zY3NzICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vc3JjL2ljb25zLnNjc3NcIik7XG5cbiAgICAgICAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IF9ub2RlX21vZHVsZXNfc3R5bGVfbG9hZGVyX2Rpc3RfcnVudGltZV9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWdfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0KCkoX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX25vZGVfbW9kdWxlc19yZXNvbHZlX3VybF9sb2FkZXJfaW5kZXhfanNfbm9kZV9tb2R1bGVzX3Nhc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX3J1bGVTZXRfMV9ydWxlc18xX3VzZV8zX2ljb25zX3Njc3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXy5kZWZhdWx0LCBvcHRpb25zKTtcblxuXG5pZiAodHJ1ZSkge1xuICBpZiAoIV9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19ub2RlX21vZHVsZXNfcmVzb2x2ZV91cmxfbG9hZGVyX2luZGV4X2pzX25vZGVfbW9kdWxlc19zYXNzX2xvYWRlcl9kaXN0X2Nqc19qc19ydWxlU2V0XzFfcnVsZXNfMV91c2VfM19pY29uc19zY3NzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18uZGVmYXVsdC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfbm9kZV9tb2R1bGVzX3Jlc29sdmVfdXJsX2xvYWRlcl9pbmRleF9qc19ub2RlX21vZHVsZXNfc2Fzc19sb2FkZXJfZGlzdF9janNfanNfcnVsZVNldF8xX3J1bGVzXzFfdXNlXzNfaWNvbnNfc2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fLmRlZmF1bHQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICAvKiEgISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pY29ucy5zY3NzICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vc3JjL2ljb25zLnNjc3NcIixcbiAgICAgIF9fV0VCUEFDS19PVVREQVRFRF9ERVBFTkRFTkNJRVNfXyA9PiB7IC8qIGhhcm1vbnkgaW1wb3J0ICovIF9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19ub2RlX21vZHVsZXNfcmVzb2x2ZV91cmxfbG9hZGVyX2luZGV4X2pzX25vZGVfbW9kdWxlc19zYXNzX2xvYWRlcl9kaXN0X2Nqc19qc19ydWxlU2V0XzFfcnVsZXNfMV91c2VfM19pY29uc19zY3NzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2ljb25zLnNjc3MgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9zcmMvaWNvbnMuc2Nzc1wiKTtcbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIF9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19ub2RlX21vZHVsZXNfcmVzb2x2ZV91cmxfbG9hZGVyX2luZGV4X2pzX25vZGVfbW9kdWxlc19zYXNzX2xvYWRlcl9kaXN0X2Nqc19qc19ydWxlU2V0XzFfcnVsZXNfMV91c2VfM19pY29uc19zY3NzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18uZGVmYXVsdC5sb2NhbHMsIHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IF9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19ub2RlX21vZHVsZXNfcmVzb2x2ZV91cmxfbG9hZGVyX2luZGV4X2pzX25vZGVfbW9kdWxlc19zYXNzX2xvYWRlcl9kaXN0X2Nqc19qc19ydWxlU2V0XzFfcnVsZXNfMV91c2VfM19pY29uc19zY3NzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18uZGVmYXVsdC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKF9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19ub2RlX21vZHVsZXNfcmVzb2x2ZV91cmxfbG9hZGVyX2luZGV4X2pzX25vZGVfbW9kdWxlc19zYXNzX2xvYWRlcl9kaXN0X2Nqc19qc19ydWxlU2V0XzFfcnVsZXNfMV91c2VfM19pY29uc19zY3NzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18uZGVmYXVsdCk7XG4gICAgICB9KShfX1dFQlBBQ0tfT1VUREFURURfREVQRU5ERU5DSUVTX18pOyB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBfX1dFQlBBQ0tfREVGQVVMVF9FWFBPUlRfXyA9IChfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfbm9kZV9tb2R1bGVzX3Jlc29sdmVfdXJsX2xvYWRlcl9pbmRleF9qc19ub2RlX21vZHVsZXNfc2Fzc19sb2FkZXJfZGlzdF9janNfanNfcnVsZVNldF8xX3J1bGVzXzFfdXNlXzNfaWNvbnNfc2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fLmRlZmF1bHQubG9jYWxzIHx8IHt9KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKChtb2R1bGUsIF9fdW51c2VkX3dlYnBhY2tfZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykgPT4ge1xuXG5cblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gIHRydWUgPyBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jIDogMDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9pbWFnZXMvaWNvbnMucG5nXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW1hZ2VzL2ljb25zLnBuZyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKChfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykgPT4ge1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuLyogaGFybW9ueSBleHBvcnQgKi8gICBcImRlZmF1bHRcIjogKCkgPT4gKF9fV0VCUEFDS19ERUZBVUxUX0VYUE9SVF9fKVxuLyogaGFybW9ueSBleHBvcnQgKi8gfSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IF9fV0VCUEFDS19ERUZBVUxUX0VYUE9SVF9fID0gKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFRQUFBQUR3Q0FNQUFBRFlTVXI1QUFBQlMybFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNMdnU3OGlJR2xrUFNKWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FpUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVFXUnZZbVVnV0UxUUlFTnZjbVVnTlM0MkxXTXhORElnTnprdU1UWXdPVEkwTENBeU1ERTNMekEzTHpFekxUQXhPakEyT2pNNUlDQWdJQ0FnSUNBaVBnb2dQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRLSUNBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwaUlpOCtDaUE4TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnbzhQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtuaHhnN3dBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBQmMxSkhRZ0N1emh6cEFBQUJEbEJNVkVVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCeFVZVzlBQUFBV1hSU1RsTUFMMlpLQ0VCZ0dSQXpVQnEvSW1PZVJZK1VQMjJnbkNBcHpBMHhBU3dXVlNlWnd4TnhnQ00wUjgrdmFFZ0toUnc0VSs4RUhrdC9IMXBDZ295b292MGtBbEVESVRKcXRiamZZb2NHa1c4OHNxMTh2c2FyeUx5cXBabUtDN0FBQUE3bVNVUkJWSGphN1YwSlk5dTJEcVpjeTVRY0oyNnpyWm5qcmsxenJFM1gxL2IxMkgxdmIrKytUL3ovUC9KSXlSSUI4TEppUjNaaWZzNEZVUWZ4Q1NRQmtGS0VTRWhJMkFKSWtEdXVQMnc1QXl0WFQwSllmNGtaMER2M1N3aXpRTkNnQlBENmtISmRLdkVXQUZ2RndBWFk4ZFdmdlpvRXQwQ2JBTW5yUThyNUhiUUk0SWZiRjdCMmxqMHlZTlhmclVLZzNHWlFCQTBJUWcxaXNiTU03clRlQnM0dDJLNGl2OEcyaFFUdnNHMEJnUXIwYndGdVVnSzNNR2pCemgyc1BpQmtndjMzQVpzZUJYZ1Q2bjhVU0k1UVFrSkNRa0pDUXNMR1BNRU4rMEhTaXRhQU8rOHlvQkFBRC9CbHAzeUFsUkJTWisrVkVrY0ZMQUtzSGZqdU5GeVUxZ1U0QVRJWVBQWWFERm4xZDljNFVPeklxTWpBNFNLU0FvU0tBT2l2Z1lNekJlU3ZzVndtSHlDRGZNYlNCNXNQaHlWY1p6NUF4cHJndG9YRHQzMFVTRWhJU0VoSVNFallvS2UxdWpPLzB2bGhzd3JZb1U5UW9Tc0VTdER0K2phaEVEa2JoTGZZNnJGaXNIZWhoNE92ekgyQllBVWNwZUhydTg0UUlzZ3F0MDRHTVFKSmhZRHRBWTRUMnZVQnI0TGd1bDdvK25hNERERUNJQmh2ZzRqdzZ6bzhzQXRWY0xFM2VBa0NZWjB3eUovYmlFTW1GR3hBVGd0aGpEc09ENXRvL0FwZDFJdTJjY2NhSWdpWFI4N0liZ2RFYjBqa0FoRHM5MEJFbW5EL284QTFIeDhmSmhNU0VoSVNFaEoyRmFzdlMxM1J6WkNPMWVqK1U3cjgwT2hVVmVUeTNTcXcxQVhDOFR3c1VRRlVMdkRrMUJKZW5kNFpBcUdMYTNvL2xpSUlYdDhSMzNJRkl1bUhRRWFpbmxnMEZObTFkU3gybDBFQ0ltdkQzV1lXWWlESW53U0ltWmNySVFROEhBWWN6UVlzeUFxSEhkRzQ5Y2lHV0tJQzdsSjNkQXdRaU9mQllRUCt3eTBDckJyWTFhUGx2SW5GQ1hCWHdIc0xseW9HQ01iUDRTNUN1R2JvZ3haRW1nQnJJdEVtNEc3bDBydUh0SmU4MkFvRTJvakR3RmdURjlZTWZZUUFHY2tIeUhBZkFPNStOWFNQd3NYaHNjVFJodVBqTHNEU3d4eHNmVDVBUWxvaGtaQ1FrSkNRSURwRW9Hc2Roc01ETXpnajZMWHFCNTBtOE5kOGRlbDYyaDFIZjg0akpJUTl4eTRaRkRaWEJRNkZJVlMrT3YydTUrZUI2Qko2T2h4aXQ5UTFHMjd4Qi9SWUNQS3pWZ2JBWmtEdzl4dUl3UHNCWFBrTU9sOHRscGgrRmNDT0JkL2hheWVnQ1RkOUJFaUloTS9PNmV0Z3VXdDJHcndXNGR3WjFraUJkTlRRZmlJRS9IYzhOdDlzSjBSRXJBK3dDT0JOWXUzaG5lblVkRExCaXM3bzgvMk9jbjhUZDVoRThCR2lKVHJGNnhnWWFVWkhodklCOGVnMXRnZ29sbjhJNTQrU241T1FrSkNRa0xCVktHNzRRT1p3T3lBMFhjVzk0YXZvdjAxVEFjNXBGdXA5RmRIWlFDaEVSMjlQYnFzRnRQR1dvYWVBQWdWRE5MNHJvTFlBd0FTR0h6bUFyWnF0QXZmeWJWeXU5Q2ZSR2RBQXZtNEROTndUYkRvYzBPdml0b3NBZ0VoMXRES0ZJOVlESzVQaGpRM3hOdGsyTVhsekxNRGFuNjdZcUFueVdBQmZyOURRdlZYem9lRStJSFI3bStpOE1GYkMrd0J3V3R4MmpZTEJVY0RaNWRNQkFvTEx4SUl2cDdnaGZrRDBCTVh5KzhwYkdQMTMwVDhoSVNFaFliZFFhaitoWEg3L04wT0ZOMzNWYnF3cU54bUg5dmd5NHJuQjQ5cFZLa1A2NCtJeXpNY2JrUUZrNGcwN0FUcGlYNG43d2lQelF2Rm9BWFpBb3hLYzUva1lPWHZWMzJQTDFSMzRuNlllTFRRY0VYM2JHblBabXRuYVg1UTN0UjVtTUJ4Q05tUnVHdmlqTjN2cWtqcDJBOWNWMnlBdHovT2lCaU5rUWdoQURJQTIwU0Z3Q3hpMW52U2VRdXRLUTJNQnZ2bnUrblRtaEVNWW5wMzlESmlBMld3V2ZnSkRBRGdGSndIN2hFRFFxcU1OaWhDSkNha3JTQWsvMXZCWkFJd0IvZElYWHZRQmdDcElhbnhjSFg1c0NEajdhZjh2aElDSER4OWF5K1A5TXR2QUNkRDZmNEVKb0NZRlNuK3dLU3BRMmc4ZWFuZ3RZRStyRHVNOWt3Y29LL3R2Q2REblJ5bTIrblRtaEtvSlBIK09tOEJNcUZ1Z2ZyWUhsTlhuaWdSby9SKzkrOEpQZ0dRYjFCWXA5eVFLWWVEbzZNamZCOENlWWtEcGp3bW92bG9DcWs0UUVmQldILzMyYmJQaHJPNEV6N3h0M2tHQXNKK25vQVI4anZNVGc5RWo5VFAzRVdBOW92SnhCWFRCazVNVE1DWnFXVUM1Tng2ckg2WUpWTEtmZ0pNYWl3MHlnNSt5YkE2WkpBU1VxQmY4ZGZYQitnNDVBVU5HQUJBTEdCajlBd1MwcC91b0FqTzU0ZEJuQWVWZWhSSThNdWcrZGd5a1RXWlpPd3BremZVenJ3WFlCTVNhQUM2dis4QmNXQVNVOUhyTUQ0QXZZMzdBa3NOZ1haOEJ6Y0dVWnVnR1crRklwemZDbDdjM2NBSXFCdkoxT25ybHFFSjU5Vk13MTJXcFBPNEtOZDVmcS80SkNRa0pDVnVPRnkvQzVRVUU4OXIxZjM2S1pqM2FZZkJKTlV3OXdSa0hIR01QRnZLQWhXZjdTOHRDL0lIVkp3K09heXJhT21hYjFMQ045UzlMdzhCRWU1RVgyUmdGTzZyS2c4ZGcvR3hQMWdQcEx4QUQ2bUFOTnRORVBadE11NEpMeS9YOWFEWEl0VE5YdEdON29ia2Q0SHQ2Q25ESzlOZU8wcEhSWC92bWJmUXIzWTRZQ3VmaE4rcHpqaXRVcXZ0Y292M0ozS0QxK1B1L3hhWDRKNDV2TXlWa1JCWlVQaDRlSTFuWGZ6VHlWUkFXemo1UWcwTVdweW83S296cldHY3MydWpLSm9DRnd5QmV2YjM3OHQzYk1iNy9ZMUdLWlFuNEQveFdmZjZCRmRTdVA1Tng4S0ZpNDJIR2ZWOUFMUml2VUdIWGU5R0lxQitZd1BsSWNWQUxqNXVNeldNZkFZdGVBRm5BT2Z3ZFhnRFdINlhzNGhid0wvR0wrSjlKS1owd0N6aGhGbkRDTEdCRVlnL1ZBdXBPcW8xdjJmVytxcVd2MmdwV3dUeU9IVUQzQVdpMWZKU0FWMjgvLzFoOTNQb3ZQSFZNUUFGVjFxbVIvd3RmcTgvZjBJb0owc1lyK1djbW8vS3EvU3A4N0NHZ2llNEsya1NvL1FSNmVSaU94UkdKRnhrQkpXT1k2ZCt1aUtBRUlQbXpYeDVPSHY3MXc0VzhCelFwR3BOSDlPN1pUV0FoWS9IMDFNamE5dHQ4cDVNQWF4UlU1eWdDUzlwNWt2dkpvc0pQTUFIV2VnT1RjRkxOblowdUxBdW12eDNBRjJUTjJ0MXZWZmMzK1BadVM0QnEvMFhnZUV2UmdkV0pza2Q4ZUpLZitRRTg3YzFrMXh0Z1F2S0k2OCtIUVZFdjZqTEYxWXpBbzF6NExJZ2h1NG11WHQ0aHdDYytVRUpDUWtMQ0JqREdpV250eXNHSnRjOEQ2cWxjSXpJOERlSHpkYTUrK2dLbTZ1Y1VEODBYZUdyaUMvamhoKysrZ3c5UmRjNjEvaFhVSC9OMzhPb1Z2SnNUVDdRVVBOM1E1QnRhbVc4WU04Y0g2VDhaajE4VEJqcTk3dDhlYU5XNU1oUnRnbUpneXIzeEkrTjUvVXJqajhZVm5ZN1ZDVVpXY0VPaVU4YzZWRHFYYS9aUnJtT3BnaDB6T1ZnWG1PQktPOFpUZUExckkwQzdXdWdJclh2MVRRM0FFUEQ5anc4ZS9QaTlxYzlZUUQ3Q016dWNBTEprQktwa0ZGcndVSWc2VlZFWVg3dlUrUmhFd0VzOVY0Y3ZPTldzK3dpSXJLZTNwN0l5b0cxcVdzbFRIcnkwRmFwc2ZiODkvSjVlbklIY1ZSaXlCUm4wK0dvZUZPMEFPdkJVOFp6QUZqQVk0UFhxMlh5dXcwdERnTkpmalAwWklFZkd4Ulh1VXhQSDd1YVU2VitTNmNtdllWOEI3aUcvbGh3UHgyRUN6dFNmWi9xcktiNm9KbCtQa0FXdzZQWGx5NzJYYzdob1QvaGExMjZ5UGdLNEJYeFR5YWRVZjZOZ05xMXdSQTgzaEtsYmVueDhUQWdnYmY1STRUUDF4Ulk4VEwxOXdIeXVHd0R1QkYrUHg1TTFkb0tzRC9obTBRZWNtZ3hjVHNMUnVhN3ZrVGw4ZWc0WGlBRjlvalBVN1RYSm0wYS9qejVhZkRFRDhmWUI0M0krbjhNY0FzUGd1a2VCVTUyWU5mWGhvZHQwTVBnS1hTeFhYNFZoQUt3d1hmKzUzMnpndzJCbEVSVThmUUNNTlRBQjdwbUFOZm9CcDFWcXV2Q2tEL2dqWnNwYVhoZTZwM3pRbFA3K2xhU3ZkUkZWcjdHUWhxVk82WlZEY1ZVL1lQTTRPenc4d3haMHJya3FIaFNlaEkrOWNqSWhJU0ZodGVnVXI0Nis4NEh1WWo2NHMwUDZQd040MWdydk43M3UrenVqLzNPdDd2UG0va016MHdUR0JtWXd3d2Y4enJYUWJuMHJ6MllWLzdNK0RVQTVtbzBKM0RjRTNQYzVRaTQvSWplVVdGTVBmQU9YWWFiSDlGbncvTmRyQVBxYXozbHNFM3JkZDhFMzVNWW9JZ3MzdGZ4MCtKVE96Z1llZ09pbEI5QWg5RE55Y1ZxSEFaNFlxL1dmRU52UDhlcGplK251cUJoaC9aNnFIMC9KRHJNTkVwQTM5enYzRTVDekpnOXdXZUN5bk13bTJ3UVV4R1NxaGVaREVrNFRBa3FZeldiOWVicEdZVDhCOWpFRnNYM1NLYTVzQWYxMmdwVUIxQS9OVkRvY0dnSU92UlpnVzFEdWIvS2QrNEIrb3pYZTZkMDE0bDF2SjBqRW5BK0tLNDhDdmI1ZmIyWVVybXR3MElnSEl0QUhlRWJBdGQyV1RmcEY3K20wTE54N2I1TjFTRzlZVEVoSVNFallJZVFRRXE5OTBKM2t3dkp6cnRVVmZmelljcWNEWWgvZU1LV0FFRkNWRlhpSGZGTG9IMEQ1YTE4d1VJZk9wdHlPckhMbU8rZFdNVlF6WkgzR2c0UUNTa0JkMXRhNXVqMUtQYjRESVFDWDJ3UzRudlMxUmVpWEFMd1ltQk5RcFQ4V2xheCtUYXo1OFFraFlCTE04UGcwSmlMMFRVQ1BGckFVQVQxYlFMOTlnQ3Vsc05FK29PZFJ3TTUzYkhnVTJIay9JQ0VoSVNGaHR3RTcvUnhWOFdjQm4zNVdFRWZsWW9mZWs2dWZJNFZQYy9ROFE1YmZjenhBMGZnbS9QMEhYZVd0d3hUK3BBZ1FhSFd5Wm1WaU1XQzlUTDY4bXJ4OUJuQXB4S2U1dU1SUFcwK1BWRVJMbjY4MWlneVBoK3FyWGI0TngzUTl1NWFCeWtQOUdXNnBlMXN1MXMxZm1EdVVqVUN2dGovM0VGQzlHazN1eWZadGV5Q2wzdERJZS9wajNyK255OVVXdVFkYmJBRUtsL2lPNjM1aENsVDlsb0FQYTdRbTNsSGVPa3lxTVhDRTFyeW9ZSFFNUjJNUEFiZXVFOHdBTGk4dWNiZGZweU55b09yZjNnZzFlNmJ1ejdOTUpDUWtKQ1RzSXZqekFUR1pMNkxxS25lOTNxcHlEUHo1Z0pqTWw5RjFsYnRlYjFVNWV2L05Pc0U3eThoOElXVlh1ZXYxVnBXajRNOEgzRGNuYU9RRDdSc2VMT1REOWwxcDlWTGFRN00va29XMy9MNHB2Kys5dm9CZythek8ydUJ5d2VzdjhQTU93V3dZV3h6Tmw4NVd2dzRPOE94d2JIKzczTnJmVEpHN3l2SHNtZnMza1BxSVR6NzVSTkQ2VkU4a0wwc0ErY01oNjlaN3dDb3NJTEMvc0JRSzc4OElpTllIdno3ZUpjOXIvZGRId0FpOWc4NUJnT3QzRjRXaTEzZFlTTWdDOU50RzV0Q0JnSGdUMEcvZjZtTGlzU1lDTVFLRFRVcTRMQXJ2UDYvMVg0NEEvbnlBbzFOck9zRkRieWNGWFBaM3FzNU9rbCtmZDdLMHZPSEhKK3MyUUo5M0NLSHZZV3pWWWJTckhFZmZqc3lxamxSWE9ZNitYZGxWWGVtdWNrSkNRa0pDUWtJc0hBQzRObm43Q2FCdmE0dkx0NUFBQ0JOUWZVZ0VIU1pBZ0xoWkJGVC9uaTBnTTRKQWtNWFV0Z3dpV1VEcUEyNFNBYnMrQ2lRa0pDUWtKQ1NzRy9MbWVBTFJWWkJRZGwvb0t0bi9COXJxZXlYa3lnVHcrMzJUOUYrSEJYQjliNVQrMUFLcTVlM1Z4ME9BNi84TjZQMjUvcmUyRHlnYlVQMmxwYi9jR1F1bzk3KzUrcTlxQVRkZS8xVkhBWS8rdStvSEdQMXZrUi9RaVUxcHZoTVN0aHovQi9oMU9XaXlNcHN3QUFBQUFFbEZUa1N1UW1DQ1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaWNvbnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaWNvbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG5cbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfaWNvbnNfc2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9pY29ucy5zY3NzICovIFwiLi9zcmMvaWNvbnMuc2Nzc1wiKTtcblxyXG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gXHR9KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHR2YXIgZXhlY09wdGlvbnMgPSB7IGlkOiBtb2R1bGVJZCwgbW9kdWxlOiBtb2R1bGUsIGZhY3Rvcnk6IF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLCByZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fIH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikgeyBoYW5kbGVyKGV4ZWNPcHRpb25zKTsgfSk7XG4vKioqKioqLyBcdFx0bW9kdWxlID0gZXhlY09wdGlvbnMubW9kdWxlO1xuLyoqKioqKi8gXHRcdGV4ZWNPcHRpb25zLmZhY3RvcnkuY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgZXhlY09wdGlvbnMucmVxdWlyZSk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgZXhlY3V0aW9uIGludGVyY2VwdG9yXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IFtdO1xuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0ICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG4vKioqKioqLyBcdFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG4vKioqKioqLyBcdFx0XHRcdCgpID0+IChtb2R1bGUpO1xuLyoqKioqKi8gXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMgKi9cbi8qKioqKiovIFx0KCgpID0+IHtcbi8qKioqKiovIFx0XHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcbi8qKioqKiovIFx0XHRcdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcbi8qKioqKiovIFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgdXBkYXRlIGNodW5rIGZpbGVuYW1lICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0Ly8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYWxsIGNodW5rc1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uaHUgPSAoY2h1bmtJZCkgPT4ge1xuLyoqKioqKi8gXHRcdFx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvZ2V0IHVwZGF0ZSBtYW5pZmVzdCBmaWxlbmFtZSAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yRiA9ICgpID0+IChcIkljb25zLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzb25cIik7XG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2ggKi9cbi8qKioqKiovIFx0KCgpID0+IHtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMGFjMTIzNWVkNTNjZmMxZjI2OFwiKVxuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSlcbi8qKioqKiovIFx0fSkoKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdHZhciBpblByb2dyZXNzID0ge307XG4vKioqKioqLyBcdFx0dmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJJY29uczpcIjtcbi8qKioqKiovIFx0XHQvLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcbi8qKioqKiovIFx0XHRcdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG4vKioqKioqLyBcdFx0XHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuLyoqKioqKi8gXHRcdFx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcbi8qKioqKiovIFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG4vKioqKioqLyBcdFx0XHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdGlmKCFzY3JpcHQpIHtcbi8qKioqKiovIFx0XHRcdFx0bmVlZEF0dGFjaCA9IHRydWU7XG4vKioqKioqLyBcdFx0XHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4vKioqKioqLyBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuLyoqKioqKi8gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcbi8qKioqKiovIFx0XHRcdFx0c2NyaXB0LnNyYyA9IHVybDtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcbi8qKioqKiovIFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG4vKioqKioqLyBcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbi8qKioqKiovIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbi8qKioqKiovIFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcbi8qKioqKiovIFx0XHRcdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcbi8qKioqKiovIFx0XHRcdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbi8qKioqKiovIFx0XHRcdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG4vKioqKioqLyBcdFx0XHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdDtcbi8qKioqKiovIFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG4vKioqKioqLyBcdFx0XHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG4vKioqKioqLyBcdFx0XHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuLyoqKioqKi8gXHRcdFx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0fSkoKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QgKi9cbi8qKioqKiovIFx0KCgpID0+IHtcbi8qKioqKiovIFx0XHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcbi8qKioqKiovIFx0XHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0fSkoKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50ICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0dmFyIGN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4vKioqKioqLyBcdFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmM7XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0Ly8gbW9kdWxlIGFuZCByZXF1aXJlIGNyZWF0aW9uXG4vKioqKioqLyBcdFx0dmFyIGN1cnJlbnRDaGlsZE1vZHVsZTtcbi8qKioqKiovIFx0XHR2YXIgY3VycmVudFBhcmVudHMgPSBbXTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHQvLyBzdGF0dXNcbi8qKioqKiovIFx0XHR2YXIgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzID0gW107XG4vKioqKioqLyBcdFx0dmFyIGN1cnJlbnRTdGF0dXMgPSBcImlkbGVcIjtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHQvLyB3aGlsZSBkb3dubG9hZGluZ1xuLyoqKioqKi8gXHRcdHZhciBibG9ja2luZ1Byb21pc2VzO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdC8vIFRoZSB1cGRhdGUgaW5mb1xuLyoqKioqKi8gXHRcdHZhciBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycztcbi8qKioqKiovIFx0XHR2YXIgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yRCA9IGN1cnJlbnRNb2R1bGVEYXRhO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uaS5wdXNoKGZ1bmN0aW9uIChvcHRpb25zKSB7XG4vKioqKioqLyBcdFx0XHR2YXIgbW9kdWxlID0gb3B0aW9ucy5tb2R1bGU7XG4vKioqKioqLyBcdFx0XHR2YXIgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUob3B0aW9ucy5yZXF1aXJlLCBvcHRpb25zLmlkKTtcbi8qKioqKiovIFx0XHRcdG1vZHVsZS5ob3QgPSBjcmVhdGVNb2R1bGVIb3RPYmplY3Qob3B0aW9ucy5pZCwgbW9kdWxlKTtcbi8qKioqKiovIFx0XHRcdG1vZHVsZS5wYXJlbnRzID0gY3VycmVudFBhcmVudHM7XG4vKioqKioqLyBcdFx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcbi8qKioqKiovIFx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW107XG4vKioqKioqLyBcdFx0XHRvcHRpb25zLnJlcXVpcmUgPSByZXF1aXJlO1xuLyoqKioqKi8gXHRcdH0pO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yQyA9IHt9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySSA9IHt9O1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdGZ1bmN0aW9uIGNyZWF0ZVJlcXVpcmUocmVxdWlyZSwgbW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0aWYgKCFtZSkgcmV0dXJuIHJlcXVpcmU7XG4vKioqKioqLyBcdFx0XHR2YXIgZm4gPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR2YXIgcGFyZW50cyA9IGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cztcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChwYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRwYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdH0gZWxzZSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRjdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0XHRcdGNvbnNvbGUud2Fybihcbi8qKioqKiovIFx0XHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0cmVxdWVzdCArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4vKioqKioqLyBcdFx0XHRcdFx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRjdXJyZW50UGFyZW50cyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdHJldHVybiByZXF1aXJlKHJlcXVlc3QpO1xuLyoqKioqKi8gXHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdHZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiAobmFtZSkge1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4ge1xuLyoqKioqKi8gXHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0cmV0dXJuIHJlcXVpcmVbbmFtZV07XG4vKioqKioqLyBcdFx0XHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdFx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0cmVxdWlyZVtuYW1lXSA9IHZhbHVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHRmb3IgKHZhciBuYW1lIGluIHJlcXVpcmUpIHtcbi8qKioqKiovIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXF1aXJlLCBuYW1lKSAmJiBuYW1lICE9PSBcImVcIikge1xuLyoqKioqKi8gXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKG5hbWUpKTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0Zm4uZSA9IGZ1bmN0aW9uIChjaHVua0lkKSB7XG4vKioqKioqLyBcdFx0XHRcdHJldHVybiB0cmFja0Jsb2NraW5nUHJvbWlzZShyZXF1aXJlLmUoY2h1bmtJZCkpO1xuLyoqKioqKi8gXHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdHJldHVybiBmbjtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0ZnVuY3Rpb24gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG1vZHVsZUlkLCBtZSkge1xuLyoqKioqKi8gXHRcdFx0dmFyIGhvdCA9IHtcbi8qKioqKiovIFx0XHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuLyoqKioqKi8gXHRcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuLyoqKioqKi8gXHRcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuLyoqKioqKi8gXHRcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbi8qKioqKiovIFx0XHRcdFx0X21haW46IGN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRcdF9yZXF1aXJlU2VsZjogZnVuY3Rpb24gKCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdGN1cnJlbnRQYXJlbnRzID0gbWUucGFyZW50cy5zbGljZSgpO1xuLyoqKioqKi8gXHRcdFx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IG1vZHVsZUlkO1xuLyoqKioqKi8gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuLyoqKioqKi8gXHRcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHQvLyBNb2R1bGUgQVBJXG4vKioqKioqLyBcdFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0YWNjZXB0OiBmdW5jdGlvbiAoZGVwLCBjYWxsYmFjaykge1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4vKioqKioqLyBcdFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpXG4vKioqKioqLyBcdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG4vKioqKioqLyBcdFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcbi8qKioqKiovIFx0XHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdFx0ZGVjbGluZTogZnVuY3Rpb24gKGRlcCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4vKioqKioqLyBcdFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbi8qKioqKiovIFx0XHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbi8qKioqKiovIFx0XHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuLyoqKioqKi8gXHRcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuLyoqKioqKi8gXHRcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4vKioqKioqLyBcdFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRcdGludmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcbi8qKioqKiovIFx0XHRcdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGJyZWFrO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGJyZWFrO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2FzZSBcInByZXBhcmVcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNhc2UgXCJhcHBseVwiOlxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHQocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGJyZWFrO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZGVmYXVsdDpcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRicmVhaztcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXG4vKioqKioqLyBcdFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbi8qKioqKiovIFx0XHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuLyoqKioqKi8gXHRcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uIChsKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gY3VycmVudFN0YXR1cztcbi8qKioqKiovIFx0XHRcdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbi8qKioqKiovIFx0XHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbi8qKioqKiovIFx0XHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgaWR4ID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4vKioqKioqLyBcdFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuLyoqKioqKi8gXHRcdFx0XHRkYXRhOiBjdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cbi8qKioqKiovIFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaG90O1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRmdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4vKioqKioqLyBcdFx0XHRjdXJyZW50U3RhdHVzID0gbmV3U3RhdHVzO1xuLyoqKioqKi8gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG4vKioqKioqLyBcdFx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdGZ1bmN0aW9uIHRyYWNrQmxvY2tpbmdQcm9taXNlKHByb21pc2UpIHtcbi8qKioqKiovIFx0XHRcdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuLyoqKioqKi8gXHRcdFx0XHRjYXNlIFwicmVhZHlcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRzZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuLyoqKioqKi8gXHRcdFx0XHRcdGJsb2NraW5nUHJvbWlzZXMucHVzaChwcm9taXNlKTtcbi8qKioqKiovIFx0XHRcdFx0XHR3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmdW5jdGlvbiAoKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcbi8qKioqKiovIFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbi8qKioqKiovIFx0XHRcdFx0Y2FzZSBcInByZXBhcmVcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRibG9ja2luZ1Byb21pc2VzLnB1c2gocHJvbWlzZSk7XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIHByb21pc2U7XG4vKioqKioqLyBcdFx0XHRcdGRlZmF1bHQ6XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIHByb21pc2U7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdGZ1bmN0aW9uIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoYmxvY2tpbmdQcm9taXNlcy5sZW5ndGggPT09IDApIHJldHVybiBmbigpO1xuLyoqKioqKi8gXHRcdFx0dmFyIGJsb2NrZXIgPSBibG9ja2luZ1Byb21pc2VzO1xuLyoqKioqKi8gXHRcdFx0YmxvY2tpbmdQcm9taXNlcyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKGJsb2NrZXIpLnRoZW4oZnVuY3Rpb24gKCkge1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pO1xuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5T25VcGRhdGUpIHtcbi8qKioqKiovIFx0XHRcdGlmIChjdXJyZW50U3RhdHVzICE9PSBcImlkbGVcIikge1xuLyoqKioqKi8gXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdHNldFN0YXR1cyhcImNoZWNrXCIpO1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uaG1yTSgpLnRoZW4oZnVuY3Rpb24gKHVwZGF0ZSkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoIXVwZGF0ZSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdHNldFN0YXR1cyhhcHBseUludmFsaWRhdGVkTW9kdWxlcygpID8gXCJyZWFkeVwiIDogXCJpZGxlXCIpO1xuLyoqKioqKi8gXHRcdFx0XHRcdHJldHVybiBudWxsO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdHNldFN0YXR1cyhcInByZXBhcmVcIik7XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdHZhciB1cGRhdGVkTW9kdWxlcyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0XHRibG9ja2luZ1Byb21pc2VzID0gW107XG4vKioqKioqLyBcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdHJldHVybiBQcm9taXNlLmFsbChcbi8qKioqKiovIFx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMpLnJlZHVjZShmdW5jdGlvbiAoXG4vKioqKioqLyBcdFx0XHRcdFx0XHRwcm9taXNlcyxcbi8qKioqKiovIFx0XHRcdFx0XHRcdGtleVxuLyoqKioqKi8gXHRcdFx0XHRcdCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJDW2tleV0oXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHVwZGF0ZS5jLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR1cGRhdGUucixcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0dXBkYXRlLm0sXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHByb21pc2VzLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0dXBkYXRlZE1vZHVsZXNcbi8qKioqKiovIFx0XHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRyZXR1cm4gcHJvbWlzZXM7XG4vKioqKioqLyBcdFx0XHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdFx0XHRbXSlcbi8qKioqKiovIFx0XHRcdFx0KS50aGVuKGZ1bmN0aW9uICgpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRyZXR1cm4gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZnVuY3Rpb24gKCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKGFwcGx5T25VcGRhdGUpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkoYXBwbHlPblVwZGF0ZSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0cmV0dXJuIHVwZGF0ZWRNb2R1bGVzO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJyZWFkeVwiKSB7XG4vKioqKioqLyBcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbi8qKioqKiovIFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4vKioqKioqLyBcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdGZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuLyoqKioqKi8gXHRcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0dmFyIHJlc3VsdHMgPSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycy5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHtcbi8qKioqKiovIFx0XHRcdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gdW5kZWZpbmVkO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0dmFyIGVycm9ycyA9IHJlc3VsdHNcbi8qKioqKiovIFx0XHRcdFx0Lm1hcChmdW5jdGlvbiAocikge1xuLyoqKioqKi8gXHRcdFx0XHRcdHJldHVybiByLmVycm9yO1xuLyoqKioqKi8gXHRcdFx0XHR9KVxuLyoqKioqKi8gXHRcdFx0XHQuZmlsdGVyKEJvb2xlYW4pO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0aWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4vKioqKioqLyBcdFx0XHRcdHNldFN0YXR1cyhcImFib3J0XCIpO1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0dGhyb3cgZXJyb3JzWzBdO1xuLyoqKioqKi8gXHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuLyoqKioqKi8gXHRcdFx0c2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4vKioqKioqLyBcdFx0XHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuLyoqKioqKi8gXHRcdFx0c2V0U3RhdHVzKFwiYXBwbHlcIik7XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHR2YXIgZXJyb3I7XG4vKioqKioqLyBcdFx0XHR2YXIgcmVwb3J0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuLyoqKioqKi8gXHRcdFx0fTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbi8qKioqKiovIFx0XHRcdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4vKioqKioqLyBcdFx0XHRcdGlmIChyZXN1bHQuYXBwbHkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgbW9kdWxlcyA9IHJlc3VsdC5hcHBseShyZXBvcnRFcnJvcik7XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKG1vZHVsZXMpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChtb2R1bGVzW2ldKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbi8qKioqKiovIFx0XHRcdGlmIChlcnJvcikge1xuLyoqKioqKi8gXHRcdFx0XHRzZXRTdGF0dXMoXCJmYWlsXCIpO1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0dGhyb3cgZXJyb3I7XG4vKioqKioqLyBcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChsaXN0KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG4vKioqKioqLyBcdFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIGxpc3Q7XG4vKioqKioqLyBcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0c2V0U3RhdHVzKFwiaWRsZVwiKTtcbi8qKioqKiovIFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0ZnVuY3Rpb24gYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG4vKioqKioqLyBcdFx0XHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmICghY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMpIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG4vKioqKioqLyBcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG4vKioqKioqLyBcdFx0XHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdW5kZWZpbmVkO1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdC8vIG5vIGJhc2VVUklcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLyoqKioqKi8gXHRcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLyoqKioqKi8gXHRcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4vKioqKioqLyBcdFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbi8qKioqKiovIFx0XHRcdFwiSWNvbnNcIjogMFxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0Ly8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHQvLyBubyBwcmVmZXRjaGluZ1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdC8vIG5vIHByZWxvYWRlZFxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdHZhciBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0O1xuLyoqKioqKi8gXHRcdHZhciB3YWl0aW5nVXBkYXRlUmVzb2x2ZXMgPSB7fTtcbi8qKioqKiovIFx0XHRmdW5jdGlvbiBsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbi8qKioqKiovIFx0XHRcdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gcmVzb2x2ZTtcbi8qKioqKiovIFx0XHRcdFx0Ly8gc3RhcnQgdXBkYXRlIGNodW5rIGxvYWRpbmdcbi8qKioqKiovIFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaHUoY2h1bmtJZCk7XG4vKioqKioqLyBcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcbi8qKioqKiovIFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4vKioqKioqLyBcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcbi8qKioqKiovIFx0XHRcdFx0XHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgaG90IHVwZGF0ZSBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcbi8qKioqKiovIFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9O1xuLyoqKioqKi8gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQpO1xuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdHNlbGZbXCJ3ZWJwYWNrSG90VXBkYXRlSWNvbnNcIl0gPSAoY2h1bmtJZCwgbW9yZU1vZHVsZXMsIHJ1bnRpbWUpID0+IHtcbi8qKioqKiovIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbi8qKioqKiovIFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0XHRpZihjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0KSBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0LnB1c2gobW9kdWxlSWQpO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRpZihydW50aW1lKSBjdXJyZW50VXBkYXRlUnVudGltZS5wdXNoKHJ1bnRpbWUpO1xuLyoqKioqKi8gXHRcdFx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG4vKioqKioqLyBcdFx0XHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSgpO1xuLyoqKioqKi8gXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHR2YXIgY3VycmVudFVwZGF0ZUNodW5rcztcbi8qKioqKiovIFx0XHR2YXIgY3VycmVudFVwZGF0ZTtcbi8qKioqKiovIFx0XHR2YXIgY3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3M7XG4vKioqKioqLyBcdFx0dmFyIGN1cnJlbnRVcGRhdGVSdW50aW1lO1xuLyoqKioqKi8gXHRcdGZ1bmN0aW9uIGFwcGx5SGFuZGxlcihvcHRpb25zKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSBkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yO1xuLyoqKioqKi8gXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHVuZGVmaW5lZDtcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyh1cGRhdGVNb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24gKGlkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNoYWluOiBbaWRdLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWQ6IGlkXG4vKioqKioqLyBcdFx0XHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuLyoqKioqKi8gXHRcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0IW1vZHVsZSB8fFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuLyoqKioqKi8gXHRcdFx0XHRcdClcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJldHVybiB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJldHVybiB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG4vKioqKioqLyBcdFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW3BhcmVudElkXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXG4vKioqKioqLyBcdFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuLyoqKioqKi8gXHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuLyoqKioqKi8gXHRcdFx0XHR9O1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuLyoqKioqKi8gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbi8qKioqKiovIFx0XHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cbi8qKioqKiovIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuLyoqKioqKi8gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUobW9kdWxlKSB7XG4vKioqKioqLyBcdFx0XHRcdGNvbnNvbGUud2Fybihcbi8qKioqKiovIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIG1vZHVsZS5pZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuLyoqKioqKi8gXHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0fTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdGZvciAodmFyIG1vZHVsZUlkIGluIGN1cnJlbnRVcGRhdGUpIHtcbi8qKioqKiovIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgbmV3TW9kdWxlRmFjdG9yeSA9IGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgcmVzdWx0O1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChuZXdNb2R1bGVGYWN0b3J5KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHMobW9kdWxlSWQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH0gZWxzZSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4vKioqKioqLyBcdFx0XHRcdFx0XHR9O1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuLyoqKioqKi8gXHRcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0YnJlYWs7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGJyZWFrO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0YnJlYWs7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRicmVhaztcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0YnJlYWs7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRkZWZhdWx0OlxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGFib3J0RXJyb3Jcbi8qKioqKiovIFx0XHRcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IG5ld01vZHVsZUZhY3Rvcnk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0Y3VycmVudFVwZGF0ZSA9IHVuZGVmaW5lZDtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cbi8qKioqKiovIFx0XHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbi8qKioqKiovIFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaisrKSB7XG4vKioqKioqLyBcdFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2pdO1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoXG4vKioqKioqLyBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdICYmXG4vKioqKioqLyBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkICYmXG4vKioqKioqLyBcdFx0XHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuLyoqKioqKi8gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbb3V0ZGF0ZWRNb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuLyoqKioqKi8gXHRcdFx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG4vKioqKioqLyBcdFx0XHRcdFx0IV9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuLyoqKioqKi8gXHRcdFx0XHQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRtb2R1bGU6IG91dGRhdGVkTW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRyZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF0uaG90Ll9yZXF1aXJlU2VsZixcbi8qKioqKiovIFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcjogX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4vKioqKioqLyBcdFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdHJldHVybiB7XG4vKioqKioqLyBcdFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gdW5kZWZpbmVkO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHRcdHZhciBpZHg7XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4vKioqKioqLyBcdFx0XHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdFx0XHR2YXIgZGF0YSA9IHt9O1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG4vKioqKioqLyBcdFx0XHRcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRkaXNwb3NlSGFuZGxlcnNbal0uY2FsbChudWxsLCBkYXRhKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yRFttb2R1bGVJZF0gPSBkYXRhO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcbi8qKioqKiovIFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbi8qKioqKiovIFx0XHRcdFx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4vKioqKioqLyBcdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHZhciBjaGlsZCA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuLyoqKioqKi8gXHRcdFx0XHRcdHZhciBkZXBlbmRlbmN5O1xuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRcdGFwcGx5OiBmdW5jdGlvbiAocmVwb3J0RXJyb3IpIHtcbi8qKioqKiovIFx0XHRcdFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbi8qKioqKiovIFx0XHRcdFx0XHRmb3IgKHZhciB1cGRhdGVNb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGFwcGxpZWRVcGRhdGUsIHVwZGF0ZU1vZHVsZUlkKSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bdXBkYXRlTW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVt1cGRhdGVNb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHRcdC8vIHJ1biBuZXcgcnVudGltZSBtb2R1bGVzXG4vKioqKioqLyBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50VXBkYXRlUnVudGltZS5sZW5ndGg7IGkrKykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWVbaV0oX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4vKioqKioqLyBcdFx0XHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzID0gW107XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdHZhciBhY2NlcHRDYWxsYmFjayA9XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGFjY2VwdENhbGxiYWNrKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihhY2NlcHRDYWxsYmFjaykgIT09IC0xKSBjb250aW51ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goYWNjZXB0Q2FsbGJhY2spO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MucHVzaChkZXBlbmRlbmN5KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBjYWxsYmFja3MubGVuZ3RoOyBrKyspIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrc1trXS5jYWxsKG51bGwsIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAodmFyIG8gPSAwOyBvIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgbysrKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tvXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHZhciBtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dHJ5IHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aXRlbS5yZXF1aXJlKG1vZHVsZUlkKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJLmpzb25wID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBhcHBseUhhbmRsZXJzKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoIWN1cnJlbnRVcGRhdGUpIHtcbi8qKioqKiovIFx0XHRcdFx0Y3VycmVudFVwZGF0ZSA9IHt9O1xuLyoqKioqKi8gXHRcdFx0XHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuLyoqKioqKi8gXHRcdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0XHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdGlmICghX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuLyoqKioqKi8gXHRcdFx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMuanNvbnAgPSBmdW5jdGlvbiAoXG4vKioqKioqLyBcdFx0XHRjaHVua0lkcyxcbi8qKioqKiovIFx0XHRcdHJlbW92ZWRDaHVua3MsXG4vKioqKioqLyBcdFx0XHRyZW1vdmVkTW9kdWxlcyxcbi8qKioqKiovIFx0XHRcdHByb21pc2VzLFxuLyoqKioqKi8gXHRcdFx0YXBwbHlIYW5kbGVycyxcbi8qKioqKiovIFx0XHRcdHVwZGF0ZWRNb2R1bGVzTGlzdFxuLyoqKioqKi8gXHRcdCkge1xuLyoqKioqKi8gXHRcdFx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG4vKioqKioqLyBcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzID0ge307XG4vKioqKioqLyBcdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHJlbW92ZWRDaHVua3M7XG4vKioqKioqLyBcdFx0XHRjdXJyZW50VXBkYXRlID0gcmVtb3ZlZE1vZHVsZXMucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuLyoqKioqKi8gXHRcdFx0XHRvYmpba2V5XSA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gb2JqO1xuLyoqKioqKi8gXHRcdFx0fSwge30pO1xuLyoqKioqKi8gXHRcdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcbi8qKioqKiovIFx0XHRcdGNodW5rSWRzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcbi8qKioqKiovIFx0XHRcdFx0aWYgKFxuLyoqKioqKi8gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmXG4vKioqKioqLyBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcbi8qKioqKiovIFx0XHRcdFx0KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSk7XG4vKioqKioqLyBcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikge1xuLyoqKioqKi8gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXIgPSBmdW5jdGlvbiAoY2h1bmtJZCwgcHJvbWlzZXMpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRpZiAoXG4vKioqKioqLyBcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzICYmXG4vKioqKioqLyBcdFx0XHRcdFx0XHQhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGVDaHVua3MsIGNodW5rSWQpICYmXG4vKioqKioqLyBcdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcbi8qKioqKiovIFx0XHRcdFx0XHQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yTSA9ICgpID0+IHtcbi8qKioqKiovIFx0XHRcdGlmICh0eXBlb2YgZmV0Y2ggPT09IFwidW5kZWZpbmVkXCIpIHRocm93IG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydDogbmVlZCBmZXRjaCBBUElcIik7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGKCkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4vKioqKioqLyBcdFx0XHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSByZXR1cm47IC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbi8qKioqKiovIFx0XHRcdFx0aWYoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXBkYXRlIG1hbmlmZXN0IFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4vKioqKioqLyBcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdC8vIG5vIGRlZmVycmVkIHN0YXJ0dXBcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHQvLyBubyBqc29ucCBmdW5jdGlvblxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdC8vIG5vIGRlZmVycmVkIHN0YXJ0dXBcbi8qKioqKiovIFx0fSkoKTtcbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gbW9kdWxlIGNhY2hlIGFyZSB1c2VkIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vKioqKioqLyBcdC8vIHN0YXJ0dXBcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2ljb25zLmpzXCIpO1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX2V4cG9ydHNfXy5kZWZhdWx0O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19leHBvcnRzX187XG4vKioqKioqLyB9KSgpXG47XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OUpZMjl1Y3k5M1pXSndZV05yTDNWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRpTENKM1pXSndZV05yT2k4dlNXTnZibk12TGk5emNtTXZhV052Ym5NdWMyTnpjeUlzSW5kbFluQmhZMnM2THk5SlkyOXVjeTh1TGk5dWIyUmxYMjF2WkhWc1pYTXZZM056TFd4dllXUmxjaTlrYVhOMEwzSjFiblJwYldVdllYQnBMbXB6SWl3aWQyVmljR0ZqYXpvdkwwbGpiMjV6THk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYzNNdGJHOWhaR1Z5TDJScGMzUXZjblZ1ZEdsdFpTOWpjM05YYVhSb1RXRndjR2x1WjFSdlUzUnlhVzVuTG1weklpd2lkMlZpY0dGamF6b3ZMMGxqYjI1ekx5NHVMMjV2WkdWZmJXOWtkV3hsY3k5amMzTXRiRzloWkdWeUwyUnBjM1F2Y25WdWRHbHRaUzluWlhSVmNtd3Vhbk1pTENKM1pXSndZV05yT2k4dlNXTnZibk12TGk5emNtTXZhV052Ym5NdWMyTnpjejgxTm1aaUlpd2lkMlZpY0dGamF6b3ZMMGxqYjI1ekx5NHVMMjV2WkdWZmJXOWtkV3hsY3k5emRIbHNaUzFzYjJGa1pYSXZaR2x6ZEM5eWRXNTBhVzFsTDJsdWFtVmpkRk4wZVd4bGMwbHVkRzlUZEhsc1pWUmhaeTVxY3lJc0luZGxZbkJoWTJzNkx5OUpZMjl1Y3k4dUwzTnlZeTlwYldGblpYTXZhV052Ym5NdWNHNW5JaXdpZDJWaWNHRmphem92TDBsamIyNXpMeTR2YzNKakwybGpiMjV6TG1weklpd2lkMlZpY0dGamF6b3ZMMGxqYjI1ekwzZGxZbkJoWTJzdlltOXZkSE4wY21Gd0lpd2lkMlZpY0dGamF6b3ZMMGxqYjI1ekwzZGxZbkJoWTJzdmNuVnVkR2x0WlM5amIyMXdZWFFnWjJWMElHUmxabUYxYkhRZ1pYaHdiM0owSWl3aWQyVmljR0ZqYXpvdkwwbGpiMjV6TDNkbFluQmhZMnN2Y25WdWRHbHRaUzlrWldacGJtVWdjSEp2Y0dWeWRIa2daMlYwZEdWeWN5SXNJbmRsWW5CaFkyczZMeTlKWTI5dWN5OTNaV0p3WVdOckwzSjFiblJwYldVdloyVjBJR3BoZG1GelkzSnBjSFFnZFhCa1lYUmxJR05vZFc1cklHWnBiR1Z1WVcxbElpd2lkMlZpY0dGamF6b3ZMMGxqYjI1ekwzZGxZbkJoWTJzdmNuVnVkR2x0WlM5blpYUWdkWEJrWVhSbElHMWhibWxtWlhOMElHWnBiR1Z1WVcxbElpd2lkMlZpY0dGamF6b3ZMMGxqYjI1ekwzZGxZbkJoWTJzdmNuVnVkR2x0WlM5blpYUkdkV3hzU0dGemFDSXNJbmRsWW5CaFkyczZMeTlKWTI5dWN5OTNaV0p3WVdOckwzSjFiblJwYldVdmFHRnpUM2R1VUhKdmNHVnlkSGtnYzJodmNuUm9ZVzVrSWl3aWQyVmljR0ZqYXpvdkwwbGpiMjV6TDNkbFluQmhZMnN2Y25WdWRHbHRaUzlzYjJGa0lITmpjbWx3ZENJc0luZGxZbkJoWTJzNkx5OUpZMjl1Y3k5M1pXSndZV05yTDNKMWJuUnBiV1V2YldGclpTQnVZVzFsYzNCaFkyVWdiMkpxWldOMElpd2lkMlZpY0dGamF6b3ZMMGxqYjI1ekwzZGxZbkJoWTJzdmNuVnVkR2x0WlM5b2IzUWdiVzlrZFd4bElISmxjR3hoWTJWdFpXNTBJaXdpZDJWaWNHRmphem92TDBsamIyNXpMM2RsWW5CaFkyc3ZjblZ1ZEdsdFpTOXdkV0pzYVdOUVlYUm9JaXdpZDJWaWNHRmphem92TDBsamIyNXpMM2RsWW5CaFkyc3ZjblZ1ZEdsdFpTOXFjMjl1Y0NCamFIVnVheUJzYjJGa2FXNW5JaXdpZDJWaWNHRmphem92TDBsamIyNXpMM2RsWW5CaFkyc3ZjM1JoY25SMWNDSmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE8wRkJRMFFzVHpzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRWa0U3UVVGRE5FZzdRVUZETjBJN1FVRkRUenRCUVVOMlF6dEJRVU12UkN3NFFrRkJPRUlzYlVaQlFUSkNMRU5CUVVNc2QwZEJRWEZETzBGQlF5OUdMSGxEUVVGNVF5eHpSa0ZCSzBJc1EwRkJReXh6UkVGQk5rSTdRVUZEZEVjN1FVRkRRU3h4UkVGQmNVUXNNRUpCUVRCQ0xITkZRVUZ6UlN4blFrRkJaMElzYVVKQlFXbENMSEZDUVVGeFFpeDFRa0ZCZFVJc1pVRkJaU3hGUVVGRkxHdERRVUZyUXl3clFrRkJLMElzUlVGQlJTeHRRMEZCYlVNc2JVTkJRVzFETEVWQlFVVXNhME5CUVd0RExHMURRVUZ0UXl4RlFVRkZMRzFEUVVGdFF5eHRRMEZCYlVNc1JVRkJSU3hyUTBGQmEwTXNiVU5CUVcxRExFVkJRVVVzYlVOQlFXMURMRzFEUVVGdFF5eEZRVUZGTEd0RFFVRnJReXh0UTBGQmJVTXNSVUZCUlN4dFEwRkJiVU1zYjBOQlFXOURMRVZCUVVVc2IwTkJRVzlETEc5RFFVRnZReXhGUVVGRkxHOURRVUZ2UXl4dlEwRkJiME1zUlVGQlJTeHhRMEZCY1VNc2NVTkJRWEZETEVWQlFVVXNjME5CUVhORExIVkRRVUYxUXl4RlFVRkZMSEZEUVVGeFF5eDFRMEZCZFVNc1JVRkJSU3h6UTBGQmMwTXNkVU5CUVhWRExFVkJRVVVzY1VOQlFYRkRMSFZEUVVGMVF5eEZRVUZGTEhORFFVRnpReXgxUTBGQmRVTXNSVUZCUlN4eFEwRkJjVU1zZFVOQlFYVkRMRVZCUVVVc2MwTkJRWE5ETEhkRFFVRjNReXhGUVVGRkxIVkRRVUYxUXl4M1EwRkJkME1zUlVGQlJTeDFRMEZCZFVNc2QwTkJRWGRETEVWQlFVVXNhME5CUVd0RExIRkRRVUZ4UXl4RlFVRkZMRzFEUVVGdFF5eDFRMEZCZFVNc1JVRkJSU3hyUTBGQmEwTXNkVU5CUVhWRExFVkJRVVVzYlVOQlFXMURMSFZEUVVGMVF5eEZRVUZGTEd0RFFVRnJReXgxUTBGQmRVTXNSVUZCUlN4dFEwRkJiVU1zZFVOQlFYVkRMRVZCUVVVc2EwTkJRV3RETEhWRFFVRjFReXhGUVVGRkxHMURRVUZ0UXl4M1EwRkJkME1zUlVGQlJTeHZRMEZCYjBNc2QwTkJRWGRETEVWQlFVVXNjME5CUVhORExIZERRVUYzUXl4RlFVRkZMRzlEUVVGdlF5eDNRMEZCZDBNc1JVRkJSU3h6UTBGQmMwTXNkME5CUVhkRExFVkJRVVVzYzBOQlFYTkRMSGREUVVGM1F5eEZRVUZGTEhORFFVRnpReXgzUTBGQmQwTXNSVUZCUlN4elEwRkJjME1zZDBOQlFYZERMRVZCUVVVc2MwTkJRWE5ETEhkRFFVRjNReXhGUVVGRkxIVkRRVUYxUXl4eFEwRkJjVU1zUlVGQlJTeDNRMEZCZDBNc2RVTkJRWFZETEVWQlFVVXNkVU5CUVhWRExIVkRRVUYxUXl4RlFVRkZMSGREUVVGM1F5eDFRMEZCZFVNc1JVRkJSU3gxUTBGQmRVTXNkVU5CUVhWRExFVkJRVVVzZDBOQlFYZERMSFZEUVVGMVF5eEZRVUZGTEhWRFFVRjFReXgxUTBGQmRVTXNSVUZCUlN4M1EwRkJkME1zZDBOQlFYZERMRVZCUVVVc2VVTkJRWGxETEhkRFFVRjNReXhGUVVGRkxESkRRVUV5UXl4M1EwRkJkME1zUlVGQlJTeDVRMEZCZVVNc2QwTkJRWGRETEVWQlFVVXNNa05CUVRKRExIZERRVUYzUXl4RlFVRkZMREpEUVVFeVF5eDNRMEZCZDBNc1JVRkJSU3d5UTBGQk1rTXNkME5CUVhkRExFVkJRVVVzTWtOQlFUSkRMSGREUVVGM1F5eEZRVUZGTERKRFFVRXlReXgzUTBGQmQwTXNSVUZCUlN3MlEwRkJOa01zY1VOQlFYRkRMRVZCUVVVc05rTkJRVFpETEhWRFFVRjFReXhGUVVGRkxIbERRVUY1UXl4eFEwRkJjVU1zUlVGQlJTeHZRMEZCYjBNc2RVTkJRWFZETEVWQlFVVXNhVU5CUVdsRExIVkRRVUYxUXl4RlFVRkZMRzFEUVVGdFF5eDFRMEZCZFVNc1JVRkJSU3cyUWtGQk5rSXNkVU5CUVhWRExFVkJRVVVzYjBOQlFXOURMSFZEUVVGMVF5eEZRVUZGTEd0RFFVRnJReXgxUTBGQmRVTXNSVUZCUlN4cFEwRkJhVU1zZDBOQlFYZERMRVZCUVVVc1owTkJRV2RETEhkRFFVRjNReXhGUVVGRkxDdENRVUVyUWl4M1EwRkJkME1zUlVGQlJTdzRRa0ZCT0VJc2QwTkJRWGRETEVWQlFVVXNPRUpCUVRoQ0xIZERRVUYzUXl4RlFVRkZMQ3RDUVVFclFpeDNRMEZCZDBNc1JVRkJSU3hwUTBGQmFVTXNkME5CUVhkRExFVkJRVVVzYVVOQlFXbERMSGREUVVGM1F5eEZRVUZGTERSQ1FVRTBRaXgzUTBGQmQwTXNSVUZCUlN3MlFrRkJOa0lzYzBOQlFYTkRMRVZCUVVVc05rSkJRVFpDTEhkRFFVRjNReXhGUVVGRkxHMURRVUZ0UXl4M1EwRkJkME1zUlVGQlJTdzJRa0ZCTmtJc2QwTkJRWGRETEVWQlFVVXNLMEpCUVN0Q0xIZERRVUYzUXl4RlFVRkZMRGhDUVVFNFFpeDNRMEZCZDBNc1JVRkJSU3cyUWtGQk5rSXNkME5CUVhkRExFVkJRVVVzYVVOQlFXbERMSGxEUVVGNVF5eEZRVUZGTEN0Q1FVRXJRaXg1UTBGQmVVTXNSVUZCUlN4blEwRkJaME1zZVVOQlFYbERMRVZCUVVVc0swSkJRU3RDTEhsRFFVRjVReXhGUVVGRkxDdENRVUVyUWl4NVEwRkJlVU1zUlVGQlJTdzJRa0ZCTmtJc2VVTkJRWGxETEVWQlFVVXNPRUpCUVRoQ0xIbERRVUY1UXl4RlFVRkZMRFpDUVVFMlFpeDVRMEZCZVVNc1JVRkJSU3cyUWtGQk5rSXNlVU5CUVhsRExFVkJRVVVzSzBKQlFTdENMSE5EUVVGelF5eEZRVUZGTERaQ1FVRTJRaXgzUTBGQmQwTXNSVUZCUlN4clEwRkJhME1zZDBOQlFYZERMRVZCUVVVc09FSkJRVGhDTEhkRFFVRjNReXhGUVVGRkxHMURRVUZ0UXl4M1EwRkJkME1zUlVGQlJTdzBRa0ZCTkVJc2QwTkJRWGRETEVWQlFVVXNhME5CUVd0RExIZERRVUYzUXl4RlFVRkZMR2xEUVVGcFF5eDVRMEZCZVVNc1JVRkJSU3hyUTBGQmEwTXNlVU5CUVhsRExFVkJRVVVzTmtKQlFUWkNMSGxEUVVGNVF5eEZRVUZGTEdkRFFVRm5ReXg1UTBGQmVVTXNSVUZCUlN3NFFrRkJPRUlzZVVOQlFYbERMRVZCUVVVc09FSkJRVGhDTEhsRFFVRjVReXhGUVVGRkxDdENRVUVyUWl4NVEwRkJlVU1zUlVGQlJTdzRRa0ZCT0VJc2QwTkJRWGRETEVWQlFVVXNiVU5CUVcxRExIZERRVUYzUXl4RlFVRkZMRGhDUVVFNFFpeHpRMEZCYzBNc1JVRkJSU3cyUWtGQk5rSXNkME5CUVhkRExFVkJRVVVzSzBKQlFTdENMSGREUVVGM1F5eEZRVUZGTERaQ1FVRTJRaXgzUTBGQmQwTXNSVUZCUlN3NFFrRkJPRUlzZDBOQlFYZERMRVZCUVVVc0swSkJRU3RDTEhkRFFVRjNReXhGUVVGRkxHdERRVUZyUXl4M1EwRkJkME1zUlVGQlJTeHBRMEZCYVVNc2VVTkJRWGxETEVWQlFVVXNPRUpCUVRoQ0xIbERRVUY1UXl4RlFVRkZMRGhDUVVFNFFpeDVRMEZCZVVNc1JVRkJSU3cyUWtGQk5rSXNjME5CUVhORExFVkJRVVVzT0VKQlFUaENMSGREUVVGM1F5eEZRVUZGTEd0RFFVRnJReXgzUTBGQmQwTXNSVUZCUlN4clEwRkJhME1zZDBOQlFYZERMRVZCUVVVc2FVTkJRV2xETEhkRFFVRjNReXhGUVVGRkxHMURRVUZ0UXl4M1EwRkJkME1zUlVGQlJTdzJRa0ZCTmtJc2QwTkJRWGRETEVWQlFVVXNPRUpCUVRoQ0xIbERRVUY1UXl4RlFVRkZMRzFEUVVGdFF5eDVRMEZCZVVNc1JVRkJSU3hyUTBGQmEwTXNlVU5CUVhsRExFVkJRVVVzVTBGQlV5dzJSVUZCTmtVc1dVRkJXU3hoUVVGaExGZEJRVmNzVlVGQlZTeFpRVUZaTEdGQlFXRXNaMEpCUVdkQ0xFdEJRVXNzYVVKQlFXbENMRTFCUVUwc2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2FVUkJRV2xFTERSQ1FVRTBRaXc0UTBGQk9FTXNhMEpCUVd0Q0xHMUNRVUZ0UWl4MVFrRkJkVUlzZVVKQlFYbENMR2xDUVVGcFFpdzRSRUZCT0VRc2FVTkJRV2xETEU5QlFVOHNhVU5CUVdsRExIRkRRVUZ4UXl4UFFVRlBMR2REUVVGblF5eDVRMEZCZVVNc1QwRkJUeXhwUTBGQmFVTXNlVU5CUVhsRExFOUJRVThzWjBOQlFXZERMSGxEUVVGNVF5eFBRVUZQTEdsRFFVRnBReXg1UTBGQmVVTXNUMEZCVHl4blEwRkJaME1zZVVOQlFYbERMRTlCUVU4c2FVTkJRV2xETEhsRFFVRjVReXhQUVVGUExHdERRVUZyUXl4NVEwRkJlVU1zVDBGQlR5eHJRMEZCYTBNc2VVTkJRWGxETEU5QlFVOHNhVVZCUVdsRkxEWkRRVUUyUXl4UFFVRlBMRzlEUVVGdlF5dzJRMEZCTmtNc1QwRkJUeXh0UTBGQmJVTXNOa05CUVRaRExFOUJRVThzYjBOQlFXOURMRFpEUVVFMlF5eFBRVUZQTEhWRFFVRjFReXcyUTBGQk5rTXNUMEZCVHl4M1EwRkJkME1zTmtOQlFUWkRMRTlCUVU4c2RVTkJRWFZETERaRFFVRTJReXhQUVVGUExIZERRVUYzUXl3MlEwRkJOa01zVDBGQlR5eHhRMEZCY1VNc05rTkJRVFpETEU5QlFVOHNjVU5CUVhGRExEWkRRVUUyUXl4UFFVRlBMR2RGUVVGblJTdzJRMEZCTmtNc1QwRkJUeXhwUTBGQmFVTXNOa05CUVRaRExFOUJRVThzWjBOQlFXZERMRFpEUVVFMlF5eFBRVUZQTEdsRFFVRnBReXcyUTBGQk5rTXNUMEZCVHl4blEwRkJaME1zTmtOQlFUWkRMRTlCUVU4c2FVTkJRV2xETERaRFFVRTJReXhQUVVGUExHZERRVUZuUXl3MlEwRkJOa01zVDBGQlR5eHBRMEZCYVVNc05rTkJRVFpETEU5QlFVOHNjME5CUVhORExEWkRRVUUyUXl4UFFVRlBMRzlEUVVGdlF5dzJRMEZCTmtNc1QwRkJUeXhyUTBGQmEwTXNPRU5CUVRoRExFOUJRVThzYjBOQlFXOURMRGhEUVVFNFF5eFBRVUZQTEc5RFFVRnZReXc0UTBGQk9FTXNUMEZCVHl4M1EwRkJkME1zT0VOQlFUaERMRTlCUVU4c2IwTkJRVzlETERoRFFVRTRReXhQUVVGUExHOURRVUZ2UXl3NFEwRkJPRU1zVDBGQlR5eHRSVUZCYlVVc05rTkJRVFpETEU5QlFVOHNjME5CUVhORExEWkRRVUUyUXl4UFFVRlBMSEZEUVVGeFF5dzJRMEZCTmtNc1QwRkJUeXh6UTBGQmMwTXNOa05CUVRaRExFOUJRVThzY1VOQlFYRkRMRFpEUVVFMlF5eFBRVUZQTEhORFFVRnpReXcyUTBGQk5rTXNUMEZCVHl4eFEwRkJjVU1zTmtOQlFUWkRMRTlCUVU4c2MwTkJRWE5ETERaRFFVRTJReXhQUVVGUExIVkRRVUYxUXl3MlEwRkJOa01zVDBGQlR5eDVRMEZCZVVNc05rTkJRVFpETEU5QlFVOHNkVU5CUVhWRExEaERRVUU0UXl4UFFVRlBMSGxEUVVGNVF5dzRRMEZCT0VNc1QwRkJUeXg1UTBGQmVVTXNPRU5CUVRoRExFOUJRVThzZVVOQlFYbERMRGhEUVVFNFF5eFBRVUZQTEhsRFFVRjVReXc0UTBGQk9FTXNUMEZCVHl4NVEwRkJlVU1zT0VOQlFUaERMRTlCUVU4c2FVVkJRV2xGTERaRFFVRTJReXhQUVVGUExESkRRVUV5UXl3MlEwRkJOa01zVDBGQlR5eHBia0pCUVdsdVFpeFpRVUZaTEdkRFFVRm5ReXh4UWtGQmNVSXNUVUZCVFN4RlFVRkZMSGRFUVVGM1JDeHhRa0ZCY1VJc1QwRkJUeXh6U2tGQmMwb3NXVUZCV1N4blEwRkJaME1zY1VKQlFYRkNMRTFCUVUwc1JVRkJSU3g1UkVGQmVVUXNjVUpCUVhGQ0xFOUJRVThzYjB0QlFXOUxMRmxCUVZrc1owTkJRV2RETEhGQ1FVRnhRaXhOUVVGTkxFVkJRVVVzZVVSQlFYbEVMSEZDUVVGeFFpeFBRVUZQTERSQ1FVRTBRaXd3UTBGQk1FTXNUMEZCVHl4cFEwRkJhVU1zTUVOQlFUQkRMRTlCUVU4c2NWWkJRWEZXTEZsQlFWa3NaME5CUVdkRExIRkNRVUZ4UWl4TlFVRk5MRVZCUVVVc05FUkJRVFJFTEhGQ1FVRnhRaXhQUVVGUExESklRVUV5U0N4WlFVRlpMR2REUVVGblF5eHhRa0ZCY1VJc1RVRkJUU3hGUVVGRkxEWkVRVUUyUkN4eFFrRkJjVUlzVDBGQlR5eDVNRUpCUVhrd1FpeDFRa0ZCZFVJN1FVRkRhbWh3UWp0QlFVTkJMR2xGUVVGbExIVkNRVUYxUWl4RlFVRkRPenM3T3pzN096czdPenRCUTFZeFFqczdRVUZGWWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdkQ1FVRm5RanM3UVVGRmFFSTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzTkVOQlFUUkRMSEZDUVVGeFFqdEJRVU5xUlRzN1FVRkZRVHRCUVVOQkxFdEJRVXM3UVVGRFRDeEpRVUZKTzBGQlEwbzdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFTeHhRa0ZCY1VJc2FVSkJRV2xDTzBGQlEzUkRPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3h2UWtGQmIwSXNjVUpCUVhGQ08wRkJRM3BET3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzUlRzN096czdPenM3T3p0QlEycEZZVHM3UVVGRllpeHBRMEZCYVVNc01raEJRVEpJT3p0QlFVVTFTaXcyUWtGQk5rSXNhMHRCUVd0TE96dEJRVVV2VEN4cFJFRkJhVVFzWjBKQlFXZENMR2RGUVVGblJTeDNSRUZCZDBRc05rUkJRVFpFTEhORVFVRnpSQ3hyU0VGQmEwZzdPMEZCUlRsYUxITkRRVUZ6UXl4MVJFRkJkVVFzZFVOQlFYVkRMRk5CUVZNc1QwRkJUeXhyUWtGQmEwSXNSVUZCUlN4aFFVRmhPenRCUVVWeVRDeDNRMEZCZDBNc1owWkJRV2RHTEdWQlFXVXNaVUZCWlN4blFrRkJaMElzYjBKQlFXOUNMRTFCUVUwc01FTkJRVEJETEN0Q1FVRXJRaXhoUVVGaExIRkNRVUZ4UWl4dFEwRkJiVU1zUlVGQlJTeEZRVUZGTEdOQlFXTXNWMEZCVnl4VlFVRlZMRVZCUVVVc1ZVRkJWU3hOUVVGTkxHbEVRVUZwUkN4RlFVRkZMRlZCUVZVc2EwSkJRV3RDTEVWQlFVVXNSVUZCUlN4aFFVRmhPenRCUVVWMlpTd3JRa0ZCSzBJc2IwTkJRVzlET3p0QlFVVnVSVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3gxUkVGQmRVUXNZMEZCWXp0QlFVTnlSVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVRzN1FVRkZRVHRCUVVOQkxFVTdPenM3T3pzN096czdRVU12UW1FN08wRkJSV0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPenM3UVVGSFNEczdRVUZGUVR0QlFVTkJPMEZCUTBFc1IwRkJSenM3TzBGQlIwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hGT3pzN096czdPenM3T3pzN096czdPenRCUTJwREswWTdRVUZETDBZc1dVRkJNRTQ3TzBGQlJURk9PenRCUVVWQk8wRkJRMEU3TzBGQlJVRXNZVUZCWVN3d1IwRkJSeXhEUVVGRExEQk1RVUZQT3pzN1FVRkhlRUlzU1VGQlNTeEpRVUZWTzBGQlEyUXNUMEZCVHl4cFRVRkJZeXhKUVVGSkxGVkJRVlU3UVVGRGJrTTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4dlFrRkJiMElzYVUxQlFXTTdPMEZCUld4RExFbEJRVWtzYVVKQlFXbENPMEZCUTNKQ0xFMUJRVTBzYVZoQlFYbE1PMEZCUXk5TUxFMUJRVTA3UVVGQlFUdEJRVU5PTEhORFFVRnpReXhwVFVGQll6dEJRVU53UkN4blFrRkJaMElzVlVGQlZUczdRVUZGTVVJN1FVRkRRVHM3UVVGRlFTd3dRa0ZCTUVJc2FVMUJRV003TzBGQlJYaERMSEZDUVVGeFFpd3dURUZCVHp0QlFVTTFRaXhQUVVGUE8wRkJRMUE3UVVGRFFUczdRVUZGUVN4RlFVRkZMRlZCUVZVN1FVRkRXanRCUVVOQkxFZEJRVWM3UVVGRFNEczdRVUZGUVN4cFJVRkJaU3hwVFVGQll5eE5RVUZOTEVVN096czdPenM3T3pzN1FVTnVSWFJDT3p0QlFVVmlPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVOQlFVTTdPMEZCUlVRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeDFSRUZCZFVRN08wRkJSWFpFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNRMEZCUXpzN1FVRkZSRHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJMR2xDUVVGcFFpeDNRa0ZCZDBJN1FVRkRla003UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3hwUWtGQmFVSXNhVUpCUVdsQ08wRkJRMnhETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1QwRkJUenRCUVVOUU96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3huUWtGQlowSXNTMEZCZDBNc1IwRkJSeXh6UWtGQmFVSXNSMEZCUnl4RFFVRkpPenRCUVVWdVJqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6czdRVUZGU0R0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03TzBGQlJVUTdRVUZEUVN4eFJVRkJjVVVzY1VKQlFYRkNMR0ZCUVdFN08wRkJSWFpIT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3g1UkVGQmVVUTdRVUZEZWtRc1IwRkJSenM3UVVGRlNEczdPMEZCUjBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTERCQ1FVRXdRanRCUVVNeFFqczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTEcxQ1FVRnRRaXcwUWtGQk5FSTdRVUZETDBNN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFc2IwSkJRVzlDTERaQ1FVRTJRanRCUVVOcVJEczdRVUZGUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzUlRzN096czdPenM3T3pzN096czdRVU0xVVVFc2FVVkJRV1VzWjBKQlFXZENMR2RwVFRzN096czdPenM3T3pzN08wRkRRVlE3T3pzN096czdWVU5CZEVJN1ZVRkRRVHM3VlVGRlFUdFZRVU5CTzFWQlEwRTdWVUZEUVR0VlFVTkJPMVZCUTBFN1ZVRkRRVHRWUVVOQk8xVkJRMEU3VlVGRFFUdFZRVU5CTzFWQlEwRTdPMVZCUlVFN1ZVRkRRU3h2UWtGQmIwSTdWVUZEY0VJc2EwUkJRV3RFTEhOQ1FVRnpRaXhGUVVGRk8xVkJRekZGTzFWQlEwRTdPMVZCUlVFN1ZVRkRRVHRWUVVOQk96dFZRVVZCTzFWQlEwRTdPMVZCUlVFN1ZVRkRRVHM3VlVGRlFUdFZRVU5CT3pzN096dFhRMnBEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEVzWjBOQlFXZERMRmxCUVZrN1YwRkROVU03VjBGRFFTeEZPenM3T3p0WFExQkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEVzZDBOQlFYZERMSGxEUVVGNVF6dFhRVU5xUmp0WFFVTkJPMWRCUTBFc1JUczdPenM3VjBOUVFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJMRVU3T3pzN08xZERTa0VzTWtZN096czdPMWREUVVFc2MwUTdPenM3TzFkRFFVRXNkMFk3T3pzN08xZERRVUU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVN4elFrRkJjMElzTkVKQlFUUkNMRkZCUVZFN1YwRkRNVVE3VjBGRFFUdFhRVU5CTzFkQlEwRXNaMEpCUVdkQ0xHOUNRVUZ2UWp0WFFVTndRenRYUVVOQkxHdEhRVUZyUnl4WlFVRlpMRTlCUVU4N1YwRkRja2c3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVRzN1YwRkZRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEVzYTBWQlFXdEZMR3REUVVGclF6dFhRVU53Unp0WFFVTkJPMWRCUTBFN1YwRkRRU3hGT3pzN096dFhRM3BEUVR0WFFVTkJPMWRCUTBFN1YwRkRRU3h6UkVGQmMwUXNhMEpCUVd0Q08xZEJRM2hGTzFkQlEwRXNLME5CUVN0RExHTkJRV003VjBGRE4wUXNSVHM3T3pzN1YwTk9RVHRYUVVOQk96dFhRVVZCTzFkQlEwRTdWMEZEUVRzN1YwRkZRVHRYUVVOQk8xZEJRMEU3TzFkQlJVRTdWMEZEUVRzN1YwRkZRVHRYUVVOQk8xZEJRMEU3TzFkQlJVRTdWMEZEUVRzN1YwRkZRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFc1EwRkJRenM3VjBGRlJEdFhRVU5CT3p0WFFVVkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFc1NVRkJTVHRYUVVOS08xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJMRWRCUVVjN1YwRkRTRHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJMRWxCUVVrN1YwRkRTanRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdPMWRCUlVFN1YwRkRRVHRYUVVOQk8xZEJRMEVzTWtKQlFUSkNPMWRCUXpOQ0xESkNRVUV5UWp0WFFVTXpRanRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRU3hIUVVGSE96dFhRVVZJTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQkxHMUNRVUZ0UWl4blFrRkJaMEk3VjBGRGJrTTdWMEZEUVR0WFFVTkJMRWRCUVVjN1YwRkRTRHRYUVVOQk8xZEJRMEU3VjBGRFFTeHRRa0ZCYlVJc1owSkJRV2RDTzFkQlEyNURPMWRCUTBFN1YwRkRRU3hIUVVGSE8xZEJRMGc3VjBGRFFUdFhRVU5CTEVkQlFVYzdWMEZEU0R0WFFVTkJPMWRCUTBFc1IwRkJSenRYUVVOSU8xZEJRMEU3VjBGRFFUdFhRVU5CTEVkQlFVYzdWMEZEU0R0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJMRTFCUVUwN1YwRkRUanRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFc1RVRkJUVHRYUVVOT08xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRXNSMEZCUnpzN1YwRkZTRHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVN4SFFVRkhPMWRCUTBnN1YwRkRRVHRYUVVOQkxFZEJRVWM3VjBGRFNEdFhRVU5CTzFkQlEwRTdWMEZEUVN4SFFVRkhPenRYUVVWSU8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVRzN1YwRkZRVHRYUVVOQk8xZEJRMEVzWjBKQlFXZENMSEZEUVVGeFF6dFhRVU55UkR0WFFVTkJPenRYUVVWQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFc1NVRkJTVHRYUVVOS08xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN08xZEJSVUU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFc1JVRkJSVHRYUVVOR096dFhRVVZCTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CT3p0WFFVVkJPenRYUVVWQk8xZEJRMEU3VjBGRFFUczdWMEZGUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEVzU1VGQlNUdFhRVU5LTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRU3hMUVVGTE8xZEJRMHc3TzFkQlJVRTdWMEZEUVR0WFFVTkJMRWxCUVVrN1YwRkRTaXhIUVVGSE8xZEJRMGdzUlVGQlJUdFhRVU5HT3p0WFFVVkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEVzUjBGQlJ6dFhRVU5JTzFkQlEwRTdWMEZEUVRzN1YwRkZRVHRYUVVOQk96dFhRVVZCT3p0WFFVVkJPMWRCUTBFN1YwRkRRU3hGUVVGRk8xZEJRMFk3TzFkQlJVRTdWMEZEUVR0WFFVTkJPMWRCUTBFc1IwRkJSenRYUVVOSU96dFhRVVZCTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFc1IwRkJSenRYUVVOSU96dFhRVVZCTzFkQlEwRTdPMWRCUlVFN1YwRkRRVHRYUVVOQkxFVkJRVVU3TzFkQlJVWTdWMEZEUVRzN1YwRkZRVHRYUVVOQk8xZEJRMEU3VjBGRFFUczdWMEZGUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEVzYlVKQlFXMUNMRzlDUVVGdlFqdFhRVU4yUXp0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQkxFVkJRVVU3TzFkQlJVWTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQkxFZEJRVWM3VjBGRFNEczdWMEZGUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQkxFbEJRVWs3VjBGRFNqdFhRVU5CTEVkQlFVYzdWMEZEU0RzN1YwRkZRVHRYUVVOQk8xZEJRMEU3TzFkQlJVRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRXNTVUZCU1R0WFFVTktMRWRCUVVjN1YwRkRTRHRYUVVOQk8xZEJRMEU3VjBGRFFTeERPenM3T3p0WFEzUlhRU3d5UWpzN096czdWME5CUVRzN1YwRkZRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdPenRYUVVkQk96dFhRVVZCT3p0WFFVVkJPenRYUVVWQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRXNSVUZCUlR0WFFVTkdPenRYUVVWQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CT3p0WFFVVkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPenRYUVVWQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVN4SFFVRkhPMWRCUTBnN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRXNhMEpCUVd0Q0xESkNRVUV5UWp0WFFVTTNRenRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRXNTMEZCU3p0WFFVTk1PMWRCUTBFN08xZEJSVUU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN08xZEJSVUU3VjBGRFFTeHBRa0ZCYVVJc1kwRkJZenRYUVVNdlFqdFhRVU5CTzFkQlEwRTdWMEZEUVRzN1YwRkZRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CT3p0WFFVVkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3TzFkQlJVRTdWMEZEUVR0WFFVTkJPMWRCUTBFc1kwRkJZeXhMUVVGTE8xZEJRMjVDTzFkQlEwRTdWMEZEUVR0WFFVTkJMRWxCUVVrN1YwRkRTanRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRXNZMEZCWXl4WlFVRlpPMWRCUXpGQ08xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHM3VjBGRlFUdFhRVU5CTzFkQlEwRXNaMEpCUVdkQ0xEUkNRVUUwUWp0WFFVTTFRenRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTEVsQlFVazdWMEZEU2p0WFFVTkJPenRYUVVWQk96dFhRVVZCTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFc1NVRkJTVHRYUVVOS096dFhRVVZCTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHM3VjBGRlFUczdWMEZGUVR0WFFVTkJPMWRCUTBFc1pVRkJaU3cwUWtGQk5FSTdWMEZETTBNN1YwRkRRVHRYUVVOQk96dFhRVVZCTzFkQlEwRTdPMWRCUlVFN1YwRkRRVHM3VjBGRlFUdFhRVU5CT3p0WFFVVkJPMWRCUTBFc1pVRkJaU3cwUWtGQk5FSTdWMEZETTBNN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVRzN1YwRkZRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFc2FVSkJRV2xDTEhWRFFVRjFRenRYUVVONFJEdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQkxFZEJRVWM3VjBGRFNEdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHM3VjBGRlFUdFhRVU5CTEd0Q1FVRnJRaXhwUTBGQmFVTTdWMEZEYmtRN1YwRkRRVHM3VjBGRlFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFTeHhRa0ZCY1VJc2RVTkJRWFZETzFkQlF6VkVPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJMSEZDUVVGeFFpeHpRa0ZCYzBJN1YwRkRNME03VjBGRFFUdFhRVU5CTEZGQlFWRTdWMEZEVWp0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFTeFZRVUZWTzFkQlExWTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CT3p0WFFVVkJPMWRCUTBFc2EwSkJRV3RDTEhkRFFVRjNRenRYUVVNeFJEdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJMRXRCUVVzN1YwRkRURHRYUVVOQk8xZEJRMEU3VjBGRFFTeFBRVUZQTzFkQlExQTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEVzVTBGQlV6dFhRVU5VTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQkxFMUJRVTA3VjBGRFRqdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFc1VVRkJVVHRYUVVOU08xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPenRYUVVWQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFTeEZRVUZGTEVsQlFVazdWMEZEVGp0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVN4RlFVRkZPMWRCUTBZN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUczdWMEZGUVR0WFFVTkJPMWRCUTBFN1YwRkRRU3h4UTBGQmNVTTdWMEZEY2tNN1YwRkRRVHRYUVVOQkxFVkJRVVU3VjBGRFJqczdWMEZGUVRzN1YwRkZRVHM3VjBGRlFTeHpRanM3T3pzN1ZVTm9aVUU3VlVGRFFUdFZRVU5CTzFWQlEwRWlMQ0ptYVd4bElqb2lhV052Ym5NdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRnZDJWaWNHRmphMVZ1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNG9jbTl2ZEN3Z1ptRmpkRzl5ZVNrZ2UxeHVYSFJwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkSGx3Wlc5bUlHMXZaSFZzWlNBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MGJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbVlXTjBiM0o1S0NrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHUmxabWx1WlNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCa1pXWnBibVV1WVcxa0tWeHVYSFJjZEdSbFptbHVaU2hiWFN3Z1ptRmpkRzl5ZVNrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHVjRjRzl5ZEhOYlhDSkpZMjl1YzF3aVhTQTlJR1poWTNSdmNua29LVHRjYmx4MFpXeHpaVnh1WEhSY2RISnZiM1JiWENKSlkyOXVjMXdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibjBwS0hObGJHWXNJR1oxYm1OMGFXOXVLQ2tnZTF4dWNtVjBkWEp1SUNJc0lpOHZJRWx0Y0c5eWRITmNibWx0Y0c5eWRDQmZYMTlEVTFOZlRFOUJSRVZTWDBGUVNWOVRUMVZTUTBWTlFWQmZTVTFRVDFKVVgxOWZJR1p5YjIwZ1hDSXVMaTh1TGk4dUxpOXViMlJsWDIxdlpIVnNaWE12WTNOekxXeHZZV1JsY2k5a2FYTjBMM0oxYm5ScGJXVXZZM056VjJsMGFFMWhjSEJwYm1kVWIxTjBjbWx1Wnk1cWMxd2lPMXh1YVcxd2IzSjBJRjlmWDBOVFUxOU1UMEZFUlZKZlFWQkpYMGxOVUU5U1ZGOWZYeUJtY205dElGd2lMaTR2TGk0dkxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOemN5MXNiMkZrWlhJdlpHbHpkQzl5ZFc1MGFXMWxMMkZ3YVM1cWMxd2lPMXh1YVcxd2IzSjBJRjlmWDBOVFUxOU1UMEZFUlZKZlIwVlVYMVZTVEY5SlRWQlBVbFJmWDE4Z1puSnZiU0JjSWk0dUx5NHVMeTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpjM010Ykc5aFpHVnlMMlJwYzNRdmNuVnVkR2x0WlM5blpYUlZjbXd1YW5OY0lqdGNibWx0Y0c5eWRDQmZYMTlEVTFOZlRFOUJSRVZTWDFWU1RGOUpUVkJQVWxSZk1GOWZYeUJtY205dElGd2lMaTlwYldGblpYTXZhV052Ym5NdWNHNW5YQ0k3WEc1MllYSWdYMTlmUTFOVFgweFBRVVJGVWw5RldGQlBVbFJmWDE4Z1BTQmZYMTlEVTFOZlRFOUJSRVZTWDBGUVNWOUpUVkJQVWxSZlgxOG9YMTlmUTFOVFgweFBRVVJGVWw5QlVFbGZVMDlWVWtORlRVRlFYMGxOVUU5U1ZGOWZYeWs3WEc1MllYSWdYMTlmUTFOVFgweFBRVVJGVWw5VlVreGZVa1ZRVEVGRFJVMUZUbFJmTUY5Zlh5QTlJRjlmWDBOVFUxOU1UMEZFUlZKZlIwVlVYMVZTVEY5SlRWQlBVbFJmWDE4b1gxOWZRMU5UWDB4UFFVUkZVbDlWVWt4ZlNVMVFUMUpVWHpCZlgxOHBPMXh1THk4Z1RXOWtkV3hsWEc1ZlgxOURVMU5mVEU5QlJFVlNYMFZZVUU5U1ZGOWZYeTV3ZFhOb0tGdHRiMlIxYkdVdWFXUXNJRndpTG1samIyNXpMV05zSUh0Y1hHNGdJR1JwYzNCc1lYazZJR2x1YkdsdVpTMWliRzlqYXp0Y1hHNGdJR0poWTJ0bmNtOTFibVF0YVcxaFoyVTZJSFZ5YkNoY0lpQXJJRjlmWDBOVFUxOU1UMEZFUlZKZlZWSk1YMUpGVUV4QlEwVk5SVTVVWHpCZlgxOGdLeUJjSWlrN1hGeHVJQ0IzYVdSMGFEb2dNVFp3ZUR0Y1hHNGdJR2hsYVdkb2REb2dNVFp3ZUR0Y1hHNGdJRzkyWlhKbWJHOTNPaUJvYVdSa1pXNDdYRnh1SUNCamIyeHZjam9nZEhKaGJuTndZWEpsYm5RN1hGeHVJQ0J3WVdSa2FXNW5PaUF3T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WTJGeVpYUXRNUzF1SUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ01DQXdPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RZMkZ5WlhRdE1TMXVaU0I3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweE5uQjRJREE3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFqWVhKbGRDMHhMV1VnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE16SndlQ0F3T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WTJGeVpYUXRNUzF6WlNCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMDBPSEI0SURBN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxallYSmxkQzB4TFhNZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXROalJ3ZUNBd095QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFkyRnlaWFF0TVMxemR5QjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzA0TUhCNElEQTdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWpZWEpsZEMweExYY2dlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0T1Rad2VDQXdPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RZMkZ5WlhRdE1TMXVkeUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweE1USndlQ0F3T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WTJGeVpYUXRNaTF1TFhNZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNVEk0Y0hnZ01Ec2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXTmhjbVYwTFRJdFpTMTNJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRFME5IQjRJREE3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzEwY21saGJtZHNaUzB4TFc0Z2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXdjSGdnTFRFMmNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMTBjbWxoYm1kc1pTMHhMVzVsSUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xURTJjSGdnTFRFMmNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMTBjbWxoYm1kc1pTMHhMV1VnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE16SndlQ0F0TVRad2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xYUnlhV0Z1WjJ4bExURXRjMlVnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE5EaHdlQ0F0TVRad2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xYUnlhV0Z1WjJ4bExURXRjeUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMwMk5IQjRJQzB4Tm5CNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dGRISnBZVzVuYkdVdE1TMXpkeUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMwNE1IQjRJQzB4Tm5CNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dGRISnBZVzVuYkdVdE1TMTNJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRrMmNIZ2dMVEUyY0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxMGNtbGhibWRzWlMweExXNTNJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRFeE1uQjRJQzB4Tm5CNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dGRISnBZVzVuYkdVdE1pMXVMWE1nZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1USTRjSGdnTFRFMmNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMTBjbWxoYm1kc1pTMHlMV1V0ZHlCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHhORFJ3ZUNBdE1UWndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV0Z5Y205M0xURXRiaUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SURCd2VDQXRNekp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdGeWNtOTNMVEV0Ym1VZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNVFp3ZUNBdE16SndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV0Z5Y205M0xURXRaU0I3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMwek1uQjRJQzB6TW5CNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFlYSnliM2N0TVMxelpTQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzAwT0hCNElDMHpNbkI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WVhKeWIzY3RNUzF6SUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xUWTBjSGdnTFRNeWNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWhjbkp2ZHkweExYTjNJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRnd2NIZ2dMVE15Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxaGNuSnZkeTB4TFhjZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRPVFp3ZUNBdE16SndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV0Z5Y205M0xURXRibmNnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1URXljSGdnTFRNeWNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWhjbkp2ZHkweUxXNHRjeUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweE1qaHdlQ0F0TXpKd2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXRnljbTkzTFRJdGJtVXRjM2NnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1UUTBjSGdnTFRNeWNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWhjbkp2ZHkweUxXVXRkeUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweE5qQndlQ0F0TXpKd2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXRnljbTkzTFRJdGMyVXRibmNnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1UYzJjSGdnTFRNeWNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWhjbkp2ZDNOMGIzQXRNUzF1SUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xURTVNbkI0SUMwek1uQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RZWEp5YjNkemRHOXdMVEV0WlNCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHlNRGh3ZUNBdE16SndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV0Z5Y205M2MzUnZjQzB4TFhNZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNakkwY0hnZ0xUTXljSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFoY25KdmQzTjBiM0F0TVMxM0lIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVEkwTUhCNElDMHpNbkI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WVhKeWIzZDBhR2xqYXkweExXNGdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF3Y0hnZ0xUUTRjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFoY25KdmQzUm9hV05yTFRFdGJtVWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TVRad2VDQXRORGh3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdGeWNtOTNkR2hwWTJzdE1TMWxJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRNeWNIZ2dMVFE0Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxaGNuSnZkM1JvYVdOckxURXRjMlVnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE5EaHdlQ0F0TkRod2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXRnljbTkzZEdocFkyc3RNUzF6SUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xUWTBjSGdnTFRRNGNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWhjbkp2ZDNSb2FXTnJMVEV0YzNjZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRPREJ3ZUNBdE5EaHdlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV0Z5Y205M2RHaHBZMnN0TVMxM0lIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVGsyY0hnZ0xUUTRjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFoY25KdmQzUm9hV05yTFRFdGJuY2dlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TVRFeWNIZ2dMVFE0Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxaGNuSnZkM1JvYVdOckxUSXRiaTF6SUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xURXlPSEI0SUMwME9IQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RZWEp5YjNkMGFHbGpheTB5TFc1bExYTjNJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRFME5IQjRJQzAwT0hCNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFlYSnliM2QwYUdsamF5MHlMV1V0ZHlCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHhOakJ3ZUNBdE5EaHdlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV0Z5Y205M2RHaHBZMnN0TWkxelpTMXVkeUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweE56WndlQ0F0TkRod2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXRnljbTkzZEdocFkydHpkRzl3TFRFdGJpQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB4T1RKd2VDQXRORGh3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdGeWNtOTNkR2hwWTJ0emRHOXdMVEV0WlNCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHlNRGh3ZUNBdE5EaHdlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV0Z5Y205M2RHaHBZMnR6ZEc5d0xURXRjeUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweU1qUndlQ0F0TkRod2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXRnljbTkzZEdocFkydHpkRzl3TFRFdGR5QjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB5TkRCd2VDQXRORGh3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdGeWNtOTNjbVYwZFhKdWRHaHBZMnN0TVMxM0lIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dNSEI0SUMwMk5IQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RZWEp5YjNkeVpYUjFjbTUwYUdsamF5MHhMV1VnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE16SndlQ0F0TmpSd2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXWnZiR1JsY2kxamIyeHNZWEJ6WldRZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXdjSGdnTFRrMmNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMW1iMnhrWlhJdGIzQmxiaUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweE5uQjRJQzA1Tm5CNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFpHOWpkVzFsYm5RZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNekp3ZUNBdE9UWndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV1J2WTNWdFpXNTBMV0lnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE5EaHdlQ0F0T1Rad2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXNXZkR1VnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE5qUndlQ0F0T1Rad2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXMWhhV3d0WTJ4dmMyVmtJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRnd2NIZ2dMVGsyY0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxdFlXbHNMVzl3Wlc0Z2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRPVFp3ZUNBdE9UWndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMWE4xYVhSallYTmxJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRFeE1uQjRJQzA1Tm5CNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFkyOXRiV1Z1ZENCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHhNamh3ZUNBdE9UWndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMWEJsY25OdmJpQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB4TkRSd2VDQXRPVFp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFhCeWFXNTBJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRFMk1IQjRJQzA1Tm5CNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dGRISmhjMmdnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1UYzJjSGdnTFRrMmNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMXNiMk5yWldRZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNVGt5Y0hnZ0xUazJjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzExYm14dlkydGxaQ0I3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweU1EaHdlQ0F0T1Rad2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXSnZiMnR0WVhKcklIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVEl5TkhCNElDMDVObkI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0ZEdGbklIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVEkwTUhCNElDMDVObkI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0YUc5dFpTQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJREJ3ZUNBdE1URXljSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFtYkdGbklIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVEUyY0hnZ0xURXhNbkI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WTJGc1kzVnNZWFJ2Y2lCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHpNbkI0SUMweE1USndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV05oY25RZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRORGh3ZUNBdE1URXljSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzF3Wlc1amFXd2dlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TmpSd2VDQXRNVEV5Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxamJHOWpheUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMwNE1IQjRJQzB4TVRKd2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXUnBjMnNnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE9UWndlQ0F0TVRFeWNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWpZV3hsYm1SaGNpQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB4TVRKd2VDQXRNVEV5Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxNmIyOXRhVzRnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1USTRjSGdnTFRFeE1uQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RlbTl2Ylc5MWRDQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB4TkRSd2VDQXRNVEV5Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxelpXRnlZMmdnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1UWXdjSGdnTFRFeE1uQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RkM0psYm1Ob0lIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVEUzTm5CNElDMHhNVEp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdkbFlYSWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TVRreWNIZ2dMVEV4TW5CNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dGFHVmhjblFnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1qQTRjSGdnTFRFeE1uQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RjM1JoY2lCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHlNalJ3ZUNBdE1URXljSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFzYVc1cklIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVEkwTUhCNElDMHhNVEp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdOaGJtTmxiQ0I3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SURCd2VDQXRNVEk0Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxd2JIVnpJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRFMmNIZ2dMVEV5T0hCNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dGNHeDFjM1JvYVdOcklIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVE15Y0hnZ0xURXlPSEI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0YldsdWRYTWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TkRod2VDQXRNVEk0Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxdGFXNTFjM1JvYVdOcklIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVFkwY0hnZ0xURXlPSEI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0YTJWNUlIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVGd3Y0hnZ0xURXlPSEI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0YkdsbmFIUmlkV3hpSUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xUazJjSGdnTFRFeU9IQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RjMk5wYzNOdmNuTWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TVRFeWNIZ2dMVEV5T0hCNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFkyeHBjR0p2WVhKa0lIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVEV5T0hCNElDMHhNamh3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdOdmNIa2dlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TVRRMGNIZ2dMVEV5T0hCNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFkyOXVkR0ZqZENCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHhOakJ3ZUNBdE1USTRjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFwYldGblpTQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB4Tnpad2VDQXRNVEk0Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxMmFXUmxieUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweE9USndlQ0F0TVRJNGNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMXpZM0pwY0hRZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNakE0Y0hnZ0xURXlPSEI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WTJ4dmMyVWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0T0RCd2VDQXRNVEk0Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxamJHOXpaWFJvYVdOcklIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVGsyY0hnZ0xURXlPSEI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WVd4bGNuUWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF3Y0hnZ0xURTBOSEI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0YVc1bWJ5QjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB4Tm5CNElDMHhORFJ3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFc1dmRHbGpaU0I3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMwek1uQjRJQzB4TkRSd2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXaGxiSEFnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE5EaHdlQ0F0TVRRMGNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWphR1ZqYXlCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMDJOSEI0SUMweE5EUndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV0oxYkd4bGRDQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzA0TUhCNElDMHhORFJ3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFhKaFpHbHZMVzltWmlCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMDVObkI0SUMweE5EUndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMWEpoWkdsdkxXOXVJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRFeE1uQjRJQzB4TkRSd2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xYQnBiaTEzSUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xURXlPSEI0SUMweE5EUndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMWEJwYmkxeklIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVEUwTkhCNElDMHhORFJ3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFhCc1lYa2dlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF3Y0hnZ0xURTJNSEI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0Y0dGMWMyVWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TVRad2VDQXRNVFl3Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxelpXVnJMVzVsZUhRZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNekp3ZUNBdE1UWXdjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzF6WldWckxYQnlaWFlnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE5EaHdlQ0F0TVRZd2NIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMXpaV1ZyTFdWdVpDQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzAyTkhCNElDMHhOakJ3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFhObFpXc3RabWx5YzNRZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRPREJ3ZUNBdE1UWXdjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzF6ZEc5d0lIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVGsyY0hnZ0xURTJNSEI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WldwbFkzUWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TVRFeWNIZ2dMVEUyTUhCNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dGRtOXNkVzFsTFc5bVppQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB4TWpod2VDQXRNVFl3Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxMmIyeDFiV1V0YjI0Z2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNVFEwY0hnZ0xURTJNSEI0T3lCOVhGeHVYQ0lzSUZ3aVhDSXNlMXdpZG1WeWMybHZibHdpT2pNc1hDSnpiM1Z5WTJWelhDSTZXMXdpZDJWaWNHRmphem92THk0dmFXTnZibk11YzJOemMxd2lYU3hjSW01aGJXVnpYQ0k2VzEwc1hDSnRZWEJ3YVc1bmMxd2lPbHdpUVVGQlFUdEZRVU5GTEhGQ1FVRnhRanRGUVVOeVFpeDVSRUZCZFVNN1JVRkRka01zVjBGQlZ6dEZRVU5ZTEZsQlFWazdSVUZEV2l4blFrRkJaMEk3UlVGRGFFSXNhMEpCUVd0Q08wVkJRMnhDTEZWQlFWVXNSVUZCUVR0RlFWQmFPMGxCWVVrc2QwSkJRWGRDTEVWQlFVRTdSVUZpTlVJN1NVRnBRa2tzTkVKQlFUUkNMRVZCUVVFN1JVRnFRbWhETzBsQmNVSkpMRFJDUVVGblF5eEZRVUZCTzBWQmNrSndRenRKUVhsQ1NTdzBRa0ZCWjBNc1JVRkJRVHRGUVhwQ2NFTTdTVUUyUWtrc05FSkJRV2RETEVWQlFVRTdSVUUzUW5CRE8wbEJhVU5KTERSQ1FVRm5ReXhGUVVGQk8wVkJha053UXp0SlFYRkRTU3cwUWtGQlowTXNSVUZCUVR0RlFYSkRjRU03U1VGNVEwa3NOa0pCUVdkRExFVkJRVUU3UlVGNlEzQkRPMGxCTmtOSkxEWkNRVUZuUXl4RlFVRkJPMFZCTjBOd1F6dEpRV2xFU1N3MlFrRkJaME1zUlVGQlFUdEZRV3BFY0VNN1NVRjNSRWtzT0VKQlFXOURMRVZCUVVFN1JVRjRSSGhETzBsQk5FUkpMR2REUVVGdlF5eEZRVUZCTzBWQk5VUjRRenRKUVdkRlNTeG5RMEZCYjBNc1JVRkJRVHRGUVdoRmVFTTdTVUZ2UlVrc1owTkJRVzlETEVWQlFVRTdSVUZ3UlhoRE8wbEJlVVZKTEdkRFFVRnZReXhGUVVGQk8wVkJla1Y0UXp0SlFUaEZTU3huUTBGQmIwTXNSVUZCUVR0RlFUbEZlRU03U1VGdFJra3NaME5CUVc5RExFVkJRVUU3UlVGdVJuaERPMGxCZDBaSkxHbERRVUZ2UXl4RlFVRkJPMFZCZUVaNFF6dEpRVFJHU1N4cFEwRkJiME1zUlVGQlFUdEZRVFZHZUVNN1NVRm5SMGtzYVVOQlFXOURMRVZCUVVFN1JVRm9SM2hETzBsQmRVZEpMRGhDUVVGdlF5eEZRVUZCTzBWQmRrZDRRenRKUVRKSFNTeG5RMEZCYjBNc1JVRkJRVHRGUVROSGVFTTdTVUVyUjBrc1owTkJRVzlETEVWQlFVRTdSVUV2UjNoRE8wbEJiVWhKTEdkRFFVRnZReXhGUVVGQk8wVkJia2g0UXp0SlFYVklTU3huUTBGQmIwTXNSVUZCUVR0RlFYWkllRU03U1VFeVNFa3NaME5CUVc5RExFVkJRVUU3UlVFelNIaERPMGxCSzBoSkxHZERRVUZ2UXl4RlFVRkJPMFZCTDBoNFF6dEpRVzFKU1N4cFEwRkJiME1zUlVGQlFUdEZRVzVKZUVNN1NVRjNTVWtzYVVOQlFXOURMRVZCUVVFN1JVRjRTWGhETzBsQk5FbEpMR2xEUVVGdlF5eEZRVUZCTzBWQk5VbDRRenRKUVdkS1NTeHBRMEZCY1VNc1JVRkJRVHRGUVdoS2VrTTdTVUZ2U2trc2FVTkJRWEZETEVWQlFVRTdSVUZ3U25wRE8wbEJkMHBKTEdsRFFVRnhReXhGUVVGQk8wVkJlRXA2UXp0SlFUWktTU3hwUTBGQmNVTXNSVUZCUVR0RlFUZEtla003U1VGcFMwa3NhVU5CUVhGRExFVkJRVUU3UlVGcVMzcERPMGxCY1V0SkxHbERRVUZ4UXl4RlFVRkJPMFZCY2t0NlF6dEpRVFJMU1N3NFFrRkJiME1zUlVGQlFUdEZRVFZMZUVNN1NVRm5URWtzWjBOQlFXOURMRVZCUVVFN1JVRm9USGhETzBsQmIweEpMR2REUVVGdlF5eEZRVUZCTzBWQmNFeDRRenRKUVhkTVNTeG5RMEZCYjBNc1JVRkJRVHRGUVhoTWVFTTdTVUUwVEVrc1owTkJRVzlETEVWQlFVRTdSVUUxVEhoRE8wbEJaMDFKTEdkRFFVRnZReXhGUVVGQk8wVkJhRTE0UXp0SlFXOU5TU3huUTBGQmIwTXNSVUZCUVR0RlFYQk5lRU03U1VGM1RVa3NhVU5CUVc5RExFVkJRVUU3UlVGNFRYaERPMGxCTkUxSkxHbERRVUZ2UXl4RlFVRkJPMFZCTlUxNFF6dEpRV2RPU1N4cFEwRkJiME1zUlVGQlFUdEZRV2hPZUVNN1NVRnZUa2tzYVVOQlFYRkRMRVZCUVVFN1JVRndUbnBETzBsQmQwNUpMR2xEUVVGeFF5eEZRVUZCTzBWQmVFNTZRenRKUVRST1NTeHBRMEZCY1VNc1JVRkJRVHRGUVRWT2VrTTdTVUZuVDBrc2FVTkJRWEZETEVWQlFVRTdSVUZvVDNwRE8wbEJiMDlKTEdsRFFVRnhReXhGUVVGQk8wVkJjRTk2UXp0SlFYZFBTU3hwUTBGQmNVTXNSVUZCUVR0RlFYaFBla003U1VFNFQwa3NPRUpCUVc5RExFVkJRVUU3UlVFNVQzaERPMGxCYTFCSkxHZERRVUZ2UXl4RlFVRkJPMFZCYkZCNFF6dEpRV2RSVFN3NFFrRkJjVU1zUlVGQlFUdEZRV2hSTTBNN1NVRm5VVTBzWjBOQlFYRkRMRVZCUVVFN1JVRm9VVE5ETzBsQloxRk5MR2REUVVGeFF5eEZRVUZCTzBWQmFGRXpRenRKUVdkUlRTeG5RMEZCY1VNc1JVRkJRVHRGUVdoUk0wTTdTVUZuVVUwc1owTkJRWEZETEVWQlFVRTdSVUZvVVRORE8wbEJaMUZOTEdkRFFVRnhReXhGUVVGQk8wVkJhRkV6UXp0SlFXZFJUU3huUTBGQmNVTXNSVUZCUVR0RlFXaFJNME03U1VGblVVMHNhVU5CUVhGRExFVkJRVUU3UlVGb1VUTkRPMGxCWjFGTkxHbERRVUZ4UXl4RlFVRkJPMFZCYUZFelF6dEpRV2RSVFN4cFEwRkJjVU1zUlVGQlFUdEZRV2hSTTBNN1NVRm5VVTBzYVVOQlFYRkRMRVZCUVVFN1JVRm9VVE5ETzBsQloxRk5MR2xEUVVGeFF5eEZRVUZCTzBWQmFGRXpRenRKUVdkUlRTeHBRMEZCY1VNc1JVRkJRVHRGUVdoUk0wTTdTVUZuVVUwc2FVTkJRWEZETEVWQlFVRTdSVUZvVVRORE8wbEJaMUZOTEdsRFFVRnhReXhGUVVGQk8wVkJhRkV6UXp0SlFXZFJUU3hwUTBGQmNVTXNSVUZCUVR0RlFXaFJNME03U1VFNFVVMHNLMEpCUVhORExFVkJRVUU3UlVFNVVUVkRPMGxCT0ZGTkxHbERRVUZ6UXl4RlFVRkJPMFZCT1ZFMVF6dEpRVGhSVFN4cFEwRkJjME1zUlVGQlFUdEZRVGxSTlVNN1NVRTRVVTBzYVVOQlFYTkRMRVZCUVVFN1JVRTVVVFZETzBsQk9GRk5MR2xEUVVGelF5eEZRVUZCTzBWQk9WRTFRenRKUVRoUlRTeHBRMEZCYzBNc1JVRkJRVHRGUVRsUk5VTTdTVUU0VVUwc2FVTkJRWE5ETEVWQlFVRTdSVUU1VVRWRE8wbEJPRkZOTEd0RFFVRnpReXhGUVVGQk8wVkJPVkUxUXp0SlFUaFJUU3hyUTBGQmMwTXNSVUZCUVR0RlFUbFJOVU03U1VFNFVVMHNhME5CUVhORExFVkJRVUU3UlVFNVVUVkRPMGxCT0ZGTkxHdERRVUZ6UXl4RlFVRkJPMFZCT1ZFMVF6dEpRVGhSVFN4clEwRkJjME1zUlVGQlFUdEZRVGxSTlVNN1NVRTRVVTBzYTBOQlFYTkRMRVZCUVVFN1JVRTVVVFZETzBsQk9GRk5MR3REUVVGelF5eEZRVUZCTzBWQk9WRTFRenRKUVRoUlRTeHJRMEZCYzBNc1JVRkJRVHRGUVRsUk5VTTdTVUU0VVUwc2EwTkJRWE5ETEVWQlFVRTdSVUU1VVRWRE8wbEJORkpOTEN0Q1FVRnpReXhGUVVGQk8wVkJOVkkxUXp0SlFUUlNUU3hwUTBGQmMwTXNSVUZCUVR0RlFUVlNOVU03U1VFMFVrMHNhVU5CUVhORExFVkJRVUU3UlVFMVVqVkRPMGxCTkZKTkxHbERRVUZ6UXl4RlFVRkJPMFZCTlZJMVF6dEpRVFJTVFN4cFEwRkJjME1zUlVGQlFUdEZRVFZTTlVNN1NVRTBVazBzYVVOQlFYTkRMRVZCUVVFN1JVRTFValZETzBsQk5GSk5MR2xEUVVGelF5eEZRVUZCTzBWQk5WSTFRenRKUVRSU1RTeHJRMEZCYzBNc1JVRkJRVHRGUVRWU05VTTdTVUUwVWswc2EwTkJRWE5ETEVWQlFVRTdSVUUxVWpWRE8wbEJORkpOTEd0RFFVRnpReXhGUVVGQk8wVkJOVkkxUXp0SlFUUlNUU3hyUTBGQmMwTXNSVUZCUVR0RlFUVlNOVU03U1VFMFVrMHNhME5CUVhORExFVkJRVUU3UlVFMVVqVkRPMGxCTkZKTkxHdERRVUZ6UXl4RlFVRkJPMFZCTlZJMVF6dEpRVFJTVFN4clEwRkJjME1zUlVGQlFUdEZRVFZTTlVNN1NVRnRVMGtzYVVOQlFXbERMRVZCUVVFN1JVRnVVM0pETzBsQmRWTkpMR2xEUVVGcFF5eEZRVUZCTzBWQmRsTnlRenRKUVdsVVRTd3JRa0ZCZVVNc1JVRkJRVHRGUVdwVUwwTTdTVUZwVkUwc2FVTkJRWGxETEVWQlFVRTdSVUZxVkM5RE8wbEJhVlJOTEdsRFFVRjVReXhGUVVGQk8wVkJhbFF2UXp0SlFXbFVUU3hwUTBGQmVVTXNSVUZCUVR0RlFXcFVMME03U1VGcFZFMHNhVU5CUVhsRExFVkJRVUU3UlVGcVZDOURPMGxCYVZSTkxHbERRVUY1UXl4RlFVRkJPMFZCYWxRdlF6dEpRV2xVVFN4cFEwRkJlVU1zUlVGQlFUdEZRV3BVTDBNN1NVRnBWRTBzYTBOQlFYbERMRVZCUVVFN1JVRnFWQzlETzBsQmFWUk5MR3REUVVGNVF5eEZRVUZCTzBWQmFsUXZRenRKUVdsVVRTeHJRMEZCZVVNc1JVRkJRVHRGUVdwVUwwTTdTVUUyVkUwc0swSkJRVEJETEVWQlFVRTdSVUUzVkdoRU8wbEJObFJOTEdsRFFVRXdReXhGUVVGQk8wVkJOMVJvUkR0SlFUWlVUU3hwUTBGQk1FTXNSVUZCUVR0RlFUZFVhRVE3U1VFMlZFMHNhVU5CUVRCRExFVkJRVUU3UlVFM1ZHaEVPMGxCTmxSTkxHbERRVUV3UXl4RlFVRkJPMFZCTjFSb1JEdEpRVFpVVFN4cFEwRkJNRU1zUlVGQlFUdEZRVGRVYUVRN1NVRTJWRTBzYVVOQlFUQkRMRVZCUVVFN1JVRTNWR2hFTzBsQk5sUk5MR3REUVVFd1F5eEZRVUZCTzBWQk4xUm9SRHRKUVRaVVRTeHJRMEZCTUVNc1JVRkJRVHRGUVRkVWFFUTdTVUUyVkUwc2EwTkJRVEJETEVWQlFVRmNJaXhjSW5OdmRYSmpaWE5EYjI1MFpXNTBYQ0k2VzF3aUxtbGpiMjV6TFdOc0lIdGNYSEpjWEc0Z0lHUnBjM0JzWVhrNklHbHViR2x1WlMxaWJHOWphenRjWEhKY1hHNGdJR0poWTJ0bmNtOTFibVF0YVcxaFoyVTZJSFZ5YkNocGJXRm5aWE12YVdOdmJuTXVjRzVuS1R0Y1hISmNYRzRnSUhkcFpIUm9PaUF4Tm5CNE8xeGNjbHhjYmlBZ2FHVnBaMmgwT2lBeE5uQjRPMXhjY2x4Y2JpQWdiM1psY21ac2IzYzZJR2hwWkdSbGJqdGNYSEpjWEc0Z0lHTnZiRzl5T2lCMGNtRnVjM0JoY21WdWREdGNYSEpjWEc0Z0lIQmhaR1JwYm1jNklEQTdYRnh5WEZ4dVhGeHlYRnh1SUNBdkwxeGNjbHhjYmlBZ0x5OGdVbTkzSURGY1hISmNYRzRnSUM4dlhGeHlYRnh1SUNBbUxtbGpiMjV6TFdOc0xXTmhjbVYwTFRFdGJpQjdYRnh5WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SURBZ01EdGNYSEpjWEc0Z0lIMWNYSEpjWEc1Y1hISmNYRzRnSUNZdWFXTnZibk10WTJ3dFkyRnlaWFF0TVMxdVpTQjdYRnh5WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweE5uQjRJREE3WEZ4eVhGeHVJQ0I5WEZ4eVhGeHVYRnh5WEZ4dUlDQW1MbWxqYjI1ekxXTnNMV05oY21WMExURXRaU0I3WEZ4eVhGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklESWdLaUF0TVRad2VDQXdPMXhjY2x4Y2JpQWdmVnhjY2x4Y2JseGNjbHhjYmlBZ0ppNXBZMjl1Y3kxamJDMWpZWEpsZEMweExYTmxJSHRjWEhKY1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ015QXFJQzB4Tm5CNElEQTdYRnh5WEZ4dUlDQjlYRnh5WEZ4dVhGeHlYRnh1SUNBbUxtbGpiMjV6TFdOc0xXTmhjbVYwTFRFdGN5QjdYRnh5WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SURRZ0tpQXRNVFp3ZUNBd08xeGNjbHhjYmlBZ2ZWeGNjbHhjYmx4Y2NseGNiaUFnSmk1cFkyOXVjeTFqYkMxallYSmxkQzB4TFhOM0lIdGNYSEpjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTlNBcUlDMHhObkI0SURBN1hGeHlYRnh1SUNCOVhGeHlYRnh1WEZ4eVhGeHVJQ0FtTG1samIyNXpMV05zTFdOaGNtVjBMVEV0ZHlCN1hGeHlYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJRFlnS2lBdE1UWndlQ0F3TzF4Y2NseGNiaUFnZlZ4Y2NseGNibHhjY2x4Y2JpQWdKaTVwWTI5dWN5MWpiQzFqWVhKbGRDMHhMVzUzSUh0Y1hISmNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dOeUFxSUMweE5uQjRJREE3WEZ4eVhGeHVJQ0I5WEZ4eVhGeHVYRnh5WEZ4dUlDQW1MbWxqYjI1ekxXTnNMV05oY21WMExUSXRiaTF6SUh0Y1hISmNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dPQ0FxSUMweE5uQjRJREE3WEZ4eVhGeHVJQ0I5WEZ4eVhGeHVYRnh5WEZ4dUlDQW1MbWxqYjI1ekxXTnNMV05oY21WMExUSXRaUzEzSUh0Y1hISmNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dPU0FxSUMweE5uQjRJREE3WEZ4eVhGeHVJQ0I5WEZ4eVhGeHVYRnh5WEZ4dUlDQXZMMXhjY2x4Y2JpQWdMeThnVW05M0lESmNYSEpjWEc0Z0lDOHZYRnh5WEZ4dUlDQW1MbWxqYjI1ekxXTnNMWFJ5YVdGdVoyeGxMVEV0YmlCN1hGeHlYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJREFnS2lBdE1UWndlQ0F0TVRad2VEdGNYSEpjWEc0Z0lIMWNYSEpjWEc1Y1hISmNYRzRnSUNZdWFXTnZibk10WTJ3dGRISnBZVzVuYkdVdE1TMXVaU0I3WEZ4eVhGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklERWdLaUF0TVRad2VDQXRNVFp3ZUR0Y1hISmNYRzRnSUgxY1hISmNYRzVjWEhKY1hHNGdJQ1l1YVdOdmJuTXRZMnd0ZEhKcFlXNW5iR1V0TVMxbElIdGNYSEpjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTWlBcUlDMHhObkI0SUMweE5uQjRPMXhjY2x4Y2JpQWdmVnhjY2x4Y2JseGNjbHhjYmlBZ0ppNXBZMjl1Y3kxamJDMTBjbWxoYm1kc1pTMHhMWE5sSUh0Y1hISmNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dNeUFxSUMweE5uQjRJQzB4Tm5CNE8xeGNjbHhjYmlBZ2ZWeGNjbHhjYmx4Y2NseGNibHhjY2x4Y2JpQWdKaTVwWTI5dWN5MWpiQzEwY21saGJtZHNaUzB4TFhNZ2UxeGNjbHhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUEwSUNvZ0xURTJjSGdnTFRFMmNIZzdYRnh5WEZ4dUlDQjlYRnh5WEZ4dVhGeHlYRnh1WEZ4eVhGeHVJQ0FtTG1samIyNXpMV05zTFhSeWFXRnVaMnhsTFRFdGMzY2dlMXhjY2x4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBMUlDb2dMVEUyY0hnZ0xURTJjSGc3WEZ4eVhGeHVJQ0I5WEZ4eVhGeHVYRnh5WEZ4dVhGeHlYRnh1SUNBbUxtbGpiMjV6TFdOc0xYUnlhV0Z1WjJ4bExURXRkeUI3WEZ4eVhGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklEWWdLaUF0TVRad2VDQXRNVFp3ZUR0Y1hISmNYRzRnSUgxY1hISmNYRzVjWEhKY1hHNWNYSEpjWEc0Z0lDWXVhV052Ym5NdFkyd3RkSEpwWVc1bmJHVXRNUzF1ZHlCN1hGeHlYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJRGNnS2lBdE1UWndlQ0F0TVRad2VEdGNYSEpjWEc0Z0lIMWNYSEpjWEc1Y1hISmNYRzRnSUNZdWFXTnZibk10WTJ3dGRISnBZVzVuYkdVdE1pMXVMWE1nZTF4Y2NseGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQTRJQ29nTFRFMmNIZ2dMVEUyY0hnN1hGeHlYRnh1SUNCOVhGeHlYRnh1WEZ4eVhGeHVJQ0FtTG1samIyNXpMV05zTFhSeWFXRnVaMnhsTFRJdFpTMTNJSHRjWEhKY1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ09TQXFJQzB4Tm5CNElDMHhObkI0TzF4Y2NseGNiaUFnZlZ4Y2NseGNiaUFnWEZ4eVhGeHVJQ0F2TDF4Y2NseGNiaUFnTHk4Z1VtOTNJRE5jWEhKY1hHNGdJQzh2WEZ4eVhGeHVJQ0FtTG1samIyNXpMV05zTFdGeWNtOTNMVEV0YmlCN1hGeHlYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJREFnS2lBdE1UWndlQ0F0TXpKd2VEdGNYSEpjWEc0Z0lIMWNYSEpjWEc1Y1hISmNYRzRnSUNZdWFXTnZibk10WTJ3dFlYSnliM2N0TVMxdVpTQjdYRnh5WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SURFZ0tpQXRNVFp3ZUNBdE16SndlRHRjWEhKY1hHNGdJSDFjWEhKY1hHNWNYSEpjWEc0Z0lDWXVhV052Ym5NdFkyd3RZWEp5YjNjdE1TMWxJSHRjWEhKY1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ01pQXFJQzB4Tm5CNElDMHpNbkI0TzF4Y2NseGNiaUFnZlZ4Y2NseGNibHhjY2x4Y2JpQWdKaTVwWTI5dWN5MWpiQzFoY25KdmR5MHhMWE5sSUh0Y1hISmNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dNeUFxSUMweE5uQjRJQzB6TW5CNE8xeGNjbHhjYmlBZ2ZWeGNjbHhjYmx4Y2NseGNiaUFnSmk1cFkyOXVjeTFqYkMxaGNuSnZkeTB4TFhNZ2UxeGNjbHhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUEwSUNvZ0xURTJjSGdnTFRNeWNIZzdYRnh5WEZ4dUlDQjlYRnh5WEZ4dVhGeHlYRnh1SUNBbUxtbGpiMjV6TFdOc0xXRnljbTkzTFRFdGMzY2dlMXhjY2x4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBMUlDb2dMVEUyY0hnZ0xUTXljSGc3WEZ4eVhGeHVJQ0I5WEZ4eVhGeHVYRnh5WEZ4dUlDQW1MbWxqYjI1ekxXTnNMV0Z5Y205M0xURXRkeUI3WEZ4eVhGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklEWWdLaUF0TVRad2VDQXRNekp3ZUR0Y1hISmNYRzRnSUgxY1hISmNYRzVjWEhKY1hHNGdJQ1l1YVdOdmJuTXRZMnd0WVhKeWIzY3RNUzF1ZHlCN1hGeHlYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJRGNnS2lBdE1UWndlQ0F0TXpKd2VEdGNYSEpjWEc0Z0lIMWNYSEpjWEc1Y1hISmNYRzVjWEhKY1hHNGdJQ1l1YVdOdmJuTXRZMnd0WVhKeWIzY3RNaTF1TFhNZ2UxeGNjbHhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUE0SUNvZ0xURTJjSGdnTFRNeWNIZzdYRnh5WEZ4dUlDQjlYRnh5WEZ4dVhGeHlYRnh1SUNBbUxtbGpiMjV6TFdOc0xXRnljbTkzTFRJdGJtVXRjM2NnZTF4Y2NseGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQTVJQ29nTFRFMmNIZ2dMVE15Y0hnN1hGeHlYRnh1SUNCOVhGeHlYRnh1WEZ4eVhGeHVJQ0FtTG1samIyNXpMV05zTFdGeWNtOTNMVEl0WlMxM0lIdGNYSEpjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTVRBZ0tpQXRNVFp3ZUNBdE16SndlRHRjWEhKY1hHNGdJSDFjWEhKY1hHNWNYSEpjWEc0Z0lDWXVhV052Ym5NdFkyd3RZWEp5YjNjdE1pMXpaUzF1ZHlCN1hGeHlYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJREV4SUNvZ0xURTJjSGdnTFRNeWNIZzdYRnh5WEZ4dUlDQjlYRnh5WEZ4dVhGeHlYRnh1SUNBbUxtbGpiMjV6TFdOc0xXRnljbTkzYzNSdmNDMHhMVzRnZTF4Y2NseGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXhNaUFxSUMweE5uQjRJQzB6TW5CNE8xeGNjbHhjYmlBZ2ZWeGNjbHhjYmx4Y2NseGNibHhjY2x4Y2JpQWdKaTVwWTI5dWN5MWpiQzFoY25KdmQzTjBiM0F0TVMxbElIdGNYSEpjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTVRNZ0tpQXRNVFp3ZUNBdE16SndlRHRjWEhKY1hHNGdJSDFjWEhKY1hHNWNYSEpjWEc0Z0lDWXVhV052Ym5NdFkyd3RZWEp5YjNkemRHOXdMVEV0Y3lCN1hGeHlYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJREUwSUNvZ0xURTJjSGdnTFRNeWNIZzdYRnh5WEZ4dUlDQjlYRnh5WEZ4dVhGeHlYRnh1SUNBbUxtbGpiMjV6TFdOc0xXRnljbTkzYzNSdmNDMHhMWGNnZTF4Y2NseGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXhOU0FxSUMweE5uQjRJQzB6TW5CNE8xeGNjbHhjYmlBZ2ZWeGNjbHhjYmx4Y2NseGNiaUFnTHk5Y1hISmNYRzRnSUM4dklGSnZkeUEwWEZ4eVhGeHVJQ0F2TDF4Y2NseGNiaUFnSmk1cFkyOXVjeTFqYkMxaGNuSnZkM1JvYVdOckxURXRiaUI3WEZ4eVhGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklEQWdLaUF0TVRad2VDQXRORGh3ZUR0Y1hISmNYRzRnSUgxY1hISmNYRzVjWEhKY1hHNGdJQ1l1YVdOdmJuTXRZMnd0WVhKeWIzZDBhR2xqYXkweExXNWxJSHRjWEhKY1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ01TQXFJQzB4Tm5CNElDMDBPSEI0TzF4Y2NseGNiaUFnZlZ4Y2NseGNibHhjY2x4Y2JpQWdKaTVwWTI5dWN5MWpiQzFoY25KdmQzUm9hV05yTFRFdFpTQjdYRnh5WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SURJZ0tpQXRNVFp3ZUNBdE5EaHdlRHRjWEhKY1hHNGdJSDFjWEhKY1hHNWNYSEpjWEc0Z0lDWXVhV052Ym5NdFkyd3RZWEp5YjNkMGFHbGpheTB4TFhObElIdGNYSEpjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTXlBcUlDMHhObkI0SUMwME9IQjRPMXhjY2x4Y2JpQWdmVnhjY2x4Y2JseGNjbHhjYmlBZ0ppNXBZMjl1Y3kxamJDMWhjbkp2ZDNSb2FXTnJMVEV0Y3lCN1hGeHlYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJRFFnS2lBdE1UWndlQ0F0TkRod2VEdGNYSEpjWEc0Z0lIMWNYSEpjWEc1Y1hISmNYRzRnSUNZdWFXTnZibk10WTJ3dFlYSnliM2QwYUdsamF5MHhMWE4zSUh0Y1hISmNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dOU0FxSUMweE5uQjRJQzAwT0hCNE8xeGNjbHhjYmlBZ2ZWeGNjbHhjYmx4Y2NseGNiaUFnSmk1cFkyOXVjeTFqYkMxaGNuSnZkM1JvYVdOckxURXRkeUI3WEZ4eVhGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklEWWdLaUF0TVRad2VDQXRORGh3ZUR0Y1hISmNYRzRnSUgxY1hISmNYRzVjWEhKY1hHNGdJQ1l1YVdOdmJuTXRZMnd0WVhKeWIzZDBhR2xqYXkweExXNTNJSHRjWEhKY1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ055QXFJQzB4Tm5CNElDMDBPSEI0TzF4Y2NseGNiaUFnZlZ4Y2NseGNibHhjY2x4Y2JpQWdKaTVwWTI5dWN5MWpiQzFoY25KdmQzUm9hV05yTFRJdGJpMXpJSHRjWEhKY1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ09DQXFJQzB4Tm5CNElDMDBPSEI0TzF4Y2NseGNiaUFnZlZ4Y2NseGNibHhjY2x4Y2JpQWdKaTVwWTI5dWN5MWpiQzFoY25KdmQzUm9hV05yTFRJdGJtVXRjM2NnZTF4Y2NseGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQTVJQ29nTFRFMmNIZ2dMVFE0Y0hnN1hGeHlYRnh1SUNCOVhGeHlYRnh1WEZ4eVhGeHVJQ0FtTG1samIyNXpMV05zTFdGeWNtOTNkR2hwWTJzdE1pMWxMWGNnZTF4Y2NseGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXhNQ0FxSUMweE5uQjRJQzAwT0hCNE8xeGNjbHhjYmlBZ2ZWeGNjbHhjYmx4Y2NseGNiaUFnSmk1cFkyOXVjeTFqYkMxaGNuSnZkM1JvYVdOckxUSXRjMlV0Ym5jZ2UxeGNjbHhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF4TVNBcUlDMHhObkI0SUMwME9IQjRPMXhjY2x4Y2JpQWdmVnhjY2x4Y2JseGNjbHhjYmlBZ0ppNXBZMjl1Y3kxamJDMWhjbkp2ZDNSb2FXTnJjM1J2Y0MweExXNGdlMXhjY2x4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBeE1pQXFJQzB4Tm5CNElDMDBPSEI0TzF4Y2NseGNiaUFnZlZ4Y2NseGNibHhjY2x4Y2JpQWdKaTVwWTI5dWN5MWpiQzFoY25KdmQzUm9hV05yYzNSdmNDMHhMV1VnZTF4Y2NseGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXhNeUFxSUMweE5uQjRJQzAwT0hCNE8xeGNjbHhjYmlBZ2ZWeGNjbHhjYmx4Y2NseGNiaUFnSmk1cFkyOXVjeTFqYkMxaGNuSnZkM1JvYVdOcmMzUnZjQzB4TFhNZ2UxeGNjbHhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF4TkNBcUlDMHhObkI0SUMwME9IQjRPMXhjY2x4Y2JpQWdmVnhjY2x4Y2JseGNjbHhjYmlBZ0ppNXBZMjl1Y3kxamJDMWhjbkp2ZDNSb2FXTnJjM1J2Y0MweExYY2dlMXhjY2x4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBeE5TQXFJQzB4Tm5CNElDMDBPSEI0TzF4Y2NseGNiaUFnZlZ4Y2NseGNibHhjY2x4Y2JpQWdMeTljWEhKY1hHNGdJQzh2SUZKdmR5QTFYRnh5WEZ4dUlDQW1MbWxqYjI1ekxXTnNMV0Z5Y205M2NtVjBkWEp1ZEdocFkyc3RNUzEzSUh0Y1hISmNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dNQ0FxSUMweE5uQjRJQzAyTkhCNE8xeGNjbHhjYmlBZ2ZWeGNjbHhjYmx4Y2NseGNiaUFnSmk1cFkyOXVjeTFqYkMxaGNuSnZkM0psZEhWeWJuUm9hV05yTFRFdFpTQjdYRnh5WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SURJZ0tpQXRNVFp3ZUNBdE5qUndlRHRjWEhKY1hHNGdJSDFjWEhKY1hHNWNYSEpjWEc0Z0lDOHZJSFZwTFdsamIyNHRZWEp5YjNkeVpYUjFjbTUwYUdsamF5MHhMVzRnSUhWcExXbGpiMjR0WVhKeWIzZHlaWFIxY201MGFHbGpheTB4TFhNZ0lIVnBMV2xqYjI0dFlYSnliM2R5WlhSMWNtNHRNUzEzSUNCMWFTMXBZMjl1TFdGeWNtOTNjbVYwZFhKdUxURXRiaUFnZFdrdGFXTnZiaTFoY25KdmQzSmxkSFZ5YmkweExXVWdJSFZwTFdsamIyNHRZWEp5YjNkeVpYUjFjbTR0TVMxeklDQjFhUzFwWTI5dUxXRnljbTkzY21WbWNtVnphQzB4TFhjZ0lIVnBMV2xqYjI0dFlYSnliM2R5WldaeVpYTm9MVEV0YmlBZ2RXa3RhV052YmkxaGNuSnZkM0psWm5KbGMyZ3RNUzFsSUNCMWFTMXBZMjl1TFdGeWNtOTNjbVZtY21WemFDMHhMWE5jWEhKY1hHNGdJQzh2SUhWcExXbGpiMjR0WVhKeWIzY3ROQ0FnZFdrdGFXTnZiaTFoY25KdmR5MDBMV1JwWVdjZ0lIVnBMV2xqYjI0dFpYaDBiR2x1YXlBZ2RXa3RhV052YmkxdVpYZDNhVzRnSUhWcExXbGpiMjR0Y21WbWNtVnphQ0FnZFdrdGFXTnZiaTF6YUhWbVpteGxJQ0IxYVMxcFkyOXVMWFJ5WVc1elptVnlMV1V0ZHlBZ2RXa3RhV052YmkxMGNtRnVjMlpsY25Sb2FXTnJMV1V0ZDF4Y2NseGNibHhjY2x4Y2JpQWdMeTljWEhKY1hHNGdJQzh2SUZKdmR5QTJYRnh5WEZ4dUlDQXZMMXhjY2x4Y2JpQWdKR3hwYzNRNklHWnZiR1JsY2kxamIyeHNZWEJ6WldRZ1ptOXNaR1Z5TFc5d1pXNGdaRzlqZFcxbGJuUWdaRzlqZFcxbGJuUXRZaUJ1YjNSbElHMWhhV3d0WTJ4dmMyVmtJRzFoYVd3dGIzQmxiaUJ6ZFdsMFkyRnpaU0JqYjIxdFpXNTBJSEJsY25OdmJpQndjbWx1ZENCMGNtRnphQ0JzYjJOclpXUWdkVzVzYjJOclpXUWdZbTl2YTIxaGNtc2dkR0ZuTzF4Y2NseGNiaUFnSkhnNklEQTdYRnh5WEZ4dVhGeHlYRnh1SUNCQVpXRmphQ0FrYVhSbGJTQnBiaUFrYkdsemRDQjdYRnh5WEZ4dUlDQWdJQ1l1YVdOdmJuTXRZMnd0STNza2FYUmxiWDBnZTF4Y2NseGNiaUFnSUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQ1I0SUNvZ0xURTJjSGdnTFRrMmNIaGNYSEpjWEc0Z0lDQWdmVnhjY2x4Y2JseGNjbHhjYmlBZ0lDQWtlRG9nSkhnck1UdGNYSEpjWEc0Z0lIMWNYSEpjWEc1Y1hISmNYRzRnSUM4dlhGeHlYRnh1SUNBdkx5QlNiM2NnTjF4Y2NseGNiaUFnTHk5Y1hISmNYRzRnSUNSc2FYTjBPaUJvYjIxbElHWnNZV2NnWTJGc1kzVnNZWFJ2Y2lCallYSjBJSEJsYm1OcGJDQmpiRzlqYXlCa2FYTnJJR05oYkdWdVpHRnlJSHB2YjIxcGJpQjZiMjl0YjNWMElITmxZWEpqYUNCM2NtVnVZMmdnWjJWaGNpQm9aV0Z5ZENCemRHRnlJR3hwYm1zN1hGeHlYRnh1SUNBa2VEb2dNRHRjWEhKY1hHNWNYSEpjWEc0Z0lFQmxZV05vSUNScGRHVnRJR2x1SUNSc2FYTjBJSHRjWEhKY1hHNGdJQ0FnSmk1cFkyOXVjeTFqYkMwamV5UnBkR1Z0ZlNCN1hGeHlYRnh1SUNBZ0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nSkhnZ0tpQXRNVFp3ZUNBdE1URXljSGhjWEhKY1hHNGdJQ0FnZlZ4Y2NseGNibHhjY2x4Y2JpQWdJQ0FrZURvZ0pIZ3JNVHRjWEhKY1hHNGdJSDFjWEhKY1hHNWNYSEpjWEc0Z0lDOHZYRnh5WEZ4dUlDQXZMeUJTYjNjZ09GeGNjbHhjYmlBZ0x5OWNYSEpjWEc0Z0lDUnNhWE4wT2lCallXNWpaV3dnSUhCc2RYTWdJSEJzZFhOMGFHbGpheUFnYldsdWRYTWdJRzFwYm5WemRHaHBZMnNnSUd0bGVTQWdiR2xuYUhSaWRXeGlJQ0J6WTJsemMyOXljeUFnWTJ4cGNHSnZZWEprSUNCamIzQjVJQ0JqYjI1MFlXTjBJQ0JwYldGblpTQWdkbWxrWlc4Z0lITmpjbWx3ZER0Y1hISmNYRzRnSUNSNE9pQXdPMXhjY2x4Y2JseGNjbHhjYmlBZ1FHVmhZMmdnSkdsMFpXMGdhVzRnSkd4cGMzUWdlMXhjY2x4Y2JpQWdJQ0FtTG1samIyNXpMV05zTFNON0pHbDBaVzE5SUh0Y1hISmNYRzRnSUNBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUFrZUNBcUlDMHhObkI0SUMweE1qaHdlRnhjY2x4Y2JpQWdJQ0I5WEZ4eVhGeHVYRnh5WEZ4dUlDQWdJQ1I0T2lBa2VDc3hPMXhjY2x4Y2JpQWdmVnhjY2x4Y2JseGNjbHhjYmlBZ0ppNXBZMjl1Y3kxamJDMWpiRzl6WlNCN1hGeHlYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzA0TUhCNElDMHhNamh3ZUR0Y1hISmNYRzRnSUgxY1hISmNYRzVjWEhKY1hHNGdJQ1l1YVdOdmJuTXRZMnd0WTJ4dmMyVjBhR2xqYXlCN1hGeHlYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzA1Tm5CNElDMHhNamh3ZUR0Y1hISmNYRzRnSUgxY1hISmNYRzRnSUM4dklIVnBMV2xqYjI0dFkyRnVZMlZzSUNCMWFTMXBZMjl1TFhCc2RYTWdJSFZwTFdsamIyNHRjR3gxYzNSb2FXTnJJQ0IxYVMxcFkyOXVMVzFwYm5WeklDQjFhUzFwWTI5dUxXMXBiblZ6ZEdocFkyc2dJSFZwTFdsamIyNHRhMlY1SUNCMWFTMXBZMjl1TFd4cFoyaDBZblZzWWlBZ2RXa3RhV052YmkxelkybHpjMjl5Y3lBZ2RXa3RhV052YmkxamJHbHdZbTloY21RZ0lIVnBMV2xqYjI0dFkyOXdlU0FnZFdrdGFXTnZiaTFqYjI1MFlXTjBJQ0IxYVMxcFkyOXVMV2x0WVdkbElDQjFhUzFwWTI5dUxYWnBaR1Z2SUNCMWFTMXBZMjl1TFhOamNtbHdkRnhjY2x4Y2JseGNjbHhjYmlBZ0x5OGdVbTkzSURsY1hISmNYRzRnSUNSc2FYTjBPaUJoYkdWeWRDQnBibVp2SUNCdWIzUnBZMlVnYUdWc2NDQmphR1ZqYXlBZ1luVnNiR1YwSUNCeVlXUnBieTF2Wm1ZZ0lISmhaR2x2TFc5dUlDQndhVzR0ZHlBZ2NHbHVMWE03WEZ4eVhGeHVJQ0FrZURvZ01EdGNYSEpjWEc1Y1hISmNYRzRnSUVCbFlXTm9JQ1JwZEdWdElHbHVJQ1JzYVhOMElIdGNYSEpjWEc0Z0lDQWdKaTVwWTI5dWN5MWpiQzBqZXlScGRHVnRmU0I3WEZ4eVhGeHVJQ0FnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dKSGdnS2lBdE1UWndlQ0E1SUNvZ0xURTJjSGhjWEhKY1hHNGdJQ0FnZlZ4Y2NseGNibHhjY2x4Y2JpQWdJQ0FrZURvZ0pIZ3JNVHRjWEhKY1hHNGdJSDFjWEhKY1hHNWNYSEpjWEc0Z0lDOHZJQ0JTYjNjZ01UQmNYSEpjWEc0Z0lDUnNhWE4wT2lCd2JHRjVJSEJoZFhObElITmxaV3N0Ym1WNGRDQWdjMlZsYXkxd2NtVjJJQ0J6WldWckxXVnVaQ0FnYzJWbGF5MW1hWEp6ZENBZ2MzUnZjQ0FnWldwbFkzUWdJSFp2YkhWdFpTMXZabVlnSUhadmJIVnRaUzF2Ymp0Y1hISmNYRzRnSUNSNE9pQXdPMXhjY2x4Y2JseGNjbHhjYmlBZ1FHVmhZMmdnSkdsMFpXMGdhVzRnSkd4cGMzUWdlMXhjY2x4Y2JpQWdJQ0FtTG1samIyNXpMV05zTFNON0pHbDBaVzE5SUh0Y1hISmNYRzRnSUNBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUFrZUNBcUlDMHhObkI0SURFd0lDb2dMVEUyY0hoY1hISmNYRzRnSUNBZ2ZWeGNjbHhjYmx4Y2NseGNiaUFnSUNBa2VEb2dKSGdyTVR0Y1hISmNYRzRnSUgxY1hISmNYRzVjWEhKY1hHNGdMeThnZFdrdGFXTnZiaTF3YjNkbGNpQWdkV2t0YVdOdmJpMXphV2R1WVd3dFpHbGhaeUFnZFdrdGFXTnZiaTF6YVdkdVlXd2dJSFZwTFdsamIyNHRZbUYwZEdWeWVTMHdJQ0IxYVMxcFkyOXVMV0poZEhSbGNua3RNU0FnZFdrdGFXTnZiaTFpWVhSMFpYSjVMVElnSUhWcExXbGpiMjR0WW1GMGRHVnllUzB6WEZ4eVhGeHVJQ0F2THlCMWFTMXBZMjl1TFdOcGNtTnNaUzF3YkhWeklDQjFhUzFwWTI5dUxXTnBjbU5zWlMxdGFXNTFjeUFnZFdrdGFXTnZiaTFqYVhKamJHVXRZMnh2YzJVZ0lIVnBMV2xqYjI0dFkybHlZMnhsTFhSeWFXRnVaMnhsTFdVZ0lIVnBMV2xqYjI0dFkybHlZMnhsTFhSeWFXRnVaMnhsTFhNZ0lIVnBMV2xqYjI0dFkybHlZMnhsTFhSeWFXRnVaMnhsTFhjZ0lIVnBMV2xqYjI0dFkybHlZMnhsTFhSeWFXRnVaMnhsTFc0Z0lIVnBMV2xqYjI0dFkybHlZMnhsTFdGeWNtOTNMV1VnSUhWcExXbGpiMjR0WTJseVkyeGxMV0Z5Y205M0xYTWdJSFZwTFdsamIyNHRZMmx5WTJ4bExXRnljbTkzTFhjZ0lIVnBMV2xqYjI0dFkybHlZMnhsTFdGeWNtOTNMVzRnSUhWcExXbGpiMjR0WTJseVkyeGxMWHB2YjIxcGJpQWdkV2t0YVdOdmJpMWphWEpqYkdVdGVtOXZiVzkxZENBZ2RXa3RhV052YmkxamFYSmpiR1V0WTJobFkydGNYSEpjWEc0dkx5QjFhUzFwWTI5dUxXTnBjbU5zWlhOdFlXeHNMWEJzZFhNZ0lIVnBMV2xqYjI0dFkybHlZMnhsYzIxaGJHd3RiV2x1ZFhNZ0lIVnBMV2xqYjI0dFkybHlZMnhsYzIxaGJHd3RZMnh2YzJVZ0lIVnBMV2xqYjI0dGMzRjFZWEpsYzIxaGJHd3RjR3gxY3lBZ2RXa3RhV052YmkxemNYVmhjbVZ6YldGc2JDMXRhVzUxY3lBZ2RXa3RhV052YmkxemNYVmhjbVZ6YldGc2JDMWpiRzl6WlZ4Y2NseGNiaTh2SUhWcExXbGpiMjR0WjNKcGNDMWtiM1IwWldRdGRtVnlkR2xqWVd3Z0lIVnBMV2xqYjI0dFozSnBjQzFrYjNSMFpXUXRhRzl5YVhwdmJuUmhiQ0FnZFdrdGFXTnZiaTFuY21sd0xYTnZiR2xrTFhabGNuUnBZMkZzSUNCMWFTMXBZMjl1TFdkeWFYQXRjMjlzYVdRdGFHOXlhWHB2Ym5SaGJDQWdkV2t0YVdOdmJpMW5jbWx3YzIxaGJHd3RaR2xoWjI5dVlXd3RjMlVnSUhWcExXbGpiMjR0WjNKcGNDMWthV0ZuYjI1aGJDMXpaVnhjY2x4Y2JseGNjbHhjYm4xY1hISmNYRzVjSWwwc1hDSnpiM1Z5WTJWU2IyOTBYQ0k2WENKY0luMWRLVHRjYmk4dklFVjRjRzl5ZEhOY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUY5ZlgwTlRVMTlNVDBGRVJWSmZSVmhRVDFKVVgxOWZPMXh1SWl3aVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1Y2JpOHFYRzRnSUUxSlZDQk1hV05sYm5ObElHaDBkSEE2THk5M2QzY3ViM0JsYm5OdmRYSmpaUzV2Y21jdmJHbGpaVzV6WlhNdmJXbDBMV3hwWTJWdWMyVXVjR2h3WEc0Z0lFRjFkR2h2Y2lCVWIySnBZWE1nUzI5d2NHVnljeUJBYzI5cmNtRmNiaW92WEc0dkx5QmpjM01nWW1GelpTQmpiMlJsTENCcGJtcGxZM1JsWkNCaWVTQjBhR1VnWTNOekxXeHZZV1JsY2x4dUx5OGdaWE5zYVc1MExXUnBjMkZpYkdVdGJtVjRkQzFzYVc1bElHWjFibU10Ym1GdFpYTmNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdLR056YzFkcGRHaE5ZWEJ3YVc1blZHOVRkSEpwYm1jcElIdGNiaUFnZG1GeUlHeHBjM1FnUFNCYlhUc2dMeThnY21WMGRYSnVJSFJvWlNCc2FYTjBJRzltSUcxdlpIVnNaWE1nWVhNZ1kzTnpJSE4wY21sdVoxeHVYRzRnSUd4cGMzUXVkRzlUZEhKcGJtY2dQU0JtZFc1amRHbHZiaUIwYjFOMGNtbHVaeWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1dFlYQW9ablZ1WTNScGIyNGdLR2wwWlcwcElIdGNiaUFnSUNBZ0lIWmhjaUJqYjI1MFpXNTBJRDBnWTNOelYybDBhRTFoY0hCcGJtZFViMU4wY21sdVp5aHBkR1Z0S1R0Y2JseHVJQ0FnSUNBZ2FXWWdLR2wwWlcxYk1sMHBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRndpUUcxbFpHbGhJRndpTG1OdmJtTmhkQ2hwZEdWdFd6SmRMQ0JjSWlCN1hDSXBMbU52Ym1OaGRDaGpiMjUwWlc1MExDQmNJbjFjSWlrN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCamIyNTBaVzUwTzF4dUlDQWdJSDBwTG1wdmFXNG9YQ0pjSWlrN1hHNGdJSDA3SUM4dklHbHRjRzl5ZENCaElHeHBjM1FnYjJZZ2JXOWtkV3hsY3lCcGJuUnZJSFJvWlNCc2FYTjBYRzRnSUM4dklHVnpiR2x1ZEMxa2FYTmhZbXhsTFc1bGVIUXRiR2x1WlNCbWRXNWpMVzVoYldWelhHNWNibHh1SUNCc2FYTjBMbWtnUFNCbWRXNWpkR2x2YmlBb2JXOWtkV3hsY3l3Z2JXVmthV0ZSZFdWeWVTd2daR1ZrZFhCbEtTQjdYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQnRiMlIxYkdWeklEMDlQU0JjSW5OMGNtbHVaMXdpS1NCN1hHNGdJQ0FnSUNBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxdVpYaDBMV3hwYm1VZ2JtOHRjR0Z5WVcwdGNtVmhjM05wWjI1Y2JpQWdJQ0FnSUcxdlpIVnNaWE1nUFNCYlcyNTFiR3dzSUcxdlpIVnNaWE1zSUZ3aVhDSmRYVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjJZWElnWVd4eVpXRmtlVWx0Y0c5eWRHVmtUVzlrZFd4bGN5QTlJSHQ5TzF4dVhHNGdJQ0FnYVdZZ0tHUmxaSFZ3WlNrZ2UxeHVJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMVzVsZUhRdGJHbHVaU0J3Y21WbVpYSXRaR1Z6ZEhKMVkzUjFjbWx1WjF4dUlDQWdJQ0FnSUNCMllYSWdhV1FnUFNCMGFHbHpXMmxkV3pCZE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNocFpDQWhQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQWdJQ0FnWVd4eVpXRmtlVWx0Y0c5eWRHVmtUVzlrZFd4bGMxdHBaRjBnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdabTl5SUNoMllYSWdYMmtnUFNBd095QmZhU0E4SUcxdlpIVnNaWE11YkdWdVozUm9PeUJmYVNzcktTQjdYRzRnSUNBZ0lDQjJZWElnYVhSbGJTQTlJRnRkTG1OdmJtTmhkQ2h0YjJSMWJHVnpXMTlwWFNrN1hHNWNiaUFnSUNBZ0lHbG1JQ2hrWldSMWNHVWdKaVlnWVd4eVpXRmtlVWx0Y0c5eWRHVmtUVzlrZFd4bGMxdHBkR1Z0V3pCZFhTa2dlMXh1SUNBZ0lDQWdJQ0F2THlCbGMyeHBiblF0WkdsellXSnNaUzF1WlhoMExXeHBibVVnYm04dFkyOXVkR2x1ZFdWY2JpQWdJQ0FnSUNBZ1kyOXVkR2x1ZFdVN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHbG1JQ2h0WldScFlWRjFaWEo1S1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doYVhSbGJWc3lYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lHbDBaVzFiTWwwZ1BTQnRaV1JwWVZGMVpYSjVPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUdsMFpXMWJNbDBnUFNCY0lsd2lMbU52Ym1OaGRDaHRaV1JwWVZGMVpYSjVMQ0JjSWlCaGJtUWdYQ0lwTG1OdmJtTmhkQ2hwZEdWdFd6SmRLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCc2FYTjBMbkIxYzJnb2FYUmxiU2s3WEc0Z0lDQWdmVnh1SUNCOU8xeHVYRzRnSUhKbGRIVnliaUJzYVhOME8xeHVmVHNpTENKY0luVnpaU0J6ZEhKcFkzUmNJanRjYmx4dVpuVnVZM1JwYjI0Z1gzTnNhV05sWkZSdlFYSnlZWGtvWVhKeUxDQnBLU0I3SUhKbGRIVnliaUJmWVhKeVlYbFhhWFJvU0c5c1pYTW9ZWEp5S1NCOGZDQmZhWFJsY21GaWJHVlViMEZ5Y21GNVRHbHRhWFFvWVhKeUxDQnBLU0I4ZkNCZmRXNXpkWEJ3YjNKMFpXUkpkR1Z5WVdKc1pWUnZRWEp5WVhrb1lYSnlMQ0JwS1NCOGZDQmZibTl1U1hSbGNtRmliR1ZTWlhOMEtDazdJSDFjYmx4dVpuVnVZM1JwYjI0Z1gyNXZia2wwWlhKaFlteGxVbVZ6ZENncElIc2dkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWhjSWtsdWRtRnNhV1FnWVhSMFpXMXdkQ0IwYnlCa1pYTjBjblZqZEhWeVpTQnViMjR0YVhSbGNtRmliR1VnYVc1emRHRnVZMlV1WEZ4dVNXNGdiM0prWlhJZ2RHOGdZbVVnYVhSbGNtRmliR1VzSUc1dmJpMWhjbkpoZVNCdlltcGxZM1J6SUcxMWMzUWdhR0YyWlNCaElGdFRlVzFpYjJ3dWFYUmxjbUYwYjNKZEtDa2diV1YwYUc5a0xsd2lLVHNnZlZ4dVhHNW1kVzVqZEdsdmJpQmZkVzV6ZFhCd2IzSjBaV1JKZEdWeVlXSnNaVlJ2UVhKeVlYa29ieXdnYldsdVRHVnVLU0I3SUdsbUlDZ2hieWtnY21WMGRYSnVPeUJwWmlBb2RIbHdaVzltSUc4Z1BUMDlJRndpYzNSeWFXNW5YQ0lwSUhKbGRIVnliaUJmWVhKeVlYbE1hV3RsVkc5QmNuSmhlU2h2TENCdGFXNU1aVzRwT3lCMllYSWdiaUE5SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1ZEc5VGRISnBibWN1WTJGc2JDaHZLUzV6YkdsalpTZzRMQ0F0TVNrN0lHbG1JQ2h1SUQwOVBTQmNJazlpYW1WamRGd2lJQ1ltSUc4dVkyOXVjM1J5ZFdOMGIzSXBJRzRnUFNCdkxtTnZibk4wY25WamRHOXlMbTVoYldVN0lHbG1JQ2h1SUQwOVBTQmNJazFoY0Z3aUlIeDhJRzRnUFQwOUlGd2lVMlYwWENJcElISmxkSFZ5YmlCQmNuSmhlUzVtY205dEtHOHBPeUJwWmlBb2JpQTlQVDBnWENKQmNtZDFiV1Z1ZEhOY0lpQjhmQ0F2WGlnL09sVnBmRWtwYm5Rb1B6bzRmREUyZkRNeUtTZy9Pa05zWVcxd1pXUXBQMEZ5Y21GNUpDOHVkR1Z6ZENodUtTa2djbVYwZFhKdUlGOWhjbkpoZVV4cGEyVlViMEZ5Y21GNUtHOHNJRzFwYmt4bGJpazdJSDFjYmx4dVpuVnVZM1JwYjI0Z1gyRnljbUY1VEdsclpWUnZRWEp5WVhrb1lYSnlMQ0JzWlc0cElIc2dhV1lnS0d4bGJpQTlQU0J1ZFd4c0lIeDhJR3hsYmlBK0lHRnljaTVzWlc1bmRHZ3BJR3hsYmlBOUlHRnljaTVzWlc1bmRHZzdJR1p2Y2lBb2RtRnlJR2tnUFNBd0xDQmhjbkl5SUQwZ2JtVjNJRUZ5Y21GNUtHeGxiaWs3SUdrZ1BDQnNaVzQ3SUdrckt5a2dleUJoY25JeVcybGRJRDBnWVhKeVcybGRPeUI5SUhKbGRIVnliaUJoY25JeU95QjlYRzVjYm1aMWJtTjBhVzl1SUY5cGRHVnlZV0pzWlZSdlFYSnlZWGxNYVcxcGRDaGhjbklzSUdrcElIc2dhV1lnS0hSNWNHVnZaaUJUZVcxaWIyd2dQVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdmSHdnSVNoVGVXMWliMnd1YVhSbGNtRjBiM0lnYVc0Z1QySnFaV04wS0dGeWNpa3BLU0J5WlhSMWNtNDdJSFpoY2lCZllYSnlJRDBnVzEwN0lIWmhjaUJmYmlBOUlIUnlkV1U3SUhaaGNpQmZaQ0E5SUdaaGJITmxPeUIyWVhJZ1gyVWdQU0IxYm1SbFptbHVaV1E3SUhSeWVTQjdJR1p2Y2lBb2RtRnlJRjlwSUQwZ1lYSnlXMU41YldKdmJDNXBkR1Z5WVhSdmNsMG9LU3dnWDNNN0lDRW9YMjRnUFNBb1gzTWdQU0JmYVM1dVpYaDBLQ2twTG1SdmJtVXBPeUJmYmlBOUlIUnlkV1VwSUhzZ1gyRnljaTV3ZFhOb0tGOXpMblpoYkhWbEtUc2dhV1lnS0drZ0ppWWdYMkZ5Y2k1c1pXNW5kR2dnUFQwOUlHa3BJR0p5WldGck95QjlJSDBnWTJGMFkyZ2dLR1Z5Y2lrZ2V5QmZaQ0E5SUhSeWRXVTdJRjlsSUQwZ1pYSnlPeUI5SUdacGJtRnNiSGtnZXlCMGNua2dleUJwWmlBb0lWOXVJQ1ltSUY5cFcxd2ljbVYwZFhKdVhDSmRJQ0U5SUc1MWJHd3BJRjlwVzF3aWNtVjBkWEp1WENKZEtDazdJSDBnWm1sdVlXeHNlU0I3SUdsbUlDaGZaQ2tnZEdoeWIzY2dYMlU3SUgwZ2ZTQnlaWFIxY200Z1gyRnljanNnZlZ4dVhHNW1kVzVqZEdsdmJpQmZZWEp5WVhsWGFYUm9TRzlzWlhNb1lYSnlLU0I3SUdsbUlDaEJjbkpoZVM1cGMwRnljbUY1S0dGeWNpa3BJSEpsZEhWeWJpQmhjbkk3SUgxY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQmpjM05YYVhSb1RXRndjR2x1WjFSdlUzUnlhVzVuS0dsMFpXMHBJSHRjYmlBZ2RtRnlJRjlwZEdWdElEMGdYM05zYVdObFpGUnZRWEp5WVhrb2FYUmxiU3dnTkNrc1hHNGdJQ0FnSUNCamIyNTBaVzUwSUQwZ1gybDBaVzFiTVYwc1hHNGdJQ0FnSUNCamMzTk5ZWEJ3YVc1bklEMGdYMmwwWlcxYk0xMDdYRzVjYmlBZ2FXWWdLSFI1Y0dWdlppQmlkRzloSUQwOVBTQmNJbVoxYm1OMGFXOXVYQ0lwSUh0Y2JpQWdJQ0F2THlCbGMyeHBiblF0WkdsellXSnNaUzF1WlhoMExXeHBibVVnYm04dGRXNWtaV1pjYmlBZ0lDQjJZWElnWW1GelpUWTBJRDBnWW5SdllTaDFibVZ6WTJGd1pTaGxibU52WkdWVlVrbERiMjF3YjI1bGJuUW9TbE5QVGk1emRISnBibWRwWm5rb1kzTnpUV0Z3Y0dsdVp5a3BLU2s3WEc0Z0lDQWdkbUZ5SUdSaGRHRWdQU0JjSW5OdmRYSmpaVTFoY0hCcGJtZFZVa3c5WkdGMFlUcGhjSEJzYVdOaGRHbHZiaTlxYzI5dU8yTm9ZWEp6WlhROWRYUm1MVGc3WW1GelpUWTBMRndpTG1OdmJtTmhkQ2hpWVhObE5qUXBPMXh1SUNBZ0lIWmhjaUJ6YjNWeVkyVk5ZWEJ3YVc1bklEMGdYQ0l2S2lNZ1hDSXVZMjl1WTJGMEtHUmhkR0VzSUZ3aUlDb3ZYQ0lwTzF4dUlDQWdJSFpoY2lCemIzVnlZMlZWVWt4eklEMGdZM056VFdGd2NHbHVaeTV6YjNWeVkyVnpMbTFoY0NobWRXNWpkR2x2YmlBb2MyOTFjbU5sS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWENJdktpTWdjMjkxY21ObFZWSk1QVndpTG1OdmJtTmhkQ2hqYzNOTllYQndhVzVuTG5OdmRYSmpaVkp2YjNRZ2ZId2dYQ0pjSWlrdVkyOXVZMkYwS0hOdmRYSmpaU3dnWENJZ0tpOWNJaWs3WEc0Z0lDQWdmU2s3WEc0Z0lDQWdjbVYwZFhKdUlGdGpiMjUwWlc1MFhTNWpiMjVqWVhRb2MyOTFjbU5sVlZKTWN5a3VZMjl1WTJGMEtGdHpiM1Z5WTJWTllYQndhVzVuWFNrdWFtOXBiaWhjSWx4Y2Jsd2lLVHRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJiWTI5dWRHVnVkRjB1YW05cGJpaGNJbHhjYmx3aUtUdGNibjA3SWl3aVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z0tIVnliQ3dnYjNCMGFXOXVjeWtnZTF4dUlDQnBaaUFvSVc5d2RHbHZibk1wSUh0Y2JpQWdJQ0F2THlCbGMyeHBiblF0WkdsellXSnNaUzF1WlhoMExXeHBibVVnYm04dGNHRnlZVzB0Y21WaGMzTnBaMjVjYmlBZ0lDQnZjSFJwYjI1eklEMGdlMzA3WEc0Z0lIMGdMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRibVY0ZEMxc2FXNWxJRzV2TFhWdVpHVnljMk52Y21VdFpHRnVaMnhsTENCdWJ5MXdZWEpoYlMxeVpXRnpjMmxuYmx4dVhHNWNiaUFnZFhKc0lEMGdkWEpzSUNZbUlIVnliQzVmWDJWelRXOWtkV3hsSUQ4Z2RYSnNMbVJsWm1GMWJIUWdPaUIxY213N1hHNWNiaUFnYVdZZ0tIUjVjR1Z2WmlCMWNtd2dJVDA5SUZ3aWMzUnlhVzVuWENJcElIdGNiaUFnSUNCeVpYUjFjbTRnZFhKc08xeHVJQ0I5SUM4dklFbG1JSFZ5YkNCcGN5QmhiSEpsWVdSNUlIZHlZWEJ3WldRZ2FXNGdjWFZ2ZEdWekxDQnlaVzF2ZG1VZ2RHaGxiVnh1WEc1Y2JpQWdhV1lnS0M5ZVd5ZGNJbDB1S2xzblhDSmRKQzh1ZEdWemRDaDFjbXdwS1NCN1hHNGdJQ0FnTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0Ym1WNGRDMXNhVzVsSUc1dkxYQmhjbUZ0TFhKbFlYTnphV2R1WEc0Z0lDQWdkWEpzSUQwZ2RYSnNMbk5zYVdObEtERXNJQzB4S1R0Y2JpQWdmVnh1WEc0Z0lHbG1JQ2h2Y0hScGIyNXpMbWhoYzJncElIdGNiaUFnSUNBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxdVpYaDBMV3hwYm1VZ2JtOHRjR0Z5WVcwdGNtVmhjM05wWjI1Y2JpQWdJQ0IxY213Z0t6MGdiM0IwYVc5dWN5NW9ZWE5vTzF4dUlDQjlJQzh2SUZOb2IzVnNaQ0IxY213Z1ltVWdkM0poY0hCbFpEOWNiaUFnTHk4Z1UyVmxJR2gwZEhCek9pOHZaSEpoWm5SekxtTnpjM2RuTG05eVp5OWpjM010ZG1Gc2RXVnpMVE12STNWeWJITmNibHh1WEc0Z0lHbG1JQ2d2VzF3aUp5Z3BJRnhjZEZ4Y2JsMHZMblJsYzNRb2RYSnNLU0I4ZkNCdmNIUnBiMjV6TG01bFpXUlJkVzkwWlhNcElIdGNiaUFnSUNCeVpYUjFjbTRnWENKY1hGd2lYQ0l1WTI5dVkyRjBLSFZ5YkM1eVpYQnNZV05sS0M5Y0lpOW5MQ0FuWEZ4Y1hGd2lKeWt1Y21Wd2JHRmpaU2d2WEZ4dUwyY3NJRndpWEZ4Y1hHNWNJaWtzSUZ3aVhGeGNJbHdpS1R0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCMWNtdzdYRzU5T3lJc0ltbHRjRzl5ZENCaGNHa2dabkp2YlNCY0lpRXVMaTh1TGk4dUxpOXViMlJsWDIxdlpIVnNaWE12YzNSNWJHVXRiRzloWkdWeUwyUnBjM1F2Y25WdWRHbHRaUzlwYm1wbFkzUlRkSGxzWlhOSmJuUnZVM1I1YkdWVVlXY3Vhbk5jSWp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2x0Y0c5eWRDQmpiMjUwWlc1MElHWnliMjBnWENJaElTNHVMeTR1THk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYzNNdGJHOWhaR1Z5TDJScGMzUXZZMnB6TG1weklTNHVMeTR1THk0dUwyNXZaR1ZmYlc5a2RXeGxjeTl5WlhOdmJIWmxMWFZ5YkMxc2IyRmtaWEl2YVc1a1pYZ3Vhbk1oTGk0dkxpNHZMaTR2Ym05a1pWOXRiMlIxYkdWekwzTmhjM010Ykc5aFpHVnlMMlJwYzNRdlkycHpMbXB6UHo5eWRXeGxVMlYwV3pGZExuSjFiR1Z6V3pGZExuVnpaVnN6WFNFdUwybGpiMjV6TG5OamMzTmNJanRjYmx4dWRtRnlJRzl3ZEdsdmJuTWdQU0I3ZlR0Y2JseHViM0IwYVc5dWN5NXBibk5sY25RZ1BTQmNJbWhsWVdSY0lqdGNibTl3ZEdsdmJuTXVjMmx1WjJ4bGRHOXVJRDBnWm1Gc2MyVTdYRzVjYm5aaGNpQjFjR1JoZEdVZ1BTQmhjR2tvWTI5dWRHVnVkQ3dnYjNCMGFXOXVjeWs3WEc1Y2JseHVhV1lnS0cxdlpIVnNaUzVvYjNRcElIdGNiaUFnYVdZZ0tDRmpiMjUwWlc1MExteHZZMkZzY3lCOGZDQnRiMlIxYkdVdWFHOTBMbWx1ZG1Gc2FXUmhkR1VwSUh0Y2JpQWdJQ0IyWVhJZ2FYTkZjWFZoYkV4dlkyRnNjeUE5SUdaMWJtTjBhVzl1SUdselJYRjFZV3hNYjJOaGJITW9ZU3dnWWl3Z2FYTk9ZVzFsWkVWNGNHOXlkQ2tnZTF4dUlDQnBaaUFvSVdFZ0ppWWdZaUI4ZkNCaElDWW1JQ0ZpS1NCN1hHNGdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0I5WEc1Y2JpQWdkbUZ5SUhBN1hHNWNiaUFnWm05eUlDaHdJR2x1SUdFcElIdGNiaUFnSUNCcFppQW9hWE5PWVcxbFpFVjRjRzl5ZENBbUppQndJRDA5UFNBblpHVm1ZWFZzZENjcElIdGNiaUFnSUNBZ0lDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXNWxlSFF0YkdsdVpTQnVieTFqYjI1MGFXNTFaVnh1SUNBZ0lDQWdZMjl1ZEdsdWRXVTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLR0ZiY0YwZ0lUMDlJR0piY0YwcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JtYjNJZ0tIQWdhVzRnWWlrZ2UxeHVJQ0FnSUdsbUlDaHBjMDVoYldWa1JYaHdiM0owSUNZbUlIQWdQVDA5SUNka1pXWmhkV3gwSnlrZ2UxeHVJQ0FnSUNBZ0x5OGdaWE5zYVc1MExXUnBjMkZpYkdVdGJtVjRkQzFzYVc1bElHNXZMV052Ym5ScGJuVmxYRzRnSUNBZ0lDQmpiMjUwYVc1MVpUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9JV0ZiY0YwcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdkSEoxWlR0Y2JuMDdYRzRnSUNBZ2RtRnlJRzlzWkV4dlkyRnNjeUE5SUdOdmJuUmxiblF1Ykc5allXeHpPMXh1WEc0Z0lDQWdiVzlrZFd4bExtaHZkQzVoWTJObGNIUW9YRzRnSUNBZ0lDQmNJaUVoTGk0dkxpNHZMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnpjeTFzYjJGa1pYSXZaR2x6ZEM5amFuTXVhbk1oTGk0dkxpNHZMaTR2Ym05a1pWOXRiMlIxYkdWekwzSmxjMjlzZG1VdGRYSnNMV3h2WVdSbGNpOXBibVJsZUM1cWN5RXVMaTh1TGk4dUxpOXViMlJsWDIxdlpIVnNaWE12YzJGemN5MXNiMkZrWlhJdlpHbHpkQzlqYW5NdWFuTS9QM0oxYkdWVFpYUmJNVjB1Y25Wc1pYTmJNVjB1ZFhObFd6TmRJUzR2YVdOdmJuTXVjMk56YzF3aUxGeHVJQ0FnSUNBZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb0lXbHpSWEYxWVd4TWIyTmhiSE1vYjJ4a1RHOWpZV3h6TENCamIyNTBaVzUwTG14dlkyRnNjeXdnZFc1a1pXWnBibVZrS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHMXZaSFZzWlM1b2IzUXVhVzUyWVd4cFpHRjBaU2dwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnYjJ4a1RHOWpZV3h6SUQwZ1kyOXVkR1Z1ZEM1c2IyTmhiSE03WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZFhCa1lYUmxLR052Ym5SbGJuUXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDbGNiaUFnZlZ4dVhHNGdJRzF2WkhWc1pTNW9iM1F1WkdsemNHOXpaU2htZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0IxY0dSaGRHVW9LVHRjYmlBZ2ZTazdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOdmJuUmxiblF1Ykc5allXeHpJSHg4SUh0OU95SXNJbHdpZFhObElITjBjbWxqZEZ3aU8xeHVYRzUyWVhJZ2FYTlBiR1JKUlNBOUlHWjFibU4wYVc5dUlHbHpUMnhrU1VVb0tTQjdYRzRnSUhaaGNpQnRaVzF2TzF4dUlDQnlaWFIxY200Z1puVnVZM1JwYjI0Z2JXVnRiM0pwZW1Vb0tTQjdYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQnRaVzF2SUQwOVBTQW5kVzVrWldacGJtVmtKeWtnZTF4dUlDQWdJQ0FnTHk4Z1ZHVnpkQ0JtYjNJZ1NVVWdQRDBnT1NCaGN5QndjbTl3YjNObFpDQmllU0JDY205M2MyVnlhR0ZqYTNOY2JpQWdJQ0FnSUM4dklFQnpaV1VnYUhSMGNEb3ZMMkp5YjNkelpYSm9ZV05yY3k1amIyMHZJMmhoWTJzdFpUY3haRGcyT1RKbU5qVXpNelF4TnpObVpXVTNNVFZqTWpJeVkySTRNRFZjYmlBZ0lDQWdJQzh2SUZSbGMzUnpJR1p2Y2lCbGVHbHpkR1Z1WTJVZ2IyWWdjM1JoYm1SaGNtUWdaMnh2WW1Gc2N5QnBjeUIwYnlCaGJHeHZkeUJ6ZEhsc1pTMXNiMkZrWlhKY2JpQWdJQ0FnSUM4dklIUnZJRzl3WlhKaGRHVWdZMjl5Y21WamRHeDVJR2x1ZEc4Z2JtOXVMWE4wWVc1a1lYSmtJR1Z1ZG1seWIyNXRaVzUwYzF4dUlDQWdJQ0FnTHk4Z1FITmxaU0JvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2ZDJWaWNHRmpheTFqYjI1MGNtbGlMM04wZVd4bExXeHZZV1JsY2k5cGMzTjFaWE12TVRjM1hHNGdJQ0FnSUNCdFpXMXZJRDBnUW05dmJHVmhiaWgzYVc1a2IzY2dKaVlnWkc5amRXMWxiblFnSmlZZ1pHOWpkVzFsYm5RdVlXeHNJQ1ltSUNGM2FXNWtiM2N1WVhSdllpazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUcxbGJXODdYRzRnSUgwN1hHNTlLQ2s3WEc1Y2JuWmhjaUJuWlhSVVlYSm5aWFFnUFNCbWRXNWpkR2x2YmlCblpYUlVZWEpuWlhRb0tTQjdYRzRnSUhaaGNpQnRaVzF2SUQwZ2UzMDdYRzRnSUhKbGRIVnliaUJtZFc1amRHbHZiaUJ0WlcxdmNtbDZaU2gwWVhKblpYUXBJSHRjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JRzFsYlc5YmRHRnlaMlYwWFNBOVBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2JpQWdJQ0FnSUhaaGNpQnpkSGxzWlZSaGNtZGxkQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9kR0Z5WjJWMEtUc2dMeThnVTNCbFkybGhiQ0JqWVhObElIUnZJSEpsZEhWeWJpQm9aV0ZrSUc5bUlHbG1jbUZ0WlNCcGJuTjBaV0ZrSUc5bUlHbG1jbUZ0WlNCcGRITmxiR1pjYmx4dUlDQWdJQ0FnYVdZZ0tIZHBibVJ2ZHk1SVZFMU1TVVp5WVcxbFJXeGxiV1Z1ZENBbUppQnpkSGxzWlZSaGNtZGxkQ0JwYm5OMFlXNWpaVzltSUhkcGJtUnZkeTVJVkUxTVNVWnlZVzFsUld4bGJXVnVkQ2tnZTF4dUlDQWdJQ0FnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0FnSUM4dklGUm9hWE1nZDJsc2JDQjBhSEp2ZHlCaGJpQmxlR05sY0hScGIyNGdhV1lnWVdOalpYTnpJSFJ2SUdsbWNtRnRaU0JwY3lCaWJHOWphMlZrWEc0Z0lDQWdJQ0FnSUNBZ0x5OGdaSFZsSUhSdklHTnliM056TFc5eWFXZHBiaUJ5WlhOMGNtbGpkR2x2Ym5OY2JpQWdJQ0FnSUNBZ0lDQnpkSGxzWlZSaGNtZGxkQ0E5SUhOMGVXeGxWR0Z5WjJWMExtTnZiblJsYm5SRWIyTjFiV1Z1ZEM1b1pXRmtPMXh1SUNBZ0lDQWdJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdMeThnYVhOMFlXNWlkV3dnYVdkdWIzSmxJRzVsZUhSY2JpQWdJQ0FnSUNBZ0lDQnpkSGxzWlZSaGNtZGxkQ0E5SUc1MWJHdzdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnYldWdGIxdDBZWEpuWlhSZElEMGdjM1I1YkdWVVlYSm5aWFE3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlHMWxiVzliZEdGeVoyVjBYVHRjYmlBZ2ZUdGNibjBvS1R0Y2JseHVkbUZ5SUhOMGVXeGxjMGx1Ukc5dElEMGdXMTA3WEc1Y2JtWjFibU4wYVc5dUlHZGxkRWx1WkdWNFFubEpaR1Z1ZEdsbWFXVnlLR2xrWlc1MGFXWnBaWElwSUh0Y2JpQWdkbUZ5SUhKbGMzVnNkQ0E5SUMweE8xeHVYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2MzUjViR1Z6U1c1RWIyMHViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0JwWmlBb2MzUjViR1Z6U1c1RWIyMWJhVjB1YVdSbGJuUnBabWxsY2lBOVBUMGdhV1JsYm5ScFptbGxjaWtnZTF4dUlDQWdJQ0FnY21WemRXeDBJRDBnYVR0Y2JpQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQnlaWE4xYkhRN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUcxdlpIVnNaWE5VYjBSdmJTaHNhWE4wTENCdmNIUnBiMjV6S1NCN1hHNGdJSFpoY2lCcFpFTnZkVzUwVFdGd0lEMGdlMzA3WEc0Z0lIWmhjaUJwWkdWdWRHbG1hV1Z5Y3lBOUlGdGRPMXh1WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2diR2x6ZEM1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lIWmhjaUJwZEdWdElEMGdiR2x6ZEZ0cFhUdGNiaUFnSUNCMllYSWdhV1FnUFNCdmNIUnBiMjV6TG1KaGMyVWdQeUJwZEdWdFd6QmRJQ3NnYjNCMGFXOXVjeTVpWVhObElEb2dhWFJsYlZzd1hUdGNiaUFnSUNCMllYSWdZMjkxYm5RZ1BTQnBaRU52ZFc1MFRXRndXMmxrWFNCOGZDQXdPMXh1SUNBZ0lIWmhjaUJwWkdWdWRHbG1hV1Z5SUQwZ1hDSmNJaTVqYjI1allYUW9hV1FzSUZ3aUlGd2lLUzVqYjI1allYUW9ZMjkxYm5RcE8xeHVJQ0FnSUdsa1EyOTFiblJOWVhCYmFXUmRJRDBnWTI5MWJuUWdLeUF4TzF4dUlDQWdJSFpoY2lCcGJtUmxlQ0E5SUdkbGRFbHVaR1Y0UW5sSlpHVnVkR2xtYVdWeUtHbGtaVzUwYVdacFpYSXBPMXh1SUNBZ0lIWmhjaUJ2WW1vZ1BTQjdYRzRnSUNBZ0lDQmpjM002SUdsMFpXMWJNVjBzWEc0Z0lDQWdJQ0J0WldScFlUb2dhWFJsYlZzeVhTeGNiaUFnSUNBZ0lITnZkWEpqWlUxaGNEb2dhWFJsYlZzelhWeHVJQ0FnSUgwN1hHNWNiaUFnSUNCcFppQW9hVzVrWlhnZ0lUMDlJQzB4S1NCN1hHNGdJQ0FnSUNCemRIbHNaWE5KYmtSdmJWdHBibVJsZUYwdWNtVm1aWEpsYm1ObGN5c3JPMXh1SUNBZ0lDQWdjM1I1YkdWelNXNUViMjFiYVc1a1pYaGRMblZ3WkdGMFpYSW9iMkpxS1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdjM1I1YkdWelNXNUViMjB1Y0hWemFDaDdYRzRnSUNBZ0lDQWdJR2xrWlc1MGFXWnBaWEk2SUdsa1pXNTBhV1pwWlhJc1hHNGdJQ0FnSUNBZ0lIVndaR0YwWlhJNklHRmtaRk4wZVd4bEtHOWlhaXdnYjNCMGFXOXVjeWtzWEc0Z0lDQWdJQ0FnSUhKbFptVnlaVzVqWlhNNklERmNiaUFnSUNBZ0lIMHBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbGtaVzUwYVdacFpYSnpMbkIxYzJnb2FXUmxiblJwWm1sbGNpazdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdhV1JsYm5ScFptbGxjbk03WEc1OVhHNWNibVoxYm1OMGFXOXVJR2x1YzJWeWRGTjBlV3hsUld4bGJXVnVkQ2h2Y0hScGIyNXpLU0I3WEc0Z0lIWmhjaUJ6ZEhsc1pTQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0ozTjBlV3hsSnlrN1hHNGdJSFpoY2lCaGRIUnlhV0oxZEdWeklEMGdiM0IwYVc5dWN5NWhkSFJ5YVdKMWRHVnpJSHg4SUh0OU8xeHVYRzRnSUdsbUlDaDBlWEJsYjJZZ1lYUjBjbWxpZFhSbGN5NXViMjVqWlNBOVBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2JpQWdJQ0IyWVhJZ2JtOXVZMlVnUFNCMGVYQmxiMllnWDE5M1pXSndZV05yWDI1dmJtTmxYMThnSVQwOUlDZDFibVJsWm1sdVpXUW5JRDhnWDE5M1pXSndZV05yWDI1dmJtTmxYMThnT2lCdWRXeHNPMXh1WEc0Z0lDQWdhV1lnS0c1dmJtTmxLU0I3WEc0Z0lDQWdJQ0JoZEhSeWFXSjFkR1Z6TG01dmJtTmxJRDBnYm05dVkyVTdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdUMkpxWldOMExtdGxlWE1vWVhSMGNtbGlkWFJsY3lrdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb2EyVjVLU0I3WEc0Z0lDQWdjM1I1YkdVdWMyVjBRWFIwY21saWRYUmxLR3RsZVN3Z1lYUjBjbWxpZFhSbGMxdHJaWGxkS1R0Y2JpQWdmU2s3WEc1Y2JpQWdhV1lnS0hSNWNHVnZaaUJ2Y0hScGIyNXpMbWx1YzJWeWRDQTlQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUc5d2RHbHZibk11YVc1elpYSjBLSE4wZVd4bEtUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQjJZWElnZEdGeVoyVjBJRDBnWjJWMFZHRnlaMlYwS0c5d2RHbHZibk11YVc1elpYSjBJSHg4SUNkb1pXRmtKeWs3WEc1Y2JpQWdJQ0JwWmlBb0lYUmhjbWRsZENrZ2UxeHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0Z3aVEyOTFiR1J1SjNRZ1ptbHVaQ0JoSUhOMGVXeGxJSFJoY21kbGRDNGdWR2hwY3lCd2NtOWlZV0pzZVNCdFpXRnVjeUIwYUdGMElIUm9aU0IyWVd4MVpTQm1iM0lnZEdobElDZHBibk5sY25RbklIQmhjbUZ0WlhSbGNpQnBjeUJwYm5aaGJHbGtMbHdpS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0IwWVhKblpYUXVZWEJ3Wlc1a1EyaHBiR1FvYzNSNWJHVXBPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSE4wZVd4bE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCeVpXMXZkbVZUZEhsc1pVVnNaVzFsYm5Rb2MzUjViR1VwSUh0Y2JpQWdMeThnYVhOMFlXNWlkV3dnYVdkdWIzSmxJR2xtWEc0Z0lHbG1JQ2h6ZEhsc1pTNXdZWEpsYm5ST2IyUmxJRDA5UFNCdWRXeHNLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQjlYRzVjYmlBZ2MzUjViR1V1Y0dGeVpXNTBUbTlrWlM1eVpXMXZkbVZEYUdsc1pDaHpkSGxzWlNrN1hHNTlYRzR2S2lCcGMzUmhibUoxYkNCcFoyNXZjbVVnYm1WNGRDQWdLaTljYmx4dVhHNTJZWElnY21Wd2JHRmpaVlJsZUhRZ1BTQm1kVzVqZEdsdmJpQnlaWEJzWVdObFZHVjRkQ2dwSUh0Y2JpQWdkbUZ5SUhSbGVIUlRkRzl5WlNBOUlGdGRPMXh1SUNCeVpYUjFjbTRnWm5WdVkzUnBiMjRnY21Wd2JHRmpaU2hwYm1SbGVDd2djbVZ3YkdGalpXMWxiblFwSUh0Y2JpQWdJQ0IwWlhoMFUzUnZjbVZiYVc1a1pYaGRJRDBnY21Wd2JHRmpaVzFsYm5RN1hHNGdJQ0FnY21WMGRYSnVJSFJsZUhSVGRHOXlaUzVtYVd4MFpYSW9RbTl2YkdWaGJpa3VhbTlwYmlnblhGeHVKeWs3WEc0Z0lIMDdYRzU5S0NrN1hHNWNibVoxYm1OMGFXOXVJR0Z3Y0d4NVZHOVRhVzVuYkdWMGIyNVVZV2NvYzNSNWJHVXNJR2x1WkdWNExDQnlaVzF2ZG1Vc0lHOWlhaWtnZTF4dUlDQjJZWElnWTNOeklEMGdjbVZ0YjNabElEOGdKeWNnT2lCdlltb3ViV1ZrYVdFZ1B5QmNJa0J0WldScFlTQmNJaTVqYjI1allYUW9iMkpxTG0xbFpHbGhMQ0JjSWlCN1hDSXBMbU52Ym1OaGRDaHZZbW91WTNOekxDQmNJbjFjSWlrZ09pQnZZbW91WTNOek95QXZMeUJHYjNJZ2IyeGtJRWxGWEc1Y2JpQWdMeW9nYVhOMFlXNWlkV3dnYVdkdWIzSmxJR2xtSUNBcUwxeHVYRzRnSUdsbUlDaHpkSGxzWlM1emRIbHNaVk5vWldWMEtTQjdYRzRnSUNBZ2MzUjViR1V1YzNSNWJHVlRhR1ZsZEM1amMzTlVaWGgwSUQwZ2NtVndiR0ZqWlZSbGVIUW9hVzVrWlhnc0lHTnpjeWs3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnZG1GeUlHTnpjMDV2WkdVZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWVVpYaDBUbTlrWlNoamMzTXBPMXh1SUNBZ0lIWmhjaUJqYUdsc1pFNXZaR1Z6SUQwZ2MzUjViR1V1WTJocGJHUk9iMlJsY3p0Y2JseHVJQ0FnSUdsbUlDaGphR2xzWkU1dlpHVnpXMmx1WkdWNFhTa2dlMXh1SUNBZ0lDQWdjM1I1YkdVdWNtVnRiM1psUTJocGJHUW9ZMmhwYkdST2IyUmxjMXRwYm1SbGVGMHBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2hqYUdsc1pFNXZaR1Z6TG14bGJtZDBhQ2tnZTF4dUlDQWdJQ0FnYzNSNWJHVXVhVzV6WlhKMFFtVm1iM0psS0dOemMwNXZaR1VzSUdOb2FXeGtUbTlrWlhOYmFXNWtaWGhkS1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdjM1I1YkdVdVlYQndaVzVrUTJocGJHUW9ZM056VG05a1pTazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1OVhHNWNibVoxYm1OMGFXOXVJR0Z3Y0d4NVZHOVVZV2NvYzNSNWJHVXNJRzl3ZEdsdmJuTXNJRzlpYWlrZ2UxeHVJQ0IyWVhJZ1kzTnpJRDBnYjJKcUxtTnpjenRjYmlBZ2RtRnlJRzFsWkdsaElEMGdiMkpxTG0xbFpHbGhPMXh1SUNCMllYSWdjMjkxY21ObFRXRndJRDBnYjJKcUxuTnZkWEpqWlUxaGNEdGNibHh1SUNCcFppQW9iV1ZrYVdFcElIdGNiaUFnSUNCemRIbHNaUzV6WlhSQmRIUnlhV0oxZEdVb0oyMWxaR2xoSnl3Z2JXVmthV0VwTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhOMGVXeGxMbkpsYlc5MlpVRjBkSEpwWW5WMFpTZ25iV1ZrYVdFbktUdGNiaUFnZlZ4dVhHNGdJR2xtSUNoemIzVnlZMlZOWVhBZ0ppWWdkSGx3Wlc5bUlHSjBiMkVnSVQwOUlDZDFibVJsWm1sdVpXUW5LU0I3WEc0Z0lDQWdZM056SUNzOUlGd2lYRnh1THlvaklITnZkWEpqWlUxaGNIQnBibWRWVWt3OVpHRjBZVHBoY0hCc2FXTmhkR2x2Ymk5cWMyOXVPMkpoYzJVMk5DeGNJaTVqYjI1allYUW9ZblJ2WVNoMWJtVnpZMkZ3WlNobGJtTnZaR1ZWVWtsRGIyMXdiMjVsYm5Rb1NsTlBUaTV6ZEhKcGJtZHBabmtvYzI5MWNtTmxUV0Z3S1NrcEtTd2dYQ0lnS2k5Y0lpazdYRzRnSUgwZ0x5OGdSbTl5SUc5c1pDQkpSVnh1WEc0Z0lDOHFJR2x6ZEdGdVluVnNJR2xuYm05eVpTQnBaaUFnS2k5Y2JseHVYRzRnSUdsbUlDaHpkSGxzWlM1emRIbHNaVk5vWldWMEtTQjdYRzRnSUNBZ2MzUjViR1V1YzNSNWJHVlRhR1ZsZEM1amMzTlVaWGgwSUQwZ1kzTnpPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSGRvYVd4bElDaHpkSGxzWlM1bWFYSnpkRU5vYVd4a0tTQjdYRzRnSUNBZ0lDQnpkSGxzWlM1eVpXMXZkbVZEYUdsc1pDaHpkSGxzWlM1bWFYSnpkRU5vYVd4a0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCemRIbHNaUzVoY0hCbGJtUkRhR2xzWkNoa2IyTjFiV1Z1ZEM1amNtVmhkR1ZVWlhoMFRtOWtaU2hqYzNNcEtUdGNiaUFnZlZ4dWZWeHVYRzUyWVhJZ2MybHVaMnhsZEc5dUlEMGdiblZzYkR0Y2JuWmhjaUJ6YVc1bmJHVjBiMjVEYjNWdWRHVnlJRDBnTUR0Y2JseHVablZ1WTNScGIyNGdZV1JrVTNSNWJHVW9iMkpxTENCdmNIUnBiMjV6S1NCN1hHNGdJSFpoY2lCemRIbHNaVHRjYmlBZ2RtRnlJSFZ3WkdGMFpUdGNiaUFnZG1GeUlISmxiVzkyWlR0Y2JseHVJQ0JwWmlBb2IzQjBhVzl1Y3k1emFXNW5iR1YwYjI0cElIdGNiaUFnSUNCMllYSWdjM1I1YkdWSmJtUmxlQ0E5SUhOcGJtZHNaWFJ2YmtOdmRXNTBaWElyS3p0Y2JpQWdJQ0J6ZEhsc1pTQTlJSE5wYm1kc1pYUnZiaUI4ZkNBb2MybHVaMnhsZEc5dUlEMGdhVzV6WlhKMFUzUjViR1ZGYkdWdFpXNTBLRzl3ZEdsdmJuTXBLVHRjYmlBZ0lDQjFjR1JoZEdVZ1BTQmhjSEJzZVZSdlUybHVaMnhsZEc5dVZHRm5MbUpwYm1Rb2JuVnNiQ3dnYzNSNWJHVXNJSE4wZVd4bFNXNWtaWGdzSUdaaGJITmxLVHRjYmlBZ0lDQnlaVzF2ZG1VZ1BTQmhjSEJzZVZSdlUybHVaMnhsZEc5dVZHRm5MbUpwYm1Rb2JuVnNiQ3dnYzNSNWJHVXNJSE4wZVd4bFNXNWtaWGdzSUhSeWRXVXBPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSE4wZVd4bElEMGdhVzV6WlhKMFUzUjViR1ZGYkdWdFpXNTBLRzl3ZEdsdmJuTXBPMXh1SUNBZ0lIVndaR0YwWlNBOUlHRndjR3g1Vkc5VVlXY3VZbWx1WkNodWRXeHNMQ0J6ZEhsc1pTd2diM0IwYVc5dWN5azdYRzVjYmlBZ0lDQnlaVzF2ZG1VZ1BTQm1kVzVqZEdsdmJpQnlaVzF2ZG1Vb0tTQjdYRzRnSUNBZ0lDQnlaVzF2ZG1WVGRIbHNaVVZzWlcxbGJuUW9jM1I1YkdVcE8xeHVJQ0FnSUgwN1hHNGdJSDFjYmx4dUlDQjFjR1JoZEdVb2IySnFLVHRjYmlBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUhWd1pHRjBaVk4wZVd4bEtHNWxkMDlpYWlrZ2UxeHVJQ0FnSUdsbUlDaHVaWGRQWW1vcElIdGNiaUFnSUNBZ0lHbG1JQ2h1WlhkUFltb3VZM056SUQwOVBTQnZZbW91WTNOeklDWW1JRzVsZDA5aWFpNXRaV1JwWVNBOVBUMGdiMkpxTG0xbFpHbGhJQ1ltSUc1bGQwOWlhaTV6YjNWeVkyVk5ZWEFnUFQwOUlHOWlhaTV6YjNWeVkyVk5ZWEFwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCMWNHUmhkR1VvYjJKcUlEMGdibVYzVDJKcUtUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnY21WdGIzWmxLQ2s3WEc0Z0lDQWdmVnh1SUNCOU8xeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUNoc2FYTjBMQ0J2Y0hScGIyNXpLU0I3WEc0Z0lHOXdkR2x2Ym5NZ1BTQnZjSFJwYjI1eklIeDhJSHQ5T3lBdkx5QkdiM0pqWlNCemFXNW5iR1V0ZEdGbklITnZiSFYwYVc5dUlHOXVJRWxGTmkwNUxDQjNhR2xqYUNCb1lYTWdZU0JvWVhKa0lHeHBiV2wwSUc5dUlIUm9aU0FqSUc5bUlEeHpkSGxzWlQ1Y2JpQWdMeThnZEdGbmN5QnBkQ0IzYVd4c0lHRnNiRzkzSUc5dUlHRWdjR0ZuWlZ4dVhHNGdJR2xtSUNnaGIzQjBhVzl1Y3k1emFXNW5iR1YwYjI0Z0ppWWdkSGx3Wlc5bUlHOXdkR2x2Ym5NdWMybHVaMnhsZEc5dUlDRTlQU0FuWW05dmJHVmhiaWNwSUh0Y2JpQWdJQ0J2Y0hScGIyNXpMbk5wYm1kc1pYUnZiaUE5SUdselQyeGtTVVVvS1R0Y2JpQWdmVnh1WEc0Z0lHeHBjM1FnUFNCc2FYTjBJSHg4SUZ0ZE8xeHVJQ0IyWVhJZ2JHRnpkRWxrWlc1MGFXWnBaWEp6SUQwZ2JXOWtkV3hsYzFSdlJHOXRLR3hwYzNRc0lHOXdkR2x2Ym5NcE8xeHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNGdkWEJrWVhSbEtHNWxkMHhwYzNRcElIdGNiaUFnSUNCdVpYZE1hWE4wSUQwZ2JtVjNUR2x6ZENCOGZDQmJYVHRjYmx4dUlDQWdJR2xtSUNoUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG5SdlUzUnlhVzVuTG1OaGJHd29ibVYzVEdsemRDa2dJVDA5SUNkYmIySnFaV04wSUVGeWNtRjVYU2NwSUh0Y2JpQWdJQ0FnSUhKbGRIVnlianRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR3hoYzNSSlpHVnVkR2xtYVdWeWN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnZG1GeUlHbGtaVzUwYVdacFpYSWdQU0JzWVhOMFNXUmxiblJwWm1sbGNuTmJhVjA3WEc0Z0lDQWdJQ0IyWVhJZ2FXNWtaWGdnUFNCblpYUkpibVJsZUVKNVNXUmxiblJwWm1sbGNpaHBaR1Z1ZEdsbWFXVnlLVHRjYmlBZ0lDQWdJSE4wZVd4bGMwbHVSRzl0VzJsdVpHVjRYUzV5WldabGNtVnVZMlZ6TFMwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnZG1GeUlHNWxkMHhoYzNSSlpHVnVkR2xtYVdWeWN5QTlJRzF2WkhWc1pYTlViMFJ2YlNodVpYZE1hWE4wTENCdmNIUnBiMjV6S1R0Y2JseHVJQ0FnSUdadmNpQW9kbUZ5SUY5cElEMGdNRHNnWDJrZ1BDQnNZWE4wU1dSbGJuUnBabWxsY25NdWJHVnVaM1JvT3lCZmFTc3JLU0I3WEc0Z0lDQWdJQ0IyWVhJZ1gybGtaVzUwYVdacFpYSWdQU0JzWVhOMFNXUmxiblJwWm1sbGNuTmJYMmxkTzF4dVhHNGdJQ0FnSUNCMllYSWdYMmx1WkdWNElEMGdaMlYwU1c1a1pYaENlVWxrWlc1MGFXWnBaWElvWDJsa1pXNTBhV1pwWlhJcE8xeHVYRzRnSUNBZ0lDQnBaaUFvYzNSNWJHVnpTVzVFYjIxYlgybHVaR1Y0WFM1eVpXWmxjbVZ1WTJWeklEMDlQU0F3S1NCN1hHNGdJQ0FnSUNBZ0lITjBlV3hsYzBsdVJHOXRXMTlwYm1SbGVGMHVkWEJrWVhSbGNpZ3BPMXh1WEc0Z0lDQWdJQ0FnSUhOMGVXeGxjMGx1Ukc5dExuTndiR2xqWlNoZmFXNWtaWGdzSURFcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUd4aGMzUkpaR1Z1ZEdsbWFXVnljeUE5SUc1bGQweGhjM1JKWkdWdWRHbG1hV1Z5Y3p0Y2JpQWdmVHRjYm4wN0lpd2laWGh3YjNKMElHUmxabUYxYkhRZ1hDSmtZWFJoT21sdFlXZGxMM0J1Wnp0aVlYTmxOalFzYVZaQ1QxSjNNRXRIWjI5QlFVRkJUbE5WYUVWVlowRkJRVkZCUVVGQlJIZERRVTFCUVVGRVdWTlZjalZCUVVGQ1V6SnNWVmRJVWxsVVZYYzJXVEk1ZEV4dFJtdGlNa3BzVEc1b2RHTkJRVUZCUVVGQlVFUTVOR05IUm1waE1sWXdTVWRLYkZveWJIVlFVMHgyZFRjNGFVbEhiR3RRVTBwWVRsVXdkMVJZUWtSYVYyaHdVMGh3ZVZwV1RqWlViRkpxWlcxMGFrOVhVV2xRZWpSTFVFaG5ObVZITVhkaVYxWXdXVk5DTkdKWGVIVmplbkEwVUZOS2FGcEhPV2xhVkhCMVkzcHdkRnBZVW1oTWVVbG5aVVJ3TkdKWVFqQmhlakJwVVZkU2RsbHRWV2RYUlRGUlNVVk9kbU50VldkT1V6UXlURmROZUU1RVNXZE9lbXQxVFZSWmQwOVVTVEJNUTBGNVRVUkZNMHg2UVROTWVrVjZURlJCZUU5cVFUSlBhazAxU1VOQlowbERRV2RKUTBGcFVHZHZaMUJJU210YWFuQlRVa1ZaWjJWSE1YTmliazAyWTIxU2JWQlRTbTlrU0ZKM1QyazRkbVF6WkROTWJtTjZURzA1ZVZwNU9IaFBWR3MxVEhwQmVVeDZTWGxNV0Vwcldta3hlbVZYTlRCWldHZDBZbTVOYWtscU5FdEpRMEU0WTIxU2JVOXJVbXhqTWs1NVlWaENNR0ZYT1hWSlNFcHJXbXB3YUZsdE9URmtSREJwU1drNEswTnBRVGhNTTBwcldtcHdVMUpGV1N0RGFuZDJaVVJ3TkdKWVFuUmFXRkpvVUdkdk9GQXphSGRaVjA1eVdsaFJaMXBYTld0UVUwcDVTV280SzI1b2VHYzNkMEZCUVVGU2JsRlZNVUpCUVVONGFuZDJPRmxSVlVGQlFVRkNZekZLU0ZGblEzVjZhSHB3UVVGQlFrUnNRazFXUlZWQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVKNFZWbFhPVUZCUVVGWFdGSlRWR3hOUVV3eVdrdERSVUpuUjFKQmVsVkNjUzlKYlU5bFVsa3JWVkF5TW1kdVEwRndla0V3ZUVGVGQxZFdVMlZhZDNoT2VHZERUVEJTT0N0MllVVm5TMmhTZHpSVkt6aEZTR3QwTDBneGNFTm5iM2x2YjNZd2EwRnNSVVJKVkVweGRHSnFabGx2WTBkclZ6ZzRjM0V4T0haellYSjVUSGx4Y0ZwdFMwTTNRVUZCUVRkdFUxVlNRbFpJYW1FM1ZqQktXVGwxTWtSeFdtTjVOVkZqU2pJMmVuSmFibXB5YXpGNmNrVXpXREV2WWpFeVNERjJZaXNySzFRdmVpOVFMMHBKZVZKSlFqaE1TbWxTTTFwcFpuTTBSbFZSWm5oRFUxRkNhMFpMUlZORmFFa3lRVXBKYTBSMWRWQXlkelZCZVhSWVZEQktXV1kwYTFvd1JIWXpVM2RwZWxGT1EyZENVRVEyYTBoS1pFdDJSVmRCUm5aR2QwRllXVGhrVjJaMldtOUZkREJEWWtGTmJuSlJPSEkxU0dKUlNUUkpabUpHTjBJeWJHb3dlVmxPV0daeVZVdG5NMGRhVVVKQk1FbFJaekZwYzJKTlRUZHlWR1ZDY3pSME1rczBhWFk0UnpKb1VWUjJjMGN3UW1kUmNqQmlkMFoxVldkTE0wMUhha0o2YURKelVHbENhMmQyTXpOQlduTmxRbGhuVkRadU9GVlRTVFZSVVd0S1ExRnJTa05SYzB4SFVFMUZUaXN3U0ZOcGRHRkJUeXM0ZVc5Q1FVRkVMMEpzY0RONVFXeFNRbE5hS3l0V1JXdGpSa3hCUzNOSVptcDFUa1o1VlRGblZUUkJWRWxaVUZCWllVUkdiakZrT1dNMFZVOTZTWEZOYWtFMFUwdFRRVzlUUzBGUGFYWm5XVTE2UW1WVGRuTldkMjFJZVVORVprMWlVMEkxYzFCb2VWWmpXbm8xUVhod2NtZDBiMWhFZERNd1ZWTkZhRWxUUldoSlUwVnFXVzlMWlRGMWFrOHZNSFpzYUhOM2NsbHZWVGxSYjFOelJWTjBSSFFyYW1Gb1JVUnJZbWhNWmxrMmNrWnBjMGhsYUdnMFQzWjZTREpDV1VGVlkzQmxTSEoxT0RSUlNYTm5jWFF3TkVkTlVVcEthRmxFZEVGWk5GUXlkbFZDY2pSTVozVnNOMjhyYm1FMFJFUkZRMGxDYUhabk5HcDNObnB2T0hOQmRGWmpURVV6WlVGclExbGFNSGQ1U2k5aWFVVk5iVVpIZUVGVVozUm9ha1J6VDBRMWRHOHZRWEJrTVVsMU1tTmpZMkZKWjJsWVVqZzNTV0puWkVWaU1HcHJRV2hFY3prd1FrVnRia1F2YnpoQk1VaDRPR1pLYUUxVFJXaEpVMFZvU2pKR1lYTjJVekV6VW5wYVEwOHhaV29yVlRkeU9EQlBhRlZXWlZSNU0xTnhkekZCV0VNNFZIZHpWVkZHVlV4MlJHc3hRa3BsYm1RMFdrRnhSMHhoTTI4dmJHbEpTVmgwT0ZJek0wbEdTWFZ0U0ZGRllXbHViR2N3Ums1dE1XUlRlREpzTUVWRFNXMTJSRE5YV1ZkWmFVUkpibmRUU1cxYVkzSkpVVkU0U0VGWlkzcFJXWE41UVhGSVNHUkhORGxqYVVkWFMwbEROMnhLTTJSQmQxRnBUMlpDV1ZGUUszZDVNRU55UW5KWk1XRlFiSFpKYmtaRFdFSllkMGh6VEd4NWIwZERUV0pRTkZNMVEzVkhZbTluZUZwRmJXZENja2wwUlcwMFJ6ZHNNSEoxU0hSS1pUZ3lRVzlGTW05cVJIZEdaMVJHT1ZsTlpsbFJRVWRqYTBoNVNFRm1RVTgxSzA1WVUxQjNjMWhvYzJOVVVtaDFVR3BNYzBSVGQzaDRjMlpVTlVGUmJHOW9hMXBEVVd0S1ExRkpSSEJGYjBkelpHaHpUVVJOZW1kcU5reFljVUkxTUcwNFRtUTRaR1ZzTmpKb01VaG1PRFJxU2tsUk9YaDVORnBHUkZwWVFsRTJSa2xXVXl0UGRqSjFOU3RsUWpaQ1NqWlBhSGhwZERsUk1VY3lOM2hDTDFKWlExQkxlbFpuWWtGYWEwUjNPWGgxU1hkUWMwSllVR3ROVDJ3NGRHeHdhQ3RHWTBOUFFtUXZhR0Y1WldkRFZHUTVRa1ZwU1doTkwwODJaWFJuZFZkME1rZHlkMWMwWkhkYU1XdHBRbVJPVkZGbWFVbEZMMGhqT0U1ME9YTktNRkpGY2tFcmQwTlBRazVaZFROb2JtVnVWV1JFVEVKcGN6ZHZPQzh5VDJOdU9GUmtOV2hGT0VKSGFVcFVja1kyZUdkWllWVmFTR2gyU1VJNFpXY3hkR2RuYjJ4dU9FazFOQ3RUYmpWUFVXdEtRMUZyVEVKV1MwYzNORkZQV25kUGVVRXdXR05YT1RSaGRtOTJNREZVUVdNMWNFWjFjRGxHWkVoYVVVTm9SVkl5T1ZCaWNYTkdkRkJIVjI5aFpVRkJaMVpFVGt3MGNtOU1XVUYzUVZOSFNIcHRRWEphY1hSQmRtWjVZbFo1ZFRsRFpsSkhaRUZCZG0wMFJFNU9kMVJpUkc5ak1FOTJhWFJ2YzBGblJXZ3hkRVJMUmtrNVdVUkxOVkJvYWxFemVFNTBhekpOV0d4NlRFMUVZVzQyTjFseFFXNTVWMEZDWm5JNVJGRjJWbGg2YjJWRkswbElVamR0SzJrNFRVWmlReXQzUW5kWGRIZ3lhbGxNUWxWalJGbzFaRTFDUVc5TVRIaEpTWFp3TjJkb1ptdEVNRUpOV0hrck9IQmlSMUF4TXpCVU9HaEpVMFZvV1dKa1VXRnFLMmhZU0RjdlRqQlBSazR6TTFaaWNYZHhUbmh0U0RsMlozazBjbTVDTkRsd1ZrdHJVRFkwSzBsNWVrMWpZbXRSUm1zMFp6QTNRVlJ3YVZnMGJqZDNhVkI2VVhaR2IwRllXa0Z2ZUV0ak5TOXJXVTlZZGxZek1sQk1NVkl6Tkc0MldXVk1WRkZqUlZnellrZHVVRnB0ZEc1aFdEVlJNM1JTTlcxTlFuaERUbTFTZFVkMmFXcE9NM1p4YTJwd01rRTVZMVl5ZVVGMGVpOVBhVUpwVG10UloyaEJSRWxCTWpCVFJuZERlR2t4Ym5aVFpWRjFkRXRSTWsxQ2RuWnVkU3R1Vkcxb1JVMVpibkF6T1VSS2FVRXlWM2RYWm1kS1JFRkVaMFpLZDBnM2FFVkVVWEZ4VFU1cGFFTktRMkZyY2xOQmF5OHhka0phUVVsM1FpOWtTVmhZZGxGQ1owTndTV0Z1ZUdOSVdEVnpRMFJxTjJGbU9IWm9TVU5JUkhnNVlYa3JVRGxOZEhaQlEyUkVObVkwUlVwdlExbEdVMjRyZDB0VGNGRXlaemhsWVc1bmRGbEZLM0pFZFUwNWEzZGpiMHN2ZEhaRFpFUnVVbmx0TWl0dVZHMW9TMjlLVUVnclQyMDRRazF4Um5WblpuSlpTR3hPV0c1cFoxSnZMMUlyT1NzNFNsQm5SMUZpTVVKWmNEbDVVVXRaWlVSdk5rMXFaa0k0UTJWWmEwUndhbmR0YjNac2IwTnhhelJSUldaQ1YwZ3ZNekppWWxCb2NrODBSWG8zZUhRemEwZEJjMG9yYm05QlVqaHFkazFVWnpsRmFqbFVVRE5GVjBFNWIzWktlRUpZVkVKck5VMVVUVU5hY1ZkVlF6Vk9lRFp5U0RaWlNsWk1TMlpuU2sxaGFYY3dlV2MxSzNsaVFUWmFTa0ZUVlhGQ1pqaGtabGhDSzJjME5VRlZUa2RCUWtGTVIwSnFPVUYzVXpCd0wzVnZRV3BQTlRSa1FtNUJaVlpsYUZKSk9FMTFaeXRrWjNsclZGZGFXazkzY0d0NlpsVjZjbmRZV1VKTlUyRkJReloyS3poQ1kxZEJVMVU1U0hKTlJEUkJkbGt6TjBGcmMwNW5XRm80UW5walIxVmFkV2RIVnl0R1NYQjZaa05zTjJNelkwRkpjVUoyU2pGUGJuSnNjVVZLTlRsV1RYY3hNbGR3VUU4MFMwNWtOV1p4THpSS1ExRnJTa05XZFU5R2VTOUROVkZWUlRnNWNqRm1NelpMV21vellWbG1Ra3BPVlhjNWQxSnJTRWhIVFZCR2RrdEJhRmRtTjFNNGRFTXZTVWhXU25jclQyRjVjbUZQYldGaU1VeERUamxUT1V4M09FSkZaVFZGV0RKU1owWlBObkpMWnpoa1p5OUhlRkF4WjFCd1RIaEJSRFp0UVU1T2RFNUZVRnAwVFhVMFNreDVMMWc1WVVSWVNYUlVUbGgwUjA0M2IySnJaRFJJZERaRGJrUkxPVTVsVHpCd1NGSllMM1p0WW1aUmNqTlpORmxEZFdab1RpdHdlbXBwZEZWeGRuUmpiM1l6U2pOTFJERXJVSFV2ZUdGWU5FbzBOWFpOZVZaclVrSmFWVkJvTkdWSk1XNVlabnBVZVZaU1FWZDZhalZSWnpCTlYzQjViemRMYjNweVYwZGpjekoxYWt0S2IwTkdkM2xDWlhaaU16YzRkRE5pVFdJM0wxa3hSMHRhVVc0MFJDOTRWMlptTmtKR1pGTjFVRFZPZURoTFJtazBNa2hIWmxZNVFVeFNhWFpWUjBoWVpUbEhTWEZDSzFsM1VHeEpZMVpCVEdvMWRVMTZWMDFtUVZsMFpVRkdia0ZQWm5ka1dHZEVWMGcyV0hNMGFHSjNUQzlIVEN0S09VcExXakIzUTNwb2FFWnVSRU5NUjBKRldXY3ZWa0YxY0U5eGJ6RjJNbVpYSzNGeFYzWXlaM0JYZDFSNVQwaFZSRE5CVjJreFprcFRRVll5T0M4dk1XZzVNMUJ2ZGxCSVZrMVJRVVpXTVhGdFVpOTNkR1p4T0M5bU1FbHZTakJ6V1hJclYyTnRieTlMY1M5VGNEZzNRMGRuYVdVMFN6SnJVMjh2VVZJMlpWSnBUM2hTUjBwR2VHdENTbGRQV1Raa0szVnBTMEZGU1ZCdGVsaDROVTlJZGpjeGR6UlhPRUo2VVhCSGNFNUlPVTgzV2xSWFFXaFpMMGd3TVUxcVlUbDBkRGh3TlUxQllYaFNWVFY1WjBOVE9YQTFhM1oyU205elNsQk5RVWhYWldkUFZHTkdURTV1V2pCMVRFRjFiWFo0TTBGR01sUk9NblF4ZGxabVl6TXJVRnAxVXpSQ2NTOHdXR2RsUlhaU1oyUlhTbk5yWkRobFNrdG1LMUZGT0Rkak1Xc3hlSFJuVVhaTFNUWTRLMGhSVmtWMk5tcE1SakZaZWtGdk1YbzBURWxuYUhVMGJYVllkRFJvZDBOaksxVkZTa05SYTB4RFFtcEVSMmxYYm5SNWMwZEtkR000UkRaeGJHTkpla2s0UkdWSWVtUmhOU3NyWjB0dE5uVmpWVVE0TUZobFIzSnBReTlxYUdnckt5dG5kemxTWkdNMk1TOW9XRlZJTDA0ek9FOXZWblpLYzFSVU4xRlZVRTR6VVRWQ2RHRnRWemhaVFRoalNEWlVPRnBxTVRoVVFtcHhPVGQwT0dWaFRsYzFUV2hTZEdkdFNtZDVjak40U1N0T05TOVZjbXBxT0ZsV2JsazNWa05WV2xkalJVOXBWVGhqTmxaRWNWaGhMMXBTY20xUGNHZG9NSHBQVm1kWWJVOUNTMDg0V2xSbFFURnlTVEJETjFkMVowbHlXSFl4VkZFelFVVlFSRGxxZHpobEwxQnBPWEZqT1ZsUlJEZERUWHAxWTBGTVNtdENTM0JyUmtaeWQxVkpaelpXVmtWWldEZDJWU3RTYUVWM1JYTTVWalJqZGs5T1YzTXJkMmxKY2t0bE0zQTNTWGx2UnpGeFYzTnNWRWh5ZVRCR1lYQnpabUk0T1M5S05XVnVTVWhqVmxKcGVVSlNiakFyUjI5bFJrOHdRVTkyUWxVNFducEJSbXBCV1RSUVdIRXlXSGwxZHpCMFJHZE9TbVpxVURCYVNVVm1SM2hTV0hWVmVGQklOM1ZoVlRaV0sxTTJZMjEyV1ZZNFFqZHBSeTlzYUhkUWVESkZRM3AwVTJaYUwzRnlTMkkyYjBwc0sxQnJRVmQzTmxCWWJIazNNbGhqTjJodlZDOW9ZVEV5Tm5sUVowczBRbGg0VkhsaFpGVm1OazVuVG5FeGQxSkJPRE5vUzJ4aVpXNTRPRlJCWjJkaVpqVkpORlJRTVhoU1dUaFVUREU1ZDBoNWRVZDNSSFZDUml0UWVEVk5NV1J2UzNORUwyaHRNRkZsWTIxbmVHTlVjMHhTZFdFM2RtdFViRGhsWnpSWWFVRkdPVzlxVUZVM1ZGaEtiVEJoTDJwNk5XRm1SRVZFT0daWlFqUXpTU3R1T0UxalFYTlFaM1ZyWlVKVk5USlpUbVpZYUc5a2REQk5VR2RMV0ZONFdGZzBWbWhCUzNkM1dHWXJOVE15ZW1kM01rSnNSVkpWT0daUlEwMU9WRUZDTjNCdFFVNW1iMEp3TVZaeGRYWkRhMFF2WjJwYWMzQmhXR2hsTm5BemVsRnNVRGNyYkdGVGRtUlNSbFp5TjBkUmFIRldUelphVmtSalZsVXZXVkJOTkU5NmR6aDNlRm93Y25KcmNVaG9VMlZvU1NzNVkycEphRWxUUm1oMFpXZFZjalEyS3pnMFNIVlphalkwY3pCUU5sQjNUalF4WjNKMlRqY3pkU3Q2ZFdvdk0wOTBOM1pRYlM5clRYb3dkMVJIUW0xWmQzZDNaamg2Y2xoUlltNHdjbm95V1ZZdk4wMHJSRlZCTlcxdk1Fb3pSR05GTTFCak5WRnBOQzlKYW1WVlYwWk5VR1pCVDFoWllXSklPVVp1ZHk5T1pISkJVSEZoZWpOc2MwVXpjbVJrT0VVek5VMVpiMGxuY3pOMFpuZ3dLMHBVVDNwbldXVm5UMmxzUWpsQmFEbEVUbmxqVm5GSVFWbzBXWEV2VjJaRlRuWlFPR1Z3YW1VcmJuVnhRbWhvTDFvMmNVZ3dMMHBFY2sxT1JYQkJNemw2ZGpORk5VTjZTbWM1ZDFkbFEzbHVUWGR0TW5kUlZYaEhVM0ZvWlZwRVJXczBWRUZyY1ZsNlYySTVaV0p3UjFsVU9FSTVha1ZHYzFnelUwdGhOWE5CWmpFeVozQlZRakZCTDA1V1JHOWpSMmRKVDNaU1dtZFhNVVIxWWk5TFpDczBRaXR2ZWxobE5tUXdNVFJzTVhaS01HcEZia0VyUzBzME9FTjJZalZtWWpKWlZYSnRkSGN3U1dkSVNYUkJTR1ZGWWtGMFpESlhWR1p3UmpjcmJUQk1UbmczWWpWT01WTkhPVmxVUldoSlUwVnFXVWxsVVZGRmNUazVNRW96YTNkMlNucHlkRlZXWm1aNldXTnhZMFJaYUM5bFRVdFhRVVZHUTFaR1dHbElaa1pNYjBnd1JEVmhNVGgzVlVsbVQzQjBlVTl5U0V4dFR5dGtWMDFXVVhwYVNETkhaelJSUTFOclFtUXhkR0UxZFdveFMxQmlORVJKVVVOWU1uZFRORzUyVXpGU1pXbFlRVXgzV1cxQ1RsRndWRGhYYkdGNEsxUmhlalU0VVd0b1dVSk1UVGhRWnpCS2FVd3dWRlZEVUVaeVFWVkJWREZpVVV3NU9XZERkV3h6VGtVcmIwOWtVbmROTlROaVNHZFZNa2hyTDBsRFJXaEpVMFpvZEhkRk55OVNlRlk0VjJOQ2JqTTFWMFZGWm14WmIyWmxheloxWmtrMFZsQmpMMUU0VVRWaVptTjZlRUV3Wm1kdEwxQXdTRmhsVjNSM2VGUXJjRUZuVVdGSVYzbGFiVlpwVFZkRE9WUk1Oamh0Y25nNVFtNUJjSGhMWlRWMVRWSlFWekFyVUZaRlVreHVOamd4YVdkNVVHZ3JjWEpZWWpST2VETlJPWFUxWVVKNWExQTVSMWMyY0dVeGMzVXhjekZtYlVSMVZXcFZRM1owYWk4elJVWkRPVWRyTTNWNVpscDBaWGxEYkROMFJFbGxMM0JxTTNJcmJuazVWVmQxVVdSaVlrRkZTMnd2YVU4Mk16Vm9RMnhVT1d4dlFWQmhOMUZ0TTJ4SVpVOXJlWEZOV0VORk1YSjViMWxJVVUxU01rMVFRV0psZFVVNGQwRk1hVGgxWTJKa1puQjVUbmx2VDNKbU0yZG5NV1UyWW5WNk4wNU5Ta05SYTBwRFZITkpkbXA2UVZSSFdrdzJUSEZMYm1VNU0zRndlVVJRZWpWblNtcE5iRGxHTVd4aWRHVmlNVlUxWlhZdlRrOXpSVGQ1T0dnNFNWZFdXSFZsZGpGV2NGZHFORTA0U0RORVkyNWhUMUZFTjFKelpVeFBWRVE1YkRGd09WWk1ZVkUzVFM5cmIxY3pMMHcwY0hZckt6bDJiMEpuSzJGNlR6SjFRbmwzWlhOMk9GQk5UM2RYZDFsWGVIcE9iRGcxVjNaM05FODRUM2gzWWtnck56Tk9jbVpVU2tjM2VYWkljMjFtY3pOclVIRkpWSG8zTlZKT1JEWldSVGhyVERCelFTdGpUV2cyT1ZvM2QwTnZjMGxNUXk5elFsRkxOemc0U1dsT1dVaDJlamRsU21NNWNpOWtaRWgzUVdrNVp6ZzFRbWRQZEROR05GZHBNVE5rV1ZOTlowTTVUblJITlhSRFFtZElaMVF3Unk5bU5tMU1hWE5UV1VOTlVVdEVWRlZ4TkV4QmNuWlFOaTh4V0RRMFFTOXVlVUZ2TVU1eVQzTkdSR0o1WTBaWVVGb3pjWE0xVDJ0c0syWmtOMHN3ZGs5SVNFb3JjekpSU2prelEwdElkbGxYZWxaWllsTnlTRVZtWm1wemVYRnFiRkpZVDFrMksxaGtiRlpZWlcxMVkydEtRMUZyU2tOUmEwbHpTRUZETkU1dWJqZERZVUoyWVRSMlRIUTFRVUZEUWs1UlpsVm5SVWhUV2tGblRHaGFRa1pVTDI1cE1HZE5ORXBCYTAxWVZYUm5kMmxYVlVSeFFUSTBVMEZpY3l0RGFWRnJTa05SYTBwRFUzTkhMMHh0WlVGTVVsWmFRbEZrYkM5dlMzUnVMMEk1Y25GbGVWaHJlV2RVZHlzek1sUTVSaXRJUWxoQ09XSTFWQ3N4UVV0eE5XVXpWbmd3VDBFMkx6aE9ObEF5TlM5eVpUSkVlV2RpVlZBeWJIQmlMMk5IVVhWdk9UY3JOU3R4T1hGQlZHUmxMekZXU0VGWkx5dDFLMjlJUjFBeGRtdFNMMUZwVlRGd2RtaE5VM1JvZWk5Q0wyZ3hUMWRwZVUxd2MzZEJRVUZCUVVWc1JsUnJVM1ZSYlVORFhDSWlMQ0pwYlhCdmNuUWdKeTR2YVdOdmJuTXVjMk56Y3ljN1hISmNiaUlzSWk4dklGUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JuWmhjaUJmWDNkbFluQmhZMnRmYlc5a2RXeGxYMk5oWTJobFgxOGdQU0I3ZlR0Y2JseHVMeThnVkdobElISmxjWFZwY21VZ1puVnVZM1JwYjI1Y2JtWjFibU4wYVc5dUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9iVzlrZFd4bFNXUXBJSHRjYmx4MEx5OGdRMmhsWTJzZ2FXWWdiVzlrZFd4bElHbHpJR2x1SUdOaFkyaGxYRzVjZEdsbUtGOWZkMlZpY0dGamExOXRiMlIxYkdWZlkyRmphR1ZmWDF0dGIyUjFiR1ZKWkYwcElIdGNibHgwWEhSeVpYUjFjbTRnWDE5M1pXSndZV05yWDIxdlpIVnNaVjlqWVdOb1pWOWZXMjF2WkhWc1pVbGtYUzVsZUhCdmNuUnpPMXh1WEhSOVhHNWNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNWNkSFpoY2lCdGIyUjFiR1VnUFNCZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsWDJOaFkyaGxYMTliYlc5a2RXeGxTV1JkSUQwZ2UxeHVYSFJjZEdsa09pQnRiMlIxYkdWSlpDeGNibHgwWEhRdkx5QnVieUJ0YjJSMWJHVXViRzloWkdWa0lHNWxaV1JsWkZ4dVhIUmNkR1Y0Y0c5eWRITTZJSHQ5WEc1Y2RIMDdYRzVjYmx4MEx5OGdSWGhsWTNWMFpTQjBhR1VnYlc5a2RXeGxJR1oxYm1OMGFXOXVYRzVjZEhaaGNpQmxlR1ZqVDNCMGFXOXVjeUE5SUhzZ2FXUTZJRzF2WkhWc1pVbGtMQ0J0YjJSMWJHVTZJRzF2WkhWc1pTd2dabUZqZEc5eWVUb2dYMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYMXR0YjJSMWJHVkpaRjBzSUhKbGNYVnBjbVU2SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4Z2ZUdGNibHgwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1cExtWnZja1ZoWTJnb1puVnVZM1JwYjI0b2FHRnVaR3hsY2lrZ2V5Qm9ZVzVrYkdWeUtHVjRaV05QY0hScGIyNXpLVHNnZlNrN1hHNWNkRzF2WkhWc1pTQTlJR1Y0WldOUGNIUnBiMjV6TG0xdlpIVnNaVHRjYmx4MFpYaGxZMDl3ZEdsdmJuTXVabUZqZEc5eWVTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmxlR1ZqVDNCMGFXOXVjeTV5WlhGMWFYSmxLVHRjYmx4dVhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVYSFJ5WlhSMWNtNGdiVzlrZFd4bExtVjRjRzl5ZEhNN1hHNTlYRzVjYmk4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bGN5QnZZbXBsWTNRZ0tGOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOHBYRzVmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG0wZ1BTQmZYM2RsWW5CaFkydGZiVzlrZFd4bGMxOWZPMXh1WEc0dkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dVgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpJRDBnWDE5M1pXSndZV05yWDIxdlpIVnNaVjlqWVdOb1pWOWZPMXh1WEc0dkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pTQmxlR1ZqZFhScGIyNGdhVzUwWlhKalpYQjBiM0pjYmw5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWFTQTlJRnRkTzF4dVhHNGlMQ0l2THlCblpYUkVaV1poZFd4MFJYaHdiM0owSUdaMWJtTjBhVzl1SUdadmNpQmpiMjF3WVhScFltbHNhWFI1SUhkcGRHZ2dibTl1TFdoaGNtMXZibmtnYlc5a2RXeGxjMXh1WDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdLRzF2WkhWc1pTa2dQVDRnZTF4dVhIUjJZWElnWjJWMGRHVnlJRDBnYlc5a2RXeGxJQ1ltSUcxdlpIVnNaUzVmWDJWelRXOWtkV3hsSUQ5Y2JseDBYSFFvS1NBOVBpQW9iVzlrZFd4bFd5ZGtaV1poZFd4MEoxMHBJRHBjYmx4MFhIUW9LU0E5UGlBb2JXOWtkV3hsS1R0Y2JseDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0dkbGRIUmxjaXdnZXlCaE9pQm5aWFIwWlhJZ2ZTazdYRzVjZEhKbGRIVnliaUJuWlhSMFpYSTdYRzU5T3lJc0lpOHZJR1JsWm1sdVpTQm5aWFIwWlhJZ1puVnVZM1JwYjI1eklHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNibDlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNBOUlDaGxlSEJ2Y25SekxDQmtaV1pwYm1sMGFXOXVLU0E5UGlCN1hHNWNkR1p2Y2loMllYSWdhMlY1SUdsdUlHUmxabWx1YVhScGIyNHBJSHRjYmx4MFhIUnBaaWhmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04b1pHVm1hVzVwZEdsdmJpd2dhMlY1S1NBbUppQWhYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUd0bGVTa3BJSHRjYmx4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCclpYa3NJSHNnWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3dnWjJWME9pQmtaV1pwYm1sMGFXOXVXMnRsZVYwZ2ZTazdYRzVjZEZ4MGZWeHVYSFI5WEc1OU95SXNJaTh2SUZSb2FYTWdablZ1WTNScGIyNGdZV3hzYjNjZ2RHOGdjbVZtWlhKbGJtTmxJR0ZzYkNCamFIVnVhM05jYmw5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWFIVWdQU0FvWTJoMWJtdEpaQ2tnUFQ0Z2UxeHVYSFF2THlCeVpYUjFjbTRnZFhKc0lHWnZjaUJtYVd4bGJtRnRaWE1nWW1GelpXUWdiMjRnZEdWdGNHeGhkR1ZjYmx4MGNtVjBkWEp1SUZ3aVhDSWdLeUJqYUhWdWEwbGtJQ3NnWENJdVhDSWdLeUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1nb0tTQXJJRndpTG1odmRDMTFjR1JoZEdVdWFuTmNJanRjYm4wN0lpd2lYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVvYlhKR0lEMGdLQ2tnUFQ0Z0tGd2lTV052Ym5NdVhDSWdLeUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1nb0tTQXJJRndpTG1odmRDMTFjR1JoZEdVdWFuTnZibHdpS1RzaUxDSmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbWdnUFNBb0tTQTlQaUFvWENKbE1HRmpNVEl6TldWa05UTmpabU14WmpJMk9Gd2lLU0lzSWw5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5QTlJQ2h2WW1vc0lIQnliM0FwSUQwK0lDaFBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxTENCd2NtOXdLU2tpTENKMllYSWdhVzVRY205bmNtVnpjeUE5SUh0OU8xeHVkbUZ5SUdSaGRHRlhaV0p3WVdOclVISmxabWw0SUQwZ1hDSkpZMjl1Y3pwY0lqdGNiaTh2SUd4dllXUlRZM0pwY0hRZ1puVnVZM1JwYjI0Z2RHOGdiRzloWkNCaElITmpjbWx3ZENCMmFXRWdjMk55YVhCMElIUmhaMXh1WDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1c0lEMGdLSFZ5YkN3Z1pHOXVaU3dnYTJWNUxDQmphSFZ1YTBsa0tTQTlQaUI3WEc1Y2RHbG1LR2x1VUhKdlozSmxjM05iZFhKc1hTa2dleUJwYmxCeWIyZHlaWE56VzNWeWJGMHVjSFZ6YUNoa2IyNWxLVHNnY21WMGRYSnVPeUI5WEc1Y2RIWmhjaUJ6WTNKcGNIUXNJRzVsWldSQmRIUmhZMmc3WEc1Y2RHbG1LR3RsZVNBaFBUMGdkVzVrWldacGJtVmtLU0I3WEc1Y2RGeDBkbUZ5SUhOamNtbHdkSE1nUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MGMwSjVWR0ZuVG1GdFpTaGNJbk5qY21sd2RGd2lLVHRjYmx4MFhIUm1iM0lvZG1GeUlHa2dQU0F3T3lCcElEd2djMk55YVhCMGN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dVhIUmNkRngwZG1GeUlITWdQU0J6WTNKcGNIUnpXMmxkTzF4dVhIUmNkRngwYVdZb2N5NW5aWFJCZEhSeWFXSjFkR1VvWENKemNtTmNJaWtnUFQwZ2RYSnNJSHg4SUhNdVoyVjBRWFIwY21saWRYUmxLRndpWkdGMFlTMTNaV0p3WVdOclhDSXBJRDA5SUdSaGRHRlhaV0p3WVdOclVISmxabWw0SUNzZ2EyVjVLU0I3SUhOamNtbHdkQ0E5SUhNN0lHSnlaV0ZyT3lCOVhHNWNkRngwZlZ4dVhIUjlYRzVjZEdsbUtDRnpZM0pwY0hRcElIdGNibHgwWEhSdVpXVmtRWFIwWVdOb0lEMGdkSEoxWlR0Y2JseDBYSFJ6WTNKcGNIUWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZHpZM0pwY0hRbktUdGNibHh1WEhSY2RITmpjbWx3ZEM1amFHRnljMlYwSUQwZ0ozVjBaaTA0Snp0Y2JseDBYSFJ6WTNKcGNIUXVkR2x0Wlc5MWRDQTlJREV5TUR0Y2JseDBYSFJwWmlBb1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXVZeWtnZTF4dVhIUmNkRngwYzJOeWFYQjBMbk5sZEVGMGRISnBZblYwWlNoY0ltNXZibU5sWENJc0lGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVibU1wTzF4dVhIUmNkSDFjYmx4MFhIUnpZM0pwY0hRdWMyVjBRWFIwY21saWRYUmxLRndpWkdGMFlTMTNaV0p3WVdOclhDSXNJR1JoZEdGWFpXSndZV05yVUhKbFptbDRJQ3NnYTJWNUtUdGNibHgwWEhSelkzSnBjSFF1YzNKaklEMGdkWEpzTzF4dVhIUjlYRzVjZEdsdVVISnZaM0psYzNOYmRYSnNYU0E5SUZ0a2IyNWxYVHRjYmx4MGRtRnlJRzl1VTJOeWFYQjBRMjl0Y0d4bGRHVWdQU0FvY0hKbGRpd2daWFpsYm5RcElEMCtJSHRjYmx4MFhIUXZMeUJoZG05cFpDQnRaVzBnYkdWaGEzTWdhVzRnU1VVdVhHNWNkRngwYzJOeWFYQjBMbTl1WlhKeWIzSWdQU0J6WTNKcGNIUXViMjVzYjJGa0lEMGdiblZzYkR0Y2JseDBYSFJqYkdWaGNsUnBiV1Z2ZFhRb2RHbHRaVzkxZENrN1hHNWNkRngwZG1GeUlHUnZibVZHYm5NZ1BTQnBibEJ5YjJkeVpYTnpXM1Z5YkYwN1hHNWNkRngwWkdWc1pYUmxJR2x1VUhKdlozSmxjM05iZFhKc1hUdGNibHgwWEhSelkzSnBjSFF1Y0dGeVpXNTBUbTlrWlNBbUppQnpZM0pwY0hRdWNHRnlaVzUwVG05a1pTNXlaVzF2ZG1WRGFHbHNaQ2h6WTNKcGNIUXBPMXh1WEhSY2RHUnZibVZHYm5NZ0ppWWdaRzl1WlVadWN5NW1iM0pGWVdOb0tDaG1iaWtnUFQ0Z0tHWnVLR1YyWlc1MEtTa3BPMXh1WEhSY2RHbG1LSEJ5WlhZcElISmxkSFZ5YmlCd2NtVjJLR1YyWlc1MEtUdGNibHgwZlZ4dVhIUTdYRzVjZEhaaGNpQjBhVzFsYjNWMElEMGdjMlYwVkdsdFpXOTFkQ2h2YmxOamNtbHdkRU52YlhCc1pYUmxMbUpwYm1Rb2JuVnNiQ3dnZFc1a1pXWnBibVZrTENCN0lIUjVjR1U2SUNkMGFXMWxiM1YwSnl3Z2RHRnlaMlYwT2lCelkzSnBjSFFnZlNrc0lERXlNREF3TUNrN1hHNWNkSE5qY21sd2RDNXZibVZ5Y205eUlEMGdiMjVUWTNKcGNIUkRiMjF3YkdWMFpTNWlhVzVrS0c1MWJHd3NJSE5qY21sd2RDNXZibVZ5Y205eUtUdGNibHgwYzJOeWFYQjBMbTl1Ykc5aFpDQTlJRzl1VTJOeWFYQjBRMjl0Y0d4bGRHVXVZbWx1WkNodWRXeHNMQ0J6WTNKcGNIUXViMjVzYjJGa0tUdGNibHgwYm1WbFpFRjBkR0ZqYUNBbUppQmtiMk4xYldWdWRDNW9aV0ZrTG1Gd2NHVnVaRU5vYVd4a0tITmpjbWx3ZENrN1hHNTlPeUlzSWk4dklHUmxabWx1WlNCZlgyVnpUVzlrZFd4bElHOXVJR1Y0Y0c5eWRITmNibDlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lBOUlDaGxlSEJ2Y25SektTQTlQaUI3WEc1Y2RHbG1LSFI1Y0dWdlppQlRlVzFpYjJ3Z0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5a2dlMXh1WEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JUZVcxaWIyd3VkRzlUZEhKcGJtZFVZV2NzSUhzZ2RtRnNkV1U2SUNkTmIyUjFiR1VuSUgwcE8xeHVYSFI5WEc1Y2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0FuWDE5bGMwMXZaSFZzWlNjc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNTlPeUlzSW5aaGNpQmpkWEp5Wlc1MFRXOWtkV3hsUkdGMFlTQTlJSHQ5TzF4dWRtRnlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTWdQU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1NN1hHNWNiaTh2SUcxdlpIVnNaU0JoYm1RZ2NtVnhkV2x5WlNCamNtVmhkR2x2Ymx4dWRtRnlJR04xY25KbGJuUkRhR2xzWkUxdlpIVnNaVHRjYm5aaGNpQmpkWEp5Wlc1MFVHRnlaVzUwY3lBOUlGdGRPMXh1WEc0dkx5QnpkR0YwZFhOY2JuWmhjaUJ5WldkcGMzUmxjbVZrVTNSaGRIVnpTR0Z1Wkd4bGNuTWdQU0JiWFR0Y2JuWmhjaUJqZFhKeVpXNTBVM1JoZEhWeklEMGdYQ0pwWkd4bFhDSTdYRzVjYmk4dklIZG9hV3hsSUdSdmQyNXNiMkZrYVc1blhHNTJZWElnWW14dlkydHBibWRRY205dGFYTmxjenRjYmx4dUx5OGdWR2hsSUhWd1pHRjBaU0JwYm1adlhHNTJZWElnWTNWeWNtVnVkRlZ3WkdGMFpVRndjR3g1U0dGdVpHeGxjbk03WEc1MllYSWdjWFZsZFdWa1NXNTJZV3hwWkdGMFpXUk5iMlIxYkdWek8xeHVYRzR2THlCbGMyeHBiblF0WkdsellXSnNaUzF1WlhoMExXeHBibVVnYm04dGRXNTFjMlZrTFhaaGNuTmNibDlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YUcxeVJDQTlJR04xY25KbGJuUk5iMlIxYkdWRVlYUmhPMXh1WEc1ZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5Zkxta3VjSFZ6YUNobWRXNWpkR2x2YmlBb2IzQjBhVzl1Y3lrZ2UxeHVYSFIyWVhJZ2JXOWtkV3hsSUQwZ2IzQjBhVzl1Y3k1dGIyUjFiR1U3WEc1Y2RIWmhjaUJ5WlhGMWFYSmxJRDBnWTNKbFlYUmxVbVZ4ZFdseVpTaHZjSFJwYjI1ekxuSmxjWFZwY21Vc0lHOXdkR2x2Ym5NdWFXUXBPMXh1WEhSdGIyUjFiR1V1YUc5MElEMGdZM0psWVhSbFRXOWtkV3hsU0c5MFQySnFaV04wS0c5d2RHbHZibk11YVdRc0lHMXZaSFZzWlNrN1hHNWNkRzF2WkhWc1pTNXdZWEpsYm5SeklEMGdZM1Z5Y21WdWRGQmhjbVZ1ZEhNN1hHNWNkRzF2WkhWc1pTNWphR2xzWkhKbGJpQTlJRnRkTzF4dVhIUmpkWEp5Wlc1MFVHRnlaVzUwY3lBOUlGdGRPMXh1WEhSdmNIUnBiMjV6TG5KbGNYVnBjbVVnUFNCeVpYRjFhWEpsTzF4dWZTazdYRzVjYmw5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWFHMXlReUE5SUh0OU8xeHVYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVvYlhKSklEMGdlMzA3WEc1Y2JtWjFibU4wYVc5dUlHTnlaV0YwWlZKbGNYVnBjbVVvY21WeGRXbHlaU3dnYlc5a2RXeGxTV1FwSUh0Y2JseDBkbUZ5SUcxbElEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMDdYRzVjZEdsbUlDZ2hiV1VwSUhKbGRIVnliaUJ5WlhGMWFYSmxPMXh1WEhSMllYSWdabTRnUFNCbWRXNWpkR2x2YmlBb2NtVnhkV1Z6ZENrZ2UxeHVYSFJjZEdsbUlDaHRaUzVvYjNRdVlXTjBhWFpsS1NCN1hHNWNkRngwWEhScFppQW9hVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHlaWEYxWlhOMFhTa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ2NHRnlaVzUwY3lBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmNtVnhkV1Z6ZEYwdWNHRnlaVzUwY3p0Y2JseDBYSFJjZEZ4MGFXWWdLSEJoY21WdWRITXVhVzVrWlhoUFppaHRiMlIxYkdWSlpDa2dQVDA5SUMweEtTQjdYRzVjZEZ4MFhIUmNkRngwY0dGeVpXNTBjeTV3ZFhOb0tHMXZaSFZzWlVsa0tUdGNibHgwWEhSY2RGeDBmVnh1WEhSY2RGeDBmU0JsYkhObElIdGNibHgwWEhSY2RGeDBZM1Z5Y21WdWRGQmhjbVZ1ZEhNZ1BTQmJiVzlrZFd4bFNXUmRPMXh1WEhSY2RGeDBYSFJqZFhKeVpXNTBRMmhwYkdSTmIyUjFiR1VnUFNCeVpYRjFaWE4wTzF4dVhIUmNkRngwZlZ4dVhIUmNkRngwYVdZZ0tHMWxMbU5vYVd4a2NtVnVMbWx1WkdWNFQyWW9jbVZ4ZFdWemRDa2dQVDA5SUMweEtTQjdYRzVjZEZ4MFhIUmNkRzFsTG1Ob2FXeGtjbVZ1TG5CMWMyZ29jbVZ4ZFdWemRDazdYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZTQmxiSE5sSUh0Y2JseDBYSFJjZEdOdmJuTnZiR1V1ZDJGeWJpaGNibHgwWEhSY2RGeDBYQ0piU0UxU1hTQjFibVY0Y0dWamRHVmtJSEpsY1hWcGNtVW9YQ0lnSzF4dVhIUmNkRngwWEhSY2RISmxjWFZsYzNRZ0sxeHVYSFJjZEZ4MFhIUmNkRndpS1NCbWNtOXRJR1JwYzNCdmMyVmtJRzF2WkhWc1pTQmNJaUFyWEc1Y2RGeDBYSFJjZEZ4MGJXOWtkV3hsU1dSY2JseDBYSFJjZENrN1hHNWNkRngwWEhSamRYSnlaVzUwVUdGeVpXNTBjeUE5SUZ0ZE8xeHVYSFJjZEgxY2JseDBYSFJ5WlhSMWNtNGdjbVZ4ZFdseVpTaHlaWEYxWlhOMEtUdGNibHgwZlR0Y2JseDBkbUZ5SUdOeVpXRjBaVkJ5YjNCbGNuUjVSR1Z6WTNKcGNIUnZjaUE5SUdaMWJtTjBhVzl1SUNodVlXMWxLU0I3WEc1Y2RGeDBjbVYwZFhKdUlIdGNibHgwWEhSY2RHTnZibVpwWjNWeVlXSnNaVG9nZEhKMVpTeGNibHgwWEhSY2RHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc1hHNWNkRngwWEhSblpYUTZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhKbGNYVnBjbVZiYm1GdFpWMDdYRzVjZEZ4MFhIUjlMRnh1WEhSY2RGeDBjMlYwT2lCbWRXNWpkR2x2YmlBb2RtRnNkV1VwSUh0Y2JseDBYSFJjZEZ4MGNtVnhkV2x5WlZ0dVlXMWxYU0E5SUhaaGJIVmxPMXh1WEhSY2RGeDBmVnh1WEhSY2RIMDdYRzVjZEgwN1hHNWNkR1p2Y2lBb2RtRnlJRzVoYldVZ2FXNGdjbVZ4ZFdseVpTa2dlMXh1WEhSY2RHbG1JQ2hQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvY21WeGRXbHlaU3dnYm1GdFpTa2dKaVlnYm1GdFpTQWhQVDBnWENKbFhDSXBJSHRjYmx4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobWJpd2dibUZ0WlN3Z1kzSmxZWFJsVUhKdmNHVnlkSGxFWlhOamNtbHdkRzl5S0c1aGJXVXBLVHRjYmx4MFhIUjlYRzVjZEgxY2JseDBabTR1WlNBOUlHWjFibU4wYVc5dUlDaGphSFZ1YTBsa0tTQjdYRzVjZEZ4MGNtVjBkWEp1SUhSeVlXTnJRbXh2WTJ0cGJtZFFjbTl0YVhObEtISmxjWFZwY21VdVpTaGphSFZ1YTBsa0tTazdYRzVjZEgwN1hHNWNkSEpsZEhWeWJpQm1ianRjYm4xY2JseHVablZ1WTNScGIyNGdZM0psWVhSbFRXOWtkV3hsU0c5MFQySnFaV04wS0cxdlpIVnNaVWxrTENCdFpTa2dlMXh1WEhSMllYSWdhRzkwSUQwZ2UxeHVYSFJjZEM4dklIQnlhWFpoZEdVZ2MzUjFabVpjYmx4MFhIUmZZV05qWlhCMFpXUkVaWEJsYm1SbGJtTnBaWE02SUh0OUxGeHVYSFJjZEY5a1pXTnNhVzVsWkVSbGNHVnVaR1Z1WTJsbGN6b2dlMzBzWEc1Y2RGeDBYM05sYkdaQlkyTmxjSFJsWkRvZ1ptRnNjMlVzWEc1Y2RGeDBYM05sYkdaRVpXTnNhVzVsWkRvZ1ptRnNjMlVzWEc1Y2RGeDBYM05sYkdaSmJuWmhiR2xrWVhSbFpEb2dabUZzYzJVc1hHNWNkRngwWDJScGMzQnZjMlZJWVc1a2JHVnljem9nVzEwc1hHNWNkRngwWDIxaGFXNDZJR04xY25KbGJuUkRhR2xzWkUxdlpIVnNaU0FoUFQwZ2JXOWtkV3hsU1dRc1hHNWNkRngwWDNKbGNYVnBjbVZUWld4bU9pQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RGeDBYSFJqZFhKeVpXNTBVR0Z5Wlc1MGN5QTlJRzFsTG5CaGNtVnVkSE11YzJ4cFkyVW9LVHRjYmx4MFhIUmNkR04xY25KbGJuUkRhR2xzWkUxdlpIVnNaU0E5SUcxdlpIVnNaVWxrTzF4dVhIUmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrN1hHNWNkRngwZlN4Y2JseHVYSFJjZEM4dklFMXZaSFZzWlNCQlVFbGNibHgwWEhSaFkzUnBkbVU2SUhSeWRXVXNYRzVjZEZ4MFlXTmpaWEIwT2lCbWRXNWpkR2x2YmlBb1pHVndMQ0JqWVd4c1ltRmpheWtnZTF4dVhIUmNkRngwYVdZZ0tHUmxjQ0E5UFQwZ2RXNWtaV1pwYm1Wa0tTQm9iM1F1WDNObGJHWkJZMk5sY0hSbFpDQTlJSFJ5ZFdVN1hHNWNkRngwWEhSbGJITmxJR2xtSUNoMGVYQmxiMllnWkdWd0lEMDlQU0JjSW1aMWJtTjBhVzl1WENJcElHaHZkQzVmYzJWc1prRmpZMlZ3ZEdWa0lEMGdaR1Z3TzF4dVhIUmNkRngwWld4elpTQnBaaUFvZEhsd1pXOW1JR1JsY0NBOVBUMGdYQ0p2WW1wbFkzUmNJaUFtSmlCa1pYQWdJVDA5SUc1MWJHd3BYRzVjZEZ4MFhIUmNkR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnWkdWd0xteGxibWQwYURzZ2FTc3JLVnh1WEhSY2RGeDBYSFJjZEdodmRDNWZZV05qWlhCMFpXUkVaWEJsYm1SbGJtTnBaWE5iWkdWd1cybGRYU0E5SUdOaGJHeGlZV05ySUh4OElHWjFibU4wYVc5dUlDZ3BJSHQ5TzF4dVhIUmNkRngwWld4elpTQm9iM1F1WDJGalkyVndkR1ZrUkdWd1pXNWtaVzVqYVdWelcyUmxjRjBnUFNCallXeHNZbUZqYXlCOGZDQm1kVzVqZEdsdmJpQW9LU0I3ZlR0Y2JseDBYSFI5TEZ4dVhIUmNkR1JsWTJ4cGJtVTZJR1oxYm1OMGFXOXVJQ2hrWlhBcElIdGNibHgwWEhSY2RHbG1JQ2hrWlhBZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnYUc5MExsOXpaV3htUkdWamJHbHVaV1FnUFNCMGNuVmxPMXh1WEhSY2RGeDBaV3h6WlNCcFppQW9kSGx3Wlc5bUlHUmxjQ0E5UFQwZ1hDSnZZbXBsWTNSY0lpQW1KaUJrWlhBZ0lUMDlJRzUxYkd3cFhHNWNkRngwWEhSY2RHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2daR1Z3TG14bGJtZDBhRHNnYVNzcktWeHVYSFJjZEZ4MFhIUmNkR2h2ZEM1ZlpHVmpiR2x1WldSRVpYQmxibVJsYm1OcFpYTmJaR1Z3VzJsZFhTQTlJSFJ5ZFdVN1hHNWNkRngwWEhSbGJITmxJR2h2ZEM1ZlpHVmpiR2x1WldSRVpYQmxibVJsYm1OcFpYTmJaR1Z3WFNBOUlIUnlkV1U3WEc1Y2RGeDBmU3hjYmx4MFhIUmthWE53YjNObE9pQm1kVzVqZEdsdmJpQW9ZMkZzYkdKaFkyc3BJSHRjYmx4MFhIUmNkR2h2ZEM1ZlpHbHpjRzl6WlVoaGJtUnNaWEp6TG5CMWMyZ29ZMkZzYkdKaFkyc3BPMXh1WEhSY2RIMHNYRzVjZEZ4MFlXUmtSR2x6Y0c5elpVaGhibVJzWlhJNklHWjFibU4wYVc5dUlDaGpZV3hzWW1GamF5a2dlMXh1WEhSY2RGeDBhRzkwTGw5a2FYTndiM05sU0dGdVpHeGxjbk11Y0hWemFDaGpZV3hzWW1GamF5azdYRzVjZEZ4MGZTeGNibHgwWEhSeVpXMXZkbVZFYVhOd2IzTmxTR0Z1Wkd4bGNqb2dablZ1WTNScGIyNGdLR05oYkd4aVlXTnJLU0I3WEc1Y2RGeDBYSFIyWVhJZ2FXUjRJRDBnYUc5MExsOWthWE53YjNObFNHRnVaR3hsY25NdWFXNWtaWGhQWmloallXeHNZbUZqYXlrN1hHNWNkRngwWEhScFppQW9hV1I0SUQ0OUlEQXBJR2h2ZEM1ZlpHbHpjRzl6WlVoaGJtUnNaWEp6TG5Od2JHbGpaU2hwWkhnc0lERXBPMXh1WEhSY2RIMHNYRzVjZEZ4MGFXNTJZV3hwWkdGMFpUb2dablZ1WTNScGIyNGdLQ2tnZTF4dVhIUmNkRngwZEdocGN5NWZjMlZzWmtsdWRtRnNhV1JoZEdWa0lEMGdkSEoxWlR0Y2JseDBYSFJjZEhOM2FYUmphQ0FvWTNWeWNtVnVkRk4wWVhSMWN5a2dlMXh1WEhSY2RGeDBYSFJqWVhObElGd2lhV1JzWlZ3aU9seHVYSFJjZEZ4MFhIUmNkR04xY25KbGJuUlZjR1JoZEdWQmNIQnNlVWhoYm1Sc1pYSnpJRDBnVzEwN1hHNWNkRngwWEhSY2RGeDBUMkpxWldOMExtdGxlWE1vWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1b2JYSkpLUzVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2hyWlhrcElIdGNibHgwWEhSY2RGeDBYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWFHMXlTVnRyWlhsZEtGeHVYSFJjZEZ4MFhIUmNkRngwWEhSdGIyUjFiR1ZKWkN4Y2JseDBYSFJjZEZ4MFhIUmNkRngwWTNWeWNtVnVkRlZ3WkdGMFpVRndjR3g1U0dGdVpHeGxjbk5jYmx4MFhIUmNkRngwWEhSY2RDazdYRzVjZEZ4MFhIUmNkRngwZlNrN1hHNWNkRngwWEhSY2RGeDBjMlYwVTNSaGRIVnpLRndpY21WaFpIbGNJaWs3WEc1Y2RGeDBYSFJjZEZ4MFluSmxZV3M3WEc1Y2RGeDBYSFJjZEdOaGMyVWdYQ0p5WldGa2VWd2lPbHh1WEhSY2RGeDBYSFJjZEU5aWFtVmpkQzVyWlhsektGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVhRzF5U1NrdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb2EyVjVLU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbWh0Y2tsYmEyVjVYU2hjYmx4MFhIUmNkRngwWEhSY2RGeDBiVzlrZFd4bFNXUXNYRzVjZEZ4MFhIUmNkRngwWEhSY2RHTjFjbkpsYm5SVmNHUmhkR1ZCY0hCc2VVaGhibVJzWlhKelhHNWNkRngwWEhSY2RGeDBYSFFwTzF4dVhIUmNkRngwWEhSY2RIMHBPMXh1WEhSY2RGeDBYSFJjZEdKeVpXRnJPMXh1WEhSY2RGeDBYSFJqWVhObElGd2ljSEpsY0dGeVpWd2lPbHh1WEhSY2RGeDBYSFJqWVhObElGd2lZMmhsWTJ0Y0lqcGNibHgwWEhSY2RGeDBZMkZ6WlNCY0ltUnBjM0J2YzJWY0lqcGNibHgwWEhSY2RGeDBZMkZ6WlNCY0ltRndjR3g1WENJNlhHNWNkRngwWEhSY2RGeDBLSEYxWlhWbFpFbHVkbUZzYVdSaGRHVmtUVzlrZFd4bGN5QTlJSEYxWlhWbFpFbHVkbUZzYVdSaGRHVmtUVzlrZFd4bGN5QjhmQ0JiWFNrdWNIVnphQ2hjYmx4MFhIUmNkRngwWEhSY2RHMXZaSFZzWlVsa1hHNWNkRngwWEhSY2RGeDBLVHRjYmx4MFhIUmNkRngwWEhSaWNtVmhhenRjYmx4MFhIUmNkRngwWkdWbVlYVnNkRHBjYmx4MFhIUmNkRngwWEhRdkx5QnBaMjV2Y21VZ2NtVnhkV1Z6ZEhNZ2FXNGdaWEp5YjNJZ2MzUmhkR1Z6WEc1Y2RGeDBYSFJjZEZ4MFluSmxZV3M3WEc1Y2RGeDBYSFI5WEc1Y2RGeDBmU3hjYmx4dVhIUmNkQzh2SUUxaGJtRm5aVzFsYm5RZ1FWQkpYRzVjZEZ4MFkyaGxZMnM2SUdodmRFTm9aV05yTEZ4dVhIUmNkR0Z3Y0d4NU9pQm9iM1JCY0hCc2VTeGNibHgwWEhSemRHRjBkWE02SUdaMWJtTjBhVzl1SUNoc0tTQjdYRzVjZEZ4MFhIUnBaaUFvSVd3cElISmxkSFZ5YmlCamRYSnlaVzUwVTNSaGRIVnpPMXh1WEhSY2RGeDBjbVZuYVhOMFpYSmxaRk4wWVhSMWMwaGhibVJzWlhKekxuQjFjMmdvYkNrN1hHNWNkRngwZlN4Y2JseDBYSFJoWkdSVGRHRjBkWE5JWVc1a2JHVnlPaUJtZFc1amRHbHZiaUFvYkNrZ2UxeHVYSFJjZEZ4MGNtVm5hWE4wWlhKbFpGTjBZWFIxYzBoaGJtUnNaWEp6TG5CMWMyZ29iQ2s3WEc1Y2RGeDBmU3hjYmx4MFhIUnlaVzF2ZG1WVGRHRjBkWE5JWVc1a2JHVnlPaUJtZFc1amRHbHZiaUFvYkNrZ2UxeHVYSFJjZEZ4MGRtRnlJR2xrZUNBOUlISmxaMmx6ZEdWeVpXUlRkR0YwZFhOSVlXNWtiR1Z5Y3k1cGJtUmxlRTltS0d3cE8xeHVYSFJjZEZ4MGFXWWdLR2xrZUNBK1BTQXdLU0J5WldkcGMzUmxjbVZrVTNSaGRIVnpTR0Z1Wkd4bGNuTXVjM0JzYVdObEtHbGtlQ3dnTVNrN1hHNWNkRngwZlN4Y2JseHVYSFJjZEM4dmFXNW9aWEpwZENCbWNtOXRJSEJ5WlhacGIzVnpJR1JwYzNCdmMyVWdZMkZzYkZ4dVhIUmNkR1JoZEdFNklHTjFjbkpsYm5STmIyUjFiR1ZFWVhSaFcyMXZaSFZzWlVsa1hWeHVYSFI5TzF4dVhIUmpkWEp5Wlc1MFEyaHBiR1JOYjJSMWJHVWdQU0IxYm1SbFptbHVaV1E3WEc1Y2RISmxkSFZ5YmlCb2IzUTdYRzU5WEc1Y2JtWjFibU4wYVc5dUlITmxkRk4wWVhSMWN5aHVaWGRUZEdGMGRYTXBJSHRjYmx4MFkzVnljbVZ1ZEZOMFlYUjFjeUE5SUc1bGQxTjBZWFIxY3p0Y2JseDBabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0J5WldkcGMzUmxjbVZrVTNSaGRIVnpTR0Z1Wkd4bGNuTXViR1Z1WjNSb095QnBLeXNwWEc1Y2RGeDBjbVZuYVhOMFpYSmxaRk4wWVhSMWMwaGhibVJzWlhKelcybGRMbU5oYkd3b2JuVnNiQ3dnYm1WM1UzUmhkSFZ6S1R0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnZEhKaFkydENiRzlqYTJsdVoxQnliMjFwYzJVb2NISnZiV2x6WlNrZ2UxeHVYSFJ6ZDJsMFkyZ2dLR04xY25KbGJuUlRkR0YwZFhNcElIdGNibHgwWEhSallYTmxJRndpY21WaFpIbGNJanBjYmx4MFhIUmNkSE5sZEZOMFlYUjFjeWhjSW5CeVpYQmhjbVZjSWlrN1hHNWNkRngwWEhSaWJHOWphMmx1WjFCeWIyMXBjMlZ6TG5CMWMyZ29jSEp2YldselpTazdYRzVjZEZ4MFhIUjNZV2wwUm05eVFteHZZMnRwYm1kUWNtOXRhWE5sY3lobWRXNWpkR2x2YmlBb0tTQjdYRzVjZEZ4MFhIUmNkSE5sZEZOMFlYUjFjeWhjSW5KbFlXUjVYQ0lwTzF4dVhIUmNkRngwZlNrN1hHNWNkRngwWEhSeVpYUjFjbTRnY0hKdmJXbHpaVHRjYmx4MFhIUmpZWE5sSUZ3aWNISmxjR0Z5WlZ3aU9seHVYSFJjZEZ4MFlteHZZMnRwYm1kUWNtOXRhWE5sY3k1d2RYTm9LSEJ5YjIxcGMyVXBPMXh1WEhSY2RGeDBjbVYwZFhKdUlIQnliMjFwYzJVN1hHNWNkRngwWkdWbVlYVnNkRHBjYmx4MFhIUmNkSEpsZEhWeWJpQndjbTl0YVhObE8xeHVYSFI5WEc1OVhHNWNibVoxYm1OMGFXOXVJSGRoYVhSR2IzSkNiRzlqYTJsdVoxQnliMjFwYzJWektHWnVLU0I3WEc1Y2RHbG1JQ2hpYkc5amEybHVaMUJ5YjIxcGMyVnpMbXhsYm1kMGFDQTlQVDBnTUNrZ2NtVjBkWEp1SUdadUtDazdYRzVjZEhaaGNpQmliRzlqYTJWeUlEMGdZbXh2WTJ0cGJtZFFjbTl0YVhObGN6dGNibHgwWW14dlkydHBibWRRY205dGFYTmxjeUE5SUZ0ZE8xeHVYSFJ5WlhSMWNtNGdVSEp2YldselpTNWhiR3dvWW14dlkydGxjaWt1ZEdobGJpaG1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RGeDBjbVYwZFhKdUlIZGhhWFJHYjNKQ2JHOWphMmx1WjFCeWIyMXBjMlZ6S0dadUtUdGNibHgwZlNrN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUdodmRFTm9aV05yS0dGd2NHeDVUMjVWY0dSaGRHVXBJSHRjYmx4MGFXWWdLR04xY25KbGJuUlRkR0YwZFhNZ0lUMDlJRndpYVdSc1pWd2lLU0I3WEc1Y2RGeDBkR2h5YjNjZ2JtVjNJRVZ5Y205eUtGd2lZMmhsWTJzb0tTQnBjeUJ2Ym14NUlHRnNiRzkzWldRZ2FXNGdhV1JzWlNCemRHRjBkWE5jSWlrN1hHNWNkSDFjYmx4MGMyVjBVM1JoZEhWektGd2lZMmhsWTJ0Y0lpazdYRzVjZEhKbGRIVnliaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1odGNrMG9LUzUwYUdWdUtHWjFibU4wYVc5dUlDaDFjR1JoZEdVcElIdGNibHgwWEhScFppQW9JWFZ3WkdGMFpTa2dlMXh1WEhSY2RGeDBjMlYwVTNSaGRIVnpLR0Z3Y0d4NVNXNTJZV3hwWkdGMFpXUk5iMlIxYkdWektDa2dQeUJjSW5KbFlXUjVYQ0lnT2lCY0ltbGtiR1ZjSWlrN1hHNWNkRngwWEhSeVpYUjFjbTRnYm5Wc2JEdGNibHgwWEhSOVhHNWNibHgwWEhSelpYUlRkR0YwZFhNb1hDSndjbVZ3WVhKbFhDSXBPMXh1WEc1Y2RGeDBkbUZ5SUhWd1pHRjBaV1JOYjJSMWJHVnpJRDBnVzEwN1hHNWNkRngwWW14dlkydHBibWRRY205dGFYTmxjeUE5SUZ0ZE8xeHVYSFJjZEdOMWNuSmxiblJWY0dSaGRHVkJjSEJzZVVoaGJtUnNaWEp6SUQwZ1cxMDdYRzVjYmx4MFhIUnlaWFIxY200Z1VISnZiV2x6WlM1aGJHd29YRzVjZEZ4MFhIUlBZbXBsWTNRdWEyVjVjeWhmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1odGNrTXBMbkpsWkhWalpTaG1kVzVqZEdsdmJpQW9YRzVjZEZ4MFhIUmNkSEJ5YjIxcGMyVnpMRnh1WEhSY2RGeDBYSFJyWlhsY2JseDBYSFJjZENrZ2UxeHVYSFJjZEZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbWh0Y2tOYmEyVjVYU2hjYmx4MFhIUmNkRngwWEhSMWNHUmhkR1V1WXl4Y2JseDBYSFJjZEZ4MFhIUjFjR1JoZEdVdWNpeGNibHgwWEhSY2RGeDBYSFIxY0dSaGRHVXViU3hjYmx4MFhIUmNkRngwWEhSd2NtOXRhWE5sY3l4Y2JseDBYSFJjZEZ4MFhIUmpkWEp5Wlc1MFZYQmtZWFJsUVhCd2JIbElZVzVrYkdWeWN5eGNibHgwWEhSY2RGeDBYSFIxY0dSaGRHVmtUVzlrZFd4bGMxeHVYSFJjZEZ4MFhIUXBPMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdjSEp2YldselpYTTdYRzVjZEZ4MFhIUjlMRnh1WEhSY2RGeDBXMTBwWEc1Y2RGeDBLUzUwYUdWdUtHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQjNZV2wwUm05eVFteHZZMnRwYm1kUWNtOXRhWE5sY3lobWRXNWpkR2x2YmlBb0tTQjdYRzVjZEZ4MFhIUmNkR2xtSUNoaGNIQnNlVTl1VlhCa1lYUmxLU0I3WEc1Y2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUdsdWRHVnlibUZzUVhCd2JIa29ZWEJ3YkhsUGJsVndaR0YwWlNrN1hHNWNkRngwWEhSY2RIMGdaV3h6WlNCN1hHNWNkRngwWEhSY2RGeDBjMlYwVTNSaGRIVnpLRndpY21WaFpIbGNJaWs3WEc1Y2JseDBYSFJjZEZ4MFhIUnlaWFIxY200Z2RYQmtZWFJsWkUxdlpIVnNaWE03WEc1Y2RGeDBYSFJjZEgxY2JseDBYSFJjZEgwcE8xeHVYSFJjZEgwcE8xeHVYSFI5S1R0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnYUc5MFFYQndiSGtvYjNCMGFXOXVjeWtnZTF4dVhIUnBaaUFvWTNWeWNtVnVkRk4wWVhSMWN5QWhQVDBnWENKeVpXRmtlVndpS1NCN1hHNWNkRngwY21WMGRYSnVJRkJ5YjIxcGMyVXVjbVZ6YjJ4MlpTZ3BMblJvWlc0b1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhSY2RGeDBkR2h5YjNjZ2JtVjNJRVZ5Y205eUtGd2lZWEJ3Ykhrb0tTQnBjeUJ2Ym14NUlHRnNiRzkzWldRZ2FXNGdjbVZoWkhrZ2MzUmhkSFZ6WENJcE8xeHVYSFJjZEgwcE8xeHVYSFI5WEc1Y2RISmxkSFZ5YmlCcGJuUmxjbTVoYkVGd2NHeDVLRzl3ZEdsdmJuTXBPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnBiblJsY201aGJFRndjR3g1S0c5d2RHbHZibk1wSUh0Y2JseDBiM0IwYVc5dWN5QTlJRzl3ZEdsdmJuTWdmSHdnZTMwN1hHNWNibHgwWVhCd2JIbEpiblpoYkdsa1lYUmxaRTF2WkhWc1pYTW9LVHRjYmx4dVhIUjJZWElnY21WemRXeDBjeUE5SUdOMWNuSmxiblJWY0dSaGRHVkJjSEJzZVVoaGJtUnNaWEp6TG0xaGNDaG1kVzVqZEdsdmJpQW9hR0Z1Wkd4bGNpa2dlMXh1WEhSY2RISmxkSFZ5YmlCb1lXNWtiR1Z5S0c5d2RHbHZibk1wTzF4dVhIUjlLVHRjYmx4MFkzVnljbVZ1ZEZWd1pHRjBaVUZ3Y0d4NVNHRnVaR3hsY25NZ1BTQjFibVJsWm1sdVpXUTdYRzVjYmx4MGRtRnlJR1Z5Y205eWN5QTlJSEpsYzNWc2RITmNibHgwWEhRdWJXRndLR1oxYm1OMGFXOXVJQ2h5S1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnY2k1bGNuSnZjanRjYmx4MFhIUjlLVnh1WEhSY2RDNW1hV3gwWlhJb1FtOXZiR1ZoYmlrN1hHNWNibHgwYVdZZ0tHVnljbTl5Y3k1c1pXNW5kR2dnUGlBd0tTQjdYRzVjZEZ4MGMyVjBVM1JoZEhWektGd2lZV0p2Y25SY0lpazdYRzVjZEZ4MGNtVjBkWEp1SUZCeWIyMXBjMlV1Y21WemIyeDJaU2dwTG5Sb1pXNG9ablZ1WTNScGIyNGdLQ2tnZTF4dVhIUmNkRngwZEdoeWIzY2daWEp5YjNKeld6QmRPMXh1WEhSY2RIMHBPMXh1WEhSOVhHNWNibHgwTHk4Z1RtOTNJR2x1SUZ3aVpHbHpjRzl6WlZ3aUlIQm9ZWE5sWEc1Y2RITmxkRk4wWVhSMWN5aGNJbVJwYzNCdmMyVmNJaWs3WEc1Y2JseDBjbVZ6ZFd4MGN5NW1iM0pGWVdOb0tHWjFibU4wYVc5dUlDaHlaWE4xYkhRcElIdGNibHgwWEhScFppQW9jbVZ6ZFd4MExtUnBjM0J2YzJVcElISmxjM1ZzZEM1a2FYTndiM05sS0NrN1hHNWNkSDBwTzF4dVhHNWNkQzh2SUU1dmR5QnBiaUJjSW1Gd2NHeDVYQ0lnY0doaGMyVmNibHgwYzJWMFUzUmhkSFZ6S0Z3aVlYQndiSGxjSWlrN1hHNWNibHgwZG1GeUlHVnljbTl5TzF4dVhIUjJZWElnY21Wd2IzSjBSWEp5YjNJZ1BTQm1kVzVqZEdsdmJpQW9aWEp5S1NCN1hHNWNkRngwYVdZZ0tDRmxjbkp2Y2lrZ1pYSnliM0lnUFNCbGNuSTdYRzVjZEgwN1hHNWNibHgwZG1GeUlHOTFkR1JoZEdWa1RXOWtkV3hsY3lBOUlGdGRPMXh1WEhSeVpYTjFiSFJ6TG1admNrVmhZMmdvWm5WdVkzUnBiMjRnS0hKbGMzVnNkQ2tnZTF4dVhIUmNkR2xtSUNoeVpYTjFiSFF1WVhCd2JIa3BJSHRjYmx4MFhIUmNkSFpoY2lCdGIyUjFiR1Z6SUQwZ2NtVnpkV3gwTG1Gd2NHeDVLSEpsY0c5eWRFVnljbTl5S1R0Y2JseDBYSFJjZEdsbUlDaHRiMlIxYkdWektTQjdYRzVjZEZ4MFhIUmNkR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYlc5a2RXeGxjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVYSFJjZEZ4MFhIUmNkRzkxZEdSaGRHVmtUVzlrZFd4bGN5NXdkWE5vS0cxdlpIVnNaWE5iYVYwcE8xeHVYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZWeHVYSFI5S1R0Y2JseHVYSFF2THlCb1lXNWtiR1VnWlhKeWIzSnpJR2x1SUdGalkyVndkQ0JvWVc1a2JHVnljeUJoYm1RZ2MyVnNaaUJoWTJObGNIUmxaQ0J0YjJSMWJHVWdiRzloWkZ4dVhIUnBaaUFvWlhKeWIzSXBJSHRjYmx4MFhIUnpaWFJUZEdGMGRYTW9YQ0ptWVdsc1hDSXBPMXh1WEhSY2RISmxkSFZ5YmlCUWNtOXRhWE5sTG5KbGMyOXNkbVVvS1M1MGFHVnVLR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBYSFJjZEhSb2NtOTNJR1Z5Y205eU8xeHVYSFJjZEgwcE8xeHVYSFI5WEc1Y2JseDBhV1lnS0hGMVpYVmxaRWx1ZG1Gc2FXUmhkR1ZrVFc5a2RXeGxjeWtnZTF4dVhIUmNkSEpsZEhWeWJpQnBiblJsY201aGJFRndjR3g1S0c5d2RHbHZibk1wTG5Sb1pXNG9ablZ1WTNScGIyNGdLR3hwYzNRcElIdGNibHgwWEhSY2RHOTFkR1JoZEdWa1RXOWtkV3hsY3k1bWIzSkZZV05vS0daMWJtTjBhVzl1SUNodGIyUjFiR1ZKWkNrZ2UxeHVYSFJjZEZ4MFhIUnBaaUFvYkdsemRDNXBibVJsZUU5bUtHMXZaSFZzWlVsa0tTQThJREFwSUd4cGMzUXVjSFZ6YUNodGIyUjFiR1ZKWkNrN1hHNWNkRngwWEhSOUtUdGNibHgwWEhSY2RISmxkSFZ5YmlCc2FYTjBPMXh1WEhSY2RIMHBPMXh1WEhSOVhHNWNibHgwYzJWMFUzUmhkSFZ6S0Z3aWFXUnNaVndpS1R0Y2JseDBjbVYwZFhKdUlGQnliMjFwYzJVdWNtVnpiMngyWlNodmRYUmtZWFJsWkUxdlpIVnNaWE1wTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJoY0hCc2VVbHVkbUZzYVdSaGRHVmtUVzlrZFd4bGN5Z3BJSHRjYmx4MGFXWWdLSEYxWlhWbFpFbHVkbUZzYVdSaGRHVmtUVzlrZFd4bGN5a2dlMXh1WEhSY2RHbG1JQ2doWTNWeWNtVnVkRlZ3WkdGMFpVRndjR3g1U0dGdVpHeGxjbk1wSUdOMWNuSmxiblJWY0dSaGRHVkJjSEJzZVVoaGJtUnNaWEp6SUQwZ1cxMDdYRzVjZEZ4MFQySnFaV04wTG10bGVYTW9YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVvYlhKSktTNW1iM0pGWVdOb0tHWjFibU4wYVc5dUlDaHJaWGtwSUh0Y2JseDBYSFJjZEhGMVpYVmxaRWx1ZG1Gc2FXUmhkR1ZrVFc5a2RXeGxjeTVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2h0YjJSMWJHVkpaQ2tnZTF4dVhIUmNkRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtaHRja2xiYTJWNVhTaGNibHgwWEhSY2RGeDBYSFJ0YjJSMWJHVkpaQ3hjYmx4MFhIUmNkRngwWEhSamRYSnlaVzUwVlhCa1lYUmxRWEJ3YkhsSVlXNWtiR1Z5YzF4dVhIUmNkRngwWEhRcE8xeHVYSFJjZEZ4MGZTazdYRzVjZEZ4MGZTazdYRzVjZEZ4MGNYVmxkV1ZrU1c1MllXeHBaR0YwWldSTmIyUjFiR1Z6SUQwZ2RXNWtaV1pwYm1Wa08xeHVYSFJjZEhKbGRIVnliaUIwY25WbE8xeHVYSFI5WEc1OUlpd2lYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanNpTENJdkx5QnVieUJpWVhObFZWSkpYRzVjYmk4dklHOWlhbVZqZENCMGJ5QnpkRzl5WlNCc2IyRmtaV1FnWVc1a0lHeHZZV1JwYm1jZ1kyaDFibXR6WEc0dkx5QjFibVJsWm1sdVpXUWdQU0JqYUhWdWF5QnViM1FnYkc5aFpHVmtMQ0J1ZFd4c0lEMGdZMmgxYm1zZ2NISmxiRzloWkdWa0wzQnlaV1psZEdOb1pXUmNiaTh2SUZCeWIyMXBjMlVnUFNCamFIVnVheUJzYjJGa2FXNW5MQ0F3SUQwZ1kyaDFibXNnYkc5aFpHVmtYRzUyWVhJZ2FXNXpkR0ZzYkdWa1EyaDFibXR6SUQwZ2UxeHVYSFJjSWtsamIyNXpYQ0k2SURCY2JuMDdYRzVjYmx4dUx5OGdibThnWTJoMWJtc2diMjRnWkdWdFlXNWtJR3h2WVdScGJtZGNibHh1THk4Z2JtOGdjSEpsWm1WMFkyaHBibWRjYmx4dUx5OGdibThnY0hKbGJHOWhaR1ZrWEc1Y2JuWmhjaUJqZFhKeVpXNTBWWEJrWVhSbFpFMXZaSFZzWlhOTWFYTjBPMXh1ZG1GeUlIZGhhWFJwYm1kVmNHUmhkR1ZTWlhOdmJIWmxjeUE5SUh0OU8xeHVablZ1WTNScGIyNGdiRzloWkZWd1pHRjBaVU5vZFc1cktHTm9kVzVyU1dRcElIdGNibHgwY21WMGRYSnVJRzVsZHlCUWNtOXRhWE5sS0NoeVpYTnZiSFpsTENCeVpXcGxZM1FwSUQwK0lIdGNibHgwWEhSM1lXbDBhVzVuVlhCa1lYUmxVbVZ6YjJ4MlpYTmJZMmgxYm10SlpGMGdQU0J5WlhOdmJIWmxPMXh1WEhSY2RDOHZJSE4wWVhKMElIVndaR0YwWlNCamFIVnVheUJzYjJGa2FXNW5YRzVjZEZ4MGRtRnlJSFZ5YkNBOUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjQ0FySUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWFIVW9ZMmgxYm10SlpDazdYRzVjZEZ4MEx5OGdZM0psWVhSbElHVnljbTl5SUdKbFptOXlaU0J6ZEdGamF5QjFibmR2ZFc1a0lIUnZJR2RsZENCMWMyVm1kV3dnYzNSaFkydDBjbUZqWlNCc1lYUmxjbHh1WEhSY2RIWmhjaUJsY25KdmNpQTlJRzVsZHlCRmNuSnZjaWdwTzF4dVhIUmNkSFpoY2lCc2IyRmthVzVuUlc1a1pXUWdQU0FvWlhabGJuUXBJRDArSUh0Y2JseDBYSFJjZEdsbUtIZGhhWFJwYm1kVmNHUmhkR1ZTWlhOdmJIWmxjMXRqYUhWdWEwbGtYU2tnZTF4dVhIUmNkRngwWEhSM1lXbDBhVzVuVlhCa1lYUmxVbVZ6YjJ4MlpYTmJZMmgxYm10SlpGMGdQU0IxYm1SbFptbHVaV1JjYmx4MFhIUmNkRngwZG1GeUlHVnljbTl5Vkhsd1pTQTlJR1YyWlc1MElDWW1JQ2hsZG1WdWRDNTBlWEJsSUQwOVBTQW5iRzloWkNjZ1B5QW5iV2x6YzJsdVp5Y2dPaUJsZG1WdWRDNTBlWEJsS1R0Y2JseDBYSFJjZEZ4MGRtRnlJSEpsWVd4VGNtTWdQU0JsZG1WdWRDQW1KaUJsZG1WdWRDNTBZWEpuWlhRZ0ppWWdaWFpsYm5RdWRHRnlaMlYwTG5OeVl6dGNibHgwWEhSY2RGeDBaWEp5YjNJdWJXVnpjMkZuWlNBOUlDZE1iMkZrYVc1bklHaHZkQ0IxY0dSaGRHVWdZMmgxYm1zZ0p5QXJJR05vZFc1clNXUWdLeUFuSUdaaGFXeGxaQzVjWEc0b0p5QXJJR1Z5Y205eVZIbHdaU0FySUNjNklDY2dLeUJ5WldGc1UzSmpJQ3NnSnlrbk8xeHVYSFJjZEZ4MFhIUmxjbkp2Y2k1dVlXMWxJRDBnSjBOb2RXNXJURzloWkVWeWNtOXlKenRjYmx4MFhIUmNkRngwWlhKeWIzSXVkSGx3WlNBOUlHVnljbTl5Vkhsd1pUdGNibHgwWEhSY2RGeDBaWEp5YjNJdWNtVnhkV1Z6ZENBOUlISmxZV3hUY21NN1hHNWNkRngwWEhSY2RISmxhbVZqZENobGNuSnZjaWs3WEc1Y2RGeDBYSFI5WEc1Y2RGeDBmVHRjYmx4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbXdvZFhKc0xDQnNiMkZrYVc1blJXNWtaV1FwTzF4dVhIUjlLVHRjYm4xY2JseHVjMlZzWmx0Y0luZGxZbkJoWTJ0SWIzUlZjR1JoZEdWSlkyOXVjMXdpWFNBOUlDaGphSFZ1YTBsa0xDQnRiM0psVFc5a2RXeGxjeXdnY25WdWRHbHRaU2tnUFQ0Z2UxeHVYSFJtYjNJb2RtRnlJRzF2WkhWc1pVbGtJR2x1SUcxdmNtVk5iMlIxYkdWektTQjdYRzVjZEZ4MGFXWW9YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0cxdmNtVk5iMlIxYkdWekxDQnRiMlIxYkdWSlpDa3BJSHRjYmx4MFhIUmNkR04xY25KbGJuUlZjR1JoZEdWYmJXOWtkV3hsU1dSZElEMGdiVzl5WlUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTzF4dVhIUmNkRngwYVdZb1kzVnljbVZ1ZEZWd1pHRjBaV1JOYjJSMWJHVnpUR2x6ZENrZ1kzVnljbVZ1ZEZWd1pHRjBaV1JOYjJSMWJHVnpUR2x6ZEM1d2RYTm9LRzF2WkhWc1pVbGtLVHRjYmx4MFhIUjlYRzVjZEgxY2JseDBhV1lvY25WdWRHbHRaU2tnWTNWeWNtVnVkRlZ3WkdGMFpWSjFiblJwYldVdWNIVnphQ2h5ZFc1MGFXMWxLVHRjYmx4MGFXWW9kMkZwZEdsdVoxVndaR0YwWlZKbGMyOXNkbVZ6VzJOb2RXNXJTV1JkS1NCN1hHNWNkRngwZDJGcGRHbHVaMVZ3WkdGMFpWSmxjMjlzZG1WelcyTm9kVzVyU1dSZEtDazdYRzVjZEZ4MGQyRnBkR2x1WjFWd1pHRjBaVkpsYzI5c2RtVnpXMk5vZFc1clNXUmRJRDBnZFc1a1pXWnBibVZrTzF4dVhIUjlYRzU5TzF4dVhHNTJZWElnWTNWeWNtVnVkRlZ3WkdGMFpVTm9kVzVyY3p0Y2JuWmhjaUJqZFhKeVpXNTBWWEJrWVhSbE8xeHVkbUZ5SUdOMWNuSmxiblJWY0dSaGRHVlNaVzF2ZG1Wa1EyaDFibXR6TzF4dWRtRnlJR04xY25KbGJuUlZjR1JoZEdWU2RXNTBhVzFsTzF4dVpuVnVZM1JwYjI0Z1lYQndiSGxJWVc1a2JHVnlLRzl3ZEdsdmJuTXBJSHRjYmx4MGFXWWdLRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WmlrZ1pHVnNaWFJsSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVppNXFjMjl1Y0VodGNqdGNibHgwWTNWeWNtVnVkRlZ3WkdGMFpVTm9kVzVyY3lBOUlIVnVaR1ZtYVc1bFpEdGNibHgwWm5WdVkzUnBiMjRnWjJWMFFXWm1aV04wWldSTmIyUjFiR1ZGWm1abFkzUnpLSFZ3WkdGMFpVMXZaSFZzWlVsa0tTQjdYRzVjZEZ4MGRtRnlJRzkxZEdSaGRHVmtUVzlrZFd4bGN5QTlJRnQxY0dSaGRHVk5iMlIxYkdWSlpGMDdYRzVjZEZ4MGRtRnlJRzkxZEdSaGRHVmtSR1Z3Wlc1a1pXNWphV1Z6SUQwZ2UzMDdYRzVjYmx4MFhIUjJZWElnY1hWbGRXVWdQU0J2ZFhSa1lYUmxaRTF2WkhWc1pYTXViV0Z3S0daMWJtTjBhVzl1SUNocFpDa2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlIdGNibHgwWEhSY2RGeDBZMmhoYVc0NklGdHBaRjBzWEc1Y2RGeDBYSFJjZEdsa09pQnBaRnh1WEhSY2RGeDBmVHRjYmx4MFhIUjlLVHRjYmx4MFhIUjNhR2xzWlNBb2NYVmxkV1V1YkdWdVozUm9JRDRnTUNrZ2UxeHVYSFJjZEZ4MGRtRnlJSEYxWlhWbFNYUmxiU0E5SUhGMVpYVmxMbkJ2Y0NncE8xeHVYSFJjZEZ4MGRtRnlJRzF2WkhWc1pVbGtJRDBnY1hWbGRXVkpkR1Z0TG1sa08xeHVYSFJjZEZ4MGRtRnlJR05vWVdsdUlEMGdjWFZsZFdWSmRHVnRMbU5vWVdsdU8xeHVYSFJjZEZ4MGRtRnlJRzF2WkhWc1pTQTlJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WTF0dGIyUjFiR1ZKWkYwN1hHNWNkRngwWEhScFppQW9YRzVjZEZ4MFhIUmNkQ0Z0YjJSMWJHVWdmSHhjYmx4MFhIUmNkRngwS0cxdlpIVnNaUzVvYjNRdVgzTmxiR1pCWTJObGNIUmxaQ0FtSmlBaGJXOWtkV3hsTG1odmRDNWZjMlZzWmtsdWRtRnNhV1JoZEdWa0tWeHVYSFJjZEZ4MEtWeHVYSFJjZEZ4MFhIUmpiMjUwYVc1MVpUdGNibHgwWEhSY2RHbG1JQ2h0YjJSMWJHVXVhRzkwTGw5elpXeG1SR1ZqYkdsdVpXUXBJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJSHRjYmx4MFhIUmNkRngwWEhSMGVYQmxPaUJjSW5ObGJHWXRaR1ZqYkdsdVpXUmNJaXhjYmx4MFhIUmNkRngwWEhSamFHRnBiam9nWTJoaGFXNHNYRzVjZEZ4MFhIUmNkRngwYlc5a2RXeGxTV1E2SUcxdlpIVnNaVWxrWEc1Y2RGeDBYSFJjZEgwN1hHNWNkRngwWEhSOVhHNWNkRngwWEhScFppQW9iVzlrZFd4bExtaHZkQzVmYldGcGJpa2dlMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdlMXh1WEhSY2RGeDBYSFJjZEhSNWNHVTZJRndpZFc1aFkyTmxjSFJsWkZ3aUxGeHVYSFJjZEZ4MFhIUmNkR05vWVdsdU9pQmphR0ZwYml4Y2JseDBYSFJjZEZ4MFhIUnRiMlIxYkdWSlpEb2diVzlrZFd4bFNXUmNibHgwWEhSY2RGeDBmVHRjYmx4MFhIUmNkSDFjYmx4MFhIUmNkR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYlc5a2RXeGxMbkJoY21WdWRITXViR1Z1WjNSb095QnBLeXNwSUh0Y2JseDBYSFJjZEZ4MGRtRnlJSEJoY21WdWRFbGtJRDBnYlc5a2RXeGxMbkJoY21WdWRITmJhVjA3WEc1Y2RGeDBYSFJjZEhaaGNpQndZWEpsYm5RZ1BTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU5iY0dGeVpXNTBTV1JkTzF4dVhIUmNkRngwWEhScFppQW9JWEJoY21WdWRDa2dZMjl1ZEdsdWRXVTdYRzVjZEZ4MFhIUmNkR2xtSUNod1lYSmxiblF1YUc5MExsOWtaV05zYVc1bFpFUmxjR1Z1WkdWdVkybGxjMXR0YjJSMWJHVkpaRjBwSUh0Y2JseDBYSFJjZEZ4MFhIUnlaWFIxY200Z2UxeHVYSFJjZEZ4MFhIUmNkRngwZEhsd1pUb2dYQ0prWldOc2FXNWxaRndpTEZ4dVhIUmNkRngwWEhSY2RGeDBZMmhoYVc0NklHTm9ZV2x1TG1OdmJtTmhkQ2hiY0dGeVpXNTBTV1JkS1N4Y2JseDBYSFJjZEZ4MFhIUmNkRzF2WkhWc1pVbGtPaUJ0YjJSMWJHVkpaQ3hjYmx4MFhIUmNkRngwWEhSY2RIQmhjbVZ1ZEVsa09pQndZWEpsYm5SSlpGeHVYSFJjZEZ4MFhIUmNkSDA3WEc1Y2RGeDBYSFJjZEgxY2JseDBYSFJjZEZ4MGFXWWdLRzkxZEdSaGRHVmtUVzlrZFd4bGN5NXBibVJsZUU5bUtIQmhjbVZ1ZEVsa0tTQWhQVDBnTFRFcElHTnZiblJwYm5WbE8xeHVYSFJjZEZ4MFhIUnBaaUFvY0dGeVpXNTBMbWh2ZEM1ZllXTmpaWEIwWldSRVpYQmxibVJsYm1OcFpYTmJiVzlrZFd4bFNXUmRLU0I3WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLQ0Z2ZFhSa1lYUmxaRVJsY0dWdVpHVnVZMmxsYzF0d1lYSmxiblJKWkYwcFhHNWNkRngwWEhSY2RGeDBYSFJ2ZFhSa1lYUmxaRVJsY0dWdVpHVnVZMmxsYzF0d1lYSmxiblJKWkYwZ1BTQmJYVHRjYmx4MFhIUmNkRngwWEhSaFpHUkJiR3hVYjFObGRDaHZkWFJrWVhSbFpFUmxjR1Z1WkdWdVkybGxjMXR3WVhKbGJuUkpaRjBzSUZ0dGIyUjFiR1ZKWkYwcE8xeHVYSFJjZEZ4MFhIUmNkR052Ym5ScGJuVmxPMXh1WEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFJjZEdSbGJHVjBaU0J2ZFhSa1lYUmxaRVJsY0dWdVpHVnVZMmxsYzF0d1lYSmxiblJKWkYwN1hHNWNkRngwWEhSY2RHOTFkR1JoZEdWa1RXOWtkV3hsY3k1d2RYTm9LSEJoY21WdWRFbGtLVHRjYmx4MFhIUmNkRngwY1hWbGRXVXVjSFZ6YUNoN1hHNWNkRngwWEhSY2RGeDBZMmhoYVc0NklHTm9ZV2x1TG1OdmJtTmhkQ2hiY0dGeVpXNTBTV1JkS1N4Y2JseDBYSFJjZEZ4MFhIUnBaRG9nY0dGeVpXNTBTV1JjYmx4MFhIUmNkRngwZlNrN1hHNWNkRngwWEhSOVhHNWNkRngwZlZ4dVhHNWNkRngwY21WMGRYSnVJSHRjYmx4MFhIUmNkSFI1Y0dVNklGd2lZV05qWlhCMFpXUmNJaXhjYmx4MFhIUmNkRzF2WkhWc1pVbGtPaUIxY0dSaGRHVk5iMlIxYkdWSlpDeGNibHgwWEhSY2RHOTFkR1JoZEdWa1RXOWtkV3hsY3pvZ2IzVjBaR0YwWldSTmIyUjFiR1Z6TEZ4dVhIUmNkRngwYjNWMFpHRjBaV1JFWlhCbGJtUmxibU5wWlhNNklHOTFkR1JoZEdWa1JHVndaVzVrWlc1amFXVnpYRzVjZEZ4MGZUdGNibHgwZlZ4dVhHNWNkR1oxYm1OMGFXOXVJR0ZrWkVGc2JGUnZVMlYwS0dFc0lHSXBJSHRjYmx4MFhIUm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR0l1YkdWdVozUm9PeUJwS3lzcElIdGNibHgwWEhSY2RIWmhjaUJwZEdWdElEMGdZbHRwWFR0Y2JseDBYSFJjZEdsbUlDaGhMbWx1WkdWNFQyWW9hWFJsYlNrZ1BUMDlJQzB4S1NCaExuQjFjMmdvYVhSbGJTazdYRzVjZEZ4MGZWeHVYSFI5WEc1Y2JseDBMeThnWVhRZ1ltVm5hVzRnWVd4c0lIVndaR0YwWlhNZ2JXOWtkV3hsY3lCaGNtVWdiM1YwWkdGMFpXUmNibHgwTHk4Z2RHaGxJRndpYjNWMFpHRjBaV1JjSWlCemRHRjBkWE1nWTJGdUlIQnliM0JoWjJGMFpTQjBieUJ3WVhKbGJuUnpJR2xtSUhSb1pYa2daRzl1SjNRZ1lXTmpaWEIwSUhSb1pTQmphR2xzWkhKbGJseHVYSFIyWVhJZ2IzVjBaR0YwWldSRVpYQmxibVJsYm1OcFpYTWdQU0I3ZlR0Y2JseDBkbUZ5SUc5MWRHUmhkR1ZrVFc5a2RXeGxjeUE5SUZ0ZE8xeHVYSFIyWVhJZ1lYQndiR2xsWkZWd1pHRjBaU0E5SUh0OU8xeHVYRzVjZEhaaGNpQjNZWEp1Vlc1bGVIQmxZM1JsWkZKbGNYVnBjbVVnUFNCbWRXNWpkR2x2YmlCM1lYSnVWVzVsZUhCbFkzUmxaRkpsY1hWcGNtVW9iVzlrZFd4bEtTQjdYRzVjZEZ4MFkyOXVjMjlzWlM1M1lYSnVLRnh1WEhSY2RGeDBYQ0piU0UxU1hTQjFibVY0Y0dWamRHVmtJSEpsY1hWcGNtVW9YQ0lnS3lCdGIyUjFiR1V1YVdRZ0t5QmNJaWtnZEc4Z1pHbHpjRzl6WldRZ2JXOWtkV3hsWENKY2JseDBYSFFwTzF4dVhIUjlPMXh1WEc1Y2RHWnZjaUFvZG1GeUlHMXZaSFZzWlVsa0lHbHVJR04xY25KbGJuUlZjR1JoZEdVcElIdGNibHgwWEhScFppQW9YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dOMWNuSmxiblJWY0dSaGRHVXNJRzF2WkhWc1pVbGtLU2tnZTF4dVhIUmNkRngwZG1GeUlHNWxkMDF2WkhWc1pVWmhZM1J2Y25rZ1BTQmpkWEp5Wlc1MFZYQmtZWFJsVzIxdlpIVnNaVWxrWFR0Y2JseDBYSFJjZEM4cUtpQkFkSGx3WlNCN1ZFOUVUMzBnS2k5Y2JseDBYSFJjZEhaaGNpQnlaWE4xYkhRN1hHNWNkRngwWEhScFppQW9ibVYzVFc5a2RXeGxSbUZqZEc5eWVTa2dlMXh1WEhSY2RGeDBYSFJ5WlhOMWJIUWdQU0JuWlhSQlptWmxZM1JsWkUxdlpIVnNaVVZtWm1WamRITW9iVzlrZFd4bFNXUXBPMXh1WEhSY2RGeDBmU0JsYkhObElIdGNibHgwWEhSY2RGeDBjbVZ6ZFd4MElEMGdlMXh1WEhSY2RGeDBYSFJjZEhSNWNHVTZJRndpWkdsemNHOXpaV1JjSWl4Y2JseDBYSFJjZEZ4MFhIUnRiMlIxYkdWSlpEb2diVzlrZFd4bFNXUmNibHgwWEhSY2RGeDBmVHRjYmx4MFhIUmNkSDFjYmx4MFhIUmNkQzhxS2lCQWRIbHdaU0I3UlhKeWIzSjhabUZzYzJWOUlDb3ZYRzVjZEZ4MFhIUjJZWElnWVdKdmNuUkZjbkp2Y2lBOUlHWmhiSE5sTzF4dVhIUmNkRngwZG1GeUlHUnZRWEJ3YkhrZ1BTQm1ZV3h6WlR0Y2JseDBYSFJjZEhaaGNpQmtiMFJwYzNCdmMyVWdQU0JtWVd4elpUdGNibHgwWEhSY2RIWmhjaUJqYUdGcGJrbHVabThnUFNCY0lsd2lPMXh1WEhSY2RGeDBhV1lnS0hKbGMzVnNkQzVqYUdGcGJpa2dlMXh1WEhSY2RGeDBYSFJqYUdGcGJrbHVabThnUFNCY0lseGNibFZ3WkdGMFpTQndjbTl3WVdkaGRHbHZiam9nWENJZ0t5QnlaWE4xYkhRdVkyaGhhVzR1YW05cGJpaGNJaUF0UGlCY0lpazdYRzVjZEZ4MFhIUjlYRzVjZEZ4MFhIUnpkMmwwWTJnZ0tISmxjM1ZzZEM1MGVYQmxLU0I3WEc1Y2RGeDBYSFJjZEdOaGMyVWdYQ0p6Wld4bUxXUmxZMnhwYm1Wa1hDSTZYRzVjZEZ4MFhIUmNkRngwYVdZZ0tHOXdkR2x2Ym5NdWIyNUVaV05zYVc1bFpDa2diM0IwYVc5dWN5NXZia1JsWTJ4cGJtVmtLSEpsYzNWc2RDazdYRzVjZEZ4MFhIUmNkRngwYVdZZ0tDRnZjSFJwYjI1ekxtbG5ibTl5WlVSbFkyeHBibVZrS1Z4dVhIUmNkRngwWEhSY2RGeDBZV0p2Y25SRmNuSnZjaUE5SUc1bGR5QkZjbkp2Y2loY2JseDBYSFJjZEZ4MFhIUmNkRngwWENKQlltOXlkR1ZrSUdKbFkyRjFjMlVnYjJZZ2MyVnNaaUJrWldOc2FXNWxPaUJjSWlBclhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MGNtVnpkV3gwTG0xdlpIVnNaVWxrSUN0Y2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSamFHRnBia2x1Wm05Y2JseDBYSFJjZEZ4MFhIUmNkQ2s3WEc1Y2RGeDBYSFJjZEZ4MFluSmxZV3M3WEc1Y2RGeDBYSFJjZEdOaGMyVWdYQ0prWldOc2FXNWxaRndpT2x4dVhIUmNkRngwWEhSY2RHbG1JQ2h2Y0hScGIyNXpMbTl1UkdWamJHbHVaV1FwSUc5d2RHbHZibk11YjI1RVpXTnNhVzVsWkNoeVpYTjFiSFFwTzF4dVhIUmNkRngwWEhSY2RHbG1JQ2doYjNCMGFXOXVjeTVwWjI1dmNtVkVaV05zYVc1bFpDbGNibHgwWEhSY2RGeDBYSFJjZEdGaWIzSjBSWEp5YjNJZ1BTQnVaWGNnUlhKeWIzSW9YRzVjZEZ4MFhIUmNkRngwWEhSY2RGd2lRV0p2Y25SbFpDQmlaV05oZFhObElHOW1JR1JsWTJ4cGJtVmtJR1JsY0dWdVpHVnVZM2s2SUZ3aUlDdGNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUnlaWE4xYkhRdWJXOWtkV3hsU1dRZ0sxeHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGd2lJR2x1SUZ3aUlDdGNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUnlaWE4xYkhRdWNHRnlaVzUwU1dRZ0sxeHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RHTm9ZV2x1U1c1bWIxeHVYSFJjZEZ4MFhIUmNkRngwS1R0Y2JseDBYSFJjZEZ4MFhIUmljbVZoYXp0Y2JseDBYSFJjZEZ4MFkyRnpaU0JjSW5WdVlXTmpaWEIwWldSY0lqcGNibHgwWEhSY2RGeDBYSFJwWmlBb2IzQjBhVzl1Y3k1dmJsVnVZV05qWlhCMFpXUXBJRzl3ZEdsdmJuTXViMjVWYm1GalkyVndkR1ZrS0hKbGMzVnNkQ2s3WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLQ0Z2Y0hScGIyNXpMbWxuYm05eVpWVnVZV05qWlhCMFpXUXBYRzVjZEZ4MFhIUmNkRngwWEhSaFltOXlkRVZ5Y205eUlEMGdibVYzSUVWeWNtOXlLRnh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNJa0ZpYjNKMFpXUWdZbVZqWVhWelpTQmNJaUFySUcxdlpIVnNaVWxrSUNzZ1hDSWdhWE1nYm05MElHRmpZMlZ3ZEdWa1hDSWdLeUJqYUdGcGJrbHVabTljYmx4MFhIUmNkRngwWEhSY2RDazdYRzVjZEZ4MFhIUmNkRngwWW5KbFlXczdYRzVjZEZ4MFhIUmNkR05oYzJVZ1hDSmhZMk5sY0hSbFpGd2lPbHh1WEhSY2RGeDBYSFJjZEdsbUlDaHZjSFJwYjI1ekxtOXVRV05qWlhCMFpXUXBJRzl3ZEdsdmJuTXViMjVCWTJObGNIUmxaQ2h5WlhOMWJIUXBPMXh1WEhSY2RGeDBYSFJjZEdSdlFYQndiSGtnUFNCMGNuVmxPMXh1WEhSY2RGeDBYSFJjZEdKeVpXRnJPMXh1WEhSY2RGeDBYSFJqWVhObElGd2laR2x6Y0c5elpXUmNJanBjYmx4MFhIUmNkRngwWEhScFppQW9iM0IwYVc5dWN5NXZia1JwYzNCdmMyVmtLU0J2Y0hScGIyNXpMbTl1UkdsemNHOXpaV1FvY21WemRXeDBLVHRjYmx4MFhIUmNkRngwWEhSa2IwUnBjM0J2YzJVZ1BTQjBjblZsTzF4dVhIUmNkRngwWEhSY2RHSnlaV0ZyTzF4dVhIUmNkRngwWEhSa1pXWmhkV3gwT2x4dVhIUmNkRngwWEhSY2RIUm9jbTkzSUc1bGR5QkZjbkp2Y2loY0lsVnVaWGhqWlhCMGFXOXVJSFI1Y0dVZ1hDSWdLeUJ5WlhOMWJIUXVkSGx3WlNrN1hHNWNkRngwWEhSOVhHNWNkRngwWEhScFppQW9ZV0p2Y25SRmNuSnZjaWtnZTF4dVhIUmNkRngwWEhSeVpYUjFjbTRnZTF4dVhIUmNkRngwWEhSY2RHVnljbTl5T2lCaFltOXlkRVZ5Y205eVhHNWNkRngwWEhSY2RIMDdYRzVjZEZ4MFhIUjlYRzVjZEZ4MFhIUnBaaUFvWkc5QmNIQnNlU2tnZTF4dVhIUmNkRngwWEhSaGNIQnNhV1ZrVlhCa1lYUmxXMjF2WkhWc1pVbGtYU0E5SUc1bGQwMXZaSFZzWlVaaFkzUnZjbms3WEc1Y2RGeDBYSFJjZEdGa1pFRnNiRlJ2VTJWMEtHOTFkR1JoZEdWa1RXOWtkV3hsY3l3Z2NtVnpkV3gwTG05MWRHUmhkR1ZrVFc5a2RXeGxjeWs3WEc1Y2RGeDBYSFJjZEdadmNpQW9iVzlrZFd4bFNXUWdhVzRnY21WemRXeDBMbTkxZEdSaGRHVmtSR1Z3Wlc1a1pXNWphV1Z6S1NCN1hHNWNkRngwWEhSY2RGeDBhV1lnS0Y5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5aHlaWE4xYkhRdWIzVjBaR0YwWldSRVpYQmxibVJsYm1OcFpYTXNJRzF2WkhWc1pVbGtLU2tnZTF4dVhIUmNkRngwWEhSY2RGeDBhV1lnS0NGdmRYUmtZWFJsWkVSbGNHVnVaR1Z1WTJsbGMxdHRiMlIxYkdWSlpGMHBYRzVjZEZ4MFhIUmNkRngwWEhSY2RHOTFkR1JoZEdWa1JHVndaVzVrWlc1amFXVnpXMjF2WkhWc1pVbGtYU0E5SUZ0ZE8xeHVYSFJjZEZ4MFhIUmNkRngwWVdSa1FXeHNWRzlUWlhRb1hHNWNkRngwWEhSY2RGeDBYSFJjZEc5MWRHUmhkR1ZrUkdWd1pXNWtaVzVqYVdWelcyMXZaSFZzWlVsa1hTeGNibHgwWEhSY2RGeDBYSFJjZEZ4MGNtVnpkV3gwTG05MWRHUmhkR1ZrUkdWd1pXNWtaVzVqYVdWelcyMXZaSFZzWlVsa1hWeHVYSFJjZEZ4MFhIUmNkRngwS1R0Y2JseDBYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkSDFjYmx4MFhIUmNkR2xtSUNoa2IwUnBjM0J2YzJVcElIdGNibHgwWEhSY2RGeDBZV1JrUVd4c1ZHOVRaWFFvYjNWMFpHRjBaV1JOYjJSMWJHVnpMQ0JiY21WemRXeDBMbTF2WkhWc1pVbGtYU2s3WEc1Y2RGeDBYSFJjZEdGd2NHeHBaV1JWY0dSaGRHVmJiVzlrZFd4bFNXUmRJRDBnZDJGeWJsVnVaWGh3WldOMFpXUlNaWEYxYVhKbE8xeHVYSFJjZEZ4MGZWeHVYSFJjZEgxY2JseDBmVnh1WEhSamRYSnlaVzUwVlhCa1lYUmxJRDBnZFc1a1pXWnBibVZrTzF4dVhHNWNkQzh2SUZOMGIzSmxJSE5sYkdZZ1lXTmpaWEIwWldRZ2IzVjBaR0YwWldRZ2JXOWtkV3hsY3lCMGJ5QnlaWEYxYVhKbElIUm9aVzBnYkdGMFpYSWdZbmtnZEdobElHMXZaSFZzWlNCemVYTjBaVzFjYmx4MGRtRnlJRzkxZEdSaGRHVmtVMlZzWmtGalkyVndkR1ZrVFc5a2RXeGxjeUE5SUZ0ZE8xeHVYSFJtYjNJZ0tIWmhjaUJxSUQwZ01Ec2dhaUE4SUc5MWRHUmhkR1ZrVFc5a2RXeGxjeTVzWlc1bmRHZzdJR29yS3lrZ2UxeHVYSFJjZEhaaGNpQnZkWFJrWVhSbFpFMXZaSFZzWlVsa0lEMGdiM1YwWkdGMFpXUk5iMlIxYkdWelcycGRPMXh1WEhSY2RHbG1JQ2hjYmx4MFhIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WTF0dmRYUmtZWFJsWkUxdlpIVnNaVWxrWFNBbUpseHVYSFJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpXMjkxZEdSaGRHVmtUVzlrZFd4bFNXUmRMbWh2ZEM1ZmMyVnNaa0ZqWTJWd2RHVmtJQ1ltWEc1Y2RGeDBYSFF2THlCeVpXMXZkbVZrSUhObGJHWXRZV05qWlhCMFpXUWdiVzlrZFd4bGN5QnphRzkxYkdRZ2JtOTBJR0psSUhKbGNYVnBjbVZrWEc1Y2RGeDBYSFJoY0hCc2FXVmtWWEJrWVhSbFcyOTFkR1JoZEdWa1RXOWtkV3hsU1dSZElDRTlQU0IzWVhKdVZXNWxlSEJsWTNSbFpGSmxjWFZwY21VZ0ppWmNibHgwWEhSY2RDOHZJSGRvWlc0Z1kyRnNiR1ZrSUdsdWRtRnNhV1JoZEdVZ2MyVnNaaTFoWTJObGNIUnBibWNnYVhNZ2JtOTBJSEJ2YzNOcFlteGxYRzVjZEZ4MFhIUWhYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVqVzI5MWRHUmhkR1ZrVFc5a2RXeGxTV1JkTG1odmRDNWZjMlZzWmtsdWRtRnNhV1JoZEdWa1hHNWNkRngwS1NCN1hHNWNkRngwWEhSdmRYUmtZWFJsWkZObGJHWkJZMk5sY0hSbFpFMXZaSFZzWlhNdWNIVnphQ2g3WEc1Y2RGeDBYSFJjZEcxdlpIVnNaVG9nYjNWMFpHRjBaV1JOYjJSMWJHVkpaQ3hjYmx4MFhIUmNkRngwY21WeGRXbHlaVG9nWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1alcyOTFkR1JoZEdWa1RXOWtkV3hsU1dSZExtaHZkQzVmY21WeGRXbHlaVk5sYkdZc1hHNWNkRngwWEhSY2RHVnljbTl5U0dGdVpHeGxjam9nWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1alcyOTFkR1JoZEdWa1RXOWtkV3hsU1dSZExtaHZkQzVmYzJWc1prRmpZMlZ3ZEdWa1hHNWNkRngwWEhSOUtUdGNibHgwWEhSOVhHNWNkSDFjYmx4dVhIUjJZWElnYlc5a2RXeGxUM1YwWkdGMFpXUkVaWEJsYm1SbGJtTnBaWE03WEc1Y2JseDBjbVYwZFhKdUlIdGNibHgwWEhSa2FYTndiM05sT2lCbWRXNWpkR2x2YmlBb0tTQjdYRzVjZEZ4MFhIUmpkWEp5Wlc1MFZYQmtZWFJsVW1WdGIzWmxaRU5vZFc1cmN5NW1iM0pGWVdOb0tHWjFibU4wYVc5dUlDaGphSFZ1YTBsa0tTQjdYRzVjZEZ4MFhIUmNkR1JsYkdWMFpTQnBibk4wWVd4c1pXUkRhSFZ1YTNOYlkyaDFibXRKWkYwN1hHNWNkRngwWEhSOUtUdGNibHgwWEhSY2RHTjFjbkpsYm5SVmNHUmhkR1ZTWlcxdmRtVmtRMmgxYm10eklEMGdkVzVrWldacGJtVmtPMXh1WEc1Y2RGeDBYSFIyWVhJZ2FXUjRPMXh1WEhSY2RGeDBkbUZ5SUhGMVpYVmxJRDBnYjNWMFpHRjBaV1JOYjJSMWJHVnpMbk5zYVdObEtDazdYRzVjZEZ4MFhIUjNhR2xzWlNBb2NYVmxkV1V1YkdWdVozUm9JRDRnTUNrZ2UxeHVYSFJjZEZ4MFhIUjJZWElnYlc5a2RXeGxTV1FnUFNCeGRXVjFaUzV3YjNBb0tUdGNibHgwWEhSY2RGeDBkbUZ5SUcxdlpIVnNaU0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVkxdHRiMlIxYkdWSlpGMDdYRzVjZEZ4MFhIUmNkR2xtSUNnaGJXOWtkV3hsS1NCamIyNTBhVzUxWlR0Y2JseHVYSFJjZEZ4MFhIUjJZWElnWkdGMFlTQTlJSHQ5TzF4dVhHNWNkRngwWEhSY2RDOHZJRU5oYkd3Z1pHbHpjRzl6WlNCb1lXNWtiR1Z5YzF4dVhIUmNkRngwWEhSMllYSWdaR2x6Y0c5elpVaGhibVJzWlhKeklEMGdiVzlrZFd4bExtaHZkQzVmWkdsemNHOXpaVWhoYm1Sc1pYSnpPMXh1WEhSY2RGeDBYSFJtYjNJZ0tHb2dQU0F3T3lCcUlEd2daR2x6Y0c5elpVaGhibVJzWlhKekxteGxibWQwYURzZ2Fpc3JLU0I3WEc1Y2RGeDBYSFJjZEZ4MFpHbHpjRzl6WlVoaGJtUnNaWEp6VzJwZExtTmhiR3dvYm5Wc2JDd2daR0YwWVNrN1hHNWNkRngwWEhSY2RIMWNibHgwWEhSY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVvYlhKRVcyMXZaSFZzWlVsa1hTQTlJR1JoZEdFN1hHNWNibHgwWEhSY2RGeDBMeThnWkdsellXSnNaU0J0YjJSMWJHVWdLSFJvYVhNZ1pHbHpZV0pzWlhNZ2NtVnhkV2x5WlhNZ1puSnZiU0IwYUdseklHMXZaSFZzWlNsY2JseDBYSFJjZEZ4MGJXOWtkV3hsTG1odmRDNWhZM1JwZG1VZ1BTQm1ZV3h6WlR0Y2JseHVYSFJjZEZ4MFhIUXZMeUJ5WlcxdmRtVWdiVzlrZFd4bElHWnliMjBnWTJGamFHVmNibHgwWEhSY2RGeDBaR1ZzWlhSbElGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVZMXR0YjJSMWJHVkpaRjA3WEc1Y2JseDBYSFJjZEZ4MEx5OGdkMmhsYmlCa2FYTndiM05wYm1jZ2RHaGxjbVVnYVhNZ2JtOGdibVZsWkNCMGJ5QmpZV3hzSUdScGMzQnZjMlVnYUdGdVpHeGxjbHh1WEhSY2RGeDBYSFJrWld4bGRHVWdiM1YwWkdGMFpXUkVaWEJsYm1SbGJtTnBaWE5iYlc5a2RXeGxTV1JkTzF4dVhHNWNkRngwWEhSY2RDOHZJSEpsYlc5MlpTQmNJbkJoY21WdWRITmNJaUJ5WldabGNtVnVZMlZ6SUdaeWIyMGdZV3hzSUdOb2FXeGtjbVZ1WEc1Y2RGeDBYSFJjZEdadmNpQW9haUE5SURBN0lHb2dQQ0J0YjJSMWJHVXVZMmhwYkdSeVpXNHViR1Z1WjNSb095QnFLeXNwSUh0Y2JseDBYSFJjZEZ4MFhIUjJZWElnWTJocGJHUWdQU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1OYmJXOWtkV3hsTG1Ob2FXeGtjbVZ1VzJwZFhUdGNibHgwWEhSY2RGeDBYSFJwWmlBb0lXTm9hV3hrS1NCamIyNTBhVzUxWlR0Y2JseDBYSFJjZEZ4MFhIUnBaSGdnUFNCamFHbHNaQzV3WVhKbGJuUnpMbWx1WkdWNFQyWW9iVzlrZFd4bFNXUXBPMXh1WEhSY2RGeDBYSFJjZEdsbUlDaHBaSGdnUGowZ01Da2dlMXh1WEhSY2RGeDBYSFJjZEZ4MFkyaHBiR1F1Y0dGeVpXNTBjeTV6Y0d4cFkyVW9hV1I0TENBeEtUdGNibHgwWEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFJjZEgxY2JseDBYSFJjZEgxY2JseHVYSFJjZEZ4MEx5OGdjbVZ0YjNabElHOTFkR1JoZEdWa0lHUmxjR1Z1WkdWdVkza2dabkp2YlNCdGIyUjFiR1VnWTJocGJHUnlaVzVjYmx4MFhIUmNkSFpoY2lCa1pYQmxibVJsYm1ONU8xeHVYSFJjZEZ4MFptOXlJQ2gyWVhJZ2IzVjBaR0YwWldSTmIyUjFiR1ZKWkNCcGJpQnZkWFJrWVhSbFpFUmxjR1Z1WkdWdVkybGxjeWtnZTF4dVhIUmNkRngwWEhScFppQW9YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0c5MWRHUmhkR1ZrUkdWd1pXNWtaVzVqYVdWekxDQnZkWFJrWVhSbFpFMXZaSFZzWlVsa0tTa2dlMXh1WEhSY2RGeDBYSFJjZEcxdlpIVnNaU0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVkxdHZkWFJrWVhSbFpFMXZaSFZzWlVsa1hUdGNibHgwWEhSY2RGeDBYSFJwWmlBb2JXOWtkV3hsS1NCN1hHNWNkRngwWEhSY2RGeDBYSFJ0YjJSMWJHVlBkWFJrWVhSbFpFUmxjR1Z1WkdWdVkybGxjeUE5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRzkxZEdSaGRHVmtSR1Z3Wlc1a1pXNWphV1Z6VzI5MWRHUmhkR1ZrVFc5a2RXeGxTV1JkTzF4dVhIUmNkRngwWEhSY2RGeDBabTl5SUNocUlEMGdNRHNnYWlBOElHMXZaSFZzWlU5MWRHUmhkR1ZrUkdWd1pXNWtaVzVqYVdWekxteGxibWQwYURzZ2Fpc3JLU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkR1JsY0dWdVpHVnVZM2tnUFNCdGIyUjFiR1ZQZFhSa1lYUmxaRVJsY0dWdVpHVnVZMmxsYzF0cVhUdGNibHgwWEhSY2RGeDBYSFJjZEZ4MGFXUjRJRDBnYlc5a2RXeGxMbU5vYVd4a2NtVnVMbWx1WkdWNFQyWW9aR1Z3Wlc1a1pXNWplU2s3WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkR2xtSUNocFpIZ2dQajBnTUNrZ2JXOWtkV3hsTG1Ob2FXeGtjbVZ1TG5Od2JHbGpaU2hwWkhnc0lERXBPMXh1WEhSY2RGeDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkRngwZlZ4dVhIUmNkRngwZlZ4dVhIUmNkSDBzWEc1Y2RGeDBZWEJ3YkhrNklHWjFibU4wYVc5dUlDaHlaWEJ2Y25SRmNuSnZjaWtnZTF4dVhIUmNkRngwTHk4Z2FXNXpaWEowSUc1bGR5QmpiMlJsWEc1Y2RGeDBYSFJtYjNJZ0tIWmhjaUIxY0dSaGRHVk5iMlIxYkdWSlpDQnBiaUJoY0hCc2FXVmtWWEJrWVhSbEtTQjdYRzVjZEZ4MFhIUmNkR2xtSUNoZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOG9ZWEJ3YkdsbFpGVndaR0YwWlN3Z2RYQmtZWFJsVFc5a2RXeGxTV1FwS1NCN1hHNWNkRngwWEhSY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV0VzNWd1pHRjBaVTF2WkhWc1pVbGtYU0E5SUdGd2NHeHBaV1JWY0dSaGRHVmJkWEJrWVhSbFRXOWtkV3hsU1dSZE8xeHVYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUjlYRzVjYmx4MFhIUmNkQzh2SUhKMWJpQnVaWGNnY25WdWRHbHRaU0J0YjJSMWJHVnpYRzVjZEZ4MFhIUm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR04xY25KbGJuUlZjR1JoZEdWU2RXNTBhVzFsTG14bGJtZDBhRHNnYVNzcktTQjdYRzVjZEZ4MFhIUmNkR04xY25KbGJuUlZjR1JoZEdWU2RXNTBhVzFsVzJsZEtGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHBPMXh1WEhSY2RGeDBmVnh1WEc1Y2RGeDBYSFF2THlCallXeHNJR0ZqWTJWd2RDQm9ZVzVrYkdWeWMxeHVYSFJjZEZ4MFptOXlJQ2gyWVhJZ2IzVjBaR0YwWldSTmIyUjFiR1ZKWkNCcGJpQnZkWFJrWVhSbFpFUmxjR1Z1WkdWdVkybGxjeWtnZTF4dVhIUmNkRngwWEhScFppQW9YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0c5MWRHUmhkR1ZrUkdWd1pXNWtaVzVqYVdWekxDQnZkWFJrWVhSbFpFMXZaSFZzWlVsa0tTa2dlMXh1WEhSY2RGeDBYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU5iYjNWMFpHRjBaV1JOYjJSMWJHVkpaRjA3WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLRzF2WkhWc1pTa2dlMXh1WEhSY2RGeDBYSFJjZEZ4MGJXOWtkV3hsVDNWMFpHRjBaV1JFWlhCbGJtUmxibU5wWlhNZ1BWeHVYSFJjZEZ4MFhIUmNkRngwWEhSdmRYUmtZWFJsWkVSbGNHVnVaR1Z1WTJsbGMxdHZkWFJrWVhSbFpFMXZaSFZzWlVsa1hUdGNibHgwWEhSY2RGeDBYSFJjZEhaaGNpQmpZV3hzWW1GamEzTWdQU0JiWFR0Y2JseDBYSFJjZEZ4MFhIUmNkSFpoY2lCa1pYQmxibVJsYm1OcFpYTkdiM0pEWVd4c1ltRmphM01nUFNCYlhUdGNibHgwWEhSY2RGeDBYSFJjZEdadmNpQW9kbUZ5SUdvZ1BTQXdPeUJxSUR3Z2JXOWtkV3hsVDNWMFpHRjBaV1JFWlhCbGJtUmxibU5wWlhNdWJHVnVaM1JvT3lCcUt5c3BJSHRjYmx4MFhIUmNkRngwWEhSY2RGeDBkbUZ5SUdSbGNHVnVaR1Z1WTNrZ1BTQnRiMlIxYkdWUGRYUmtZWFJsWkVSbGNHVnVaR1Z1WTJsbGMxdHFYVHRjYmx4MFhIUmNkRngwWEhSY2RGeDBkbUZ5SUdGalkyVndkRU5oYkd4aVlXTnJJRDFjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJ0YjJSMWJHVXVhRzkwTGw5aFkyTmxjSFJsWkVSbGNHVnVaR1Z1WTJsbGMxdGtaWEJsYm1SbGJtTjVYVHRjYmx4MFhIUmNkRngwWEhSY2RGeDBhV1lnS0dGalkyVndkRU5oYkd4aVlXTnJLU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwYVdZZ0tHTmhiR3hpWVdOcmN5NXBibVJsZUU5bUtHRmpZMlZ3ZEVOaGJHeGlZV05yS1NBaFBUMGdMVEVwSUdOdmJuUnBiblZsTzF4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEdOaGJHeGlZV05yY3k1d2RYTm9LR0ZqWTJWd2RFTmhiR3hpWVdOcktUdGNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmtaWEJsYm1SbGJtTnBaWE5HYjNKRFlXeHNZbUZqYTNNdWNIVnphQ2hrWlhCbGJtUmxibU41S1R0Y2JseDBYSFJjZEZ4MFhIUmNkRngwZlZ4dVhIUmNkRngwWEhSY2RGeDBmVnh1WEhSY2RGeDBYSFJjZEZ4MFptOXlJQ2gyWVhJZ2F5QTlJREE3SUdzZ1BDQmpZV3hzWW1GamEzTXViR1Z1WjNSb095QnJLeXNwSUh0Y2JseDBYSFJjZEZ4MFhIUmNkRngwZEhKNUlIdGNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmpZV3hzWW1GamEzTmJhMTB1WTJGc2JDaHVkV3hzTENCdGIyUjFiR1ZQZFhSa1lYUmxaRVJsY0dWdVpHVnVZMmxsY3lrN1hHNWNkRngwWEhSY2RGeDBYSFJjZEgwZ1kyRjBZMmdnS0dWeWNpa2dlMXh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkR2xtSUNodmNIUnBiMjV6TG05dVJYSnliM0psWkNrZ2UxeHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBiM0IwYVc5dWN5NXZia1Z5Y205eVpXUW9lMXh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSMGVYQmxPaUJjSW1GalkyVndkQzFsY25KdmNtVmtYQ0lzWEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RHMXZaSFZzWlVsa09pQnZkWFJrWVhSbFpFMXZaSFZzWlVsa0xGeHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJrWlhCbGJtUmxibU41U1dRNklHUmxjR1Z1WkdWdVkybGxjMFp2Y2tOaGJHeGlZV05yYzF0clhTeGNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWlhKeWIzSTZJR1Z5Y2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MGZTazdYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBmVnh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkR2xtSUNnaGIzQjBhVzl1Y3k1cFoyNXZjbVZGY25KdmNtVmtLU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSeVpYQnZjblJGY25KdmNpaGxjbklwTzF4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEgxY2JseDBYSFJjZEZ4MFhIUmNkRngwZlZ4dVhIUmNkRngwWEhSY2RGeDBmVnh1WEhSY2RGeDBYSFJjZEgxY2JseDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MGZWeHVYRzVjZEZ4MFhIUXZMeUJNYjJGa0lITmxiR1lnWVdOalpYQjBaV1FnYlc5a2RXeGxjMXh1WEhSY2RGeDBabTl5SUNoMllYSWdieUE5SURBN0lHOGdQQ0J2ZFhSa1lYUmxaRk5sYkdaQlkyTmxjSFJsWkUxdlpIVnNaWE11YkdWdVozUm9PeUJ2S3lzcElIdGNibHgwWEhSY2RGeDBkbUZ5SUdsMFpXMGdQU0J2ZFhSa1lYUmxaRk5sYkdaQlkyTmxjSFJsWkUxdlpIVnNaWE5iYjEwN1hHNWNkRngwWEhSY2RIWmhjaUJ0YjJSMWJHVkpaQ0E5SUdsMFpXMHViVzlrZFd4bE8xeHVYSFJjZEZ4MFhIUjBjbmtnZTF4dVhIUmNkRngwWEhSY2RHbDBaVzB1Y21WeGRXbHlaU2h0YjJSMWJHVkpaQ2s3WEc1Y2RGeDBYSFJjZEgwZ1kyRjBZMmdnS0dWeWNpa2dlMXh1WEhSY2RGeDBYSFJjZEdsbUlDaDBlWEJsYjJZZ2FYUmxiUzVsY25KdmNraGhibVJzWlhJZ1BUMDlJRndpWm5WdVkzUnBiMjVjSWlrZ2UxeHVYSFJjZEZ4MFhIUmNkRngwZEhKNUlIdGNibHgwWEhSY2RGeDBYSFJjZEZ4MGFYUmxiUzVsY25KdmNraGhibVJzWlhJb1pYSnlLVHRjYmx4MFhIUmNkRngwWEhSY2RIMGdZMkYwWTJnZ0tHVnljaklwSUh0Y2JseDBYSFJjZEZ4MFhIUmNkRngwYVdZZ0tHOXdkR2x2Ym5NdWIyNUZjbkp2Y21Wa0tTQjdYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBiM0IwYVc5dWN5NXZia1Z5Y205eVpXUW9lMXh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwZEhsd1pUb2dYQ0p6Wld4bUxXRmpZMlZ3ZEMxbGNuSnZjaTFvWVc1a2JHVnlMV1Z5Y205eVpXUmNJaXhjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEcxdlpIVnNaVWxrT2lCdGIyUjFiR1ZKWkN4Y2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RHVnljbTl5T2lCbGNuSXlMRnh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwYjNKcFoybHVZV3hGY25KdmNqb2daWEp5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwZlNrN1hHNWNkRngwWEhSY2RGeDBYSFJjZEgxY2JseDBYSFJjZEZ4MFhIUmNkRngwYVdZZ0tDRnZjSFJwYjI1ekxtbG5ibTl5WlVWeWNtOXlaV1FwSUh0Y2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSeVpYQnZjblJGY25KdmNpaGxjbkl5S1R0Y2JseDBYSFJjZEZ4MFhIUmNkRngwZlZ4dVhIUmNkRngwWEhSY2RGeDBYSFJ5WlhCdmNuUkZjbkp2Y2lobGNuSXBPMXh1WEhSY2RGeDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MFhIUmNkSDBnWld4elpTQjdYRzVjZEZ4MFhIUmNkRngwWEhScFppQW9iM0IwYVc5dWN5NXZia1Z5Y205eVpXUXBJSHRjYmx4MFhIUmNkRngwWEhSY2RGeDBiM0IwYVc5dWN5NXZia1Z5Y205eVpXUW9lMXh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkSFI1Y0dVNklGd2ljMlZzWmkxaFkyTmxjSFF0WlhKeWIzSmxaRndpTEZ4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEcxdlpIVnNaVWxrT2lCdGIyUjFiR1ZKWkN4Y2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSbGNuSnZjam9nWlhKeVhHNWNkRngwWEhSY2RGeDBYSFJjZEgwcE8xeHVYSFJjZEZ4MFhIUmNkRngwZlZ4dVhIUmNkRngwWEhSY2RGeDBhV1lnS0NGdmNIUnBiMjV6TG1sbmJtOXlaVVZ5Y205eVpXUXBJSHRjYmx4MFhIUmNkRngwWEhSY2RGeDBjbVZ3YjNKMFJYSnliM0lvWlhKeUtUdGNibHgwWEhSY2RGeDBYSFJjZEgxY2JseDBYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkSDFjYmx4dVhIUmNkRngwY21WMGRYSnVJRzkxZEdSaGRHVmtUVzlrZFd4bGN6dGNibHgwWEhSOVhHNWNkSDA3WEc1OVhHNWZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbWh0Y2trdWFuTnZibkFnUFNCbWRXNWpkR2x2YmlBb2JXOWtkV3hsU1dRc0lHRndjR3g1U0dGdVpHeGxjbk1wSUh0Y2JseDBhV1lnS0NGamRYSnlaVzUwVlhCa1lYUmxLU0I3WEc1Y2RGeDBZM1Z5Y21WdWRGVndaR0YwWlNBOUlIdDlPMXh1WEhSY2RHTjFjbkpsYm5SVmNHUmhkR1ZTZFc1MGFXMWxJRDBnVzEwN1hHNWNkRngwWTNWeWNtVnVkRlZ3WkdGMFpWSmxiVzkyWldSRGFIVnVhM01nUFNCYlhUdGNibHgwWEhSaGNIQnNlVWhoYm1Sc1pYSnpMbkIxYzJnb1lYQndiSGxJWVc1a2JHVnlLVHRjYmx4MGZWeHVYSFJwWmlBb0lWOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhqZFhKeVpXNTBWWEJrWVhSbExDQnRiMlIxYkdWSlpDa3BJSHRjYmx4MFhIUmpkWEp5Wlc1MFZYQmtZWFJsVzIxdlpIVnNaVWxrWFNBOUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViVnR0YjJSMWJHVkpaRjA3WEc1Y2RIMWNibjA3WEc1ZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtaHRja011YW5OdmJuQWdQU0JtZFc1amRHbHZiaUFvWEc1Y2RHTm9kVzVyU1dSekxGeHVYSFJ5WlcxdmRtVmtRMmgxYm10ekxGeHVYSFJ5WlcxdmRtVmtUVzlrZFd4bGN5eGNibHgwY0hKdmJXbHpaWE1zWEc1Y2RHRndjR3g1U0dGdVpHeGxjbk1zWEc1Y2RIVndaR0YwWldSTmIyUjFiR1Z6VEdsemRGeHVLU0I3WEc1Y2RHRndjR3g1U0dGdVpHeGxjbk11Y0hWemFDaGhjSEJzZVVoaGJtUnNaWElwTzF4dVhIUmpkWEp5Wlc1MFZYQmtZWFJsUTJoMWJtdHpJRDBnZTMwN1hHNWNkR04xY25KbGJuUlZjR1JoZEdWU1pXMXZkbVZrUTJoMWJtdHpJRDBnY21WdGIzWmxaRU5vZFc1cmN6dGNibHgwWTNWeWNtVnVkRlZ3WkdGMFpTQTlJSEpsYlc5MlpXUk5iMlIxYkdWekxuSmxaSFZqWlNobWRXNWpkR2x2YmlBb2IySnFMQ0JyWlhrcElIdGNibHgwWEhSdlltcGJhMlY1WFNBOUlHWmhiSE5sTzF4dVhIUmNkSEpsZEhWeWJpQnZZbW83WEc1Y2RIMHNJSHQ5S1R0Y2JseDBZM1Z5Y21WdWRGVndaR0YwWlZKMWJuUnBiV1VnUFNCYlhUdGNibHgwWTJoMWJtdEpaSE11Wm05eVJXRmphQ2htZFc1amRHbHZiaUFvWTJoMWJtdEpaQ2tnZTF4dVhIUmNkR2xtSUNoY2JseDBYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5aHBibk4wWVd4c1pXUkRhSFZ1YTNNc0lHTm9kVzVyU1dRcElDWW1YRzVjZEZ4MFhIUnBibk4wWVd4c1pXUkRhSFZ1YTNOYlkyaDFibXRKWkYwZ0lUMDlJSFZ1WkdWbWFXNWxaRnh1WEhSY2RDa2dlMXh1WEhSY2RGeDBjSEp2YldselpYTXVjSFZ6YUNoc2IyRmtWWEJrWVhSbFEyaDFibXNvWTJoMWJtdEpaQ3dnZFhCa1lYUmxaRTF2WkhWc1pYTk1hWE4wS1NrN1hHNWNkRngwWEhSamRYSnlaVzUwVlhCa1lYUmxRMmgxYm10elcyTm9kVzVyU1dSZElEMGdkSEoxWlR0Y2JseDBYSFI5WEc1Y2RIMHBPMXh1WEhScFppQW9YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVtS1NCN1hHNWNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1bUxtcHpiMjV3U0cxeUlEMGdablZ1WTNScGIyNGdLR05vZFc1clNXUXNJSEJ5YjIxcGMyVnpLU0I3WEc1Y2RGeDBYSFJwWmlBb1hHNWNkRngwWEhSY2RHTjFjbkpsYm5SVmNHUmhkR1ZEYUhWdWEzTWdKaVpjYmx4MFhIUmNkRngwSVY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5aGpkWEp5Wlc1MFZYQmtZWFJsUTJoMWJtdHpMQ0JqYUhWdWEwbGtLU0FtSmx4dVhIUmNkRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOG9hVzV6ZEdGc2JHVmtRMmgxYm10ekxDQmphSFZ1YTBsa0tTQW1KbHh1WEhSY2RGeDBYSFJwYm5OMFlXeHNaV1JEYUhWdWEzTmJZMmgxYm10SlpGMGdJVDA5SUhWdVpHVm1hVzVsWkZ4dVhIUmNkRngwS1NCN1hHNWNkRngwWEhSY2RIQnliMjFwYzJWekxuQjFjMmdvYkc5aFpGVndaR0YwWlVOb2RXNXJLR05vZFc1clNXUXBLVHRjYmx4MFhIUmNkRngwWTNWeWNtVnVkRlZ3WkdGMFpVTm9kVzVyYzF0amFIVnVhMGxrWFNBOUlIUnlkV1U3WEc1Y2RGeDBYSFI5WEc1Y2RGeDBmVHRjYmx4MGZWeHVmVHRjYmx4dVgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NW9iWEpOSUQwZ0tDa2dQVDRnZTF4dVhIUnBaaUFvZEhsd1pXOW1JR1psZEdOb0lEMDlQU0JjSW5WdVpHVm1hVzVsWkZ3aUtTQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1hDSk9ieUJpY205M2MyVnlJSE4xY0hCdmNuUTZJRzVsWldRZ1ptVjBZMmdnUVZCSlhDSXBPMXh1WEhSeVpYUjFjbTRnWm1WMFkyZ29YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUNzZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NW9iWEpHS0NrcExuUm9aVzRvS0hKbGMzQnZibk5sS1NBOVBpQjdYRzVjZEZ4MGFXWW9jbVZ6Y0c5dWMyVXVjM1JoZEhWeklEMDlQU0EwTURRcElISmxkSFZ5YmpzZ0x5OGdibThnZFhCa1lYUmxJR0YyWVdsc1lXSnNaVnh1WEhSY2RHbG1LQ0Z5WlhOd2IyNXpaUzV2YXlrZ2RHaHliM2NnYm1WM0lFVnljbTl5S0Z3aVJtRnBiR1ZrSUhSdklHWmxkR05vSUhWd1pHRjBaU0J0WVc1cFptVnpkQ0JjSWlBcklISmxjM0J2Ym5ObExuTjBZWFIxYzFSbGVIUXBPMXh1WEhSY2RISmxkSFZ5YmlCeVpYTndiMjV6WlM1cWMyOXVLQ2s3WEc1Y2RIMHBPMXh1ZlR0Y2JseHVMeThnYm04Z1pHVm1aWEp5WldRZ2MzUmhjblIxY0Z4dVhHNHZMeUJ1YnlCcWMyOXVjQ0JtZFc1amRHbHZibHh1WEc0dkx5QnVieUJrWldabGNuSmxaQ0J6ZEdGeWRIVndJaXdpTHk4Z2JXOWtkV3hsSUdOaFkyaGxJR0Z5WlNCMWMyVmtJSE52SUdWdWRISjVJR2x1YkdsdWFXNW5JR2x6SUdScGMyRmliR1ZrWEc0dkx5QnpkR0Z5ZEhWd1hHNHZMeUJNYjJGa0lHVnVkSEo1SUcxdlpIVnNaU0JoYm1RZ2NtVjBkWEp1SUdWNGNHOXlkSE5jYm5aaGNpQmZYM2RsWW5CaFkydGZaWGh3YjNKMGMxOWZJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloY0lpNHZjM0pqTDJsamIyNXpMbXB6WENJcE8xeHVJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09IiwiaW1wb3J0IHtSZXNpemVyfSBmcm9tICcuL3NyYy9yZXNpemVyLmpzJztcclxuXHJcbmV4cG9ydCB7UmVzaXplciBhcyBkZWZhdWx0fTtcclxuLy93aW5kb3cuUmVzaXplciA9IFJlc2l6ZXI7XHJcbiIsIi8qKlxyXG4gKiBWYXJpb3VzIGludGVyZmFjZSBvcHRpb25zIHdlIGNhbiBzZWxlY3RcclxuICovXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIG9wdGlvbnMuXHJcbiAqIEBwYXJhbSBvcHRpb25zIFVzZXIgcHJvdmlkZWQgb3B0aW9ucyB0aGF0IG92ZXJyaWRlIHRoZSBkZWZhdWx0IHZhbHVlcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gT3B0aW9ucyhvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyA/IG9wdGlvbnMgOiB7fTtcclxuXHJcbiAgICAvLy8gT3B0aW9uczogdmVydGljYWwsIGhvcml6b250YWwsIGJvdGhcclxuICAgIHRoaXMucmVzaXplID0gJ3ZlcnRpY2FsJztcclxuXHJcbiAgICAvLy8gVGhlIHJlc2l6aW5nIGhhbmRsZVxyXG4gICAgdGhpcy5oYW5kbGUgPSAnYmFyJztcclxuXHJcbiAgICAvLy8gUmFuZ2UgZm9yIGdyYWJiaW5nXHJcbiAgICB0aGlzLmdyYWJTaXplID0gMTA7XHJcblxyXG4gICAgLy8vIE1heGltdW0gc3BlZWQgd2UgY2FuIHJlc2l6ZSBpbiBwaXhlbHMgcGVyIHNlY29uZFxyXG4gICAgdGhpcy5tYXhTcGVlZCA9IDEwMDA7XHJcblxyXG4gICAgLy8vIFVzZSBhIG1hc2sgKHVzZWZ1bCBmb3IgaWZyYW1lc1xyXG4gICAgdGhpcy51c2VNYXNrID0gdHJ1ZTtcclxuXHJcbiAgICBmb3IodmFyIHByb3BlcnR5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICBpZihvcHRpb25zLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uIFwiICsgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXNbcHJvcGVydHldID0gb3B0aW9uc1twcm9wZXJ0eV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBSZXNpemVyQWN0dWFsKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncmVzaXplcicpO1xyXG5cclxuICAgIC8vIFRpbWVvdXQgcGVyaW9kIGZvciBhbmltYXRlZCByZXNpemluZ1xyXG4gICAgY29uc3QgdGltZW91dFBlcmlvZCA9IDIwO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBIYW5kbGUgb3B0aW9uc1xyXG4gICAgLy9cclxuICAgIGxldCBncmFiU2l6ZSA9IG9wdGlvbnMuZ3JhYlNpemU7XHJcblxyXG4gICAgbGV0IGhhbmRsZSA9IG9wdGlvbnMuaGFuZGxlO1xyXG4gICAgaWYoaGFuZGxlID09PSAnYmFyJykge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVzaXplID0gJ25vbmUnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyQm90dG9tID0gZ3JhYlNpemUgKyAncHggc29saWQgIzE4NDUzQic7XHJcbiAgICB9IGVsc2UgaWYoaGFuZGxlID09PSAnaGFuZGxlJykge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVzaXplID0gJ3ZlcnRpY2FsJztcclxuICAgIH0gZWxzZSBpZihoYW5kbGUgPT09ICdub25lJykge1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZXNpemUgPSAnbm9uZSc7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3JkZXJCb3R0b20gPSBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIEFyZSBtb3VzZSBtb3ZlIGV2ZW50IGhhbmRsZXJzIGluc3RhbGxlZD9cclxuICAgIGxldCBpbnN0YWxsZWRNb3VzZUxpc3RlbmVycyA9IGZhbHNlO1xyXG5cclxuICAgIC8vLyBBcmUgdG91Y2ggbW92ZSBldmVudCBoYW5kbGVycyBpbnN0YWxsZWQ/XHJcbiAgICBsZXQgaW5zdGFsbGVkVG91Y2hMaXN0ZW5lcnMgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgbWFzayA9IG51bGw7XHJcblxyXG4gICAgLy8vIEdldCB0aGUgbWluaW11bSBoZWlnaHQgYW5kIHdpZHRoIHByb3BlcnRpZXNcclxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IGhlaWdodCA9IHJlY3QuaGVpZ2h0O1xyXG4gICAgbGV0IHdpZHRoID0gcmVjdC53aWR0aDtcclxuXHJcbiAgICBsZXQgbWluSGVpZ2h0ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5taW5IZWlnaHQ7XHJcbiAgICBtaW5IZWlnaHQgPSBtaW5IZWlnaHQuc3Vic3RyKDAsIG1pbkhlaWdodC5sZW5ndGggLSAyKTtcclxuICAgIGxldCBtaW5XaWR0aCA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkubWluV2lkdGg7XHJcbiAgICBtaW5XaWR0aCA9IG1pbldpZHRoLnN1YnN0cigwLCBtaW5XaWR0aC5sZW5ndGggLSAyKTtcclxuXHJcbiAgICBsZXQgdGltZXIgPSBudWxsO1xyXG5cclxuICAgIGxldCB0YXJnZXRXaWR0aCA9IG51bGw7XHJcbiAgICBsZXQgdGFyZ2V0SGVpZ2h0ID0gbnVsbDtcclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcclxuICAgICAgICAvLyBJbnN0YWxsIHRoZSBtb3VzZSBkb3duIGFuZCB0b3VjaCBzdGFydCBsaXN0ZW5lcnNcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bkxpc3RlbmVyKTtcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0b3VjaFN0YXJ0TGlzdGVuZXIpO1xyXG5cclxuICAgICAgICAvLyBJbnN0YWxsIHRoZSBjdXJzb3IgbGlzdGVuZXJcclxuICAgICAgICAvLyBUaGlzIHN3YXBzIHRoZSBjdXJzb3Igd2hlbiB3ZSBob3ZlciB0aGUgbW91c2Ugb3ZlciB0aGUgZ3JhYiBiYXJcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGN1cnNvckxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRUYXJnZXQodHcsIHRoKSB7XHJcbiAgICAgICAgdGFyZ2V0V2lkdGggPSB0dztcclxuICAgICAgICB0YXJnZXRIZWlnaHQgPSB0aDtcclxuXHJcbiAgICAgICAgLy8gSWYgYSB0aW1lciBpcyBub3QgYWN0aXZlLCBjcmVhdGUgb25lLlxyXG4gICAgICAgIGlmKHRpbWVyID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRpbWVyTW92ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdGltZXJNb3ZlcigpIHtcclxuICAgICAgICB0aW1lciA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IG1heFBpeGVscyA9IG9wdGlvbnMubWF4U3BlZWQgKiB0aW1lb3V0UGVyaW9kIC8gMTAwMDtcclxuXHJcbiAgICAgICAgaWYodGFyZ2V0SGVpZ2h0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRIZWlnaHQgPSAraGVpZ2h0O1xyXG4gICAgICAgICAgICBsZXQgZGlmZiA9IHRhcmdldEhlaWdodCAtIGN1cnJlbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBpZihNYXRoLmFicyhkaWZmKSA+IG1heFBpeGVscykge1xyXG4gICAgICAgICAgICAgICAgZGlmZiA9IGRpZmYgPCAwID8gLW1heFBpeGVscyA6IG1heFBpeGVscztcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IGN1cnJlbnRIZWlnaHQgKyBkaWZmO1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJycgKyBoZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gTm90IHJhdGUgbGltaXRlZFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gdGFyZ2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnJyArIGhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRIZWlnaHQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0YXJnZXRXaWR0aCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50V2lkdGggPSArd2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBkaWZmID0gdGFyZ2V0V2lkdGggLSBjdXJyZW50V2lkdGg7XHJcblxyXG4gICAgICAgICAgICBpZihNYXRoLmFicyhkaWZmKSA+IG1heFBpeGVscykge1xyXG4gICAgICAgICAgICAgICAgZGlmZiA9IGRpZmYgPCAwID8gLW1heFBpeGVscyA6IG1heFBpeGVscztcclxuICAgICAgICAgICAgICAgIHdpZHRoID0gY3VycmVudFdpZHRoICsgZGlmZjtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gJycgKyB3aWR0aCArICdweCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3QgcmF0ZSBsaW1pdGVkXHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHRhcmdldFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcnICsgd2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0V2lkdGggPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0YXJnZXRIZWlnaHQgIT09IG51bGwgfHwgdGFyZ2V0V2lkdGggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KHRpbWVyTW92ZXIsIHRpbWVvdXRQZXJpb2QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGluaXRpYWxYLCBpbml0aWFsWTtcclxuICAgIGxldCBpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQ7XHJcbiAgICBsZXQgZ3JhYlR5cGUgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgdGhlIHJlc2l6aW5nIG9uIGEgbW91c2UgZG93biBvciB0b3VjaFxyXG4gICAgICogQHBhcmFtIHggTW91c2Ugb3IgdG91Y2ggWCBpbiBwaXhlbHNcclxuICAgICAqIEBwYXJhbSB5IE1vdXNlIG9yIHRvdWNoIFkgaW4gcGl4ZWxzXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIG1vdmVTdGFydCh4LCB5KSB7XHJcbiAgICAgICAgaW5pdGlhbFggPSB4O1xyXG4gICAgICAgIGluaXRpYWxZID0geTtcclxuICAgICAgICBsZXQgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgd2lkdGggPSArZWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgICBpbml0aWFsV2lkdGggPSB3aWR0aDtcclxuICAgICAgICBoZWlnaHQgPSArZWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgaW5pdGlhbEhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0YXJnZXRXaWR0aCA9IG51bGw7XHJcbiAgICAgICAgdGFyZ2V0SGVpZ2h0ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBhIG1vdXNlIG9yIGZpbmdlciBtb3ZlIHRvIGEgbmV3IHBvc2l0aW9uLFxyXG4gICAgICogcmVzdWx0aW5nIGluIGEgcmVzaXplIHJlcXVlc3QuXHJcbiAgICAgKiBAcGFyYW0geCBNb3VzZSBvciB0b3VjaCBYIGluIHBpeGVsc1xyXG4gICAgICogQHBhcmFtIHkgTW91c2Ugb3IgdG91Y2ggWSBpbiBwaXhlbHNcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gbW92ZVRvKHgsIHkpIHtcclxuICAgICAgICBsZXQgZHggPSB4IC0gaW5pdGlhbFg7XHJcbiAgICAgICAgbGV0IGR5ID0geSAtIGluaXRpYWxZO1xyXG5cclxuICAgICAgICBsZXQgbmV3V2lkdGggPSBudWxsO1xyXG4gICAgICAgIGxldCBuZXdIZWlnaHQgPSBudWxsO1xyXG5cclxuICAgICAgICBpZihncmFiVHlwZSA9PT0gJ2hvcml6b250YWwnIHx8IGdyYWJUeXBlID09PSAnYm90aCcpIHtcclxuICAgICAgICAgICAgLy8gQ29tcHV0ZSBhIGRlc2lyZWQgbmV3IHdpZHRoXHJcbiAgICAgICAgICAgIG5ld1dpZHRoID0gaW5pdGlhbFdpZHRoICsgZHg7XHJcbiAgICAgICAgICAgIGlmIChuZXdXaWR0aCA8IG1pbldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IG1pbldpZHRoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoZ3JhYlR5cGUgPT09ICd2ZXJ0aWNhbCcgfHwgZ3JhYlR5cGUgPT09ICdib3RoJykge1xyXG4gICAgICAgICAgICBjb25zdCB3YXNIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIENvbXB1dGUgYSBkZXNpcmVkIG5ldyBoZWlnaHRcclxuICAgICAgICAgICAgbmV3SGVpZ2h0ID0gaW5pdGlhbEhlaWdodCArIGR5O1xyXG4gICAgICAgICAgICBpZiAobmV3SGVpZ2h0IDwgbWluSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSBtaW5IZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRUYXJnZXQobmV3V2lkdGgsIG5ld0hlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIE1vdXNlIEhhbmRsaW5nXHJcbiAgICAvL1xyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlRG93bkxpc3RlbmVyKGUpIHtcclxuICAgICAgICBjb25zdCB4ID0gZS5wYWdlWDtcclxuICAgICAgICBjb25zdCB5ID0gZS5wYWdlWTtcclxuXHJcbiAgICAgICAgZ3JhYlR5cGUgPSBvbkhhbmRsZSh4LCB5LCBmYWxzZSk7XHJcbiAgICAgICAgaWYoZ3JhYlR5cGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgbW92ZVN0YXJ0KHgsIHkpO1xyXG5cclxuICAgICAgICAgICAgaW5zdGFsbE1hc2soKTtcclxuICAgICAgICAgICAgaW5zdGFsbE1vdXNlSGFuZGxlcnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VNb3ZlTGlzdGVuZXIoZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoZS5idXR0b25zICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUFsbCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtb3ZlVG8oZS5wYWdlWCwgZS5wYWdlWSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VVcExpc3RlbmVyKGUpIHtcclxuICAgICAgICByZW1vdmVBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbnN0YWxsTW91c2VIYW5kbGVycygpIHtcclxuICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG5cclxuICAgICAgICBpbnN0YWxsZWRNb3VzZUxpc3RlbmVycyA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlTGlzdGVuZXIsIGZhbHNlKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcExpc3RlbmVyLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIFRvdWNoIEhhbmRsaW5nXHJcbiAgICAvL1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvdWNoU3RhcnRMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGUudG91Y2hlc1swXS5wYWdlWDtcclxuICAgICAgICBjb25zdCB5ID0gZS50b3VjaGVzWzBdLnBhZ2VZO1xyXG5cclxuICAgICAgICBncmFiVHlwZSA9IG9uSGFuZGxlKHgsIHksIHRydWUpO1xyXG4gICAgICAgIGlmKGdyYWJUeXBlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIG1vdmVTdGFydCh4LCB5KTtcclxuXHJcbiAgICAgICAgICAgIGluc3RhbGxNYXNrKCk7XHJcbiAgICAgICAgICAgIGluc3RhbGxUb3VjaEhhbmRsZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvdWNoTW92ZUxpc3RlbmVyKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCB4ID0gZS50b3VjaGVzWzBdLnBhZ2VYO1xyXG4gICAgICAgIGNvbnN0IHkgPSBlLnRvdWNoZXNbMF0ucGFnZVk7XHJcblxyXG4gICAgICAgIG1vdmVUbyh4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b3VjaEVuZExpc3RlbmVyKGUpIHtcclxuICAgICAgICByZW1vdmVBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbnN0YWxsVG91Y2hIYW5kbGVycygpIHtcclxuICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG5cclxuICAgICAgICBpbnN0YWxsZWRUb3VjaExpc3RlbmVycyA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2hNb3ZlTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hFbmRMaXN0ZW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaEVuZExpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gTWFza1xyXG4gICAgLy9cclxuXHJcbiAgICBmdW5jdGlvbiBpbnN0YWxsTWFzaygpIHtcclxuICAgICAgICBpZighb3B0aW9ucy51c2VNYXNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEVuc3VyZSBub25lIGN1cnJlbnRseSBleGlzdHNcclxuICAgICAgICByZW1vdmVNYXNrKCk7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgbWFzay5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgbWFzay5zdHlsZS5sZWZ0ID0gMDtcclxuICAgICAgICBtYXNrLnN0eWxlLnRvcCA9IDA7XHJcbiAgICAgICAgbWFzay5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIG1hc2suc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgIG1hc2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICBtYXNrLnN0eWxlLnpJbmRleCA9IDEwMDAwO1xyXG4gICAgICAgIG1hc2suc3R5bGUub3BhY2l0eSA9IDAuNTtcclxuICAgICAgICBtYXNrLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuXHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtYXNrKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVBbGwoKSB7XHJcbiAgICAgICAgaWYodGltZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgICAgdGltZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVtb3ZlSGFuZGxlcnMoKTtcclxuICAgICAgICByZW1vdmVNYXNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgaWYoaW5zdGFsbGVkTW91c2VMaXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcExpc3RlbmVyKTtcclxuICAgICAgICAgICAgaW5zdGFsbGVkTW91c2VMaXN0ZW5lcnMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGluc3RhbGxlZFRvdWNoTGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaEVuZExpc3RlbmVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaEVuZExpc3RlbmVyKTtcclxuICAgICAgICAgICAgaW5zdGFsbGVkVG91Y2hMaXN0ZW5lcnMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlTWFzaygpIHtcclxuICAgICAgICBpZihtYXNrICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobWFzayk7XHJcbiAgICAgICAgICAgIG1hc2sgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZSBpZiBhbiB4LHkgbG9jYXRpb24gaXMgb3ZlciBhIGhhbmRsZSBmb3IgbWFuaXB1bGF0aW5nXHJcbiAgICAgKiB0aGUgcmVzaXplYWJsZSBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0geCBsb2NhdGlvbiBpbiBwaXhlbHNcclxuICAgICAqIEBwYXJhbSB5IGxvY2F0aW9uIGluIHBpeGVsc1xyXG4gICAgICogQHJldHVybnMgc3RyaW5nfG51bGwgaWYgbm90LCAnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcsICdib3RoJyBpZiBvdmVyIGhhbmRsZSBhbmQgbW9kZSBhdmFpbGFibGUuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIG9uSGFuZGxlKHgsIHksIHRvdWNoKSB7XHJcbiAgICAgICAgbGV0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBzbG9wID0gdG91Y2ggPyAxMCA6IDA7XHJcblxyXG4gICAgICAgIGxldCBib3R0b20gPSByZWN0LmJvdHRvbSArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBsZXQgdmVydCA9IHkgPj0gYm90dG9tIC0gZ3JhYlNpemUgLSBzbG9wO1xyXG5cclxuICAgICAgICBsZXQgcmlnaHQgPSByZWN0LnJpZ2h0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG4gICAgICAgIGxldCBob3J6ID0geCA+PSByaWdodCAtIGdyYWJTaXplIC0gc2xvcDtcclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy5yZXNpemUgPT09ICdib3RoJykge1xyXG4gICAgICAgICAgICBpZih2ZXJ0ICYmIGhvcnopIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnYm90aCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodmVydCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGhvcnopIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKChvcHRpb25zLnJlc2l6ZSA9PT0gJ2JvdGgnIHx8IG9wdGlvbnMucmVzaXplID09PSAndmVydGljYWwnKSAmJiB2ZXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAndmVydGljYWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoKG9wdGlvbnMucmVzaXplID09PSAnYm90aCcgfHwgb3B0aW9ucy5yZXNpemUgPT09ICdob3Jpem9udGFsJykgJiYgaG9yeikge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2hvcml6b250YWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBsZXQgY3Vyc29yID0gMDtcclxuXHJcbiAgICBmdW5jdGlvbiBjdXJzb3JMaXN0ZW5lcihldmVudCkge1xyXG4gICAgICAgIC8vIFN3YXAgdGhlIGN1cnNvciB3aGVuIHdlIGFyZSBvdmVyIHRoZSBoYW5kbGVcclxuICAgICAgICBpZiAob25IYW5kbGUoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZLCBmYWxzZSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnNvciAhPT0gMikge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3IgPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGN1cnNvciAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSAndGV4dCc7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3IgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFZlcnRpY2FsIHJlc2l6ZSBzdXBwb3J0IGZvciBkaXYsIHRleHRhcmVhLCBpZnJhbWUsIGV0Yy5cclxuICpcclxuICogQSBwcm9ibGVtIHdpdGggdGhlIHJlc2l6ZSBmZWF0dXJlIG9mIHRleHRhcmVhIGFuZCBpZnJhbWUgaXMgdGhhdCBpdCBkb2VzIG5vdCB3b3JrIGluIGFsbFxyXG4gKiBicm93c2VycyAoZXNwZWNpYWxseSBFZGdlKSBhbmQgaXMgb2Z0ZW4gcXVpdGUgcXVpcmt5LiBUaGlzIHNtYWxsIHBhY2thZ2UgYWxsb3dzIHlvdSB0b1xyXG4gKiBhZGQgdmVydGljYWwgcmVzaXplIGFiaWxpdHkgdG8ganVzdCBhYm91dCBhbnl0aGluZy5cclxuICpcclxuICogQHZlcnNpb24gMi40LjAgQWRkZWQgdG91Y2ggc3VwcG9ydC4gTGltaXRlZCBzcGVlZCBvZiByZXNpemluZyB0byBhdm9pZCBpc3N1ZSB3aGVuIHNjcm9sbGluZy5cclxuICovXHJcblxyXG5pbXBvcnQge1Jlc2l6ZXJBY3R1YWx9IGZyb20gJy4vcmVzaXplci1hY3R1YWwnO1xyXG5pbXBvcnQge09wdGlvbnN9IGZyb20gJy4vT3B0aW9ucyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnN0cnVjdG9yIGZvciBhIFJlc2l6ZXIgb2JqZWN0XHJcbiAqIEBwYXJhbSBzZWwgU2VsZWN0b3Igb3IgRE9NIGVsZW1lbnRcclxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyBvYmplY3QuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFJlc2l6ZXIgPSBmdW5jdGlvbihzZWwsIG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zKTtcclxuXHJcbiAgICBpZih0eXBlb2Ygc2VsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5ldyBSZXNpemVyQWN0dWFsKGVsZW1lbnRzW2ldLCBvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYoc2VsLm5vZGVUeXBlKSB7XHJcbiAgICAgICAgbmV3IFJlc2l6ZXJBY3R1YWwoc2VsLCBvcHRpb25zKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzaXplcjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmIChjYWNoZWRNb2R1bGUuZXJyb3IgIT09IHVuZGVmaW5lZCkgdGhyb3cgY2FjaGVkTW9kdWxlLmVycm9yO1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHR0cnkge1xuXHRcdHZhciBleGVjT3B0aW9ucyA9IHsgaWQ6IG1vZHVsZUlkLCBtb2R1bGU6IG1vZHVsZSwgZmFjdG9yeTogX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0sIHJlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18gfTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7IGhhbmRsZXIoZXhlY09wdGlvbnMpOyB9KTtcblx0XHRtb2R1bGUgPSBleGVjT3B0aW9ucy5tb2R1bGU7XG5cdFx0ZXhlY09wdGlvbnMuZmFjdG9yeS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBleGVjT3B0aW9ucy5yZXF1aXJlKTtcblx0fSBjYXRjaChlKSB7XG5cdFx0bW9kdWxlLmVycm9yID0gZTtcblx0XHR0aHJvdyBlO1xuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbl9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgZXhlY3V0aW9uIGludGVyY2VwdG9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBbXTtcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmh1ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1yRiA9ICgpID0+IChcIkRpYWxvZy5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc29uXCIpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY2ZTZjMmRhYzEyNThkZTQwYTQxXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcIkRpYWxvZzpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHQ7XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBjdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xudmFyIGluc3RhbGxlZE1vZHVsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmM7XG5cbi8vIG1vZHVsZSBhbmQgcmVxdWlyZSBjcmVhdGlvblxudmFyIGN1cnJlbnRDaGlsZE1vZHVsZTtcbnZhciBjdXJyZW50UGFyZW50cyA9IFtdO1xuXG4vLyBzdGF0dXNcbnZhciByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMgPSBbXTtcbnZhciBjdXJyZW50U3RhdHVzID0gXCJpZGxlXCI7XG5cbi8vIHdoaWxlIGRvd25sb2FkaW5nXG52YXIgYmxvY2tpbmdQcm9taXNlcztcblxuLy8gVGhlIHVwZGF0ZSBpbmZvXG52YXIgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnM7XG52YXIgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbl9fd2VicGFja19yZXF1aXJlX18uaG1yRCA9IGN1cnJlbnRNb2R1bGVEYXRhO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkucHVzaChmdW5jdGlvbiAob3B0aW9ucykge1xuXHR2YXIgbW9kdWxlID0gb3B0aW9ucy5tb2R1bGU7XG5cdHZhciByZXF1aXJlID0gY3JlYXRlUmVxdWlyZShvcHRpb25zLnJlcXVpcmUsIG9wdGlvbnMuaWQpO1xuXHRtb2R1bGUuaG90ID0gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG9wdGlvbnMuaWQsIG1vZHVsZSk7XG5cdG1vZHVsZS5wYXJlbnRzID0gY3VycmVudFBhcmVudHM7XG5cdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRvcHRpb25zLnJlcXVpcmUgPSByZXF1aXJlO1xufSk7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yQyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJID0ge307XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlcXVpcmUocmVxdWlyZSwgbW9kdWxlSWQpIHtcblx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cdGlmICghbWUpIHJldHVybiByZXF1aXJlO1xuXHR2YXIgZm4gPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuXHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG5cdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuXHRcdFx0XHR2YXIgcGFyZW50cyA9IGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cztcblx0XHRcdFx0aWYgKHBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG5cdFx0XHRcdFx0cGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuXHRcdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG5cdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuXHRcdFx0XHRcdHJlcXVlc3QgK1xuXHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG5cdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdCk7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVxdWlyZShyZXF1ZXN0KTtcblx0fTtcblx0dmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHJlcXVpcmVbbmFtZV07XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmVxdWlyZVtuYW1lXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cdGZvciAodmFyIG5hbWUgaW4gcmVxdWlyZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVxdWlyZSwgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKG5hbWUpKTtcblx0XHR9XG5cdH1cblx0Zm4uZSA9IGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0cmV0dXJuIHRyYWNrQmxvY2tpbmdQcm9taXNlKHJlcXVpcmUuZShjaHVua0lkKSk7XG5cdH07XG5cdHJldHVybiBmbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG1vZHVsZUlkLCBtZSkge1xuXHR2YXIgX21haW4gPSBjdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkO1xuXHR2YXIgaG90ID0ge1xuXHRcdC8vIHByaXZhdGUgc3R1ZmZcblx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9hY2NlcHRlZEVycm9ySGFuZGxlcnM6IHt9LFxuXHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG5cdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG5cdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG5cdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG5cdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG5cdFx0X21haW46IF9tYWluLFxuXHRcdF9yZXF1aXJlU2VsZjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBtZS5wYXJlbnRzLnNsaWNlKCk7XG5cdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSBfbWFpbiA/IHVuZGVmaW5lZCA6IG1vZHVsZUlkO1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG5cdFx0fSxcblxuXHRcdC8vIE1vZHVsZSBBUElcblx0XHRhY3RpdmU6IHRydWUsXG5cdFx0YWNjZXB0OiBmdW5jdGlvbiAoZGVwLCBjYWxsYmFjaywgZXJyb3JIYW5kbGVyKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcFtpXV0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBdID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGVjbGluZTogZnVuY3Rpb24gKGRlcCkge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcblx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuXHRcdFx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuXHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcblx0XHRcdFx0XHQocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKFxuXHRcdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gTWFuYWdlbWVudCBBUElcblx0XHRjaGVjazogaG90Q2hlY2ssXG5cdFx0YXBwbHk6IGhvdEFwcGx5LFxuXHRcdHN0YXR1czogZnVuY3Rpb24gKGwpIHtcblx0XHRcdGlmICghbCkgcmV0dXJuIGN1cnJlbnRTdGF0dXM7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHR2YXIgaWR4ID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG5cdFx0XHRpZiAoaWR4ID49IDApIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXG5cdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG5cdFx0ZGF0YTogY3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG5cdH07XG5cdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcblx0cmV0dXJuIGhvdDtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdHVzKG5ld1N0YXR1cykge1xuXHRjdXJyZW50U3RhdHVzID0gbmV3U3RhdHVzO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcblx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xufVxuXG5mdW5jdGlvbiB0cmFja0Jsb2NraW5nUHJvbWlzZShwcm9taXNlKSB7XG5cdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0c2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcblx0XHRcdGJsb2NraW5nUHJvbWlzZXMucHVzaChwcm9taXNlKTtcblx0XHRcdHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRibG9ja2luZ1Byb21pc2VzLnB1c2gocHJvbWlzZSk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pIHtcblx0aWYgKGJsb2NraW5nUHJvbWlzZXMubGVuZ3RoID09PSAwKSByZXR1cm4gZm4oKTtcblx0dmFyIGJsb2NrZXIgPSBibG9ja2luZ1Byb21pc2VzO1xuXHRibG9ja2luZ1Byb21pc2VzID0gW107XG5cdHJldHVybiBQcm9taXNlLmFsbChibG9ja2VyKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaG90Q2hlY2soYXBwbHlPblVwZGF0ZSkge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcblx0fVxuXHRzZXRTdGF0dXMoXCJjaGVja1wiKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uaG1yTSgpLnRoZW4oZnVuY3Rpb24gKHVwZGF0ZSkge1xuXHRcdGlmICghdXBkYXRlKSB7XG5cdFx0XHRzZXRTdGF0dXMoYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHNldFN0YXR1cyhcInByZXBhcmVcIik7XG5cblx0XHR2YXIgdXBkYXRlZE1vZHVsZXMgPSBbXTtcblx0XHRibG9ja2luZ1Byb21pc2VzID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblxuXHRcdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1yQykucmVkdWNlKGZ1bmN0aW9uIChcblx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdGtleVxuXHRcdFx0KSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yQ1trZXldKFxuXHRcdFx0XHRcdHVwZGF0ZS5jLFxuXHRcdFx0XHRcdHVwZGF0ZS5yLFxuXHRcdFx0XHRcdHVwZGF0ZS5tLFxuXHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLFxuXHRcdFx0XHRcdHVwZGF0ZWRNb2R1bGVzXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiBwcm9taXNlcztcblx0XHRcdH0sXG5cdFx0XHRbXSlcblx0XHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKGFwcGx5T25VcGRhdGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShhcHBseU9uVXBkYXRlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblxuXHRcdFx0XHRcdHJldHVybiB1cGRhdGVkTW9kdWxlcztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcInJlYWR5XCIpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG5cdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG5cdH0pO1xuXHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcblxuXHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuXHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcblx0XHRcdHJldHVybiByLmVycm9yO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0XHRzZXRTdGF0dXMoXCJhYm9ydFwiKTtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcnNbMF07XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcblx0c2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcblxuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcblx0fSk7XG5cblx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuXHRzZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuXHR2YXIgZXJyb3I7XG5cdHZhciByZXBvcnRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcblx0fTtcblxuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5hcHBseSkge1xuXHRcdFx0dmFyIG1vZHVsZXMgPSByZXN1bHQuYXBwbHkocmVwb3J0RXJyb3IpO1xuXHRcdFx0aWYgKG1vZHVsZXMpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gobW9kdWxlc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG5cdGlmIChlcnJvcikge1xuXHRcdHNldFN0YXR1cyhcImZhaWxcIik7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fSk7XG5cdH1cblxuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuXHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0fSk7XG5cdH1cblxuXHRzZXRTdGF0dXMoXCJpZGxlXCIpO1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycykgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIkRpYWxvZ1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxudmFyIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3Q7XG52YXIgd2FpdGluZ1VwZGF0ZVJlc29sdmVzID0ge307XG5mdW5jdGlvbiBsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHJlc29sdmU7XG5cdFx0Ly8gc3RhcnQgdXBkYXRlIGNodW5rIGxvYWRpbmdcblx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5odShjaHVua0lkKTtcblx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0XHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZFxuXHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgaG90IHVwZGF0ZSBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCk7XG5cdH0pO1xufVxuXG5zZWxmW1wid2VicGFja0hvdFVwZGF0ZURpYWxvZ1wiXSA9IChjaHVua0lkLCBtb3JlTW9kdWxlcywgcnVudGltZSkgPT4ge1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0aWYoY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCkgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgY3VycmVudFVwZGF0ZVJ1bnRpbWUucHVzaChydW50aW1lKTtcblx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKCk7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHR9XG59O1xuXG52YXIgY3VycmVudFVwZGF0ZUNodW5rcztcbnZhciBjdXJyZW50VXBkYXRlO1xudmFyIGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGVSdW50aW1lO1xuZnVuY3Rpb24gYXBwbHlIYW5kbGVyKG9wdGlvbnMpIHtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikgZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtcjtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHVuZGVmaW5lZDtcblx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKHVwZGF0ZU1vZHVsZUlkKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG5cdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cblx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hhaW46IFtpZF0sXG5cdFx0XHRcdGlkOiBpZFxuXHRcdFx0fTtcblx0XHR9KTtcblx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuXHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuXHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFtb2R1bGUgfHxcblx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuXHRcdFx0KVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG5cdFx0XHRcdHZhciBwYXJlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbcGFyZW50SWRdO1xuXHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG5cdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcblx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcblx0XHRcdFx0cXVldWUucHVzaCh7XG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRpZDogcGFyZW50SWRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcblx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcblx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuXHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gYltpXTtcblx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcblx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuXHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG5cdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUobW9kdWxlKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyBtb2R1bGUuaWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcblx0XHQpO1xuXHR9O1xuXG5cdGZvciAodmFyIG1vZHVsZUlkIGluIGN1cnJlbnRVcGRhdGUpIHtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdFx0dmFyIG5ld01vZHVsZUZhY3RvcnkgPSBjdXJyZW50VXBkYXRlW21vZHVsZUlkXTtcblx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cblx0XHRcdHZhciByZXN1bHQ7XG5cdFx0XHRpZiAobmV3TW9kdWxlRmFjdG9yeSkge1xuXHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHMobW9kdWxlSWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0ID0ge1xuXHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG5cdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcblx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcblx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuXHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuXHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGVycm9yOiBhYm9ydEVycm9yXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9BcHBseSkge1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IG5ld01vZHVsZUZhY3Rvcnk7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG5cdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcblx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjdXJyZW50VXBkYXRlID0gdW5kZWZpbmVkO1xuXG5cdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cblx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuXHRmb3IgKHZhciBqID0gMDsgaiA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGorKykge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2pdO1xuXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0aWYgKFxuXHRcdFx0bW9kdWxlICYmXG5cdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkIHx8IG1vZHVsZS5ob3QuX21haW4pICYmXG5cdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG5cdFx0XHRhcHBsaWVkVXBkYXRlW291dGRhdGVkTW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcblx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG5cdFx0XHQhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkXG5cdFx0KSB7XG5cdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG5cdFx0XHRcdG1vZHVsZTogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0cmVxdWlyZTogbW9kdWxlLmhvdC5fcmVxdWlyZVNlbGYsXG5cdFx0XHRcdGVycm9ySGFuZGxlcjogbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG5cblx0cmV0dXJuIHtcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHR9KTtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gdW5kZWZpbmVkO1xuXG5cdFx0XHR2YXIgaWR4O1xuXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG5cdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuXHRcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG5cdFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuXHRcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0ZGlzcG9zZUhhbmRsZXJzW2pdLmNhbGwobnVsbCwgZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJEW21vZHVsZUlkXSA9IGRhdGE7XG5cblx0XHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcblx0XHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcblx0XHRcdFx0ZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcblx0XHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcblx0XHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuXHRcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuXHRcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cblx0XHRcdHZhciBkZXBlbmRlbmN5O1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXBwbHk6IGZ1bmN0aW9uIChyZXBvcnRFcnJvcikge1xuXHRcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG5cdFx0XHRmb3IgKHZhciB1cGRhdGVNb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oYXBwbGllZFVwZGF0ZSwgdXBkYXRlTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW3VwZGF0ZU1vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJ1biBuZXcgcnVudGltZSBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRVcGRhdGVSdW50aW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lW2ldKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdHZhciBhY2NlcHRDYWxsYmFjayA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXIgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0aWYgKGFjY2VwdENhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGFjY2VwdENhbGxiYWNrKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGFjY2VwdENhbGxiYWNrKTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzLnB1c2goZXJyb3JIYW5kbGVyKTtcblx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MucHVzaChkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBjYWxsYmFja3MubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3Nba10uY2FsbChudWxsLCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgZXJyb3JIYW5kbGVyc1trXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzW2tdKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIG8gPSAwOyBvIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgbysrKSB7XG5cdFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW29dO1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpdGVtLnJlcXVpcmUobW9kdWxlSWQpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGU6IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9XG5cdH07XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkuanNvbnAgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGFwcGx5SGFuZGxlcnMpIHtcblx0aWYgKCFjdXJyZW50VXBkYXRlKSB7XG5cdFx0Y3VycmVudFVwZGF0ZSA9IHt9O1xuXHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSBbXTtcblx0XHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0fVxuXHRpZiAoIV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF07XG5cdH1cbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMuanNvbnAgPSBmdW5jdGlvbiAoXG5cdGNodW5rSWRzLFxuXHRyZW1vdmVkQ2h1bmtzLFxuXHRyZW1vdmVkTW9kdWxlcyxcblx0cHJvbWlzZXMsXG5cdGFwcGx5SGFuZGxlcnMsXG5cdHVwZGF0ZWRNb2R1bGVzTGlzdFxuKSB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0ge307XG5cdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gcmVtb3ZlZENodW5rcztcblx0Y3VycmVudFVwZGF0ZSA9IHJlbW92ZWRNb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcblx0XHRvYmpba2V5XSA9IGZhbHNlO1xuXHRcdHJldHVybiBvYmo7XG5cdH0sIHt9KTtcblx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0Y2h1bmtJZHMuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdGlmIChcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuXHRcdCkge1xuXHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHR9XG5cdH0pO1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yID0gZnVuY3Rpb24gKGNodW5rSWQsIHByb21pc2VzKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3MgJiZcblx0XHRcdFx0IV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuXHRcdFx0KSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpKTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIGZldGNoID09PSBcInVuZGVmaW5lZFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnQ6IG5lZWQgZmV0Y2ggQVBJXCIpO1xuXHRyZXR1cm4gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGKCkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0aWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHJldHVybjsgLy8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuXHRcdGlmKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVwZGF0ZSBtYW5pZmVzdCBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==