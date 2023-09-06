////////////////////////Flight booking fullname function////////////////////////

/////// step1
// function getFullname(firstname, surname) {
//     let fullname = firstname + surname;
//     return fullname;
//   }
  
//   let fullname1 = getFullname("Meraj ", "Sharifi");
//   let fullname2 = getFullname("Mina ", "Miri");
  
//   console.log("Full Name 1:", fullname1);
//   console.log("Full Name 2:", fullname2);
  

/////// step2 - Formal fullname

// function getFullname(firstname, surname, useFormalName) {
//     if (useFormalName) {return "Lord " + firstname + surname;}
//     else {return firstname + surname;}
//   }
  
//   let formalFullName = getFullname("Meraj ", "Sharifi", true);
//   let inFormalFullName = getFullname("Mina ", "Miri", false);
  
//   console.log("Formal Full Name:", formalFullName);
//   console.log("Informal Full Name:", inFormalFullName);

  
/////// FINAL STEP: WITHOUT NAME AND ADDING FEMALE NAME

  function getFullname(firstname, surname, useFormalName, isFemale) {
    if (useFormalName) {return "Lord " + firstname + surname}
    else if (!firstname && !surname) {return "Please provide a valid name.";}
    else if (isFemale) {return "Lady " + firstname + surname}
    else {return firstname + surname}
}

  const formalFullName = getFullname("Meraj ", "Sharifi", true, false);
  const inFormalFullName = getFullname("Mina ", "Miri", false, false);
  const formalFullFemaleName = getFullname("Sara ", "Ono", false, true);
  const missingNames = getFullname("", "", false); // Empty names

  console.log("Formal Full Name:", formalFullName);
  console.log("Informal Full Name:", inFormalFullName);
  console.log("Informal Full Female Name:", formalFullFemaleName);
  console.log("Missing Names:", missingNames);

  ////////////////////////////////////////////////////////////
  ////////////////////////Event application////////////////////////

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

////////////////////////////////////////////////////////////
////////////////////////Weather wear////////////////////////

function weatherWear (temprature) {
  if (temprature >= 24) {return "T-shirt is fine!";}
  else if (temprature >= 18) {return "You may need a light jacket!";}
  else if (temprature >= 12) {return "Take your jacket with you!";}
  else if (temprature >= 5) {return "Take your warm stuff with you!";}
  else {return "FLEE and go to a warm country!";}
}


const clothesToWear = weatherWear(-5);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"

////////////////////////////////////////////////////////////
////////////////////////Student manager////////////////////////

const class07Students = [];
function addStudentToClass(studentName) {
  
  if (studentName === "") {
    console.log("You must add a name!")
  } else if (class07Students.includes(studentName)) {
    console.log("This student's is already in the class")
  } else {
    if (studentName.toLowerCase() === "queen") {
      class07Students.push(studentName);
      console.log(`Queen has been added to the class!`);
    } else if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07")
    } else {
      class07Students.push(studentName); 
      console.log(`The student ${studentName} added to the class.`)
    }
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Sam"); // The student John added to the class. 
addStudentToClass("Martin"); 
addStudentToClass("Meraj"); 
addStudentToClass("Derek"); 
addStudentToClass("Leif");
addStudentToClass("Hugo"); 

addStudentToClass("Hugo"); //This student's is already in the class

addStudentToClass("Ali"); //Cannot add more students to class 07

addStudentToClass("Queen"); // Queen has been added to the class!

addStudentToClass(""); // Student name cannot be empty

console.log(getNumberOfStudents());