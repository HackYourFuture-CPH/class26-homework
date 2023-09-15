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
    title: "Money Heist",
    days: 1,
    hours: 23,
    minutes: 15,
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
        `${series.title} took ${percentageOfLife.toFixed(2)}% of my life.`
      );
    }
  
    console.log(`In total, that is ${totalMinutesWatched} minutes of my life.`);
  }
  
  logOutSeriesText();