// Problem 1: Write a JavaScript function that accepts a string as a parameter and 
// find the longest word within the string. (Hint: use the “split” method and a “for” loop)

//using a for loop
function findLongestWord(str) {
  var arrayOfWords = str.split(" ");

  //you can use an empty string "" bc the length of it is 0
  //either way, you need a default word to start for your loop to compare
  //we need a value here to start with so we can use it to compare in our loop.

  var longestWord = "";

  for(var i = 0 ; i < arrayOfWords.length ; i++) {
    if(arrayOfWords[i].length > longestWord.length) {
      longestWord = arrayOfWords[i];
    } 
  }

  return longestWord;
}

console.log(findLongestWord("find the longest word")); // longest


//using the forEach method
function findLongestWord(str) {
  var arrayOfWords = str.split(" ");

  //let's use the first word in our array, as our current longest word.
  var longestWord = "";

  arrayOfWords.forEach(function(word) {
    if(word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

console.log(findLongestWord("find the longest word")); // longest
