// days
const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// "setup of days"

const today = "";

const daysToAdd = 0;

// result
let eventDay = "";

function eventCalendar(today, daysToAdd) {
  for (let i = 0; i < weekDay.length; i++) {
    const day = weekDay[i];
    if (day === today) {
      eventDay = weekDay[(i + daysToAdd) % weekDay.length];
      console.log(
        `Today is ${today} and an event is on ${eventDay} in ${daysToAdd} days`
      );
      return;
    }
  }
}

eventCalendar("Sunday", 5);
