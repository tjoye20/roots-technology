/*
Problem 4: Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity). 
Example array: [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]

*/



function removeDuplicates(num) {
    var output = [];                                        //create an empty array as output value;
    var arrayItems = {};                                    //create an empty object to store array values;

    for (var i= 0; i< num.length; i++) {                    //use "for" loop to move everything inside object variable. use i++ to skip dublicated items;
        arrayItems[num[i]] = 0;                             //putting items in object will automatically goes in the ascending sorted order beacuse array values are intergers;
    }

    for (i in arrayItems) {
        output.push(i);                                     //log out our stored value one by one using .push;
    }
    return output;
}

console.log(removeDuplicates(myNumbers));                   //return [ '1', '2', '3', '4', '5', '6', '7', '8' ];


//rewrite remove duplicate items function;

function removeDuplicates(arr) {
    var arr1 = [];                                          //create an empty array to compare with the original array;
    for(let i = 0; i < arr.length; i++) {
        if(!arr1.includes(arr[i])) {                        //check to make sure out new array(arr1) is not include inside of our original array(arr);
            arr1.push(arr[i]);                              //if its not include inside our new array(arr1), use .push() to add the value into our new array(arr1);
        };
    };
    return arr1.sort(function (a, b) {                      //useing .sort() with a compare function to sort our array in an ascending order;
        return a - b;
    });
};

console.log(removeDuplicates(myNumbers));  