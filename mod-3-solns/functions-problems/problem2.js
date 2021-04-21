// Problem 2: Write a JavaScript function that accepts a string as a parameter and counts the number 
// of vowels within the string. (Hint: use the “split” method, the Array#includes method, and a “for” loop).

// For loop

function vowel_count(str) {
  var array_of_vowels = ["a", "e", "i", "o", "u"];
  var current_vowel_count = 0;
  var array_of_letters = str.split("");
  
  for(var x = 0; x < array_of_letters.length ; x++) {
    if (array_of_vowels.includes(array_of_letters[x])) {
      current_vowel_count += 1;
    }
  }

  return current_vowel_count;
}

console.log(vowel_count("How many vowels do you see?"));


// forEach method

function vowel_count(str) {
  var array_of_vowels = ["a", "e", "i", "o", "u"];
  var current_vowel_count = 0;
  var array_of_letters = str.split("");

  array_of_letters.forEach(function(letter) {
    if (array_of_vowels.includes(letter)) {
      current_vowel_count += 1;
    }
  });

  return current_vowel_count;
}