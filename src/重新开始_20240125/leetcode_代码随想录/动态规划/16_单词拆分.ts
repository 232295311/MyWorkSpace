function wordBreak(s: string, wordDict: string[]): boolean {
  const goods = wordDict;
  const bagSize = s.length;
  const dp = new Array(bagSize + 1).fill(false);
  //dp[i] : 字符串长度为i的话，dp[i]为true，表示可以拆分为一个或多个在字典中出现的单词。
  dp[0] = true; //方便后继计算

  //排列问题 先遍历背包再遍历物品
  for (let i = 1; i <= bagSize; i++) {
    for (let j = 0; j < i; j++) {
      //str从j位开始到i位结束
      //如果确定dp[j] 是true，且 [j, i] 这个区间的子串出现在字典里，那么dp[i]一定是true。（j < i ）。
      //所以递推公式是 if([j, i] 这个区间的子串出现在字典里 && dp[j]是true) 那么 dp[i] = true。
      const str = s.substring(j, i);
      if (goods.includes(str) && dp[j] === true) {
        dp[i] = true;
        break;
      }
    }
  }
}
