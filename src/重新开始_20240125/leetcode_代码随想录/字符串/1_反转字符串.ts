/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  //必须原地修改并且只能用常数量级额外空间
  //双指针
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++;
    j--;
  }
  //   return s;
}
