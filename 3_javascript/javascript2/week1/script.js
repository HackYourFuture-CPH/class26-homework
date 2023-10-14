// JavaScript
document.getElementById('generateButton').addEventListener('click', function () {
    const name = document.getElementById('nameInput').value;
    // Call a function to generate and display the spirit animal name
    generateSpiritAnimalName(name);
});

const spiritAnimals = [
    "The Wise Owl",
    "The Brave Lion",
    "The Curious Fox",
    "The Playful Dolphin",
    "The Strong Bear",
    "The Graceful Gazelle",
    "The Gentle Panda",
    "The Free Spirit Horse",
    "The Mystical Wolf",
    "The Colorful Peacock"
];

function generateSpiritAnimalName(name) {
    const randomSpiritAnimal = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
    const spiritAnimalName = name + " - " + randomSpiritAnimal;
    document.getElementById('spiritAnimalName').textContent = "Spirit Animal Name: " + spiritAnimalName;
}


document.getElementById('newAnimalButton').addEventListener('click', function () {
    generateSpiritAnimalName(document.getElementById('nameInput').value);
});


document.getElementById('generateButton').addEventListener('click', function () {
    const name = document.getElementById('nameInput').value;
    if (name) {
        generateSpiritAnimalName(name);
    } else {
        alert("Please enter your name before generating a spirit animal.");
    }
});

// Event listeners for different options
document.getElementById('generateButton').addEventListener('click', function () {
    const name = document.getElementById('nameInput').value;
    if (name) {
        generateSpiritAnimalName(name);
    }
});

document.getElementById('nameInput').addEventListener('input', function () {
    const name = document.getElementById('nameInput').value;
    if (name) {
        generateSpiritAnimalName(name);
    }
});

document.getElementById('nameInput').addEventListener('mouseover', function () {
    const name = document.getElementById('nameInput').value;
    if (name) {
        generateSpiritAnimalName(name);
    }
});

//

