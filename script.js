const myLibrary = new Array();
let allShown = false;

function Book(title, author, noOfPages) {
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
  this.id = crypto.randomUUID();
}

function addBook(title, author, noOfPages){
  book1 = new Book(title, author, noOfPages);
  myLibrary.push(book1);
  allShown = false;
}

function displayBooks (myLibrary){
  if(allShown) return;

  let bookTable = document.querySelector("#bookTable");
  for(let book of myLibrary){ //retrieve each book from the book array
    
    //clear books if there's already a list
    //row
    let row = document.createElement("tr");
    //cells for each property
    let title = document.createElement("td");
    let author = document.createElement("td");
    let noOfPages = document.createElement("td");
    title.textContent = book.title; title.style.fontStyle = "italic";
    author.textContent = book.author;
    noOfPages.textContent = book.noOfPages;
    //add to display, by adding cells to the row and the row to the table
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(noOfPages);
    bookTable.appendChild(row);
    
  }
  allShown = true;
}

addBook("Dune", "Bernie Mac", 800);
addBook("The Great Mystery", "Mekala Salah", 408);
addBook("Forward Future", "Jeffery McDennings", 723);

showBookBtn = document.querySelector("#showBooks");

showBookBtn.addEventListener("click", ()=>{
  displayBooks(myLibrary);
});

//add button shows the form
addBookBtn = document.querySelector("#addBook");
addBookBtn.addEventListener("click", ()=>{
  bookForm = document.querySelector("#bookForm");
  bookForm.classList.remove("hidden");
});
//cancel button hides the form
document.querySelector("#cancelBtn").addEventListener("click", ()=>{
  bookForm = document.querySelector("#bookForm");
  bookForm.classList.add("hidden");
})

//save book button adds book to the library
saveBookBtn = document.querySelector("#saveBook");
saveBookBtn.addEventListener("click", (e)=>{
  let titleEntry = document.querySelector("#titleEntry").value;
  let authorEntry = document.querySelector("#authorEntry").value;
  let pagesEntry = Number(document.querySelector("#pagesEntry").value);

  addBook(titleEntry, authorEntry, pagesEntry);
  document.querySelector("#titleEntry").value = "";
  document.querySelector("#authorEntry").value = "";
  document.querySelector("#pagesEntry").value  = "";
  e.preventDefault();
  alert(`The book "${titleEntry}" has been added successfully!`);
})

displayBooks(myLibrary);