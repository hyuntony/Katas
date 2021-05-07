const multiplicationTable = function(maxValue) {
  let result = "";
  const baseMultiples = [];                   
  for (i = 1; i <= maxValue; i++) {
    baseMultiples.push(i);                          //pushing values 1-maxValue into an array
  };
  for (i = 0; i < baseMultiples.length; i++){
    for (j = 0; j < baseMultiples.length; j++) {
      if (i > 0 && j == 0) {                      // adding \n whenever new multiples start
        result += "\n";
      }
      result += String(baseMultiples[i] * baseMultiples[j]);        //logging the result of the multiple to the result string
      result += " ";
    }
  }
  return result;
};

console.log(multiplicationTable(93));
//console.log(multiplicationTable(5));
//console.log(multiplicationTable(10));