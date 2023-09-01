
//Age-ify (A future age calculator)


console.log("A future age calculator")
const yearOfBirth = 1987;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}`);





//Goodboy-Oldboy (A dog age calculator)

console.log("age of dog");

const dogYearOfBirth = 2009;
const dogYearFuture = 2018;
const humanYears = dogYearFuture - dogYearOfBirth;
const dogYears = humanYears * 7;
const shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
console.log(`Your dog will be ${dogYears} dog years old in ${dogYearFuture}`);} 
{console.log(`Your dog will be ${humanYears} human years old in ${dogYearFuture}`);}





//Housey pricey (A house price estimator)

console.log("house price estimator");

function calculateHousePrice(volumeInMeters, gardenSizeInM2) {
    return volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
}

// Peter's house
const peterVolume = 8 * 10 * 10; // width * depth * height
const peterGardenSize = 100;
const peterExpectedPriceDKK = calculateHousePrice(peterVolume, peterGardenSize);
const peterActualPriceDKK = 2500000;

// Julia's house
const juliaVolume = 5 * 11 * 8; // width * depth * height
const juliaGardenSize = 70; 
const juliaExpectedPriceDKK = calculateHousePrice(juliaVolume, juliaGardenSize);
const juliaActualPriceDKK = 1000000;



// Compare prices for Peter's house
if (peterActualPriceDKK < peterExpectedPriceDKK) {
    console.log("Peter is paying too little for the house.");
} else if (peterActualPriceDKK > peterExpectedPriceDKK) {
    console.log("Peter is paying too much for the house.");
} else {
    console.log("Peter is paying a reasonable price for the house.");
};

// Compare prices for Julia's house
if (juliaActualPriceDKK < juliaExpectedPriceDKK) {
    console.log("Julia is paying too little for the house.");
} else if (juliaActualPriceDKK > juliaExpectedPriceDKK) {
    console.log("Julia is paying too much for the house.");
} else {
    console.log("Julia is paying a reasonable price for the house.");
}




//Ez Namey (Startup name generator)

console.log("Startup name generator");

const firstWords = ["Easy", "Awesome", "Corporate", "Innovative", "Tech", "Fusion", "Nexa", "Elevate", "Spark", "Synergy"];
const secondWords = ["Irma", "Fotex", "Netto", "Rema1000", "Lidl", "Aldi", "SuperBrugsen", "Silvan", "Ikea", "kvickly"];

const randomNumber = Math.floor(Math.random() * 10);
const startupName = `${firstWords[randomNumber]} ${secondWords[randomNumber]}`;
const nameLength = startupName.length;

console.log(`The startup: "${startupName}" contains ${nameLength} characters.`);

