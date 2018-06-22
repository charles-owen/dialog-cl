/**
 * Various interface options we can select
 */

/**
 * Interface options.
 * @param options User provided options that override the default values.
 * @constructor
 */
var Options = function(options) {
    options = options ? options : {};

    /// Title bar text
    this.title = 'Dialog Box';

    /// Any added class
    this.addClass = null;

    /// Is this dialog box resizable?
    /// Options are: 'none', 'vertical', 'horizontal'
    this.resize = 'none';

    /// Size of the border edge we can grab if resizable in pixels
    this.grabSize = 4;

    /// Array of title bar buttons to add.
    /// If null, a close button is added automatically.
    /// Otherwise, an array of objects, with these fields:
    ///   type: 'close' for a close  button, 'custom' for custom button contents
    ///   contents: HTML to place inside button tag
    ///   click: Click handler
    this.titleBarButtons = null;

    /// Array of buttons for the bottom.
    /// If null, a close button is added automatically.
    /// Otherwise, an array of objects, with these fields:
    ///   contents: If provided, HTML to place inside button tag
    ///   click: Click handler
    this.buttons = null;

    /// Content to add to the dialog box. If null, none is added on creation.
    this.content = null;

    /// Is this a modal dialog box? If true, controls underneath are disabled.
    this.modal = true;

    for(var property in options) {
        if(options.hasOwnProperty(property)) {
            if(!this.hasOwnProperty(property)) {
                throw new Error("Invalid option " + property);
            }
            this[property] = options[property];
        }
    }

}



export default Options;
