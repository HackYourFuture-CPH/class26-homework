// Names options
const firstWords= ["Awesome","Great", "Radical ", "Holy", "Monster", "Rich", "Illegal", "Lawless", "Freak"];
const secondWords= ["Company", "Alliance", "Proyect", "Collaboration", "Cooperation", "Society", "Plan", "Civilization", "Coalition"];

//Random chooise system 
const randomFirstNumber = Math.floor(Math.random() * 9);
const randomSecondNumber = Math.floor(Math.random() * 9);

//Result + Counter
const startupName = firstWords[randomFirstNumber] + " " + secondWords[randomSecondNumber];
const letterCounter = startupName.length;

//Print
console.log(`The startup: "${startupName}" contains ${letterCounter} characters`);
