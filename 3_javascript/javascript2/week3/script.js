console.log("It's homework time");


// 1. & 2.
domListener();

function domListener() {
    document.addEventListener("DOMContentLoaded", domLoader);
}

function domLoader() {
    function delayTheStringToLog(delay, stringToLog){
        setTimeout(() => {
            console.log(`${stringToLog} logged after ${delay}seconds`)
        },delay * 1000)
    }
    
    delayTheStringToLog(5, "I am also");
    delayTheStringToLog(3, "I am");
    delayTheStringToLog(2.5, "Called after 2.5 seconds");
}

// 3.
document.addEventListener("DOMContentLoaded", function (){
 
    const button = document.getElementById("btn-1");

    button.addEventListener("click", delayToLogTheButton);

    function delayToLogTheButton() {
        setTimeout(() => {
        console.log("Called after 5 seconds");
    }, 5000);
}
})

//4.
function earthLogger (){
console.log("Earth")
}

function saturnLogger () {
console.log("Saturn")
}

function planetLogFunction (logFunction) {
    logFunction()
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//5.
document.addEventListener("DOMContentLoaded", function (){
    const button = document.getElementById("btn-2");
    button.addEventListener("click", logLocation);

    function logLocation () {
       if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            locationOutput.innerText = `This is the latitide : ${latitude}  This is the longitude: ${longitude} :` // how to make it in 2 different line ?
           })
       }
    }
})

//7.

function runAfterDelay (delay, callback) {
   setTimeout(() => {
    console.log(`callback logged after ${delay} seconds`);
    callback();
   },delay * 1000)
}

runAfterDelay(5, function(){
    console.log('should be logged after 5 seconds')
})

//8.

let clickCount = 0;
let nextClickTime = 0;

document.addEventListener("click", function(){
    const currentTime = new Date().getTime();
    if (currentTime - nextClickTime < 500) {
        clickCount++ ;
    } else { 
        clickCount = 1 
    }

    if (clickCount === 2) {
        console.log("Double click !")
        clickCount = 0;
    }

    nextClickTime = currentTime;
})

//9.

function jokeCreator (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
     
}

