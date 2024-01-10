const convertToCelsius = function(temp) {
  let new_temp = (temp - 32) * (5/9);
  new_temp = Math.round(new_temp * 10) / 10;
  return new_temp;
};

const convertToFahrenheit = function(temp) {
  let new_temp = temp * (9/5) + 32;
  new_temp = Math.round(new_temp * 10) / 10;
  return new_temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
