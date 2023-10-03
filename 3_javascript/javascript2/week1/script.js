// Danish Letters
function countDanishLetters(inputString) {
     const danishLetters = ['å', 'æ', 'ø'];
    const counts = {};
    let total = 0;
  
    for (const char of inputString) {
      if (danishLetters.includes(char)) {
        counts[char] = (counts[char] || 0) + 1;
        total++;
      }
    }
  
    return { total, ...counts };
  }
  
  const danishString = "Jeg har en blå bil";
  console.log(countDanishLetters(danishString)); // returns { total: 1, å: 1 }

  const danishString2 = "Blå grød med røde bær";
  console.log(countDanishLetters(danishString2));
   // spirit animal 
   const spiritAnimals = [
    "The Happy Bear",
    "The Dancing Fox",
    "The Curious Owl",
    "The Soaring Hawk", 
    "The Playful Dolphin", 
    "The Wise Elephant", 
    "The Loyal Dog", 
    "The Graceful Swan", 
    "The Energetic Cheetah", 
    "The Mysterious Panther"
];
const nameInput = document.getElementById("nameInput");
const generateBtn = document.getElementById("generateBtn");
const getResult = document.getElementById("result");


function getRandomSpiritAnimal() {
    const randomIndex = Math.floor(Math.random() * spiritAnimals.length);
    return spiritAnimals[randomIndex];
}
function generateSpiritAnimal() {
    const userName = nameInput.value.trim();
    if (userName === "") {
        alert("Please enter your name.");
        return;
    }

    const spiritAnimal = getRandomSpiritAnimal();
    const result = `${userName} - ${spiritAnimal}`;
    getResult.textContent = result;
}

generateBtn.addEventListener("click", generateSpiritAnimal);
