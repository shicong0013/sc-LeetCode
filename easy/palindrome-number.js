/**
 * 纯数学方法
 * 把余数赋值给结果
 * 当结果不小于x时说明处理已经过半需进行判断
 * 当数的个数位奇数时判断还需加上除10的可能
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }
  let result = 0;
  while (result < x) {
    result = result * 10 + x % 10;
    x = ~~(x / 10);
  }
  return result == x || x == ~~(result / 10);
};

/**
 * 简单的循环
 * 转字符串
 * 从第一位开始与最后一位对比
 * 一直到中间位
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let xstr = x.toString();
  for (var i = 0; i < ~~(xstr.length); i++) {
    if (xstr[i] !== xstr[xstr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
