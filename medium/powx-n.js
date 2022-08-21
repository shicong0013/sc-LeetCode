/**
 * 快速幂
 * 当n为奇数时二分后会多一项x
 * 因此需要一个res来存储每次多出来的一项x
 * xx则是可以n可以整除2时平方的结果
 * 而二分的最终肯定为1
 * 就会把每次二分多出来的一项x再乘以之前平方的结果
 * 最终返回res
 *
 * 把n转换为二进制后可以发现
 * 最终x的值可以是
 * n二进制上所有为1的位数的 x所在位数上2的次方数 (如从右往左 第3位为2的2次方)
 */
var myPow = function (x, n) {
  return n > 0 ? quickMul(x, n) : 1 / quickMul(x, -n);
}
function quickMul (x, n) {
  let res = 1;
  let xx = x;
  while (n > 0) {
    if (n & 1 == 1) {
      //当这个位数为1时，把x乘入结果
      res *= xx;
    }
    //下一位数的平方
    xx *= xx;
    //无符号向右移1位并赋值
    //除2并向下取整
    //右移后只需要判断最后一位是否为1即可
    n >>>= 1;
  }
  return res;
}
//改为一个函数
var myPow = function (x, n) {
  let res = 1;
  let xx = x;
  if (n < 0) {
    return 1 / myPow(x, -n);
  }
  while (n > 0) {
    if (n % 2 == 1) {
      res *= xx;
    }
    xx *= xx;
    n >>>= 1;
  }
  return res;
}
/**
 * 快速幂递归的写法
 * 如果n为负数则先对n取反，最后用1除以结果
 * 递归的结束条件， 任何数的0次方都为1
 * 一个数的n次幂可以写为 两个n/2次幂相乘
 * 因此用递归可以写成
 * n/2向下取整相乘，如果余1再单独乘一次
 */
var myPow = function (x, n) {
  return n > 0 ? quickMul(x, n) : 1 / quickMul(x, -n);
}
function quickMul (x, n) {
  if (n == 0) {
    return 1;
  }
  let y = quickMul(x, Math.floor(n / 2));
  return n % 2 == 0 ? y * y : y * y * x;
}
//小改后的递归
var myPow = function (x, n) {
  if (n == 0) {
    return 1;
  }
  if (n == 1) {
    return x
  }
  if (n < 0) {
    return 1 / myPow(x, -n);
  }
  return n % 2 == 0 ? myPow(x * x, n / 2) : myPow(x * x, (n - 1) / 2) * x;
}
/**
 * 超时的遍历循环
 */
var myPow = function (x, n) {
  let num = x;
  if (n == 0) {
    return 1;
  }
  for (var i = Math.abs(n); i > 1; i--) {
    num *= x
  }
  return n > 0 ? num : 1 / num;
};
