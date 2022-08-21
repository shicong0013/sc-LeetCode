/**
 *  只包含质因子2、3、5的话那就是只能被这三个整除
 *  那用while循环当余数为0时就无线执行
 *  当最后都不被3个整除时就判断n是否==1，1也是丑数
 *  如果余了其他大于5的数也就会返回false
 */

var isUgly = function (n) {
  if (n < 1) {
    return false;
  }
  while (n % 2 == 0) {
    n /= 2;
  }
  while (n % 3 == 0) {
    n /= 3;
  }
  while (n % 5 == 0) {
    n /= 5;
  }
  return n == 1;
};

/**
 * 超出时间限制，但是思路应该是对的
 * 每次循环时当n能整除i说明i时n的因数
 * 然后判断如果i不是2、3、5就返回fasle
 * 否则就把n赋值n、i，并把i赋值1，让下一轮循环时i从2开始
 */
var isUgly = function (n) {
  if (n < 1) {
    return false;
  }
  for (var i = 2; n != 1; i++) {
    if (n % i == 0) {
      if (i != 2 && i != 3 && i != 5) {
        return false;
      }
      n /= i;
      i = 1;
    }
  }
  return true;
};
