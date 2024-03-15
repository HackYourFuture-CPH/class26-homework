// avg.js

// Get the command line arguments excluding the first two (which are node and the script name)
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("You need to enter some numbers");
} else {
    // Check if all arguments are valid numbers
    const numbers = args.map(Number);
    const filteredNumbers = numbers.filter(num => !isNaN(num));

    if (filteredNumbers.length !== numbers.length) {
        console.log("Some arguments are not numbers. Please provide valid numbers.");
    } else {
        const average = calculateAverage(numbers);
        console.log(average);
    }
}

// Function to calculate the average of numbers
function calculateAverage(numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
    }
    return sum / numbersArray.length;
}