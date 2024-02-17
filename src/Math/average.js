Math.average = function (...numbers) {
  numbers = numbers.flat(Infinity);

  if(numbers.length <= 0) {
    throw new Error("The list must have at least one number");
  }

  return Math.sum(numbers) / numbers.length;
}