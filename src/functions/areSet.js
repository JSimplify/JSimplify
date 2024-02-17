const { isSet } = require("./isSet/isSet");

function areSet(strict, ...variables) {
  if(!strict) return variables.some(variable => isSet(variable));
  else return variables.every(variable => isSet(variable));
}

module.exports = {
  areSet: areSet
};