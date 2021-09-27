/*
Problem 3: Create an object with three items in it, then write a JavaScript function that accepts an object and 
tells you the length (tells you how many items are in it) of the object.

*/

const car = {
    make : 'BMW',
    year : 2021,
    color : 'red'
};


function findObjLength(obj) {
    return Object.keys(obj).length;
}


console.log(findObjLength(car));//output 3;