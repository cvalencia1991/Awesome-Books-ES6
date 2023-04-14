import AddBook from '../modules/AddBook.js';
import Methods from '../modules/methods.js';
import showList, { addNew, infoContact } from '../modules/cards.js';
import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

const form = document.getElementById('booksform');
const cardbook = document.getElementById('booklist');
const addnew = document.getElementById('addnew');
const list = document.getElementById('list');
const contact = document.getElementById('contact');

document.getElementById('date').innerText = DateTime.now();

cardbook.addEventListener('click', (e) => {
  const ui = new Methods();
  ui.removebook(e.target);
});

list.addEventListener('click', showList);
addnew.addEventListener('click', addNew);
contact.addEventListener('click', infoContact);
form.addEventListener('submit', AddBook);
