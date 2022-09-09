/**
 * 递归 从低至上
 * 设定边界条件
 *  当数的节点为null时就递归到了底部，就需要返回
 * 假设树只有一层时
 *  参照24题每返回一层返回当前层数
 *  对比左右两层的差值是否小于2，小于则表示当前层的数是稳定的，则把当前层数+1返回
 * 而不是时则返回-1
 * 再假设左侧或者右侧的树有不是稳定时则不用进入最后的return
 *  则再left和right下各声明一个if判断其返回，结果为-1时则返回-1
 * 最后还有一个树为空的情况，也是稳定的
 *  因为最开始设定的边界时树为空时返回的是当前的层数(最底层)0
 *  因此需要把上面所有的递归放进另一个函数，判断当返回不是-1时就是稳定的树
 */
var isBalanced = function (root) {
  return help(root) != -1

  function help (root) {
    if (root == null) {
      return 0;
    }
    let left = help(root.left);
    if (left == -1) {
      return -1;
    }
    let right = help(root.right);
    if (right == -1) {
      return -1;
    }
    return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
  }
};
