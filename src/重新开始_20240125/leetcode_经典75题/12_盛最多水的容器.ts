/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function maxArea(height: number[]): number {
  //用i和j维护两块水槽左右两边的木板。
  let i = 0;
  let j = height.length - 1;
  let maxArea = 0;
  while (i < j) {
    const area = Math.min(height[i], height[j]) * (j - i);
    maxArea = Math.max(maxArea, area);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
}
