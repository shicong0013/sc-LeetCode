/**
 * 取巧，因为输入最大限制为2的31次幂，在这个范围内3的最大次幂为19
 * 为1162261467，当n为3的幂数时也是19次幂的约数，所以取余能为0
 */
var isPowerOfThree = function (n) {
  return n > 0 && 1162261467 % n == 0;
};

/**
 * 最简单的循环，与4的幂的解法一样
 */
var isPowerOfThree = function (n) {
  if (n < 1) {
    return false;
  }
  while (n % 3 == 0) {
    n /= 3;
  }
  return n == 1;
};
