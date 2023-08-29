//Age-ify (A future age calculator)

const yearOfBirth = 1991;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;

console.log(`you will be ${age} years old in ${yearFuture}`);

//Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const shouldShowResultInDogYears = true;

const dogAgeInHumanYears = dogYearFuture - dogYearOfBirth;
const dogAgeInDogYears = dogAgeInHumanYears * 7;

if (shouldShowResultInDogYears) {
  console.log(
    `Your dog will be ${dogAgeInDogYears} dog years old in ${dogYearFuture}`
  );
} else {
  console.log(
    `Your dog will be ${dogAgeInHumanYears} human years old in ${dogYearFuture}`
  );
}

//Housey pricey (A house price estimator)

const friendsHouse = [
  {
    name: "Peter",
    housePrice: 2500000,
    width: 8,
    depth: 10,
    height: 10,
    gardenSizeInM2: 300,
  },
  {
    name: "Julia",
    housePrice: 1000000,
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

if (peterHouseCost > friendsHouse[0].housePrice) {
  console.log(`${friendsHouse[0].name} is paying too much`);
} else {
  console.log(
    `${friendsHouse[0].name} is paying ${peterHouseCost} which is reasonable`
  );
}

if (juliaHouseCost > friendsHouse[1].housePrice) {
  console.log(
    `${friendsHouse[1].name} is paying ${juliaHouseCost} which is too much`
  );
} else {
  console.log(
    `${friendsHouse[1].name} is paying ${juliaHouseCost} which is reasonable`
  );
}

// Ez Namey (Startup name generator)

const firstWords = [
  "Easy",
  "Awesome",
  "Corporate",
  "fun",
  "gun",
  "run",
  "boom",
  "bang",
  "ring",
  "box",
];
const secondWords = [
  "ping",
  "pong",
  "Ding",
  "Dong",
  "stick",
  "apple",
  "banana",
  "left",
  "right",
  "dog",
  "cat",
];
const randomNumberone = Math.floor(Math.random() * firstWords.length);
const randomNumbertwo = Math.floor(Math.random() * secondWords.length);
const startupName = firstWords[randomNumberone] + secondWords[randomNumbertwo];

console.log(
  `The startup: "${startupName}" contains ${startupName.length} characters`
);
