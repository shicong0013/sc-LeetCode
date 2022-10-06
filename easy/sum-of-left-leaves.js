/**
 * DFS
 * 递归函数中如果当前节点为空节点则什么都不做直接返回
 * 而如果当前节点的左子树不为空，且左子树的左右子树都为空
 *  那左子树则为叶子节点，需要把它的val累加至sum中
 * 接着递归调用左右子树
 */
var sumOfLeftLeaves = function(root) {
  var sum = 0;
  f(root);
  return sum
  function f(root){
    if(!root){
      return;
     }
    if(root.left && !root.left.left && !root.left.right){
      sum += root.left.val;
    }
    f(root.left);
    f(root.right);
   }
};
/**
 * BFS
 * 创建一个队列存储节点
 * 因为根节点是不需要遍历的，所以直接判断左右节点是否存在
 * 左子节点如果存在则再判断其是否为叶子节点
 *  是则就把其val累加至sum中
 *  否则就把它push进队列中
 * 右节点存在也把其push进队列中
 */
var sumOfLeftLeaves = function(root) {
  if(!root){
    return 0;
  }
  var sum = 0;
  var queue = [root];
  while(queue.length){
    var dummy = queue.pop();
    if(dummy.left){
      if(!dummy.left.left && !dummy.left.right){
        sum += dummy.left.val;
      } else {
        queue.push(dummy.left);
      }
    }
    if(dummy.right){
      queue.push(dummy.right);
    }
  }
  return sum;
};
