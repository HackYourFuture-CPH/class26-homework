console.log("Hey there!")

//fullname
function getFullname(firstname, surname) {
  return `${firstname} ${surname}`;
}

const fullname1 = getFullname("Benjamin", "Hughes");
const fullname2 = getFullname("John", "Smith");

console.log(fullname1);
console.log(fullname2); 


function getFullname(firstname, surname, useFormalName, gender) {
  if (useFormalName) {
    if (gender === 'male') {
      return `Lord ${firstname} ${surname}`;
    } else if (gender === 'female') {
      return `Lady ${firstname} ${surname}`;
    }
  } else {
    return `${firstname} ${surname}`;
  }
}

const formalMaleName = getFullname("John", "Smith", true, 'male'); 
const formalFemaleName = getFullname("Jody", "Foster", true, 'female');

console.log(formalFemaleName)

//event
function getEventWeekday(daysFromToday) {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


  const currentDate = new Date;
  const targetDate = new Date(currentDate);
  targetDate.setDate(currentDate.getDate()) + daysFromToday;

  const weekdayIndex = targetDate.getDay();

  const eventWeekday = weekdays[weekdayIndex];

  return eventWeekday;
}

console.log(getEventWeekday(1));

//weather 
function suggestClothing(temperature) {
  if (temperature >= 26) {
    return "Consider a tank top, shorts or a dress";
  } else if (temperature >= 18) {
    return "Consider jeans, t-shirt and a cardigan.";
  } else if (temperature >= 10) {
    return "Consider a sweater or a jacket.";
  } else {
    return "You should wear a heavy coat.";
  }
}

let clothesToWear = suggestClothing(13);
console.log(clothesToWear);



//student manager
const class07Students = [];

function addStudentToClass(studentName) {

  if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07");
  } else if (studentName === "") {
    
    console.log("Student name cannot be empty");
  } else if (class07Students.includes(studentName)){
    console.log(`Student ${studentName} is already in the class`);
 } else if (studentName.toLowerCase() === "queen") {
    
    class07Students.push(studentName);
  } else {
    class07Students.push(studentName);
  }}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Benjamin"); 
addStudentToClass("Alice"); 
addStudentToClass("Benjamin"); 
addStudentToClass("Queen");

console.log(getNumberOfStudents());