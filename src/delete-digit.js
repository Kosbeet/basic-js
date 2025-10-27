const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('')
  let biggest = 0;

  for (let i = 0; i < arr.length; i += 1) {
    const tempArr = [...arr];
    const temp = +tempArr.slice(0, i).concat(arr.slice(i + 1)).join('');
    if (temp > biggest) {
      biggest = temp;
    }
  }
  return biggest;
}

module.exports = {
  deleteDigit
};
