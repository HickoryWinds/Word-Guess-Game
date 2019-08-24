
    // the real code
    alert("Here it is!");
    var wordList = ["cat", "dog", "aardvark"];
    // create letter choices
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
    // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
    // =================================================================================

    // 1. Create a for-loop to iterate through the letters array.
    for (var i =0; i < letters.length; i++) {

        // Inside the loop...
    
        // 2. Create a variable named "letterBtn" equal to $("<button>");
        var letterBtn = $("<button>");
        // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        letterBtn.addClass( "letter-button", "letter", "letter-button-color");
        // 4. Then give each "letterBtn" an attribute called "data-letter", with a value eqaual to "letters[i]"
        letterBtn.attr("data-letter", letters[i]);
        // 5. Then give each "letterBtn" a text equal to "letters[i]".
        letterBtn.text(letters[i]);
        // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        $("#buttons").append(letterBtn);
        }
// MAJOR TASK #2: ATTACH ON-CLICK EVENTS TO "LETTER" BUTTONS
    // =================================================================================

    // 7. Create an "on-click" event attached to the ".letter-button" class.
    $(".letter-button").on("click", function() {

        // Inside the on-click event...
        // 8. Create a variable called "fridgeMagnet" and set the variable equal to a new div.
        var fridgeMagnet = $("<div>");
    
        // 9. Give each "fridgeMagnet" the following classes: "letter fridge-color".
        fridgeMagnet.addClass("letter", "fridge-color");
        // 10. Then chain the following code onto the "fridgeMagnet" variable: .text($(this).attr("data-letter"))
        fridgeMagnet.text($(this).attr("data-letter"));
        // 11. Lastly append the fridgeMagnet variable to the "#display" div (provided);
        $("#array").append(fridgeMagnet);
        });
        // Be sure to test that your code works for this major task, before proceeding to the next one!
    
        // MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON
        // =================================================================================
    
        // 12. Create an "on-click" event attached to the "#clear" button id.
        $("#clear").on("click", function() {
    
        // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.
        $("#array").empty();
        })
        // Inside the on-click event...


$(document).keypress(function (event) {
    alert("Here we go!");
    // create win lose counters
    winCount = 4;
    loseCount = 20;
    // create work list

    // var winCount = document.getElementById("wCnt").textContent;
    // alert(winCount);
    
    // var loseCount = document.getElementById("lCnt").textContent;
    // alert(loseCount);

    for (var i = 0; i < wordList.length; i++) {
        //create p tag for each animal
        var listAnimal = $("<p>");
        // add class nifty to each p tag
        listAnimal.addClass("nifty");
        listAnimal.text(wordList[i]);
        $("#array").append(listAnimal);

        // update counters
        winCount = winCount += 1;
        loseCount = loseCount -= 1;
    }

    // change counts in spans
    document.getElementById("wCnt").innerHTML = winCount;
    document.getElementById("lCnt").innerHTML = loseCount;
    document.getElementById("guessRem").innerHTML = wordList[0].length;


    // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
    // =================================================================================

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

    // Be sure to test that your code works for this major task, before proceeding to the next one!

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
    // });
    // Be sure to test that your code works for this major task, before proceeding to the next one!

    // MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON
    // =================================================================================

    // 12. Create an "on-click" event attached to the "#clear" button id.
    // $("#clear").on("click", function() {

    // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.
    // $("#array").empty();
    // })
    // Inside the on-click event...

  });

  
