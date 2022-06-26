var addBtn = document.getElementById("myBtn");
var userInput = document.getElementById("myInput");
var ul = document.querySelector("ul");


function createListElement (){
	var div = document.createElement("div");
	var li = document.createElement("li");
	var delBtn = document.createElement("button");
	div.classList.add("wrapper");
	ul.appendChild(div);
	div.append(li, delBtn);
	li.classList.add("items");
	li.appendChild(document.createTextNode(userInput.value));
	userInput.value = " ";
	delBtn.classList.add("delBtn");
	delBtn.innerHTML="Delete";
}

function userInputLength(){
	return userInput.value.length;
}

function addListAfterClick() {
	if (userInputLength() > 0) {
		createListElement();
	} else {
	alert("you must write something");
	}
} 

function addListAfterKeypress(event) {
	if (userInputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


function deleteListElement(object) {
	if (object.target.className === "delBtn"){
		object.target.parentElement.remove();
	}
}

function doneTask(task) {
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("checked");
		task.target.parentElement.classList.toggle("checked");
	}
}

function handleUlClick(object) {
	doneTask(object);
	deleteListElement(object);
}

ul.addEventListener("click", handleUlClick);

addBtn.addEventListener("click", addListAfterClick);

userInput.addEventListener("keypress", addListAfterKeypress);
