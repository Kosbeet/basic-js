const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    
    for (let elem of arr) {
      if (Array.isArray(elem)) {
        const elemCount = this.calculateDepth(elem) + 1;
        if (elemCount > count) {
          count = elemCount;
        }
      }
    }
    return count;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
