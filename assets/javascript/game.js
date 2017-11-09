

console.log("hello world");

// the app randomly picks a letter



// and the user has to guess which letter the app chose. Put the following text on your page:

// Guess what letter I'm thinking of

// Wins: (# of times the user has guessed the letter correctly)

// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

// Guesses Left: (# of guesses left. This will update)

// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
    



    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = []; 
    // This array lists out all of the options (A-Z).
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l" ,"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //computer selects random letter
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // starting the function
//     function name(parameter1, parameter2, parameter3) {
//     code to be executed
// }
    function restartGame(){

        alert("new game"); //new game alert

        guessesLeft = 9;
        guessesSoFar = [];

        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    }




    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
        
        //capture user text

        userText = event.key;

       var userGuess = String.computerGuess(event.keyCode).toLowerCase(); //taking in user guess

        guessesSoFar.push(userGuess); //pushing user guess to guesses so far

        if (userGuess === computerGuess) {
            wins++;
            alert('Way to go! You\'ve guesesed corrrectly. You Won!');
            document.getElementById("wins").innerhtml = "Total Wins" + wins;
            restartGame();

        }
        else if (guessesLeft === 0){
            losses++;
            alert('You didn\'t guess the correct letter. You lost. Let\'s try again.');
            document.getElementById("losses").innerhtml = "Total Losses" + losses;
            restartGame();
        }
        else if (userGuess !== computerGuess){
            guessesLeft--; //decrementing the guesses left
            document.getElementById("guesses-left").innerhtml = "Guesses Left: " + guessesLeft;
            document.getElementById("your-guess").innerhtml = "Your Guesses so far: " + guessesSoFar;
        }  


     
        // Placing the html into the game

    };


        
