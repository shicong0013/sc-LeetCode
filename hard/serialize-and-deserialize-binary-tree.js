//DFS
/**
 * 序列化
 * 递归
 * 前序遍历整个树，按顺序拼接
 * 需要用一个特殊符号存储null，不然如果传入的节点为null时
 * 调用反序列化函数时，null无法调用split方法
 */
var serialize = function (root) {
  if (!root) {
    return 'x'; //也可以存储'null'
  }
  var left = serialize(root.left);
  var right = serialize(root.right);
  return `${root.val},${left},${right}`;
};
/**
 * 反序列化
 * 递归
 * 先把序列化后的字符串用之前的分隔符分开得到数组
 *
 * 因为序列化时是按照先序遍历，所有反序列化时需要从数组前取元素得到的才是根节点
 * 当前值为空时则返回null
 * 否则是用当前的值创建一个树
 * 并把树的左右分别调用函数
 *  当先调用函数后的值为空后则说明当前左子树为空，跳出递归
 *  再右子树
 */
var deserialize = function (data) {
  var list = data.split(',');
  function f (list) {
    var rootVal = list.shift();
    if (rootVal == 'x') { // 存储为字符串null时，这里就需要与'null'对比
      return null;
    }
    const root = new TreeNode(rootVal);
    root.left = f(list);
    root.right = f(list);
    return root;
  }
  return f(list);
};
//BFS
/**
 * 序列化
 * 利用栈，把当前节点的值push进结果数组
 * 并把当前节点的左右子树push进栈待下一轮时取出检查val值
 * 层序遍历
 */
var serialize = function (root) {
  var stk = [root];
  var res = []
  while (stk.length) {
    var rootVla = stk.shift();
    if (rootVla) {
      res.push(rootVla.val);
      stk.push(rootVla.left);
      stk.push(rootVla.right);
    } else {
      res.push('null');
    }
  }
  return res.join(',');
};
/**
 * 反序列化
 * 层序遍历取得数组每两个值为上一层阶段的左右两个子树
 * count指向当前要生成节点的值在list中的位置
 * stk栈则是还需要生成子节点的节点
 * 循环条件为当count小于list长度，则是list内的节点还没处理完
 *  每次循环先从栈中取出要处理的当前节点
 *  然后把属于这个节点的left值与right值从list中取出
 *  因为用TreeNode构造的节点left和right值就为null
 *  所以只需要考虑取出的left与right值不为null时的情况
 *    当值不为null时就用当前left/right的值构造一个新节点
 *    并赋值给当前节点node的left/right
 *    在把这个节点push进栈，之后循环时取出给这个节点生产子节点
 *  最后count需要+2，因为一次处理了左右两个节点的值
 */
var deserialize = function (data) {
  if (data == 'null') {
    return null;
  }
  var list = data.split(',');
  var root = new TreeNode(list[0]);
  var stk = [root];
  var count = 1;
  while (count < list.length) {
    var node = stk.shift();
    var left = list[count];
    var right = list[count + 1];
    if (left != 'null') {
      node.left = new TreeNode(left)
      stk.push(node.left);
    }
    if (right != 'null') {
      node.right = new TreeNode(right);
      stk.push(node.right);
    }
    count += 2;
  }
  return root;
};
