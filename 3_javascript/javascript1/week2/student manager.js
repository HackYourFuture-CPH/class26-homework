const class07Students = [];

function addStudentToClass(studentName) {
  if (class07Students.length >= 6) {
    return "Cannot add more students to class 07";
  }

  else if (studentName.trim() === "") {
    return "Student name cannot be empty";
  }

  else if (class07Students.includes(studentName)) {
    return `Student ${studentName} is already in the class`;
  }

  else if (studentName === "Queen") {
    class07Students.push(studentName);
    return `Queen is added to the class, even though the class is filled`;
  }
  else{
  class07Students.push(studentName);
  return `Student ${studentName} added to the class`;
}
}
function getNumberOfStudents() {
  return `Number of students in the class: ${class07Students.length}`;
}

console.log(addStudentToClass("Rumana")); 
console.log(addStudentToClass("John")); 
console.log(addStudentToClass("Reena"));
console.log(addStudentToClass("Rohan"));
console.log(addStudentToClass("Jakob")); 
console.log(addStudentToClass("Benjamin")); 
console.log(addStudentToClass("Queen")); 
console.log(addStudentToClass("")); 
console.log(getNumberOfStudents());

