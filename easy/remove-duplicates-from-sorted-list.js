/**
 * 递归
 * 倒序删除
 * 通过递归一直进入到了链表的最后一层
 *  触发边界条件head.next为null时返回当前层的链表
 * 上一层的链表通过与最内层返回的next为null的链表组成了2层链表
 * 然后判断当前层的val是否与下一层val一样
 * 处理完后再把当前层返回给上一层
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head;
  }
  head.next = deleteDuplicates(head.next);
  if (head.val == head.next.val) {
    head.next = head.next.next;
  }
  return head;
};
/**
 * 迭代
 * 循环时当前层链表的next不为null才有必要与下一层进行对比
 *  当与下一层val值一样时，则当前层的next 赋值为下一层的next
 *    相对于不在next不在指向下一层，等同于删除
 *  而不一样时则把dummyHead赋值为下一层
 */
var deleteDuplicates = function (head) {
  let dummyHead = head;
  while (dummyHead.next) {
    if (dummyHead.val == dummyHead.next.val) {
      dummyHead.next = dummyHead.next.next;
    } else {
      dummyHead = dummyHead.next;
    }
  }
  return head;
};
