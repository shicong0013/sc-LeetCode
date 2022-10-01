/**
 * DPS
 * 如果用一个count加每层的val值直至等于targetSum的话
 *  当count大于targetSum的话需要减去当前的val，并返回false，然后走另一个节点
 *  但是加上判断count大于targetSum的条件时
 *    如果目标值为负数的话，会导致count一直大于targetSum
 * 所以用targetSum是否等于val为判断条件，当不等于时
 *  则把减去当前层val的值作为目标递归传入
 *  当targetSum等于当前val时，并且左右子树为空的情况下才返回真
 *   否则就一直递归调用至根节点后返回false
 */
var hasPathSum = function(root, targetSum) {
  if(!root){
    return false;
  }
  if(targetSum == root.val && !root.left && !root.right){
    return true;
  }
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};
/**
 * BFS
 * 用一个栈存储每层的节点和当前累加的值
 * 每次循环时从栈中取出一组值
 * 当当前层的值与targetSum相等并且左右子树为空时，返回真
 * 如果子树存在则把子树的节点和count加上子树的val放进栈中
 */
 var hasPathSum = function(root, targetSum) {
  if(!root){
    return false;
  }
  var stk = [[root, root.val]];
  while(stk.length){
    var [dummy, count] = stk.pop();
    if(count == targetSum && !dummy.left && !dummy.right){
      return true;
    }
    if(dummy.left){
      stk.push([dummy.left, count + dummy.left.val]);
    }
    if(dummy.right){
      stk.push([dummy.right, count + dummy.right.val])
    }
  }
  return false;
};
