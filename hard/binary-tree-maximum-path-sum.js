/**
 * 深度优先
 */
var maxPathSum = function (root) {
  let maxSum = -Infinity; // 求最大路徑先初始化為最小值
  dfs(root)
  return maxSum;

  function dfs(root){
    if(root == null){
      return 0;
    }
    let left = dfs(root.left); // 求的左子树的子树的最大路径
    let righ = dfs(root.right); // 返回右子树的子树的最大路径
    let innerMax = root.val + left + righ;
    maxSum = Math.max(innerMax, maxSum); // 以当前节点作为root的最大值与maxSum对比

    let outMax = root.val + Math.max(0, left, righ); // 当前节点只是路径上的一个节点时，只能选取一个子树相加
    return outMax < 0 ? 0 : outMax; // 返回当前这个路径分支的值，当前路径如果为负则返回0
  }
};
