/**
 * 递归
 * 与112类似，只是递归函数不需要返回值
 * 再用一个数组存储当前路线上的所有节点值
 * 当root.val与targetSum相等时则当前路线正确
 * 然后把存储的节点push进返回的数组中
 * 最后的path.pop()为把当前层的节点从路线中删除
 *  这样每当要从一层递归中返回时也会把当前层的val从path中删除
 *  不会影响到之后走其他路线
 */
var pathSum = function(root, targetSum) {
  // paht相对于递归函数f为外层作用域的变量，可以不用传入函数中
  var path = [];
  var reuslt = []
  f(root, targetSum, path);
  return reuslt;
  function f(root, targetSum, path){
    if(!root){
      return false;
    }
    path.push(root.val)
    if(root.val == targetSum && !root.left && !root.right){
      //如果只是result.push(path)相当于浅复制
      // 当最后pop时会把数组中的值都删除，返回的为空数组
      reuslt.push([...path]);
    }
    f(root.left, targetSum - root.val, path);
    f(root.right,targetSum - root.val, path);
    path.pop();
  }
};
