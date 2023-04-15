export default function getBooks() {
  const books = JSON.parse(localStorage.getItem('books'));
  const element = document.getElementById('booklistinfo');
  element.innerHTML = '';
  for (let i = 0; i < books.length; i += 1) {
    element.innerHTML += `
    <div class="bookElement">
        "${books[i].book}" by ${books[i].Author}
        <div>
        <button type="button" title="${books[i].book}" name="deletebook">remove</button>
        </div>
    </div>
        `;
  }
}
