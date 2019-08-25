    
// keep this?
$("#clear").on("click", function() {
   $("#array").empty();
   })
// define global variables
var counter = 0;
var wordList = ["cat", "dog", "aardvark"];
var word = wordList[Math.floor(Math.random() * wordList.length)];
var key_press = ""
var winCount = 4;
var loseCount = 20;
var answerArr = [];
var guessesRem = 20;
// create blanks for word chosen
for (var i = 0; i < word.length; i++) {
    answerArr[i] = "_"
}
// draw blanks for word chosen
$("#blanks").text(answerArr);
$("#wCnt").text(counter);
$("#lCnt").text(counter);
    
    // listen for keypress to start game
    document.addEventListener("keypress", processKeyPress, false);
    // window.addEventListener("keydown", processKeyDown, false);
    
    // function processKeyPress adds letter to choice list, checks value
    // against letters in word chosen, and replaces blanks with correct letter
    function processKeyPress(event) {
        // add letter to choices made
        $("#lrtIn").append(String.fromCharCode(event.charCode));
        counter++;
        // add how keypresses have been made
        $("#kp").text(counter);
        // loop to check key press against letters in word chosen
        for (var j = 0; j < word.length; j++) {
            if (word[j] === String.fromCharCode(event.charCode)) {
                answerArr[j] = String.fromCharCode(event.charCode)
                guessesRem--;
                // replace blank with correct letter chosen
                $("#blanks").text(answerArr);
            }
        }
    }
    
    // update counters
    winCount = winCount += 1;
    loseCount = loseCount -= 1;
    $("#wCnt").text(winCount);
    $("#lCnt").text(loseCount);