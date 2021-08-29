function add(a,b) {
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b;
  }
  return 'Not a valid input';
}

function subtract(a,b) {
  return a - b;
}

function sum(a,b) {
  return a + b;
}

function multiply(a,b) {
  return a * b;
}

function power(a,b) {
  return Math.pow(a,b);
}

function factorial(n) {
  if(n == 0 || n == 1){
    return 1;
  } else { 
    return n * factorial(n-1);
  }
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
