export declare global {
  interface Math {
    /**
     * Calculate the sum value of a list of numbers.
     * @param variables Any number of numbers or Number[]. Number as string will be converted.
     * @returns The sum value.
     */
    sum(...variables: Array<Number>): Number
  }
}