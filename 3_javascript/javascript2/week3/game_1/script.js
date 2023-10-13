let gameDuration = 0;
let gameTimer;
let score = 0;
let lCount = 0;
let sCount = 0;

const durationInput = document.getElementById("durationInput");
const startGameButton = document.getElementById("startGameButton");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const lCountDisplay = document.getElementById("lCount");
const sCountDisplay = document.getElementById("sCount");
const winnerDisplay = document.getElementById("winnerDisplay");

function startGame() {
  gameDuration = +durationInput.value || 10;
  score = 0;
  lCount = 0;
  sCount = 0;
  updateGameDisplay();
  startGameButton.disabled = true;
  durationInput.disabled = true;
  countDown();
}

function endGame() {
  startGameButton.disabled = false;
  durationInput.disabled = false;
  updateGameDisplay();
  determineWinner();
}

function countDown() {
  if (gameDuration <= 0) {
    endGame();
  } else {
    gameDuration--;
    updateGameDisplay();
    setTimeout(countDown, 1000);
  }
}

function updateGameDisplay() {
  timerDisplay.textContent = `Game time remaining: ${gameDuration} seconds`;
  scoreDisplay.textContent = `Score: ${score}`;
  lCountDisplay.textContent = `L Count: ${lCount}`;
  sCountDisplay.textContent = `S Count: ${sCount}`;
}

function determineWinner() {
  if (lCount > sCount) {
    winnerDisplay.textContent = "'L' is the winner!";
  } else if (sCount > lCount) {
    winnerDisplay.textContent = "'S' is the winner!";
  } else {
    winnerDisplay.textContent = "It's a tie!";
  }
}

document.addEventListener("keydown", (event) => {
  if (gameDuration > 0) {
    if (event.key === "L" || event.key === "l") {
      score++;
      lCount++;
    } else if (event.key === "S" || event.key === "s") {
      score++;
      sCount++;
    }
    updateGameDisplay();
  }
});

startGameButton.addEventListener("click", startGame);
