/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function wordPattern(pattern: string, s: string): boolean {
  let arr1 = pattern.split("");
  let arr2 = s.split(" ");
  if (arr1.length !== arr2.length) {
    return false;
  }
  let map1 = new Map();
  let map2 = new Map();
  for (let i = 0; i < arr1.length; i++) {
    if (!map1.has(arr1[i]) && !map2.has(arr2[i])) {
      map1.set(arr1[i], arr2[i]);
      map2.set(arr2[i], arr1[i]);
    } else {
      if (map1.get(arr1[i]) !== arr2[i]) {
        return false;
      }
      if (map2.get(arr2[i]) !== arr1[i]) {
        return false;
      }
    }
  }
  return true;
}
