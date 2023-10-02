//Find and count the Danish letters//
function countDanishLetters(inputString) {
    const danishLetters = { æ: 0, ø: 0, å: 0 }; // Initialize counts for each letter
    let total = 0; // Initialize total count
  
    // Loop through the characters in the input string
    for (const char of inputString) {
      // Check if the character is a Danish letter
      if (danishLetters.hasOwnProperty(char)) {
        danishLetters[char]++; // Increment the count for the specific letter
        total++; // Increment the total count
      }
    }
  
    // Create the result object
    const result = { total, ...danishLetters };
  
    return result;
  }
  
  const danishString = "Jeg har en blå bil";
  console.log(countDanishLetters(danishString)); // returns { total: 1, æ: 0, ø: 0, å: 1 }
  
  const danishString2 = "Blå grød med røde bær";
  console.log(countDanishLetters(danishString2)); // returns { total: 4, æ: 1, ø: 2, å: 1 }

  

  // Spirit animal name generator//

  //Setting up Events://

  // Get references to the input field, button, and the tag to display the spirit animal
const nameInput = document.getElementById('nameInput');
const generateButton = document.getElementById('generateButton');
const spiritAnimalTag = document.getElementById('spiritAnimal');

// Add an event listener to the button
generateButton.addEventListener('click', generateSpiritAnimal);

//Spirit Animal Part://

// Array of spirit animals
const spiritAnimals = [
    'The Agile Antelope',
    'The Playful Platypus',
    'The Daring Dingo',
    'The Wandering Wallaby',
    'The Swift Seahorse',
    'The Enchanting Eel',
    'The Vibrant Vulture',
    'The Whimsical Warthog',
    'The Mystical Meerkat',
    'The Jubilant Jellyfish',
    'The Artistic Aardvark',
    'The Harmonious Hummingbird',
    'The Radiant Rhinoceros',
    'The Cheerful Chimpanzee',
    'The Luminous Lemming'
];;

// Function to generate a random spirit animal name
function generateSpiritAnimal() {
    const userName = nameInput.value.trim();
    if (userName !== '') {
        const randomIndex = Math.floor(Math.random() * spiritAnimals.length);
        const spiritAnimal = spiritAnimals[randomIndex];
        spiritAnimalTag.textContent = `${userName} - ${spiritAnimal}`;
    }
}

//New Spirit Animal://
// Function to generate a new spirit animal on button click
generateButton.addEventListener('click', generateSpiritAnimal);


// Event Types - Optional and Tricky://

// Function to generate a new spirit animal on input hover
nameInput.addEventListener('mouseover', generateSpiritAnimal);

// Function to generate a new spirit animal on input text change
nameInput.addEventListener('input', generateSpiritAnimal);
