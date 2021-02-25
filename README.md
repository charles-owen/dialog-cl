# Flexible Dialog Box

I got tired to trying to get the jQuery UI dialog boxes to do what I wanted
and decided to create a dialog box that is appropriate to my applications.
If others find it useful, that will be nice.

The dialog-cl library is a Webpack project and is ES-6 compliant.
 
## Install

### CDN

``` html
<script src="https://unpkg.com/dialog-cl/dist/dialog-cl.js"></script>
<!-- or -->
<script src="https://unpkg.com/dialog-cl/dist/dialog-cl.min.js"></script>
```

### Package managers

[npm](https://www.npmjs.com/package/dialog-cl): `npm install dialog-cl --save`

## Initialize

``` html
      let dialog = new Dialog({
          'resize': 'both',
          'content': '<p>Dialog box contents</p>'
      });
```

## Options

An options object is passed to the constructor. The option values are:

### title

A string to use as the dialog box title. The default value is 'Dialog Box'.

``` html
      let dialog = new Dialog({
          'title': 'My Dialog Box'
      });
```

### addClass

A class to add to the dialog box top-level div. This can be used
to modify the appearance of the dialog box, including 
setting the width, height, and the minimum and maximums for 
width and height.

``` html
      let dialog = new Dialog({
          'title': 'My Dialog Box',
          'addClass': 'my-dialog-class',
      });
```

The rest are from the Options.js source for now. I'll get
around to translating them eventually.

``` javascript 

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
```

## MessageBox

Sometimes you just need a simple message box for things like "Are you sure you want
to delete" and such. The MesssageBox object allows for very simple message
boxes. There are currently these options.

### Ok Message Box

``` javascript
    new Dialog.MessageBox('This is important!',
        'I am sure you are impressed',
        Dialog.MessageBox.OK,
        function() {
          console.log('ok');
        }
    );
```

### Ok/Cancel Message Box

``` javascript
    new Dialog.MessageBox('Are you sure?',
        'Are you sure you want to delete Lansing?',
        Dialog.MessageBox.OKCANCEL,
        function() {
          console.log('ok');
        },
        function() {
          console.log('cancel');
        }
    );
```
## License

Copyright 2016-2018 Michigan States University

dialog-cl is released under the MIT license.

* * *

Written and maintained by Charles B. Owen

