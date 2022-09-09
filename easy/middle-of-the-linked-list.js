/**
 * 快慢指针 简化
 * 当链表层数为奇数时
 *  循环会因为fast.next为null而不满足条件跳出循环
 * 而当链表层数为偶数时
 *  快指针再最后一次前因为之后还有一个节点，不会因为条件跳出循环
 *  在走完最后一次后快指针会指向最后一个链表的null
 *  而慢指针也指向了后一个节点
 */
var middleNode = function (head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
/**
 * 快慢指针
 * 因为快指针每次走两步而慢指针每次走一步
 *  所有当快指针走到链表末尾时，慢指针刚好再链表的中间层
 * 而当链表层数为偶数时，快指针最后一次能走的位置为倒数第二层
 *  再往下走就会报错
 *  而题目要求中间节点有两个时返回第二个中间节点
 *    也就是当节点为偶数需要返回链表中间靠后的节点
 *  这时就需要让快指针只走一步到达链表的最底层
 *  这时fast.next为null不会再进入循环
 *  直接返回slow
 */
var middleNode = function (head) {
  let fast = head;
  let slow = head;
  while (fast.next) {
    slow = slow.next;
    if (fast.next.next) {
      fast = fast.next.next;
    } else {
      fast = fast.next;
    }
  }
  return slow;
};
