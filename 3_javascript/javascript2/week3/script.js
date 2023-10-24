domListener();
function domListener() {
  document.addEventListener("DOMContentLoaded", domLoader);
}

function domLoader() {

// 1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

  setTimeout(() => {
    console.log("Called after 2.5 seconds");
  }, 2500);

  // 2. Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.

function secondFunction(delay, stringToLog){
    setTimeout(() => {
        console.log(stringToLog)
    }, delay * 1000)
}

secondFunction(3, "This string logged after 3 seconds");
secondFunction(5, "This string logged after 5 seconds")

//3. Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.

const button1 = document.getElementById("button1");
button1.addEventListener("click", function(){
    secondFunction(3, "This string logged after 3 seconds")
})

//4. Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. Try call the third function once with the Earth function and once with the Saturn function.
const earthLogger = function () {
    console.log("Earth");
  };

  const saturnLogger = function () {
    console.log("Saturn");
  };

  const planetLogFunction = function (callPlanetLogFunction) {
    callPlanetLogFunction();
  };

  planetLogFunction(earthLogger);
  planetLogFunction(saturnLogger);

  //5. Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api

  const location = document.getElementById("location");
  location.addEventListener("click", function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
});

//6. 

//7. Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions

function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000)
}

runAfterDelay(4, function () {
    console.log("should be logged after 4 seconds");
})

runAfterDelay(2, function () {
    console.log("should be logged after 2 seconds");
})

//8. Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"

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

//9. Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.

function jokeCreator(isAFunnyJoke, aFunnyJoke, aBadJoke) {
    if (isAFunnyJoke) {
      aFunnyJoke();
    } else {
      aBadJoke();
    }
  }
  function aFunnyJoke() {
    console.log("Insert a good joke");
  }
  function aBadJoke() {
    console.log("Insert a bad joke");
  }
  jokeCreator(true, aFunnyJoke, aBadJoke);
  jokeCreator(false, aFunnyJoke, aBadJoke);


//////////////////////////////////////////////////////2. Function as a variable

//1
  let arrayOfFunctions = [function1, function2, function3];

  function function1() {
    console.log("1");
  }
  function function2() {
    console.log("2");
  }
  function function3() {
    console.log("3");
  }
  
  arrayOfFunctions.forEach((functions) => functions());
  
  //2
  
  const functionA = () => {
    console.log("A");
  };
  
  function functionB() {
    console.log("B");
  }
  
  functionA();
  functionB();
  
  //3
  
  const object = {
      functionInObject: () => {
        console.log("is working");
      }
    };
    object.functionInObject();
    

}
