// Add your code here
const input = document.querySelector("input");
let searchArray = [];
//const mainTextArray = cleanText();
let paragraph = document.querySelector("#paragraph");

let text = document.getElementById("paragraph").innerHTML.toLowerCase();
input.addEventListener("keydown", handleKeyDown);

function handleKeyDown(e) {
  if (e.key === "Backspace") {
    e.target.value = "";
    searchArray = [];
  } else if (e.key === "Shift") {
    let searchStr = searchArray.toString();
    searchStr = searchStr.replaceAll(",", "");
    findMatch(searchStr);
  } else {
    searchArray.push(e.key);
  }
}

function findMatch(searchStr) {
  text = text.replaceAll(
    searchStr,
    "<span class='highlight'>" + searchStr + "</span>"
  );
  paragraph.innerHTML = text;
}
