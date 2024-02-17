require("./prototype/isEmpty");
require("./prototype/asString");


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
