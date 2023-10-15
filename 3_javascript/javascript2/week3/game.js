let gameDuration;
let player1Score = 0;
let player2Score = 0;
let gameInterval;

document.getElementById('startGame').addEventListener('click', startGame);

document.addEventListener('keydown', function(event) {
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
});

function startGame() {
  gameDuration = parseInt(document.getElementById('gameTime').value);
  document.getElementById('startGame').disabled = true;
  document.getElementById('gameTime').disabled = true;
  document.getElementById('result').textContent = 'Game in progress...';

  gameInterval = setInterval(updateTimer, 1000);

  setTimeout(function() {
    clearInterval(gameInterval);
    document.getElementById('startGame').disabled = false;
    document.getElementById('gameTime').disabled = false;

    if (player1Score > player2Score) {
      document.getElementById('result').textContent = 'Winner: Player 1';
    } else if (player2Score > player1Score) {
      document.getElementById('result').textContent = 'Winner: Player 2';
    } else {
      document.getElementById('result').textContent = 'It\'s a tie!';
    }
  }, gameDuration * 1000);
}

function updateTimer() {
  gameDuration--;
  document.getElementById('timer').textContent = 'Game ends in: ' + gameDuration + ' seconds';
}
