/* Smoothly expand/hide additional info about websites when "Learn more" is clicked */

var learnMore = document.getElementsByClassName("learn-more");
var content = document.getElementsByClassName("collapsible-content");

for (var i = 0; i < learnMore.length; i++) {
  (function(index) {
    var button = learnMore[index];
    var panel = content[index];

    button.addEventListener("click", function() {
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        button.innerHTML = "Learn more &#9662;";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        button.innerHTML = "Learn more &#9652;";
      } 
    });
  })(i);
}

