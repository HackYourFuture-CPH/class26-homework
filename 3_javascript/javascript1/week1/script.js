//Age-ify (A future age calculator)

const yearOfBirth = 1999;
const yearFuture = 2027;

const age = yearFuture - yearOfBirth;
console.log(`you will be in ${age} years old in ${yearFuture}`);



//Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
let humanYears = dogYearFuture - dogYearOfBirth; 
let dogYears = humanYears*7; 
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears === true) {

console.log(`Your dog will be ${dogYears} dog years in ${dogYearFuture}`);
}
else {
    console.log(`Your dog will be ${humanYears} human years old in ${dogYearFuture}`);
}





//Housey pricey (A house price estimator)

const houseDetails = [
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
      console.log(`${house.name} is getting a life changing deal`);
  }
  else
  {
      console.log(`${house.name} is being ripped off by the seller`);
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





//Ez Namey (Startup name generator) Optional 
     
     const firstWords = [
      "Easy",
      "Awesome",
      "Corporate",
      "Cat",
      "Bunny",
      "Hamster",
      "Bad",
      "Good",
      "Luplup",
      "Grapes",
    ];
    const secondWords = [
      "Lily",
      "Melly",
      "Hufhuf",
      "Cucuk",
      "Sucuk",
      "Molly",
      "Sweety",
      "Hayal",
      "Tecno",
      "Rock",
    ];
    const randomNumberone = Math.floor(Math.random() * firstWords.length);
    const randomNumbertwo = Math.floor(Math.random() * secondWords.length);
    const startupName = firstWords[randomNumberone] + secondWords[randomNumbertwo];

    console.log(
      `The startup: "${startupName}" contains ${startupName.length} characters`
    );
