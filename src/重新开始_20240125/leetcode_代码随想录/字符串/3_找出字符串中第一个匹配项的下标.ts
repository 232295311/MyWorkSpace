function strStr(haystack: string, needle: string): number {
  //实现类似String.indexOf()的效果。
  //如果按照第一项匹配的就进入下一轮循环匹配去做，时间复杂度为O((n−m)∗m)即O(m∗n) 。
  //如果用KMP算法，实现一个next数组控制回退，可以简化为O(n+m)
  //KMP匹配过程：首先匹配串会检查之前已经匹配成功的部分中里是否存在相同的「前缀」和「后缀」。
  // 如果存在，则跳转到「前缀」的下一个位置继续往下匹配。

  /*** 
    * 到这里，你应该清楚 KMP 为什么相比于朴素解法更快：
  
  因为 KMP 利用已匹配部分中相同的「前缀」和「后缀」来加速下一次的匹配。
  
  因为 KMP 的原串指针不会进行回溯（没有朴素匹配中回到下一个「发起点」的过程）。*/

  if (needle == "") {
    return 0;
  }
  //分别读取原串和匹配串的长度
  const n = haystack.length;
  const m = needle.length;
  //字符串开头都补上一个空格，避免j从-1开始，i从1开始。
  haystack = " " + haystack;
  needle = " " + needle;
  const hayArr = haystack.split("");
  const needArr = needle.split("");
  //构建next数组
  const next: number[] = []; //数组最终长度将为m+1
  //因为补了空格，所以j从0开始，i从2开始。根据匹配串的性质（前缀后缀）创造出need数组
  for (let i = 2, j = 0; i <= m; i++) {
    while (j > 0 && needArr[i] != needArr[j + 1]) {
      j = next[j]; //一旦i和j+1所指的字符不一致，j就会根据next后退
    }
    if (needArr[i] === needArr[j + 1]) {
      // i和j+1所指的字符一致，先让j++，i在结束本轮循环时会++
      j++;
    }
    //更新next[i]结果
    next[i] = j;
  }
  console.log(next);
  //创建完next数组，开始匹配,记得已经补充了一个空格，所以i从1开始，j从0开始
  //i指hayArr j指needArr
  for (let i = 1, j = 0; i <= hayArr.length; i++) {
    while (j > 0 && hayArr[i] !== needArr[j + 1]) {
      //只要匹配不成功，
      j = next[j];
    }
    if (hayArr[i] === needArr[j + 1]) {
      j++; //匹配成功，先让j++
    }
    if (j === m) {
      //整段都成功 返回下标
      return i - m;
    }
  }

  //没一个成功的，返回-1
  return -1;
}
