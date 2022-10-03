/**
 * 先先序遍历拿到整个树按顺序的节点数组
 * 然后遍历整个数组，让前一个结点的right指向后一个结点
 */
var flatten = function(root) {
  var list = [];
  f(root, list);
  for(var i = 1; i < list.length; i++){
    var pre = list[i-1];
    var cur = list[i];
    pre.left = null;
    pre.right = cur;
  }
};
function f(root, list){
  if(!root){
    return;
  }
    list.push(root);
    f(root.left, list);
    f(root.right, list);
}
/**
 * 寻找先驱结点
 * 有子树应该接在左子树的最右侧子树后
 * 所以先判断当前节点是否有左子树
 *  没有则进入下一层子树
 *  有的话则把当前左子树保存下来(next)
 *    然后左子树一直往下寻找到最右侧的子树
 *    然后把之前节点的右子树拼接在所找到的最右侧子树上
 *  接着把这一层的左子树赋为null
 *  再把之前保存的左子树赋到右子树上
 *  这样一层就调整好了
 */
 var flatten = function(root) {
  while(root){
    if(root.left){
      var next = root.left;
      var dummy = next
      while(dummy.right){
        dummy = dummy.right;
      }
      dummy.right = root.right;
      root.left = null;
      root.right = next;
    }
    root = root.right;
  }
};
