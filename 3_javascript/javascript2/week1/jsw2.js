// --> Find and count the Danish letters

function countDanishLetters(str) {
    // Create an object to store the number of letters
    const counts = {
        total: 0,
        æ: 0,
        ø: 0,
        å: 0,
    };

    // Using a regular expression to find Danish letters (æ, ø, å) in a string
    const danishLetters = str.match(/[æøå]/g);

    // If Danish letters are found, count their number
    if (danishLetters) {
        danishLetters.forEach((letter) => {
            counts.total++;
            counts[letter] = (counts[letter] || 0) + 1;
        });
    }

    // Removing zero values
    for (const key in counts) {
        if (counts[key] === 0) {
            delete counts[key];
        }
    }

    return counts;
}


const danishString = "Jeg har en blå bil";
console.log(countDanishLetters(danishString));

const danishString2 = "Blå grød med røde bær";
console.log(countDanishLetters(danishString2));



// --> 2. Spirit animal name generator//

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

// Function to generate a random spirit animal
function generateSpiritAnimal() {
    const randomIndex = Math.floor(Math.random() * spiritAnimals.length);
    return spiritAnimals[randomIndex];
}

// event listener for the "Generate Spirit Animal" button
generateButton.addEventListener('click', function () {
    const name = nameInput.value.trim();
    const selectedEvent = eventOption.value;

    if (name === '') {
        alert('Please enter your name.');
    } else {
        if (selectedEvent === 'click') {
            const spiritAnimal = generateSpiritAnimal();
            spiritAnimalResult.textContent = `Name: ${name}: ${name} - ${spiritAnimal}`;
        }
    }
});

// Event listener for input field (hover)
nameInput.addEventListener('mouseenter', function () {
    const name = nameInput.value.trim();
    const selectedEvent = eventOption.value;

    if (selectedEvent === 'hover') {
        if (name === '') {
            alert('Please enter your name.');
        } else {
            const spiritAnimal = generateSpiritAnimal();
            spiritAnimalResult.textContent = `Name: ${name}: ${name} - ${spiritAnimal}`;
        }
    }
});

// Event listener for input field (text input)
nameInput.addEventListener('input', function () {
    const name = nameInput.value.trim();
    const selectedEvent = eventOption.value;

    if (selectedEvent === 'input') {
        if (name === '') {
            alert('Please enter your name.');
        } else {
            const spiritAnimal = generateSpiritAnimal();
            spiritAnimalResult.textContent = `Name: ${name}: ${name} - ${spiritAnimal}`;
        }
    }
});

// event listener for button "Generate New Spirit Animal"
newAnimalButton.addEventListener('click', function () {
    const name = nameInput.value.trim();
    const selectedEvent = eventOption.value;

    if (name === '') {
        alert('Please enter your name.');
    } else {
        const spiritAnimal = generateSpiritAnimal();
        spiritAnimalResult.textContent = `Name: ${name}: ${name} - ${spiritAnimal}`;
    }
});