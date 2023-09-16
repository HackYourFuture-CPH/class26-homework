// Item array removal
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

// Write some code here

const indexToRemove = names.indexOf(nameToRemove)
if (indexToRemove !== -1) {
    names.splice(indexToRemove, 1)
}

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']







// When will we be there??
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function calculateTravelTime(travelInformation) {
    const totalTravelTime = travelInformation.destinationDistance / travelInformation.speed;
    const hours = Math.floor(totalTravelTime);
    const minute = Math.round((totalTravelTime - hours) * 60)
    return `${hours} ours and ${minute} minutes`
}


const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes






