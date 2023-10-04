const elem = document.querySelector("input");

elem.addEventListener("input", handleInput);

function handleInput(elem) {
  ///check for negative input
  if (elem.target.value < 0) {
    document.getElementById("result").innerHTML =
      "That's a negative number. Please enter a positive number.";
  }
  //check for single digits
  else if (elem.target.value < 10) {
    document.getElementById("result").innerHTML = "Yes, this is a palindrome!";
  }
  //check all positive numbers 2 digits or greater
  else {
    let query = elem.target.value;
    let text = query.toString();
    let textLen = text.length;

    //check if there are an even number of digits and divisible by 11
    if (textLen % 2 === 0 && query % 11 === 0) {
      document.getElementById("result").innerHTML =
        "Yes, this is a palindrome!";
    }
    //easy cases over, now we will convert the number to an array and reverse it
    else {
      const array = [...text];
      let arrayText = array.toString();
      const reversedArray = array.reverse();
      let reversedText = reversedArray.toString();

      if (arrayText === reversedText) {
        document.getElementById("result").innerHTML =
          "Yes, this is a palindrome!";
      } else {
        document.getElementById("result").innerHTML =
          "Nope, this is not a palindrome.";
      }
    }
  }
}
