// script.js

const nameInput = document.getElementById('nameInput');
const generateButton = document.getElementById('generateButton');
const result = document.getElementById('result');
const newAnimalButton = document.getElementById('newAnimalButton');

const spiritAnimals = [
    'The Wise Owl',
    'The Swift Cheetah',
    'The Graceful Dolphin',
    'The Majestic Eagle',
    'The Playful Panda',
    'The Loyal Dog',
    'The Mysterious Fox',
    'The Powerful Tiger',
    'The Free-Spirited Horse',
    'The Tranquil Turtle'
];

let currentSpiritAnimal = '';

generateButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name !== '') {
        const randomIndex = Math.floor(Math.random() * spiritAnimals.length);
        currentSpiritAnimal = spiritAnimals[randomIndex];
        result.textContent = `Name: ${name}: ${name} - ${currentSpiritAnimal}`;
    } else {
        alert('Please enter your name before generating a spirit animal.');
    }
});


newAnimalButton.addEventListener('click', () => {
    if (currentSpiritAnimal !== '') {
        const randomIndex = Math.floor(Math.random() * spiritAnimals.length);
        currentSpiritAnimal = spiritAnimals[randomIndex];
        result.textContent = `Name: ${nameInput.value}: ${nameInput.value} - ${currentSpiritAnimal}`;
    } else {
        alert('Please generate a spirit animal first.');
    }
});

// Event type selection
const eventTypeSelect = document.getElementById('eventTypeSelect');
eventTypeSelect.addEventListener('change', () => {
    const selectedEvent = eventTypeSelect.value;
    
    if (selectedEvent === 'click') {
        generateButton.addEventListener('click', generateSpiritAnimal);
    } else if (selectedEvent === 'hover') {
        nameInput.addEventListener('mouseover', generateSpiritAnimal);
    } else if (selectedEvent === 'input') {
        nameInput.addEventListener('input', generateSpiritAnimal);
    }
});

function generateSpiritAnimal() {
    const name = nameInput.value.trim();
    if (name !== '') {
        const randomIndex = Math.floor(Math.random() * spiritAnimals.length);
        currentSpiritAnimal = spiritAnimals[randomIndex];
        result.textContent = `Name: ${name}: ${name} - ${currentSpiritAnimal}`;
    } else {
        alert('Please enter your name before generating a spirit animal.');
    }
}

