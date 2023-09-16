//Java-scipt Week3 Homework//

//(1) - Item array removal// 

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
  const filteredNames = names.filter(name => name !== nameToRemove);
  
  console.log(filteredNames); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
  

  //When will we be there??//

  function calculateTravelTime(travelInformation) {
    const { speed, destinationDistance } = travelInformation;
    const totalTimeInHours = destinationDistance / speed;
    const hours = Math.floor(totalTimeInHours);
    const minutes = Math.round((totalTimeInHours - hours) * 60);
  
    const formattedTime = `${hours} hours and ${minutes} minutes`;
  
    return formattedTime;
  }
  
  const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  const travelTime = calculateTravelTime(travelInformation);
  console.log(travelTime);


  //(2) - Series duration of my life// 

  const seriesDurations = [
    {
      title: "Money Heist",
      days: 1,
      hours: 23,
      minutes: 50,
    },
    {
      title: "El Chapo",
      days: 1,
      hours: 5,
      minutes: 20,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
  ];
  
  function logOutSeriesText() {
    const totalMinutesInLifespan = 80 * 365 * 24 * 60; // 80 years in minutes
    let totalMinutesWatchingSeries = 0;
  
    for (const series of seriesDurations) {
      const seriesMinutes = series.days * 24 * 60 + series.hours * 60 + series.minutes;
      totalMinutesWatchingSeries += seriesMinutes;
      const percentageOfLife = (seriesMinutes / totalMinutesInLifespan) * 100;
      console.log(`${series.title} took ${percentageOfLife.toFixed(3)}% of my life`);
    }
  
    const totalPercentage = (totalMinutesWatchingSeries / totalMinutesInLifespan) * 100;
    console.log(`\nIn total that is ${totalPercentage.toFixed(3)}% of my life`);
  }
  
  logOutSeriesText();
  



  //(3) - NOnoN0nOYes (Note taking app)// 3

  const notes = [];

function saveNote(content, id) {
  
  if (typeof id !== 'number') {
    console.log("Error: Invalid ID. Please provide a number.");
    return;
  }
  
  
  notes.push({ content, id });
}

function getNote(id) {
  
  if (typeof id !== 'number' || isNaN(id)) {
    console.log("Error: Invalid ID. Please provide a number.");
    return;
  }

  
  for (const note of notes) {
    if (note.id === id) {
      return note;
    }
  }

  
  console.log("Error: Note not found.");
}

function logOutNotesFormatted() {
  for (const note of notes) {
    console.log(`The note with id: ${note.id}, has the following note text: ${note.content}`);
  }
}

/
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

logOutNotesFormatted();
// should log out:
// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry



  //(4) - CactusIO-interactive (Smart phone usage app) optional// 

  
const activities = [];
let usageLimit = 0;

// Function to add an activity.
function addActivity(activity, duration) {
  // Get the current date in the 'dd/mm-yy' format.
  const currentDate = new Date().toLocaleDateString('en-GB').replace(/\//g, '-');
  
  // Push the activity object to the activities array.
  activities.push({
    date: currentDate,
    activity,
    duration,
  });
}

// Function to show the status.
function showStatus() {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus.");
    return;
  }

  const today = new Date().toLocaleDateString('en-GB').replace(/\//g, '-');
  const todayActivities = activities.filter(activity => activity.date === today);
  const totalDuration = todayActivities.reduce((sum, activity) => sum + activity.duration, 0);
  
  console.log(`You have added ${todayActivities.length} activities. They amount to ${totalDuration} min. of usage`);
  
 
  if (usageLimit > 0 && totalDuration > usageLimit) {
    console.log("You have reached your limit, no more smartphoning for you!");
  }
}

function setUsageLimit(limit) {
  usageLimit = limit;
}

function mostTimeSpentActivity() {
  if (activities.length === 0) {
    console.log("No activities added yet.");
    return;
  }
  
  const activityMap = new Map();
  
  activities.forEach(activity => {
    if (activityMap.has(activity.activity)) {
      activityMap.set(activity.activity, activityMap.get(activity.activity) + activity.duration);
    } else {
      activityMap.set(activity.activity, activity.duration);
    }
  });
  
  const mostTimeSpent = [...activityMap.entries()].reduce((a, b) => (a[1] > b[1] ? a : b));
  
  console.log(`You have spent the most time on ${mostTimeSpent[0]} with ${mostTimeSpent[1]} min in day.`);
}

addActivity("Youtube", 30);
addActivity("Facebook", 15);
addActivity("News", 10);
addActivity("Instagram", 25);

setUsageLimit(60); // Set the usage limit to 60 minutes

showStatus(); // Show the status
mostTimeSpentActivity(); // Find the activity with the most time spent






