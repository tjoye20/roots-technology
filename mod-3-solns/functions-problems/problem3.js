// Write a JavaScript function that accepts two arguments, a string and a letter and 
// the function will count the number of occurrences of the specified letter within the string.

// For loop
function countLetter(str, letter) {
 var letterCount = 0;

 for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) {
      letterCount += 1;
    }
  }

  return letterCount;
}

console.log(countLetter('w3resource.com', 'o'));


// using forEach
function countLetter(str, letter) {
  var letterCount = 0;
  var arrayOfLetters = str.split("");

  arrayOfLetters.forEach(function(letter_in_array) {
    if(letter_in_array.toLowerCase() === letter.toLowerCase()) {
      letterCount += 1;
    }
  });

  return letterCount;
}

console.log(countLetter("Hi, how are you?", "a"));