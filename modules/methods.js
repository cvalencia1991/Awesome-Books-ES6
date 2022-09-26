
import {books} from "./Constructor.js";


export class methods {
  addbook =(event)=> {
    const productCard = document.getElementById('booklist');
    const element = document.createElement('div');
    element.classList.add('bookstyle');
    element.innerHTML = `
      "${books.Book}" by ${books.Author}
      <div>
      <button type="button" name="deletebook">remove</button>
      <div>
          `;
    productCard.appendChild(element);
    event.preventDefault();
    }
/*
    resetform() {
      document.getElementById('books').reset();
    }

    removebook(element) {
      if (element.name === 'deletebook') {
        element.parentElement.parentElement.remove();
      }
    } */

  }

