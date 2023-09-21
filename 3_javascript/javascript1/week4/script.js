// --> Exercise 4: Library Management System <--

let universityLibrary = [
    { title: "Economics 101", author: "Alfred Mill", isBorrowed: false },
    { title: "History of Eldoria", author: "Done, Keith", isBorrowed: true },
    { title: "Dorian Gray", author: "Oscar Wilde", isBorrowed: false },
];

function borrowBook(bookTitle) {
    for (let i = 0; i < universityLibrary.length; i++) {
        if (universityLibrary[i].title === bookTitle) {
            if (universityLibrary[i].isBorrowed) {
                console.log(`The book ${bookTitle} is currently borrowed by someone else.`)
            } else {
                universityLibrary[i].isBorrowed = true;
                console.log(`You've successfully borrowed ${bookTitle}.`);
            } return;
        }
    } console.log(`Sorry, ${bookTitle} is not in our collection.`);
}
borrowBook('History of Eldoria');   // Expected: The book History of Eldoria is currently borrowed by someone else.



function returnBook(bookTitle) {
    for (let r = 0; r < universityLibrary.length; r++) {
        if (universityLibrary[r].title === bookTitle) {
            if (universityLibrary[r].isBorrowed) {
                universityLibrary[r].isBorrowed = false;
                console.log(`Thank you for returning ${bookTitle}.`)
            } else {
                console.log(`The book ${bookTitle} wasn't borrowed`)
            }
            return;
        }
    }
}
returnBook('Economics 101');   // Expected: Thank you for returning Economics 101.



function searchBook(bookTitle) {
    for (let s = 0; s < universityLibrary.length; s++) {
        if (universityLibrary[s].title === bookTitle) {
            if (universityLibrary[s].isBorrowed) {
                console.log(`${bookTitle} by ${universityLibrary[s].author} is currently borrowed.`)
            } else {
                console.log(`${bookTitle} by ${universityLibrary[s].author} is currently available.`)
            }
            return;
        }
    }
    console.log(`Sorry, ${bookTitle} is not in our collection.`)
}
searchBook('Physics for Engineers');  // Expected: Sorry, Physics for Engineers is not in our collection.




