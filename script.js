const bookShelf=document.querySelector('.library')
const form=document.querySelector('.form-container')
const add=document.querySelector('.add-book')




let myLibrary=[{title: "Harry Potter and the goblet of Fire",
    author: "J. k. Rowling",
    pages: 650,
    read: "Read"}]

function Book(title,author,pages,read){

    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
}

Book.prototype.info=function(){
let completed='read'
        if (!this.read)
            completed='not read yet.'

        return this.title+' by '+this.author+', '+this.pages+' pages, '+completed
}
function addBookToLibrary(title, author, pages, read){
    myLibrary.push(newBook(title,author, pages, read))
}

const bookForm= document.querySelector('.book-form')

function listener(){
    document.addEventListener('click',e=>{
        e.preventDefault()
        if (e.target.className=='submit'){
            console.log(e)
            myLibrary.push(getInput())
            console.log(myLibrary)
        }
    })

}

function formListener(){
    add.addEventListener('click',e=>{
        e.preventDefault()
        console.log(form)
        form.innerHTML=`
         <form class="book-form">
                <label>Title</label>
                <input class="title">
                <label>Author</label>
                <input class="author">
                <label>Pages</label>
                <input class="pages" type="number">
                <label>Finished reading</label>
                <input type="checkbox" class="read">
                <input type="checkbox">
                <button type="submit" class="submit">Submit</button>
        </form>
        `;

    })
}

 
function displayBookCard(bookIndex){

        const book = myLibrary[bookIndex]
        const bookCard= document.createElement('div')
        bookCard.classList.add('book')
        bookCard.innerHTML=`
        <div id=${bookIndex}>Title: ${book.title}</div>
        <div>Author: ${book.author}</div>
        <div>Pages: ${book.pages}</div>
        <div>${book.read}</div>
        `
        bookShelf.appendChild(bookCard)


}

function displayLibrary(){
    myLibrary.forEach(e=>{
        createBookCard(e.title, e.author,e.pages, e.read)

    })

}



function getInput(){
    const title=document.querySelector('.title').value
    const author=document.querySelector('.author').value
    const pages = document.querySelector('.pages').value
    const read = document.querySelector('.read').checked
    return new Book(title, author, pages, read)
}


console.log(bookForm)

const theHobbit=new Book('The Hobbit', 'Tolkien', '259', false)
formListener()
displayBookCard(0)

