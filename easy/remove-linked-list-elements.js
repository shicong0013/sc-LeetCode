/**
 * 递归
 * 通过递归进入到最内侧链表
 * 然后用return来逐层处理当前层val是否相等
 */
var removeElements = function  head, val) {
  if  (!head ) {
    return head
  }
  head.next = removeElements(head.next, val);
  return head.val == val ? head.next : head;
};

/**
 * 迭代
 * 在head外再套一层链表防止出现
 *  需要删除第一个链表元素
 *  所有链表都有删除
 * 当链表的next不为null时就循环
 * 判断next的val是否等于val
    后返回newhead的next，原链表项
  /
  r removeElements = function (head, val) {
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
