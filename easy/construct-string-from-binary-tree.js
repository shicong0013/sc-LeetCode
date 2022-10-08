/**
 * DFS
 * 因为要求右子树不存在时可以不用返回空括号，左子树则必须要返回括号
 * 所以方右子树不存在时就然后用当前节点val与左子树递归调用的值组成的字符串
 *  如果左子树为空，会在第一个if返回一个空字符串，回到上层就是一个空的括号
 * 否则就是右当前节点与左子树递归调用和右子树递归调用组成的字符串
 */
var tree2str = function(root) {
  if(!root){
    return '';
  }
  if(!root.left && !root.right){
    return `${root.val}`;
  }
  if(!root.right){
    return `${root.val}(${tree2str(root.left)})`
  }
  return `${root.val}(${tree2str(root.left)})(${tree2str(root.right)})`;
};
