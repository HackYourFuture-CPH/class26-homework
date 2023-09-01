
//Age-ify (A future age calculator)

// let yearOfBirth = 1990
// let yearFuture = 2050
// let age = yearFuture - yearOfBirth;
// console.log(`You will be ${age} years old in ${yearFuture}.`);


//Goodboy-Oldboy (A dog age calculator)

// let dogYearOfBirth = 2017;
// let dogYearFuture = 2027;
// let shouldShowResultInDogYears = true;

// let dogAgeInHumanYears = dogYearFuture - dogYearOfBirth;
// let dogAgeInDogYears = dogAgeInHumanYears * 7;

// if (shouldShowResultInDogYears) {
//   console.log(`Your dog will be ${dogAgeInDogYears} dog years old in ${dogYearFuture}`);} 
//   else {
//   console.log(`Your dog will be ${dogAgeInHumanYears} human years old in ${dogYearFuture}`);}



  //Housey pricey (A house price estimator)

let friendshouse = [
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

let peterHouseCost = calculateHouseCost(friendshouse[0]);
let juliaHouseCost = calculateHouseCost(friendshouse[1]);

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

