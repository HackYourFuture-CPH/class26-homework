// Info of Year
const dogYearOfBirth = 2023;
const dogYearFuture = 2060;

//calculation
const dogYear = dogYearFuture - dogYearOfBirth;

// dog or not dog
const shouldShowResultInDogYears = true;

// Answer
if (shouldShowResultInDogYears) {
  console.log(
    `Your dog will be ${dogYear * 7} dog years old in ${dogYearFuture}`
  );
} else {
  console.log(
    `Your dog will be ${dogYear} human years old in ${dogYearFuture}`
  );
}
