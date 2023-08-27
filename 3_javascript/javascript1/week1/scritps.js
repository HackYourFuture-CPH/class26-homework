//Age-ify (A future age calculator)

let yearOfBirth = 1991;
let yearFuture = 2027;
let age = yearFuture - yearOfBirth;
console.log(age);
console.log(`you will be ${age} years old in ${yearFuture}`);

//Goodboy-Oldboy (A dog age calculator)

let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let shouldShowResultInDogYears = true;

let dogAgeInHumanYears = dogYearFuture - dogYearOfBirth;

if (shouldShowResultInDogYears) {
  let dogAgeInDogYears = dogAgeInHumanYears * 7; // Dog years calculation
  console.log(
    `Your dog will be ${dogAgeInDogYears} dog years old in ${dogYearFuture}`
  );
} else {
  console.log(
    `Your dog will be ${dogAgeInHumanYears} human years old in ${dogYearFuture}`
  );
}

//Housey pricey (A house price estimator)

let yourName = prompt("your Name");
let width = prompt("Enter width");
let depth = prompt("Enter depth");
let hight = prompt("Enter hight");
let gardenSizeInM2 = prompt("Enter garden size in M2");
let houseCost = prompt("enter house cost");
let volumeInMeters = width * depth * hight;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (houseCost > housePrice) {
  alert(`${yourName} is paying too much`);
} else {
  alert(`${yourName} paying too little`);
}
