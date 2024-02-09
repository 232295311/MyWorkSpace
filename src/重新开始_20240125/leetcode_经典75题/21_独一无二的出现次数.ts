/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function uniqueOccurrences(arr: number[]): boolean {
  const obj = {};
  const array: any[] = [];
  //   const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  for (let key in obj) {
    array.push(obj[key]);
  }
  return new Set(array).size === array.length;
}
