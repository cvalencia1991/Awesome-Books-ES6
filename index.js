

const form = document.getElementById('booksform');
const cardbook = document.getElementById('booklist');


import {books} from "./modules/Constructor.js";
import {methods} from "./modules/methods.js";
import { DateTime } from "./node_modules/luxon/build/es6/luxon.js";

const ui = new methods();
document.getElementById('date').innerText = DateTime.now();


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



