const spiritAnimals = [
    "The howling wolf",
    "The graceful eagle",
    "The wise owl",
    "The playful dolphin",
    "The majestic lion",
    "The mysterious black panther",
    "The free-spirited horse",
    "The curious fox",
    "The gentle deer",
    "The energetic hummingbird"
];

const nameInput = document.getElementById("nameInput");
const generateButton = document.getElementById("generateButton");
const resultElement = document.getElementById("result");

function getRandomSpiritAnimal() {
    const randomIndex = Math.floor(Math.random() * spiritAnimals.length);
    return spiritAnimals[randomIndex];
}

function generateSpiritAnimal() {
    const userName = nameInput.value.trim();
    if (userName === "") {
        alert("Please enter your name before generating a spirit animal.");
        return;
    }

    const spiritAnimal = getRandomSpiritAnimal();
    const result = `${userName} - ${spiritAnimal}`;
    resultElement.textContent = result;
}

generateButton.addEventListener("click", generateSpiritAnimal);

// Add event listeners for other event types
nameInput.addEventListener("input", generateSpiritAnimal);
nameInput.addEventListener("mouseenter", generateSpiritAnimal);