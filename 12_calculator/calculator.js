const add = function(arg1, arg2) {
  return arg1 + arg2;
};

const subtract = function(arg1, arg2) {
	return arg1 - arg2;
};

const sum = function(arr) {
	return +arr.reduce((total, current) => total += current, 0);
};

const multiply = function(arr) {
  return +arr.reduce((multi, current) => multi *= current);
};

const power = function(arg1, arg2) {
	return arg1 ** arg2;
};

const factorial = function(arg) {
  let multi = 1;
  if(arg === 0){
    return 1;
  }
  while(arg >=1){
    multi *= arg;
    arg--;
  }
  return multi;
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
