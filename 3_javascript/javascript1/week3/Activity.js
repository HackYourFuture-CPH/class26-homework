// Adding an activity
const activities = [];
let usageLimit = 120; // Set the limit to 120 minutes

function addActivity(date, activity, duration) {
  activities.push({ date: date, activity: activity, duration: duration });
}
const today = new Date();
// Example activities
addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Reading", 45);
addActivity("24/7-18", "Gaming", 60);
console.log(activities);


// Show my status
function showStatus() {
  if (activities.length === 0) {                  // Usage limit
    return "Add some activities before calling showStatus";
  }

  let totalDuration = 0;
  for (let i = 0; i < activities.length; i++) {
    totalDuration += activities[i].duration;
  }

  if (totalDuration > usageLimit) {
    return "You have reached your limit, no more smartphoning for you!";
  }

  return `You have added ${activities.length} activities. They amount to ${totalDuration} min. of usage`;
}

const status = showStatus();
console.log(status);



// Extra feature
function viewActivitiesForDate(date) {
    const filteredActivities = activities.filter((activity) => activity.date === date);
  
    if (filteredActivities.length === 0) {
      return `No activities recorded for ${date}.`;
    }
  
    let activityList = `Activities for ${date}:\n`;
  
    for (let i = 0; i < filteredActivities.length; i++) {
      activityList += `${i + 1}. ${filteredActivities[i].activity} (${filteredActivities[i].duration} min)\n`;
    }
  
    return activityList;
  }
 
  console.log(viewActivitiesForDate(today.toLocaleDateString("en-US"))); // View activities for today
  console.log(viewActivitiesForDate("23/7-18")); // View activities for a specific date
  