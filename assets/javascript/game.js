// set global variable to determine if a new game has started
var newGame = true;

// listen for keypress to start game
document.addEventListener("keypress", processKeyPress, false);


//------------------------
// define global variables
//------------------------


// array of word choices
var wordList = ["cat", "dog", "aardvark"];

// select word from array
var word = ""


var numberCorrect = 0;
// allows for 10 incorrect guesses before starting new game
var guessesRemaining = 0;
// counters for wins and losses
var winCount = 0;
var loseCount = 0;
// array for word chosen - will start as blanks
var answerArr = [];
// use in test to detemine if all correct letters chosen

    // draw blanks for word chosen
    // $("#blanks").text(answerArr);
    $("#winCnt").text(winCount);
    $("#lossCnt").text(loseCount);
    
    
    // function intializeGame sets variables for start of a new game
    function intializeGame() {
        if (newGame) {
            // select word from array
            word = wordList[Math.floor(Math.random() * wordList.length)];
            numberCorrect = word.length; // remove later?

        // create blanks for word chosen after clearing area
        answerArr = [];
        for (var i = 0; i < word.length; i++) {
            answerArr[i] = "_"
        }

        guessesRemaining = 11;
        // display intial values
        $("#blanks").text(answerArr);
        $("#lrtIn").text("");
    }
    //  else {
        // test if condition test works; remove later
        // winCount = 1;

        // alert("here i am");

        // winCount += 1;
        // loseCount -= 1;
        // $("#winCnt").text(winCount);
        // $("#lossCnt").text(loseCount);
    // }
} 

// function processKeyPress adds letter to choice list, checks value
// against letters in word chosen, and replaces blanks with correct letter
function processKeyPress(event) {
    intializeGame();
    newGame = false;
    // reduce guessesRemaining for each choice made
    guessesRemaining--;
    // notify player about number guesses remaining
    $("#guessRem").text(guessesRemaining);

        // if player runs out of guesses, increase loss by one and start
        // game over with processKeyPress
        if (guessesRemaining == 0) {
            loseCount += 1;
            $("#lossCnt").text(loseCount);
            // resets defaults
            newGame= true;
            // use onclick event so no characer prints
            processKeyPress(onclick);

        // when players had guesses remaining, play the game
        } else {
            
            // add letter to choices made
            $("#lrtIn").append(String.fromCharCode(event.charCode));

            // loop to check key press against letters in word chosen
            for (var j = 0; j < word.length; j++) {
                    
                    // run loop to check if character typed in matches a letter
                    if (word[j] === String.fromCharCode(event.charCode)) {
                        answerArr[j] = String.fromCharCode(event.charCode)
                        
                        // used to determine number of correct choices
                        numberCorrect--;
                        // replace blank with correct letter chosen
                        $("#blanks").text(answerArr);

                            // function checkForEnd determines if all correct letters
                            // have been chosen and set condition for new game
                            if (numberCorrect == 0) {
                                // resets defaults
                                newGame = true;
                                winCount += 1;
                                $("#winCnt").text(winCount);
                                // use onclick event so no characer prints
                                processKeyPress(onclick);
                            }
            
                    }
            }

    }


}

