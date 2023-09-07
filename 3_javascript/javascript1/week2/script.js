// Flight booking fullname function

function getFullname(firstname, surname, formalName) {
  if (firstname.trim() === "" || surname.trim() === "") {
    return "Please provide a valid firstname and surname.";
  }

  if (formalName) {
    return formalName + " " + firstname + " " + surname;
  } else {
    return firstname + " " + surname;
  }
}

const fullname1 = getFullname("Benjamin", "Hughes");
const fullname2 = getFullname("Alice", "Smith", "Mrs");

console.log(fullname1);
console.log(fullname2);

// Event application

function getEventWeekday(daysFromToday) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  const eventDayIndex = (currentDay + daysFromToday) % 7;

  const eventDayName = daysOfWeek[eventDayIndex];

  return eventDayName;
}

// With todays weekday a Tuesday
console.log(getEventWeekday(9));
// With todays weekday a Friday
console.log(getEventWeekday(2));

// Weather wear

function suggestClothing(temperature) {
  if (temperature >= 30) {
    return "You should wear shorts and a light t-shirt.";
  } else if (temperature >= 20) {
    return "You can wear jeans and a comfortable shirt.";
  } else if (temperature >= 10) {
    return "It's a bit chilly, consider wearing a sweater and jeans.";
  } else {
    return "It's cold outside. You should wear a warm jacket and pants.";
  }
}

const clothesToWear = suggestClothing(18);
console.log(clothesToWear);

// Student manager

const class07Students = [];

function addStudentToClass(studentName) {
  if (studentName === "") {
    console.log("Cannot add an empty string to the class.");
  } else if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07.");
  } else if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class.`);
  } else if (studentName === "Queen") {
    class07Students.push(studentName);
  } else {
    class07Students.push(studentName);
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("John");
addStudentToClass("Alice");
addStudentToClass("Bob");
addStudentToClass("Alice");
addStudentToClass("Eva");
addStudentToClass("");
addStudentToClass("Benjamin");
addStudentToClass("Queen");

console.log("Number of students:", getNumberOfStudents());
