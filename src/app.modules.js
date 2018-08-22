// The public-path module must be imported first!
//import './public-path.js';

import './polyfills/all.js';
import Dialog from './Dialog.js';
import MessageBox from './MessageBox.js';
import './_dialog.scss';
import 'icons-cl';

Dialog.MessageBox = MessageBox;

export default Dialog;
export {Dialog};

