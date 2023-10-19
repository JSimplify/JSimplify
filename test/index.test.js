const assert = require("assert");
const { average, isEmpty, isSet, roundPrecisely } = require("../src");

// TEST for the average function
console.log("TEST for the average function");
try {
  const avrg1 = [1, 3, 4, 5];
  assert.strictEqual(average(avrg1), (1 + 3 + 4 + 5) / 4);
  console.log("Test with only numbers - PASSED");
} catch (error) {
  console.error(`Test failed: ${error.message}`);
}

try {
  const avrg2 = [1, 3, 4, 5, true, [], "ok"];
  average(avrg2);
} catch (error) {
  assert.strictEqual(error.message, "The array must contain only numbers");
  console.log("Test with mixed types - PASSED");
}

try {
  const avrg3 = [];
  average(avrg3);
} catch (error) {
  assert.strictEqual(error.message, "The array is empty or it's not an array");
  console.log("Test with empty array - PASSED");
}

try {
  const avrg4 = [1, 1, 3, 5, "5"];
  assert.strictEqual(average(avrg4), 3);
  console.log("Test with string number - PASSED");
} catch (error) {
  console.error(`Test failed: ${error.message}`);
}

try {
  const avrg5 = [1, 1, 3, 5, 1.4];
  assert.strictEqual(average(avrg5), 2.28);
  console.log("Test with decimal number - PASSED");
} catch (error) {
  console.error(`Test failed: ${error.message}`);
}

// TEST for the isEmpty function
console.log("\nTEST for the isEmpty function");
try {
  const empty1 = [];
  assert.strictEqual(isEmpty(empty1), true);
  console.log("Test with empty array - PASSED");
} catch (error) {
  console.error(`Test failed: ${error.message}`);
}
try {
  const empty2 = [1, 2, 3];
  assert.strictEqual(isEmpty(empty2), false);
  console.log("Test with non-empty array - PASSED");
} catch (error) {
  console.error(`Test failed: ${error.message}`);
}
try {
  const empty3 = {};
  assert.strictEqual(isEmpty(empty3), false);
  console.log("Test with empty object - PASSED");
} catch (error) {
  console.error(`Test failed: ${error.message}`);
}

// TEST for the isSet function
console.log("\nTEST for the isSet function");
try {
  const variable1 = 0;
  assert.strictEqual(isSet(variable1), false);
  console.log("Test with int 0 - PASSED");
} catch (error) {
  console.error(`Test failed: ${error.message}`);
}
try {
  const variable2 = "";
  assert.strictEqual(isSet(variable2), false);
  console.log("Test with empty string - PASSED");
} catch (error) {
  console.error(`Test failed: ${error.message}`);
}
try {
  const variable3 = false;
  assert.strictEqual(isSet(variable3), false);
  console.log("Test with boolean false - PASSED");
} catch (error) {
  console.error(`Test failed: ${error.message}`);
}
try {
  const variable4 = undefined;
  assert.strictEqual(isSet(variable4), false);
  console.log("Test with undefined - PASSED");
} catch (error) {
  console.error(`Test failed: ${error.message}`);
}
try {
  const variable5 = null;
  assert.strictEqual(isSet(variable5), false);
  console.log("Test with null - PASSED");
} catch (error) {
  console.error(`Test failed: ${error.message}`);
}
try {
  const variable6 = NaN;
  assert.strictEqual(isSet(variable6), false);
  console.log("Test with NaN - PASSED");
} catch (error) {
  console.error(`Test failed: ${error.message}`);
}
try {
  const variable7 = "0";
  assert.strictEqual(isSet(variable7), true);
  console.log("Test with string 0 - PASSED");
} catch (error) {
  console.error(`Test failed: ${error.message}`);
}

// TEST for the roundPrecisely function
console.log("\nTEST for the roundPrecisely function");
try {
  const round1 = 1.234;
  assert.strictEqual(roundPrecisely(round1, 2), 1.23);
  console.log("Test with 2 decimal places - PASSED");
} catch (error) {
  console.error(`Test failed: ${error.message}`);
}
try {
  const round2 = 1.23456;
  assert.strictEqual(roundPrecisely(round2, 3), 1.235);
  console.log("Test with 3 decimal places - PASSED");
} catch (error) {
  console.error(`Test failed: ${error.message}`);
}
try {
  const round3 = 1.234;
  assert.strictEqual(roundPrecisely(round3, 0), 1);
  console.log("Test with 0 decimal places - PASSED");
} catch (error) {
  console.error(`Test failed: ${error.message}`);
}
