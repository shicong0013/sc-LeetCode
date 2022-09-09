// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }
/**
 * 递归
 * 递归部分
 *  当前l1与l2的val值加上carry(进位)得到个位数与新的进位
 *  新声明一个dummy 赋值为ListNode用个位数创建的链表头
 *  当前dummy的next 值为调用该函数，并把l1.next与l2.next和carry
 *  最后返回dummy
 *    当下一层递归返回时，也是一个用ListNode新键的链表，给添加到上一层dummy的next上
 * 边界部分
 *  当l1与l2有一个为null时
 *  就用||把有值的赋值给rest
 *    当两个链表长度一样时，l1与l2两个都为null，rest也为null
 *      这时就只判断进位是否有值
 *        有的话返回用ListNode新建的链表
 *        没有也需要返回值，返回值必须得为null
 *     当两个链表长度不一样时，最后rest将会有值
 *      就执行与递归部分类似的程序
 */
var addTwoNumbers = function (l1, l2, carry = 0) {
  //边界
  if (!l1 || !l2) {
    let rest = l1 || l2;
    if (!rest) {
      if (carry) {
        return new ListNode(carry)
      } else {
        return null;
      }
    } else {
      let sum = rest.val + carry;
      let digit = sum % 10;
      let nextCarry = (sum - digit) / 10;
      let dummy = new ListNode(digit);
      dummy.next = addTwoNumbers(rest.next, null, nextCarry);
      return dummy;
    }
  }
  //递归部分
  let sum = l1.val + l2.val + carry;
  let digit = sum % 10;
  let nextCarry = (sum - digit) / 10;
  let dummy = new ListNode(digit);
  dummy.next = addTwoNumbers(l1.next, l2.next, nextCarry);

  return dummy;
};
/**
 * 循环迭代
 * carry用来记录两位数相加的进位
 * 第一个循环同时遍历l1与l2把两个链表的val相加
 * 值传入ListNode赋值给dummy的next
 * 当l1与l2有一个为null时跳出循环
 * 因为l1与l2必定有一个为空
 * 用与运算，把剩下的那个传给rest，进行之前相同的操作
 * 最后判断carry是否为0.决定是否把进位的值再添加值next
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let dummy = new ListNode(0);
  let result = dummy;
  while (l1 && l2) {
    let ts = l1.val + l2.val + carry;
    let digit = ts % 10;
    carry = (ts - digit) / 10;
    dummy.next = new ListNode(digit);
    dummy = dummy.next
    l1 = l1.next;
    l2 = l2.next;
  }
  let rest = l1 || l2;
  while (rest) {
    let ts = rest.val + carry;
    let digit = ts % 10;
    carry = (ts - digit) / 10;
    dummy.next = new ListNode(digit);
    dummy = dummy.next
    rest = rest.next;
  }
  if (carry) {
    dummy.next = new ListNode(carry)
  }
  return result.next;
};
