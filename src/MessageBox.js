/**
 * Handy Simple Message Box
 */

import Dialog from './Dialog.js';

let MessageBox = function(title, message, type, button1, button2) {
    // Default: OK
    let buttons = [
        {
            contents: 'Ok',
            click: function(dialog) {
                if(button1 !== undefined) {
                    button1();
                }

                dialog.close()
            },
            'focus': true
        }
    ];

    if(type === MessageBox.OKCANCEL) {
        buttons = [
            {
                contents: 'Ok',
                click: function(dialog) {
                    if(button1 !== undefined) {
                        button1();
                    }

                    dialog.close()
                },
                'focus': true
            },
            {
                contents: 'Cancel',
                click: function(dialog) {
                    if(button2 !== undefined) {
                        button2();
                    }

                    dialog.close()
                }
            }
        ]
    }

      let dialog = new Dialog({
          'title': title,
          'content': '<div class="message-cl"><p>' + message + '</p></div>',
          'buttons': buttons
     });
}

MessageBox.OK = 0;
MessageBox.OKCANCEL = 1;

export default MessageBox;

