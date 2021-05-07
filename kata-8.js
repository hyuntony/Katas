const repeatNumbers = function(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {       // loop through outside array
    let repeatedInput = "";
    for (let x = 0; x < data[i][1]; x++) {      // repeating for the amount of times that is equal to the second number in the inside array
      repeatedInput += String(data[i][0]);      // logging the first number of the inside array and adding to it every time it repeats
    }
    result.push(repeatedInput);                 
  }
  result = String(result);
  return result;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));