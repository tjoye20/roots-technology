// Problem 4: Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function isPalindrome(str) {
    var regex = /[^A-Za-z0-9]/g;                                                //set up our regular expression that will do a global(g modifier) search for the character-span that is not from A-Z, a-z, and 0-9;
    var updatedString = str.toLowerCase().replace(regex, "");                        //set our string to lower case and remove anything that is not from A-Z, a-z, and 0-9 replace with an empty quotation mark("");
    var reversedString = updatedString.split("").reverse().join("");               //split our string, reverses it and join back together for comparsion;
    return updatedString === reversedString;                                       //check to see if our string is palindrome, returns true or false value;
}

console.log(isPalindrome("Was it a car or a cat I saw?"));