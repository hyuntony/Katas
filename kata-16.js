const makeCase = function (input, cases) {
  let caseArray = [];
  if (typeof cases == "object") {
    for (let casing of cases) {
      caseArray.push(casing);
    }
  } else {
    caseArray.push(cases);
  }
  for (let casing of caseArray) {
    if (casing == "camel") {
      let array = input.split(" ");                    //split string into an array separated into words
      let result = "";
      for (let x = 0; x < array.length; x++) {
        for (let i = 0; i < array[x].length; i++) {
          if (i === 0 && x === 0) {                     //on the first character of first word
            result += array[x][i].toLowerCase();
          } else if (i === 0) {                                // on the first character of second+ words
            result += array[x][i].toUpperCase();
          } else {
            result += array[x][i].toLowerCase();
          }
        }
      }
      input = result;
    }
  }
  for (let casing of caseArray) {
    if (casing == "pascal") {                 // pascal case
      let array = input.split(" ");
      let result = "";
      for (let x = 0; x < array.length; x++) {
        for (let i = 0; i < array[x].length; i++) {
          if (i === 0) {
            result += array[x][i].toUpperCase();
          } else {
            result += array[x][i].toLowerCase();
          }
        }
      }
      input = result;
    }
  }
  for (let casing of caseArray) {         // snake case
    if (casing == "snake") {
      let array = input.split(" ");
      let result = "";
      for (let x = 0; x < array.length; x++) {
        for (let i = 0; i < array[x].length; i++) {
          result += array[x][i];
        }
        if (x == array.length - 1) { } else {
          result += "_";
        }
      }
      input = result;
    }
  }
  for (let casing of caseArray) {        // kebab case
    if (casing == "kebab") {
      let array = input.split(" ");
      let result = "";
      for (let x = 0; x < array.length; x++) {
        for (let i = 0; i < array[x].length; i++) {
          result += array[x][i];
        }
        if (x == array.length - 1) { } else {
          result += "-";
        }
      }
      input = result;
    }
  }
  for (let casing of caseArray) {          //title case
    if (casing == "title") {
      let array = input.split(" ");
      let result = "";
      for (let x = 0; x < array.length; x++) {
        for (let i = 0; i < array[x].length; i++) {
          if (i === 0) {
            result += array[x][i].toUpperCase();
          } else {
            result += array[x][i].toLowerCase();
          }
        }
        if (x == array.length - 1) { } else {
          result += " ";
        }
      }
      input = result;
    }
  }
  for (let casing of caseArray) {       //vowel case
    if (casing == "vowel") {
      let result = "";
      for (character of input) {
        if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u") {
          result += character.toUpperCase();
        } else {
          result += character.toLowerCase();
        }
      }
      input = result;
    }
  }
  for (let casing of caseArray) {        //consonant case
    if (casing == "consonant") {
      let result = "";
      for (character of input) {
        if (character !== "a" && character !== "e" && character !== "i" && character !== "o" && character !== "u") {
          result += character.toUpperCase();
        } else {
          result += character.toLowerCase();
        }
      }
      input = result;
    }
  }
  for (let casing of caseArray) {      // upper case
    if (casing == "upper") {
      let result = "";
      for (character of input) {
        result += character.toUpperCase();
      }
      input = result;
    }
  }
  for (let casing of caseArray) {         //lower case
    if (casing == "lower") {
      let result = "";
      for (character of input) {
        result += character.toLowerCase();
      }
      input = result;
    }
  }
  return input;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["camel", "lower"]));
