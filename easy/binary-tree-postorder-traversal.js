/**
 * 迭代
 * cur为指向当前节点
 * 后序遍历可以看成反转后的先序遍历，只是要注意左右子树push的顺序
 * 因此可以先把当前子树的根节点先push进数组
 * 因为先进后出的原因，且最终结果需要反转，反转前的结构应该为 根 右 左
 *   反转后结构才能为正确的后序遍历，左 右 根
 * 因此需要先把当前节点的左侧先push进数组，右侧后push进数组
 */
var postorderTraversal = function (root, res = []) {
  if (!root) return res;
  const stack = [root];
  let cur = null;
  do {
    cur = stack.pop();
    res.push(cur.val);
    cur.left && stack.push(cur.left);
    cur.right && stack.push(cur.right);
  } while (stack.length);
  return res.reverse();
};
/**
 * 递归
 * 递归函数
 *  当前节点为null时直接返回
 *  否则，递归调用当前节点的左子节点，然后再调用右子节点，最后把当前节点的值push
 */
var postorderTraversal = function (root) {
  var res = [];
  function f (root) {
    if (!root) {
      return;
    }
    f(root.left);
    f(root.right);
    res.push(root.val);
  }
  f(root);
  return res;
};
