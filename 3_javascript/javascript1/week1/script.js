//Age-ify (A future age calculator)

let yearOfBirth = 1991;
let yearFuture = 2027;
let age = yearFuture - yearOfBirth;

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

let friendsHouse = [
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

const Peterhousecost =
  friendsHouse[0].width *
    friendsHouse[0].height *
    friendsHouse[0].depth *
    2.5 *
    1000 +
  friendsHouse[0].gardenSizeInM2 * 300;

const Juliahousecost =
  friendsHouse[1].width *
    friendsHouse[1].height *
    friendsHouse[1].depth *
    2.5 *
    1000 +
  friendsHouse[1].gardenSizeInM2 * 300;

if (Peterhousecost > friendsHouse[0].housePrice) {
  console.log(`${friendsHouse[0].name} is paying too much`);
} else {
  console.log(
    `${friendsHouse[0].name} is paying ${Peterhousecost} which is reasonable`
  );
}

if (Juliahousecost > friendsHouse[1].housePrice) {
  console.log(
    `${friendsHouse[1].name} is paying ${Juliahousecost} which is too much`
  );
} else {
  console.log(
    `${friendsHouse[1].name} is paying ${Juliahousecost} which is reasonable`
  );
}

// Ez Namey (Startup name generator)

let firstWords = ["Easy", "Awesome", "Corporate", "fun", "gun", "run"];
let secondWords = ["ping", "pong", "Ding", "Dong", "stick", "apple", "banana"];
const randomNumberone = Math.floor(Math.random() * 6);
const randomNumbertwo = Math.floor(Math.random() * 7);
let startupName = firstWords[randomNumberone] + secondWords[randomNumbertwo];

console.log(
  `"The startup: "${startupName}" contains ${startupName.length} characters"`
);
