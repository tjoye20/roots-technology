/*
Problem 5: Write a JavaScript function to sort the following array of objects by title value.
Hint: Read about the JavaScript sort method.
Example array: [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

*/


const books = [
    {author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    {author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    {author: 'Suzanne Collins', title: 'Mockingjay: The final Book of The Hunger Games', libraryID: 3245}
];

//code starts here

function sortObj (a, b) {
    //comparing the first and second elements inside our objects;
    if (a.title < b.title) {
    //if a is less than b, put a on the left side, which shows increasing order                  
      return -1;
    }                              
    else if (a.title > b.title) {             
      return 1;
    }
    else {
        return 0;
    }                               
}

console.log(books.sort(sortObj)); 