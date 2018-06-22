/**
 * @file
 * Flexible and configurable dialog box object
 */

import Options from './Options.js';
import TitleBar from './TitleBar.js';
import Body from './Body.js';
import Bottom from './Bottom.js';
import Tools from './DOM/Tools.js';
import Resizer from 'resizer-cl';
import Mask from './Mask.js';

let Dialog = function(options) {

    options = new Options(options);
    this.options = options;

    let body = null, mask = null;

    let initialize = () => {
        let div = Tools.createClassedDiv('dialog-cl');
        if(options.addClass !== null) {
            Tools.addClass(div, options.addClass);
        }

        this.div = div;

        let parent = document.querySelector('body');
        parent.appendChild(div);

        installResizable(div);



        new TitleBar(this, div);
        body = new Body(this, div);
        new Bottom(this, div);
        mask = new Mask(this);

        place(div, parent);
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

    let place = (div, parent) => {
        let parentWid = parent.offsetWidth;
        let parentHit = parent.offsetHeight;

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
    }
}

export default Dialog;

