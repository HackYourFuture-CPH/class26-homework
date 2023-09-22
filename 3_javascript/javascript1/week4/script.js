console.log("JS week4 Homework");


//Voice assistant//

// Global variables
let userName = '';
const todoList = [];
let timer;

// Function to get a response based on the command
function getReply(command) {
  command = command.toLowerCase(); // Convert the command to lowercase for case-insensitivity

  if (command.includes("hello my name is")) {
    // Set the user's name
    userName = command.replace("hello my name is", "").trim();
    return `Nice to meet you, ${userName}`;
  } else if (command === "what is my name") {
    if (userName) {
      return `Your name is ${userName}`;
    } else {
      return "I don't know your name yet. Please tell me your name.";
    }
  } else if (command.startsWith("add ")) {
    if (command.includes("to my todo")) {
      const todoItem = command.replace("add", "").replace("to my todo", "").trim();
      todoList.push(todoItem);
      return `${todoItem} added to your todo`;
    }
  } else if (command.startsWith("remove ")) {
    if (command.includes("from my todo")) {
      const todoItem = command.replace("remove", "").replace("from my todo", "").trim();
      const index = todoList.indexOf(todoItem);
      if (index !== -1) {
        todoList.splice(index, 1);
        return `Removed ${todoItem} from your todo`;
      } else {
        return `${todoItem} is not in your todo list`;
      }
    }
  } else if (command === "what is on my todo") {
    if (todoList.length === 0) {
      return "Your todo list is empty";
    } else {
      const todoItems = todoList.join(" and ");
      return `You have ${todoList.length} todos: ${todoItems}`;
    }
  } else if (command === "what day is it today") {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    return `Today is ${formattedDate}`;
  } else if (command.includes("what is")) {
    try {
      const mathExpression = command.replace("what is", "").trim();
      const result = eval(mathExpression); // Use eval to evaluate math expressions
      return result.toString();
    } catch (error) {
      return "Sorry, I couldn't calculate that.";
    }
  } else if (command.startsWith("set a timer for")) {
    const time = parseInt(command.replace("set a timer for", "").replace("minutes", "").trim());
    if (!isNaN(time)) {
      timer = setTimeout(() => {
        console.log("Timer done");
      }, time * 60000); // Convert minutes to milliseconds
      return `Timer set for ${time} minutes`;
    } else {
      return "Please specify a valid timer duration.";
    }
  } else {
    return "I'm sorry, I don't understand that command.";
  }
}

// Example usage:
console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you Benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("What is on my todo?")); // "You have 1 todos: fishing"
console.log(getReply("What day is it today?")); // "Today is September 22, 2023"
console.log(getReply("What is 3 + 3")); // "6"
console.log(getReply("Set a timer for 4 minutes")); // "Timer set for 4 minutes"




//Class Exercise//

//#Exercise 4//

let universityLibrary = [
  { title: "Economics 101", isBorrowed: false },
  { title: "History of Eldoria", isBorrowed: true },
  // ...other titles...
];

function borrowBook(bookTitle) {
  // Convert the book title to lowercase for case-insensitive comparison
  const lowerCaseTitle = bookTitle.toLowerCase();

  for (let i = 0; i < universityLibrary.length; i++) {
    const book = universityLibrary[i];

    if (book.title.toLowerCase() === lowerCaseTitle) {
      if (book.isBorrowed) {
        console.log(`The book ${book.title} is currently borrowed by someone else.`);
      } else {
        book.isBorrowed = true;
        console.log(`You've successfully borrowed ${book.title}.`);
      }
      return; // Stop searching once we find the book
    }
  }

  console.log(`Sorry, ${bookTitle} is not in our collection.`);
}

function returnBook(bookTitle) {
  const lowerCaseTitle = bookTitle.toLowerCase();

  for (let i = 0; i < universityLibrary.length; i++) {
    const book = universityLibrary[i];

    if (book.title.toLowerCase() === lowerCaseTitle) {
      if (!book.isBorrowed) {
        console.log(`The book ${book.title} wasn't borrowed.`);
      } else {
        book.isBorrowed = false;
        console.log(`Thank you for returning ${book.title}.`);
      }
      return;
    }
  }

  console.log(`Sorry, ${bookTitle} is not in our collection.`);
}

function searchBook(bookTitle) {
  const lowerCaseTitle = bookTitle.toLowerCase();

  for (let i = 0; i < universityLibrary.length; i++) {
    const book = universityLibrary[i];

    if (book.title.toLowerCase() === lowerCaseTitle) {
      const availability = book.isBorrowed ? "borrowed" : "available";
      console.log(`${book.title} is currently ${availability}.`);
      return;
    }
  }

  console.log(`Sorry, ${bookTitle} is not in our collection.`);
}

// Test the functions
borrowBook('History of Eldoria');   // Expected: The book History of Eldoria is currently borrowed by someone else.
returnBook('Economics 101');   // Expected: Thank you for returning Economics 101.
searchBook('Physics for Engineers');  // Expected: Sorry, Physics for Engineers is not in our collection.






//#Exercise 5//


let restaurantMenu = [
  { dishName: "Spaghetti Carbonara", price: 12, isAvailable: true },
  { dishName: "Chicken Parmesan", price: 15, isAvailable: false },
  { dishName: "Hamburger", price: 25, isAvailable: true },
  { dishName: "Durum Shawerma", price: 10, isAvailable: true },
];

// Function to order a dish
function orderDish(dishName) {
  dishName = dishName.toLowerCase(); // Convert to lowercase for case-insensitive matching
  for (let i = 0; i < restaurantMenu.length; i++) {
    if (restaurantMenu[i].dishName.toLowerCase() === dishName) {
      if (restaurantMenu[i].isAvailable) {
        return `Your order for ${restaurantMenu[i].dishName} has been placed!`;
      } else {
        return `We're sorry, ${restaurantMenu[i].dishName} is not available today.`;
      }
    }
  }
  return `Sorry, we don't have ${dishName} on our menu.`;
}

// Function to check the price of a dish
function checkPrice(dishName) {
  dishName = dishName.toLowerCase(); // Convert to lowercase for case-insensitive matching
  for (let i = 0; i < restaurantMenu.length; i++) {
    if (restaurantMenu[i].dishName.toLowerCase() === dishName) {
      return `Your bill for ${restaurantMenu[i].dishName} is $${restaurantMenu[i].price}.`;
    }
  }
  return `Sorry, we don't have ${dishName} on our menu.`;
}

// Function to generate the daily special
function dailySpecial() {
  let availableDishes = restaurantMenu.filter((dish) => dish.isAvailable);
  if (availableDishes.length === 0) {
    return "Sorry, we don't have any specials today.";
  } else {
    const randomIndex = Math.floor(Math.random() * availableDishes.length);
    const specialDish = availableDishes[randomIndex];
    return `Today's special is ${specialDish.dishName} for only $${specialDish.price}!`;
  }
}

// Example usage:
console.log(orderDish("Hamburger"));
console.log(orderDish("Pizza")); // Dish not on the menu
console.log(checkPrice("Spaghetti Carbonara"));
console.log(checkPrice("Salad")); // Dish not on the menu
console.log(dailySpecial());
