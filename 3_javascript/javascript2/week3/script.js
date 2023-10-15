//1.2 functions!

function logAfterDelay(delay, stringToLog) {
    setTimeout(function () {
        console.log(stringToLog);
    }, delay * 1000);
}

logAfterDelay(2.5, "Called after 2.5 seconds");
logAfterDelay(5, "Called after 5 seconds");
logAfterDelay(1, "Called after 1 second");

//
function logAfterDelay(delay, stringToLog) {
    setTimeout(function () {
        console.log(stringToLog);
    }, delay * 1000);
}

var button = document.getElementById("logButton");

button.addEventListener("click", function () {
    logAfterDelay(5, "Called after 5 seconds 5 seconds after the button is clicked");
});

//
// Function to log "Earth"
function logEarth() {
    console.log("Earth");
}


function logSaturn() {
    console.log("Saturn");
}

// Function that calls the provided parameter function
function logPlanet(planetLogFunction) {
    planetLogFunction();
}


logPlanet(logEarth);


logPlanet(logSaturn);


// Function to handle location logging
function logLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log("Latitude: " + latitude + ", Longitude: " + longitude);
        }, function (error) {
            console.error("Error getting location: " + error.message);
        });
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}


var logButton = document.getElementById("logLocationButton");


logButton.addEventListener("click", logLocation);

//
function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000);
}


function callback1() {
    console.log("Callback 1 executed after delay");
}

function callback2() {
    console.log("Callback 2 executed after delay");
}


runAfterDelay(2, callback1);
runAfterDelay(4, callback2);
runAfterDelay(1, function () {
    console.log("Custom callback executed after 1-second delay");
});
//

var clickCount = 0;
var delay = 500;

document.addEventListener("click", function () {
    clickCount++;

    if (clickCount === 1) {
        setTimeout(function () {
            if (clickCount === 2) {
                console.log("Double click!");
            }
            clickCount = 0;
        }, delay);
    }
});
//
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke) {
        logFunnyJoke();
    } else {
        logBadJoke();
    }
}


function logFunnyJoke() {
    console.log("Why don't scientists trust atoms? Because they make up everything!");
}

function logBadJoke() {
    console.log("Why did the scarecrow win an award? Because he was outstanding in his field!");
}

jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);

// 2. Function as a variable

// Array of functions
const functionArray = [
    function() {
      console.log("Function 1 called");
    },
    function() {
      console.log("Function 2 called");
    },
    function() {
      console.log("Function 3 called");
    }
  ];
  
  
  functionArray.forEach(func => func());

  // Function created as a const
const constFunction = function() {
    console.log("Function created as a const called");
  };
  

  function normalFunction() {
    console.log("Function created normally called");
  }
  
  constFunction();
  normalFunction();
  
  // Object with a key whose value is a function
const functionObject = {
    sayHello: function() {
      console.log("Hello from the function inside the object");
    }
  };
  
  
  functionObject.sayHello();
  
  


