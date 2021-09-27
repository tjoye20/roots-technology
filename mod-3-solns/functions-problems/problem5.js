// Problem 5: Write a JavaScript program which iterates the integers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number and for the multiples 
// of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

function fizzBuzz(){
  for(let i = 1; i <= 100; i++){
    let word = ""; //to reduce conditionals, we can construct the word & check two things instead of three.

    if (i % 3 ===0){                           
      word += "Fizz";
    }
    if (i % 5 ===0){                    
      word += "Buzz";
    }

    console.log(i, word);  
  }
}

fizzBuzz();