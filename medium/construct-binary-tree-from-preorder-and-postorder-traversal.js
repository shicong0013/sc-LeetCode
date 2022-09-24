/**
 * 递归
 * 与前中和中后的思路类似
 * 先用前序遍历的第一个元素生成根元素
 * 然后前序遍历的第二个元素应该为左子树的第一个元素
 * 用这个元素在后序遍历中查找可以得左子树的根元素在后序遍历中的位置
 * 从而确定左子树的返回
 * 然后分别把左右子树递归
 */
var constructFromPrePost = function (preorder, postorder) {
  if (!preorder.length) {
    return null;
  }
  var root = new TreeNode(preorder[0]);
  var index = postorder.indexOf(preorder[1]);
  root.left = constructFromPrePost(preorder.slice(1, index + 2), postorder.slice(0, index + 1));
  root.right = constructFromPrePost(preorder.slice(index + 2), postorder.slice(index + 1, -1));
  return root;
};
