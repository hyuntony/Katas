const squareCode = function(message) {
  let finalCode = "";
  let messageRows = "";
  const spaceRemoved = message.replace(/ /g, "");
  const squareRoot = (Math.ceil(Math.sqrt(spaceRemoved.length)));  //variable for value of square root rounded up
  for (let i = 0; i < spaceRemoved.length; i++) {           // changing message into multiple rows
    messageRows += spaceRemoved[i];
    if ((i + 1) % squareRoot === 0) {
      messageRows += "\n";
    }
  }
  let rowArrays = messageRows.split("\n");  // separate rows into array
  for (let i = 0; i < squareRoot; i++) {    // creating final code
    if (i === 0) {} else {
      finalCode += " ";
    }
    for (let x = 0; x < rowArrays.length; x++) {
      if (rowArrays[x][i] == undefined) {} else {
        finalCode += rowArrays[x][i];
      }
    }
  }
  return finalCode;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));