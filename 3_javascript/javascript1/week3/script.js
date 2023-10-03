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
for (i=0; i < names.length; i++){
if (names[i] == "Ahmad"){
    names.splice(i,1);
}
}
  // Code done
  
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

  //When will we be there??
 
  const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  }

  function calculateTravelTime(travelInformation){
    let totaleTime = travelInformation.destinationDistance / travelInformation.speed 
    let totalHours = Math.floor(totaleTime);


    let minutes = (totaleTime - totalHours) * 60;

    let totalMinutes = Math.round(minutes);

    return `${totalHours} hours and ${totalMinutes} minutes`;
  }

  const travelTime = calculateTravelTime(travelInformation);
  console.log(travelTime);
  // code done
//Series duration of my life
const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Friends",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
  ];

  const total80YearsInMin = 80 * 365 * 24 * 60;

  function logOutSeriesText (){
    let totalPersentageOfWatching = 0;
    for (let serie of seriesDurations ){
        let {days,hours,minutes} = serie ;
        let totalWatchDurationInMinutes = (days * 24 * 60) + (hours * 60) + minutes ;
        let persentage = totalWatchDurationInMinutes * 100 / total80YearsInMin ;
        totalPersentageOfWatching += persentage ;

        console.log (`${serie.title} took ${persentage.toFixed(3)}% of my life`);
    }   
    console.log (`In total that is ${totalPersentageOfWatching.toFixed(2)}% of my life`);
}

logOutSeriesText();

//NOnoN0nOYes
const notes = [];

function saveNote(content, id) {
  // write some code here
  const note = { content, id };
  notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

//Get a note
function getNote(id) {
    
    if (id === undefined || isNaN(id)) {
        console.log("Error: Please enter a valid id");
        return;
    }

    for (const note of notes) {
        if (note.id === id) {
            return note
        }
    } 
    console.log(`Error: No note found with the id ${id}`);
    return
}
  
const undefinedNote = getNote();
const firstNote = getNote(1);
const notFoundNote = getNote(3);

console.log(undefinedNote);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}
console.log(notFoundNote);

//Log out notes
function logOutNotesFormatted() {
    for (const note of notes) {
      console.log(
        `The note with id: ${note.id}, has the following note text: "${note.content}"`
      );
    }
}
  
logOutNotesFormatted(); // should log out the text below
  
  // The note with id: 1, has the following note text: Pick up groceries
  // The note with id: 2, has the following note text: Do laundry

  //delete note 
  function deleteNote(id) {
    if (id === undefined || isNaN(id)) {
        console.log("Error: Please enter a valid id");
        return;
    }

    for (i=0; i < notes.length; i++){
        if (note[i].id == id){
            names.splice(i,1);
        }
    }
  }

