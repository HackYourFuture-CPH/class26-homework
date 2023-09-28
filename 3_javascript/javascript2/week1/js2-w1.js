////////////////////////////////////////Find and count the Danish letters

function countDanishVowels(str) {
    const vowels = { æ: 0, ø: 0, å: 0 };
    let total = 0;
  
    for (const char of str) {
      if (char in vowels) {
        vowels[char]++;
        total++;
      }
    }
  
    return { total, ...vowels };
  }
  
  const danishString = "Jeg har en blå bil";
  console.log(countDanishVowels(danishString)); // returns {total: 1, æ: 0, ø: 0, å: 1}
  
  const danishString2 = "Blå grød med røde bær";
  console.log(countDanishVowels(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}
  

  /////////////////////////////////2. Spirit animal name generator

  const spiritAnimals = [
    "The Fullmoon Wolf",
    "The Crying Butterfly",
    "The Majestic Eagle",
    "The Wise Owl",
    "The Playful Dolphin",
    "The Graceful Swan",
    "The Roaring Lion",
    "The Curious Fox",
    "The Swift Cheetah",
    "The Gentle Panda"
];

function generateSpiritAnimal() {
    const nameInput = document.getElementById("name");
    const resultElement = document.getElementById("result");

    const userName = nameInput.value;

    if (userName === "") {
        resultElement.textContent = "Please enter your name!";
        return;
    }

    const randomIndex = Math.floor(Math.random() * spiritAnimals.length);
    const spiritAnimal = spiritAnimals[randomIndex];

    resultElement.textContent = spiritAnimal;
}

document.getElementById("generate").addEventListener("click", generateSpiritAnimal);



