domListener();
function domListener() {
  document.addEventListener('DOMContentLoaded', domLoader);
}

function domLoader() {
  const gameButton = document.getElementById('gameButton');
  const inputTime = document.getElementById('setTime');

  var confettiSettings = { target: 'my-canvas' };
  var confetti = new ConfettiGenerator(confettiSettings);

  let secondsGame;

  inputTime.addEventListener('input', function () {
    secondsGame = inputTime.value;
  });

  function setTimeGame() {
    counterL = 0;
    counterS = 0;
    confetti.clear();
    setTimeout(() => {
      if (counterS > counterL) {
        console.log('S Win');
        scoreS++;
        confetti.render(); // I have problems with the animation
      } else if (counterL > counterS) {
        console.log('L Win');
        scoreL++;
        confetti.render();
      } else console.log('Draw');
      document.getElementById('lWonContainer').textContent = scoreL;
      document.getElementById('sWonContainer').textContent = scoreS;
      inputTime.value = '';
      setTimeout(() => {
        confetti.clear();
      }, 5000);
    }, secondsGame * 1000);
  }

  gameButton.addEventListener('click', setTimeGame);
  document.addEventListener('keydown', eventPressKey);

  let counterS = 0;
  let counterL = 0;

  let scoreS = 0;
  let scoreL = 0;

  function eventPressKey(event) {
    const keyPressed = event.key;

    if (keyPressed === 's') {
      counterS++;
      console.log(`Counter S: ${counterS}`);
    } else if (keyPressed === 'l') {
      counterL++;
      console.log(`Counter L: ${counterL}`);
    }
  }

  const restartButton = document.getElementById('restartButton');
  restartButton.addEventListener('click', restartFunction);

  function restartFunction() {
    scoreS = 0;
    scoreL = 0;
    document.getElementById('lWonContainer').textContent = scoreL;
    document.getElementById('sWonContainer').textContent = scoreS;
    confetti.clear();
    alert('Game restarted');
  }

  const lWonContainer = document.getElementById('lWonContainer');
  const sWonContainer = document.getElementById('sWonContainer');

  lWonContainer.textContent = '0 L Victories';
  sWonContainer.textContent = '0 S Victories';

  const newLVictories = 5;
  lWonContainer.textContent = `${newLVictories} L Victories`;
}
