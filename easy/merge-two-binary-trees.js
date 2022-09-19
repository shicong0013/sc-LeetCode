/**
 * 递归 不修改输入参数
 * 当两个树有一个为空时，则直接返回另一个不为空的，或两个树都为空，返回空
 * 新建一个树把两个树的值相加，null相对于0，不影响相加
 * 最后返回新树
 */
var mergeTrees = function (root1, root2) {
  if (!root1 || !root2) {
    return root1 || root2;
  }
  var newTree = new TreeNode(root1.val + root2.val);
  newTree.left = mergeTrees(root1.left, root2.left);
  newTree.right = mergeTrees(root1.right, root2.right);
  return newTree;
};
/**
 * 递归
 * 当两个树都存在时则可以进入条件合并两个树的值
 *  并且把两个树的子节点递归调用，把返回值给1号树的 子节点
 * 因为会修改树1，所以返回的或运算要把树1放在前面，当树1不为空时就返回树1
 */
var mergeTrees = function (root1, root2) {
  if (root1 && root2) {
    root1.val = root1.val + root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
  }
  return root1 || root2;
};
