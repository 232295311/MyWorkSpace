/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  //   let res = " ";
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) === false) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], 2);
    }
  }
  for (let [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
  return " ";
};
