

const form = document.getElementById('booksform');
const cardbook = document.getElementById('booklist');

import {books} from "./modules/Constructor.js";
import {methods} from "./modules/methods.js";

const ui = new methods();

form.addEventListener('submit',(event)=>{
    const Author = document.getElementById('Author').value;
    const book =document.getElementById('Book').value;
    let bookslist = new books(Author,book);
    ui.addbook(bookslist);
    event.preventDefault();
});

cardbook.addEventListener('click',(e)=>{
    ui.removebook(e.target);
});


