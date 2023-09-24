let universityLibrary = [
    { title: "Economics 101", isBorrowed: false },
    { title: "History of Eldoria", isBorrowed: true },
  ];
  
  // Function to borrow a book
  function borrowBook(bookTitle) {
    for (let i = 0; i < universityLibrary.length; i++) {
      let book = universityLibrary[i];
      if (book.title.toLowerCase() === bookTitle.toLowerCase()) {
        if (book.isBorrowed) {
          console.log(`The book ${bookTitle} is currently borrowed by someone else.`);
        } else {
          book.isBorrowed = true;
          console.log(`You've successfully borrowed ${bookTitle}.`);
        }
        return;
      }
    }
    console.log(`Sorry, ${bookTitle} is not in our collection.`);
  }
  
  // Function to return a book
  function returnBook(bookTitle) {
    for (let i = 0; i < universityLibrary.length; i++) {
      let book = universityLibrary[i];
      if (book.title.toLowerCase() === bookTitle.toLowerCase()) {
        if (book.isBorrowed) {
          book.isBorrowed = false;
          console.log(`Thank you for returning ${bookTitle}.`);
        } else {
          console.log(`The book ${bookTitle} wasn't borrowed.`);
        }
        return;
      }
    }
    console.log(`Sorry, ${bookTitle} is not in our collection.`);
  }
  
  // Function to search for a book
  function searchBook(bookTitle) {
    for (let i = 0; i < universityLibrary.length; i++) {
      let book = universityLibrary[i];
      if (book.title.toLowerCase() === bookTitle.toLowerCase()) {
        if (book.isBorrowed) {
            console.log(`${bookTitle} is currently borrowed.`);
          } else {
            console.log(`${bookTitle} is currently available.`);
          }
        return;
      }
    }
    console.log(`Sorry, ${bookTitle} is not in our collection.`);
  }

  borrowBook('History of Eldoria');
  returnBook('Economics 101');
  searchBook('Physics for Engineers');