import Methods from './methods.js';

export default function RemoveBook(e) {
  const ui = new Methods();
  ui.removebook(e.target);
}
