// Problem 2: Write a JavaScript function that accepts a string as a parameter and counts the number 
// of vowels within the string. (Hint: use the “split” method, the Array#includes method, and a “for” loop).

// For loop
function vowelCount(str) {
  const arrayOfVowels = ["a", "e", "i", "o", "u"];
  let currentVowelCount = 0;
  //lowercase the words so they're the same case as vowels array,
  //then split into array of each letter
  const arrayOfLetters = str.toLowerCase().split("");
  
  for(let x = 0; x < arrayOfLetters.length; x++) {
    if (arrayOfVowels.includes(arrayOfLetters[x])) {
      currentVowelCount += 1;
    }
  }

  return currentVowelCount;
}

console.log(vowelCount("How many vowels do you see?"));


// forEach method
function vowelCount(str) {
  const arrayOfVowels = ["a", "e", "i", "o", "u"];
  let currentVowelCount = 0;
  //lowercase the words so they're the same case as vowels array,
  //then split into array of each letter
  const arrayOfLetters = str.toLowerCase().split("");

  arrayOfLetters.forEach(function(letter) {
    if (arrayOfVowels.includes(letter)) {
      currentVowelCount += 1;
    }
  });

  return currentVowelCount;
}

console.log(vowelCount("How many vowels do you see?"));
