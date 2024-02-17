export declare global {
  interface Object {
    /**
     * Determine if the object is empty : `{}`.
     */
    isEmpty(): Boolean
  }

  interface Array {
    /**
     * Determine if the array is empty : `[]`.
     */
    isEmpty(): Boolean
  }

  interface String {
    /**
     * Determine if the string is empty : `""`.
     */
    isEmpty(): Boolean
  }
}