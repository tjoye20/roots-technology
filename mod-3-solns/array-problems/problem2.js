/*
Problem 2: Write a simple JavaScript program to join all elements of the following array into a string. 
Example array: var myColor = ["Red", "Green", "White", "Black"];

*/



var myColor = ["Red", "Green", "White", "Black"];           //example array;
console.log(myColor.toString());                            //Output Red,Green,White,Black; Use .toString() to join the items inside our array as one string;
console.log(myColor.join(","));                             //Output Red,Green,White,Black; Use .join() to join the items inside our array as one string, need to provide separator;
console.log(myColor.join("-"));                             //Output Red-Green-White-Black; Defalut means no separator which will connect everything inside the array together;


//using .toString() to join element together;

function joinElement(arr) {
    return arr.toString();
};

console.log(joinElement(myColor)); 