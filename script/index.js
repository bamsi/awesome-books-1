import { Book } from "../modules/books.module.js";
import { todayDate } from "../modules/display-date.module.js";

const title = document.getElementById("title");
const author = document.getElementById("author");
const form = document.getElementById("add-form");

form.addEventListener("submit", () => {
  const newBook = new Book(title.value, author.value);
  newBook.saveBook();
});

const book = new Book();
window.onload = function () {
  book.displayBooks();
  todayDate();
};

function removeBook(index) {
  const removeBooks = new Book();
  removeBooks.deleteBook(parseInt(index));
  removeBooks.displayBooks();
}

const bookItem = document.querySelectorAll(".remove-button");
bookItem.forEach((e) => {
  e.addEventListener("click", () => {
    removeBook(e.getAttribute("value"));
  });
});

const links = document.querySelectorAll(".link-item");

links.forEach((e) => {
  e.addEventListener("click", () => {
    links.forEach((item) => {
      const value = item.getAttribute("href");
      const element = document.querySelector(value);
      element.classList.add("hide");
      item.classList.remove("active-link");
    });
    const attributeValue = e.getAttribute("href");
    const section = document.querySelector(attributeValue);
    section.classList.remove("hide");
    e.classList.add("active-link");
  });
});
