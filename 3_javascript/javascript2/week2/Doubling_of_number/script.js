let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers[i] = numbers[i] * 2;
  }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]

const doublingNumber = numbers
  .filter((number) => number % 2)
  .map((doble) => doble * 2);

console.log(`The doubled numbers are ${doublingNumber}`); // [2, 6]
