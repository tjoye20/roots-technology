# Module 3 Assessment

## What is a parameter?
A parameter is a named variable passed into a function and used to import arguments into functions.

## What is an argument?
Arguments are the real values passed into function parameters. These are the list of values we pass into the function when we make a function call.

## What is a variable?
Variables are named storage locations used to store any value.

## What is a function?
A block of code that can be named and resused.

## How does an if/else statement work?
We first use the if statement to execute a block of code 'if' the condition is true. We use 'else' to specify block of code to run when the condition is false.

## What is the return keyword used for in JavaScript?
The return keyword stops the function execution and returns the specified value to the function caller.

## What is the difference in scope between the VAR and LET variables?
VAR is scoped to the function while LET is scoped to the block ({ }).
VAR can be a global variable when declared outside of the function, and can be a local variable when inside of the function; var can also be re-declared and updates. 

LET is a block scoped variable and can only be updated but not re-decleard.

## What is a global variable?
A global variable is any variable declared outside of a function, which now gives every function access to it. You want to avoide declaring global variables because any block of code can update or re-declare that variable, which may make it hard for you to figure out what's actually setting the value of it.

## What is a string?
A string is a series of characters within single or double quotes. Ex.: "this is a string"

## What is an array?
An array is an ordered list with each value being an element specified by an index.

## What is an object?
An object is a standalone entity that holds multiple values in key/value pairs.

## What is the console?
The console is a command line interface in your browser that executes code.

## What does console log do?
logs out messages or outputs to a debugging console instead of displaying anything on the screen

## What is the difference between var, let, and const?
var is a function-scoped variable that can be re-declared and updated within its scope. let and const. are block scoped. let can be updated but not re-declared. const can be neither.

## What is hoisting in JavaScript?
Hoisting describes the default behavior of JavaScript to move all variable and function declarations to the top of the scope.

## Because of hoisting, where should you declare all your variables?
At the beginning of each function.

## What is scope in JavaScript?
Scope refers to the current context of the code, which determines what variables you have access to.

## What is the difference between the local vs global scope in JavaScript?
Local scope refers to the variables declared within the code block. Global scope refers to the variables declared outside of a block.

## What are two array methods that return a new array?
map() and filter()

## What are two string methods that return a new string?
slice(), concat(), and the replace() method.

## What is the difference between double equals vs triple equals (== vs ===) and which is preferred?
double == checks for the equality of the value only. triple === checks for the equality of the value and object type (string, integer, boolean, array, etc.) . Triple === equals is prefered to save you from bugs (errors). do not use double == unless you have a strong case for it.

## How do you use JavaScript to find an element by it's ID? Give an example.
getElementById() method. Ex.: let x = document.getElementById("demo"); or, the querySelector() method. Ex: document.querySelector("#demo")

## How is truthiness determined in JavaScript?
All values are truthy unless they are defined as falsy (Ex. of falsy values: false , 0 , -0 , 0n , "" , null , undefined , and NaN )
