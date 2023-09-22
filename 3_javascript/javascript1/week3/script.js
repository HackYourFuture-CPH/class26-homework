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
    const minutes = Math.round((totalTravelTime - hours) * 60)
    return `${hours} ours and ${minutes} minutes`
}


const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes







// Series duration of my life

const seriesDurations = [
    {
        title: "Game of thrones",
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
];

seriesDurations.push({
    title: "Breaking Bad",
    days: 2,
    hours: 14,
    minutes: 0,
});

function calculatePercentageForSeries(series) {
    const daysInMinutes = series.days * 24 * 60;
    const hoursInMinutes = series.hours * 60;
    const totalMinutes = daysInMinutes + hoursInMinutes + series.minutes;
    const totalYears = totalMinutes / (60 * 24 * 365);
    return (totalYears / 80) * 100;
}

function logOutSeriesText() {
    let totalPercentage = 0;

    for (let i = 0; i < seriesDurations.length; i++) {
        const series = seriesDurations[i];
        const percentageOfLife = calculatePercentageForSeries(series);

        console.log(`${series.title} took ${percentageOfLife.toFixed(3)}% of my life`);

        totalPercentage += percentageOfLife;
    }

    console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
}

logOutSeriesText();





// NOnoN0nOYes (Note taking app)

// ---> Save a note
const notes = [];

function saveNote(content, id) {
    notes.push({ content: content, id: id });
}

// --> Get a note
function getNote(id) {
    const note = notes.find((note) => note.id === id);
    if (!note) {
        console.error(`Note with ID ${id} not found.`);
    }
    return note;
}

// --> Log out notes
function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`);
    }
}

// --> Unique feature --> Deleting notes by ID
function deleteNote(id) {
    const index = notes.findIndex((note) => note.id === id);
    if (index === -1) {
        console.error(`Note with ID ${id} not found.`);
        return;
    }
    notes.splice(index, 1);
}

// Examples of using:
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
logOutNotesFormatted();

const firstNote = getNote(1);
console.log(firstNote);

deleteNote(1);
console.log(notes);





// CactusIO-interactive (Smart phone usage app) optional

// --> Adding an activity
const activities = []

function addActivity(date, activity, duration) {
    let newActivity = {
        date: date,
        activity: activity,
        duration: duration
    };
    activities.push(newActivity);
}

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Instagram", 20);
addActivity("23/7-18", "Tik-Tok", 28);
console.log(activities);

// --> Usage limit
let usageLimit = 0;

function setLimit(limit) {
    usageLimit = limit;
}

setLimit(60);

// --> Show my status
function showStatus() {
    if (activities.length === 0) {
        return "Add some activities before calling showStatus";
    } else {
        let totalDuration = 0;
        for (let i = 0; i < activities.length; i++) {
            totalDuration += activities[i].duration;
        }
        if (totalDuration > usageLimit) {
            return "You have reached your limit, no more smartphoning for you!";
        } else {
            return "You have added " + activities.length + " activities. They amount to " + totalDuration + " min. of usage";
        }
    }
}

console.log(showStatus());

// --> Extra feature --> Which activity takes the most time?
function mostTimeSpent() {
    if (activities.length === 0) {
        return "No activities recorded";
    } else {
        let maxDuration = activities[0].duration;
        let maxActivity = activities[0].activity;
        for (let i = 1; i < activities.length; i++) {
            if (activities[i].duration > maxDuration) {
                maxDuration = activities[i].duration;
                maxActivity = activities[i].activity;
            }
        }
        return "The activity you spent the most time on was " + maxActivity + " with " + maxDuration + " min.";
    }
}
console.log(mostTimeSpent());