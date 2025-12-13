const myLibrary = [];
const dialog = document.createElement("dialog");
dialog.setAttribute("class", "dialog");
const body = document.querySelector("body");
const trData = document.querySelector("trData");

function Book(title, author, pages, readed) {
  (this.id = crypto.getRandomValues),
    (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.readed = readed);
}

/*myLibrary.push(new Book("The Hobbit", "R.R.Tolkien", 234, "yes"));
myLibrary.push(new Book("The Lord of the Ring", "R.R.Tolkien", 600, "yes"));
myLibrary.push(new Book("The Long Walk", "Stephen King", 500, "no"));
myLibrary.push(new Book("Meditations", "Marco Aurelio", 234, "no"));
myLibrary.push(new Book("El Hombre Mediocre", "Jose Ingenieros", 115, "yes"));*/

function displayBooks() {
  const table = document.querySelector("#bookList");
  table.innerHTML = "";
  if (myLibrary.length === 0) {
    alert("NO BOOKS ON LIBRARY");
  } else {
    myLibrary.forEach((book, index) => {
      table.innerHTML += `
    <tr id="trData">
      <th>${book.title}</th>
      <th>${book.author}</th>
      <th>${book.pages}</th>
      <th>${book.readed}</th>
      <th><button id="remove-book-btn">Remove</button></th>
    </tr>
    `;
    });
  }
  initializerRemoveBtns();
}

function addBookToLibrary() {
  body.appendChild(dialog);
  dialog.innerHTML = `
    <h2>New Book</h2>
    <form method = "dialog">
    <div>
      <label for="title">title: </label>
      <input id="titleInput" type="text">
    </div>
    <div>
      <label for="author">author: </label>
      <input id="authorInput" type="text"></div>
    </div>
    <div>
      <label for="pages">pages: </label>
      <input id="pagesInput"  type="text"></div>
    </div>
    <div>
      <label for="readed">readed: </label>
      <input id="readedInput" type="text">
    </div>
    </form>
    <div>
      <button class="btnAdd" id="addToArrayBtn">Add</button>
    </div>
    <div>
      <button class="btnCancelar" id="closeDialogBtn">Cancelar</button>
    </div>
  `;
  const addToArrayBtn = document.querySelector("#addToArrayBtn");
  const form = document.querySelector("form");
  addToArrayBtn.addEventListener("click", addToArray(form));
  cleanForm(form);
  const closeDialogBtn = document.querySelector("#closeDialogBtn");
  closeDialog(dialog, closeDialogBtn);
  dialog.showModal();
}

function addToArray(form) {
  addToArrayBtn.addEventListener("click", () => {
    const title = document.querySelector("#titleInput");
    const author = document.querySelector("#authorInput");
    const pages = document.querySelector("#pagesInput");
    const readed = document.querySelector("#readedInput");
    myLibrary.push(
      new Book(title.value, author.value, pages.value, readed.value)
    );
    cleanForm(form);
    displayBooks();
  });
}

function closeDialog(dialog, closeDialogBtn) {
  closeDialogBtn.addEventListener("click", () => {
    dialog.close();
  });
}

function cleanForm(form) {
  form.reset();
}

function removeBook(indexToRemove) {
  myLibrary.splice(indexToRemove, 1);
  displayBooks();
  console.log(`Libro en el índice ${indexToRemove} eliminado.`);
}

function initializerRemoveBtns() {
  const removeButtons = document.querySelectorAll("#remove-book-btn");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.dataset.index;
      removeBook(index);
      trData.remove();
    });
  });
}
