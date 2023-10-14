//1.2. Find and count the Danish letters
function countDanishLetters(inputString) {
    const danishLetters = "æøå";
    const letterCounts = {};

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (danishLetters.includes(char)) {
            if (letterCounts[char]) {
                letterCounts[char]++;
            } else {
                letterCounts[char] = 1;
            }
        }
    }

    let total = 0;
    const result = { total };

    for (const letter in letterCounts) {
        total += letterCounts[letter];
        result[letter] = letterCounts[letter];
    }

    return result;
}

const danishString = "Jeg har en blå bil";
console.log(countDanishLetters(danishString));

const danishString2 = "Blå grød med røde bær";
console.log(countDanishLetters(danishString2));

// 2. Spirit animal name generatorfind

function generateSpiritAnimalName() {
    const name = document.getElementById("nameInput").value;
    const spiritAnimals = [
        "The Fullmoon Wolf",
        "The Wise Owl",
        "The Mystic Panther",
        "The Majestic Eagle",
        "The Graceful Swan",
        "The Fierce Tiger",
        "The Playful Dolphin",
        "The Gentle Gazelle",
        "The Mysterious Fox",
        "The Loyal Dog"
    ];
    const randomSpiritAnimal = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
    const spiritAnimalName = name + " - " + randomSpiritAnimal;

    const spiritAnimalDiv = document.getElementById("spirit-animal");
    spiritAnimalDiv.innerText = spiritAnimalName;
}

document.getElementById("generateButton").addEventListener("click", generateSpiritAnimalName);

// 2.2. Setting up the events



const generateButton = document.getElementById("generateButton");
const spiritAnimalDiv = document.getElementById("spirit-animal");


function generateSpiritAnimalName() {
    
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value;

    
    if (name.trim() === "") {
        alert("Please enter your name before generating your spirit animal name.");
        return;
    }

    const spiritAnimals = [
        "The Fullmoon Wolf",
        "The Wise Owl",
        "The Mystic Panther",
        "The Majestic Eagle",
        "The Graceful Swan",
        "The Fierce Tiger",
        "The Playful Dolphin",
        "The Gentle Gazelle",
        "The Mysterious Fox",
        "The Loyal Dog"
    ];

    
    const randomSpiritAnimal = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
    const spiritAnimalName = `${name} - ${randomSpiritAnimal}`;

    spiritAnimalDiv.innerText = `Name: ${spiritAnimalName}`;
}


generateButton.addEventListener("click", generateSpiritAnimalName);








