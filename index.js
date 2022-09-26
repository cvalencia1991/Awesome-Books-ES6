

const form = document.getElementById('booksform');

import {books} from "./modules/Constructor.js";
import {methods} from "./modules/methods.js";


form.addEventListener('submit',(event)=>{
    const Author = document.getElementById('Author').value;
    const book =document.getElementById('Book').value;
    let bookslist = new books(Author,book);
    const ui = new methods();
    ui.addbook(bookslist);
    debugger;
    event.prevenDefault();
});

