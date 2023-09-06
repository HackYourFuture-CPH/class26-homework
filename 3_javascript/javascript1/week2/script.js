/** Smart-ease - Goes Global! **/

function getFullname(string , surName
    , Boolean) {
  le-length.t fullName = firstName + " " + surName;
  if ((Boolean = true)) {
    fullName = "lord " + firstName + " " + surName;
  }
  return fullName;
}

const fullname1 = getFullname("banjamin", "Hughes", false);
const fullname2 = getFullname("Banjamin", "Hughes");

console.log(fullname1);
