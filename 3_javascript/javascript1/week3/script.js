//Item array removal

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
 
  
  // Write some code here
  
  const nameToRemove = names.splice(1,1);
  // Code done
  
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']


//When will we be there??
function calculateTravelTime(travelInformation) {
    const { speed, destinationDistance } = travelInformation;
  
    // Calculate the total time in hours
    const totalHours = destinationDistance / speed;
  
    // Convert totalHours to separate hours and minutes
    const hours = Math.floor(totalHours);
    const minutes = Math.round((totalHours - hours) * 60);
  
    // Format the result
    const formattedTime = `${hours} hours and ${minutes} minutes`;
  
    return formattedTime;
  }
  
  const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  const travelTime = calculateTravelTime(travelInformation);
  console.log(travelTime); // Output: 8 hours and 38 minutes
  
  //Series duration of my life


  const seriesDurations = [
    {
      title: "Game of Thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
    // Add your favorite series here
    {
      title: "Dark",
      days: 1,
      hours: 10,
      minutes: 0,
    },
  ];
  
  function calculateSeriesPercentage(seriesDurations) {
    const averageLifespan = 80 * 365 * 24 * 60; // 80 years converted to minutes
    let totalSeriesTime = 0;
  
    for (const series of seriesDurations) {
      const seriesTimeMinutes =
        series.days * 24 * 60 + series.hours * 60 + series.minutes;
      totalSeriesTime += seriesTimeMinutes;
    }
  
    const percentage = (totalSeriesTime / averageLifespan) * 100;
  
    return percentage.toFixed(3); // Format percentage to three decimal places
  }
  
  function logOutSeriesText() {
    for (const series of seriesDurations) {
      const seriesPercentage = (
        (series.days * 24 * 60 + series.hours * 60 + series.minutes) /
        (80 * 365 * 24 * 60)
      ).toFixed(3);
      console.log(`${series.title} took ${seriesPercentage}% of my life`);
    }
  
    const totalPercentage = calculateSeriesPercentage(seriesDurations);
    console.log(`\nIn total, that is ${totalPercentage}% of my life`);
  }
  
  logOutSeriesText();
  
//Save a note

const notes = [];

function saveNote(content, id) {
  if (typeof id !== 'number') {
    console.error('Error: ID must be a number.');
    return;
  }

  const note = { content, id };
  notes.push(note);
}

function getNote(id) {
  if (typeof id !== 'number') {
    console.error('Error: ID must be a number.');
    return;
  }

  for (const note of notes) {
    if (note.id === id) {
      return note;
    }
  }

  console.error(`Error: No note found with ID ${id}`);
}

function logOutNotesFormatted() {
  for (const note of notes) {
    console.log(`The note with id: ${note.id}, has the following note text: "${note.content}"`);
  }
}

// Unique Feature: Add the ability to delete a note by its ID.
function deleteNote(id) {
  if (typeof id !== 'number') {
    console.error('Error: ID must be a number.');
    return;
  }

  const indexToDelete = notes.findIndex((note) => note.id === id);

  if (indexToDelete !== -1) {
    notes.splice(indexToDelete, 1);
    console.log(`Note with ID ${id} has been deleted.`);
  } else {
    console.error(`Error: No note found with ID ${id}`);
  }
}

// Example usage:
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

const firstNote = getNote(1);
console.log(firstNote);

logOutNotesFormatted();

deleteNote(2);
console.log(notes);


//CactusIO-interactive (Smart phone usage app) 
// Create a variable to store activities
const activities = [];

// Function to add an activity
function addActivity(date, activity, duration) {
  // Automatically figure out the date if not provided
  if (!date) {
    const now = new Date();
    date = `${now.getDate()}/${now.getMonth() + 1}-${now.getFullYear()}`;
  }

  // Create a new activity object
  const newActivity = { date, activity, duration };

  // Push the activity object into the activities array
  activities.push(newActivity);
}

// Function to show status
function showStatus(activities, limit) {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus.");
    return;
  }

  const totalDuration = activities.reduce((acc, activity) => acc + activity.duration, 0);
  const activityCount = activities.length;

  let statusMessage = `You have added ${activityCount} activities. They amount to ${totalDuration} min. of usage.`;

  if (limit && totalDuration > limit) {
    statusMessage += " You have reached your limit, no more smartphoning for you!";
  }

  console.log(statusMessage);
}

// Function to find the most time-consuming activity
function findMostTimeConsumingActivity(activities) {
  if (activities.length === 0) {
    console.log("No activities to analyze.");
    return;
  }

  const mostTimeConsumingActivity = activities.reduce((max, activity) =>
    activity.duration > max.duration ? activity : max
  );

  console.log(`The most time-consuming activity is "${mostTimeConsumingActivity.activity}" with ${mostTimeConsumingActivity.duration} min.`);
}

// Example usage:
addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Facebook", 20);
addActivity("24/7-18", "News", 28);

showStatus(activities, 60);
findMostTimeConsumingActivity(activities);
