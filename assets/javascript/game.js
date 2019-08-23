
    // the real code
alert("Here it is!");

$(document).keypress(function (event) {
    alert("Here we go!");
    // create work list
    var wordList = ["cat", "dog", "aardvark"];

    var winCount = document.getElementById("wCnt").textContent;
    alert(winCount);
    winCount = 10;

    var loseCount = document.getElementById("lCnt").textContent;
    alert(loseCount);
    loseCount = 10;

    for (var i = 0; i < wordList.length; i++) {
        //create p tag for each animal
        var listAnimal = $("<p>");
        // add class nifty to each p tag
        listAnimal.addClass("nifty");
        listAnimal.text(wordList[i]);
        $("#list").append(listAnimal);

        // update counters
        winCount.text = winCount +=1;
        loseCount.text = loseCount -= 1;
    }

    // change counts in spans
    document.getElementById("wCnt").innerHTML = winCount;
    document.getElementById("lCnt").innerHTML = loseCount;

});
