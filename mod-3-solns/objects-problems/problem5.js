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
    if (a.title < b.title)                  //comparing the first and second elements insdie our objects;
      return -1;                              //if the condition met, will assign a 'place' to the element;
    if (a.title > b.title)             //comparing a new set of elements insdie our objects;
      return 1;                               //if the conditrion met, will assign another 'place' to the element;
    
    return 0;                          //if above comparsion already have a 'place', last item will take the last 'place';
}

console.log(books.sort(sortObj)); 