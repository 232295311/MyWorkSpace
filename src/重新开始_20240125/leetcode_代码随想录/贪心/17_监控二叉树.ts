/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function minCameraCover(root: TreeNode | null): number {
  /**先找到贪心的思路：叶子节点放不放摄像头呢？肯定不放啊 因为这样可以直接少一整层的摄像头，
       *那么我们就可以找到思路：【自底向上】给叶节点的父节点放摄像头，然后再往上递归完成后继摄像头布置
       *用动态规划状态机的思想：我们给每个节点分3种状态：用0,1,2表示
       *0.没有被摄像头范围覆盖（无覆盖）
       *1.节点就是摄像头
       *2.被摄像头范围覆盖了（有覆盖）
       
       自底向上，我们遍历到一个节点时，根据左右子节点的情况，我们可以给这个节点安排放不放摄像机：
       1. 左节点为空，右节点为空（叶节点）|| 左节点覆盖 且 右节点覆盖：
          该节点返回状态0。
       2. 左节点或右节点至少有一个为【无覆盖】：
          该节点返回状态1。
       3. 左节点或右节点至少有一个为【摄像头】：
          该节点返回状态2。
       */
  let res = 0;
  function dfs(curr: TreeNode | null): 0 | 1 | 2 {
    if (curr == null) {
      return 2; //空节点返回状态2【有覆盖】 这样叶节点才不需要摄像头
    }
    const left = dfs(curr.left); //左
    const right = dfs(curr.right); //右
    //自底向上————后序遍历操作

    if (left === 2 && right === 2) {
      //左节点覆盖 且 右节点覆盖：
      return 0;
    }
    if (left === 0 || right === 0) {
      //左节点或右节点至少有一个为【无覆盖】
      //   包括【左=0 右=0,1,2】【左=0,1,2，右=0】5种情况
      res++;
      return 1; //布置摄像头
    }
    if (left === 1 || right === 1) {
      //左节点或右节点至少有一个为【摄像头】：
      //   包括【左=1，右=1,2】【左=1,2，右=1】3种情况
      return 2;
    }
  }
  const rootResult = dfs(root); //根节点如果范围无覆盖的情况，还需要补一个摄像头给它
  return rootResult === 0 ? res + 1 : res;
}
