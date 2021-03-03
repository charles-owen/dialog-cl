import './src/polyfills/all.js';
import Dialog from './src/Dialog.js';
import MessageBox from './src/MessageBox.js';
import './src/_dialog.scss';
import 'icons-cl';

Dialog.MessageBox = MessageBox;

export default Dialog;
export {Dialog};

