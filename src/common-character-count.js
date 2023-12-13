const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const charCount = {};
  for (const char of s1) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Count common characters
  let commonCount = 0;
  for (const char of s2) {
    if (charCount[char] && charCount[char] > 0) {
      charCount[char]--;
      commonCount++;
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
