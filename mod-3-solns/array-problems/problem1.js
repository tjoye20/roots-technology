/*
Problem 1: Write a JavaScript function that takes in two parameters, an array and a number (n), 
and return the first n elements of that array. (Example: If I pass in an array and the number 2, 
your function returns the first 2 elements in that array.)

*/

var carArray = ['BMW', 'Audi', 'Aston Martin', 'Honda', 'TOYOTA', 'Benz', 'Lexus'];
var foodArray = ['cheese', 'bread', 'beef', 'egg', 'pork', 'rice', 'ribs', 'pasta', 'chocolate', 'hot dog', 'potato'];


var getArrItems = function (array, n) {
    
    if(array == null && n==null)                                                    //check if a valid array and a valid number have been entered;
      return "Your input should be ('array','number'), please try again.";            //if not will return "Your input should be ('array','number'), please try again.";
    
    if(n < 0)                                                                       
      return "Please enter a positive value for n";            //check if the number that entered is greater than 0;

    if(n > array.length)                                                            //check if the number that entered is greater than the array length;
      return "We only have " + array.length + " items. Please try again.";

    return array.slice(0, n);                                                       //if all inputs are valid, will return the corresponding output;
    
}

console.log(getArrItems());                                                         //return Your input should be ('array','number'), please try again.;
console.log(getArrItems(carArray));                                                 //return Your input should be ('array','number'), please try again.;
console.log(getArrItems(carArray, -3));                                             //return Your input should be ('array','number'), please try again.;
console.log(getArrItems(carArray, 9));                                              //return We only have 7 items. Please try again.;
console.log(getArrItems(carArray, 3));                                              //return [ 'BMW', 'Audi', 'Aston Martin' ];
console.log(getArrItems(foodArray, 15));                                            //return We only have 11 items. Please try again.;
console.log(getArrItems(foodArray, 5));                                             // return [ 'cheese', 'bread', 'beef', 'egg', 'pork' ];