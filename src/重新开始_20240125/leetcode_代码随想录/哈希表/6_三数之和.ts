function threeSum(nums: number[]): number[][] {
  //相当于在数组中取三个不重复的元素，使之相加为0
  //暴力解法，三重循环O^3。
  //用hash表存前两次循环遍历的结果，最后再遍历一次类似两数相加，O^2，然后去重，去重特别麻烦，做不出来
  //最后选择排序+双指针

  const res: number[][] = [];
  nums.sort((a, b) => a - b); //排序 主要墓地是为了避开重复元素
  for (let k = 0; k < nums.length - 2; k++) {
    //第一个k指针，永远指向最左边的元素，每次自增时跳过重复元素
    if (nums[k] > 0) {
      //如果最左边的数字都小于零，说明后面全部大于0，也就没有可能达成题目要求的条件。
      break; //结束循环
    }
    if (k > 0 && nums[k] === nums[k - 1]) {
      //k=0时肯定要进去循环的，然后k>0,如果此时nums[k]和上个位置数字相等
      continue; //跳过此轮循环
    }

    let i = k + 1; //定义i和j
    let j = nums.length - 1;
    while (i < j) {
      //i一定要比j小
      const sum = nums[k] + nums[i] + nums[j];
      if (sum < 0) {
        //说明需要让sum更大 让i移动到下一个不重复的元素上
        while (i < j && nums[i + 1] === nums[i]) {
          i++;
        }
        i++;
      } else if (sum > 0) {
        //说明需要让sum更小，让j移动到上一个不重复的元素上
        while (i < j && nums[j - 1] === nums[j]) {
          j--;
        }
        j--;
      } else {
        //如果符合要求，保存结果，i和j都移动，k不移动
        res.push([nums[k], nums[i], nums[j]]);
        while (i < j && nums[i + 1] === nums[i]) {
          i++;
        }
        i++;
        while (i < j && nums[j - 1] === nums[j]) {
          j--;
        }
        j--;
      }
    }
  }
  return res;
}
