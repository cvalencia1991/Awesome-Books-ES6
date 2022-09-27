/* eslint-disable import/prefer-default-export */
export class methods {
  addbook =(books) => {
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
    this.resetform();
  }

    resetform =() => {
      document.getElementById('booksform').reset();
    }

    removebook =(element) => {
      if (element.name === 'deletebook') {
        element.parentElement.parentElement.remove();
      }
    }
}