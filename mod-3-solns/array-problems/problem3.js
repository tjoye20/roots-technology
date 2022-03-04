/*
Problem 3: Write a JavaScript program to sort the items of an array. 
Example array: var arr1=[-3,8,7,6,5,-4,3,2,1];

*/


const arr1 = [-3,8,7,6,5,-4,3,2,1,23,16,66,178,235,5677,-14123,0,-44,-21];

function sortNumber(arr){
    return arr.sort(function(a,b){
        // look at the return values
        if (a < b) {
            return 1;
        }
        if(a > b) {
            return -1;
        }
        return 0;
    });
}

console.log(sortNumber(arr1)); 
