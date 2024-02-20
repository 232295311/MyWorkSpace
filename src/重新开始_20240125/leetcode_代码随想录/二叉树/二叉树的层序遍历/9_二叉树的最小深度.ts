function minDepth(root: TreeNode | null): number {
  if (root == null) {
    return 0;
  }
  //   dfs
  // 递归终止条件 1.到叶子节点
  if (root.left == null && root.right == null) {
    return 1;
  }
  // 2.左为空或者右为空
  if (root.left == null) {
    return 1 + minDepth(root.right);
  }
  if (root.right == null) {
    return 1 + minDepth(root.left);
  }
  // 3.左右都不为空
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}
