//3. The fastest presser in this realm
domListener();
function domListener() {
  document.addEventListener("DOMContentLoaded", domLoader);
}

function domLoader() {
  const startButton = document.getElementById("startGame");
  const inputTime = document.getElementById("setTime");

  var confettiSettings = { target: "my-canvas" };
  var confetti = new ConfettiGenerator(confettiSettings);

  inputTime.addEventListener("input", function () {
    secondsGame = inputTime.value;
  });

  let secondsGame = inputTime.value;

  function setTimeGame() {
    counterL = 0;
    counterS = 0;
    confetti.clear()
    setTimeout(() => {
      if (counterS > counterL) {
        console.log("S Win");
        scoreS++;
        confetti.render(); // I have problems with the animation
      } else if (counterL > counterS) {
        console.log("L Win");
        scoreL++;
        confetti.render();
      } else console.log("Draw");
      document.getElementById("lWon").textContent = scoreL;
      document.getElementById("sWon").textContent = scoreS;
      inputTime.value = "";
      setTimeout(() => {
        confetti.clear();
      }, 5000);
         }, secondsGame * 1000);
  }

  startButton.addEventListener("click", setTimeGame);
  document.addEventListener("keydown", eventPressKey);

  let counterS = 0;
  let counterL = 0;

  let scoreS = 0;
  let scoreL = 0;

  function eventPressKey(event) {
    const keyPressed = event.key;

    if (keyPressed === "s") {
      counterS++;
      console.log(`Counter S: ${counterS}`);
    } else if (keyPressed === "l") {
      counterL++;
      console.log(`Counter L: ${counterL}`);
    }
  }

  const restartButton = document.getElementById("restart");
  restartButton.addEventListener("click", restartFunction);

  function restartFunction() {
    scoreS = 0;
    scoreL = 0;
    document.getElementById("lWon").textContent = scoreL;
    document.getElementById("sWon").textContent = scoreS;
    confetti.clear();
    alert("Game restarted");
  }
}