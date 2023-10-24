domListener();

function domListener() {
  document.addEventListener("DOMContentLoaded", domLoader);
}


function domLoader() {

let sCounter = 0;
let lCounter = 0;
let gameDuration = 0;

const durationInput = document.getElementById("durationInput");
const startGameButton = document.getElementById("btn-1");
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
        }}