/**
 * Determine if the given variable is empty.
 * @returns {Boolean} - A Boolean
 */
Object.prototype.isEmpty = function () {
  if(this instanceof Number || this instanceof Boolean) {
    return false;
  }
  else if(this instanceof Array || this instanceof String) {
    return this.length === 0;
  }
  else {
    return Object.keys(this).length === 0;
  }
}

function isSet(variable) {
  return (
    variable !== undefined &&
    variable !== null
  );
}

function areSet(strict = true, ...variables) {
  if(!strict) return variables.some(variable => isSet(variable));
  else return variables.every(variable => isSet(variable));
}

/**
 * Convert the given variable into a string.
 * @returns - A string
 */
Object.prototype.asString = function () {
  if(this instanceof String) {
    return this.toString();
  }
  else if(this instanceof Number || this instanceof Boolean) {
    return `${this}`;
  }
  else {
    return JSON.stringify(this);
  }
}

function average(array, round = 0) {
  if(array.isEmpty()) {
    throw new Error("The array is empty or it's not an array");
  }

  let sum = 0;
  for(const num of array) {
    if(!isSet(num) || (typeof num === "string" && isNaN(Number(num)))) {
      throw new Error("The array must contain only numbers");
    }

    sum += typeof num === "string" ? Number(num) : num;
  }

  return round ? roundPrecisely(sum / array.length, round) : sum / array.length;
}

function roundPrecisely(number, precision) {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

module.exports = {
  average: average,
  isSet: isSet,
  areSet: areSet,
  roundPrecisely: roundPrecisely,
};
