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

const indexOfnameToRemove = names.indexOf(nameToRemove);
names.splice(indexOfnameToRemove, 1);

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

/**When will we be there?? */

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function travelTimecalculation(travelInformation) {
  const { speed, destinationDistance } = travelInformation;

  // time calculation
  const timeInhours = destinationDistance / speed;

  const hours = Math.floor(timeInhours);
  const minutes = Math.round((timeInhours - hours) * 60);

  const timeFormatt = `${hours} hours and ${minutes} minutes`;

  return timeFormatt;
}

const travelTime = travelTimecalculation(travelInformation);

console.log(travelTime);

/**  Smart-ease - Back to the basics!**/

const notes = [];

function saveNote(content, id) {
  const note = { content, id };
  notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Pick up kids", 3);

function logOutNotesFormatted() {
  for (const note of notes) {
    console.log(
      `The note with id: ${note.id}, has the following note text: "${note.content}"`
    );
  }
}

logOutNotesFormatted();

function deleteNote(id) {
  const i = notes.findIndex((note) => note.id === id);

  if (i !== 1) {
    notes.splice(i, 1);
    console.log(`Deleted note with id: ${id}`);
  } else {
    console.log(`Note with id ${id} not found.`);
  }
}

deleteNote(1);

logOutNotesFormatted();
