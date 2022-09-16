/**
 * 栈
 * 前序遍历需要每次先返回根节点再左侧left节点，然后再右侧right节点
 * 因为内部循环每当为一个不为空节点时就把当前节点的val值push进res
 * 然后再把root赋值为它的左侧子节点
 * 直至左侧子节点为null时跳出内部循环
 * 这时因为左侧为空，从栈中取出null的父节点，并把root赋值为它的right子节点
 * 再进入内部循环遍历right侧的左侧子节点
 * 如果right为空，则再从栈取出上次取出节点的父节点
 */
var preorderTraversal = function (root) {
  let res = [];
  let stk = [];
  while (root || stk.length) {
    while (root) {
      res.push(root.val);
      stk.push(root);
      root = root.left;
    }
    root = stk.pop();
    root = root.right;
  }
  return res;
};
/**
 * 递归
 * 声明一个储存结构的遍历res
 * 递归调用的函数f
 *  边界条件
 *    该节点为空时直接返回
 *  否则先把该节点的值push进res
 *  然后再一次递归调用left和right
 */
var preorderTraversal = function (root) {
  var res = [];
  function f (root) {
    if (!root) {
      return;
    }
    res.push(root.val);
    f(root.left);
    f(root.right);
  }
  f(root);
  return res;
};
