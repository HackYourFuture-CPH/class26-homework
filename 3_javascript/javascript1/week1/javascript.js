
//Age-ify (A future age calculator)

const yearOfBirth = 1990
const yearFuture = 2050
const age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}.`);


//Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const shouldShowResultInDogYears = true;

const dogAgeInHumanYears = dogYearFuture - dogYearOfBirth;
const dogAgeInDogYears = dogAgeInHumanYears * 7;

if (shouldShowResultInDogYears) {
  console.log(`Your dog will be ${dogAgeInDogYears} dog years old in ${dogYearFuture}`);} 
  else {
  console.log(`Your dog will be ${dogAgeInHumanYears} human years old in ${dogYearFuture}`);}



  //Housey pricey (A house price estimator)

const friendshouse = [
    {
        name: "Peter",
        width: 8,
        depth: 10,
        height: 10,
        gardenSizeInM2: 100,
        price: 2500000,
    },
    {
        name: "Julia",
        width: 5,
        depth: 11,
        height: 8,
        gardenSizeInM2: 70,
        price: 1000000, 
    }
];

function calculateHouseCost(person) {
    return (
       person.width * person.height * person.depth * 2.5 * 1000 + person.gardenSizeInM2 * 300
    )
};

const peterHouseCost = calculateHouseCost(friendshouse[0]);
const juliaHouseCost = calculateHouseCost(friendshouse[1]);

console.log("Peter's house costs:", peterHouseCost);
console.log("Julia's house costs:", juliaHouseCost);

     //Peter
if (peterHouseCost > friendshouse[0].price) {
    console.log("Peter is paying too much.")
} else {
    console.log(`Peter is paying ${peterHouseCost} which is reasonable`)
};

    //Julia
if (juliaHouseCost > friendshouse[1].price) {
    console.log("Julia is paying too much.")
} else {
    console.log(`Julia is paying ${juliaHouseCost} which is reasonable`)
};

