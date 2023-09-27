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

function calculateTravelTime({ speed, totalDistance }) {
  // Calculating the time in hours and minutes
  const hours = Math.floor(totalDistance / speed);
  // Calculating the remaining distance after accounting for whole hours
  const remainingDistance = totalDistance % speed;
  // Calculating the minutes based on the remaining distance and speed
  const minutes = Math.floor((remainingDistance / speed) * 60);

  // Formating the time
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

function logOutSeriesText() {
  let totalMinutes = 0;
  let totalPercentage = 0;

  for (let i = 0; i < seriesDurations.length; i++) {
    const element = seriesDurations[i];
    //const days = element.days;
    //const hours = element.hours;
    // const minutues = element.minutes;
    const { days, hours, minutes, title } = element;

    const seriesDurationInMinutes = days * 24 * 60 + hours * 60 + minutes;
    // totalMinutes = totalMinutes + seriesDurationInMinutes;
    totalMinutes += seriesDurationInMinutes;
    const yearsWatched = totalMinutes / (60 * 24 * 365);
    const percentage = (yearsWatched / 80) * 100;

    totalPercentage += percentage;

    console.log(`${title} took ${percentage} of my life`);
  }

  console.log("Total Percentage: ", totalPercentage);
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
  // Return null when note isn't found
  return null;
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
