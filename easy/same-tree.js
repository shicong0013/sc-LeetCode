/**
 * 递归 深度优先
 * 先排除两种边界情况，当p和q都是null时则两个节点时相同的
 * 而当只有其中一个为null时，则两个树时不相同的
 * 最后就只剩下一种情况，判断两个数的值是否相等
 *  当两个树值相等时，还有确定两个数的左右子节点是否相等
 *  就需要递归调用了
 */
var isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  }
  if (!p && q || p && !q) {
    return false
  }
  return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
