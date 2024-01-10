const add = function(...num) {
  let sum = 0;
	num.forEach(nums => {
    sum += nums;
  });
  return sum;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num) {
	let sum = 0;
	num.forEach(nums => {
    sum += nums;
  });
  return sum;
};

const multiply = function(num) {
  let mul = 1;
	num.forEach(nums => {
    mul *= nums;
  });
  return mul;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  let fact = 1;
  for(let i = num; i > 0; i--) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
