/**
 *
 * 这一题每层的选择不再是只选择一个数字，而是可以选择$start$\~$n(n<s.length)$个数字，
 * 所以$path.push()$那需要些变化————每次判断从$start$\~$i$是否为回文字符串，如果是才加入，
 * 如`“aabaa”`第一层就有`“a”,"aa","aabaa"`三种选择，
 * 然后每种选择再进去递归函数里面进行深层递归找到更多方案
 */

function partition(s: string): string[][] {
  //也是组合问题
  // 输入：s = "aab"                      'aabaa'
  // 输出：[["a","a","b"],["aa","b"]]
  const res: string[][] = [];
  const path: string[] = [];

  backTracking(0);
  return res;

  function backTracking(start: number) {
    //递归终止条件 当start指针越出字符串边界时
    if (start >= s.length) {
      res.push([...path]);
      return;
    }

    for (let i = start; i < s.length; i++) {
      if (isPalindrome(s, start, i)) {
        //每次都判断从s的start到i是不是回文字符串 如果是就加入
        //比如“aabac”中 第一层第一轮选a 第二层第二轮选ab不符合 第二层第三轮选aba符合
        path.push(s.substring(start, i + 1));
      } else {
        continue;
      }
      backTracking(i + 1);
      path.pop();
    }
  }

  function isPalindrome(s: string, start: number, end: number): boolean {
    //双指针判断s中位置i到位置j是不是回文串
    for (let i = start, j = end; i < j; i++, j--) {
      if (s[i] != s[j]) {
        return false;
      }
    }
    return true;
  }
}
