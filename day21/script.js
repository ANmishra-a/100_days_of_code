var userInput = document.getElementById("userInput");
var button = document.getElementById("Enter");
var ul = document.querySelector("ul");

// listener added  to button event click (working) 
button.addEventListener("click", function(){
// fixed the empty input li problem  
if (userInput.value.length > 0) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value="";
    // blank input field after the enters are made.
}
 
    
})
// added kye press event to input field when pressed enter key(not working)
input.addEventListener("keypress", function(event) {
    if (userInput.value.length > 0 && event.keyCode ===13) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value="";
}});

