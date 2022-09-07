/**
 * 递归
 * 先把链表的下一层保存到tail
 * 然后把tail递归调用
 *  每递归一次链表都会少一层，直至当前层的next为null时会把当前层返回
 *    当返回到上一层后会把上一层的next指向null，相对于之间没有联系了
 *    然后再把递归前保存的下一层的next指向当前层
 *    这样前后两层的指向就反转了，并且被反转后的上一层指向为null
 * 最开始的第一层因为不会再指向其他层，所以next为null
 * 返回的newHead一直为最内一层，被反转后为最外层链表
 */
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let tail = head.next
  var newHead = reverseList(tail);
  head.next = null;
  tail.next = head;
  return newHead;
}
//精简掉变量
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  var newHead = reverseList(head.next); //每次递归都为当前链表的下一层
  head.next.next = head; //当前层链表的下一层的next指向为当前层，此时为循环链表了
  head.next = null; //把当前层的next赋值为null，循环链表断开，链表的指向反转了
  return newHead;
}
/**
 * 双指针迭代
 * 每次把当前链表的next先保存到temp
 * 然后再把当前项链表的next指向cur
 * 再把已经指向cur的链表赋值给cur，供下次迭代使用
 * 最后再把之前保存到temp中下一级的链表赋值给node
 * 这样就把链表的最外层给去除并保存了起来
 */
var reverseList = function (head) {
  let node = head;
  let cur = null;
  while (node) {
    let temp = node.next;
    node.next = cur;
    cur = node;
    node = temp;
  }
  return cur;
};
