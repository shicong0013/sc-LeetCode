/**
 * 迭代 广度优先
 * 每层输出树时需要用一个栈来储存当前层的节点
 * 只要栈不为空那就说明还有节点需要遍历
 * 遍历当前层节点时每遍历一个节点，就把当前节点push进临时数组
 *  并检查该节点的左右子树是否需要遍历，遍历则也push进数组保存起来下次遍历
 *  最后把用来保存下次需要遍历节点的数组赋值给当前的栈
 * 如果只用一个栈维护的话，则需要在循环前先把该层需要遍历的数量保存下来
 *  n就只是一个用来统计当次遍历时需要循环的次数
 *  然后把每次得到的当前层子树push进数组末尾
 *  取节点时需要从最前取出当前层的节点
 */
var levelOrder = function (root) {
  let arr = [];
  if (!root) {
    return arr;
  }
  let stk = [root];
  while (stk.length) {
    var temp = [];
    var n = stk.length;
    for (var i = 0; i < n; i++) {
      var node = stk.shift();
      temp.push(node.val);
      if (node.left) {
        stk.push(node.left);
      }
      if (node.right) {
        stk.push(node.right);
      }
    }
    arr.push(temp);
  }
  return arr;
};
