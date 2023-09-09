/** Smart-ease - Goes Global! **/

function getFullname(Gender, firstName, surName, useFormalName) {
  let fullName = "";

  if (Gender === "female") {
    if (useFormalName === true) {
      fullName = `Lady ${firstName} ${surName}`;
    } else {
      fullName = `${firstName} ${surName}`;
    }
  } else {
    if (useFormalName === true) {
      fullName = `Lord ${firstName} ${surName}`;
    } else {
      fullName = `${firstName} ${surName}`;
    }
  }

  return fullName;
}

const fullname3 = getFullname("female", "Banjamin", "Hughes", false);
const fullname4 = getFullname("female", "Banjamin", "Hughes", true);
const fullname1 = getFullname("male", "Banjamin", "Hughes", false);
const fullname2 = getFullname("male", "Banjamin", "Hughes", true);

/** Event application **/

function getEventWeekday(daysFromToday) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + daysFromToday);
  return days[futureDate.getDate()];
}

console.log(getEventWeekday(9));
console.log(getEventWeekday(2));

/** Weather wear */

function clothingChoice(temperature, humidity, windSpeed) {
  if (temperature >= 30) {
    if (humidity >= 60) {
      return "It's hot and humid. Wear light, breathable clothing and use sunscreen.";
    } else {
      return "It's hot. Wear light clothing and sunscreen.";
    }
  } else if (temperature >= 20 && temperature < 30) {
    if (humidity >= 70) {
      return "It's warm and humid. A t-shirt and shorts will be comfortable.";
    } else {
      return "It's warm. Wear a t-shirt and shorts.";
    }
  } else if (temperature >= 10 && temperature < 20) {
    if (windSpeed >= 15) {
      return "It's cooler and windy. A light jacket or sweater will help you stay warm.";
    } else {
      return "It's cooler. A light jacket or sweater will keep you comfortable.";
    }
  } else if (temperature >= 0 && temperature < 10) {
    if (windSpeed >= 25) {
      return "It's cold and windy. Wear a warm jacket, gloves, and jeans.";
    } else {
      return "It's cold. A warm jacket, jeans, and gloves will keep you warm.";
    }
  } else {
    return "It's freezing. Bundle up with a heavy coat, scarf, gloves, and warm clothing.";
  }
}
