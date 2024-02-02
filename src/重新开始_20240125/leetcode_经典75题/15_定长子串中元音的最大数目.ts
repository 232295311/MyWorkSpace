/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function maxVowels(s: string, k: number): number {
  const VoWelCharMap = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  //滑动窗口
  let i = 0;
  let j = k - 1;
  let maxRes = 0;
  let curr = 0;
  for (let p = 0; p < k; p++) {
    //先计算0~k-1位置有多少个元音
    if (VoWelCharMap[s[p]]) {
      curr++;
      if (curr === k) {
        return curr; //提前返回减少遍历
      }
    }
  }
  maxRes = curr;
  //再移动滑动窗口计算剩下位置
  while (j < s.length - 1) {
    j++;
    VoWelCharMap[s[j]] ? curr++ : undefined;
    VoWelCharMap[s[i]] ? curr-- : undefined;
    i++;
    maxRes = Math.max(maxRes, curr);
    // console.log('maxRes:',maxRes,'   i:',i,'  j:',j)
    if (maxRes === k) {
      return maxRes; //提前返回减少遍历
    }
  }
  return maxRes;
}
