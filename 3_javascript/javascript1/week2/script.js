/** Smart-ease - Goes Global! **/

function getFullname(Gender, firstName, surName, useFormalName) {
  let fullName = "";

  if (Gender === "female") {
    if (useFormalName === true) {
      fullName = `Lady ${firstName} ${surName}`;
    } else {
      fullName = `${firstName} ${surName}`;
    }
  } else {
    if (useFormalName === true) {
      fullName = `Lord ${firstName} ${surName}`;
    } else {
      fullName = `${firstName} ${surName}`;
    }
  }

  return fullName;
}

const fullname3 = getFullname("female", "Banjamin", "Hughes", false);
const fullname4 = getFullname("female", "Banjamin", "Hughes", true);
const fullname1 = getFullname("male", "Banjamin", "Hughes", false);
const fullname2 = getFullname("male", "Banjamin", "Hughes", true);

console.log(fullname1);
console.log(fullname2);
console.log(fullname3);
console.log(fullname4);
