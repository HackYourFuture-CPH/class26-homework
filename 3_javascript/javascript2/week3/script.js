
domListener();
function domListener() {
  document.addEventListener("DOMContentLoaded", domLoader);
}
function domLoader() {
// 1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

const firstFunction = () => {
    console.log('Called after 2.5 seconds')
}
setTimeout(firstFunction, 2500);


// 2. Create a function that takes 2 parameters: delay and stringToLog...


function logAfterDelay(delay, stringToLog) {
    setTimeout(() => {
        console.log(`${stringToLog} logged after ${delay} seconds`);
    }, delay * 1000);
}

logAfterDelay(3, "This string"); // This will log "This string logged after 3 seconds"
logAfterDelay(5, "Content of this string"); // This will log "Content of this string logged after 5 seconds"


// 3. Create a button in html. When clicking this button, use the function you created in the previous task ...

const button = document.getElementById('btn');
button.addEventListener('click', (event) => {
  logAfterDelay(5, 'Called after 5 seconds'); //it is logging out the previous function call as well. 
  // Please help me resolve this.
});


// 4. Create two functions and assign them to two different variables. One function logs out Earth...

const bluePlanet = () => {
    console.log(`Earth`);
}

const redPlanet = () => {
    console.log(`Saturn`);
}

const planetLogFunction = (logFunction) => {
    logFunction();
}

planetLogFunction(bluePlanet);
planetLogFunction(redPlanet);


// 5. Create a button, When clicked the location should be logged out
const button2 = document.getElementById('loc');
const locationOutput = document.getElementById('loc-output'); 

button2.addEventListener('click', getLocation);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    locationOutput.innerHTML = "Geolocation is blocked by your browser.";
  }
}

function showPosition(position) {
  locationOutput.innerHTML = "This is the latitude: " + position.coords.latitude +
    "<br>This is the longitude: " + position.coords.longitude;
}

}