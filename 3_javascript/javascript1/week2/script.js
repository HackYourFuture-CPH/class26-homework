//First Task

function getFullname(firstname, surname) {
    return `${firstname} ${surname}`;
}

let fullName1 = getFullname("Komal", "Ranjan");

let fullName2 = getFullname("Pradeep", "Leuaa");

console.log(fullName1); 

console.log(fullName2); 

function getFullname(firstname, surname, useFormalName) {
    if (useFormalName) {
        return `${"Lady "} ${firstname} ${surname}`;
    } else {
        return `${firstname} ${surname}`;
    }
}
let fullname1 = getFullname("Komal", "Ranjan", true);

let fullname2 = getFullname("Komal", "Ranjan", false);

console.log(fullname1); 

console.log(fullname2);

function getFullname(firstname, surname, useFormalName, title) {
    if (useFormalName && title) {
        return `${title} ${firstname} ${surname}` 
    } else {
        return `${firstname} ${surname}`
    }
}
let maleFullname1 = getFullname("Pradeep", "Leuaa", true, "Lord");

let femaleFullname1 = getFullname("Komal", "Ranjan", true, "Lady");

let maleFullname2 = getFullname("Shruti", "Leuaa", false);

let femaleFullname2 = getFullname("Parth Sarthi", "Leuaa", false);

console.log(maleFullname1);  

console.log(femaleFullname1);

console.log(maleFullname2); 

console.log(femaleFullname2); 

//Second Task

function getEventWeekday(daysFromToday) {
    let today = new Date();

    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let eventDayIndex = (today.getDay() + daysFromToday) % 7;

    let eventWeekday = weekdays[eventDayIndex];

    return eventWeekday;
}

console.log(getEventWeekday(9)); 

console.log(getEventWeekday(2)); 

//Weather Wear

function suggestClothings(temperature) {
    if (temperature >= 30) {
        return "You should wear shorts and a tank top.";
    } else if (temperature >= 20) {
        return "You can wear jeans and a t-shirt.";
    } else if (temperature >= 10) {
        return "You may want to wear jeans and a weat-shirt.";
    } else {
        return "It's quite cold. You should wear a jacket and pants.";
    }
}

const clothesToWear = suggestClothings(18);
console.log(clothesToWear); 

// Student manager (very difficult)

const class07Students = [];

function addStudentToClass(studentName) {
    //check if the list length is greater then 6 and it is not the queen.
if (class07Students.length >= 6 & studentName.toLowerCase() != "queen") {
    console.log("Cannot add more students to class 07");
    } else if (class07Students.includes(studentName)) {
        console.log(`Student ${studentName} is already in the class`);
    } else if (studentName === "Queen") {
        class07Students.push(studentName);
    } else if (studentName.trim() === "") {
        console.log("Cannot add an empty string to the class");
    } else {
        class07Students.push(studentName);
    }
}

function getNumberOfStudents() {
    return class07Students.length;
}

addStudentToClass("Komal");

addStudentToClass("Pradeep");

addStudentToClass("Shruti");

addStudentToClass("Parth");

addStudentToClass("Radhi");

addStudentToClass("Kabir");



addStudentToClass("Ravi"); 

addStudentToClass("komal"); 

addStudentToClass("Queen"); 

addStudentToClass(""); 

console.log("Number of students in class 07:", getNumberOfStudents()); 








