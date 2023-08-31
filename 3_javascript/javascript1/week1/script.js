// Age-ify (A future age calculator)

const yearOfBirth = 1990;
const yearFuture = 2027;

const age = yearFuture - yearOfBirth;

const outputString = `You will be ${age} years old in ${yearFuture}`;

console.log(outputString);

// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2015;
const dogYearFuture = 2027;
const shouldShowResultInDogYears = true;

const dogAgeInHumanYears = dogYearFuture - dogYearOfBirth;
const dogAgeInDogYears = dogAgeInHumanYears * 7;

let resultString;

if (shouldShowResultInDogYears) {
  resultString = `Your dog will be ${dogAgeInDogYears} dog years old in ${dogYearFuture}`;
} else {
  resultString = `Your dog will be ${dogAgeInHumanYears} human years old in ${dogYearFuture}`;
}

console.log(resultString);

// Housey pricey (A house price estimator)

function calculateHousePrice(volumeInMeters, gardenSizeInM2) {
  return volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
}

const peterHouseVolume = 8 * 10 * 10;
const peterGardenSize = 100;
const peterExpectedPrice = calculateHousePrice(
  peterHouseVolume,
  peterGardenSize
);
const peterActualPrice = 2500000;

const juliaHouseVolume = 5 * 11 * 8;
const juliaGardenSize = 70;
const juliaExpectedPrice = calculateHousePrice(
  juliaHouseVolume,
  juliaGardenSize
);
const juliaActualPrice = 1000000;

if (peterActualPrice < peterExpectedPrice) {
  console.log("Peter is paying too little for the house.");
} else if (peterActualPrice > peterExpectedPrice) {
  console.log("Peter is paying too much for the house.");
} else {
  console.log("Peter is paying the expected price for the house.");
}

if (juliaActualPrice < juliaExpectedPrice) {
  console.log("Julia is paying too little for the house.");
} else if (juliaActualPrice > juliaExpectedPrice) {
  console.log("Julia is paying too much for the house.");
} else {
  console.log("Julia is paying the expected price for the house.");
}

// Ez Namey (Startup name generator)

const firstWords = ["Easy", "Awesome", "Corporate", "Global", "Tech"];
const secondWords = ["Solutions", "Tech", "Group", "World", "Hub"];

const randomFirstIndex = Math.floor(Math.random() * 10);
const randomSecondIndex = Math.floor(Math.random() * 10);

const startupName =
  firstWords[randomFirstIndex] + " " + secondWords[randomSecondIndex];

const nameLength = startupName.length;

console.log(`The startup: "${startupName}" contains ${nameLength} characters.`);
