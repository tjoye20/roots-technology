// Problem 1: Write a JavaScript function that accepts a string as a parameter and 
// find the longest word within the string. (Hint: use the “split” method and a “for” loop)

//using a for loop
function findLongestWord(str) {
  const arrayOfWords = str.split(" ");

  //you can use an empty string "" bc the length of it is 0,
  //or you can use the first word, or any random word in the arrayOfWords.

  //point is, you need a default reference point for your loop to compare with
  //we need a value here to start with so we can use it to compare in our loop.

  let longestWord = "";

  for(let i = 0 ; i < arrayOfWords.length ; i++) {
    if(arrayOfWords[i].length > longestWord.length) {
      longestWord = arrayOfWords[i];
    } 
  }

  return longestWord;
}

console.log(findLongestWord("find the longest word")); // longest


//using the forEach method
function findLongestWord(str) {
  const arrayOfWords = str.split(" ");
  let longestWord = "";

  arrayOfWords.forEach(function(word) {
    if(word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

console.log(findLongestWord("find the longest word")); // longest
