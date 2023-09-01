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

//A house price estimator (Peter's house)
let friendOne = "Peter";
let peterVolumeInMeters = 8 * 10 * 10;
const peterPaid = 2500000;

//actual worth of Peter's house
peterHousePrice = peterVolumeInMeters * 2.5 * 1000 + 100 * 300;

//calculating Peter's house price difference
let priceDifferencePeter = peterPaid - peterHousePrice;

//calculating if Peter paid too much!
console.log(`${friendOne} lost ${priceDifferencePeter} in the house he bought`);

//A house price estimator (Julia's house)
let friendTwo = "Julia";
let juliaHouseVolumeInMeters = 5 * 11 * 8;
const juliaPaid = 1000000;

//calculating actuall worth of Julia's house
let juliaHousePrice = juliaHouseVolumeInMeters * 2.5 * 1000 + 70 * 300;

//calculating Julia's house price difference
priceDifferenceJulia = juliaHousePrice - juliaPaid;

//calculating if Julia paid too much!
console.log(
  `${friendTwo} saved ${priceDifferenceJulia} in the house she bought`
);
