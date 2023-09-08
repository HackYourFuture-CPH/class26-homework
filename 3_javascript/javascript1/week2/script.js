// Flight booking fullname function
function getFullname(firstname, surname, useFormalName, isFemale) {
    if (firstname === "" || surname === "") {
        return "Please provide both firstname and surname"
    } else
        if (useFormalName) {
            if (isFemale) {
                return "Lady " + firstname + " " + surname;
            } else {
                return "Lord " + firstname + " " + surname;
            }
        } else {
            return firstname + " " + surname;
        }
}

let fullname1 = getFullname("Benjamin", "Hughes", true, false);
let fullname2 = getFullname("BenjaminA", "Button", true, true);
let fullname3 = getFullname("BenjaminA", "Button", false, false);
let fullname4 = getFullname("", "Button", true, true);
console.log(fullname1);
console.log(fullname2);
console.log(fullname3);
console.log(fullname4);





// Event application
function getEventWeekday(daysUntilEvent) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const today = new Date().getDay(); //Get today's day
    const eventDayIndex = (today + daysUntilEvent) % 7; // Calculate the index of the day of week of the event

    const eventDay = weekdays[eventDayIndex]; // Get of the day of the event
    return eventDay;
}

console.log("The event will take place on " + getEventWeekday(3));
console.log("The event will take place on " + getEventWeekday(7));






// Weather wear
function recommendClothes(temperature) {
    if (temperature >= 30) {
        return "You should wear shorts and a tank top.";
    } else if (temperature >= 20) {
        return "You can wear jeans and a t-shirt.";
    } else if (temperature >= 10) {
        return "You should wear a sweater or light jacket.";
    } else {
        return "You should wear a warm coat and gloves.";
    }
}

const clothesToWear = recommendClothes(19);
console.log(clothesToWear);





// Student manager
const class07Students = [];

function addStudentToClass(studentName) {
    if (studentName === "") {
        console.log("Cannot add an empty string to the class");
    } else if (class07Students.includes(studentName)) {
        console.log(`Student ${studentName} is already in the class`);
    } else if (class07Students.length >= 6 && studentName !== "Queen") {
        console.log("Cannot add more students to class 07");
    } else {
        class07Students.push(studentName);
    }
}

function getNumberOfStudents() {
    return class07Students.length;
}

// Examples of using
addStudentToClass("Benjamin");
addStudentToClass("Alice");
addStudentToClass("Benjamin"); // Duplicate of students name
addStudentToClass("Queen"); // Adding Queen
addStudentToClass(""); // Empty string

console.log(getNumberOfStudents()); //Display the number of students