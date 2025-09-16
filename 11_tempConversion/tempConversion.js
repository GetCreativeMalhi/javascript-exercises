const convertToCelsius = function(tempFahrenheit) {
   let num = ((tempFahrenheit - 32) * 5 / 9);
   return Math.round(num * 10) / 10;
};

const convertToFahrenheit = function(tempCelsius) {
  let num = ((tempCelsius * (9/5))+ 32);
  return Math.round(num * 10) / 10;
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
