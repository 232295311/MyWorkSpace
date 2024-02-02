/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function maxOperations(nums: number[], k: number): number {
  //每次都要移出i+j=k的两个数i和j
  //方法一：排序后，用头尾双指针，如果他们的和大于k，那就尾指针--，如果小于，那头指针++，直到他们的和等于k，然后弹出。
  //假设弹出位置为p,q，下一次就从(p-1,q-1)开始。时间复杂度为O（n * logn）
  /**
   *   nums.sort((a, b) => a - b);
    let i = 0;
    let j = nums.length - 1;
    let res = 0;
    while (i < j) {
      const sum = nums[i] + nums[j];
      if (sum > k) {
        j--;
      } else if (sum < k) {
        i++;
      } else {
        res++;
        //下一轮了
        i++;
        j--;
      }
    }
    return res;
   */
  //方法二：用hash存储数组中每个数字的出现次数
  const map = {};
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  console.log(map);
  //{1:1,2:1,3:1,4:1}
  for (let key in map) {
    const num = Number(key);
    //出现次数map[key]
    while (map[key] > 0) {
      if (map[k - num] > 0) {
        //要找的另一个数是否存在？
        if (k - num !== num) {
          //如果不是同一个数，那直接都减1个
          map[k - num]--;
          map[key]--;
          res++;
        } else {
          //如果是同一个数 那就要大于等于2才能继续 否则就跳过了
          if (map[key] >= 2) {
            map[k - num]--;
            map[key]--;
            res++;
          } else {
            break;
          }
        }
      } else {
        //如果不存在 跳出循环
        break;
      }
    }
  }
  return res;
}
