/**
 * 递归
 * 每次递归都会选择list1或list2中一个的next接收后续递归
 *  例如最开始list1比list2小，则选择list1做当前层链表接收递归的返回值
 *  因为当前层链表的val值较小，已经比对过了，所以递归时需要把list1.next当作list1传入
 * 直至最后有一个链表为空时，那剩下的另一个链表的所有值都是最大的
 * 则之间返回另一组链表，结束递归，让其拼接在上一层的next
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

/**
 * 迭代
 * 先创建链表头cur用来存储之后之后排序好的链表，并且用于最后返回链表
 * dummy则用来每排序一次后保存当前被拼接上的链表
 * 遍历两个链表，哪个值小则当前链表最外层拼接再dummy上
 *  并且被拼接的链接要赋值为它的下一层，用于下一次对比
 *  而dummy也要等于它的下一层，用于拼接下次一对比时较小的链表
 */
var mergeTwoLists = function (list1, list2) {
  let cur = {
    var: 0,
    next: null
  }
  let dummy = cur;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      dummy.next = list1;
      list1 = list1.next;
    } else {
      dummy.next = list2;
      list2 = list2.next;
    }
    dummy = dummy.next;
  }
  dummy.next = list1 || list2;
  // while(list1){
  //   dummy.next = list1;
  //   dummy = dummy.next;
  //   list1 = list1.next;
  // }
  //   while(list2){
  //   dummy.next = list2;
  //   dummy = dummy.next;
  //   list2 = list2.next;
  // }
  return cur.next
};
