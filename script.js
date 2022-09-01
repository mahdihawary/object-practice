let myLibrary=[]

function Book(title,author,pages,read){

    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
}
Book.prototype.info=function(){
let completed='read.'
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

 
function createBookCard(tit, auth, pageNum, finished){

        console.log(e)
        let book=document.createElement('div')
        book.classList.add('book')
        let author=document.createElement('p')
        author.classList.add('author')
        author.innerText=auth
        let title = document.createElement('p')
        title.classList.add('title')
        title.innerText=tit
        let pages =document.createElement('p')
        pages.classList.add('pages')
        pages.innerText=pageNum
        let read = document.createElement('p')
        read.classList.add('read')
        read.innertext= finished
        book.append(author)
        book.append(title)
        book.append(pages)
        book.append(read)
        return book
}

function displayLibrary(){
    myLibrary.forEach(e=>{

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
listener()

