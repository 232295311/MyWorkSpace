function minWindow(s: string, t: string): string {
  //感觉滑动窗口题的难点在于当滑动窗口内元素超出题目要求时，怎么缩小滑动窗口
  let left = 0;
  let right = 0;
  const need = {}; //存储所需的关键字符个数 如{'A':1,'B':2,'C':-1},代表滑动窗口内还需要1个A,2个B,C多余了1个。
  let needType = 0; //关键字符的种类 如ABC就是需要3种
  let minStr = "";
  let minStrLength = s.length + 1;

  for (let char of t) {
    if (!need[char]) {
      need[char] = 1;
      needType++;
    } else {
      need[char]++;
    }
  }

  while (right < s.length) {
    const char = s[right]; //字符
    if (need[char] !== undefined) {
      //如果是目标字符
      need[char]--;
      if (need[char] === 0) {
        //如果减完是0，代表不需要这个字符了，必须字符种类就减少1
        needType--;
      }
      //   console.log(need,needType)
      //当满足题目条件后，由于是取最小滑动窗口,这个时候就谋求减少滑动窗口长度了
      while (needType === 0) {
        const leftChar = s[left]; //此时left所指的字符 即要弹出的字符
        if (need[leftChar] !== undefined) {
          //如果要弹出的字符是关键字符 那弹出前先记录这次滑动窗口的结果
          if (right - left < minStrLength) {
            minStr = s.substring(left, right + 1);
            minStrLength = right - left + 1;
          }
          //如果要弹出的字符是关键字符那它的需求量就+1
          need[leftChar]++;
          if (need[leftChar] === 1) {
            //如果加完需求量之后刚好等于1 所需种类就加回去 循环就会停止
            needType++;
          }
        }
        //如果不在必须字符中 那就无所谓 都弹走吧
        left++;
      }
    }
    //如果不是目标字符，那就过
    right++;
  }
  return minStr;
}
