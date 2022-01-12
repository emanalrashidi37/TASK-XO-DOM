// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  confirm(`Horraaay, ${winner} wins!`);
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
//fillButton(1, "X");
//fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
const filled = [];
filled.push("");
let counter = 0;
function clickButton(index) {
  console.log(`Button number ${index} is clicked`);

  if (filled.length > 18) {
    if (
      (filled[2] === "X" && filled[4] === "X" && filled[6] === "X") ||
      (filled[8] === "X" && filled[10] === "X" && filled[12] === "X") ||
      (filled[14] === "X" && filled[16] === "X" && filled[18] === "X") ||
      (filled[2] === "X" && filled[8] === "X" && filled[14] === "X") ||
      (filled[4] === "X" && filled[10] === "X" && filled[16] === "X") ||
      (filled[6] === "X" && filled[12] === "X" && filled[18] === "X") ||
      (filled[6] === "X" && filled[10] === "X" && filled[14] === "X") ||
      (filled[2] === "X" && filled[10] === "X" && filled[18] === "X")
    ) {
      winningAlert("X");
    }
  } else {
    if (filled.some((element) => element === index)) {
    } else {
      filled.push(index);
      counter++;
      if (counter % 2 === 1) {
        fillButton(index, "X");
        filled.push("X");
      } else {
        fillButton(index, "O");
        filled.push("O");
      }
    }
    console.log(filled.length);
    console.log(counter);
  }
  console.log(filled[2]);
} // filled.push(index);

// }

/**
 * 👇🏻 BELOW are functions that you CAN use to structure your code properly.
 * It's always a good idea to make a function for every single purpose.
 *
 */

// In this function you should check if the player is X or O
function checkPlayer(index) {
  if (getElementById(index) === "X") {
    return "P1";
  } else if (document.getElementById(index) === "O") {
    return "P2";
  } else {
    return null;
  }
}

/**
 *
 * checkWinner should be a function that checks
 * who is winning and returns the winner
 */
// function checkWinner

// function restartGame
