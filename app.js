const myLibrary = [];

function Book(title, author, pages, readed) {
  (this.id = crypto.getRandomValues),
    (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.readed = readed);
}

function addBookLibrary() {
  let dialog = document.querySelector("#myDialog");
  let table = document.querySelector(".table");
  let form = document.createElement("form");
  let label1 = document.createElement("label");
  let input1 = document.createElement("input");
  let label2 = document.createElement("label");
  let input2 = document.createElement("input");
  let label3 = document.createElement("label");
  let input3 = document.createElement("input");
  let label4 = document.createElement("label");
  let select = document.createElement("select");
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  let divButton = document.createElement("div");
  let addButton = document.createElement("button");
  let spanButton = document.createElement("span");
  spanButton.textContent = "Add";
  spanButton.setAttribute("class", "spanButton");
  dialog.setAttribute("class", "dialog");
  form.setAttribute("class", "form");
  label1.textContent = "title: ";
  input1.setAttribute("type", "text");
  label2.textContent = "autor: ";
  input2.setAttribute("type", "text");
  label3.textContent = "pages: ";
  input3.setAttribute("type", "text");
  label4.textContent = "readed: ";
  option1.setAttribute("value", "option1");
  option1.textContent = "Yes";
  option2.setAttribute("value", "option2");
  option2.textContent = "No";
  select.appendChild(option1);
  select.appendChild(option2);
  form.appendChild(label1);
  form.appendChild(input1);
  form.appendChild(label2);
  form.appendChild(input2);
  form.appendChild(label3);
  form.appendChild(input3);
  form.appendChild(label4);
  form.appendChild(select);
  addButton.onclick = () => {
    add(
      input1.value,
      input2.value,
      input3.value,
      select.options[select.selectedIndex].text
    );
    console.log(dialog);
    dialog.close();
  };
  addButton.appendChild(spanButton);
  divButton.appendChild(addButton);
  dialog.appendChild(form);
  dialog.appendChild(divButton);
  dialog.showModal();
  console.log("Added");
}

function removeBookLibrary(removeBook) {
  let index = myLibrary.indexOf(removeBook);
  if (index != -1) myLibrary.splice(index, 1);
}

function changeReaded(changeBook, newStatus) {
  changeBook.readed = newStatus;
}

function add(title, author, pages, readed) {
  myLibrary.push(new Book(title, author, pages, readed));
}

function addNewRow() {
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
}

console.log(myLibrary[0]);
