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

function logOutSeriesText() {
    let totalPercentage = 0;

    for (let i = 0; i < seriesDurations.length; i++) {
        const series = seriesDurations[i];
        const daysInMinutes = series.days * 24 * 60;
        const hoursInMinutes = series.hours * 60;
        const totalMinutes = daysInMinutes + hoursInMinutes + series.minutes;
        const totalYears = totalMinutes / (60 * 24 * 365);
        const percentageOfLife = (totalYears / 80) * 100;

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

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// --> Get a note
function getNote(id) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            return notes[i];
        }
    }
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}


// --> Log out notes
function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`);
    }
}

logOutNotesFormatted();


// --> Unique feature --> Deleting notes by ID
function deleteNote(id) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            notes.splice(i, 1);
            break;
        }
    }
}

deleteNote(1);
console.log(notes); // [{content: 'Do laundry', id: 2}]




