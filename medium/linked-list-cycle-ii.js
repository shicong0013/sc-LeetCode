/**
 * 快慢指针
 * 用快慢两个指针，快指针每次走两步，慢指针每次走一步
 * 当链表有循环时，两个指针一定会相等
 * 这时让快指针变为每次走一步并且从链表头开始走
 * 快慢两个指针将会在循环的入口处相遇
 * 具体为什么还不理解
 */
var detectCycle = function (head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) {
      fast = head;
      while (fast != slow) {
        fast = fast.next;
        slow = slow.next;
      }
      return slow;
    }
  }
  return null;
};
