// wait until page loaded to start program
document.addEventListener('DOMContentLoaded', function() {

    // set global variable to determine if a new game has started
    var newGame = true;
    // variable to store keypress
    // put in placeholder for blanks
    // $("#blanks").text("");
    document.getElementById("blanks").innerHTML = "";
    // listen for keypress to start game
    // document.addEventListener("keyup", processKeyPress, false);
    // document.addEventListener("keydown", processKeyPress, false);
    document.addEventListener("keypress", processKeyPress, false);
    
    
    
    //------------------------
    // define global variables
    //------------------------
    
    // array of word choices
    var wordList = [ "aardvark", "bear", "cat", "coyote", "deer", "dog", "fox", "horse", "kangaroo", "koala", "lion", "pig", "wolf"];
    // for testing
    // var wordList = [ "aardvark", "cat", "koala"];
    // select word from array
    var word = "asdfrewq";
    // variable used to check for double counting
    var oldLetter = "_";
    console.log("oldLetter def " + oldLetter);
    // variable to decrement when correct choice made
    var numberCorrect = 0;
    // allows for 15 incorrect guesses before starting new game
    var guessesRemaining = 15;
    document.getElementById("guessRem").innerHTML = guessesRemaining;
    
    // counters for wins and losses
    var winCount = 0;
    var loseCount = 0;
    // array for word chosen - will start as blanks
    var answerArr = [];
    // var to use in letter comparison test
    var j = 0;
    // store keypress in key variable
    var key = "";
    
    //vars for appending guesses see line 163
    // var node = document.createElement("P");
    var guessArr = ["?"];
    // put guessArr into ltrIn span
    document.getElementById("lrtIn").innerHTML = guessArr;
    
    
    // fill in win and loss counters
    // $("#winCnt").text(winCount);
    document.getElementById("winCnt").innerHTML = winCount;
    // $("#lossCnt").text(loseCount);
    document.getElementById("lossCnt").innerHTML = loseCount;
        
    
    // blankGen creates blanks for word chosen after clearing area
    function blankGen(word) {
        answerArr = [];
        for (var i = 0; i < word.length; i++) {
            answerArr[i] = "_"
        }    
    }
    
    // intializeGame sets variables for start of a new game
    function intializeGame() {
        if (newGame) {
            // select word from array
            word = wordList[Math.floor(Math.random() * wordList.length)];
            //counter used for correct guesses
            numberCorrect = word.length;
            blankGen(word);
            // number of guesses is 15 reduced by one by initial key press
            guessesRemaining = 14;
            // display intial values
            // $("#blanks").text(answerArr);
            document.getElementById("blanks").innerHTML = answerArr;
            // document.getElementById("#blanks").innerHTML = answerArr;
            // $("#lrtIn").text("");
            document.getElementById("lrtIn").innerHTML = "";
            // document.getElementById("#ltrIn").innerHTML = "";
            // set oldLetter to initial value
            oldLetter = key;
            // set array to starting value
            guessArr = ["?"];
            // set key to blank
            key = String.fromCharCode(32);
        }
    }
     // checks to see if input is a letter
    function charCheck(key) {
        if ((key.charCodeAt(0) > 64 &&  key.charCodeAt(0) < 81) || (key.charCodeAt(0) > 96 && key.charCodeAt(0) < 123)) {
            return key;
        } else {
            // if not a letter return null value
            return null;
        }
    }
    
    // multCharCheck looks for repeated entries of same character and
    // stops counting after same character guessed twice
    function multCharCheck(oldLetter, word, key) {
        // test for repeated choices
        if (oldLetter != key.toLowerCase()) {
            oldLetter = key;
            // reduce guessesRemaining for each non repeated choice made
            guessesRemaining--;
            // loop to check key press against letters in word chosen
            // for (j = 0; j < word.length; j++) {
            corCheck(word, key);
            // }
        }
    }
    
    // corCheck looks for guesses that match word chosen using a loop
    function corCheck(word, key) {
        for (j = 0; j < word.length; j++) {
            // check if character typed in matches a letter of word chosen
            if (word[j] === key.toLowerCase()) {
                answerArr[j] = key;
                // used to determine number of correct choices
                numberCorrect--;
                // replace blank with correct letter chosen
                document.getElementById("blanks").innerHTML = answerArr;
                checkForEnd(numberCorrect);
            }
        }
    }
    
    // gameOver tests for guesses = 0 when all the correct
    // letters have NOT been chosen so loss increases by 1 and game
    // starts over
    function gameOver(guessesRemaining) {
        if (guessesRemaining === 0) {
            loseCount += 1;
            // update loss score
            document.getElementById("lossCnt").innerHTML = loseCount;
            //show correct word
            document.getElementById("blanks").innerHTML = word;
            // resets defaults
            newGame= true;
            // use onclick event so no characer prints
            processKeyPress(onclick);
        }
    }
    
    // checkForEnd determines if all correct letters
    // have been chosen and set condition for new game
    function checkForEnd(numberCorrect){
        if (numberCorrect === 0) {
            // resets defaults
            oldLetter = "";
            newGame = true;
            winCount += 1;
            document.getElementById("winCnt").innerHTML = winCount;
            // use onclick event so no character prints
            processKeyPress(onclick);
        }
    }
    
    // function processKeyPress adds letter to choice list, checks value
    // against letters in word chosen, and replaces blanks with correct letter
    function processKeyPress(event) {
        // get charCode from keypress    
        key = String.fromCharCode(event.charCode);
        // check to see if character entered is a letter
        var useKey = charCheck(key);
        console.log("this is the useKey " + useKey)
        intializeGame();
        newGame = false;
        // test for repeated choices
        // notify player about number guesses remaining
        document.getElementById("guessRem").innerHTML = guessesRemaining;
        // continue game if key press is a letter
        if (useKey != null) {
            document.getElementById("startUp").innerHTML = ("Good Luck!");
            // if player runs out of guesses, increase loss by one and start
            gameOver(guessesRemaining);
            // add letter guessed to list
            guessArr.push(useKey);
            document.getElementById("lrtIn").innerHTML = guessArr;
            multCharCheck(oldLetter, word, useKey);
            oldLetter = useKey;
        } else {
            // warn user to use letter key
            guessArr.push("?");
            document.getElementById("lrtIn").innerHTML = guessArr;
            document.getElementById("startUp").innerHTML = ("Select a Letter Key");
        }
        
    }
}, false);
    
