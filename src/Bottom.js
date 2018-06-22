/**
 * @file
 * The bottom buttons section of the dialog box
 */

import Tools from './DOM/Tools.js';


let Bottom = function(dialog, parentDiv) {
    let options = dialog.options;

    let initialize = () => {
        // let html = `<button class="dialog-cl-btn">Ok</button><button class="dialog-cl-btn">Cancel</button>`;
        let div = Tools.createClassedDiv('dialog-cl-bot');
        parentDiv.appendChild(div);

        if(options.buttons === null) {
            addClose(div);
        } else {
            options.buttons.forEach((item) => {
                addButton(div, item);
            });
        }
    }

    function addClose(div, item) {
        let button = document.createElement('button');
        div.appendChild(button);
        Tools.addClass(button, 'dialog-cl-btn');
        button.innerHTML = 'Close';
        button.onclick = (event) => {
            event.preventDefault();
            if(item !== undefined && item.click !== undefined) {
                item.click();
            } else {
                dialog.close();
            }
        }
    }


    function addButton(div, item) {
        let button = document.createElement('button');
        div.appendChild(button);
        Tools.addClass(button, 'dialog-cl-btn');
        button.innerHTML = item.contents;
        button.onclick = (event) => {
            event.preventDefault();
            if(item !== undefined && item.click !== undefined) {
                item.click();
            }
        }
    }

    initialize();
}

export default Bottom;

