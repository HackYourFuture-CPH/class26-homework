//Age-ify (A future age calculator)

const yearOfBirth = "1997";
const yearFuture = "2057";
const age = yearFuture- yearOfBirth;
console.log(`you will be in ${age} years old in ${yearFuture}`);


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

function calculateHousePrice(volumeInMeters,gardenSizeInM2 ) {
  return volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
  }
  
  let peterHouse = {
      width : 8,
      depth : 10,
      height :10,
      garden : 100,
      price : 2500000
  };
  
  let juliaHouse = {
      width : 5,
      depth : 11,
      height : 8,
      garden : 70,
      price : 1000000
  };
  
  let peterHouseVolume = peterHouse.width * peterHouse.depth * peterHouse.height ;
  let juliaHouseVolume = juliaHouse.width * juliaHouse.depth * juliaHouse.height ;
  
  let peterExpectedPrice = calculateHousePrice(peterHouseVolume, peterHouse.garden);
  let juliaExpectedPrice = calculateHousePrice(juliaHouseVolume, juliaHouse.garden);
  
  if (peterHouse.price > peterExpectedPrice) {
   console.log("Peter is paying too low.");
  } else if (peterHouse.price < peterExpectedPrice){
      console.log("Peter is paying too high");
  } else {
      console.log("Peter is paying accurate and correct" )
  }
  
  if (juliaHouse.price > juliaExpectedPrice) {
      console.log("Julia is paying too low.");
     } else if (juliaHouse.price < juliaExpectedPrice){
         console.log("Julia is paying too high");
     } else {
         console.log("Julia is paying accurate and correct" )
     }


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