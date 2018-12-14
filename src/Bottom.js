/**
 * @file
 * The bottom buttons section of the dialog box
 */

import Tools from './DOM/Tools.js';


let Bottom = function(dialog, parentDiv) {
    let options = dialog.options;

    let initialize = () => {
        // let html = `<button class="cl-dialog-btn">Ok</button><button class="cl-dialog-btn">Cancel</button>`;
        let div = Tools.createClassedDiv('cl-dialog-bottom');
        parentDiv.appendChild(div);

        if(options.buttons === null) {
            addOk(div);
        } else {
            options.buttons.forEach((item) => {
                addButton(div, item);
            });
        }
    }

    function addOk(div, item) {
        let button = document.createElement('button');
        button.type = 'submit';
        div.appendChild(button);
        button.innerHTML = 'Ok';
        button.onclick = (event) => {
            event.preventDefault();
            if(item !== undefined && item.click !== undefined) {
                item.click(dialog);
            } else {
                dialog.close();
            }
        }

        button.focus();
    }


    function addButton(div, item) {
        let button = document.createElement('button');
        button.type = 'submit';
        div.appendChild(button);
        button.innerHTML = item.contents;
        button.onclick = (event) => {
            event.preventDefault();
            if(item !== undefined && item.click !== undefined) {
                item.click(dialog);
            }
        }

        if(item.focus === true) {
            button.focus();
        }
    }

    initialize();

    this.default = function() {
	    options.buttons.forEach((item) => {
		    if(item.default === true && item.click !== undefined) {
			    item.click(dialog);
            }
	    });
    }
}

export default Bottom;

