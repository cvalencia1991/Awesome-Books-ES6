export default function getBooks() {
  const books = JSON.parse(localStorage.getItem('books'));
  const element = document.getElementById('booklistinfo');
  element.innerHTML = '';
  for (let i = 0; i < books.length; i += 1) {
    element.innerHTML += `
    <div class="bookElement">
        "${books[i].Author}" by ${books[i].book}
        <div>
        <button type="button" name="deletebook">remove</button>
        </div>
    </div>
        `;
  }
}
