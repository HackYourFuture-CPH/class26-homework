document.addEventListener("DOMContentLoaded", function () {
    const timerInput = document.getElementById("timerInput");
    const startButton = document.getElementById("startButton");
    const countS = document.getElementById("countS");
    const countL = document.getElementById("countL");
    const confettiContainer = document.getElementById("confettiContainer");

    let timer;

    startButton.addEventListener("click", function () {
        const gameTime = parseInt(timerInput.value, 10);
        if (!isNaN(gameTime)) {
            startGame(gameTime);
        }
    });

    function startGame(time) {
        console.log(`Game started for ${time} seconds`);

        countS.innerText = "0";
        countL.innerText = "0";

        let counterS = 0;
        let counterL = 0;

        // Creating a canvas for each game field
        const canvasS = document.createElement("canvas");
        canvasS.id = "confettiCanvasS";
        confettiContainer.appendChild(canvasS);

        const canvasL = document.createElement("canvas");
        canvasL.id = "confettiCanvasL";
        confettiContainer.appendChild(canvasL);

        // Reset the previous timer if it exists
        if (timer) {
            clearInterval(timer);
        }

        // Set a timer for the end of the game
        timer = setTimeout(() => {
            console.log("Game over!");

            // Counting the winner
            if (counterS > counterL) {
                showConfetti("S");
                console.log("Player S wins!");
            } else if (counterL > counterS) {
                showConfetti("L");
                console.log("Player L wins!");
            } else {
                console.log("It's a draw!");
            }
        }, time * 1000);

        // Add event listeners for the keys "S" and "L"
        document.addEventListener("keydown", function (event) {
            const key = event.key.toUpperCase();
            if (key === "S") {
                counterS++;
                countS.innerText = counterS;
            } else if (key === "L") {
                counterL++;
                countL.innerText = counterL;
            }
        });
    }

    // Function to display confetti
    function showConfetti(winner) {
        const confettiSettings = {
            target: `confettiCanvas${winner}`,
            max: '200',
            size: '3',
            animate: true
        };

        const confetti = new window.ConfettiGenerator(confettiSettings);
        confetti.render();
    }
});
