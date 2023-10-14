/// 1.2
domListener();
function domListener() {
  document.addEventListener('DOMContentLoaded', domLoader);
}

function domLoader() {
  setTimeout(() => {
    alert('Called after 2.5 seconds');
  }, 2500);

  function notThisFunction(delay, stringToLog) {
    setTimeout(() => {
      console.log(stringToLog);
    }, delay * 1000);
  }

  function setStringLog(delay, stringToLog) {
    setTimeout(() => {
      console.log(stringToLog);
    }, delay * 1000);
  }
  setStringLog(3, 'This string logged after 3 seconds');
  function click5Sec() {
    setStringLog(5, 'This string logged after 5 seconds');
  }
  // 4
  const delayButtom = document.getElementById('clickButton');
  delayButtom.addEventListener('click', click5Sec);

  const planetA = function () {
    console.log('Earth');
  };

  const planetB = function () {
    console.log('Saturn');
  };

  const planetC = function (planetLogFunction) {
    planetLogFunction();
  };

  planetC(planetA);

  planetC(planetB);

  // 5
  const geoLocButton = document.getElementById('geoLocClick');
  geoLocButton.addEventListener('click', geoLockTrigger);
  function geoLockTrigger() {
    const current_location = document.getElementById('location');
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
  //// 6

  /// 7
  function runAfterDelay(delay, callback) {
    setTimeout(() => {
      callback();
    }, delay * 1000);
  }
  runAfterDelay(4, function () {
    console.log('should be logged after 4 seconds');
  });

  /// 8 double clicked on the page

  document.addEventListener('dblclick', (event) => {
    console.log('double click!');
  });

  /// 9

  function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke === true) {
      logFunnyJoke();
    } else {
      logBadJoke();
    }
  }

  function logFunnyJoke() {
    console.log('Why was the math book sad? Because it had too many problems!');
  }

  function logBadJoke() {
    console.log(
      "Why couldn't the bicycle stand up by itself? Because it was two-tired!"
    );
  }
}

/// 2. Function as a variable

const functionArray = [
  function () {
    console.log('function1');
  },

  function () {
    console.log('function2');
  },

  function () {
    console.log('function3');
  },
];

functionArray.forEach(function (myFunction) {
  myFunction();
});

// 2.1
const functionOneConst = function () {
  console.log("hello i'm const function");
};

function functionTwoRegular() {
  console.log("Hello i'm regular function");
}

functionOneConst();
functionTwoRegular();

/// 3.1
const newObject = {
  myFunction: function () {
    console.log("i'm function inside an object");
  },
};

newObject.myFunction();
