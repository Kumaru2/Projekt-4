console.log("it works");
document.getElementById("kundebtn").onclick = function() {slideInKunde()};
function slideInKunde() {
  var win = document.getElementByClass("kundeslide");
  win.style.transition = "right 1s ease-in-out 0s";
	win.style.left = "0px";
}
