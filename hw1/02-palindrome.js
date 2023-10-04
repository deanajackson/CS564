const elem = document.querySelector("input");

elem.addEventListener("input", handleInput);

function handleInput(e) {
  if (e.target.value < 0) {
    console.log("That's negative");
    e.target.value = 0;
  } else if (e.target.value < 10) {
    console.log("That's a palindrome!");
  } else {
    let query = e.target.value;
    let text = query.toString();
    let textLen = text.length;

    if (textLen % 2 === 0 && query % 11 === 0) {
      console.log("That's a palindrome");
    } else {
      //easy cases over, now we will convert the number to an array and reverse it
      console.log("fell to this case");
      const array = [...text];
      console.log(array);
      let arrayText = array.toString();
      console.log(arrayText);
      const reversedArray = array.reverse();
      console.log(reversedArray);
      let reversedText = reversedArray.toString();
      console.log(reversedText);

      if (arrayText === reversedText) {
        console.log("Yes, this is a complicated Palindrome!");
      } else {
        console.log("Nope, this is not a palindrome.");
      }
    }
  }
}
