
## What is a parameter?
A named variable passed into a function and used to import arguments into functions.

## What is an argument?
Arguments are real values passed into functions. These are the list of values we pass into the function when we make a function call.

## What is a variable?
Variables are named storage locations used to store any value.

## What is a function?
A block of code that can be named and resused.

## How does an if/else statement work?
We first use the if statement to perform a block of code 'if' the condition is true. 'else' if the same condition is false to specify and run a block of code.

## What is the return keyword used for in JavaScript?
When used in a block of code the function is stopped and the specified value is returned to the function caller.

## What is the difference in scope between the VAR and LET variables?
VAR can be a global variables when declare outside of the function, and can be local variables when inside of the function, var can be re-declared and updates. LET is a block scoped variable and can only be updated but not re-decleard.

## What is a global variable?
Global variable means that any function can call it and any block of code can update or re-declare that variable.

## What is a string?
A string stores a series of characters within single or double quotes.

## What is an array?
An array is an ordered list with each value being an element specified by an index.

## What is an object?
An object is a standalone entity that holds multiple values in key/value pairs.

## What is the console?
A console is a command line interface in your browser that executes code.

## What does console log do?
logs out messages or outputs to a debugging console instead of displaying anything on the screen

## What is the difference between var, let, and const?
var is a global scoped variable that can be re-declared and updated within its scope. let and const. are block scoped. Let can be updated but not re-declared. const can be neither.

## What is hoisting in JavaScript?
hoisting is a mechanism where variables and function declarations are moved to the top of the scope.

## Because of hoisting, where should you declare all your variables?
At the beginning of each function.

## What is scope in JavaScript?
Scope refers to the current context of code.

## What is the difference between the local vs global scope in JavaScript?
Global scope means it can be defined anywhere in your Javascript code. Local will be visible only within the function where it is defined.

## What are two array methods that return a new array?
array.map() and array.filter()

## What are two string methods that return a new string?
slice() method replace() method

## What is the difference between double equals vs triple equals (== vs ===) and which is preferred?
double == checks for the equality of the value only. triple === checks for the same value and same type. Triple === equals is prefered to save you from bugs. do not use double == unless you have a strong case for it.

## How do you use JavaScript to find an element by it's ID? Give an example.
getElementById() method var x = document.getElementById("demo");

## How is truthiness determined in JavaScript?
All values are truthy unless they are defined as falsy (i.e., except for false , 0 , -0 , 0n , "" , null , undefined , and NaN )