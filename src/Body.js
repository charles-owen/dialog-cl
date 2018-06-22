/**
 * @file
 * Middle section of dialog box
 */

import Tools from './DOM/Tools.js';


let Body = function(dialog, parentDiv) {
    let options = dialog.options;

    let div = Tools.createClassedDiv('dialog-cl-body', options.content);
    parentDiv.appendChild(div);

    this.div = div;
}


export default Body;

