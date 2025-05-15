const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(array) {
  return array.reduce((a,b) => a + b, 0)
};

const multiply = function(array) {
  return array.reduce((a,b) => a * b, 1)
};

const power = function(a, b) {
  return a ** b
};

const factorial = function(a) {
  let fact = 1; 
  for(let i = 1; i <= a; i++)
  {
    fact *= i;
  }

  return fact
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
