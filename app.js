const myLibrary = [];

function Book(title, author, pages, readed) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.readed = readed);
}

function addBookLibrary(newBook) {
  myLibrary.push(newBook);
  const table = document.querySelector(".table");
  const rowBook = document.createElement("tr");
  let th1 = document.createElement("th");
  let th2 = document.createElement("th");
  let th3 = document.createElement("th");
  let th4 = document.createElement("th");
  th1.textContent = newBook.title;
  th2.textContent = newBook.author;
  th3.textContent = newBook.pages;
  th4.textContent = newBook.readed;
  rowBook.appendChild(th1);
  rowBook.appendChild(th2);
  rowBook.appendChild(th3);
  rowBook.appendChild(th4);
  table.appendChild(rowBook);
  console.log("Added");
}

function removeBookLibrary(removeBook) {
  let index = myLibrary.indexOf(removeBook);
  if (index != -1) myLibrary.splice(index, 1);
}

function changeReaded(changeBook, newStatus) {
  changeBook.readed = newStatus;
}
