const firstWords=["Innovate",
"Nexa",
"Fusion",
"Tech",
"Vivid",
"Spark",
"Strive",
"Elevate",
"Shift",
"Nimbex"];
const secondWords=["Hub",
"Nova",
"Wave",
"Zenith",
"Synergy",
"Loom",
"Core",
"Nova",
"Edge",
"Ventures"
];

const randomNumber = Math.floor(Math.random() * 10); // Generates a random number between 0 and 9

const randomIndex1 = randomNumber;
const randomIndex2 = randomNumber;

const startupName = `${firstWords[randomIndex1]} ${secondWords[randomIndex2]}`;
const numberOfCharacters = startupName.length;

console.log(`The startup: "${startupName}" contains ${numberOfCharacters} characters.`);

