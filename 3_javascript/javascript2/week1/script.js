// Danish Letters
function countDanishLetters(inputString) {
     const danishLetters = ['å', 'æ', 'ø'];
    const counts = {};
    let total = 0;
  
    for (const char of inputString) {
      if (danishLetters.includes(char)) {
        counts[char] = (counts[char] || 0) + 1;
        total++;
      }
    }
  
    return { total, ...counts };
  }
  
  const danishString = "Jeg har en blå bil";
  console.log(countDanishLetters(danishString)); // returns { total: 1, å: 1 }

  const danishString2 = "Blå grød med røde bær";
  console.log(countDanishLetters(danishString2));
  