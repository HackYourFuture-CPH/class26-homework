// Remove the item in names that is equal to nameToRemove
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
  
const remainingNames = names.filter(name => name !==nameToRemove);  
  console.log(remainingNames); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']


//   When will we be there??


function calculateTravelDuration (travelInformation) {
  const {speed, destinationDistance} = travelInformation;
  const totalHours = destinationDistance / speed;
  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);

  let calculatedTime = `${hours} hours`;

  if (minute > 0) {
    calculatedTime += ` and ${minute} minutes`;
  }

  return calculatedTime;
}

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = calculateTravelDuration(travelInformation);
console.log(travelTime); // Output: "8 hours and 38 minutes"

// Series duration of my life
const seriesDurations = [
  {
    title: "Star Wars",
    days: 0,
    hours: 20,
    minutes: 55,
  },
  {
    title: "Jack Ryan",
    days: 0,
    hours: 12,
    minutes: 0,
  },
  {
    title: "The Office",
    days: 3,
    hours: 2,
    minutes: 55,
  },
];

function logOutSeriesText() {
  let totalMinutesWatched = 0;
  const percentages = [];

  for (const series of seriesDurations) {
    const { days, hours, minutes } = series;
    const seriesDurationInMinutes = days * 24 * 60 + hours * 60 + minutes;
    totalMinutesWatched += seriesDurationInMinutes;
    
    const yearsWatched = totalMinutesWatched / (60 * 24 * 365); 
    const percentageOfLife = (yearsWatched / 80) * 100;
    
    percentages.push(percentageOfLife);

    console.log(
      `${series.title} took ${percentageOfLife.toFixed(3)}% of my life.`
    );
  }

  const totalPercentage = percentages.reduce((sum, percentage) => sum + percentage, 0);

  console.log(`In total, that is ${(totalPercentage).toFixed(2)} percent of my life.`);
}

logOutSeriesText();

// Note taking app
const notes = [];

function saveNote(content, id) {
  const note = { content, id };
  notes.push(note);}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// Get a note

function getNote (id) {
if (!id) {
  console.log (`A valid id consists of numbers only. Please enter again`);
} else {
const note = notes.find(note => note.id===id);
return note ? note.content: `Please check that you have correct id as there is no note with id ${id}`;
}
}

  const note1 = getNote(1);
  const note2 = getNote(2);
  const note3 = getNote(3);

console.log(note1); // Pick up groceries
console.log(note2); //Do laundry
console.log(note3); //Please check that you have correct id as there is no note with id 3

// Log out notes
function logOutNotesFormatted() {
for (const note of notes) {
  console.log(`The note with id: ${note.id}, has the following text: ${note.content}`);
}
}

logOutNotesFormatted(); // should log out the text below
// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
