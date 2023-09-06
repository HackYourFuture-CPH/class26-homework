let yearOfBirth = 1998;
let yearFuture = 2023;

// calculat age 
let age = yearFuture - yearOfBirth; 
let stringOutput = `You will be ${age} years old in ${yearFuture} .`
// log age 
console.log(stringOutput);


// A dog age calculator
let dogYearOfBirth = 2010;
let dogYearFuture = 2027;

let shouldShowResultInDogYears = true;
let dogAgeStringOutput;

if (shouldShowResultInDogYears) {
    let dogAgeInDogYears = (dogYearFuture - dogYearOfBirth) * 7
    dogAgeStringOutput = `Your dog will be ${dogAgeInDogYears} dog years old in ${dogYearFuture}`;
  } else {
    let dogAgeInHumanYears = dogYearFuture - dogYearOfBirth;
    dogAgeStringOutput = `Your dog will be ${dogAgeInHumanYears} human years old in ${dogYearFuture}`;
  }

console.log(dogAgeStringOutput);
// House price 

let gardenSizeInM2 = 100;
function housePrice(volumeInMeters,gardenSizeInM2){
  return  volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
}
//peter's house
let pHeight = 10;
let pWidth = 8;
let PDepth = 10;
let pVolumeInMeters = pHeight * pWidth * PDepth;
let pGardenSize = 100;
let peterHasPayed = 2500000;
let  peterHousePrice = housePrice(pVolumeInMeters,pGardenSize)
if (peterHasPayed < peterHousePrice ) {
  console.log(`Peter has payed ${peterHasPayed} too little for the house ${peterHousePrice}.`);
} else if (peterHasPayed > peterHousePrice) {
  console.log(`Peter has payed ${peterHasPayed} too much for the house  ${peterHousePrice}.` );
} else {
  console.log(`Peter has payed ${peterHasPayed} the expected price for the house  ${peterHousePrice}.` );
}

// julis's house
let jHheight = 8;
let jWidth = 5;
let jDepth = 11;
let jVolumeInMeters = jHheight * jWidth * jDepth;
let jGardenSize = 70;
let juiliaHasPayed = 1000000;
let  juiliaHousePrice = housePrice(jVolumeInMeters,jGardenSize)
if (juiliaHasPayed < juiliaHousePrice ) {
  console.log(`juilia has payed ${juiliaHasPayed} too little for the house ${juiliaHousePrice}.`);
} else if (juiliaHasPayed > juiliaHousePrice) {
  console.log(`juilia has payed ${juiliaHasPayed} too much for the house  ${juiliaHousePrice}.` );
} else {
  console.log(`juilia has payed ${juiliaHasPayed} the expected price for the house  ${juiliaHousePrice}.` );
}