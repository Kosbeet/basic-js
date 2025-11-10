const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (!str) {
    return '';
  }
  let result = '';
  let count = 1;

  for (let i = 1; i < str.length; i += 1) {
    if (str[i] === str[i - 1]) {
      count += 1;
    } else {
      const currentCount = count > 1 ? `${count}` : '';
      result += `${currentCount}${str[i - 1]}`;
      count = 1;
    }
  }
  const lastCount = count > 1 ? `${count}` : '';
  result += `${lastCount}${str[str.length - 1]}`;
  return result;
}

module.exports = {
  encodeLine
};
