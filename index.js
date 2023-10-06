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

  return sum / array.length;
}

module.exports = {
  average,
  isEmpty,
  isSet,
};

// TEST for the average function
console.log("TEST for the average function");
const avrg = [1, 3, 4, 5];
console.log(average(avrg)); // Return 3.25 because every item is a number
const avrg2 = [1, 3, 4, 5, true, [], "ok"];
console.log(average(avrg2)); // Return "The array must contain only numbers"
const avrg3 = [];
console.log(average(avrg3)); // Return "The array is empty"
const avrg4 = [1, 1, 3, 5, "5"];
console.log(average(avrg4)); // Return 3 because "5" will be converted to 5
const avrg5 = [1, 1, 3, 5, 1.4];
console.log(average(avrg5)); // Return 2.28

// TEST for the isEmpty function
console.log("TEST for the isEmpty function");
const empty = [];
console.log(isEmpty(empty)); // Return true
const empty2 = [1, 2, 3];
console.log(isEmpty(empty2)); // Return false
const empty3 = "Hello";
console.log(isEmpty(empty3)); // Return false because "Hello" is not an array

// TEST for the isSet function
console.log("TEST for the isSet function");
const variable = 0;
console.log(isSet(variable)); // Return false
const variable2 = "Hello";
console.log(isSet(variable2)); // Return true
const variable3 = undefined;
console.log(isSet(variable3)); // Return false
const variable4 = null;
console.log(isSet(variable4)); // Return false
const variable5 = "";
console.log(isSet(variable5)); // Return false
let variable6;
console.log(isSet(variable6)); // Return false
