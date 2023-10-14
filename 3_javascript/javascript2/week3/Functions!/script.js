domListener();
function domListener() {
  document.addEventListener("DOMContentLoaded", domLoader);
}

function domLoader() {
  setTimeout(() => {
    console.log("Called after 2.5 seconds");
  }, 2500);

  // 2

  function setStringLog(delay, stringToLog) {
    setTimeout(() => {
      console.log(stringToLog);
    }, delay * 1000);
  }

  setStringLog(3, "This string logged after 3 seconds");

  function click5Sec() {
    setStringLog(5, "This string logged after 5 seconds");
  }
  //3

  const delayButtom = document.getElementById("clickButton");
  delayButtom.addEventListener("click", click5Sec);

  4;

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

  //  5

  //
  const geoLocButton = document.getElementById("geoLocClick");
  geoLocButton.addEventListener("click", geoLockTrigger);

  function geoLockTrigger() {
    const current_location = document.getElementById("location");

    const success = (position) => {
      const longitude = position.coords.longitude;
      const latitude = position.coords.latitude;
      current_location.textContent = `Longitude = ${longitude} \nLatitude = ${latitude}`;
    };

    const error = (error) => {
      current_location.textContent = `Couldn't access your location \nReason: ${error.message}`;
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      current_location.textContent = `Your browser does not support this feature`;
    }
  }

  //6

  //7

  function setStringLog2(delay, stringToLog) {
    setTimeout(() => {
      stringToLog();
    }, delay * 1000);
  }

  setStringLog2(3, function () {
    console.log("Shold be logged after 3 seconds");
  });

  //8
  document.addEventListener("click", doubleClick);
  let clickCount = 0;
  function doubleClick() {
    clickCount++;

    if (clickCount === 1) {
      setTimeout(function () {
        clickCount = 0;
      }, 500);
    } else if (clickCount === 2) {
      console.log("double click!");
      clickCount = 0;
    }
  }

  //9
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
}
