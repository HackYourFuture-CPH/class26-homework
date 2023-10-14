//1.2 functions!
//1

domListener();
function domListener() {
  document.addEventListener("DOMContentLoaded", domLoader);
}

function domLoader() {
  setTimeout(() => {
    alert("Delayed for 2.5 second.");
  }, 2500);

  //2
  function delayedTime(delay, stringToaLog) {
    setTimeout(() => {
      alert(stringToaLog);
    }, delay * 1000);
  }

  delayedTime(3, "This string logged after 3 seconds");

  function click5Sec() {
    delayedTime(5, "This string logged after 5 seconds");
  }
  //3
  const delayButtom = document.getElementById("clickButton");
  delayButtom.addEventListener("click", click5Sec);
}

//4
const logEarth = function() {
    console.log("Earth");
  };
  const logSaturn = function() {
    console.log("Saturn");
  };
  const callPlanetLogFunction = function(planetLogFunction) {
    planetLogFunction();
  };
  callPlanetLogFunction(logEarth);
  callPlanetLogFunction(logSaturn); 



//5
let current_location = document.getElementById("location");
const success = (position) => {
  const longitude = position.coords.longitude;
  const latitude = position.coords.latitude;
  
  current_location.textContent = `Longitute = ${longitude} \n latitude = ${latitude}`;
}
const error = (error) => {
  current_location.textContent = `Couldn't access your location \n Reason: ${PositionError.message}`;
}
const getLocation = () => {
  if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(success,error);
  else 
    current_location.textContent = `Your browser does not support this feature`;}



//6 optionall
//7
function runAfterDelay(delay, callback) {
    setTimeout(() => {
    callback();
    }, delay * 1000);
  }

  runAfterDelay(4,function() {
    console.log("This string logged after 4 seconds");
  });

  //8
  document.addEventListener("DOMContentLoaded", function() {
    const logLocationButton = document.getElementById("logLocationButton");
    const locationOutput = document.getElementById("locationOutput");
    let clickCount = 0;
    let timer;

    logLocationButton.addEventListener("click", () => {
      
        if (timer) {
            clearTimeout(timer);
        }
        clickCount++;

        if (clickCount === 1) {
            timer = setTimeout(() => {
                if (clickCount === 1) {
                    
                }
                clickCount = 0;
            }, 500); 
        } else if (clickCount === 2) {
           
            locationOutput.textContent = "Double click!";
            clickCount = 0;
        }
    });
});

//9
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke){
if (shouldTellFunnyJoke){
  logFunnyJoke();
}
else{logBadJoke();

}
}

function logFunnyJoke(){
  console.log("Hear about the new restaurant called Karma?There’s no menu: You get what you deserve.")
}
function logBadJoke(){
  console.log(" I want a job cleaning mirrors. It's something I can really see myself doing.")
}
jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);


//2. Function as a variable
const functionArray = [
  function item1() {
      console.log("item1 is called!");
  },
  function item2() {
      console.log("item2 is called!");
  },
  function item3() {
      console.log("item3 is called!");
  }
];
for (let i = 0; i < functionArray.length; i++) {
  functionArray[i]()
}


// Function declaration
function declaredFunction() {
  console.log("This is a declared function.");
}

// Function expression
const functionExpression = function() {
  console.log("This is a function expression.");
};

// Call both functions
declaredFunction(); 
functionExpression();

const myObject = {
  myFunction: function() {
      console.log("Function inside an object is called!");
  }
};

myObject.myFunction();














