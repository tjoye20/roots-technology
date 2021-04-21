// Problem 2: Write a JavaScript program to compute the sum of an array of integers. 

function sum_array(my_array) {
  if (my_array.length === 1) {
    return my_array[0];
  }
  else {
    return my_array.pop() + sum_array(my_array);
  }
};

console.log(sum_array([1,2,3,4,5,6]));