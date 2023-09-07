const class07Students = ["Nico"];

function isStudentInClass(studentName) {
  for (let i = 0; i < class07Students.length; i++) {
    const student = class07Students[i];
    if (student === studentName || studentName === "") {
      return true;
    }
  }
  return false;
}

function addStudentToClass(studentName) {
  if (class07Students.length >= 6) {
    console.log(
      "Cannot add more students to class 07"
    );
  } else if (isStudentInClass(studentName)) {
    console.log(`Student ${studentName} is already in the class.`);
  } else {
    class07Students.push(studentName);
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}

console.log(getNumberOfStudents());
