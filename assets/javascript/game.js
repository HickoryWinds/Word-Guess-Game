
    // the real code
// alert("Here it is!");
    // create words for game choices
    var wordList = ["cat", "dog", "aardvark"];
    // create letter choices
    // var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
    // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
    // =================================================================================
    var key_press = ""
    // 1. Create a for-loop to iterate through the letters array.
    // for (var i =0; i < letters.length; i++) {

        // Inside the loop...
    
        // 2. Create a variable named "letterBtn" equal to $("<button>");
        // var letterBtn = $("<button>");
        // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        // letterBtn.addClass( "letter-button", "letter", "letter-button-color");
        // 4. Then give each "letterBtn" an attribute called "data-letter", with a value eqaual to "letters[i]"
        // letterBtn.attr("data-letter", letters[i]);
        // 5. Then give each "letterBtn" a text equal to "letters[i]".
        // letterBtn.text(letters[i]);
        // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        // $("#buttons").append(letterBtn);
        // }
// MAJOR TASK #2: ATTACH ON-CLICK EVENTS TO "LETTER" BUTTONS
    // =================================================================================

    // 7. Create an "on-click" event attached to the ".letter-button" class.
    // $(".letter-button").on("click", function() {
        // Inside the on-click event...
        // 8. Create a variable called "fridgeMagnet" and set the variable equal to a new div.
        // var fridgeMagnet = $("<div>");
    
        // 9. Give each "fridgeMagnet" the following classes: "letter fridge-color".
        // fridgeMagnet.addClass("letter", "fridge-color");
        // 10. Then chain the following code onto the "fridgeMagnet" variable: .text($(this).attr("data-letter"))
        // fridgeMagnet.text($(this).attr("data-letter"));
        // 11. Lastly append the fridgeMagnet variable to the "#display" div (provided);
        // $("#array").append(fridgeMagnet);
        // $("#lrtIn").append(fridgeMagnet);


        // });
        // Be sure to test that your code works for this major task, before proceeding to the next one!
    
        // MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON
        // =================================================================================
    
        // 12. Create an "on-click" event attached to the "#clear" button id.
        $("#clear").on("click", function() {
    
        // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.
        $("#array").empty();
        })
        // Inside the on-click event...

// var runGame = true;
// $(document).keypress(function (event) {
    //check if runGame is true
    // if (runGame) {
        // set to keep keypress from resetting game
        // runGame = false;
        // create win lose counters
        winCount = 4;
        loseCount = 20;
        // randomly choose word for gameplay
         var word = wordList[Math.floor(Math.random() * wordList.length)];
        // alert(word);
        
        //create array of "_" for start of game
        var answerArr = [];
        for (var i = 0; i < word.length; i++) {
            answerArr[i] = "_"
            // update counters
            winCount = winCount += 1;
            loseCount = loseCount -= 1;
        }
        $("#blanks").text(answerArr);
        // document.getElementById("blanks").append(answerArr);
    // alert(answerArr);
        // print letters guessed
        $("lrtGuess").append(guess);
    // alert(userGuess);

    document.addEventListener("keydown", function(event) {
        console.log(event.which);
      })
        
        // set up variable to show number of remaining guesses and to control loop
        var guessesRem = word.length;
    // alert(word.length);
        // control loop
        while(guessesRem > 0) {
            var guess = prompt("Guess a letter");
            document.onkeydown = function(event){
                key_press = String.fromCharCode(event.keyCode);
                document.getElementById("kp").innerHTML = key_press;
            }
            // $("#kp").append(key_press);
            // var guess = event.key;
            // alert(guess);
            for (var j = 0; j < word.length; j++) {
                if (word[j] === guess) {
                    answerArr[j] = guess
                    guessesRem--;
                    // alert(answerArr);
                    $("#blanks").text(answerArr);
                }
            }
            $("#lrtIn").append(guess);
        }
         // change counts in spans
        document.getElementById("wCnt").innerHTML = winCount;
        document.getElementById("lCnt").innerHTML = loseCount;
        // print blanks for game start
        document.getElementById("guessRem").innerHTML = guessesRem;
        // $("#array").empty();
    // }
    // set to run on keypress
    runGame = true;
    // alert(runGame);
    // });

  
