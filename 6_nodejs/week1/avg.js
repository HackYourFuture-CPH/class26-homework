// avg.js

// Extracting command-line arguments (excluding first two elements)
const args = process.argv.slice(2);

// Converting command-line arguments to numbers
const numbers = args.map(Number);

// Calculating the average
const sum = numbers.reduce((acc, num) => acc + num, 0);
const avg = sum / numbers.length;

// Displaying the result
console.log(avg);
