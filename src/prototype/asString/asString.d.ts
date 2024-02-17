export declare global {
  interface Object {
    /**
     * Convert the object into a string.
     */
    asString(): String
  }

  interface Array {
    /**
     * Convert the array into a string.
     */
    asString(): String
  }

  interface String {
    /**
     * Convert the string into a string.
     */
    asString(): String
  }

  interface Number {
    /**
     * Convert the number into a string.
     */
    asString(): String
  }

  interface Boolean {
    /**
     * Convert the boolean into a string.
     */
    asString(): String
  }

  interface Function {
    /**
     * Convert the function into a string.
     */
    asString(): String
  }
}