const travelInformation = {
  speed: 100,
  destinationDistance: 1401,
};

function timeCalculator(travelInfo) {
  const hours = Math.floor(travelInfo.destinationDistance / travelInfo.speed);
  const minutes = Math.floor(
    (travelInfo.destinationDistance / travelInfo.speed - hours) * 60
  );

  return `Your travel time will be ${hours} hours and ${minutes} minutes`;
}

const travelTime = timeCalculator(travelInformation);

console.log(travelTime);
