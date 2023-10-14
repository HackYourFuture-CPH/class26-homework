// --> Find and count the Danish letters

function countDanishLetters(inputString) {
    const danishLetters = { æ: 0, ø: 0, å: 0 };

    for (let char of inputString.toLowerCase()) { // Convert the character to lowercase to ensure case insensitivity
        if (danishLetters.hasOwnProperty(char)) {
            danishLetters[char]++;
        }
    }

    const totalDanishLetters = Object.values(danishLetters).reduce((acc, count) => acc + count, 0);

    return { total: totalDanishLetters, ...danishLetters };
}

const danishString = "Jeg har en blå bil";
console.log(countDanishLetters(danishString)); // {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
console.log(countDanishLetters(danishString2)); // {total: 4, æ: 1, ø: 2, å: 1}








//--> 2. Spirit animal name generator <--

// --> Getting references to DOM elements
const nameInput = document.getElementById('nameInput');
const generateButton = document.getElementById('generateButton');
const spiritAnimalResult = document.getElementById('spiritAnimalResult');
const newAnimalButton = document.getElementById('newAnimalButton');
const eventOption = document.getElementById('eventOption');

// Array with names of spirit animals
const spiritAnimals = [
    'The fullmoon wolf',
    'The wise owl',
    'The free-spirited dolphin',
    'The peaceful panda',
    'The adventurous eagle',
    'The curious cat',
    'The graceful gazelle',
    'The playful monkey',
    'The mysterious fox',
    'The gentle butterfly'
];

function handleSpiritAnimalGeneration() {
    const name = nameInput.value.trim();
    const selectedEvent = eventOption.value;

    if (name === '') {
        alert('Please enter your name.');
    } else {
        const spiritAnimal = generateSpiritAnimal();
        spiritAnimalResult.textContent = `Name: ${name}: ${name} - ${spiritAnimal}`;
    }
}

// Event listener for the "Generate Spirit Animal" button
generateButton.addEventListener('click', handleSpiritAnimalGeneration);

// Event listener for input field (hover)
nameInput.addEventListener('mouseenter', handleSpiritAnimalGeneration);

// Event listener for input field (text input)
nameInput.addEventListener('input', handleSpiritAnimalGeneration);

// Event listener for button "Generate New Spirit Animal"
newAnimalButton.addEventListener('click', handleSpiritAnimalGeneration);

// Function to generate a random spirit animal
function generateSpiritAnimal() {
    return spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
}


