
//Flight Booking
function getFullname(firstname, surname, useFormalName = false, gender = "male") {
    if (firstname === "" || surname === "") {
        return "";
    }

    if (useFormalName) {
        if (gender === "male") {
            return "Lord " + firstname + " " + surname;
        } else if (gender === "female") {
            return "Lady " + firstname + " " + surname;
        }
    } else {
        return firstname + " " + surname;
    }
}

// Test cases
const fullname1 = getFullname("Benjamin", "Hughes", true, "male");
const fullname2 = getFullname("Halima", "Hassan", true, "female");

console.log(fullname1);
console.log(fullname2);


// Event Application
function getEventWeekday(daysFromToday) {
    // Getting today's date
    const today = new Date();


    const futureDate = new Date(today.getTime() + daysFromToday * 24 * 60 * 60 * 1000);

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const eventWeekday = weekdays[futureDate.getDay()];

    return eventWeekday;
}


console.log(getEventWeekday(8));
console.log(getEventWeekday(2));

//Weather wear

function suggestClothing(temperature) {
    if (temperature >= 30) {
        return "You should wear shorts and a light t-shirt.";
    } else if (temperature >= 20) {
        return "A pair of jeans and a long-sleeve shirt would be comfortable.";
    } else if (temperature >= 10) {
        return "You may want to wear a sweater or jacket with jeans.";
    } else {
        return "It's quite cold! Wear a heavy coat, scarf, and gloves.";
    }
}

const clothesToWear = suggestClothing(18);
console.log(clothesToWear);

// Student manager
const class07Students = [];

function addStudentToClass(studentName) {

    if (class07Students.length >= 6) {
        console.log("Cannot add more students to class 07");
    } else if (studentName === "") {

        console.log("Cannot add an empty string to the class");
    } else if (class07Students.includes(studentName)) {

        console.log(`Student ${studentName} is already in the class`);
    } else {

        class07Students.push(studentName);
        console.log(`Added ${studentName} to class 07`);
    }
}

function getNumberOfStudents() {
    return class07Students.length;
}

// Test cases
addStudentToClass("Alice");
addStudentToClass("Bob");
addStudentToClass("Alice");
addStudentToClass("Charlie");
addStudentToClass("David");
addStudentToClass("Eve");
addStudentToClass("Frank");
addStudentToClass("Queen");
addStudentToClass("");

const numberOfStudents = getNumberOfStudents();
console.log(`Number of students in class 07: ${numberOfStudents}`);

// candy helper (optional question)

const boughtCandyPrices = [];


function addCandy(candyType, weight) {
  let pricePerGram;

  
  switch (candyType) {
    case 'sweet':
      pricePerGram = 0.5;
      break;
    case 'chocolate':
      pricePerGram = 0.7;
      break;
    case 'toffee':
      pricePerGram = 1.1;
      break;
    case 'chewing-gum':
      pricePerGram = 0.03;
      break;
    default:
      console.log('Invalid candy type');
      return; 
  }

  
  const totalPrice = weight * pricePerGram;
  boughtCandyPrices.push(totalPrice);
}


const amountToSpend = Math.random() * 100;


function canBuyMoreCandy() {
  let totalCost = 0;

  
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalCost += boughtCandyPrices[i];
  }

  if (totalCost < amountToSpend) {
    console.log('You can buy more, so please do!');
    return true;
  } else {
    console.log('Enough candy for you!');
    return false;
  }
}


addCandy('sweet', 20); 
addCandy('chocolate', 30); 
canBuyMoreCandy(); 





