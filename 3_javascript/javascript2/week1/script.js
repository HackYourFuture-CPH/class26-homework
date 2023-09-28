// --> Find and count the Danish letters

function countDanishLetters(str) {
    // Create an object to store the number of letters
    const counts = {
        total: 0,
        æ: 0,
        ø: 0,
        å: 0,
    };

    // Using a regular expression to find Danish letters (æ, ø, å) in a string
    const danishLetters = str.match(/[æøå]/g);

    // If Danish letters are found, count their number
    if (danishLetters) {
        danishLetters.forEach((letter) => {
            counts.total++;
            counts[letter] = (counts[letter] || 0) + 1;
        });
    }

    // Removing zero values
    for (const key in counts) {
        if (counts[key] === 0) {
            delete counts[key];
        }
    }

    return counts;
}


const danishString = "Jeg har en blå bil";
console.log(countDanishLetters(danishString));

const danishString2 = "Blå grød med røde bær";
console.log(countDanishLetters(danishString2));



