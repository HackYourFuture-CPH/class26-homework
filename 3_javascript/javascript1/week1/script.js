// Age-ify
let yearOfBirth = 1987;
let yearFuture = 2045;

// calculating the age
let age = yearFuture - yearOfBirth;
console.log(age);

// changing the future year to 2027
yearFuture = 2027;
age = yearFuture - yearOfBirth;
console.log(age);

// log out using string
console.log(`You will be ${age} in ${yearFuture}`);

//A dog age calculator
let dogYearOfBirth = 2017;
let dogYearFuture = 2045;
let dogYear = dogYearFuture - dogYearOfBirth;
let dogString = "human";

let shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears) {
  dogYear *= 7;
  dogString = "dog";
}

console.log(
  `Your dog will be ${dogYear} ${dogString} years old in ${dogYearFuture}`
);
