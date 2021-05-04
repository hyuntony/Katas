const sumLargestNumbers = function(data) {
  let largest1 = 0;
  let largest2 = 0;
  for (num of data) {
    if (num > largest1) {
      let replacedNum = largest1
      largest1 = num;
      if (replacedNum > largest2) {
        largest2 = replacedNum;
      }
    } else {
      if (num > largest2) {
        largest2 = num;
      }
    }
  }
  return largest1 + largest2;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));