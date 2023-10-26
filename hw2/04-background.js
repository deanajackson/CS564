// Add your code here
const colorArray = [
  "rgba(245, 40, 145, 0.55)",
  "rgba(62, 40, 145, 0.55)",
  "rgba(62, 202, 255, 0.55)",
  "rgba(255, 0, 5, 0.55)",
  "rgba(255, 255, 5, 0.55)",
  "rgba(255, 124, 124, 0.55)",
  "rgba(255, 169, 0, 0.55)",
  "rgba(34, 132, 79, 0.55)",
];

const button = document.getElementById("actionButton");
button.addEventListener("click", changeInterval);
let delay = parseInt(document.getElementById("intervalInput").value) * 1000;
let intervalIDLoad = null;
let intervalIDchange = null;

window.addEventListener("load", (event) => {
  changeColor();
  intervalIDLoad = setInterval(changeColor, delay);
});

function changeColor() {
  color = colorArray[getRandomInt(colorArray.length)];
  document.body.style.background = color;
}
function changeInterval() {
  //clear intervals so they don't compete
  clearInterval(intervalIDLoad);
  clearInterval(intervalIDchange);
  intervalIDLoad = null;
  intervalIDchange = null;

  //change id and value of button to stop/start
  button.className =
    button.className === "mt-3 start btn btn-primary"
      ? "mt-3 stop btn btn-danger"
      : "mt-3 start btn btn-primary";
  button.value = button.value === "Start" ? "Stop" : "Start";
  if (button.className === "mt-3 stop btn btn-danger") {
    //Set new interval based on input value
    delay = parseInt(document.getElementById("intervalInput").value) * 1000;
    intervalIDchange = setInterval(changeColor, delay);
  }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/*Resources used
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input
https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript
*/
