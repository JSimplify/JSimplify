Math.roundPrecisely = function(number, precision) {
  const numberNumbered = Number(number);
  const precisionNumbered = Number(precision);

  if(typeof number === "number" || typeof number === "string" && !isNaN(numberNumbered)) {
    if(typeof precision === "number" || typeof precision === "string" && !isNaN(precisionNumbered)) {
      const factor = Math.pow(10, -precision);
      return Math.round(number * factor) / factor;
    }
    else {
      throw new Error("The given precision is not a number (or a number as string)");
    }
  }
  else {
    throw new Error("The given number is not a number (or a number as string)");
  }
}