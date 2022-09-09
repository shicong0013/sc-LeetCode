/**
 * 迭代
 * 在head外再套一层链表防止出现
 *  需要删除第一个链表元素
 *  所有链表都有删除
 * 当链表的next不为null时就循环 
 * 判 断next的v al是否等于val
 * 最后返回newhead的next，原链表项
 */
var removeElements = function (head, val) {
  let newhead = {
    val: 0,
    next: head
  };
  dummy = newhead;
  while (dummy.next) {
    if (dummy.next.val == val) {
      dummy.next = dummy.next.next
    } else {
      dummy = dummy.next;
    }
  }
  return newhead.next;
};
