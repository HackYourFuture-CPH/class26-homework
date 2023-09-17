const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Dragon Ball Z",
    days: 5,
    hours: 6,
    minutes: 6,
  },
  {
    title: "Futurama",
    days: 2,
    hours: 1,
    minutes: 7,
  },
  {
    title: "The Simpsons",
    days: 11,
    hours: 11,
    minutes: 44,
  },
  {
    title: "Los Simuladores",
    days: 1,
    hours: 0,
    minutes: 0,
  },
];

const lifeSpanInYears = 80;
const minutesInYear = 365 * 24 * 60;

function logOutSeriesText() {
  let totalMinutes = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    const series = seriesDurations[i];
    const seriesMinutes =
      series.days * 24 * 60 + series.hours * 60 + series.minutes;
    totalMinutes = totalMinutes + seriesMinutes;
  }
  for (let i = 0; i < seriesDurations.length; i++) {
    const series = seriesDurations[i];
    const seriesMinutes =
      series.days * 24 * 60 + series.hours * 60 + series.minutes;
    const percentage =
      (seriesMinutes / (lifeSpanInYears * minutesInYear)) * 100;
    console.log(`${series.title} took ${percentage.toFixed(4)}% of my life`);
  }

  const totalPercentage =
    (totalMinutes / (lifeSpanInYears * minutesInYear)) * 100;
  console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
}

logOutSeriesText();
