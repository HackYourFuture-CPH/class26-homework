// Find and count the Danish letters
function danishLetters(vowels) {
  let obj = {};
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
console.log(danishLetters("Jeg har en blå bil"));
console.log(danishLetters("Blå grød med røde bær"));

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

function randomNumber() {
  return Math.floor(Math.random() * 10);
}
button.addEventListener("click", () => {
  let inputValue = input.value;
  if (inputValue != "") {
    let spiritName = `${inputValue} - The ${adjectives[randomNumber()]} ${
      animals[randomNumber()]
    }`;
    let paragraph = document.createElement("p");
    paragraph.innerText = spiritName;
    document.querySelector("body").append(paragraph);
  }
});
