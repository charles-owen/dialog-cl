/**
 * @file
 * Convenience functions for the DOM.
 * Tools that avoid having to have jQuery installed.
 */

export const Tools = function() {

}

/**
 * Add a class to an element
 * @param element Element to add to
 * @param className Class to add
 */
Tools.addClass = function(element, className) {
    if (element.classList)
        element.classList.add(className);
    else
        element.className += ' ' + className;
}

Tools.addClasses = function(element, classes) {
    if(classes === undefined || classes === null) {
        return;
    }

    classes.split(' ').forEach((cls) => {
        Tools.addClass(element, cls);
    });
}

/**
 * Create a DIV with a provided class name.
 * @param className Class to add to the div
 * @param content Content to place in the div. HTML or Element
 * @returns {Element} Created DOM Element
 */
Tools.createClassedDiv = function(className, content) {
    let div = document.createElement('div');
    Tools.addClass(div, className);
    Tools.addContent(div, content);
    return div;
}

/**
 * Add content to an element.
 * @param element Element to add to
 * @param content Content. Can be HTML or an Element.
 */
Tools.addContent = function(element, content) {
    if(Tools.isString(content)) {
        element.innerHTML += content;
    } else if(Tools.isElement(content)) {
        element.appendChild(content);
    }
}

Tools.isString = function(val) {
    return typeof val === 'string' || ((!!val && typeof val === 'object') && Object.prototype.toString.call(val) === '[object String]');
}

Tools.isElement = function(val) {
    return val !== undefined && val !== null && val.nodeValue !== undefined;
}

export default Tools;

