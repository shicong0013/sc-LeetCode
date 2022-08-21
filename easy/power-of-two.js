/**
 * 用 按位与 &
 * 当一个数是2的幂数是转换位2进制位1跟多个0，而n-1会少一位，并且其余位为1
 * &运算后得0
 */
var isPowerOfTwo = function (n) {
  return n > 0 && (n & n - 1) == 0;
};

/**
 * 最简单的循环写法
 */
var isPowerOfTwo = function (n) {
  if (n < 1) {
    return false;
  }
  while (n % 2 == 0) {
    n /= 2;
  }
  return n == 1;
};
