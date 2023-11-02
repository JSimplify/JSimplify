/**
 * Calculate the average value of an array of numbers,
 * it uses isEmpty and isSet to check if the array is correct
 * @param array - The array of numbers
 * @returns The average value
 */
export function average(array: Array): number;

/**
 * Determine if the given variable is set or not.
 * *Checks `undefined` and `null`*.
 * @param variable - The variable to check.
 * @returns True if the variable is set, false otherwise.
 */
export function isSet(variable: any): boolean;

/**
 * Check if the given array is empty or not
 * @param array - The array to check
 * @returns True if the array is empty, false otherwise
 */
export function isEmpty(array: Array): boolean;

/**
 * Round a number to the given precision after the comma
 * if the precision is negative, it will round the number to the given precision before the comma
 * @param number - The number to round
 * @param precision - The precision to use for the decimal part
 * @returns The rounded number
 */
export function roundPrecisely(number: number, precision: number): number;