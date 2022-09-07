/**
 * 因为无法得到删除节点的上一个节点
 * node为需要删除的节点
 * 那把要删除节点的val赋值为它下一个节点的val
 * 要删除节点于它下一个节点变得一样了
 * 这时再把要删除节点的next赋值为下一个节点的next
 * 使其的之间不再是下一个节点
 * 也达到了删除的效果
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
