const camelCase = function(input) {
  let array = input.split(" ");                    //split string into an array separated into words
  let result = "";
  for (let x = 0; x < array.length; x++) {
    for (let i = 0; i < array[x].length; i++) {
      if (i === 0 && x === 0) {                     //on the first character of first word
        result += array[x][i];    
      } else if (i === 0) {                                // on the first character of second+ words
        result += array[x][i].toUpperCase();
      } else {
        result += array[x][i];
      }
    }
  }
  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));