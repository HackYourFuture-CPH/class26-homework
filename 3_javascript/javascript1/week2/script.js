//Flight booking
function getFullname(firstname, surname, useFormalName, gender) {
  if (useFormalName == true && gender == "man") {
    return `Lord ${firstname} ${surname}`;
  } else if (useFormalName == true && gender == "woman") {
    return `Miss ${firstname} ${surname}`;
  } else {
    return `${firstname} ${surname}`;
  }
}

let fullname1 = getFullname("Sevda", "Naziri", true, "woman");
let fullname2 = getFullname("John", "Wick", true, "man");

console.log(fullname1);
console.log(fullname2);
