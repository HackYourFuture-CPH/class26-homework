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
  
  console.log(filteredNames); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
  
  
  //When will we be there??
  function calculateTravelTime(travelInformation) {
    const { speed, destinationDistance } = travelInformation;
  
    
    const totalTimeHours = destinationDistance / speed;
  
    
    const hours = Math.floor(totalTimeHours);
    const minutes = Math.round((totalTimeHours - hours) * 60);
  
    
    const timeString = `${hours} hours and ${minutes} minutes`;
  
    return timeString;
  }
  
  const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  const travelTime = calculateTravelTime(travelInformation);
  console.log(travelTime); // Output: 8 hours and 38 minutes
  