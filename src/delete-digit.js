const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(n ) {
  const numStr = n.toString();
  let max = 0;

  for (let i = 0; i < numStr.length; i++) {
    const newNum = parseInt(numStr.substring(0, i) + numStr.substring(i + 1), 10);
    
    if (newNum > max) {
      max = newNum;
    }
  }

  return max;
}

module.exports = {
  deleteDigit
};
