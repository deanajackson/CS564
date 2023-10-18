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
/*Resources used outside of recommeded resources
https://stackoverflow.com/questions/32130130/how-to-highlight-all-occurrences-of-a-word-on-a-page-with-javascript-or-jquery
https://www.w3schools.com/jsref/met_element_setattribute.asp
https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
https://developer.mozilla.org/en-US/docs/web/api/ui_events/keyboard_event_key_values
*/
