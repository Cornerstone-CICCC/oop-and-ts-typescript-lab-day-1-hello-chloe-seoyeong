"use strict";
// 📚 Create a simple Library System where users can add books, borrow books, return books, and check availability.
// 1. Create an enum called BookGenre with at least 5 book genres.
// 2. Create a type alias called Book which contains: bookId (number), title (string), author (string), genre (BookGenre), isAvailable (boolean).
// 3. Create a function called addBook which will add a new book into the library array. The function needs to return a Book object.
// 4. Create a function called borrowBook which will change the book’s availability to false if available. The return needs to be a string.
// 5. Create a function called returnBook which will change the book’s availability to true. The return needs to be a string.
// 6. Create a function called checkAvailability which will return true if the book is available and false otherwise.
// 7. Create a function called removeBook which will remove a book from the library array. The return needs to be a string.
var BookGenre;
(function (BookGenre) {
    BookGenre["Fantasy"] = "Fantasy";
    // add 4 more
    BookGenre["Comic"] = "Comic";
    BookGenre["Drama"] = "Drama";
    BookGenre["Horror"] = "Horror";
    BookGenre["Action"] = "Action";
    BookGenre["Nonfiction"] = "Nonfiction";
})(BookGenre || (BookGenre = {}));
var library = [];
function addBook(bookId, title, author, genre) {
    library.push({
        bookId: bookId,
        title: title,
        author: author,
        genre: genre,
        isAvailable: true
    });
    return library;
}
function borrowBook(bookId) {
    var selectedBook = library.filter(function (book) { return book.bookId === bookId; })[0];
    selectedBook.isAvailable = false;
    return "".concat(selectedBook.title, " has benn borrowed");
}
function returnBook(bookId) {
    var selectedBook = library.filter(function (book) { return book.bookId === bookId; })[0];
    selectedBook.isAvailable = true;
    return "".concat(selectedBook.title, " has benn returned");
}
function checkAvailability(bookId) {
    var selectedBook = library.filter(function (book) { return book.bookId === bookId; })[0];
    return selectedBook.isAvailable;
}
function removeBook(bookId) {
    var selectedBook = library.filter(function (book) { return book.bookId === bookId; })[0];
    library = library.filter(function (book) { return book.bookId !== bookId; });
    return "".concat(selectedBook.title, " has been removed from the library");
}
// Test cases (Create more if needed)
console.log(addBook(1, "The Hobbit", "J.R.R. Tolkien", BookGenre.Fantasy)); // { bookId: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genre: BookGenre.Fantasy, isAvailable: true }
console.log(addBook(2, "Vegetarian", "Han Kang", BookGenre.Drama));
console.log(borrowBook(1)); // "The Hobbit has been borrowed"
console.log(checkAvailability(1)); // false
console.log(returnBook(1)); // "The Hobbit has been returned"
console.log(removeBook(1)); // "The Hobbit has been removed from the library"
console.log(library);
