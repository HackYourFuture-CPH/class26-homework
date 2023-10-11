
// 1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

setTimeout (function (){
    console.log("Called after 2.5 seconds")
}, 2500);


// 2. Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out 
// the stringToLog after delay seconds. Call the function you have created with some different arguments.

function logAfterDelay(delay, stringToLog) {
    const firstFunction = (delay) => {
        console.log(stringToLog + ' logged after ' + delay + ' seconds');
    };
    setTimeout(firstFunction, delay * 1000, delay);
}

logAfterDelay(3, "This string"); // This will log "This string logged after 3 seconds"
logAfterDelay(5, "Content of this string"); // This will log "Cntent of this string logged after 5 seconds"



// 3. Create a button in html. When clicking this button, use the function you created in the previous task to log out 
// the text: Called after 5 seconds 5 seconds after the button is clicked.

// 4. Create two functions and assign them to two different variables. One function logs out Earth, the other function 
// logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the 
// third function should do is call the provided parameter function. Try call the third function once with the Earth 
// function and once with the Saturn function.



// Click counter: Create an index.html file with two buttons:
// When the button first is clicked it should first log out 0. The next time it is clicked it should log out 1, etc.
// Clicking the second button should also count up and logout the same variable.

// // html
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <body>
//     <button id="b1">Button 1</button>
//     <button id="b2">Button 2</button>
//     <button id="Delay clicker">Log in 3 seconds</button>
//     <script src="script.js"></script>
//   </body>
// </html>

// // JS
// const button1 = document.getElementById("b1")
// button1.addEventListener("click", logout)

// let counter = 0

// function logout (){
//     console.log(counter++)
// }

// const button2 = document.getElementById("b2")
// button2.addEventListener("click", logout)


// ///Delay clicker. Task 2: Create a button in html with the text "Log in 3 seconds"

// // When the button is clicked it should wait 3 seconds and then log the text "This text was delayed by 3 seconds".


// const button3 = document.getElementById("Delay clicker")
// button3.addEventListener("click", delayfunction)

// function delayfunction (){
// setTimeout(function() {
//     console.log("hello")
// }, 3000)}

