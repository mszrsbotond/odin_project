const convertToCelsius = function(temp) {
  let cels = parseFloat(((temp - 32) / (9/5)).toFixed(1));

  if(cels % 10 == 0){
    return parseInt(cels);
  }
  else{
    return cels;
  }

};

const convertToFahrenheit = function(temp) {
  let fahr = parseFloat((temp * (9/5) + 32).toFixed(1));

  if(fahr % 10 == 0){
    return parseInt(fahr);
  }
  else{
    return fahr;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
