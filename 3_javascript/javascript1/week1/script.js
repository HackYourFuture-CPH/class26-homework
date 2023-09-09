//Age-ify (A future age calculator)

const yearOfBirth = 1999;
const yearFuture = 2027;

const age = yearFuture - yearOfBirth;
console.log(`you will be in ${age} years old in ${yearFuture}`);



//Goodboy-Oldboy (A dog age calculator)

let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let shouldShowResultInDogYears = true;
 

let dogAgeInHumanYears = dogYearFuture - dogYearOfBirth;

let dogAgeInDogYears = dogAgeInHumanYears * 7;

if (shouldShowResultInDogYears) {
  console.log(`your dog will be ${dogAgeInDogYears} dog years old in ${dogYearFuture}`);
} else {
  console.log(`your dog will be ${dogAgeInHumanYears} human years old in ${dogYearFuture}`);
}




//Housey pricey (A house price estimator)


const friendsHouse = [
  {
    name: "Peter",
    housePrice: 2500000, //2030000
    width: 8,
    depth: 10,
    height: 10,
    gardenSizeInM2: 100,
  },
  {
    name: "Julia",
    housePrice: 1000000, //1121000
    width: 5,
    depth: 11,
    height: 8,
    gardenSizeInM2: 70,
  },
];

function calculateHouseCost(person) {
  return (
    person.width * person.height * person.depth * 2.5 * 1000 +
    person.gardenSizeInM2 * 300
  );
}

const peterHouseCost = calculateHouseCost(friendsHouse[0]);
const juliaHouseCost = calculateHouseCost(friendsHouse[1]);

console.log("Peter's house cost:", peterHouseCost);
console.log("Julia's house cost:", juliaHouseCost);

if (friendsHouse[0].housePrice  > peterHouseCost) {
  console.log(`${friendsHouse[0].name} is paying too much`);
} else {
  console.log(
    `${friendsHouse[0].name} is paying ${peterHouseCost} which is reasonable`
  );
}

if ( friendsHouse[1].housePrice > juliaHouseCost) {
  console.log(
    `${friendsHouse[1].name} is paying ${juliaHouseCost} which is too much`
  );
} else {
  console.log(
    `${friendsHouse[1].name} is paying ${juliaHouseCost} which is reasonable`
  );
}

//Ez Namey (Startup name generator) Optional

const firstWords = [
  "Easy",
  "Awesome",
  "Corporate",
  "apple",
  "banana",
  "tallent",
  "smart",
  "ugly",
  "tallent",
  "grapes",
];
const secondWords = [
  "cat",
  "dog",
  "tiger",
  "pigeon",
  "horse",
  "parrot",
  "box",
  "random",
  "solution",
  "words",
  "tech",
];
const randomNumberone = Math.floor(Math.random() * firstWords.length);
const randomNumbertwo = Math.floor(Math.random() * secondWords.length);
const startupName = firstWords[randomNumberone] + secondWords[randomNumbertwo];

console.log(
  `The startup: "${startupName}" contains ${startupName.length} characters`
);