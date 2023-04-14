import Methods from './methods.js';

export default function addbook(event) {
  event.preventDefault();
  const Author = document.getElementById('Author').value;
  const book = document.getElementById('Book').value;
  const ui = new Methods(book, Author);
  const books = {
    book,
    Author,
  };
  if (localStorage.getItem('books') === null) {
    const booksListItems = [];
    booksListItems.push(books);
    localStorage.setItem('books', JSON.stringify(booksListItems));
  } else {
    const booksListItems = JSON.parse(localStorage.getItem('books'));
    booksListItems.push(books);
    localStorage.setItem('books', JSON.stringify(booksListItems));
  }
  ui.addbook();
}