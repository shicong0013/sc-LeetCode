/**
 * 递归
 * 创建一个函数当传入的链表的next存在时就把链表的next传入函数本身
 *  然后当count=n时表示所在层数的下一层为需要删除的那一层
 *  当递归到最内层时因为第一个if不满足，函数会往后运行
 *  当第二个if也不满足时则说明当前层链表不是需要删除的链表
 *  这时再count++
 *  函数执行完，返回上一层递归中
 * 因为不需要接收递归函数的返回值所有
 * 直接调用创建的递归函数，传入dummy
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let count = 0;

  dg(dummy);
  return dummy.next;

  function dg (dummy) {
    if (dummy.next) {
      dg(dummy.next)
    }
    if (count == n) {
      dummy.next = dummy.next.next
    }
    count++;
  }
};
/**
 * 快慢指针迭代
 * 要删除第n个节点可以先用一个指针进入列表的第n层
 * 然后再用一个慢指针与已经提前进入列表第n层的快指针一起迭代
 * 当快指针到底链表底部时，慢指针就到达了要删除节点的上一层
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let fast = dummy;
  let slow = dummy;
  while (n > 0) {
    fast = fast.next;
    n--;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};
