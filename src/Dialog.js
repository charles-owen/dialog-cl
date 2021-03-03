import {Options} from './Options.js';
import {TitleBar} from './TitleBar';
import {Body} from './Body.js';
import Bottom from './Bottom.js';
import Tools from './DOM/Tools.js';
import {Mask} from './Mask.js';

import Resizer from 'resizer-cl';

/**
 * Flexible and configurable dialog box object
 * @constructor
 *
 * @version 1.0.4 Touch support for title bar dragging
 * @property {element} form Get the form DOM element (if used)
 */
let Dialog = function(options) {
    options = new Options(options);
    this.options = options;

    let body = null, mask = null, bottom = null;
    let form = null;

    Object.defineProperties(this, {
        form: {get: function() {return form}}
    })

    let initialize = () => {
        Dialog.zIndex += 2;
        this.zIndex = Dialog.zIndex;

        let div = Tools.createClassedDiv('dialog-cl');
        Tools.addClasses(div, options.addClass);

        this.div = div;
        div.style.zIndex = this.zIndex;

        let parent = document.querySelector('body');
        parent.appendChild(div);

        installResizable(div);

        let container = div;

        if(options.form) {
            // Create the optional surrounding form
            form = document.createElement('form');
            div.appendChild(form);

            container = form;
        }

        new TitleBar(this, container);
        body = new Body(this, container);
        if(options.buttons !== false) {
	        bottom = new Bottom(this, container);
        }
        mask = new Mask(this);

        place(div, options.parent);

        document.addEventListener('keydown', keydown, true);
    }

    const keydown = (event) => {
        if (event.keyCode === 27) {
            event.preventDefault()
            event.stopPropagation()
            this.close();
        }
    }

    let installResizable = (div) => {
        if(options.resize !== 'none') {
            let rsOptions = {
                'resize': options.resize,
                'handle': 'none',
                'grabSize': options.grabSize
            };

            new Resizer(div, rsOptions);
        }
    }


    function toPx(val) {
        return '' + val + 'px';
    }

    /**
     * Place the dialog box centered in the parent.
     * @param div Dialog box div
     * @param parent Parent div
     */
    const place = (div, parent) => {
        let parentWid;
        let parentHit;

        if(parent === null) {
            parentWid = window.innerWidth;
            parentHit = window.innerHeight;
        } else {
            parentWid = parent.offsetWidth;
            parentHit = parent.offsetHeight;
        }

        let height = div.offsetHeight;
        let width = div.offsetWidth;

        let top = parentHit/2 - height/2;
        if(top < 10) {
            top = 10;
        }

        let left = parentWid/2 - width/2;
        if(left < 0) {
            left = 0;
        }

        div.style.left = toPx(left);
        div.style.top = toPx(top);
    }

    initialize();

    this.addContent = function(content) {
        Tools.addContent(body.div, content);
    }

    this.close = function() {
        mask.remove();
        this.div.parentNode.removeChild(this.div);
        document.removeEventListener('keydown', keydown, true);
    }

	/**
     * Calling is equivalent to pressing the first default button
	 */
	this.default = function() {
        if(bottom !== null) {
            bottom.default();
        }
    }
}

Dialog.zIndex = 10000;

export default Dialog;

