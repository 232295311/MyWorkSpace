/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function isHappy(n: number): boolean {
  const set = new Set();
  while (!set.has(n)) {
    set.add(n);
    n = getNextNum(n);
    if (n === 1) {
      return true;
    }
  }
  return false;
}

function getNextNum(n: number): number {
  const res: number = n
    .toString()
    .split("")
    .map((item) => {
      return Number(item);
    })
    .reduce((pre, curr) => {
      return pre + curr * curr;
    }, 0);
  return res;
}
