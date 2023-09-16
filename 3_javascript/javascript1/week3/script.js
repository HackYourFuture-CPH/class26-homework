
//Item array removal

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
  
  const indexToRemove = names.indexOf(nameToRemove);

  if (indexToRemove !== -1) {
    names.splice(indexToRemove, 1)
  }
  
  console.log(names); 


//When will we be there??

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };

  function calculateTime (travelInformation){
    const { speed, destinationDistance } = travelInformation;
    
    const totalTimeInHours = destinationDistance / speed;

    const hours = Math.floor(totalTimeInHours);
    const minutes = Math.round((totalTimeInHours - hours) * 60);

    const formattedTime = `${hours} hours and ${minutes} minutes`;

    return formattedTime;

  }
  
  const travelTime = calculateTime(travelInformation);
  console.log(travelTime); 

  //Series duration of my life

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
  
  function calculateMinutes(seriesDurations) {
    let totalminutes = 0;

    for ( const series of seriesDurations){
      const {days, hours, minutes} = series;
      totalminutes = days * 24 * 60 + hours * 60 + minutes; 
    }
    return totalminutes;
  }

    function calculatePercentageOfLife(averageLife , totalminutes){
      const minutesInYear = 365 * 24 * 60;
      const percentage = (totalminutes / (averageLife * totalminutes) * 100 );
      return percentage.toFixed(3);
    }

    function logOutSeriesText (){
      const minutesWatchedSeries = calculateMinutes(seriesDurations);
      const averageLife = 80;

      let seriesOutput = "";

      for (const series of seriesDurations){
        const {title, days, hours, minutes} = series;
        const seriesMinutes = days * 24 * 60 + hours * 60 + minutes; 
        const percentageOfLife = calculatePercentageOfLife(seriesMinutes, averageLife)
        seriesOutput += `${title} took ${percentageOfLife} in my life\n`

      }

      const totalPercentage = calculatePercentageOfLife(minutesWatchedSeries, averageLife);

      console.log(seriesOutput);
      console.log(`Games of Throne took ${totalPercentage}% of my life`)

    }
  
  logOutSeriesText();

//NOnoN0nOYes (Note taking app)

//Step 1

const notes = [];

function saveNote(content, id) {
 const note = { content , id}
  notes.push(note);

}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); 

//Step 2

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

//Step 3

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