const elem = document.querySelector("input");

elem.addEventListener("input", handleInput);

function handleInput(elem) {
  ///check for negative input
  const result = document.getElementById("result");
  if (elem.target.value.toString() === "") {
    result.innerHTML = "";
  } else if (elem.target.value < 0) {
    result.innerHTML =
      "That's a negative number. Please enter a positive number.";
  }
  //check for single digits
  else if (elem.target.value < 10) {
    result.innerHTML = "Yes, this is a palindrome!";
    result.style.color = "green";
  }
  //check all positive numbers 2 digits or greater
  else {
    let query = elem.target.value;
    let text = query.toString();
    let textLen = text.length;

    //check if there are an even number of digits and divisible by 11
    if (textLen % 2 === 0 && query % 11 === 0) {
      result.innerHTML = "Yes, this is a palindrome!";
      result.style.color = "green";
    }
    //easy cases over, now we will convert the number to an array and reverse it
    else {
      const array = [...text];
      const arrayText = array.toString();
      const reversedArray = array.reverse();
      const reversedText = reversedArray.toString();

      if (arrayText === reversedText) {
        result.innerHTML = "Yes, this is a palindrome!";
        result.style.color = "green";
      } else {
        result.innerHTML = "Nope, this is not a palindrome.";
        result.style.color = "red";
      }
    }
  }
}
/* 
Outside sources 
How To Get The Length of a String in JavaScript (w3schools.com)
JavaScript Number toString() Method (w3schools.com)
Comparing Arrays in JavaScript – How to Compare 2 Arrays in JS (freecodecamp.org)
JavaScript Array reverse() Method (w3schools.com)
String to Array in JavaScript - GeeksforGeeks
Spread syntax (...) - JavaScript | MDN (mozilla.org)
JavaScript Array toString() Method (w3schools.com)
W3Schools Tryit Editor
https://www.w3schools.com/js/js_htmldom_css.asp
*/
