// Age-ify (A future age calculator)

const yearOfBirth = 1987;
const yearFuture = 2027;

let age = yearFuture - yearOfBirth;
const outputString = "You will be " + age + " years old in " + yearFuture;

console.log(outputString);


// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;

let shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears) {
    dogYear *= 7;
    console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture);
} else {
    console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
}


// Housey pricey (A house price estimator)
let widthPeter = 8;
let deepPeter = 10;
let heightPeter = 10;
let gardenSizePeter = 100;
let costPeter = 2500000;

let widthJulia = 5;
let deepJulia = 11;
let heightJulia = 8;
let gardenSizeJulia = 70;
let costJulia = 1000000;

function housePriceCalculator(width, deep, height, gardenSize) {
    let volumeInMeters = width * deep * height;
    let housePrice = volumeInMeters * 2.5 * 1000 + gardenSize * 300;
    return housePrice;
}

let realPricePeter = housePriceCalculator(widthPeter, deepPeter, heightPeter, gardenSizePeter);
let realPriceJulia = housePriceCalculator(widthJulia, deepJulia, heightJulia, gardenSizeJulia);

if (realPricePeter < costPeter) {
    console.log("Peter is paying too much.");
} else {
    console.log("Peter is paying just right or less.");
}

if (realPriceJulia < costJulia) {
    console.log("Julia is paying too much.");
} else {
    console.log("Julia is paying just right or less.");
}



// Ez Namey (Startup name generator) Optional

let firstWords = ["Easy", "Awesome", "Corporate", "Brilliant", "Quantum", "Innovate", "Smart", "Dex", "Alpha", "Terra"];
let secondWords = ["Solution", "Tech", "Corporation", "Dynamics", "Nexus", "Concepts", "Ideas", "Visions", "Cognition", "Nova"];

let firstRandomIndex = Math.floor(Math.random() * 10);
let secondRandomIndex = Math.floor(Math.random() * 10);

let startupName = firstWords[firstRandomIndex] + " " + secondWords[secondRandomIndex];

console.log("The startup: \"" + startupName + "\" contains" + startupName.length + "characters");