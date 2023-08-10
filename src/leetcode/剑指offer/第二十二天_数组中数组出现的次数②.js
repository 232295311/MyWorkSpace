var singleNumber = function (nums) {
  // 数组中除了要找的那个数之外，其他数字都会出现三次.
  // js中的与运算（&操作符），
  // 那我们创建一个长度为32的数组，i代表第几位，从最后一位0开始，累加数组中每一个数字的这一位，如果结果可以被3整除,
  // 说明我们要找的数字在这一位是0，否则是1.
  let res = 0;
  for (let i = 0; i < 32; i++) {
    let cnt = 0;
    let bit = 1 << i;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] & bit) cnt++;
    }
    if (cnt % 3 !== 0) res = res | bit;
  }
  return res;
};
