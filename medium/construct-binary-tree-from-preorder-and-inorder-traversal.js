/**
 * DFS
 * preorder为前序遍历，所以该数组的第一个元素为这个数的根节点
 * inorder为中序遍历，从前序遍历得到根节点再中序遍历中查找
 *  可以得到根节点在中序遍历中的索引，就可以知道左右子树的长度
 * 得到根节点的索引后，根据根节点所在的位置，就可以得出前序遍历中
 *  根节点后多少的位置为左子树的值
 * 这样把分别得出的前序遍历的左右子树与中序遍历的左右子树再递归调用
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length == 0) {
    return null;
  }
  let temp = preorder[0];
  let index = inorder.indexOf(temp);
  let root = new TreeNode(temp);
  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
  return root;
};
