/*
Problem 2: Create an array of people objects with first name, last name, and age, 
then write a JavaScript program to display the first and last name of all the people.

*/


const people = [
    {
        firstName : 'John',
        lastName :   'Doe',
        age :  45
    },
    {
        firstName : 'Jane',
        lastName :   'White',
        age :  27
    },
    {
        firstName : 'Adam',
        lastName :   'Smith',
        age :  36
    },
    {
        firstName : 'Chris',
        lastName :   'Allen',
        age :  7
    },
    {
        firstName : 'Emily',
        lastName :   'Green',
        age :  12
    }
]
//example using #forEach. You can also use For loop in the same manner
function displayNameInfo(arrayOfObjects) {
    arrayOfObjects.forEach(function(a) {
        console.log(a.firstName + ' ' + a.lastName)
    });
}

displayNameInfo(people);