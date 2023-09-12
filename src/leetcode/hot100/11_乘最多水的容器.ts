/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function maxArea(height: number[]): number {
  //水槽的面积由两个因素组成，当长度线性减少的时候，只考虑高度因素就可。两端的高度是由最短板影响，所以当不断寻找最大最短板的时候就能遍历找到最大面积
  let i = 0;
  let j = height.length - 1;
  //移动左右两个板板，每次都只移动最小的那个板，这样会出现几个情况：
  //1、移动的板和新的板比较，变短或者不变，那面积肯定变小了
  //2、移动的板和新的板比较，变长了，那面积可能变大

  //移动左右两个板板，每次都只移动最大的板，这样会出现：
  //1、移动的板和新的板比较，无论变长变短，面积都只可能变小。
  let max = 0;
  while (i < j) {
    const area = Math.min(height[i], height[j]) * (j - i);
    max = Math.max(max, area);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
}
