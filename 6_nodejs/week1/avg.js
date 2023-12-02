//the average of numbers provided as command line arguments
let args = process.argv.slice(2);

// Convert the arguments to numbers and filter out any NaN values
let numbers = args.map(Number).filter((num) => !isNaN(num));

if (numbers.length === 0) {
  console.log('No numbers were provided');
} else {
  let sum = numbers.reduce((a, b) => a + b, 0);
  let avg = sum / numbers.length;
  console.log(avg);
}
