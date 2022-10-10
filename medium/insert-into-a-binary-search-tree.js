/**
 * DFS
 * 因为val不会与树中的值重复
 * 所以只需要判断val与当前节点值得大小
 *  比当前节点大则应该添加到右子树中
 *  比当前节点小则应该添加到左子树中
 *  遇到了空节点则是已经到叶子节点，应该在整个位置用val生成节点
 */
var insertIntoBST = function(root, val) {
  if(!root){
    return new TreeNode(val);
  };
  if(val < root.val ){
    root.left =  insertIntoBST(root.left, val);
  };
  if(val > root.val){
    root.right = insertIntoBST(root.right, val);
  };
  return root;
}
