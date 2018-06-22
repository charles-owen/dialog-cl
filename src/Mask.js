/**
 * Mask that allows the dialog box to be modal.
 */

import Tools from './DOM/Tools.js';

let Mask = function(dialog) {
    let options = dialog.options;

    let mask = null;

    if(options.modal) {
        let body = document.querySelector('body');
        mask =  Tools.createClassedDiv('mask'); // document.createElement('div');

        mask.style.position = 'fixed';
        mask.style.left = 0;
        mask.style.top = 0;
        mask.style.width = "100%";
        mask.style.height = '100%';
        mask.style.backgroundColor = 'transparent';
        mask.style.zIndex = dialog.zIndex - 1;

        body.appendChild(mask);
    }

    this.remove = function() {
        if(mask !== null) {
            let body = document.querySelector('body');
            body.removeChild(mask);
            mask = null;
        }
    }
}

export default Mask;

