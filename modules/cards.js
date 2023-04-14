const styleHeader = document.getElementById('headtittle');
const statusbooks = document.getElementById('booksform');
const cardbook = document.getElementById('booklist');

export default function showList(event) {
  event.preventDefault();
  styleHeader.textContent = 'All Awesome Books';
  statusbooks.style.display = 'none';
  cardbook.style.display = 'flex';
}

export function addNew(event) {
  event.preventDefault();
  styleHeader.textContent = 'Add New Book';
  statusbooks.style.display = 'flex';
  cardbook.style.display = 'none';
}

export function infoContact(event) {
  styleHeader.textContent = 'Contact information';
  statusbooks.style.display = 'none';
  cardbook.style.display = 'none';
  const element2 = document.createElement('div');
  element2.classList.add('stylecontact');
  element2.innerHTML = `
            <p>Do you have any questions or just want to say "Hello"?<br>
            You can reach out to us!<br><br>
            <ul>
                <li>Our email: ceservalencia@gmail.com</li>
                <li>Our phone number: 3105202588</li>
                <li>Our address: Streetname 4364, 74834 City, country</li>
            </ul>`;
  styleHeader.append(element2);
  event.preventDefault();
}
