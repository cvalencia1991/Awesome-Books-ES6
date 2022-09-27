const form = document.getElementById('booksform');
const cardbook = document.getElementById('booklist');
const addnew = document.getElementById('addnew');
const list = document.getElementById('list');
const contact = document.getElementById('contact');
const styleHeader = document.getElementById('headtittle');
const statusbooks = document.getElementById('booksform');


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

list.addEventListener('click',(event)=>{
    styleHeader.textContent = 'All Awesome Books';
    statusbooks.style.display='none';
    cardbook.style.display='flex';
    event.preventDefault();
});

addnew.addEventListener('click',(event)=>{
    styleHeader.textContent = 'Add New Book';
    statusbooks.style.display='flex';
    cardbook.style.display='none';
    event.preventDefault();
});

contact.addEventListener('click',(event)=>{
    styleHeader.textContent = 'Contact information';
    statusbooks.style.display='none';
    cardbook.style.display='none';
    event.preventDefault();
});


