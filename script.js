let myLibrary = [];
let container = document.getElementById("container");
let addBtn = document.getElementById("addBtn");
let form = document.getElementById("form");
let btnSubmit = document.getElementById("btnSubmit");

let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");


addBtn.addEventListener("click", addBookToLibrary)
btnSubmit.addEventListener("click", submitBook);

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.Info = function() {
    return `${this.title}, ${this.author}`
};

function makeSquare() {
    let bookSquare = document.createElement("div");
    bookSquare.classList.add("bookSquare");
    bookSquare.setAttribute("id", title.value)
    bookSquare.textContent = `Title ${title.value}\nAuthor ${author.value}\nPages ${pages.value}\n`

    let removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "Remove"
    removeBtn.setAttribute("id", title.value)
    removeBtn.addEventListener("click", () => {
        removeBtn.parentElement.remove();
    })

    bookSquare.appendChild(removeBtn)
    container.appendChild(bookSquare);
}

function addBookToLibrary() {
    if(form.style.visibility == "hidden") {
        form.style.visibility = "visible";
    } else {
        form.style.visibility = "hidden";
    }
}

function submitBook() {
    myLibrary[myLibrary.length] = new Book(title.value, author.value, pages.value);
    makeSquare();
    title.value = "";
    author.value = ""; 
    pages.value = "";
}