/**
 * 递归
 * 用快慢双指针，left走一步时riht走两步
 *  当条件不满足时left差不多就在链表中间部分了
 * 把left.next给righ，就得了链表的右半部分
 * 然后left.next = null，链表从中间开始的层数就没有再指向后半部分的链表了
 *  保存原始链表的head也因为中间部分的链表指向了null，导致原始链表也丢失了后半部分
 * 这时把分成左右两个部分的链表分别递归，把链表最终分成只有单层的链表
 * 最后调用21题写的合并链表函数
 *  当链表只有单抽时可以看作是有序的
 *  返回到上一层递归后，两个单层的链表通过函数合并成了一个双层的有序列表
 *  一直到最后合并成一个完整的有序列表
 */
var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let left = head;
  let righ = head;
  //因为righ走的快，所以为了不出现判断null.next,所以得先判断righ.next
  while (righ.next && righ.next.next) {
    left = left.next;
    righ = righ.next.next;
  }
  righ = left.next;
  left.next = null;
  left = head;

  left = sortList(left)
  righ = sortList(righ)
  return mergeTwoLists(left, righ)
};
