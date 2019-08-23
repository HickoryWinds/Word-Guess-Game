
$(document).keypress(function (event) {// test link to index
alert("I'm here! Do you see me.");

// replace span id="space" with text on click
document.getElementById("space").innerHTML = "Space Filler";


// add letter buttons


// test code for dom usage
// Inside, we latch onto the "emptyDiv" using the JavaScript ".getElementById" selector.
var targetDiv = document.getElementById("empty-div");

// We then use the JavaScript method ".textContent" to change the content to "Hello friends!"
targetDiv.textContent = "Hello friends!";

// create variable to latch onto div element using .getElementById("id=name")
var grabText = document.getElementById("newText");
// use js .textContent method to change contents of div
grabText.textContent = "Making it work!";


// make new div to add on content
var moreText = document.createElement("div"); 
// set id attribute for new div - need to use targetDiv?
// moreText.setAttribute("id","anotherDiv");
// better code?
document.getElementsByTagName("div")[0].setAttribute("id", "anotherDiv");
// add text to new div
moreText.textContent = "More to come.";
// insert additional text into new div
anotherDiv.appendChild(moreText);

// use some styling on new text
moreText.setAttribute("class", "nifty");

//
var oneMoreTime = document.getElementById("recentText");
recentText.textContent = "What will this do?";
});

// the real code