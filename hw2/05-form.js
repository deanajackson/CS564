// Add your code here
const form = document.getElementById("form");

document.getElementById("resetBtn").addEventListener("click", clearForm);
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
function clearForm() {
  if (userName.value != null) {
    userName.value = null;
  }
  if (userEmail.value != null) {
    userEmail.value = null;
  }
  if (regStatus.value != null) {
    regStatus.value = null;
  }
  if (progLangChecked.checked != false) {
    progLangChecked.checked = false;
  }
  if (opSysChecked.checked != false) {
    opSysChecked.checked = false;
  }
  if (fsWebDevChecked.checked != false) {
    fsWebDevChecked.checked = false;
  }
  if (otherInfo.value != null) {
    otherInfo.value = null;
  }
}

form.addEventListener("submit", logSubmit);

/* Other resources used
https://stackoverflow.com/questions/518958/how-do-i-get-the-result-of-a-checked-checkbox
*/
