require("./prototype/isEmpty");
require("./prototype/asString");
require("./Math/average");
require("./Math/sum");
require("./Math/roundPrecisely");


function isSet(variable) {
  return (
    variable !== undefined &&
    variable !== null
  );
}


function areSet(strict, ...variables) {
  if(!strict) return variables.some(variable => isSet(variable));
  else return variables.every(variable => isSet(variable));
}


module.exports = {
  isSet: isSet,
  areSet: areSet,
};
