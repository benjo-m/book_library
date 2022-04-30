let myLibrary = [];
let addBtn = document.getElementById("addBtn");
let form = document.getElementById("form");
let btnSubmit = document.getElementById("btnSubmit");
let table = document.getElementById('table')
// Form elements
let inputTitle = document.getElementById('title')
let inputAuthor = document.getElementById('author')
let inputPages = document.getElementById('pages')
let inputRead = document.getElementById('read')

btnSubmit.addEventListener('click', addBook)

addBtn.addEventListener('click', () => {
    if(form.style.visibility == 'visible') {
        form.style.visibility = 'hidden'
    } else if (form.style.visibility == 'hidden') {
        form.style.visibility = 'visible'
    }
})

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

function addBook() {
    if(inputAuthor.value != '' && inputTitle.value != '' && inputPages.value != '') {
        let newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.checked)
        myLibrary.push(newBook)
        inputTitle.value = ''
        inputAuthor.value = ''
        inputPages.value = ''
        inputRead.checked = false
        form.style.visibility = 'hidden'
        showBooks()
    }
    
}

function removeBook(btnId) {
    for(let i = myLibrary.length - 1; i > -1; i--) {
        if(myLibrary[i].title == btnId) {
            myLibrary.splice(i,1);
        }
    }
    showBooks()
}

function makeBook(book) {
    let bookRow = document.createElement('tr')
    let bookTitle = document.createElement('td')
    let bookAuthor = document.createElement('td')
    let bookPages = document.createElement('td')
    let bookRead = document.createElement('td')
    let bookRemove = document.createElement('td')


    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages

    let btn = document.createElement('button')
    btn.textContent = 'delete'
    btn.setAttribute('id', book.title)
    bookRemove.append(btn)

    let chkBox = document.createElement('button')
    chkBox.setAttribute('type', 'button')
    
    bookRead.append(chkBox)


    if(book.read){
        chkBox.classList.add('read')
        chkBox.textContent = 'Read'
    } else {
        chkBox.classList.add('notRead')
        chkBox.textContent = 'Not read'
    }

    chkBox.addEventListener('click', function(){
        changeBtnColor(chkBox, book)
    })


    bookRow.append(bookTitle, bookAuthor, bookPages, bookRead, bookRemove)

    btn.addEventListener('click', function() {
        removeBook(btn.id)
    })

    table.append(bookRow)
}

function showBooks() {
    table.innerHTML = 
    `<tr>
        <th>Title</th>
        <th>Author</th>
        <th>Pages</th>
        <th>Read</th>
        <th style="color:red">Remove</th>
    </tr>`

    for(let i = 0; i < myLibrary.length; i++) {
        makeBook(myLibrary[i]);
    }
}

function changeBtnColor(btn, knjiga) {
    if(knjiga.read) {
        btn.classList.remove('read')
        btn.classList.add('notRead')
        btn.textContent = 'Not read'
        knjiga.read = false
    } else {
        btn.classList.remove('notRead')
        btn.classList.add('read')
        btn.textContent = 'Read'
        knjiga.read = true
    }
}

// showBooks()