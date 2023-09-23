let universityLibrary = [
  { title: "Economics 101", isBorrowed: false },
  { title: "History of Eldoria", isBorrowed: true },
  { title: "The Aleph", isBorrowed: true },
  { title: "Atlas Shrugged", isBorrowed: false },
];

function borrowBook(bookTitle) {
  const book = findBookByTitle(bookTitle);

  if (!book) {
    console.log(`Sorry, ${bookTitle} is not in our collection.`);
  } else if (book.isBorrowed) {
    console.log(`The book ${bookTitle} is currently borrowed by someone else.`);
  } else {
    book.isBorrowed = true;
    console.log(`You've successfully borrowed ${bookTitle}.`);
  }
}

function returnBook(bookTitle) {
  const book = findBookByTitle(bookTitle);

  if (!book) {
    console.log(`The book ${bookTitle} wasn't borrowed.`);
  } else {
    book.isBorrowed = false;
    console.log(`Thank you for returning ${bookTitle}.`);
  }
}

function searchBook(bookTitle) {
  const book = findBookByTitle(bookTitle);

  if (!book) {
    console.log(`Sorry, ${bookTitle} is not in our collection.`);
  } else {
    const status = book.isBorrowed ? "borrowed" : "available";
    console.log(`${bookTitle} is currently ${status}.`);
  }
}

function findBookByTitle(title) {
  const lowerCaseTitle = title.toLowerCase();
  for (let i = 0; i < universityLibrary.length; i++) {
    const book = universityLibrary[i];
    if (book.title.toLowerCase() === lowerCaseTitle) {
      return book;
    }
  }
  return false;
}

borrowBook("Economics 101");
returnBook("History of Eldoria");
searchBook("Economics 101");
searchBook("History of Eldoria");
searchBook("Physics 202");
borrowBook("The Aleph");
borrowBook("Atlas Shrugged");
borrowBook("The Republic");
