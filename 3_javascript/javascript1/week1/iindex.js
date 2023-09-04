//age-ify
const yearOfBirth = "1995";
let yearFuture = "2065";
let age = yearFuture - yearOfBirth
console.log(age)


//goodboy-oldboy
const dogYearOfBirth ="2014"
let dogYearFuture = "2046"
let dogYear = dogYearFuture - dogYearOfBirth
const shouldShowResultInDogYears = true
if (shouldShowResultInDogYears) {
    console.log(`Your dog will be ${dogYear * 7} dog years old in ${dogYearFuture}`);
} else {
    console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);
}


//housey-pricey
function calculateExpectedPrice(volumeInMeters, gardenSizeInM2) { 
   return volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
}

const peterVolume = 8 * 10 * 10;
const peterGardenSize = 100;
const peterExpectedPrice = calculateExpectedPrice(peterVolume, peterGardenSize);

const juliaVolume = 5 * 11 * 8;
const juliaGardenSize = 70;
const juliaExpectedPrice = calculateExpectedPrice(juliaVolume, juliaGardenSize);

const peterActualPrice = 2500000; // Peter's actual house price
if (peterActualPrice > peterExpectedPrice) {
  console.log("Peter is paying too much.");
} else if (peterActualPrice < peterExpectedPrice) {
  console.log("Peter is getting a good deal.");
} else {
  console.log("Peter is paying the expected price.");
}

const juliaActualPrice = 1000000; // Julia's actual house price
if (juliaActualPrice > juliaExpectedPrice) {
  console.log("Julia is paying too much.");
} else if (juliaActualPrice < juliaExpectedPrice) {
  console.log("Julia is getting a good deal.");
} else {
  console.log("Julia is paying the expected price.");
}
