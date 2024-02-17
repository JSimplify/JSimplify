
require("./prototype/isEmpty/isEmpty");
require("./prototype/asString/asString");

require("./Math/average/average");
require("./Math/sum/sum");
require("./Math/roundPrecisely/roundPrecisely");

const { isSet } = require("./functions/isSet/isSet");
const { areSet } = require("./functions/areSet/areSet");


module.exports = {
  isSet,
  areSet,
};