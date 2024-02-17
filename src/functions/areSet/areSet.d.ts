/**
 * Determine if the given variables are set or not.
 * *Checks `undefined` and `null`*.
 * @param strict - Check if **all** the variable are set or **at least one**.
 * @param variables - The variables to check.
 * @returns - If `strict` is set to `true`, `true` if the **all** the variables are set, `false` otherwise.
 * - If `strict` is set to `false`, `true` if **at least one** of the variables is set, `false` otherwise.
 */
export function areSet(strict: boolean, ...variables: any): boolean