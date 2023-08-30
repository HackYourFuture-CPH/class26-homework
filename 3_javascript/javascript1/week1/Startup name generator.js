let firstWords=["Innovate",
"Nexa",
"Fusion",
"Tech",
"Vivid",
"Spark",
"Strive",
"Elevate",
"Shift",
"Nimbex"];
let secondWords=["Hub",
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

const startupName = firstWords.map((word, index) => word + " " + secondWords[index]);
console.log(startupName);
const totalCharacters = startupName.map(name => name.length);
console.log("The startup: " + startupName[0] + " " + "contains" + " "+ totalCharacters[0] + " " + "characters");
