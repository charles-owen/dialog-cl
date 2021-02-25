/**
 * @file
 * Middle section of dialog box
 */

import Tools from './DOM/Tools.js';


export const Body = function(dialog, parentDiv) {
    let options = dialog.options;

    let div = document.createElement('div');
    div.classList.add('dialog-cl-body');

    Tools.addContent(div, options.content);

    // div = Tools.createClassedDiv('dialog-cl-body', options.content);
    parentDiv.appendChild(div);

    this.div = div;
}
