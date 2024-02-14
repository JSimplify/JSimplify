const assert = require("assert");
const { average, isSet, roundPrecisely, areSet } = require("../src");
const areSetFixtures = require("./areSet.fixtures");

let totalTests = 0;
let passedTests = 0;

function logTestResult(result, message, error) {
  totalTests++;
  if (result) {
    passedTests++;
    console.log(`\x1b[32m${message} - PASSED\x1b[0m`); // Vert pour PASSED
  } else {
    console.log(`\x1b[31m${message} - FAILED\x1b[0m`); // Rouge pour FAILED
    if (error) console.error(error);
  }
}

function tryTest(message, testFunction, expectedValue, expectedError) {
  try {
    const result = testFunction();
    assert.strictEqual(result, expectedValue);
    logTestResult(true, message);
  } catch (error) {
    if (error instanceof assert.AssertionError) {
      logTestResult(false, message, error.message);
    } else if (expectedError && error.message === expectedError) {
      // Si une erreur est levée et qu'elle correspond à l'erreur attendue
      logTestResult(true, message);
    } else {
      logTestResult(false, message, `Unexpected error: ${error.message}`);
    }
  }
}


// TEST for the isEmpty function
console.log("\n\x1b[90m\x1b[1m--- TEST for the isEmpty function ---\x1b[0m");
tryTest("Test with []", () => [].isEmpty(), true);
tryTest("Test with [\"toto\", 2, true, undefined, null]", () => ["toto", 2, true, undefined, null].isEmpty(), false);
tryTest("Test with {}",() => ({}).isEmpty(), true);
tryTest("Test with {toto: \"non\"}", () => ({toto: "non"}).isEmpty(), false);
tryTest("Test with \"\"", () => "".isEmpty(), true);
tryTest("Test with \" \"", () => " ".isEmpty(), false);
tryTest("Test with \"test\"", () => "test".isEmpty(), false);
tryTest("Test with 2", () => (2).isEmpty(), false);
tryTest("Test with NaN", () => NaN.isEmpty(), false);
tryTest("Test with true", () => true.isEmpty(), false);
tryTest("Test with null", () => (null).isEmpty(), null, "Cannot read properties of null (reading 'isEmpty')");
tryTest("Test with undefined", () => (undefined).isEmpty(), undefined, "Cannot read properties of undefined (reading 'isEmpty')");


// TEST for the isSet function
console.log("\n\x1b[90m\x1b[1m--- TEST for the isSet function ---\x1b[0m");
tryTest("\"test\" should be set", () => isSet("test"), true);
tryTest("\"\" should be set", () => isSet(""), true);
tryTest("\" \" should be set", () => isSet(" "), true);
tryTest("\"0\" should be set", () => isSet("0"), true);
tryTest("\"1\" should be set", () => isSet("1"), true);
tryTest("\"Infinity\" should be set", () => isSet("Infinity"), true);
tryTest("0 should be set", () => isSet(0), true);
tryTest("1 should be set", () => isSet(1), true);
tryTest("Infinity should be set", () => isSet(Infinity), true);
tryTest("NaN should be set", () => isSet(NaN), true);
tryTest("[] should be set", () => isSet([]), true);
tryTest("{} should be set", () => isSet({}), true);
tryTest("false should be set", () => isSet(false), true);
tryTest("true should be set", () => isSet(true), true);
tryTest("null should not be set", () => isSet(null), false);
tryTest("undefined should not be set", () => isSet(undefined), false);


// TEST for the areSet function with static set to true
console.log("\n\x1b[90m\x1b[1m--- TEST for the areSet function with static arg set to true ---\x1b[0m");
for(let i = 0; i < areSetFixtures.length; i++) {
  const iCurrent = areSetFixtures[i];
  const iDisplayed = ["string", "number", "boolean", "object"].includes(typeof iCurrent.value) && iCurrent.value !== null || Array.isArray() ? iCurrent.value.asString() : iCurrent.value;

  for(let j = 0; j < areSetFixtures.length; j++) {
    const jCurrent = areSetFixtures[j];
    const jDisplayed = ["string", "number", "boolean", "object"].includes(typeof jCurrent.value) && jCurrent.value !== null || Array.isArray() ? jCurrent.value.asString() : jCurrent.value;

    tryTest(
      `${iDisplayed} and ${jDisplayed} should ${iCurrent.isSet && jCurrent.isSet ? "return set" : "return not set"}`,
      () => areSet(true, iCurrent.value, jCurrent.value),
      iCurrent.isSet && jCurrent.isSet
    );
  }
}


// TEST for the areSet function with static set to false
console.log("\n\x1b[90m\x1b[1m--- TEST for the areSet function with static arg set to false ---\x1b[0m");
for(let i = 0; i < areSetFixtures.length; i++) {
  const iCurrent = areSetFixtures[i];
  const iDisplayed = ["string", "number", "boolean", "object"].includes(typeof iCurrent.value) && iCurrent.value !== null || Array.isArray() ? iCurrent.value.asString() : iCurrent.value;

  for(let j = 0; j < areSetFixtures.length; j++) {
    const jCurrent = areSetFixtures[j];
    const jDisplayed = ["string", "number", "boolean", "object"].includes(typeof jCurrent.value) && jCurrent.value !== null || Array.isArray() ? jCurrent.value.asString() : jCurrent.value;

    tryTest(
      `${iDisplayed} and ${jDisplayed} should ${iCurrent.isSet || jCurrent.isSet ? "return set" : "return not set"}`,
      () => areSet(false, iCurrent.value, jCurrent.value),
      iCurrent.isSet || jCurrent.isSet
    );
  }
}


// TEST for the average function
console.log("\n\x1b[90m\x1b[1m--- TEST for the average function ---\x1b[0m");
tryTest("Test with array of numbers", () => average([1, 3, 4, 5]), 3.25);
tryTest("Test with array of numbers and string", () => average([1, 3, 4, 5, "5"]), 3.6);
tryTest("Test with array of decimal (rounded on 2 digits)", () => average([1, 3, 4, 5.5], 2), 3.38);
tryTest("Test with array of decimal (rounded off)", () => average([1, 3, 4, 5.5], 0), 3.375);
tryTest("Test with mixed types", () => average([1, 3, 4, 5, true, [], "ok"]), null, "The array must contain only numbers");
tryTest("Test with empty array", () => average([]), null, "The array is empty or it's not an array");


// TEST for the roundPrecisely function
console.log("\n\x1b[90m\x1b[1m--- TEST for the roundPrecisely function ---\x1b[0m");
tryTest("Test with 1.2345 and 2", () => roundPrecisely(1.2345, 2), 1.23);
tryTest("Test with 1.235 and 2", () => roundPrecisely(1.235, 2), 1.24);
tryTest("Test with 1.2345 and 3", () => roundPrecisely(1.2345, 3), 1.235);
tryTest("Test with 1.2345 and 4", () => roundPrecisely(1.2345, 4), 1.2345);
tryTest("Test with 1.2345 and 5", () => roundPrecisely(1.2345, 5), 1.2345);
tryTest("Test with 1.2345 and 6", () => roundPrecisely(1.2345, 6), 1.2345);
tryTest("Test with 1.2345 and 0", () => roundPrecisely(1.2345, 0), 1);
tryTest("Test with 2387 and -1", () => roundPrecisely(2387, -1), 2390);
tryTest("Test with 2387 and -2", () => roundPrecisely(2387, -2), 2400);
tryTest("Test with 2387 and -3", () => roundPrecisely(2387, -3), 2000);
tryTest("Test with 2387 and -4", () => roundPrecisely(2387, -4), 0);
