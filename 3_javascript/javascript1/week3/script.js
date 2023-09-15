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
