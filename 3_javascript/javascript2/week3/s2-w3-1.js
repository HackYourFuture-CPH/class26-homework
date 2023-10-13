const durationInput = document.getElementById('duration');
const startButton = document.getElementById('start-button');
const timerElement = document.getElementById('timer');
const resultElement = document.getElementById('result');

let duration;
let countdown;

startButton.addEventListener('click', () => {
    if (durationInput.value) {
        duration = parseInt(durationInput.value) * 1000;
        startGame();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 's' || event.key === 'l') {
        updateCount(event.key);
    }
});

function startGame() {
    startButton.disabled = true;
    countdown = setInterval(updateTimer, 1000);
    setTimeout(endGame, duration);
}

function updateTimer() {
    duration -= 1000;
    timerElement.innerText = `Time remaining: ${duration / 1000} seconds`;

    if (duration === 0) {
        clearInterval(countdown);
        endGame();
    }
}

let lCount = 0;
let sCount = 0;

function updateCount(key) {
    if (key === 'l') {
        lCount++;
    } else if (key === 's') {
        sCount++;
    }
}

function endGame() {
    startButton.disabled = false;

    if (lCount > sCount) {
        resultElement.innerText = 'Player with "L" key wins!';
    } else if (sCount > lCount) {
        resultElement.innerText = 'Player with "S" key wins!';
    }

    clearInterval(countdown);
    durationInput.value = '';
    lCount = 0;
    sCount = 0;
}
