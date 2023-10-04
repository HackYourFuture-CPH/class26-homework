//Remove First and Last Character Part Two
function array(string) {
  let newArray = string.split(",");
  if (newArray.length > 2) {
    newArray.shift();
    newArray.pop();
    return newArray.join(" ");
  } else {
    return null;
  }
}
array("");
array("1");
array("A1,B2");
array("1,2,3");
array("1,2,3,4");
array("A1,B2,C3,D4,E5");
array("A,1,23,456,78,9,Z");

//Count all the sheep on farm in the heights of New Zealand
function lostSheep(friday, saturday, total) {
  let amountOfSheep = 0;
  friday.forEach((sheep) => {
    amountOfSheep += sheep;
  });
  /*for(let i = 0; i < friday.length; i++){
    amountOfSheep += friday[i];
  }*/
  saturday.forEach((sheep) => {
    amountOfSheep += sheep;
  });
  return total - amountOfSheep;
}

//Strings, strings, strings (Easy) (couldn't do this exercise)
//Evens and Odds
function even_or_odd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Find and count the Danish letters
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
console.log(countDanishVowels("Jeg har en blå bil"));
console.log(countDanishVowels("Blå grød med røde bær"));
/*
//the way I did but it was not showing all the vowels in the second string
const danishVowels = { æ: 0, ø: 0, å: 0 };
function danishLetters(vowels) {
  const obj = {};
  let total = 0;
  let æTotal = 0;
  let øTotal = 0;
  let åTotal = 0;
  let danishVowels = vowels.split("");
  for (let i = 0; i < danishVowels.length; i++) {
    if (danishVowels[i] === "æ") {
      total++;
      æTotal++;
    } else if (danishVowels[i] === "ø") {
      total++;
      øTotal++;
    } else if (danishVowels[i] === "å") {
      total++;
      åTotal++;
    } else if (åTotal > 0) {
      obj.å = åTotal;
    } else if (øTotal > 0) {
      obj.ø = øTotal;
    } else if (æTotal > 0) {
      obj.æ = æTotal;
    }
    obj.total = total;
  }

  return obj;
}
*/

//Spirit animal name generator
const animals = [
  "Dragon",
  "Phoenix",
  "Griffin",
  "Unicorn",
  "Sphinx",
  "Basilisk",
  "Hydra",
  "Chimera",
  "Kitsune",
  "Pegasus",
];

const adjectives = [
  "Mystical",
  "Enchanted",
  "Ethereal",
  "Legendary",
  "Mythical",
  "Magical",
  "Otherworldly",
  "Fantastic",
  "Sorcerous",
  "Whimsical",
];
let input = document.querySelector("input");
let button = document.querySelector("button");
button.innerText = "Click here to see your spirit animal";
let spiritNames = [];

function randomNumber() {
  return Math.floor(Math.random() * 10);
}

button.addEventListener("click", () => {
  let inputValue = input.value;
  if (inputValue != "") {
    let spiritName = `${inputValue} - The ${adjectives[randomNumber()]} ${
      animals[randomNumber()]
    }`;
    spiritNames.push(spiritName);
  } else {
    alert("Please enter a valid name");
  }

  document.querySelector("#spirit-names-container").innerHTML = ""; // Clear the previous names displayed

  // Display all the spirit names in the array
  spiritNames.forEach((name) => {
    let paragraph = document.createElement("p");
    paragraph.innerText = name;
    document.querySelector("#spirit-names-container").appendChild(paragraph);
  });
});
