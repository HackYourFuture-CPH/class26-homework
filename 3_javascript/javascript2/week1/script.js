// Find the individual number and the total number of Danish letters in a string.

function lettersCount (danishString) {
    const count = danishString.match(/[æøå]/g); 

    if (!count) {
        return { total: 0 }; 
    }

    const result = count.reduce((acc, vowel) => {
        if (acc[vowel]) {
            acc[vowel]++;
        } else {
            acc[vowel] = 1;
        }
        return acc;
    }, {});

    result.total = count.length;

    return result;
}

let danishString = "Jeg har en blå bil";
console.log(lettersCount(danishString)); // output: {å: 1, total: 1}

let danishString2 = "Blå grød med røde bær";
console.log(lettersCount(danishString2)); // Output: {å: 1, ø: 2, æ: 1, total: 4}

// Create a page where a user writes his name in an input element. The user then clicks
// a button. The user will now receive a spirit animal name, fx Benjamin - The fullmoon wolf.
