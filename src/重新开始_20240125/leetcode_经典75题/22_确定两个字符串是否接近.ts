/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function closeStrings(word1: string, word2: string): boolean {
  //操作1：无限次交换两字符位置
  //操作2：无限次交换两字符出现次数
  //他们都不会增加/删除字符串，并且无限次两两互换可以保证满足所有排列组合。
  //因此本质上我们要判断的是：只要字符串出现的种类+次数相等，那这两字符串一定“接近”

  //因为题目限制字符串只会出现26个小写字母之一,所以开两个只有26位的数组存储出现次数，数组下标代表和'a'的UnitCode差值
  const arr1 = new Array<number>(26).fill(0);
  const arr2 = new Array<number>(26).fill(0);

  for (let char of word1) {
    const index = char.charCodeAt(0) - "a".charCodeAt(0);
    arr1[index]++;
  }
  for (let char of word2) {
    const index = char.charCodeAt(0) - "a".charCodeAt(0);
    arr2[index]++;
  }
  //判断出现种类 当arr1出现时，arr2也必须出现，反之亦然。
  for (let i = 0; i < 26; i++) {
    if (arr1[i] === 0 && arr2[i] !== 0) {
      return false;
    } else if (arr1[i] !== 0 && arr2[i] === 0) {
      return false;
    }
  }
  //判断出现次数，arr1和arr2得是除了位置外，元素一模一样的数组
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  for (let i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
