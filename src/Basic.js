/**
 * @file
 */

let Basic = function(sel) {
    let element = document.querySelector(sel);
    if(element === null) {
        console.log('Selector ' + sel + ' not found');
        return;
    }

    element.innerHTML = '<p>Success 4</p>';
}

export default Basic;

