/**
 * 广度优先搜索
 * 与102，正序输出一样的思路，只是在最终push到返回数组中，改成从前插入
 */
var levelOrderBottom = function (root) {
  var resul = [];
  if (!root) {
    return resul;
  }
  var stk = [root];
  while (stk.length) {
    var n = stk.length;
    var temp = [];
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
    resul.unshift(temp);
  }
  return resul;
};
