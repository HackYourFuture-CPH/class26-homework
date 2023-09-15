// Remove the item in names that is equal to nameToRemove
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";
  
let remainingNames = names.filter(name => name !==nameToRemove);  
  console.log(remainingNames); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']


//   When will we be there??
// Write a function where you speficy your speed in km/h and how far you have to go in km. 
// The function has to return the time it will take to arrive at your destination. 
// The time should be formatted like this: 
// 3 hours and 34 minutes.

function totalTravelTime (travelInformation) {
  const {speed, destinationDistance} = travelInformation;
  const totalHours = destinationDistance / speed;
  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);

  let calculatedTime = `${hours} hours`;

  if (minutes > 0) {
    calculatedTime += ` and ${minutes} minutes`;
  }

  return calculatedTime;
}

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = totalTravelTime(travelInformation);
console.log(travelTime); // Output: "8 hours and 38 minutes"
