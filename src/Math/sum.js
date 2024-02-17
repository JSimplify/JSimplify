Math.sum = function (...numbers) {
  numbers = numbers.flat(Infinity);
  
  if(numbers.length <= 0) {
    throw new Error("The list must have at least one number");
  }

  return numbers.reduce((sum, number) => {
    const numberNumbered = Number(number);

    if(typeof number === "number" || typeof number === "string" && !isNaN(numberNumbered)) {
      return sum + numberNumbered;
    }
    else {
      throw new Error("The given list must be only numbers (or numbers as string)");
    }
  }, 0);
}