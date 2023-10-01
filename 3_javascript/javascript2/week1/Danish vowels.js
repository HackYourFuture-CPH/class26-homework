function countDanishLetters(inputString) {
   
    const danishLetters = ['å', 'æ', 'ø'];
    const letterCounts = {
      total: 0,
    };
     
    for (const char of inputString) {
      
      if (danishLetters.includes(char)) {
        letterCounts[char] = (letterCounts[char] || 0) + 1;
        letterCounts.total++;
      }
    }
  
    return letterCounts;
  }
  
  const danishString = "Jeg har en blå bil";
  console.log(countDanishLetters(danishString)); // returns { total: 1, å: 1 }
  
  const danishString2 = "Blå grød med røde bær";
  console.log(countDanishLetters(danishString2)); // returns { total: 4, æ: 1, ø: 2, å: 1 }