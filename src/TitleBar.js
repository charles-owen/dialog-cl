/**
 * @file
 * Title bar management
 */

import Tools from './DOM/Tools.js';


let TitleBar = function(dialog, parentDiv) {
    let options = dialog.options;

    /// Mouse move event handler
    let installedMoveListener = null;

    let initialX, initialY;
    let initialPositionX, initialPositionY;

    let initialize = () => {
        let html = `<h1>${options.title}</h1>`;
        let div = Tools.createClassedDiv('dialog-cl-top', html);
        parentDiv.appendChild(div);

        if(options.titleBarButtons === null) {
            addClose(div);
        } else {
            options.titleBarButtons.forEach((item) => {
                if(item.type === 'close') {
                    addClose(div, item);
                } else if(item.type === 'custom') {
                    addCustom(div, item); // addCustom(div, item);
                }
            });
        }


        let h1 = div.querySelector('h1');

        h1.addEventListener('mousedown', (event) => {
            initialX = event.pageX;
            initialY = event.pageY;

            let rect = dialog.div.getBoundingClientRect();
            initialPositionX = rect.left;
            initialPositionY = rect.top;

            installHandlers();
        });
    }


    function addClose(div, item) {
        let button = document.createElement('button');
        div.appendChild(button);
        Tools.addClass(button, 'dialog-cl-tb-button');
        button.innerHTML = '<span class="icons-cl icons-cl-close">';
        button.onclick = (event) => {
            event.preventDefault();
            if(item !== undefined && item.click !== undefined) {
                item.click();
            } else {
                dialog.close();
            }
        }
    }


    function addCustom(div, item) {
        let button = document.createElement('button');
        div.appendChild(button);
        Tools.addClass(button, 'dialog-cl-tb-button');
        button.innerHTML = item.contents;
        button.onclick = (event) => {
            event.preventDefault();
            if(item !== undefined && item.click !== undefined) {
                item.click();
            } else {
                dialog.close();
            }
        }
    }

    function mouseMoveListener(e) {
        if(e.buttons !== 1) {
            removeHandlers();
            return;
        }

        let dx = e.pageX - initialX;
        let dy = e.pageY - initialY;

        let newPositionX = initialPositionX + dx;
        let newPositionY = initialPositionY + dy;

        dialog.div.style.left = newPositionX + 'px';
        dialog.div.style.top = newPositionY + 'px';
    }

    function mouseUpListener(e) {
        removeHandlers();
    }

    function installHandlers() {
        removeHandlers();

        installedMoveListener = mouseMoveListener;
        document.addEventListener('mousemove', installedMoveListener);
        document.addEventListener('mouseup', mouseUpListener);
    }

    function removeHandlers() {
        if(installedMoveListener === null) {
            return;
        }

        document.removeEventListener('mousemove', installedMoveListener);
        document.removeEventListener('mouseup', mouseUpListener);
        installedMoveListener = null;
    }

    initialize();
}

export default TitleBar;
