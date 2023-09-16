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
      title: "friends",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "the wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
  ];
  const total80YearsInMin = 80 * 365 * 24 * 60;

  function logOutSeriesText (){
    let totalPersentageOfWatching = 0
    for (let serie of seriesDurations ){
        let {days,hours,minutes} = serie ;
        let totalWatchDurationInMinutes = (days * 24 * 60) + (hours * 60) + minutes ;
        let persentage = totalWatchDurationInMinutes * 100 / total80YearsInMin ;
        totalPersentageOfWatching += persentage ;
        console.log (`${serie.title} took ${persentage.toFixed(3)}% of my life`)
    }   
    console.log (`In total that is ${totalPersentageOfWatching.toFixed(2)}% of my life`)
}
logOutSeriesText();
  