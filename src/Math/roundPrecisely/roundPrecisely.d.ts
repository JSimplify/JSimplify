export declare global {
  interface Math {
    /**
     * Round a number to the given precision.
     * @param {Number} number The number to round.
     * @param {Number} precision The precision of the round. Represente the unit of the number table.
     * @returns The number rounded.
     */
    roundPrecisely(number: Number, precision: Number): Number
  }
}