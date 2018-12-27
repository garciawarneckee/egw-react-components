function isString(toEval){ return typeof toEval === 'string'; }
function isBoolean(toEval) { return typeof toEval === 'boolean'; }
function isFunction(toEval) { return typeof toEval === 'function'; }

module.exports = {
  isString,
  isBoolean,
  isFunction
}