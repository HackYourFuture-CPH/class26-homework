const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "Kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

const newNames = names.filter(name => name !== nameToRemove);

console.log(newNames); 


//travel time

function calculateTravelTime(travelInformation) {
  const { speed, destinationDistance } = travelInformation;

  const totalHours = destinationDistance / speed;

  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);

  const formattedTime = `${hours} hours and ${minutes} minutes`;
  return formattedTime;
}

const travelInformation = {
  speed: 80,
  destinationDistance: 379,
};

const travelTime = calculateTravelTime(travelInformation);

console.log(travelTime); 

//watchtime
const seriesDurations = [
  {
    title: "Game of Thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Dirk Gently",
    days: 0,
    hours: 12,
    minutes: 36,
  },
  {
    title: "Two broke girls",
    days: 2,
    hours: 9,
    minutes: 5,
  },
  {
    title: "Pushing Daisies",
    days: 0,
    hours: 15,
    minutes: 24,
  },
];

function calculateSeriesPercentage(seriesDurations) {
  let totalTimeMinutes = 0;
  for (const series of seriesDurations) {
    const { days, hours, minutes } = series;
    totalTimeMinutes += days * 24 * 60 + hours * 60 + minutes;
  }

  const averageLifespanMinutes = 80 * 365 * 24 * 60; 
  const percentage = (totalTimeMinutes / averageLifespanMinutes) * 100;

  return percentage.toFixed(2);
}

function logOutSeriesText() {
  for (const series of seriesDurations) {
    const { title, days, hours, minutes } = series;
    const durationInMinutes = days * 24 * 60 + hours * 60 + minutes;
    const percentage = (durationInMinutes / (80 * 365 * 24 * 60)) * 100;
    console.log(`${title} took ${percentage.toFixed(3)}% of my life`);
  }

  const totalPercentage = calculateSeriesPercentage(seriesDurations);
  console.log(`\nIn total that is ${totalPercentage}% of my life`);
}

logOutSeriesText();


//
const activities = [];

function addActivity(date, activity, duration) {
  if (!date) {
    const today = new Date();
    date = `${today.getDate()}/${today.getMonth() + 1}-${today.getFullYear()}`;
  }

  activities.push({ date, activity, duration });
}

function calculateTotalDurationForDate(date) {
  let totalDuration = 0;
  for (const activity of activities) {
    if (activity.date === date) {
      totalDuration += activity.duration;
    }
  }
  return totalDuration;
}

function showStatus() {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }

  const totalActivities = activities.length;
  const totalDuration = activities.reduce((acc, activity) => acc + activity.duration, 0);

  console.log(`You have added ${totalActivities} activities. They amount to ${totalDuration} min. of usage`);

  const usageLimit = 120; 
  if (totalDuration > usageLimit) {
    console.log("You have reached your limit, no more smartphoning for you!");
  }
}

addActivity("23/7-23", "Sew", 55);
addActivity("23/7-23", "Crochet", 20);
addActivity("24/7-23", "News", 28);

showStatus();

//function to find the activity with the most time spent
function findMostTimeSpentActivity() {
  if (activities.length === 0) {
    console.log("No activities to analyze.");
    return;
  }

  let mostTimeSpentActivity = activities[0];
  for (const activity of activities) {
    if (activity.duration > mostTimeSpentActivity.duration) {
      mostTimeSpentActivity = activity;
    }
  }

  console.log(`You spent the most time on "${mostTimeSpentActivity.activity}" with ${mostTimeSpentActivity.duration} min.`);
}

findMostTimeSpentActivity();
