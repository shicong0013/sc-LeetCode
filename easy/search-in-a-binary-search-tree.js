/**
 * BFS
 * 与递归的方式一样用问号表达式决定root称为左子树还是右子树
 */
var searchBST = function(root, val) {
  while(root){
    if(root.val === val){
      return root;
    }
    root = val < root.val ? root.left : root.right;
  }
  return root;
};

/**
 * DFS优化
 * 因为树为搜索二叉树
 *  因此可以用问号表达式来决定去左数还是右数
 *  并且是用return调用自己，因此如果找到节点的话，该节点会一路向上return
 */
var searchBST = function(root, val) {
  if(!root){
    return null;
  }
  if(root.val === val){
    return root;
  }
  return searchBST(val < root.val ? root.left : root.right, val)
};

/**
 * DFS
 * 普通的递归
 * 当找到节点时把节点存储到res中
 * 最后返回res
 */
var searchBST = function(root, val) {
  var res = null;
  f(root, val)
  return res;
  function f(root, val){
    if(!root){
      return;
    }
    if(root.val === val){
      res = root;
      return;
    }
    f(root.left, val);
    f(root.right, val);
  }
};
