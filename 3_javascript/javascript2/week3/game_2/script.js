let gameDuration = 0;
let gameTimer;
let score = 0;
let lCount = 0;
let sCount = 0;
let bCount = 0;
let isGameRunning = false;

const durationInput = document.getElementById("durationInput");
const startGameButton = document.getElementById("startGameButton");
const restartGameButton = document.getElementById("restartGameButton");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const lCountDisplay = document.getElementById("lCount");
const sCountDisplay = document.getElementById("sCount");
const bCountDisplay = document.getElementById("bCount");
const winnerDisplay = document.getElementById("winnerDisplay");

startGameButton.addEventListener("click", startGame);
restartGameButton.addEventListener("click", restartGame);

document.addEventListener("keydown", (event) => {
  if (isGameRunning) {
    if (event.key === "L" || event.key === "l") {
      score++;
      lCount++;
    } else if (event.key === "S" || event.key === "s") {
      score++;
      sCount++;
    } else if (event.key === "B" || event.key === "b") {
      bCount += 2;
    }
    updateGameDisplay();
  }
});

function startGame() {
  gameDuration = +durationInput.value || 10;
  score = 0;
  lCount = 0;
  sCount = 0;
  bCount = 0;
  isGameRunning = true;
  updateGameDisplay();
  startGameButton.disabled = true;
  restartGameButton.disabled = false;
  durationInput.disabled = true;
  countDown();
}

function restartGame() {
  isGameRunning = false;
  startGameButton.disabled = false;
  restartGameButton.disabled = true;
  durationInput.disabled = false;
  updateGameDisplay();
}

function countDown() {
  if (gameDuration <= 0) {
    isGameRunning = false;
    determineWinner();
    restartGameButton.disabled = false;
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
  bCountDisplay.textContent = `Bonus Points: ${bCount}`;
}

function determineWinner() {
  if (lCount > sCount) {
    winnerDisplay.textContent = "'L' is the winner!";
  } else if (sCount > lCount) {
    winnerDisplay.textContent = "'S' is the winner!";
  } else if (bCount > 0) {
    winnerDisplay.textContent = "It's a draw, but Bonus Points win!";
  } else {
    winnerDisplay.textContent = "It's a draw!";
  }
}

//3.3 Confetti
function triggerConfetti() {
  const confettiSettings = {
    target: "confetti-canvas",
    max: 100,
  };

  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}

if (lCount > sCount) {
  winnerDisplay.textContent = "'L' is the winner!";
  triggerConfetti();
} else if (sCount > lCount) {
  winnerDisplay.textContent = "'S' is the winner!";
  triggerConfetti();
}
