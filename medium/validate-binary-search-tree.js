/**
 * 中序遍历递归
 * 因为中序遍历会把二叉树按照从小到大排列
 * 当测试多次时，为了让pre一直为无限小，需要用另外一个函数递归
 */
var isValidBST = function(root) {
  // 首先需要先递归到整个树最底部的左子树，这个节点为最小值
  // 为了保存最小的左子节点，应该设置一个更小的变量保存
  var pre = -Infinity;
  return f(root)
  function f(root){
    // 为了能一直进入到最底部时返回，得设置一个边界条件
    if(!root){
      return true;
    }
    // 最底层子树的作用节点为null当深入到节点为null时就需要往上返回一层，回到有值的节点
    // 当回到有值得节点后应该就不进入if返回到上一层，而是执行if之后得代码
    if(!f(root.left)){
      return false;
    }
    // 当前结点比前一个结点小时说明二叉树不正确
    if(root.val <= pre){
      return false;
    }
    pre = root.val
    return f(root.right);
  }
};
