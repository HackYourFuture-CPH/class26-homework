//Find and count the Danish letters

function countDanishLetters(inputString) {
  const danishLetters = {
    æ: 0,
    ø: 0,
    å: 0,
  };

  const lowercaseString = inputString.toLowerCase();

  for (const char of lowercaseString) {
    if (danishLetters.hasOwnProperty(char)) {
      danishLetters[char]++;
    }
  }

  const total = Object.values(danishLetters).reduce(
    (acc, count) => acc + count,
    0
  );

  const result = { total, ...danishLetters };

  return result;
}

const danishString = "Jeg har en blå bil";
const result1 = countDanishLetters(danishString);
console.log(result1);

const danishString2 = "Blå grød med røde bær";
const result2 = countDanishLetters(danishString2);
console.log(result2);



//Spirit animal name generator

document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generateButton");
  const spiritAnimalElement = document.getElementById("spiritAnimal");
  const newAnimalButton = document.getElementById("newAnimalButton");
  const eventSelector = document.getElementById("eventSelector");
  const generateEventButton = document.getElementById("generateEventButton");

  generateButton.addEventListener("click", function () {
    generateSpiritAnimal();
  });

  newAnimalButton.addEventListener("click", function () {
    generateSpiritAnimal();
  });

  generateEventButton.addEventListener("click", function () {
    const selectedEvent = eventSelector.value;
    if (selectedEvent === "click") {
      generateSpiritAnimal();
    }
  });

  document.getElementById("nameInput").addEventListener("input", function () {
    const selectedEvent = eventSelector.value;
    if (selectedEvent === "input") {
      generateSpiritAnimal();
    }
  });

  document
    .getElementById("nameInput")
    .addEventListener("mouseover", function () {
      const selectedEvent = eventSelector.value;
      if (selectedEvent === "hover") {
        generateSpiritAnimal();
      }
    });

  function generateSpiritAnimal() {
    const name = document.getElementById("nameInput").value;
    if (name) {
      const spiritAnimal = generateRandomSpiritAnimal();
      spiritAnimalElement.textContent = `${name} - ${spiritAnimal}`;
    } else {
      spiritAnimalElement.textContent = "Please enter your name first.";
    }
  }

  function generateRandomSpiritAnimal() {
    const spiritAnimals = [
      "The fullmoon wolf",
      "The crying butterfly",
      "The graceful unicorn",
      "The laughing narval",
      "The majestic lizard",
      "The awkward swan",
      "The grumpy cat",
      "The sad cheetah",
      "The cute kitten",
      "The energetic puppy",
    ];
    const randomIndex = Math.floor(Math.random() * spiritAnimals.length);
    return spiritAnimals[randomIndex];
  }
});

const newAnimalButton = document.getElementById("newAnimalButton");

newAnimalButton.addEventListener("click", function () {
  generateSpiritAnimal();
});