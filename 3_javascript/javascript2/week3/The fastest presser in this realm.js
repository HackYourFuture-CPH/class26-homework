let lCount = 0;
let sCount = 0;

document.getElementById("button").addEventListener("click", () => {
    let inputValue = document.getElementById("number").value;

    console.log("Input value: " + inputValue);

    setTimeout(() => {
        if (inputValue) {
            document.addEventListener("keypress", (e) => {
                const key = e.key.toLowerCase();
                if (key === "s") {
                    sCount++;
                    console.log("s was pressed");
                } else if (key === "l") {
                    lCount++;
                    console.log("l was pressed");
                }
            });
        } else {
            console.log("No input");
        }

        setTimeout(() => {
            if (sCount > lCount) {
                console.log("Player S wins with " + sCount + " S key presses!");
            } else if (lCount > sCount) {
                console.log("Player L wins with " + lCount + " L key presses!");
            } else {
                console.log("It's a tie!");
            }
        }, 1000 * inputValue);
    }, 1000 * inputValue);
});


// Confetti 
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
