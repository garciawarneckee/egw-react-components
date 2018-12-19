isFunction = toEval => { return typeof toEval === 'function'; }
isBoolean = toEval => { return typeof toEval === 'boolean'; }
isString = toEval => { return typeof toEval === 'string'; }

module.exports = {
  isFunction,
  isBoolean,
  isString
}