/*
Problem 3: Write a JavaScript program to sort the items of an array. 
Example array: var arr1=[-3,8,7,6,5,-4,3,2,1];

*/


var arr1 = [-3,8,7,6,5,-4,3,2,1,23,16,66,178,235,5677,-14123,0,-44,-21];

function sortNumber(arr){
    arr.sort(function(a,b){            //using .sort() method with a compare function will get the correct result;
        return a - b                    //using a-b to tell our function to sort our value numerically and not as a string;
    });
    return arr;
}

console.log(sortNumber(arr1)); 