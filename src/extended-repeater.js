const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let result = '';
  const mainStr = String(str === undefined ? '' : str);
  const mainSep = options.separator === undefined ? '+': String(options.separator);
  const mainRepTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes;
  const addStr = String(options.addition === undefined ? '' : options.addition);
  const addSep = options.additionSeparator === undefined ? '|' :  String(options.additionSeparator);
  const addRepTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;
  
  const partAdd = Array.from({length: addRepTimes}, () => addStr).join(addSep);
  const partStr = `${mainStr}${partAdd}`;

  result = Array.from({length: mainRepTimes}, () => partStr).join(mainSep);

  return result;
}

module.exports = {
  repeater
};
