/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function topKFrequent(nums: number[], k: number): number[] {
  //往map里面加元素，加完根据频次排序数组，然后返回前k个就行了
  let res = [];
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }
  const arr = Array.from(map).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < k; i++) {
    res.push(arr[i][0]);
  }
  return res;
}
