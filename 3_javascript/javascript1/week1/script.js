// Age-ify
const yearOfBirth = 1987;
let yearFuture = 2045;

// calculating the age
let age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}`);

// changing the future year to 2027
yearFuture = 2027;
age = yearFuture - yearOfBirth;

// log out using string
console.log(`You will be ${age} years old in ${yearFuture}`);

//A dog age calculator
const dogYearOfBirth = 2017;
const dogYearFuture = 2045;
const dogYear = dogYearFuture - dogYearOfBirth;
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
const peterHouse = {
  friendOne: "Peter",
  width: 8,
  height: 10,
  depth: 10,
  gardenSize: 100,
  housecost: 2500000,
};

//calculating the volume
let peterVolumeInMeters =
  peterHouse.width * peterHouse.height * peterHouse.depth;

//actual worth of Peter's house
peterHousePrice =
  peterVolumeInMeters * 2.5 * 1000 + peterHouse.gardenSize * 300;

//calculating Peter's house price difference
let priceDifferencePeter = peterHouse.housecost - peterHousePrice;

//calculating if Peter paid too much!
console.log(
  `${peterHouse.friendOne} will loose ${priceDifferencePeter} if he buys the house`
);

//A house price estimator (Julia's house)
const juliaHouse = {
  friendTwo: "Julia",
  width: 5,
  height: 11,
  depth: 8,
  gardenSize: 70,
  houseCost: 1000000,
};

//calculating the volume
let juliaHouseVolumeInMeters =
  juliaHouse.width * juliaHouse.height * juliaHouse.depth;

//calculating actuall worth of Julia's house
let juliaHousePrice =
  juliaHouseVolumeInMeters * 2.5 * 1000 + juliaHouse.gardenSize * 300;

//calculating Julia's house price difference
priceDifferenceJulia = juliaHousePrice - juliaHouse.houseCost;

//calculating if Julia paid too much!
console.log(
  `${juliaHouse.friendTwo} will save ${priceDifferenceJulia} if she buys the house`
);
