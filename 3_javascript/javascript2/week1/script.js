// Find the individual number and the total number of Danish letters in a string.

function lettersCount (danishString) {
    const count = danishString.match(/[æøå]/g); 

    if (!count) {
        return { total: 0 }; 
    }

    const result = count.reduce((acc, vowel) => {
        if (acc[vowel]) {
            acc[vowel]++;
        } else {
            acc[vowel] = 1;
        }
        return acc;
    }, {});

    result.total = count.length;

    return result;
}

let danishString = "Jeg har en blå bil";
console.log(lettersCount(danishString)); // output: {å: 1, total: 1}

let danishString2 = "Blå grød med røde bær";
console.log(lettersCount(danishString2)); // Output: {å: 1, ø: 2, æ: 1, total: 4}

// Create a page where a user writes his name in an input element. The user then clicks

const button = document.getElementById("spirit");
const newSpiritButton = document.getElementById("newSpirit");

let userName = null;
const spiritNames = [
    "The fullmoon wolf", 
    "The roaring lobster", 
    "The killing octopus", 
    "The predatory seagul",
    "The majestic eagle",
    "The ugly duckling",
    "The spiralling gondalla",
    "The plumpy cow",
    "The conniving monkey",
];

button.addEventListener("click", generateName);
newSpiritButton.addEventListener("click", generateSpiritAnimal);

function generateName(event) {
// What if the user clicks the generate new spirit animal and there is no text in the input?


    if (!userName) {
        userName = prompt("Please enter your name");
        if (!userName) return;
    }
    const randomSpirits = Math.floor(Math.random() * spiritNames.length);
    const randomName = spiritNames[randomSpirits];
    
    // Display the username and spirit animal
    const spiritNameElement = document.getElementById("spiritName");
    spiritNameElement.textContent = `Name: ${userName} - ${randomName}`;
}

function generateSpiritAnimal(event) {
    const randomSpirits = Math.floor(Math.random() * spiritNames.length);
    const randomName = spiritNames[randomSpirits];
    
    // Display only the spirit animal
    const spiritNameElement = document.getElementById("spiritName");
    spiritNameElement.textContent = `Name: ${randomName}`;
}