/**
 * 栈
 * 一个用来存储树所有节点的栈变量stk，一个结果数组
 * 使用栈的话需要先把从中间节点开始，遍历所有左侧节点并存储起来
 * 遍历时为了得到下一层的节点root需要被赋值为left或right子节点
 * 每被赋值一次，栈中就会被push进一个节点
 * 当循环遍历到整个树的最左侧的叶子节点时，因为root为null
 * 这时内部循环无法进行，从栈中取除root的上一个节点赋值给root
 * 因为左侧为空，则把当前节点push进结果数组，然后再开始遍历右侧子节点
 * 如果右侧节点也为空，不进入内部循环，这时就会把上一次push节点的父节点再push进数组
 *  因为该节点的左侧已经遍历结束了
 */
var inorderTraversal = function (root) {
  var res = [];
  var stk = [];
  //stk为空时，长度为0，0为false
  while (root || stk.length) {
    while (root) {
      stk.push(root);
      root = root.left;
    }
    root = stk.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
};

/**
 * 递归
 * 结果需树的所有值存储到数组中返回，因为需要声明一个返回的数组变量
 * 而递归会每次调用程序本身，如果把每次的树的值存储到数组再返回整个数组
 * 那最终结果是一个二维数组，所以需要新声明一个递归的程序
 * 递归程序中先确认边界条件，当一个节点的值为null时则不需要做任何事，直接return
 * 而root有值时，因为时中序遍历，需要先存储左边的子节点再根节点在右边子节点
 * 因为把左侧子节点递归调用，这样会一直深入到左侧子节点的最深处，直至左侧为null
 * 当左侧子节点为null时说明该节点为叶子节点，返回null后执行下一步
 *  把当前节点的值push进最终返回的数组
 * 然后再递归调用右侧字节点
 */
var inorderTraversal = function (root) {
  var result = [];
  function f (root) {
    if (!root) {
      return;
    }
    f(root.left);
    result.push(root.val);
    f(root.right);
  }
  f(root)
  return result;
};
