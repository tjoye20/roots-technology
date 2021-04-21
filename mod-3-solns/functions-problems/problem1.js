// Problem 1: Write a JavaScript function that accepts a string as a parameter and 
// find the longest word within the string. (Hint: use the “split” method and a “for” loop)

//using a for loop

function find_longest_word(str) {
  var array_of_words = str.split(" ");

  //let's use the first word in our array, as our current longest word.
  var longest_word = array_of_words[0];

  for(var i = 0 ; i < array_of_words.length ; i++) {
    if(longest_word.length < array_of_words[i].length) {
      longest_word = array_of_words[i];
    } 
  }

  return longest_word;
}

console.log(find_longest_word("find the longest word")); // longest


//using the forEach method

function find_longest_word(str) {
  var array_of_words = str.split(" ");

  //let's use the first word in our array, as our current longest word.
  var longest_word = array_of_words[0];

  array_of_words.forEach(function(word) {
    if(longest_word.length < word.length) {
      longest_word = word;
    }
  });

  return longest_word;
}