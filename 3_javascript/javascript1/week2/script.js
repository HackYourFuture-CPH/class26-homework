
// exercice full_name
function getFullname(firstname, surname, useFormalName, isWomen ){

    if( firstname === "" & surname === ""){
        return "firstname and surname are missing"
    }
    if (useFormalName === true){
        if (isWomen === true){
            return `lady ${firstname} ${surname}`;
        } else{
            return `Lord ${firstname} ${surname}`;
        }    
    } else {
        return `${firstname} ${surname}`;
    }
}

const fullName = getFullname("Benjamin", "Hughes",true);
console.log(fullName);
let fullName1 = getFullname("nada", "jrad") ;
let fullName2 = getFullname("jannah", "jrad") ;
console.log(fullName1);
console.log(fullName2);

// event day 
function getEventWeekday(numberOfTheDay){
    let today = new Date();
    let day = today.getDay();//1,2,3...
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday" , "Thursday", "Friday", "Saturday"];
   
    return weekdays[(day + numberOfTheDay) % 7];
}

console.log(getEventWeekday(0));
console.log(getEventWeekday(3));
console.log(getEventWeekday(9));

// weather
function weather(tempertaure){
    if(tempertaure >= 20 ){
        return "wear shorts and dress";
    }  if (tempertaure <= 10 ){
        return "wear  a coat ";
    } else {
        return "wear jacket jeans";
    }
}
let  clothesToWear = weather(8);
console.log(clothesToWear);
// Student manager
const class07Students = [];
function addStudentToClass(studentName) {
    if (class07Students.length >= 6){
       if(studentName === "Queen"){
        class07Students.pop();
        class07Students.push(studentName);
       } else {
            return "Cannot add more students to class 07";
        }
    } else if (class07Students.includes(studentName)){
        return `Student ${studentName} is already in the class`;
    } else if (studentName.trim() === "") {
        return (`You cannot add an empty string to a class`);
    } else {
        class07Students.push(studentName)
        return (`student added`);
    }
}

addStudentToClass("Nada");
addStudentToClass("jannah");
addStudentToClass("haythem");
addStudentToClass("chahed");
addStudentToClass("Nadine");
addStudentToClass("chada");
addStudentToClass("Queen"); 
addStudentToClass(""); 
getNumberOfStudents();

console.log(class07Students);


function getNumberOfStudents() {
  return `Number of student in the class is ${class07Students.length}`;
}
getNumberOfStudents();