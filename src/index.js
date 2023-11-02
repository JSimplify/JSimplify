function isEmpty(array) {
  if (!Array.isArray(array)) throw new Error("The argument is not an array");
  return array.length === 0;
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
 * Transform a string into a string.
 * @returns - A string
 */
String.prototype.asString = function () {
  return JSON.stringify(this);
}

/**
 * Transform a boolean into a string.
 * @returns - A string
 */
Boolean.prototype.asString = function () {
  return `${JSON.stringify(this)}`;
}

/**
 * Transform a number into a string.
 * @returns - A string
 */
Number.prototype.asString = function () {
  return `${JSON.stringify(this)}`;
}

/**
 * Transform an array into a string.
 * @returns - A string
 */
Array.prototype.asString = function () {
  return JSON.stringify(this);
}

/**
 * Transform an object into a string.
 * @returns - A string
 */
Object.prototype.asString = function () {
  return JSON.stringify(this);
}

function average(array, round = 0) {
  if (isEmpty(array))
    throw new Error("The array is empty or it's not an array");

  let sum = 0;
  for (const num of array) {
    if (!isSet(num) || (typeof num === "string" && isNaN(Number(num))))
      throw new Error("The array must contain only numbers");

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
  isEmpty: isEmpty,
  isSet: isSet,
  areSet: areSet,
  roundPrecisely: roundPrecisely,
};
