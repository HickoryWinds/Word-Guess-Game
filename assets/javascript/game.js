// set global variable to determine if a new game has started
var newGame = true;

// listen for keypress to start game
document.addEventListener("keypress", processKeyPress, false);
// window.addEventListener("keydown", processKeyDown, false);
alert(newGame);   
//------------------------
// define global variables
//------------------------


var counter = 0;
// array of word choices
var wordList = ["cat", "dog", "aardvark"];
// select word from array
var word = wordList[Math.floor(Math.random() * wordList.length)];

// ???????????????????????????
var key_press = ""
// counters for wins and losses
var winCount = 4;
var loseCount = 20;
// array for word chosen - will start as blanks
var answerArr = [];

// var guessesRem = wordList.length; remove later?

// create blanks for word chosen
for (var i = 0; i < word.length; i++) {
    answerArr[i] = "_"
}
// draw blanks for word chosen
// $("#blanks").text(answerArr);
$("#wCnt").text(winCount);
$("#lCnt").text(loseCount);


// function intializeGame sets variables for start of a new game
function intializeGame() {
    if (newGame) {
        alert("it's true");
        winCount = 0;
        loseCount = 0;
        // display intial values
        $("#blanks").text(answerArr);
        $("#lrtIn").text("");
        $("#wCnt").text(winCount);
        $("#lCnt").text(loseCount);
    } else {
        // test if condition test works; remove later
        // winCount = 1;
        alert("here i am");
        winCount += 1;
        loseCount -= 1;
        $("#wCnt").text(winCount);
        $("#lCnt").text(loseCount);
    }
} 

// function processKeyPress adds letter to choice list, checks value
// against letters in word chosen, and replaces blanks with correct letter
function processKeyPress(event) {
    intializeGame();
    newGame = false;
    alert(newGame);
    // add letter to choices made
    $("#lrtIn").append(String.fromCharCode(event.charCode));
    counter++;
    // add how keypresses have been made
    $("#kp").text(counter);
    // loop to check key press against letters in word chosen
    for (var j = 0; j < word.length; j++) {
        if (word[j] === String.fromCharCode(event.charCode)) {
            answerArr[j] = String.fromCharCode(event.charCode)
            
            // guessesRem not currently used; possible remove later
            // guessesRem--;
            // alert(guessesRem);

            // replace blank with correct letter chosen
            $("#blanks").text(answerArr);
            alert(j);

            // function checkForEnd determines if all correct letters
            // have been chosen and set condition for new game
            if (j > (word.length + 10)) {
                alert(j);
                newGame = true;
                alert(newGame);

            }
        }
    }
}

