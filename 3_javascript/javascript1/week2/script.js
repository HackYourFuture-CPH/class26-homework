//// Flight booking fullname function ///////


////step 1//////
function getFullname(firstname, surname) {
  return `${firstname} ${surname}`;
}

const fullname1 = getFullname("Srushti", "Salke");
const fullname2 = getFullname("Suraj", "Meera");

console.log(fullname1); 
console.log(fullname2); 

//////////formal fullname////////////

function getFullname(firstname, surname, useFormalName, isFemale) {
  if (useFormalName) {return "Lord " + firstname + surname}
  else if (!firstname && !surname) 
  {return "Please provide a valid name.";}
  else if (isFemale) {return "women " + firstname + surname}
  else {return firstname + surname}
}

const formalFullName = getFullname("Srushti ", "Salke", true, false);
const inFormalFullName = getFullname("Suraj ", "John", false, false);
const formalFullFemaleName = getFullname("Tara ", "Aaira", false, true);
const missingNames = getFullname("", "", false); 



console.log("Formal Full Name:", formalFullName);
console.log("Informal Full Name:", inFormalFullName);
console.log("Informal Full Female Name:", formalFullFemaleName);
console.log("Missing Names:", missingNames);


///////Event application////////

function getEventWeekday (daysFromToday) {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  const eventDayIndex = (today.getDay() + daysFromToday) % 7;
  const positiveIndex = (eventDayIndex + 7) % 7;
  const eventDayOfWeek = weekdays[positiveIndex];
  return eventDayOfWeek;
}

const eventDayOfWeek = getEventWeekday (5);

console.log(`The event will be on ${eventDayOfWeek}`)

///////Weather wear//////////

function whatShouldIWear(tempreture) {
  if (tempreture >= 18) {
    return `You will be wear short and shirt `;
  } else if (tempreture < 18) {
    return `You should not be wear jacket`;
  }
}
  

console.log(whatShouldIWear(18));

////student manager/////

const class07Students = [];

function addStudentToClass(studentName) {
  
  if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07");
  } else if (studentName === "") {
    console.log("Cannot add an empty string to the class");
  } else if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
  } else {
    // Add the student to the class
    class07Students.push(studentName);
  }
}
//get number of student function
function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Benjamin"); 
addStudentToClass("Anna"); 
addStudentToClass("Benjamin"); 
addStudentToClass(""); 
addStudentToClass("Elsa"); 
addStudentToClass("Olaf"); 
addStudentToClass("Kristoff"); 
addStudentToClass("Sven"); 
addStudentToClass("Hans"); 
addStudentToClass("Arendelle"); 
console.log(getNumberOfStudents()); 





