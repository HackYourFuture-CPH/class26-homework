console.log("Hello World !!");

//1.2. Find and count the Danish letters




function findTheDanishLetters(inputString) {
    
    const lettersToFind = ["å", "ø", "æ"];

    const letterCounts = {};
    
    let totalDanishLettersCount = 0;

    const lowerCaseInput = inputString.toLowerCase();

   for (let index = 0; index < lowerCaseInput.length; index++) {
      const character = lowerCaseInput[index];
   
     if (lettersToFind.includes(character)) {
        totalDanishLettersCount++

        letterCounts[character] = (letterCounts[character] || 0) + 1;
     }
   }

   const result = { total: totalDanishLettersCount, letterCounts};

   return result;
    
}; 

const danishString = "Jeg har en blå bil";
console.log(findTheDanishLetters(danishString))

const danishString2 = "Blå grød med røde bær";
console.log(findTheDanishLetters(danishString2));


//2. Spirit animal name generator

const spiritAnimalNames = [
  "The Fullmoon Wolf",
  "The crying Butterfly",
  "The patient Ant",
  "The sharp Eagle",
  "The large Unicorn",
  "The wisdom Bee",
  "The Mystic Owl",
  "The Serene Swan",
  "The Graceful Gazelle",
  "The Wise Dolphin",
];

const input = document.getElementById("name");
const resultStatement = document.getElementById("result");
const button = document.getElementById("generate");
const newButton = document.getElementById("newAnimalGenerate");

function generateSpiritAnimalName(){

  const name = input.value.trim();

  if (name === "") {
      alert("Please enter your name.");
      return;
  }

  const randomIndex = Math.floor(Math.random() * spiritAnimalNames.length);
  const theSpiritAnimalName = spiritAnimalNames[randomIndex];

  resultStatement.textContent = `${name} - ${theSpiritAnimalName}`;
};

button.addEventListener("click", generateSpiritAnimalName)
newButton.addEventListener("click", generateSpiritAnimalName);



//3. hyfBay - get the okay'est products here 


