/**
 * 递归
 * 与最大深度不同，有叶子节点的深度才是有效的最小深度
 * 因此如果一侧节点没有叶子节点，则返回时不考虑null的节点深度
 */
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  if (!root.left) {
    return 1 + minDepth(root.right);
  }
  if (!root.right) {
    return 1 + minDepth(root.left);
  }
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};
