//Find and count the Danish letters


function countDanishLetters(inputString) {
    
    const letterCount = {
      total: 0,
      æ: 0,
      ø: 0,
      å: 0
    };
  
    
    const lowercaseString = inputString.toLowerCase();
  
   
    for (let i = 0; i < lowercaseString.length; i++) {
     
      if (lowercaseString[i] === 'æ') {
        letterCount.æ++;
        letterCount.total++;
      } else if (lowercaseString[i] === 'ø') {
        letterCount.ø++;
        letterCount.total++;
      } else if (lowercaseString[i] === 'å') {
        letterCount.å++;
        letterCount.total++;
      }
    }
  
   
    return letterCount;
  }
  

  const danishString = "Jeg har en blå bil";
  const result1 = countDanishLetters(danishString);
  console.log(result1); // { total: 1, æ: 0, ø: 0, å: 1 }
  
  const danishString2 = "Blå grød med røde bær";
  const result2 = countDanishLetters(danishString2);
  console.log(result2); // { total: 4, æ: 1, ø: 2, å: 1 }
  

  //Spirit animal name generator

  const spiritAnimals = [
    "The Fullmoon Wolf",
    "The Crying Butterfly",
    "The Majestic Eagle",
    "The Wise Owl",
    "The Playful Dolphin",
    "The Roaring Lobster", 
    "The Killing Octopus", 
    "The Predatory Seagul",
    "The Ugly Duckling",
    "The Plumpy Cow",
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



  

