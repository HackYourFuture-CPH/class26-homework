
//A future age calculator
const yearOfBirth = 1993 ;

const yearFuture = 2030 ;

const age = yearFuture - yearOfBirth ;

const theSentence = `${"You will be " + age + "years old in " + yearFuture}`;

console.log(theSentence);

//A dog age calculator

const dogYearOfBirth = 2020 ;

const dogYearFuture = 2030 ;

const shouldShowResultInDogYears = true ;

const dogAgeInHumanYear = dogYearFuture - dogYearOfBirth ;

const dogAgeInDogYear = dogAgeInHumanYear * 7 ;

let dogAge ;
if(shouldShowResultInDogYears) {
    dogAge = "Your dog will be" + " " + dogAgeInDogYear + " " + "dog years old in" +  " " + dogYearFuture + "." ;
}
else {
    dogAge = "Your dog will be" + " " + dogAgeInHumanYear + " " + "human years old in" +  " " + dogYearFuture + "." ;
}

console.log(dogAge);

//A house price estimator

function calculateHousePrice (volumeInMeters, gardenSizeInM2) {
return volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
}

let peterHouse = {
    width : 8,
    depth : 10,
    height :10,
    garden : 100,
    price : 2500000
};

let juliaHouse = {
    width : 5,
    depth : 11,
    height : 8,
    garden : 70,
    price : 1000000
};

const peterHouseVolume = peterHouse.width * peterHouse.depth * peterHouse.height ;
const juliaHouseVolume = juliaHouse.width * juliaHouse.depth * juliaHouse.height ;

const peterExpectedPrice = calculateHousePrice(peterHouseVolume, peterHouse.garden);
const juliaExpectedPrice = calculateHousePrice(juliaHouseVolume, juliaHouse.garden);

if (peterHouse.price > peterExpectedPrice) {
 
    console.log("Peter is paying too low.");

} else if (peterHouse.price < peterExpectedPrice){

    console.log("Peter is paying too high");

} else {

    console.log("Peter is paying accurate and correct" )
}

if (juliaHouse.price > juliaExpectedPrice) {
    
    console.log("Julia is paying too low.");
   
} else if (juliaHouse.price < juliaExpectedPrice){

    console.log("Julia is paying too high");

} else {

    console.log("Julia is paying accurate and correct" )
   }
   

//Startup name generator

const firstWords = ["Easy", "Awesome", "Corporate","Funny", "Lazy", "Dreamy", "Koool", "Drool", "Wheely", "Lily"];
const secondWords = ["Chaipoint", "Funny", "Klassy", "Narannaran", "Kurkure", "Lays", "Smokey", "Chilly", "Kabutar", "TamTam"];

const randomNumber = Math.floor(Math.random() * firstWords.length);

const startupName = `${firstWords[randomNumber]} ${secondWords[randomNumber]}`;

const nameLength = startupName.length;

console.log(`The startup: ${startupName} contains ${nameLength} characters`);

