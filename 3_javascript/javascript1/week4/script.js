

//HomeWork

//Exercise 4 (Library Management System)

let universityLibrary = [
    { title: "Economics 101", isBorrowed: false },
    { title: "History of Eldoria", isBorrowed: true },
    { title: "Sapiens", isBorrowed: false},
    { title: "The Secret", isBorrowed: true}
  ];
   
  
  function borrowBook(bookTitle){
    for (let index = 0; index < universityLibrary.length; index++) {
      const book = universityLibrary[index];
      if (book.title === bookTitle){
        if(book.isBorrowed){
          console.log(`The book ${bookTitle} is currently borrowed by someone else.`)
        } else {
          book.isBorrowed = true;
          console.log(`You've successfully borrowed ${bookTitle}.`)
        }
      }
    } 
  }
  
  function returnBook(bookTitle){
    for (let index = 0; index < universityLibrary.length; index++) {
      const book = universityLibrary[index];
      if (book.title === bookTitle){
        if(book.isBorrowed){
          book.isBorrowed = false;
          console.log(`Thank you for returning ${bookTitle}.`)
         }  else {
            console.log(`The book ${bookTitle} wasn't borrowed.`)
          }
      } 
    }
  }
  
  function searchBook(bookTitle){
    let bookFound = false;
    for (let index = 0; index < universityLibrary.length; index++) {
      const book = universityLibrary[index];
      if (book.title === bookTitle) {
        console.log(`${bookTitle} is currently available.`)
        bookFound = true;
        break;
      } 
    }
    if (!bookFound){
        console.log (`Sorry, ${bookTitle} is not in our collection.`)
    }
  }
  
  
  borrowBook("History of Eldoria")
  borrowBook("Sapiens")
  
  returnBook("The Secret")
  returnBook("Sapiens")
  returnBook("History of Eldoria")
  
  searchBook("Sapiens")
  searchBook("Economics 101")
  
  
  //Exercise 5  (Restaurant Order Management)
  
  let restaurantMenu = [
    { dishName: "Spaghetti Carbonara", price: 12, isAvailable: true },
    { dishName: "Chicken Parmesan", price: 15, isAvailable: false },
    { dishName: "Hamburger", price: 25, isAvailable: true },
    { dishName: "Durum Shawerma", price: 10, isAvailable: true },
  ];
  
  
  function orderDish(dishName){
    for (let index = 0; index < restaurantMenu.length; index++) {
      const dish = restaurantMenu[index];
      if (dish.isAvailable){
        console.log(`Your order for ${dishName} has been placed!`)
      }  else {
       console.log(`We're sorry, ${dishName} is not available today.`)
      }
    }
  }
  
  
  
  function checkPrice(dishName){
    let found = false;
    for (let index = 0; index < restaurantMenu.length; index++) {
      const dish = restaurantMenu[index];
      if (dish.name === dishName){
        console.log(`Your bill for ${dishName} is ${dish.price}.`)
        found = true;
        break;
      } 
    }
    if (!found){
      console.log(`Sorry, we don't have ${dishName} on our menu.`)
    }
  }
  
  orderDish("Hamburger")
  checkPrice("Spaghetti Carbonara")


  function dailySpecial() {
    const availableDishes = restaurantMenu.filter((dish) => dish.available);
  
    if (availableDishes.length === 0) {
      console.log("Sorry, there are no available daily specials today.");
      return; 
    }
  
    
    const randomIndex = Math.floor(Math.random() * availableDishes.length);
    const specialDish = availableDishes[randomIndex];
    
    console.log(`Today's special is ${specialDish.name} for only $${specialDish.price.toFixed(2)}!`);
  }
  
  dailySpecial(); 
  

  // Voice assisatnt


  
let userName = " ";

const todos = [];

const timers = [];

function getReply(command) {
  const commandSentenses = command.toLowerCase().split(" ");

  if (commandSentenses.includes("hello") && commandSentenses.includes("my") && commandSentenses.includes("name") && commandSentenses.includes("is")) {
    const nameIndex = commandSentenses.indexOf("is") + 1;
    userName = commandSentenses.slice(nameIndex).join(" ");
    return `Nice to meet you ${userName}`;

  } else if (commandSentenses.includes("what") && commandSentenses.includes("is") && commandSentenses.includes("my") && commandSentenses.includes("name")) {
    return userName ? `Your name is ${userName}` : "I don't know your name yet.";

  } else if (commandSentenses.includes("add") && commandSentenses.includes("to") && commandSentenses.includes("my") && commandSentenses.includes("todo")) {
    const taskIndex = commandSentenses.indexOf("add") + 1;
    const task = commandSentenses.slice(taskIndex, commandSentenses.indexOf("to")).join(" ");
    todos.push(task);
    return `${task} added to your todo.`;

  } else if (commandSentenses.includes("remove") && commandSentenses.includes("from") && commandSentenses.includes("my") && commandSentenses.includes("todo")) {
    const taskIndex = commandSentenses.indexOf("remove") + 1;
    const task = commandSentenses.slice(taskIndex, commandSentenses.indexOf("from")).join(" ");
    const index = todos.indexOf(task);

    if (index !== -1) {
      todos.splice(index, 1);
      return `Removed ${task} from your todo.`;
    } else {
      return `${task} is not in your todo.`;
    }

  } else if (commandSentenses.includes("what") && commandSentenses.includes("is") && commandSentenses.includes("on") && commandSentenses.includes("my") && commandSentenses.includes("todo")) {
    if (todos.length === 0) {
      return 'You have no todos.';
    } else {
      return `You have ${todos.length} todo${todos.length === 1 ? '' : 's'} - ${todos.join(' and ')}`;
    }

  } else if (commandSentenses.includes("what") && commandSentenses.includes("day") && commandSentenses.includes("is") && commandSentenses.includes("it") && commandSentenses.includes("today")) {
    const today = new Date();
    return today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  } else if (commandSentenses.includes("set") && commandSentenses.includes("a") && commandSentenses.includes("timer") && commandSentenses.includes("for")) {
    const minutesIndex = commandSentenses.indexOf("for") + 1;
    const minutes = parseInt(commandSentenses[minutesIndex], 10);

    if (!isNaN(minutes)) {
      timers.push(setTimeout(() => console.log('Timer done'), minutes * 60000));
      return `Timer set for ${minutes} minute${minutes === 1 ? '' : 's'}.`;
    }

  } else if (command.match(/what is \d+ \+ \d+\?/)) {
    const expression = command.match(/\d+ \+ \d+/)[0];
    const result = eval(expression);
    return result !== undefined ? result.toString() : "I couldn't calculate that.";
  }

  return "I don't understand that command.";
}


console.log(getReply("Hello my name is Benjamin")); 

console.log(getReply("What is my name?"));

console.log(getReply("Add fishing to my todo")); 

console.log(getReply("Add singing in the shower to my todo")); 

console.log(getReply("Remove fishing from my todo")); 

console.log(getReply("What is on my todo?")); 

console.log(getReply("What day is it today?")); 

console.log(getReply("What is 3 + 3?")); 

console.log(getReply("Set a timer for 4 minutes"));



