const calculateChange = function(total, cash) {
  let changeObject = {};  // resulting object
  let totalChange = cash - total;
  if (totalChange / 2000 >= 1) {
    changeObject.twentyDollar = Math.floor(totalChange / 2000);
    totalChange -= changeObject.twentyDollar * 2000;
  }
  if (totalChange / 1000 >= 1) {
    changeObject.tenDollar = Math.floor(totalChange / 1000);
    totalChange -= changeObject.tenDollar * 1000;
  }
  if (totalChange / 500 >= 1) {
    changeObject.fiveDollar = Math.floor(totalChange / 500);
    totalChange -= changeObject.fiveDollar * 500;
  }
  if (totalChange / 200 >= 1) {
    changeObject.twoDollar = Math.floor(totalChange / 200);
    totalChange -= changeObject.twoDollar * 200;
  }
  if (totalChange / 100 >= 1) {
    changeObject.oneDollar = Math.floor(totalChange / 100);
    totalChange -= changeObject.oneDollar * 100;
  }
  if (totalChange / 25 >= 1) {
    changeObject.quarter = Math.floor(totalChange / 25);
    totalChange -= changeObject.quarter * 25;
  }
  if (totalChange / 10 >= 1) {
    changeObject.dime = Math.floor(totalChange / 10);
    totalChange -= changeObject.dime * 10;
  }
  if (totalChange / 5 >= 1) {
    changeObject.nickel = Math.floor(totalChange / 5);
    totalChange -= changeObject.nickel * 5;
  }
  changeObject.penny = totalChange; 
  return changeObject;
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));