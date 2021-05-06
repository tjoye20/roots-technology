const randomNumber = Math.floor(Math.random() * 101);
let tries = 3;

function numberGuessingGame() {
    let yourGuess = document.getElementById('guess').value;
    
    checkGuess(yourGuess);
    updateTries()
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        document.getElementById('answer').innerHTML = "WOW! You got it right!";
    }
    else if(guess < randomNumber) {
        document.getElementById('answer').innerHTML = "You entered " + guess + ", too low, try again!";
    }
    else if(guess > randomNumber) {
        document.getElementById('answer').innerHTML = "You entered " + guess + ", too high, try again!";
    }
}

function updateTries() {
    tries -= 1;

    document.getElementById('tries').innerHTML = "Your Tries: " + tries;

    if(tries < 0) {
        document.getElementById('tries').innerHTML = "You ran out of tries, the number you are looking for is: " + randomNumber + ". Press F5 to restart the game.";
    }
}