//1.2 functions - Log out the text Called after 2.5 seconds
function delayedFunction(delay, stringToLog) {
  setTimeout(function () {
    console.log(stringToLog);
  }, delay * 1000);
}
delayedFunction(2.5, "Called after 2.5 seconds");

//1.3.Delayed button
document.getElementById("delayedbutton").addEventListener("click", function () {
  delayedFunction(5, "Called after 5 second");
});

//1.4.Functions nested in another function
function earthLogger() {
  console.log("Earth");
}
function saturnLogger() {
  console.log("Saturn");
}
function planetLogFunction(nestedFunction) {
  nestedFunction();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//1.5-1.6-Log location button - browser api - Google maps api
function logLocation() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      console.log(
        `This is the Latitude: ${latitude}, This is the Longitude: ${longitude}`
      );
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: latitude, lng: longitude },
        zoom: 12,
      });
      const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: "User's Location",
      });
    },
    (error) => {
      console.log("Error getting location:", error.message);
    }
  );
}

document
  .getElementById("locationbutton")
  .addEventListener("click", logLocation);

//7.runAfterDelay
function runAfterDelay(delay, callback) {
  setTimeout(callback, delay);
}
function firstCallback() {
  console.log("This is called after 2 seconds.");
}
function secondCallback() {
  console.log("This is called after 5 seconds.");
}

runAfterDelay(2000, firstCallback); // Delay: 2 seconds
runAfterDelay(5000, secondCallback); // Delay: 5 seconds

//double click!
let clickCount = 0;
document.addEventListener("dblclick", function () {
  clickCount++;

  if (clickCount === 2) {
    console.log("Double click!");
    clickCount = 0;
  }
});
setTimeout(function () {
  clickCount = 0;
}, 500);

//jokeCreator
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke();
}

function logFunnyJoke() {
  console.log(
    "Why did the scarecrow win an award? Because he was outstanding in his field!"
  );
}

function logBadJoke() {
  console.log(
    "Why don't scientists trust atoms? Because they make up everything."
  );
}

jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);

//2. Function as a variable
//creat an array of functions and iterate through them
const arrayOfFubctions = [
  () => console.log("Fistfunction"),
  () => console.log("SecondFunction"),
  () => console.log("ThirdFunction"),
];

arrayOfFubctions.forEach((functions) => functions());

//create and call a function as const and a normal function and
const functionAsConst = () => console.log("Constant Function");
function functionDeclaredNormally() {
  console.log("Normal Function");
}

functionAsConst();
functionDeclaredNormally();

//Object with Function value
const ObjectAsFunction = {
  myFunction: () => console.log("Function inside an object"),
};

ObjectAsFunction.myFunction();
