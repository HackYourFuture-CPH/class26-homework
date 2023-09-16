//////Item array removal//////

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

names.splice(1,1);

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']



//////When will we be there??//////

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




/////Series duration of my life/////


const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 2,
      minutes: 0,
    },
    {
      title: "Friends",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The office",
      days: 2,
      hours: 4,
      minutes: 0,
    },
    {
    title: "glory",
    days: 1,
    hours: 6,
    minutes: 10,
    },
  ];
  
  function logOutSeriesText() {
    let totalMinutesWatched = 0;
  
    for (const series of seriesDurations) {
      const { days, hours, minutes } = series;
      const seriesDurationInMinutes = days * 24 * 60 + hours * 60 + minutes;
      totalMinutesWatched += seriesDurationInMinutes;
  
      const yearsWatched = totalMinutesWatched / (60 * 24 * 365); 
      const percentageOfLife = (yearsWatched / 80) * 100; 
  
      console.log(
        `${series.title} spend ${percentageOfLife.toFixed(2)}% of my life.`
      );
    }
  
    console.log(`In total,that is ${totalMinutesWatched} minutes of my life.`);
  }
  
  logOutSeriesText();




  // Save a note

  const notes = [];

  function saveNote(content, id) {
   const note = { content , id}
    notes.push(note);
  
  }
  
  saveNote("Pick up groceries", 1);
  saveNote("Do laundry", 2);
  
  console.log(notes); 
  
  //get a note
  
  function getNote(id) {
    const foundNotes = notes.find((note)=>note.id === id)
    
    if(foundNotes){
      return foundNotes
    } else {
      return null;
    }
  }
  
  const firstNote = getNote(1);
  console.log(firstNote); // {content: 'Pick up groceries', id: 1}
  
  //log out notes
  
  function logOutNotesFormatted() {
    if (notes.length === 0){
      console.log("Not found")
    } else {
      console.log( "All notes are here")
      notes.forEach((notes) => {
        console.log(` ${notes.id}: ${notes.content}`)
      })
    }
  }
  
  logOutNotesFormatted(); // should log out the text below
  
  // The note with id: 1, has the following note text: Pick up groceries
  // The note with id: 2, has the following note text: Do laundry
