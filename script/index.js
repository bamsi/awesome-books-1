import { Book } from '../modules/books.module.js';
import { todayDate } from '../modules/display-date.module.js';

const title = document.getElementById('title');
const author = document.getElementById('author');
const form = document.getElementById('add-form');
const links = document.querySelectorAll('.link-item');

todayDate();

function hideAllSections() {
  links.forEach((item) => {
    const value = item.getAttribute('href');
    const element = document.querySelector(value);
    element.classList.add('hide');
    item.classList.remove('active-link');
  });
}

form.addEventListener('submit', () => {
  const newBook = new Book(title.value, author.value);
  newBook.saveBook();
  newBook.displayBooks();
  hideAllSections();
  const link = document.getElementById('default-link');
  link.classList.add('active-link');
  const section = document.querySelector('#list');
  section.classList.remove('hide');
  form.reset();
});

const book = new Book();
window.onload = book.displayBooks();

function removeBook(index) {
  const removeBooks = new Book();
  removeBooks.deleteBook(parseInt(index, 10));
  removeBooks.displayBooks();
}

const bookItem = document.querySelectorAll('.remove-button');
bookItem.forEach((e) => {
  e.addEventListener('click', () => {
    removeBook(e.getAttribute('value'));
  });
});

links.forEach((e) => {
  e.addEventListener('click', () => {
    hideAllSections();
    const attributeValue = e.getAttribute('href');
    const section = document.querySelector(attributeValue);
    section.classList.remove('hide');
    e.classList.add('active-link');
  });
});
