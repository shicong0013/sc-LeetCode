/**
 * 快慢指针
 * 当链表中有环时，快指针走两步，慢指针走一步
 * 两个指针终归会相遇
 * while的条件为fast是为了排除空链表
 */
var hasCycle = function (head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) {
      return true;
    }
  }
  return false;
};
