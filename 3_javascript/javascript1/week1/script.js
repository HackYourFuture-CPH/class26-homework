
//A future age calculator
let yearOfBirth = 1993 ;

let yearFuture = 2030 ;

const age = yearFuture - yearOfBirth ;

const theSentence = "You will be" + " " + age + " " +  "years old in" + " " + yearFuture+ "." ;

console.log(theSentence);

//A dog age calculator

let dogYearOfBirth = 2020 ;

let dogYearFuture = 2030 ;

let shouldShowResultInDogYears = true ;

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

function calculateHousePrice(volumeInMeters,gardenSizeInM2 ) {
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

let peterHouseVolume = peterHouse.width * peterHouse.depth * peterHouse.height ;
let juliaHouseVolume = juliaHouse.width * juliaHouse.depth * juliaHouse.height ;

let peterExpectedPrice = calculateHousePrice(peterHouseVolume, peterHouse.garden);
let juliaExpectedPrice = calculateHousePrice(juliaHouseVolume, juliaHouse.garden);

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

let firstWords = ["Easy", "Awesome", "Corporate","Funny", "Lazy", "Dreamy", "Koool", "Drool", "Wheely", "Lily"];
let secondWords = ["Chaipoint", "Funny", "Klassy", "Narannaran", "Kurkure", "Lays", "Smokey", "Chilly", "Kabutar", "TamTam"];

const randomNumber = Math.floor(Math.random() * 10);

let startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

let nameLength = startupName.length;

console.log("The startup:" + " " + startupName + " " + "contains" + " " + nameLength + " " + "characters");

