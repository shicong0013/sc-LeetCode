/**
 * 递归
 * 边界为当前层已经是最后一层无需调换，或者下一层没有下一层了，无法调换
 *
 * 假设链表长度为二的话只需要1与2调换
 *  因为1将不再指向2，2要成为新的头结点，需要先用一个变量把2保存起来
 *  然后再将1的next指向2的next(null)
 *  接着再将2的next指向1
 *  完成调换
 * 只有两层的链表调换完成
 * 假设链表不止两层，那就需要把2之后的结点再传递给函数
 * 但是传递需要再调换步骤的上面
 * 如果先进行调换，再指向递归的话，因为head指向的为头结点
 * 而经过调换后头结点为第二个结点的了，这时head.next.next指向的是第4个结点
 * 如果把递归改成head.next = swapPairs(head.next)后可以放在调换后
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  head.next.next = swapPairs(head.next.next);
  let dummy = head.next;
  head.next = head.next.next;
  dummy.next = head;

  return dummy;
};
