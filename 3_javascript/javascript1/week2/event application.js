function getEventWeekday(daysFromToday) {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const eventDayIndex = (currentDay + daysFromToday) % 7;
    const eventWeekday = weekdays[eventDayIndex];
    return eventWeekday;
  }
  console.log(getEventWeekday(9)); 
 