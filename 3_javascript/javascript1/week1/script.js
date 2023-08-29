
let yearOfBirth = 1982;
let yearFuture = 2022;
let age = yearFuture - yearOfBirth;
console.log(`you will be ${age} years old in ${yearFuture}`);

//Dog year of birth
let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let humanYears = dogYearFuture - dogYearOfBirth; 
let dogYear = humanYears*7; 
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
let dogAgeInDogYear = dogYear;

console.log(`Your dog will be ${dogYear} dog years in ${dogYearFuture}`);
}
else {
    console.log(`Your dog will be ${humanYears} human years old in ${dogYearFuture}`);
}

//House price generator for Your friend Peter is considering a house that is 8m wide, 
//10m deep and 10m high. The garden size is 100m2. The house costs 2.500.000. 
//Your friend Julia is considering a house that is 5m wide, 11m deep and 8m high. 
//The garden size is 70m2. This house costs 1.000.000.
//Formula is housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let houseDetails = [
    {
    name:"Peter",
    width:8,
    depth:10,
    height:10,
    gardenSizeInM2:100,
    houseCost:2500000,
    },
    {
    name:"Julia",
    width:5,
    depth:11,
    height:8,
    gardenSizeInM2:70,
    houseCost:1000000,
    }    
];

function calculateHousePrice(house) {
    return house.width*house.depth*house.height*2.5*1000 + house.gardenSizeInM2*300;
}
function dealOrNoDeal(house) {
    const housePrice = calculateHousePrice(house);
    if (housePrice>house.houseCost) {
        console.log(`${house.name} is being ripped off by the seller`);
    }
    else
    {
        console.log(`${house.name} is getting a life changing deal`);
    }
}
houseDetails.forEach(dealOrNoDeal);

//     const peterHousePrice = 
//     houseDetails[0].width*
//     houseDetails[0].depth*
//     houseDetails[0].height*
//     2.5*1000 + houseDetails[0].gardenSizeInM2*300;

//     const juliaHousePrice = 
//     houseDetails[1].width*
//     houseDetails[1].depth*
//     houseDetails[1].height*
//     2.5*1000 + houseDetails[1].gardenSizeInM2*300;
    
// if (peterHousePrice > houseDetails[0].houseCost) {
//     console.log(`${houseDetails[0].name} is paying too much for his house`
//     );
// }
// else 
// {
//     console.log(`${houseDetails[0].name} is getting a good deal for his money`
//     );
// }

// if (juliaHousePrice > houseDetails[1].houseCost) {
//     console.log(`${houseDetails[1].name} is paying too much for her house`
//     );
// }
// else 
// {
//     console.log(`${houseDetails[1].name} is getting a good deal for her money`
//     );
// }

// Ez Namey (Startup name generator) Optional
// At a meetup you overhear a conversation between two developers. It went something like this: "Man i wish picking a startup name was easier! You need to be creative, funny and interesting, its nearly impossible!" Another problem to solve, awesome!
// Lets help people who struggle finding a startup name by creating some code!
// Create two arrays called firstWords, secondWords. The arrays should have 10 elements containing strings of possible startup names. Some examples could be: "Easy", "Awesome", "Corporate".
// Create a variable called startupName that will contain the created startup name.
// Using a random index (you choose) of the arrays and concatenation of strings, create and log the new startup name and the number of characters in it. An example could be: "The startup: "Easy Corporation" contains 16 characters"
// Hint: you can use this code to generate a random number from 0-9, if you dont want to specify the indexes yourself.
// const randomNumber = Math.floor(Math.random() * 10);

let firstWords = [
    "Easy",
    "Awesom",
    "Corporate",
    "Bint",
    "Schizoid",
    "Scottish",
    "Old",
    "Woman",
    "Arabian",
    "Knights",


];
let lastWords = [
    "Bimbo",
    "Himbo",
    "Widow",
    "Tales",
    "Rider",
    "Dudes",
    "Awakening",
    "Laassi",
    "Gringa",
    "Dandy",
];
const startupName = firstWords[4] + " " + lastWords[0];
console.log(`The name I give you is ${startupName} which has a total of ${startupName.length} characters in it`);

