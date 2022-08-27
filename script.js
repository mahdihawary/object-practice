function Book(title,author,pages,read){

    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
    this.info=function(){
        let completed='read.'
        if (!this.read)
            completed='not read yet.'

        return this.title+' by '+this.author+', '+this.pages+' pages, '+completed
    }
}

const theHobbit=new Book('The Hobbit', 'Tolkien', '259', false)
console.log(theHobbit.info())