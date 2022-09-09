/**
 * 问号表达式精简
 */
var maxDepth = function (root) {
  return root == null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
/**
 * 递归
 * 先假设二叉树左右两侧都只有一个节点
 *  这时把左右两边的节点分别带入函数
 *   因为节点值不为null，还能再调用一次
 *    但这时被调用一次的节点，左右两侧的子节点都是null
 *    再次把左右两侧的节点调用时就会遇见边界条件，这时递归返回
 *   左右两侧都返回0，两个0取最大值然后+1为当前深度
 *  另一侧因为也是只有一个节点，也返回1，然后两个1取最大值再+1
 *  2为最开始假设的只有一层深度数的最大深度
 *  当最简单的结构都能正常时，其他的结构也就正常了
 */
var maxDepth = function (root) {
  if (root == null) {
    return 0;
  }
  let left = maxDepth(root.left);
  let righ = maxDepth(root.right);
  return Math.max(left, righ) + 1;
};
