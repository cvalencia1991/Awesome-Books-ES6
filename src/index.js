import AddBook from '../modules/AddBook.js';
import showList, { addNew, infoContact } from '../modules/cards.js';
import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';
import RemoveBook from '../modules/removeBook.js';
import getBooks from '../modules/getBooks.js';

const form = document.getElementById('booksform');
const cardbook = document.getElementById('booklist');
const addnew = document.getElementById('addnew');
const list = document.getElementById('list');
const contact = document.getElementById('contact');

document.getElementById('date').innerText = DateTime.now();

cardbook.addEventListener('click', RemoveBook);
list.addEventListener('click', showList);
addnew.addEventListener('click', addNew);
contact.addEventListener('click', infoContact);
form.addEventListener('submit', AddBook);
getBooks();
