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
 * @returns `true` if the variable is set, `false` otherwise.
 */
export function isSet(variable: any): boolean;

/**
 * Determine if the given variables are set or not.
 * *Checks `undefined` and `null`*.
 * @param strict - Check if **all** the variable are set or **at least one**.
 * @param variables - The variables to check.
 * @returns - If `strict` is set to `true`, `true` if the **all** the variables are set, `false` otherwise.
 * - If `strict` is set to `false`, `true` if **at least one** of the variables is set, `false` otherwise.
 */
export function areSet(strict: boolean = true, ...variables: any): boolean;

/**
 * Round a number to the given precision after the comma
 * if the precision is negative, it will round the number to the given precision before the comma
 * @param number - The number to round
 * @param precision - The precision to use for the decimal part
 * @returns The rounded number
 */
export function roundPrecisely(number: number, precision: number): number;