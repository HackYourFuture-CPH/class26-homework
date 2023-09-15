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

// Series duration of my life
const seriesDurations = [
  {
    title: "Star Wars",
    days: 0,
    hours: 20,
    minutes: 55,
  },
  {
    title: "Jack Ryan",
    days: 0,
    hours: 12,
    minutes: 0,
  },
  {
    title: "The Office",
    days: 3,
    hours: 2,
    minutes: 55,
  },
];

function logOutSeriesText() {
  let totalMinutesWatched = 0;
  const percentages = [];

  for (const series of seriesDurations) {
    const { days, hours, minutes } = series;
    const seriesDurationInMinutes = days * 24 * 60 + hours * 60 + minutes;
    totalMinutesWatched += seriesDurationInMinutes;
    
    const yearsWatched = totalMinutesWatched / (60 * 24 * 365); 
    const percentageOfLife = (yearsWatched / 80) * 100;
    
    percentages.push(percentageOfLife);

    console.log(
      `${series.title} took ${percentageOfLife.toFixed(3)}% of my life.`
    );
  }

  const totalPercentage = percentages.reduce((sum, percentage) => sum + percentage, 0);

  console.log(`In total, that is ${(totalPercentage).toFixed(2)} percent of my life.`);
}

logOutSeriesText();
