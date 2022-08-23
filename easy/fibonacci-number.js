/**
 * 斐波那契数列通项公式
 */
var fib = function (n) {
  let sqrt5 = Math.sqrt(5);
  return Math.floor(Math.pow((1 + sqrt5) / 2, n) - Math.pow((1 - sqrt5) / 2, n)) / sqrt5;
};
/**
 * 简单的循环
 * 从第2项开始，下一项为当前项加上一项之和
 */
var fib = function (n) {
  let a = 0;
  let b = 1;
  while (n != 0) {
    let c = b + a;
    a = b;
    b = c;
    n--;
  }
  return a;
};
