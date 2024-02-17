const assert = require("assert");
const { isSet, areSet } = require("../src");
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
tryTest("Test with function", () => (() => {}).isEmpty(), false);


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


// TEST for the asString function
console.log("\n\x1b[90m\x1b[1m--- TEST for the asString function ---\x1b[0m");
const string = "toto";
const stringAsString = "toto";
const boolean = true;
const booleanAsString = "true";
const number = 2;
const numberAsString = "2";
const array = ["tata", false, 3, null, undefined, {}, {titi: "a"}, [], ["b"]];
const arrayAsString = '["tata",false,3,null,null,{},{"titi":"a"},[],["b"]]';
const object = {test: "c"};
const objectAsString = '{"test":"c"}';
const func = () => {};
const funcAsString = "() => {}";

tryTest("Test with \"toto\"", () => string.asString(), stringAsString);
tryTest("Test with true", () => boolean.asString(), booleanAsString);
tryTest("Test with 2", () => number.asString(), numberAsString);
tryTest("Test with [\"tata\", false, 3, null, undefined, {}, {titi: \"a\"}, [], [\"b\"]]", () => array.asString(), arrayAsString);
tryTest("Test with {test: \"c\"}", () => object.asString(), objectAsString);
tryTest("Test with null", () => (null).asString(), null, "Cannot read properties of null (reading 'asString')");
tryTest("Test with undefined", () => (undefined).asString(), undefined, "Cannot read properties of undefined (reading 'asString')");
tryTest("Test with function", () => func.asString(), funcAsString);


// TEST for the average function
console.log("\n\x1b[90m\x1b[1m--- TEST for the average function ---\x1b[0m");
tryTest("Test with array of numbers", () => Math.average([1, 3, 4, 5]), 3.25);
tryTest("Test with array of numbers and string as number", () => Math.average([1, 3, 4, 5, "5"]), 3.6);
tryTest("Test with array of numbers with array of numbers in", () => Math.average([1, 3, 4, 5, [7, 4]]), 4);
tryTest("Test with array of numbers and string", () => Math.average([1, 3, 4, 5, "ok"]), null, "The given list must be only numbers (or numbers as string)");
tryTest("Test with array of numbers and bool", () => Math.average([1, 3, 4, 5, true]), null, "The given list must be only numbers (or numbers as string)");
tryTest("Test with array of numbers with empty array in", () => Math.average([1, 3, 4, 5, []]), 3.25);
tryTest("Test with array of numbers with empty object in", () => Math.average([1, 3, 4, 5, {}]), null, "The given list must be only numbers (or numbers as string)");
tryTest("Test with no values", () => Math.average(), null, "The list must have at least one number");
tryTest("Test with null", () => Math.average(null), null, "The given list must be only numbers (or numbers as string)");
tryTest("Test with undefined", () => Math.average(undefined), null, "The given list must be only numbers (or numbers as string)");


// TEST for the sum function
console.log("\n\x1b[90m\x1b[1m--- TEST for the sum function ---\x1b[0m");
tryTest("Test with array of numbers", () => Math.sum([1, 3, 4, 5]), 13);
tryTest("Test with array of numbers and string as number", () => Math.sum([1, 3, 4, 5, "5"]), 18);
tryTest("Test with array of numbers with array of numbers in", () => Math.sum([1, 3, 4, 5, [7, 4]]), 24);
tryTest("Test with array of numbers and string", () => Math.sum([1, 3, 4, 5, "ok"]), null, "The given list must be only numbers (or numbers as string)");
tryTest("Test with array of numbers and bool", () => Math.sum([1, 3, 4, 5, true]), null, "The given list must be only numbers (or numbers as string)");
tryTest("Test with array of numbers with empty array in", () => Math.sum([1, 3, 4, 5, []]), 13);
tryTest("Test with array of numbers with empty object in", () => Math.sum([1, 3, 4, 5, {}]), null, "The given list must be only numbers (or numbers as string)");
tryTest("Test with no values", () => Math.sum(), null, "The list must have at least one number");
tryTest("Test with null", () => Math.sum(null), null, "The given list must be only numbers (or numbers as string)");
tryTest("Test with undefined", () => Math.sum(undefined), null, "The given list must be only numbers (or numbers as string)");


// TEST for the roundPrecisely function
console.log("\n\x1b[90m\x1b[1m--- TEST for the roundPrecisely function ---\x1b[0m");
tryTest("Test with 387.245 and -4", () => Math.roundPrecisely(387.245, -4), 387.245);
tryTest("Test with 387.245 and -3", () => Math.roundPrecisely(387.245, -3), 387.245);
tryTest("Test with 387.245 and -2", () => Math.roundPrecisely(387.245, -2), 387.25);
tryTest("Test with 387.245 and -1", () => Math.roundPrecisely(387.245, -1), 387.2);
tryTest("Test with 387.245 and -0", () => Math.roundPrecisely(387.245, -0), 387);
tryTest("Test with 387.245 and 0", () => Math.roundPrecisely(387.245, 0), 387);
tryTest("Test with 387.245 and 1", () => Math.roundPrecisely(387.245, 1), 390);
tryTest("Test with 387.245 and 2", () => Math.roundPrecisely(387.245, 2), 400);
tryTest("Test with 387.245 and 3", () => Math.roundPrecisely(387.245, 3), 0);
tryTest("Test with 387.245 and 4", () => Math.roundPrecisely(387.245, 4), 0);
