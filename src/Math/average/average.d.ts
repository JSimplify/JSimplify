export declare global {
  interface Math {
    /**
     * Calculate the average value of a list of numbers.
     * @param variables Any number of numbers or Number[]. Number as string will be converted.
     * @returns The average number.
     */
    average(...variables: Array<Number>): Number
  }
}