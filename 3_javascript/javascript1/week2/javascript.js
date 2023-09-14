// Formal fullname
function getFullname(firstname, surname, useFormalName, isWoman) {
    if (!firstname|| !surname) {
        return `Please enter your full name`;
    }

    if (useFormalName && isWoman) {
        return `Lady ${firstname} ${surname}`;
    }
    if (useFormalName && isWoman) {
        return `Lord ${firstname} ${surname}`;
    }
else if (useFormalName && !isWoman) {
        return `Lord ${firstname} ${surname}`;
    else {
        return `${firstname} ${surname}`;
    }
}

const fullName1 = getFullname("Benjamin", "Hughes", true, false);
const fullName2 = getFullname("Benjamin", "Hughes", false, false); 
const fullName3 = getFullname("", "Wardak", false, false);
const fullName4 = getFullname("Delilah", "Wardak", true, true);
const fullName5 = getFullname("", "", false, false);

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);
console.log(fullName4);
console.log(fullName5);

// Event application

function getEventWeekday(numberOfTheDay){
    let today = new Date().getDay();
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday" , "Thursday", "Friday", "Saturday"];
   
    return weekdays[(today + numberOfTheDay) % 7];
}

console.log(getEventWeekday(0));
console.log(getEventWeekday(1));

// Weather wear
// Create a function (that you have to name) that has temperature as parameter. 
// Based on the temperature it should return a string with what the user should wear. 
// You decide what the user should wear based on the temperature.
function toWear (temperature) {
let clothes = "";
if (temperature <=0) {
    clothes = `Steal some clothes from eskimos, you are freezing to death!`; 
}
else if (temperature > 0 && temperature < 15) {
    clothes = `You can wear whatever you like`;
}
else {
    clothes = `Time to strip down to shorts and a t-shirt`;
}
return clothes;

}
let clothesType = toWear(-2);
console.log(clothesType);



// Student manager
const class07Students = [];

function addStudentToClass(studentName) {
    if (class07Students.includes(studentName)) {
        console.log(`Student ${studentName} is already in the class.`);
    } else {
        if (class07Students.length < 7 || class07Students.length > 6 && studentName === "Queen") {
            class07Students.push(studentName);
        } else {
            console.log("Cannot add more students to class 07");
        }
    }
}

function getNumberOfStudents() {
    return class07Students.length;
}

addStudentToClass("Shahnawaz");
addStudentToClass("Rciky");
addStudentToClass("Martin");
addStudentToClass("Martin"); 
addStudentToClass("Anne"); 
addStudentToClass("Sophie"); 
addStudentToClass("Marie"); 
addStudentToClass("Cumming"); 
addStudentToClass("Donna"); 
addStudentToClass("Queen");
addStudentToClass("Donna"); 

console.log("Number of students:", getNumberOfStudents());

for (let index = 0; index < class07Students.length; index++) {
    console.log(class07Students[index]);
}

// 
