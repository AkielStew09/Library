const myLibrary = new Array();
let allShown = false;

//Constructor
function Book(title, author, noOfPages) {
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
  this.id = crypto.randomUUID();
}

//The addBook function calls the Book constructor with params, then
//pushes it to the array
function addBook(title, author, noOfPages) {
  book1 = new Book(title, author, noOfPages);
  myLibrary.push(book1);
  allShown = false;
}
//The saveBook function calls the addBook function based on form inputs
function saveBook(e) {
  let titleEntry = document.querySelector("#titleEntry").value;
  let authorEntry = document.querySelector("#authorEntry").value;
  let pagesEntry = Number(document.querySelector("#pagesEntry").value);

  addBook(titleEntry, authorEntry, pagesEntry);

  //empty the inputs after info has been retrieved
  document.querySelector("#titleEntry").value = "";
  document.querySelector("#authorEntry").value = "";
  document.querySelector("#pagesEntry").value = "";
  e.preventDefault(); //to stop it from trying to send info to a server and reloading the page

  alert(`The book "${titleEntry}" has been added successfully!`);
  displayBooks(myLibrary);
}

function removeBook(event) {
  const bookRow = event.target.parentElement;
  const rowId = bookRow.dataset.id;
  let delTitle = "";
  for (let i = myLibrary.length - 1; i >= 0; i--) {
    if (myLibrary[i].id === rowId) {
      let bookToBeRemoved = myLibrary[i];
      delTitle = bookToBeRemoved.title;
      myLibrary.splice(i, 1);
      delete bookToBeRemoved;
      break;
    }
  }
  
  // displayBooks(myLibrary);
  alert(`The book "${delTitle}" has been removed!!`);
  bookRow.remove();
}

//This is the function for displaying the books in my library.
function displayBooks(myLibrary) {
  //if all books have been shown then drop the function
  if (allShown) return;

  //clear list if there's already a list
  let existingList = document.querySelectorAll(".bookRow");
  existingList.forEach((existingRow) => existingRow.remove());

  //retrive the table to put the rows in it
  let bookTable = document.querySelector("#bookTable");
  for (let book of myLibrary) {
    //retrieve each book from the book array

    //create row
    let row = document.createElement("tr");
    row.classList.add("bookRow");
    row.setAttribute("data-id", book.id);

    //Create cells for each property of the book
    let title = document.createElement("td");
    let author = document.createElement("td");
    let noOfPages = document.createElement("td");
    let delBtn = document.createElement("button");

    delBtn.addEventListener("click", removeBook);

    //Fill the cells with the info from the object
    title.textContent = book.title;
    title.style.fontStyle = "italic";

    author.textContent = book.author;
    noOfPages.textContent = book.noOfPages;
    delBtn.textContent = "Remove Book";

    //add to display, by adding cells to the row and the row to the table
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(noOfPages);
    row.appendChild(delBtn);
    bookTable.appendChild(row);
  }
  allShown = true; //Now all books have been shown
}

//manually putting example books
addBook("Dune", "Bernie Mac", 800);
addBook("The Great Mystery", "Mekala Salah", 408);
addBook("Forward Future", "Jeffery McDennings", 723);

//I abandoned the display button idea in favour of automatically
// displaying the list when the page loads and when a book is added

//add button shows the form
addBookBtn = document.querySelector("#addBook");
addBookBtn.addEventListener("click", () => {
  bookForm = document.querySelector("#bookForm");
  bookForm.classList.remove("hidden");
});
//cancel button hides the form
document.querySelector("#cancelBtn").addEventListener("click", () => {
  bookForm = document.querySelector("#bookForm");
  bookForm.classList.add("hidden");
});

//The save book button adds the book to the library
saveBookBtn = document.querySelector("#saveBook");
saveBookBtn.addEventListener("click", saveBook);

Book.prototype.changeRead = function(){
  this.
}

//Display books on page load
displayBooks(myLibrary);
