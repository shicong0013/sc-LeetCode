/**
 * DFS
 * 从根节点开始递归遍历每个节点
 * 只要不是叶子节点就把上一次传入的值乘10再加上当前节点的val
 *  就等于从根节点到这个节点的值
 *  并把这个值与左右节点再递归调用
 * 如果为叶子则返回当前的值
 */
var sumNumbers = function(root) {
  var sum = 0;
  return f(root, sum);
  function f(root, sum){
    if(!root){
      return 0;
    }
    var cur = sum * 10 + root.val;
    if(!root.left && !root.right){
      return cur;
    } else {
      return f(root.left, cur) + f(root.right, cur);
    }
  }
};
/**
 * BFS
 * 用两个队列分别存储节点和节点的值
 * 每次取出节点和节点值，当该节点的左右子树为空时该节点为叶子节点
 *  就把取出的值之间加到sum上
 * 否则把左右子树和左右子树的值加上该节点的值push进队列中
 */
 var sumNumbers = function(root) {
  if(!root){
    return 0;
  }
  var sum = 0;
  var rootQuee = [root];
  var sumQuee = [root.val];
  while(rootQuee.length){
    var dummy = rootQuee.pop();
    var count = sumQuee.pop();
    const left = dummy.left, right = dummy.right;
    if(!dummy.left && !dummy.right){
      sum += count;
    }
    if(left){
      rootQuee.push(left);
      sumQuee.push(count * 10 + left.val);
    }
    if(right){
      rootQuee.push(right);
      sumQuee.push(count * 10 + right.val);
    }
  }
  return sum
};
