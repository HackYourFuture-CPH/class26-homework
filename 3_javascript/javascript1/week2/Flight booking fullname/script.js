function getFullname(firstName, surName, useFormalName) {
  if (useFormalName === true) {
    return `Lord  ${firstName} ${surName}`;
  } else {
    return `${firstName} ${surName}`;
  }
}

let fullName1 = getFullname("Nico", "Q", true);
let fullName2 = getFullname("Anna", "Q");

console.log(fullName1);
console.log(fullName2);
