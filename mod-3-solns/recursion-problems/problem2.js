// Problem 2: Write a JavaScript program to compute the sum of an array of integers. 

function sumArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  else {
    return arr.pop() + sumArray(arr);
  }
};

console.log(sumArray([1,2,3,4,5,6]));