/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  // 判断该数组是不是某二叉搜索树的后序遍历结果.
  //因为是二叉搜索树，它左节点肯定是小于根节点，根节点小于右节点的
  //根节点肯定是倒数第一个数，那么找到第一个比根节点大的数的位置，记为m，即可得知左右子树的区间
  //然后依次分而治之。
  //那么怎么判断是否为二叉搜索树呢？
  //1.左子树需要全部都小于根节点，OK，这点在划分左右子树的时候已经落实了。
  //2.右子树需要全部都大于根节点，那么就需要遍历一下右子树。

  //i表示左边界，j表示右边界
  const recur = (i, j) => {
    //递归终止条件
    if (i >= j) {
      return true;
    }
    //递归时进行的操作
    const rootVal = postorder[j]; //拿到根节点
    let m = i; //记录第一个比根节点大的数的位置,初始值是左边界
    while (postorder[m] < rootVal) {
      m++;
    }
    //m找到位置了！左子树是[i,m-1]，右子树是[m,j-1]
    let res = true;
    for (let x = m; x < j; x++) {
      //遍历一下右子树 看能不能找到比根节点小的值
      if (postorder[x] < rootVal) {
        res = false;
        break;
      }
    }
    return res && recur(i, m - 1) && recur(m, j - 1);
  };

  return recur(0, postorder.length - 1);
};
