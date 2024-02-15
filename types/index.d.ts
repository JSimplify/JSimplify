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
export function areSet(strict: boolean, ...variables: any): boolean;


// export class Math {
export interface Math {
    /**
     * Calculate the sum value of a list of numbers.
     * @param variables - Any number of numbers or Number[]. Number as string will be converted.
     * @returns {Number}
     */
    sum(...variables: Array<Number>): Number
}

interface Math {
    /**
     * Calculate the average value of a list of numbers.
     * @param variables - Any number of numbers or Number[]. Number as string will be converted.
     * @returns {Number}
     */
    average(...variables: Array<Number>): Number
}

declare global {
    interface Math {
        /**
         * Round a number to the given precision.
         * @param {Number} number - The number to round.
         * @param {Number} precision - The precision of the round. Represente the unit of the number table.
         * @returns {Number} Number
         */
        roundPrecisely(number: Number, precision: Number): Number
    }
}