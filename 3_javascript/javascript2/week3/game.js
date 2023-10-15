let gameDuration;
let player1Score = 0;
let player2Score = 0;
let gameInterval;
let speedInterval;
let speed = 1000; // Initial speed (1 second)

document.getElementById('startGame').addEventListener('click', startGame);
document.getElementById('newGame').addEventListener('click', newGame);

document.addEventListener('keydown', function(event) {
  if (gameInterval) {
    const key = event.key.toLowerCase();
    if (key === 'l' || key === 's') {
      if (player1Score > player2Score) {
        player2Score += (key === 'l') ? 1 : 0;
      } else if (player2Score > player1Score) {
        player1Score += (key === 'l') ? 1 : 0;
      } else {
        const randomPlayer = Math.random() < 0.5 ? 'player1' : 'player2';
        if (randomPlayer === 'player1') {
          player1Score += (key === 'l') ? 1 : 0;
        } else {
          player2Score += (key === 'l') ? 1 : 0;
        }
      }
    }
  }
});

function startGame() {
  gameDuration = parseInt(document.getElementById('gameTime').value);
  document.getElementById('startGame').disabled = true;
  document.getElementById('gameTime').disabled = true;
  document.getElementById('newGame').disabled = true;
  document.getElementById('result').textContent = 'Game in progress...';

  gameInterval = setInterval(updateTimer, 1000);
  speedInterval = setInterval(increaseSpeed, 10000); // Speed increases every 10 seconds

  setTimeout(function() {
    clearInterval(gameInterval);
    clearInterval(speedInterval);
    document.getElementById('startGame').disabled = false;
    document.getElementById('gameTime').disabled = false;
    document.getElementById('newGame').disabled = false;

    if (player1Score > player2Score) {
      document.getElementById('result').textContent = 'Winner: Player 1';
    } else if (player2Score > player1Score) {
      document.getElementById('result').textContent = 'Winner: Player 2';
    } else {
      document.getElementById('result').textContent = 'It\'s a tie!';
    }
  }, gameDuration * 1000);
}

function newGame() {
  clearInterval(gameInterval);
  clearInterval(speedInterval);
  player1Score = 0;
  player2Score = 0;
  document.getElementById('gameTime').value = 10;
  document.getElementById('timer').textContent = 'Game ends in: ';
  document.getElementById('result').textContent = 'Winner: ';
  document.getElementById('speed').textContent = 'Speed: Normal';
  document.getElementById('startGame').disabled = false;
  document.getElementById('gameTime').disabled = false;
  document.getElementById('newGame').disabled = false;
}

function updateTimer() {
  gameDuration--;
  document.getElementById('timer').textContent = 'Game ends in: ' + gameDuration + ' seconds';
}

function increaseSpeed() {
  speed = speed / 1.5; // Speed increases by 50%
  document.getElementById('speed').textContent = 'Speed: Faster';
}
