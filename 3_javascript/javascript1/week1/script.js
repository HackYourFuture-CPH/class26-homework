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



