const freeCampCodeUser = "@sevda-89";
console.log(freeCampCodeUser);

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

for (let i = 0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    names.splice(i, 1);
    i--;
  }
}

console.log(names);
// ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

//When will we be there??

function calculateTravelTime(travelInformation) {
  const speed = travelInformation.speed; // Speed in km/h
  const distance = travelInformation.destinationDistance; // Distance in km

  // Calculate the time in hours and minutes
  const hours = Math.floor(distance / speed);
  const minutes = Math.floor((distance % speed) / (speed / 60));

  // Format the time
  const formattedTime = `${hours} hours and ${minutes} minutes`;

  return formattedTime;
}

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // Outputs: "8 hours and 38 minutes"
