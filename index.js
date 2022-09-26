

const form = document.getElementById('booksform');


import {books} from "./modules/Constructor.js";



form.addEventListener('submit',(event)=>{
    const Author = document.getElementById('Author').value;
    const book =document.getElementById('Book').value;
    let bookslist = new books(Author,book);
    alert('send it');
    event.prevenDefault();
})


