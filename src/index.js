import AddBook from '../modules/AddBook.js';
import showList, { addNew, infoContact } from '../modules/cards.js';
import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';
import RemoveBook from '../modules/removeBook.js';

const form = document.getElementById('booksform');
const cardbook = document.getElementById('booklist');
const addnew = document.getElementById('addnew');
const list = document.getElementById('list');
const contact = document.getElementById('contact');

const date = document.getElementById('date');

const updateTime = () => {
  const now = DateTime.now();
  const dateString = now.toFormat('MM-dd-yyyy');
  const timeString = now.toFormat('hh:mm:ss a');
  date.innerHTML = `${dateString} - ${timeString}`;
};
setInterval(updateTime, 1000);

cardbook.addEventListener('click', RemoveBook);
list.addEventListener('click', showList);
addnew.addEventListener('click', addNew);
contact.addEventListener('click', infoContact);
form.addEventListener('submit', AddBook);
