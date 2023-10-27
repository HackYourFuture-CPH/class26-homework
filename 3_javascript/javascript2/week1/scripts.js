/// 1.2 Find and count the Danish letters ///

function countDanishLetters(inputString) {
  const danishLetters = {
    æ: 0,
    ø: 0,
    å: 0,
  };

  for (const char of inputString) {
    if (danishLetters[char]) {
      danishLetters[char]++;
    }
  }
  const total = Object.values(danishLetters).reduce(
    (acc, count) => acc + count,
    0
  );
  return { total, danishLetters };
}

/// Examples of what it returns ///
const danishString = 'Jeg har en blå bil';
countDanishLetters(danishString); // returns {total: 1, å: 1}

const danishString2 = 'Blå grød med røde bær';
<<<<<<< HEAD
countDanishLetters(danishString2);
=======
countDanishLetters(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}
>>>>>>> parent of 20fa6a7 (Feedback Modified)

/// 2. Spirit animal name generator ////

const nameInput = document.getElementById('nameInput');
const generateButton = document.getElementById('generateButton');
const spiritAnimalResult = document.getElementById('spiritAnimalResult');

const spiritAnimalString = [
  'The Strange Dog',
  'The Mockingbird',
  'The Graceful Swan',
  'The Mysterious Panther',
  'The Tranquil Turtle',
  'The Curious Squirrel',
  'The Loyal Elephant',
  'The Playful Dolphin',
  'The Soaring Hawk',
  'The Creative Chameleon',
];

generateButton.addEventListener('click', generateSpiritAnimal);

<<<<<<< HEAD
const triggerEvent = 'inputHover';
=======
>>>>>>> parent of 20fa6a7 (Feedback Modified)
function generateSpiritAnimal() {
  const userName = nameInput.value.trim();

  if (userName) {
    const randomIndex = Math.floor(Math.random() * spiritAnimalString.length);
    const spiritAnimalName = spiritAnimalString[randomIndex];
    spiritAnimalResult.textContent = `Your new spirit animal is: ${userName} - ${spiritAnimalName}`;
  } else {
    spiritAnimalResult.textContent =
      'Please enter your name before generating a spirit animal.';
  }
}
nameInput.addEventListener('mouseenter', () => {
  if (triggerEvent === 'inputHover') {
    generateSpiritAnimal();
  }
});
