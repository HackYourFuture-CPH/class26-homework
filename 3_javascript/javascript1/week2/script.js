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

//Event application
let daysUntilEvent = 8;

function getEventWeekday(days) {
  var date = new Date();
  date.setDate(date.getDate() + days);
  return date;
}

console.log(getEventWeekday(daysUntilEvent));

//Weather wear 
let chillCloths = "You should wear T-shirt and shorts";
let warmCloths = "You must wear warm cloths";

function clothesToWear(tempreture) {
  if(tempreture > 20) {
    return ${chillCloths}
  }

}
console.log(clothesToWear)