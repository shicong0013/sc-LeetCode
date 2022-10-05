/**
 * DFS
 * 当前节点左右子树为空时则当前节点为叶子节点
 *  那就在字符串后面拼上该节点的值,并把当前的路径push进结果中
 * 否则就说明当前节点还需要继续递归
 *  那在字符串后面除了拼接该节点的值还需要拼接上 ->
 * 最后就是递归左右子树
 * 因为传递了path参数，每当一层递归结束返回到上一层时
 *  path会回溯到递归调用前的值
 */
var binaryTreePaths = function(root) {
  var res = [];
  var path = '';
  f(root, path);
  return res;

  function f(root, path){
    if(!root){
      return;
    }
    if(!root.left && !root.right){
     path += root.val;
      res.push(path);
    } else {
     path += root.val + '->';
    }
    f(root.left, path);
    f(root.right, path);
  }
};
/**
 * BFS
 * 用两个队列分别存储需要还需要遍历的节点与到达该节点的路径
 * 如果该节点的左右子节点为空就push进结果数组
 * 否则就补上当前节点与符号push进队列中
 */
var binaryTreePaths = function(root) {
  if(!root){
    return;
  }
  var res = [];
  var rootQueue = [root]
  var strQueue = [`${root.val}`];
  while(rootQueue.length){
    var node = rootQueue.pop();
    var str = strQueue.pop();
    if(!node.left && !node.right){
      res.push(str);
    }
    if(node.left){
      rootQueue.push(node.left);
      strQueue.push(`${str}->${node.left.val}`);
    }
    if(node.right){
      rootQueue.push(node.right);
      strQueue.push(`${str}->${node.right.val}`);
    }
  }
  return res;
};
