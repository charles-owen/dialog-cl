/**
 * @file
 * Title bar management
 */

import Tools from './DOM/Tools.js';

export function TitleBar(dialog, parentDiv) {
    let options = dialog.options;

    /// Mouse move event handlers installed flag
    let installedMoveHandlers = false;

    /// Touch move event handlers installed flag
    let installedTouchHandlers = false;

    let initialX, initialY;
    let initialPositionX, initialPositionY;

    let initialize = () => {
        let html = `<h1>${options.title}</h1>`;
        let div = Tools.createClassedDiv('dialog-cl-top', html);
        Tools.addClasses(div, options.titleBarAddClass);
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

        h1.addEventListener('mousedown', mouseDownListener);
        h1.addEventListener('touchstart', touchStartListener);
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

    function moveTo(x, y) {
        let dx = x - initialX;
        let dy = y - initialY;

        let newPositionX = initialPositionX + dx;
        let newPositionY = initialPositionY + dy;

        dialog.div.style.left = newPositionX + 'px';
        dialog.div.style.top = newPositionY + 'px';
    }

    //
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

        let rect = dialog.div.getBoundingClientRect();
        initialPositionX = rect.left;
        initialPositionY = rect.top;

        installMouseHandlers();
    }

    function mouseMoveListener(e) {
        if(e.buttons !== 1) {
            removeHandlers();
            return;
        }

        moveTo(e.pageX, e.pageY);
    }

    function mouseUpListener(e) {
        removeHandlers();
    }

    //
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

        let rect = dialog.div.getBoundingClientRect();
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
        if(installedMoveHandlers) {

            document.removeEventListener('mousemove', mouseMoveListener);
            document.removeEventListener('mouseup', mouseUpListener);
            installedMoveHandlers = false;
        }

        if(installedTouchHandlers) {
            document.removeEventListener('touchmove', touchMoveListener);
            document.removeEventListener('touchend', touchEndListener);
            document.removeEventListener('touchcancel', touchEndListener);
            installedTouchHandlers = false;
        }
    }

    initialize();
}

