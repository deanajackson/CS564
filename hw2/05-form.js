// Add your code here
const form = document.getElementById("form");

let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let regStatus = document.getElementById("regStatus");
let progLangChecked = document.getElementById("progLang");
let opSysChecked = document.getElementById("opSys");
let fsWebDevChecked = document.getElementById("fsWebDev");
let otherInfo = document.getElementById("otherInfo");

function logSubmit() {
  console.log(userName.value);
  console.log(userEmail.value);
  console.log(regStatus.value);
  console.log(progLangChecked.checked);
  console.log(opSysChecked.checked);
  console.log(fsWebDevChecked.checked);
  console.log(otherInfo.value);
}

form.addEventListener("submit", logSubmit);

/* Other resources used
https://stackoverflow.com/questions/518958/how-do-i-get-the-result-of-a-checked-checkbox
*/
