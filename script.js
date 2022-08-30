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


function displayLibrary(){
    myLibrary.forEach(e=>{

        console.log(e)
        document.createElement()
    })
}

function createBookCard(){

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

