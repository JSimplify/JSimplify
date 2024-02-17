Object.prototype.asString = function () {
  return JSON.stringify(this);
}

Array.prototype.asString = function () {
  return JSON.stringify(this);
}

String.prototype.asString = function () {
  return this.toString();
}

Number.prototype.asString = function () {
  return this.toString();
}

Boolean.prototype.asString = function () {
  return this.toString();
}

Function.prototype.asString = function () {
  return this.toString();
}