/**
 *
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
