/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
var constructArr = function (a) {
  //题目所求数组B[i]，
  //其实相当于 B[i] = A[0]*A[i]*...A[i-1]  *  A[i+1]*A[i+2]...A[n-1]
  //画成矩阵图，其实就相当于跳过了中间的第i个元素。然后 左边乘机 乘以 右边的乘积
  //那么我们使用resLeft,resRight分别代表左边乘机和右边乘机
  //res[i] = resLeft[i]*resRight[i]

  /**
   *               1  2  3  4  5
   *             1 -
   *             2    -
   *             3       -
   *             4          -
   *             5             -
   */

  let res = [];
  let resLeft = [1];
  let resRight = new Array(a.length);
  for (let i = 1; i < a.length; i++) {
    //先构建resLeft
    resLeft[i] = resLeft[i - 1] * a[i - 1];
  }
  resRight[resRight.length - 1] = 1;
  for (let j = a.length - 2; j >= 0; j--) {
    //再构建resRight
    resRight[j] = resRight[j + 1] * a[j + 1];
  }
  for (let i = 0; i < a.length; i++) {
    //最后合并成为res
    res[i] = resLeft[i] * resRight[i];
  }
  return res;
};
