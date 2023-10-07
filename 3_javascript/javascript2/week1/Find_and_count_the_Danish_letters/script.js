/*
function danishCounter(string) {
  let aECounter = 0;
  let aOCounter = 0;
  let oCounter = 0;

  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    if (element === "æ") {
      aECounter++;
    } else if (element === "å") {
      aOCounter++;
    } else if (element === "ø") {
      oCounter++;
    }
  }

  const totalCounter = aECounter + aOCounter + oCounter;

  return {
    total: totalCounter,
    æ: aECounter,
    å: aOCounter,
    ø: oCounter,
  };
}*/

function danishCounter(string) {
  const vowels = { æ: 0, å: 0, ø: 0, total: 0 };

  for (const value of string) {
    const key = Object.keys(vowels).find((vowel) => vowel.includes(value));
    if (key) {
      vowels[key]++;
      vowels.total++;
    }
  }

  return vowels;
}

const danishString = "Jeg har en blå bil";
console.log(danishCounter(danishString));

const danishString2 = "Blå grød med røde bær";
console.log(danishCounter(danishString2));
