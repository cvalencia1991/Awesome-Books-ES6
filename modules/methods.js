export default class Methods {
  constructor(Book, Author) {
    this.Book = Book;
    this.Author = Author;
  }

  addbook() {
    const productCard = document.getElementById('booklist');
    const element = document.getElementById('booklistinfo');
    element.innerHTML = `
      "${this.Book}" by ${this.Author}
      <div>
      <button type="button" title="${this.Book}" name="deletebook">remove</button>
      <div>
          `;
    productCard.appendChild(element);
    document.getElementById('booksform').reset();
  }

  removebook(element) {
    this.element = element;
    if (this.element.name === 'deletebook') {
      const books = JSON.parse(localStorage.getItem('books'));
      const filteredBooks = books.filter((b) => b.book !== element.title);
      localStorage.setItem('books', JSON.stringify(filteredBooks));
      this.showMessage('remove Book Succesfully', 'success');
      element.parentElement.parentElement.remove();
    }
  }

  showMessage(message, cssClass) {
    this.message = message;
    const div = document.getElementById('messageinfo');
    div.className = `alertMessage ${cssClass}`;
    const elementDiv = document.createElement('div');
    elementDiv.innerHTML = `${this.message}`;
    elementDiv.className = 'infoMessage';
    div.appendChild(elementDiv);
    setTimeout(() => {
      document.querySelector('.infoMessage').remove();
    }, 3000);
  }
}
