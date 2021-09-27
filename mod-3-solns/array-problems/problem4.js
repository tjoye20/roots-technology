/*
Problem 4: Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity). 
Example array: [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]
*/


function removeDuplicates(arr) {
    var uniqueValuesArray = [];

    for(let i = 0; i < arr.length; i++) {
        if(!uniqueValuesArray.includes(arr[i])) {
            uniqueValuesArray.push(arr[i]);
        };
    };
    return uniqueValuesArray;
};


const myNumbers = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]
console.log(removeDuplicates(myNumbers));  