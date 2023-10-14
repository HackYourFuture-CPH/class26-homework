console.log("It's homework time");
// 1.( Warmup)
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
            locationOutput.innerText = `This is the latitide : ${latitude}  This is the longitude: ${longitude}` // how to make it in 2 different line ?
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
     if (shouldTellFunnyJoke === true) {
        logFunnyJoke()
     } else { 
        logBadJoke()
     }
}

function logFunnyJoke () {
    console.log("What is the area at the Danish/German border called? The DaneGer zone!")
}

function logBadJoke () {
    console.log("If you go to a Scandinavian bakery you could Finnish a Swedish Danish. Norway I'd make this up!")
}

jokeCreator(true, logBadJoke, logFunnyJoke);
jokeCreator(false, logBadJoke, logFunnyJoke);


//2. Function as a variable
//1. (Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.)
const functionArray = [
    function item1 () {
        console.log("Hello function array 1")
    },
    function item2 () {
        console.log("Hello function array 2")
    },
    function item3 () {
        console.log("Hello function array 3")
    }
]

for (let index = 0; index < functionArray.length; index++) {
    const element = functionArray[index];
    element()
}

//2. (Create a function as a const and try creating a function normally. Call both functions.)
const firstFunction = function () {
    return 5  ; 
}

function simpleFunction() {
return 10 ;
}

const first = firstFunction();
const second = simpleFunction();

console.log(first);
console.log(second);

//3. (Create an object that has a key whose value is a function. Try calling this function.)
const valueFunction = function ( message) {
    console.log(message)
}

const obj = {valueFunction : "I love coding"}

valueFunction(obj.valueFunction)

//3. The fastest presser in this realm (stuck in this)

 domLoader()

let sCounter = 0;
let lCounter = 0;
let gameDuration = 0;

const durationInput = document.getElementById("durationInput");
const startGameButton = document.getElementById("btn-3");
const resultDiv = document.getElementById("result");

        function startGame() {
            const userInput = durationInput.value;
            if (userInput) {
                gameDuration = parseInt(userInput, 10);
                resultDiv.innerHTML = `Game started! Type 'S' or 'L'.`;

                setTimeout(() => {
                    resultDiv.innerHTML = `Game over! You typed 'S' ${sCounter} times and 'L' ${lCounter} times.`; 
                    determineWinner();
                }, gameDuration * 1000);
            }
        }
        startGameButton.addEventListener("click", startGame);

        document.addEventListener("keydown", function (event) {
            const key = event.key;
            if (key === "S" || key === "s") {
                sCounter++;
            } else if (key === "L" || key === "l") {
                lCounter++;
            }
        });

        function determineWinner() {
            if (sCounter > lCounter) {
                resultDiv.innerHTML += "<br>S wins!";
            } else if (lCounter > sCounter) {
                resultDiv.innerHTML += "<br>L wins!";
            } else {
                resultDiv.innerHTML += "<br>It's a tie!";
            }
        }







