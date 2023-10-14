// --> The warmup <--

// 1.
function logAfterDelay() {
    setTimeout(() => {
        console.log("Called after 2.5 seconds");
    }, 2500);
}

logAfterDelay();

// 2.
function funcWithTwoArg(delay, stringToLog) {
    setTimeout(() => { console.log(stringToLog) }, delay * 1000)
}

funcWithTwoArg(5, "This string logged after 5 second")
funcWithTwoArg(3, "This string logges after 3 second")

// 3. 

const called5 = document.getElementById("called5")

called5.addEventListener("click", function () {
    funcWithTwoArg(6, "This string logged after 6 second")
})

function funcWithTwoArg(delay, stringToLog) {
    setTimeout(function () {
        console.log(stringToLog);
    }, delay * 1000);
}

//4.
function earthLogger() {
    console.log("Earth");
}

function saturnLogger() {
    console.log("Saturn");
}

function planetLogFunction(logFunction) {
    logFunction();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//5.
const logLocationButton = document.getElementById("location")

logLocationButton.addEventListener("click", function () {
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


//7. function called runAfterDelay

function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000)
}

runAfterDelay(4, function () {
    console.log("should be logged after 4 seconds");
})

runAfterDelay(2, function () {
    console.log("should be logged after 2 seconds");
})


//8. Check if we have double click on the page
let lastClickTime = 0;

function checkDoubleClick() {
    const currentTime = new Date().getTime();

    // Checking if more than 500 milliseconds have passed since the previous click
    if (currentTime - lastClickTime < 500) {
        console.log("Double click!");
        lastClickTime = 0; // Resetting the last click time
    } else {
        // If this is the first click or more than 500 milliseconds have passed, update the time of the last click
        lastClickTime = currentTime;
    }
}

document.addEventListener("click", checkDoubleClick);



//9. function called jokeCreator
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke) {
        logFunnyJoke()
    } else {
        logBadJoke()
    }
}

const FunnyJoke = "Some funny joke";
const BadJoke = "Some bad joke";

function logFunnyJoke() {
    console.log(FunnyJoke)
}

function logBadJoke() {
    console.log(BadJoke)
}
jokeCreator(true, logFunnyJoke, logBadJoke)