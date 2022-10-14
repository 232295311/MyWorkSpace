/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  // 利用map
  //第一遍 遍历字符串s
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], true);
    } else {
      map.set(s[i], false);
    }
  }
  for (let item of map) {
    //map的顺序跟插入时的顺序一致 是有序的
    if (item[1] === true) {
      return item[0];
    }
  }
  return " ";
};
