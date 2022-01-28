/*
Problem 2: Write a simple JavaScript program to join all elements of the following array into a string. 
Example array: var myColor = ["Red", "Green", "White", "Black"];

*/


 //example array;
const myColor = ["Red", "Green", "White", "Black"];          
console.log(myColor.toString());                            
console.log(myColor.join(","));                             


//using .toString() to join element together;
function joinElement(arr) {
    return arr.toString();
};

console.log(joinElement(myColor)); 