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

const filteredNames = names.filter((name) => name !== nameToRemove);

console.log(filteredNames);

// When will we be there??

function calculateTravelTime(travelInformation) {
  const { speed, destinationDistance } = travelInformation;

  const totalHours = destinationDistance / speed;

  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);

  const formattedTime = `${hours} hours and ${minutes} minutes`;

  return formattedTime;
}

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime);

// Series duration of my life

const seriesDurations = [
  {
    title: "Succession",
    days: 1,
    hours: 18,
    minutes: 15,
  },
  {
    title: "Breaking Bad",
    days: 2,
    hours: 13,
    minutes: 0,
  },
  {
    title: "The Office",
    days: 4,
    hours: 1,
    minutes: 30,
  },
];

function calculatePercentageOfLifespan(seriesDurations) {
  const averageLifespanYears = 80;

  const totalMinutes = seriesDurations.reduce((total, series) => {
    const { days, hours, minutes } = series;
    return total + days * 24 * 60 + hours * 60 + minutes;
  }, 0);

  const totalYears = totalMinutes / (365 * 24 * 60);

  const percentageOfLifespan = (totalYears / averageLifespanYears) * 100;

  return percentageOfLifespan.toFixed(3);
}

function logOutSeriesText(seriesDurations) {
  const percentage = calculatePercentageOfLifespan(seriesDurations);

  seriesDurations.forEach((series) => {
    const { title, days, hours, minutes } = series;
    const seriesMinutes = days * 24 * 60 + hours * 60 + minutes;
    const seriesPercentage = (seriesMinutes / (365 * 24 * 60 * 80)) * 100;

    console.log(`${title} took ${seriesPercentage.toFixed(3)}% of my life`);
  });

  console.log(`In total that is ${percentage}% of my life`);
}

logOutSeriesText(seriesDurations);

// NOnoN0nOYes (Note taking app)

// save a note

const notes = [];

function saveNote(content, id) {
  const note = { content, id };
  notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

// get a note

function getNote(id) {
  if (typeof id !== "number" || isNaN(id)) {
    console.log("Error: Please provide a valid numeric id.");
    return;
  }

  for (const note of notes) {
    if (note.id === id) {
      return note;
    }
  }

  console.log(`Error: No note found with id ${id}`);
  return;
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

const firstNote = getNote(1);
console.log(firstNote);

// log out notes

function logOutNotesFormatted() {
  for (const note of notes) {
    console.log(
      `The note with id: ${note.id}, has the following note text: "${note.content}"`
    );
  }
}

logOutNotesFormatted();

function logOutNotesByCategory(category) {
  const filteredNotes = notes.filter((note) => note.category === category);

  if (filteredNotes.length === 0) {
    console.log(`No notes found in the "${category}" category.`);
  } else {
    console.log(`Notes in the "${category}" category:`);
    for (const note of filteredNotes) {
      console.log(`- ${note.content} (ID: ${note.id})`);
    }
  }
}

saveNote("Buy groceries", 1, "Shopping");
saveNote("Call John", 2, "Personal");
saveNote("Work on project", 3, "Work");

logOutNotesByCategory("Personal");
