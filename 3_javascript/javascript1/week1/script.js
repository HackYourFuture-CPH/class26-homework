// Age-ify
const yearOfBirth = 1987;
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
const dogYearOfBirth = 2017;
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
const peterHouse = {
  width: 8,
  height: 10,
  depth: 10,
  gardenSize: 100,
};
const peterhousecost = 2500000;

//calculating the volume
let peterVolumeInMeters =
  peterHouse.width * peterHouse.height * peterHouse.depth;

//actual worth of Peter's house
peterHousePrice =
  peterVolumeInMeters * 2.5 * 1000 + peterHouse.gardenSize * 300;

//calculating Peter's house price difference
let priceDifferencePeter = peterhousecost - peterHousePrice;

//calculating if Peter paid too much!
console.log(
  `${friendOne} will loose ${priceDifferencePeter} iif he buys the house`
);

//A house price estimator (Julia's house)
let friendTwo = "Julia";
const juliaHouse = {
  width: 5,
  height: 11,
  depth: 8,
  gardenSize: 70,
};
const juliaHouseCost = 1000000;

//calculating the volume
let juliaHouseVolumeInMeters =
  juliaHouse.width * juliaHouse.height * juliaHouse.depth;

//calculating actuall worth of Julia's house
let juliaHousePrice = juliaHouseVolumeInMeters * 2.5 * 1000 + 70 * 300;

//calculating Julia's house price difference
priceDifferenceJulia = juliaHousePrice - juliaHouseCost;

//calculating if Julia paid too much!
console.log(
  `${friendTwo} will save ${priceDifferenceJulia} if she buys the house`
);
