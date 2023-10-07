
//Flight booking fullname function

// Define the getFullname function
function getFullname(firstname, surname) {
  return firstname + " " + surname;
}

// Call the getFullname function and assign the results to variables
var fullname1 = getFullname("Benjamin", "Hughes");
var fullname2 = getFullname("John", "Smith");

// Log out the two fullname variables
console.log(fullname1); // "Benjamin Hughes"
console.log(fullname2); // "John Smith"
function getFullname(firstname, surname, useFormalName = false, isFemale = false) {
  if (useFormalName && firstname !== "") {
    if (isFemale) {
      return "Lady " + firstname + " " + surname;
    } else {
      return "Lord " + firstname + " " + surname;
    }
  } else {
    return firstname + " " + surname;
  }
}

// Test cases
console.log(getFullname("Benjamin", "Hughes", true)); // "Lord Benjamin Hughes"
console.log(getFullname("Benjamin", "Hughes", false)); // "Benjamin Hughes"
console.log(getFullname("Jane", "Doe", true, true)); // "Lady Jane Doe"
console.log(getFullname("John", "Smith", true, true)); // "Lord John Smith"
//Event application


function getEventWeekday(daysFromToday) {
    // Get the current date
    const today = new Date();
  
    // Calculate the future date by adding daysFromToday to today
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + daysFromToday);
  
    // Define an array of weekday names
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    // Get the weekday of the future date
    const eventWeekday = weekdays[futureDate.getDay()];
  
    return eventWeekday;
  }
  
  // Example usage:
  console.log(getEventWeekday(9)); // Logs out "Thursday"
  console.log(getEventWeekday(2)); // Logs out "Sunday"
  
  //Weather wear

  function suggestClothing(temperature) {
    if (temperature >= 30) {
      return "You should wear shorts and a tank top.";
    } else if (temperature >= 20) {
      return "You can wear jeans and a light sweater.";
    } else if (temperature >= 10) {
      return "A jacket or coat would be a good choice with some jeans.";
    } else {
      return "You should bundle up with a heavy coat, gloves, and a scarf.";
    }
  }
  
  const clothesToWear = suggestClothing(18);
  console.log(clothesToWear); // Logs out: "You can wear jeans and a light sweater."
  





  // Define an array to store the class07Students
const class07Students = [];

// Function to add a student to the class
function addStudentToClass(studentName) {
  // Check if the class is full (6 students)
  if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07");
    return;
  }

  // Check if the student is already in the class
  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  }

  // Check if the student name is not empty
  if (studentName.trim() === "") {
    console.log("Student name cannot be empty");
    return;
  }

  // Check if the Queen is being added
  if (studentName.toLowerCase() === "queen") {
    class07Students.push(studentName);
    return;
  }

  // Add the student to the class
  class07Students.push(studentName);
}



//addStudentToClass function

// Function to get the number of students in the class
function getNumberOfStudents() {
  return class07Students.length;
}

// Try out the cases
addStudentToClass("Alice");       // Add a student
addStudentToClass("Bob");         // Add a student
addStudentToClass("Charlie");     // Add a student
addStudentToClass("David");       // Add a student
addStudentToClass("Eve");         // Add a student
addStudentToClass("Frank");       // Add a student
addStudentToClass("Grace");       // Try to add more students than there is space for (should log an error)
addStudentToClass("Alice");       // Try to add a student who is already in the class (should log an error)
addStudentToClass("Queen");       // Add the Queen to a full class (should be allowed)
addStudentToClass("");            // Try to add an empty string (should log an error)


const numberOfStudents = getNumberOfStudents();
console.log(`Number of students in class 07: ${numberOfStudents}`);




//Candy helper optional

// Initialize an array to store candy prices
const boughtCandyPrices = [];

// Function to add candy and its price to the array
function addCandy(candyType, weight) {
  let pricePerGram = 0;

  switch (candyType) {
    case "sweet":
      pricePerGram = 0.5;
      break;
    case "chocolate":
      pricePerGram = 0.7;
      break;
    case "toffee":
      pricePerGram = 1.1;
      break;
    case "chewing-gum":
      pricePerGram = 0.03;
      break;
    default:
      console.log("Invalid candy type");
      return;
  }

  const candyPrice = pricePerGram * weight;
  boughtCandyPrices.push(candyPrice);
}

// Function to check if more candy can be bought
function canBuyMoreCandy() {
  const amountToSpend = Math.random() * 100;
  let totalPrice = 0;

  // Calculate the total price of the bought candies
  for (const price of boughtCandyPrices) {
    totalPrice += price;
  }

  if (totalPrice < amountToSpend) {
    return true;
  } else {
    return false;
  }
}

// Example usage:
addCandy("sweet", 20); // Adds the price of 20 grams of sweets to the array boughtCandyPrices

// Check if the user can buy more candy
if (canBuyMoreCandy()) {
  console.log("You can buy more, so please do!");
} else {
  console.log("Enough candy for you!");
}
