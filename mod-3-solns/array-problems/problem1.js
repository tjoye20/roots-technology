/*
Problem 1: Write a JavaScript function that takes in two parameters, an array and a number (n), 
and return the first n elements of that array. (Example: If I pass in an array and the number 2, 
your function returns the first 2 elements in that array.)

*/

var foodArray = ['cheese', 'bread', 'beef', 'egg', 'pork', 'rice', 'ribs', 'pasta', 'chocolate', 'hot dog', 'potato'];


var getArrItems = function (array, num) {
    
    if(array === null || num === null)  //check if a valid array and a valid number have been entered;
      return "Your input should be ('array','number'), please try again.";            //if not will return "Your input should be ('array','number'), please try again.";
    
    if(num < 0) //check if the number that entered is greater than 0;                                 
      return "Please enter a positive value for num";

    if(num > array.length)  //check if the number that entered is greater than the array length;
      return "We only have " + array.length + " items. Please try again.";

    return array.slice(0, num);                                                       //if all inputs are valid, will return the corresponding output;
    
}

//return Your input should be ('array','number'), please try again.;
console.log(getArrItems(foodArray, -3));     //return Your input should be ('array','number'), please try again.;
console.log(getArrItems(foodArray, 9));     // return [ 'cheese', 'bread', 'beef', 'egg', 'pork' ];