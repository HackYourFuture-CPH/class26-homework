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
    {
      title: "Sen Anlat Karadiniz", 
      days: 6,  
      hours: 16,  
      minutes: 0, 
    },
  ];
  
  function logOutSeriesText() {
    const averageLifespan = 80 * 365 * 24 * 60; 
  
    let totalPercentage = 0;
  
    for (const series of seriesDurations) {
      const seriesDurationInMinutes =
        series.days * 24 * 60 + series.hours * 60 + series.minutes;
      const seriesPercentage = (seriesDurationInMinutes / averageLifespan) * 100;
  
      console.log(
        `${series.title} took ${seriesPercentage.toFixed(3)}% of my life`
      );
  
      totalPercentage += seriesPercentage;
    }
  
    console.log(`In total that is ${totalPercentage.toFixed(1)}% of my life`);
  }
  
  logOutSeriesText();
  