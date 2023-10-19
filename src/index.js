function isEmpty(array) {
  return Array.isArray(array) && array.length === 0;
}

function isSet(variable) {
  if (typeof variable === "number" && isNaN(variable)) return false;

  return (
    variable !== undefined &&
    variable !== null &&
    variable !== "" &&
    variable !== 0 &&
    variable !== false
  );
}

function average(array) {
  if (isEmpty(array))
    throw new Error("The array is empty or it's not an array");

  let sum = 0;
  for (const num of array) {
    if (!isSet(num) || (typeof num === "string" && isNaN(Number(num))))
      throw new Error("The array must contain only numbers");

    sum += typeof num === "string" ? Number(num) : num;
  }

  return roundPrecisely(sum / array.length, 2);
}

function roundPrecisely(number, precision) {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

module.exports = {
  average: average,
  isEmpty: isEmpty,
  isSet: isSet,
  roundPrecisely: roundPrecisely,
};
