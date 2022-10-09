/**
 * 递归
 * 返回的为一个数组
 *  每层递归返回的都是当前范围所有节点可能创建的树组成的数组
 *  返回到上一层时会在遍历数组内所有的节点再和另一个子树拼接组成一个数组
 * ？
 */
var generateTrees = function(n) {
  if(n == 0){
    return new TreeNode();
  }
  return f(1, n)

  function f(start, end){
    let res = [];
    //当前节点不存在返回null
    if(start > end){
      res.push(null);
      return res;
    }
    //遍历整个范围，以i为当前二叉树的根节点
    for(let i = start; i <= end; i++){
      //以根节点左右两侧的值作为左右子树
      //递归调用获得所有可能的左右子树
      var leftTrees = f(start, i - 1);
      var rightTrees = f(i + 1, end);
      //遍历所有的左右子树，组成所有的可能
      for(let left of leftTrees){
        for(let right of rightTrees){
          let currTree = new TreeNode(i);
          currTree.left = left;
          currTree.right = right;
          res.push(currTree);
        }
      }
    }
    return res;
  }
};
