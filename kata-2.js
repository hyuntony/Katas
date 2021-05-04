const conditionalSum = function(values, condition) {
  let total = 0;
  for (const value of values) {
    if (condition == "even") {
      if (value % 2 === 0) {
        total += value;
      }
    } else if (condition == "odd") {
      if (value % 2 !== 0) {
        total += value;
      }
    }
  }
  return total;  
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));