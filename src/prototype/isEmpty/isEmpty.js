Object.prototype.isEmpty = function () {
  if(this instanceof Number || this instanceof Boolean || this instanceof Function) {
    return false;
  }
  else {
    return Object.keys(this).length === 0;
  }
}
  
Array.prototype.isEmpty = function () {
  return this.length === 0;
}

String.prototype.isEmpty = function () {
  return this.length === 0;
}