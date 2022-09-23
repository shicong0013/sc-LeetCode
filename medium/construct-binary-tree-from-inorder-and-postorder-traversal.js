/**
 * 递归
 * 后续遍历的最后一位为当前树的根节点，用其创建出树
 * 用根节点在中序遍历中查找出位置，就可以分出左右子树
 * 在分别递归，把返回值挂在根节点的左右子树上
 */
var buildTree = function (inorder, postorder) {
  if (!postorder.length) {
    return null;
  }
  var root = new TreeNode(postorder.at(-1));
  var index = inorder.indexOf(postorder.at(-1))
  root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));
  root.right = buildTree(inorder.slice(index + 1), postorder.slice(index, -1));
  return root;
};
