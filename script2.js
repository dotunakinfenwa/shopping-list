var colorReturn = document.getElementById("colorReturn");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.querySelector("body");

function changeColor(){
	body.style.background = "linear-gradient(to right, " + color1.value +", " + color2.value +")";
	colorReturn.textContent = body.style.background + "; "
}

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);