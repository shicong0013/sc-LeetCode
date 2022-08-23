/**
 * 用一个1不停的左移，然后与n按位与
 * 如果1所在的位置对应的n的位置也是1则会返回1
 */
var hammingWeight = function (n) {
  let count = 0;
  for (let i = 0; i < 32; i++) {
    if ((n & (1 << i)) !== 0) {
      count++;
    }
  }
  return count;
};

/**
 * 把条件判断与缩小n的表达式改为位运算符
 * 当n与1按与位运算的1时表示二进制的最后一位为1
 *
 * 每次循环结束前删除n在二进制上的最后一位
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n != 0) {
    if (n & 1) {
      count++;
      n--;
    }
    n >>>= 1;
  }
  return count;
};

/**
 * 最简单的循环
 * 当取余2得1时则表示在二进制位上最后一位为1，conunt++
 * 否则则是0，则除2
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n != 0) {
    if (n % 2 == 1) {
      count++;
      n -= n % 2;
    }
    n /= 2;
  }
  return count;
};
