let prompt = require("prompt-sync")({
  sigint: false,
  eot: true
});

const guessedArray = []
const checkDuplicate = function (number) {          //helper function to check if the number has been already guessed
  for (let element of guessedArray) {
    if (number == element) {
      return true;
    }
  }
  return false;
}
const randomNumber = Math.floor((Math.random() * 100) + 1);   //generate random number 1-100
let i = 0;
while (i < 1) {
  let answer = prompt("Guess a number: ");
  if (Number.isNaN(answer * 1)) {
    console.log("Not a number! Try again!");
  } else if (checkDuplicate(answer)) {
    console.log("Already Guessed!");
  } else if (answer < randomNumber) {
    console.log("Too Low!");
    guessedArray.push(answer);
  } else if (answer > randomNumber) {
    console.log("Too High!");
    guessedArray.push(answer);
  } else if (answer == randomNumber) {
    guessedArray.push(answer);
    console.log("You got it! You took " + guessedArray.length + " attempts!");
    i++;
  }
}
