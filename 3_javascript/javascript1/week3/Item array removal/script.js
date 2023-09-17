const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "kristina";

function itemArrayRemoval(nameToRemove) {
  for (i = 0; i < names.length; i++) {
    if (names[i] === nameToRemove) {
      names.splice(i, 1);
    }
  }
}

itemArrayRemoval(nameToRemove);
console.log(names);
