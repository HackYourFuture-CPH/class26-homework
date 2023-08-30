let yearOfBirth = 1999;
let yearFuture = 2027;
let age = yearFuture - yearOfBirth;
console.log('you will be'+ " "+age+ ' yeras old in'+" "+yearFuture) ;

// A Dog Age Calculator 
let dogYearOfBirth =  2017
let dogYearFuture = 2027 ;
let dogYear = "dog" ;
 
let shouldShowResultInDogYears = true;
let dogAge = dogYearFuture - dogYearOfBirth ;
let humanAge = dogAge * 7;

if (shouldShowResultInDogYears) {
  console.log ( "your dog will be " + dogAge + " "+ dogYear + " " + "years old in" + " "+ dogYearFuture)
} else {
    console.log ( "your dog will be " + humanAge + " "+ dogYear + " " + "human years old in" + " " + dogYearFuture)
}

//Housey pricey (A house price estimator)

let peterHouse = {
    wide: 8,
    deep: 10,
    high: 10,
    gardenSize: 100,
};


let juliaHouse = {
    wide: 5,
    deep: 11,
    high: 8,
    gardenSize: 70,
};


function calculateHousePrice(volumeInMeters, gardenSizeInM2) {
    return volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
}


let peterVolume = peterHouse.wide * peterHouse.deep * peterHouse.high;
let juliaVolume = juliaHouse.wide * juliaHouse.deep * juliaHouse.high;


let peterEstimatedPrice = calculateHousePrice(peterVolume, peterHouse.gardenSize);
let juliaEstimatedPrice = calculateHousePrice(juliaVolume, juliaHouse.gardenSize);

let peterHousePrice = 2500000;
let juliaHousePrice = 1000000;

if (peterEstimatedPrice > peterHousePrice) {
    console.log("Peter is paying too much.");
} else if (peterEstimatedPrice < peterHousePrice) {
    console.log("Peter is paying too little.");
} else {
    console.log("Peter's house price is about right.");
}

if (juliaEstimatedPrice > juliaHousePrice) {
    console.log("Julia is paying too much.");
} else if (juliaEstimatedPrice < juliaHousePrice) {
    console.log("Julia is paying too little.");
} else {
    console.log("Julia's house price is about right.");
} 

// Ez Namey (Startup name generator) Optional 

let firstWords = ['Awesome', 'Easy', 'Nice', 'Simple', 'Cute', 'Sweet', 'Beautiful', 'Handsome', 'Attractive', 'Naughty'];
let secondWords = ['Creative', 'Solution', 'Hob', 'Co', 'Labs', 'Connect', 'Wave', 'Tech', 'Senergy', 'Naxa'];

const randomNumber = Math.floor(Math.random() * 10);
const randomFirstWord = firstWords[randomNumber];
const randomSecondWord = secondWords[randomNumber];

let startupName = randomFirstWord + ' ' + randomSecondWord;
let startupNameLength = startupName.length;

console.log(`The startup: "${startupName}" contains ${startupNameLength} characters.`);





