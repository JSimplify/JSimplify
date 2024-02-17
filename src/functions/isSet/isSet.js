function isSet(variable) {
  return (
    variable !== undefined &&
    variable !== null
  );
}

module.exports = {
  isSet: isSet
};