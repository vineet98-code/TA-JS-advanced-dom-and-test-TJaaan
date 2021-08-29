function add(a,b) {
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b;
  }
  return 'Not a valid input';
}

function subtract(a,b) {
  return a - b;
}

function sum() {}

function multiply() {}

function power() {}

function factorial() {}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
