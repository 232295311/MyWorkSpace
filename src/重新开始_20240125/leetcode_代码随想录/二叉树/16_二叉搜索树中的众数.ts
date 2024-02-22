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

function findMode(root: TreeNode | null): number[] {
  //方法1：普通遍历，统计出现频率，给频率排序，这个方法没用到二叉搜索树
  //方法2：中序遍历，它必然是升序，转变成类似滑动窗口，如果和前一个数一致，就增大窗口，不一致就结算
  //结算时，如果当前频率超出结果集频率，记得清空结果集。

  let res: number[] = [];
  let MaxFreq = 0;
  let preValue: number | undefined = undefined;
  let currFreq = 0;
  function dfs(curr: TreeNode | null) {
    if (curr == null) {
      return;
    }
    dfs(curr.left); //左

    if (preValue === undefined) {
      currFreq = 1;
    } else if (preValue === curr.val) {
      //与上个节点值相同
      currFreq++;
    } else if (preValue !== curr.val) {
      //与上个节点值不同
      currFreq = 1;
    }
    preValue = curr.val; //更新pre
    if (currFreq === MaxFreq) {
      res.push(curr.val);
    } else if (currFreq > MaxFreq) {
      res = [curr.val]; //重置
      MaxFreq = currFreq;
    }

    dfs(curr.right); //右
  }
  dfs(root);

  return res;
}
