/*
Problem 3: Create an object with three items in it, then write a JavaScript function that accepts an object and 
tells you the length (tells you how many items are in it) of the object.

*/

var car = {
    make : 'BMW',
    year : 2021,
    color : 'red'
};

//code starts here

Object.size = function(obj) {
    var size = 0, key;

    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };  
  
var size = Object.size(car);
console.log(size);//output 3;