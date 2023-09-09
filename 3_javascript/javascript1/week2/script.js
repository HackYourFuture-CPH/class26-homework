//Flight booking
function getFullname(firstname, surname, useFormalName, gender) {
  if (useFormalName === true && gender === "man") {
    return `Lord ${firstname} ${surname}`;
  } else if (useFormalName === true && gender === "woman") {
    return `Miss ${firstname} ${surname}`;
  } else {
    return `${firstname} ${surname}`;
  }
}

const fullname1 = getFullname("Sevda", "Naziri", true, "woman");
const fullname2 = getFullname("John", "Wick", true, "man");

console.log(fullname1);
console.log(fullname2);

//Event application
let daysUntilEvent = 8;

function getEventWeekday(days) {
  const dayOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let currentDay = d.getDay();
  let eventDay = (currentDay + days) % 7;
  return dayOfTheWeek[eventDay];
}

console.log(getEventWeekday(daysUntilEvent));

//Weather wear

function whatShouldIWear(tempreture) {
  if (tempreture >= 20) {
    return "You should wear T-shirt and shorts";
  } else if (tempreture < 20) {
    return "You must wear warm cloths";
  }
}
console.log(whatShouldIWear(22));

//Student manager

const class07Students = [];
function addStudentToClass(studentName) {
  if (class07Students.length >= 6 && studentName !== "Queen") {
    console.log(
      "Cannot add more students to class 07 - Queen always can join the class"
    );
  } else if (class07Students.includes(studentName)) {
    console.log("Student Benjamin is already in the class");
  } else if (studentName === "") {
    console.log("Cannot add an empty string to a class");
  } else {
    class07Students.push(studentName);
  }
}

//getNumberOfStudents function
function getNumberOfStudents() {
  return class07Students.length;
}
addStudentToClass("Benjamin");
addStudentToClass("Sevda");
addStudentToClass("Winston");
addStudentToClass("Theo");
addStudentToClass("Amalie");
addStudentToClass("");
addStudentToClass("Bent");
addStudentToClass("Peter");
addStudentToClass("Queen");
addStudentToClass("Benjamin");

console.log(`Students number ${getNumberOfStudents()}`);
