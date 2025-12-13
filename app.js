const myLibrary = [];
const dialog = document.createElement("dialog");
dialog.setAttribute("class", "dialog");
const body = document.querySelector("body");
const trData = document.querySelector("trData");
const pattern = "[0-9]";

function Book(title, author, pages, readed) {
  (this.id = crypto.getRandomValues),
    (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.readed = readed);
}

Book.prototype.changeStatus = function () {
  if (this.readed === "yes") {
    this.readed = "no";
  } else {
    this.readed = "yes";
  }
};

Book.prototype.getId = function () {};

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
      <th><button class="changeStatusBtn" >Change Status</button></th>
      <th><button class="removeBookBtn">Remove</button></th>
    </tr>
    `;
    });
  }
  initializerChangeStatusBtns();
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
      <input id="authorInput" type="text">
    </div>
    <div>
      <label for="pages">pages: </label>
      <input id="pagesInput"
        type="number"
        min="1"
        step="1"
        max="15000"
      />
    </div>
    <div>
      <label for="readed">readed: </label>
      <input type="radio" id="readedInputYes"  name="readStatus" value="yes" />
      <label for="yes">Yes</label>
      <input type="radio" id="readedInputNo" name="readStatus" value="no" />
      <label for="no">No</label>
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
  addToArrayBtn.addEventListener("click", () => {
    let newID = addToArray(form);
    showIDConsole(newID);
  });
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
    const readed = document.querySelector('input[name="readStatus"]:checked');
    let readStatusValue = null;
    if (readed) {
      readStatusValue = readed.value;
    }
    let newBook = new Book(
      title.value,
      author.value,
      pages.value,
      readStatusValue
    );
    myLibrary.push(newBook);
    cleanForm(form);
    displayBooks();
    showBooksConsole();
    return newBook.id;
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
}

function initializerRemoveBtns() {
  const removeButtons = document.querySelectorAll(".removeBookBtn");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.dataset.index;
      console.log(index);
      removeBook(index);
    });
  });
}

function initializerChangeStatusBtns() {
  const buttons = document.querySelectorAll(".changeStatusBtn");
  buttons.forEach((buttons) => {
    buttons.addEventListener("click", (event) => {
      const index = event.target.dataset.index;
      let numIndex = parseInt(index);
      console.log(index + " " + numIndex);
      myLibrary[numIndex].changeStatus();
    });
  });
}

function showIDConsole() {
  console.log(myLibrary.indexOf(id));
}

function search(id) {
  myLibrary.forEach((book) => {
    if (book.id === id) return true;
  });
}
