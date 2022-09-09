/**
 * 递归
 * 当两个链表长度不一样时较长链表的val无法和不存在的值相加
 * 先把两个链表长度补齐，较短的链表前补0，0不影响相加的结果
 *
 * 然后新声明一个函数用于两个相同长度链表的相加
 * 最后再考虑剩下的进位是否要额外再加一层链表
 */
var addTwoNumbers = function (l1, l2) {
  //补0
  let deep1 = 0;
  let deep2 = 0;
  let dummy = l1;
  while (dummy) {
    dummy = dummy.next;
    deep1++;
  }
  dummy = l2;
  while (dummy) {
    dummy = dummy.next;
    deep2++;
  }
  if (deep1 > deep2) {
    let count = deep1 - deep2;
    while (count) {
      l2 = new ListNode(0, l2);
      count--;
    }
  } else {
    let count = deep2 - deep1;
    while (count) {
      l1 = new ListNode(0, l1);
      count--;
    }
  }
  //两组链表相加的递归
  let carry = 0;
  dummy = f(l1, l2);
  if (carry) {
    dummy = new ListNode(carry, dummy);
  }
  return dummy;

  function f (l1, l2) {
    if (!l1 && !l2) {
      return null
    }
    let result = f(l1.next, l2.next);

    let num = l1.val + l2.val + carry;
    let digit = num % 10;
    carry = (num - digit) / 10;
    let dummy = new ListNode(digit, result);
    return dummy;
  }
};
/**
 * 栈
 * 把两个链表的val挨个push进栈中
 * 之后再分别取出相加传入ListNode中生成链表
 */
var addTwoNumbers = function (l1, l2) {
  let stack1 = [];
  let stack2 = [];
  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }
  let carry = 0;
  let dummy = null;
  while (stack1.at(-1) != undefined || stack2.at(-1) != undefined || carry != 0) {
    let digit1 = stack1.pop() || 0;
    let digit2 = stack2.pop() || 0;
    let sum = digit1 + digit2 + carry;
    let digit = sum % 10;
    carry = (sum - digit) / 10;
    dummy = new ListNode(digit, dummy);
  }
  return dummy;
};
