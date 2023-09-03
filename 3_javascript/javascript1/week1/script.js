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