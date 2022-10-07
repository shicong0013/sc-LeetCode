/**
 * DFS
 * 因为树为二叉搜索树，所以当key比当前节点val大时则要删除的在右侧子树，否则在左侧子树
 * 最后一种情况为要删除的就是当前节点
 *  如果当前节点左子树为空，那直接返回右子树，就相当于删除了当前节点
 *  如果当前节点右子树为空，那就直接返回左子树
 *  如果两侧子树都不为空
 *    因为左子树的最大值会比右子树的最小值小
 *     所以需要先找到右子树的最左侧子树
 *     然后把左子树给右子树的最左侧子树
 *     最后返回右子树
 */
var deleteNode = function(root, key) {
  if(!root){
    return root;
  }
  if(key > root.val){
    root.right = deleteNode(root.right, key);
  } else if(key < root.val){
    root.left =  deleteNode(root.left, key);
  } else {
    if(!root.left){
      return root.rightr
    } else if(!root.right){
      return root.left;
    } else {
      let node = root.right;
      while(node.left){
        node = node.left;
      }
      node.left = root.left;
      root = root.right
    }
  }
  return root;
};
