
/**
 * 最简单的循环
 * 当num为负时在返回时再拼接一个负号
 */
var convertToBase7 = function (num) {
  let n = Math.abs(num);
  if (n == 0) {
    return '0';
  }
  let result = '';
  while (n != 0) {
    result = (n % 7) + result
    n = (n - (n % 7)) / 7
  }
  return num < 0 ? '-' + result : result;
};
