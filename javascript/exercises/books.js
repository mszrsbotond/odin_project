function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read

    this.info = function(){
        if(read == true){
        console.log(`${title} by ${author}, ${pages} pages, read`)
        }
        else{
        console.log(`${title} by ${author}, ${pages} pages, not read yet`)
        }
    }
}

const harryPotter = new Book("Harry Potter és a Tiltott Varázslat", "J.K. Rowling", 102, false)
console.log(Book)