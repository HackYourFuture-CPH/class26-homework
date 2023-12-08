

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('No numbers provided. Usage: node avg.js <num1> <num2> ...');
  process.exit(1); 
};


const numbers = args.map(Number); 
const validNumbers = numbers.filter(num => !isNaN(num)); 
const sum = validNumbers.reduce((acc, num) => acc + num, 0);
const average = sum / validNumbers.length;


if (validNumbers.length === 0) {
  console.log('No valid numbers provided.');
  process.exit(1); 
}

console.log(`Average: ${average}`);
