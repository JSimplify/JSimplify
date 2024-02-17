/**
 * Determine if the variable is empty.
 * @returns {Boolean} - A Boolean
 */
Object.prototype.isEmpty = function () {
  if(this instanceof Number || this instanceof Boolean || this instanceof Function) {
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
  else if(this instanceof Number || this instanceof Boolean || this instanceof Function) {
    return `${this}`;
  }
  else {
    return JSON.stringify(this);
  }
}


Math.average = function (...numbers) {
  numbers = numbers.flat(Infinity);

  if(numbers.length <= 0) {
    throw new Error("The list must have at least one number");
  }

  return Math.sum(numbers) / numbers.length;
}


Math.sum = function (...numbers) {
  numbers = numbers.flat(Infinity);
  
  if(numbers.length <= 0) {
    throw new Error("The list must have at least one number");
  }

  return numbers.reduce((sum, number) => {
    const numberNumbered = Number(number);

    if(typeof number === "number" || typeof number === "string" && !isNaN(numberNumbered)) {
      return sum + numberNumbered;
    }
    else {
      throw new Error("The given list must be only numbers (or numbers as string)");
    }
  }, 0);
}


Math.roundPrecisely = function(number, precision) {
  const numberNumbered = Number(number);
  const precisionNumbered = Number(precision);

  if(typeof number === "number" || typeof number === "string" && !isNaN(numberNumbered)) {
    if(typeof precision === "number" || typeof precision === "string" && !isNaN(precisionNumbered)) {
      const factor = Math.pow(10, -precision);
      return Math.round(number * factor) / factor;
    }
    else {
      throw new Error("The given precision is not a number (or a number as string)");
    }
  }
  else {
    throw new Error("The given number is not a number (or a number as string)");
  }
}


module.exports = {
  isSet: isSet,
  areSet: areSet,
};
