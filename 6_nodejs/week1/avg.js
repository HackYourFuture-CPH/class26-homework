

const args = process.argv.slice(2);


if (args.length === 0) {
    console.log("No arguments provided. Please provide numbers as command line arguments.");
} else {
    const numbers = args.map(Number);

    const validNumbers = numbers.filter(num => !isNaN(num));

    if (validNumbers.length > 0) {

        const sum = validNumbers.reduce((acc, num) => acc + num, 0);
        const average = sum / validNumbers.length;

        console.log("Average:", average);
    } else {
        console.log("No valid numbers provided. Please provide numbers as command line arguments.");
    }
}
