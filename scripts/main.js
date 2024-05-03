var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/bird-art.jpg") {
    myImage.setAttribute("src", "images/worm-oioi.jpg");
  }
  else {
    myImage.setAttribute("src", "images/bird-art.jpg");
  }
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Введи пж свое имя.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Синяя птичка хороша, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
}
else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Синяя птичка хороша, " + storedName;
}

myButton.onclick = function () {
  setUserName();
}