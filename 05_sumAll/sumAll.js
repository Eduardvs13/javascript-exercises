const sumAll = function (number1, number2) {
  let sum = 0;
  let min = number1;
  let max = number2;
  if (!Number.isInteger(number1) || !Number.isInteger(number2)) return "ERROR";
  if(number1<0||number2<0) return "ERROR";
    if (number1 > number2) {
      min = number2;
      max = number1;
    }
  for (i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
