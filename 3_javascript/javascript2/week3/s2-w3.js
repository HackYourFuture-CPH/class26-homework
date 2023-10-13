//1.functions!//
//Task 1: Create a function to log after a delay//-// Wait for 2.5 seconds (2500 milliseconds) after the script is loaded
setTimeout(function() {
  console.log("Called after 2.5 seconds");
}, 2500);

//Task 2:Create a function that takes 2 parameters delay and stringToLog//

function logAfterDelay(delay, stringToLog) {
  setTimeout(function() {
    console.log(stringToLog);
  }, delay * 1000); // Convert delay to milliseconds
}

// Example 1: Log "Hello, World!" after 2 seconds
logAfterDelay(2, "Hello, World!");

// Example 2: Log "HYF is best!" after 5 seconds
logAfterDelay(5, "HYF Is Best!");

// Example 3: Log "Delayed log!" after 3 seconds
logAfterDelay(3, "Delayed log!");


//Task 4: Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn//

// Function that logs Earth
function logEarth() {
  console.log("Earth");
}

// Function that logs Saturn
function logSaturn() {
  console.log("Saturn");
}

// Function that calls the provided parameter function
function callPlanetLogFunction(planetLogFunction) {
  planetLogFunction();
}

// Call the third function with the Earth function
callPlanetLogFunction(logEarth);

// Call the third function with the Saturn function
callPlanetLogFunction(logSaturn);


//Task 7: Create a function called runAfterDelay.//

  function runAfterDelay(delay, callback) {
    setTimeout(callback, delay);
  }
  
  // Example usage:
  function exampleCallback() {
    console.log("Callback executed after the specified delay.");
  }
  console.log("Calling runAfterDelay with a 9-second delay.");
  runAfterDelay(9000, exampleCallback);
  
  console.log("Calling runAfterDelay with a 7-second delay.");
  runAfterDelay(7000, () => {
    console.log("This callback has a longer delay.");
  });

  


//Task 8: double-click//

let clickCount = 0;
let clickTimeout;

document.addEventListener('click', function () {
  clickCount++;
  if (clickCount === 1) {
    clickTimeout = setTimeout(function () {
      clickCount = 0;
    }, 500);
  } else if (clickCount === 2) {
    clearTimeout(clickTimeout);
    clickCount = 0;
    console.log("Double click!");
  }
});




//Task 9: Create a function called jokeCreator//
  function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke) {
      logFunnyJoke(); // Call the logFunnyJoke function
    } else {
      logBadJoke(); // Call the logBadJoke function
    }
  }
  
  // Define logFunnyJoke and logBadJoke functions
  function logFunnyJoke() {
    console.log("Why don't skeletons fight each other? Because they don't have the guts!");
  }
  
  function logBadJoke() {
    console.log("Why did the tomato turn red? Because it saw the salad dressing!");
  }
  
  // Example usage:
  jokeCreator(true, logFunnyJoke, logBadJoke); // This will log a funny joke
  jokeCreator(false, logFunnyJoke, logBadJoke); // This will log a bad joke

  





//2.Function as a variable!//

  const functionsArray = [
    function() {
      console.log("Team 1 called");
    },
    function() {
      console.log("Team 2 called");
    },
    function() {
      console.log("Team 3 called");
    }
  ];
  
  functionsArray.forEach(func => func());

  // Function as a const
const functionAsConst = function() {
    console.log("This is a function defined as a const.");
  };
  
  // Function defined normally
  function functionNormallyDefined() {
    console.log("This is a function defined normally.");
  }
  
  functionAsConst();
  functionNormallyDefined();

  
  const myObject = {
    myFunction: function() {
      console.log("This is a function inside an object.");
    }
  };
  
  myObject.myFunction();
  


  