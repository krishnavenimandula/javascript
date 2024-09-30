let allbooks = [ {
    id: 1,
    title: "Angels and Demons",
    author: "Dan brown",
    rating: [ 4.5, 3.5, 5, 2.5 ],
    review: [
        {
            user: "John",
            comment: "      ",
        },
        {
            user: "Jain",
            comment: "      ",
        }
    ]
}];

function book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.id = Date.now().toString(); // gives current date n time 
    this.rating = [];
    this.reviews = [];
}

const bookcollection = {
    books: [ ],

    // 1. Add a book
    addBook: function(book){
        this.books.push(book);
        console.log(`book ${book.title} added successfully with id ${book.id}`);
    },

    // 2.Remove a book
        removeBook : function(removeId){
        let bookTobeRemoved =this.books.findIndex((book)=> book.id === removeId);
        if(bookTobeRemoved == -1) {
            console.log(" No book with id ${removeId} found in the collection! ");
        }else{
            let removedBook = this.books.splice(bookTobeRemoved,1);
            console.log(" the book ${removedBook[0].title} has been removed from  the collection");
        }
    },

    // 3. search a book

    searchBook: function(title){
        let filteredBook = this.books.filter((book) => book.title.includes(title));
        if(filteredBook.length == 0){
            console.log( " no book was found with title ${title} ");
        }else {
            
        }
    }

};

let choice = -1;
do {

console.log (" Choose a option: \n1. Add a book\n2. Remove a book\n3. Search for books by Title\n4. Add a rating to a book\n5. Add a review to a book\n6. Compute the average rating of books\n7. exit ");
choice = parseInt(prompt(" Enter your choice: "));

    switch(choice) {
        case 1 :
        let title = prompt("Enter the title: ");
        let author = prompt("Enter the author name: ");
        let year = prompt(" Enter the releasing year: ");
        let newbook = new book(title,author,year);
        bookcollection.addBook(newbook);
        break;
        case 2 : 
        let removeId = prompt(" Enter the ID of the book: ");
        bookcollection.removeBook(removeId);
        break;
        case 3 : break;
        case 4 : break;
        case 5 : break;
        case 6 : break;
        case 7 : console.log("Thanks for stopping! ");
        break;
        default: ;

    }

} while(choice >=1 && choice<7) ;
