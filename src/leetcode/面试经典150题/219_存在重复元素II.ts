/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
      if (map[nums[i]] === undefined) {
        map[nums[i]] = i;
      } else {
        if (i - map[nums[i]] <= k) {
          return true;
        } else {
          map[nums[i]] = i; //更新位置
        }
      }
    }
    return false;
  }
  