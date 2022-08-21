/**
 * 用快慢指针的方法
 * 慢指针，每次只走一步，对一个数取平方和
 * 快指针，每次往前走两步，对一个数取平方和后再对平方和取平方和
 * 因为有可能出现循环，所以当出现循环后快指针一定能于慢指针相遇
 * 而没有循环时当n的结果为1时再次带入计算下一次值的函数，返回值也是1
 */
var isHappy = function (n) {
  let fast = getNext(getNext(n));
  let slow = getNext(n);
  while (fast != 1 && slow != fast) {
    fast = getNext(getNext(fast));
    slow = getNext(slow);
  }
  return fast == 1;
};
function getNext (num) {
  let str = num.toString();
  let concat = 0;
  for (var i = 0; i < str.length; i++) {
    concat += Math.pow(parseInt(str[i]), 2);
  }
  return concat;
}

/**
 * 用对象来存储每次数字的平方和
 * 当此次计算的平方和以存储在对象中是则说明进入了循环，返回false
 * while当计算值等于1时结束循环，则说明这个数快乐
 */
var isHappy = function (n) {
  let hash = {};
  let happy = n;
  while (happy != 1) {
    happy = getNum(happy);
    if (!hash.hasOwnProperty(happy)) {
      hash[happy] = happy;
    } else {
      return false;
    }
  }
  return true;
}
function getNum (x) {
  let num = x.toString();
  let concat = 0;
  for (var i = 0; i < num.length; i++) {
    concat += Math.pow(num[i], 2);
  }
  return concat;
}
