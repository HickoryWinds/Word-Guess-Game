// set global variable to determine if a new game has started
var newGame = true;

// listen for keypress to start game
document.addEventListener("keypress", processKeyPress, false);
// window.addEventListener("keydown", processKeyDown, false);

// alert(newGame);   

//------------------------
// define global variables
//------------------------


// var counter = 0;
// array of word choices
var wordList = ["cat", "dog", "aardvark"];

// select word from array
var word = ""

// alert(word);

var numberCorrect = 0;
// allows for 10 incorrect guesses before starting new game
var guessesRemaining = 0;
// counters for wins and losses
var winCount = 0;
var loseCount = 0;
// array for word chosen - will start as blanks
var answerArr = [];
// use in test to detemine if all correct letters chosen

// create blanks for word chosen
// for (var i = 0; i < word.length; i++) {
    //     answerArr[i] = "_"
    // }
    
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

            // alert(numberCorrect);
            // alert(word);

        // create blanks for word chosen after clearing area
        answerArr = [];
        for (var i = 0; i < word.length; i++) {
            answerArr[i] = "_"
        }

        // alert("it's true");
        guessesRemaining = 11;
        // counter = 0;
        // winCount = 0;
        // loseCount = 0;
        // display intial values
        // $("#message").text("Let's Play");
        $("#blanks").text(answerArr);
        $("#lrtIn").text("");
        // $("#winCnt").text(winCount);
        // $("#lossCnt").text(loseCount);
    } else {
        // test if condition test works; remove later
        // winCount = 1;

        // alert("here i am");

        // winCount += 1;
        // loseCount -= 1;
        // $("#winCnt").text(winCount);
        // $("#lossCnt").text(loseCount);
    }
} 

// function processKeyPress adds letter to choice list, checks value
// against letters in word chosen, and replaces blanks with correct letter
function processKeyPress(event) {
    intializeGame();
    newGame = false;

    // alert(newGame);

    // add how keypresses have been made
    // counter++;
    // $("#kp").text(counter);

    guessesRemaining--;
    // notify player about number guesses remaining
    $("#guessRem").text(guessesRemaining);

        // alert(guessesRemaining);
        
        if (guessesRemaining == 0) {
            // $("#message").text("Game Over!");
            loseCount += 1;
            $("#lossCnt").text(loseCount);
            // alert("Game Over");

            newGame= true;
            processKeyPress();

        } else {

            
            // add letter to choices made
            $("#lrtIn").append(String.fromCharCode(event.charCode));
            // loop to check key press against letters in word chosen
            for (var j = 0; j < word.length; j++) {
                // guessesRemaining--;
                
                // alert(guessesRemaining);
                
                // if (guessesRemaining == 0) {
                    //     alert("Game Over");
                    
                    if (word[j] === String.fromCharCode(event.charCode)) {
                        answerArr[j] = String.fromCharCode(event.charCode)
                        
                        // alert("word[j] "+word[j]);
                        
            // used to determine number of correct choices
            numberCorrect--;
            // alert("numberCorrect "+ numberCorrect);
            
            // replace blank with correct letter chosen
            $("#blanks").text(answerArr);
            
            // alert("j "+j);
            
            // function checkForEnd determines if all correct letters
            // have been chosen and set condition for new game
            if (numberCorrect == 0) {
                
                // alert(j);
                // $("#message").text("You Win!");
                newGame = true;
                // alert("You Win!");
                winCount += 1;
                $("#winCnt").text(winCount);
                processKeyPress();
            }
            
        }
    }

    }


}

