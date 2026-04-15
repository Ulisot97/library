const myLibrary = [];
const dialog = document.createElement("dialog");
dialog.setAttribute("class", "dialog");
const body = document.querySelector("body");

function Book(title, author, pages, readed) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readed = readed;
}

Book.prototype.changeStatus = function () {
  this.readed = this.readed === "yes" ? "no" : "yes";
};

function displayBooks() {
  const table = document.querySelector("#bookList");
  table.innerHTML = "";

  if (myLibrary.length === 0) {
    table.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 20px;">
          No books in your library. Click "New Book" to add one.
        </td>
      </tr>
    `;
    return;
  }

  myLibrary.forEach((book, index) => {
    table.innerHTML += `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.readed}</td>
        <td><button class="changeStatusBtn" data-index="${index}">Change Status</button></td>
        <td><button class="removeBookBtn" data-index="${index}">Remove</button></td>
      </tr>
    `;
  });

  initializerChangeStatusBtns();
  initializerRemoveBtns();
}

function addBookToLibrary() {
  body.appendChild(dialog);
  dialog.innerHTML = `
    <h2>New Book</h2>
    <form id="bookForm" method="dialog">
      <div>
        <label for="title">title: </label>
        <input id="titleInput" type="text" required>
      </div>
      <div>
        <label for="author">author: </label>
        <input id="authorInput" type="text" required>
      </div>
      <div>
        <label for="pages">pages: </label>
        <input id="pagesInput" type="number" min="1" max="15000" required>
      </div>
      <div>
        <label for="readed">readed: </label>
        <input type="radio" id="readedInputYes" name="readStatus" value="yes" required>
        <label for="yes">Yes</label>
        <input type="radio" id="readedInputNo" name="readStatus" value="no">
        <label for="no">No</label>
      </div>
      <div>
        <button type="submit" class="btnAdd">Add</button>
        <button type="button" id="closeDialogBtn" class="btnCancelar">Cancel</button>
      </div>
    </form>
  `;

  const form = document.querySelector("#bookForm");
  const closeDialogBtn = document.querySelector("#closeDialogBtn");

  closeDialogBtn.addEventListener("click", () => {
    dialog.close();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector("#titleInput").value;
    const author = document.querySelector("#authorInput").value;
    const pages = document.querySelector("#pagesInput").value;
    const readed = document.querySelector('input[name="readStatus"]:checked');
    const readStatusValue = readed ? readed.value : "no";

    myLibrary.push(new Book(title, author, pages, readStatusValue));
    displayBooks();
  });

  dialog.showModal();
}

function removeBook(indexToRemove) {
  myLibrary.splice(indexToRemove, 1);
  displayBooks();
}

function initializerRemoveBtns() {
  document.querySelectorAll(".removeBookBtn").forEach((button) => {
    button.addEventListener("click", (event) => {
      removeBook(parseInt(event.target.dataset.index));
    });
  });
}

function initializerChangeStatusBtns() {
  document.querySelectorAll(".changeStatusBtn").forEach((button) => {
    button.addEventListener("click", (event) => {
      myLibrary[parseInt(event.target.dataset.index)].changeStatus();
      displayBooks();
    });
  });
}
