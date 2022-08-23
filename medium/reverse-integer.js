/**
 * 纯数学循环
 */
var reverse = function (x) {
  let result = 0;
  while (x != 0) {
    const digit = x % 10;
    result = result * 10 + digit;
    if (result < Math.pow(-2, 31) - 1 || result > Math.pow(2, 31) - 1) {
      return 0;
    }
    //按位非， 向下取整
    x = ~~(x / 10);
  }
  return result;
};
