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
  const speed = travelInformation.speed;
  const distance = travelInformation.destinationDistance;

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
console.log(`I will arrive ${travelTime} later`);

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
];

function percentageOfLifeSpentWatchedSeries(seriesDurations) {
  const averageLifeInMinutes = 80 * 365 * 24 * 60;
  // Converting 80 years to minutes

  let totalMinutesSpent = 0;

  for (const series of seriesDurations) {
    const { days, hours, minutes } = series;
    const seriesDurationInMinutes = days * 24 * 60 + hours * 60 + minutes;
    totalMinutesSpent += seriesDurationInMinutes;
  }

  const percentageOfLifeSpent =
    (totalMinutesSpent / averageLifeInMinutes) * 100;

  return percentageOfLifeSpent;
}

function logOutSeriesText() {
  for (const series of seriesDurations) {
    const { title, days, hours, minutes } = series;
    const seriesDurationInMinutes = days * 24 * 60 + hours * 60 + minutes;
    const percentageOfLifeSpent =
      (seriesDurationInMinutes / (80 * 365 * 24 * 60)) * 100;

    console.log(`${title} took ${percentageOfLifeSpent}% of my life`);
  }

  const totalPercentage = percentageOfLifeSpentWatchedSeries(seriesDurations);
  console.log(`It is total of ${totalPercentage}% of my life`);
}

logOutSeriesText();

//Note taking app

const notes = [];

function saveNote(content, id) {
  if (typeof id === "number") {
    const note = { content: content, id: id };
    notes.push(note);
  } else {
    console.log("Error: Please provide a valid number as the (id) parameter.");
  }
}

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
  console.log(`Error: No note found with id ${id}.`);
}

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: (${notes[i].content})`
    );
  }
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

const firstNote = getNote(1);
console.log(firstNote);

logOutNotesFormatted();
