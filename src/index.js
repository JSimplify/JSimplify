/**
 * Determine if the variable is empty.
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

function areSet(strict, ...variables) {
  if(!strict) return variables.some(variable => isSet(variable));
  else return variables.every(variable => isSet(variable));
}

/**
 * Convert the variable into a string.
 * @returns {String} - A string
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

/**
 * Calculate the average value of a list of numbers.
 * @param {...Number} numbers Any number of numbers or Number[]. Number as string will be converted.
 * @returns {Number} Number
 */
Math.average = function (...numbers) {
  numbers = numbers.flat(Infinity);

  if(numbers.length <= 0) {
    throw new Error("The list must have at least one number");
  }

  return Math.sum(numbers) / numbers.length;
}

/**
 * Calculate the sum value of a list of numbers.
 * @param  {...Number} numbers Any number of numbers or Number[]. Number as string will be converted.
 * @returns {Number} Number
 */
Math.sum = function (...numbers) {
  numbers = numbers.flat(Infinity);
  
  if(numbers.length <= 0) {
    throw new Error("The list must have at least one number");
  }

  return numbers.reduce((sum, number) => {
    const numbered = Number(number);

    if(typeof number === "number" || typeof number === "string" && !isNaN(numbered)) {
      return sum + numbered;
    }
    else {
      throw new Error("The given list must be only numbers (or numbers as string)");
    }
  }, 0);
}

function roundPrecisely(number, precision) {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

module.exports = {
  isSet: isSet,
  areSet: areSet,
  roundPrecisely: roundPrecisely,
};
