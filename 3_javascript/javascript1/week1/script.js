//Age-ify (A future age calculator)

const yearOfBirth = 1997;
const yearFuture = 2057;
const age = yearFuture- yearOfBirth;
console.log(`you will be in ${age} years old in ${yearFuture}`);


//Goodboy-Oldboy (A dog age calculator)


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


//Housey pricey (A house price estimator)

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


     //Ez Namey (Startup name generator) Optional 
     
     const firstWords = [
      "Easy",
      "Awesome",
      "Corporate",
      "Cat",
      "Bunny",
      "Hamster",
      "Bad",
      "Good",
      "Luplup",
      "Grapes",
    ];
    const secondWords = [
      "Lily",
      "Melly",
      "Hufhuf",
      "Cucuk",
      "Sucuk",
      "Molly",
      "Sweety",
      "Hayal",
      "Tecno",
      "Rock",
    ];
    const randomNumberone = Math.floor(Math.random() * firstWords.length);
    const randomNumbertwo = Math.floor(Math.random() * secondWords.length);
    const startupName = firstWords[randomNumberone] + secondWords[randomNumbertwo];

    console.log(
      `The startup: "${startupName}" contains ${startupName.length} characters`
    );