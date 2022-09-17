/**
 * 栈
 * 声明一个stk栈用来存储未完成翻转的节点
 * 循环的条件为只有栈不为空就继续
 *  条件不能加上root,否则循环到最后时，root为最后一个被翻转的节点
 *    这时条件为真会再进入一次循环，而这时栈内已经没有节点需要被调换了
 *    root就变成栈中pop出的undefined，而undefined没有节点，就会报错
 *  先从栈中取出一个节点进行调换
 *  调换结束后，如果左右两侧节点不为空，就puhs进栈中等下次循环时再调用
 *  最终直至把栈内所有的节点都调换一遍
 */
var invertTree = function (root) {
  if (!root) {
    return null
  }
  var dummy = root
  var stk = [root];
  while (stk.length) {
    root = stk.pop()
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    if (root.left) {
      stk.push(root.left);
    }
    if (root.right) {
      stk.push(root.right)
    }
  }
  return dummy;
};

/**
 * 递归
 * 假设一个只有左右两个节点的树结构需要调换两侧节点， [2,1,3]
 *  因为当前根节点不为空所有可以进入if语句
 *    先把要先调换的left节点先保存下
 *    这时左侧节点指向的1变为递归调用右侧节点3的返回结构
 *      当叶子节点3被递归调用时，它的左右两侧节点都为null
 *      所有再次被递归调用时都会之间返回null，看起来就像时什么都没改变
 *    而当什么都没改变的3节点被返回给左侧节点时，就发生了调换
 *    右侧同理，自下向上的反转
 */
var invertTree = function (root) {
  if (root) {
    var temp = root.left
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
  }
  return root;
};
