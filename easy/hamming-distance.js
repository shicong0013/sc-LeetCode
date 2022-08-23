/**
 * 两个数按位异或运算得到两个不同位置的值
 * 然后用按位与判断
 */
var hammingDistance = function (x, y) {
  //存储x与y按位异或的结果两个数二进制上不同的为都为1
  let flag = x ^ y;
  let count = 0;
  //把上一步存储的结果与1做&运算，然后在右移一位
  while (flag != 0) {
    if (flag & 1) {
      count++
    }
    flag >>>= 1;
  }
  return count;
};

/**
 * 位运算同时判断两个数与1的&运算结果判断两个数的汉明距离
 */
var hammingDistance = function (x, y) {
  let count = 0
  //循环，当两个数都不为0时就循环
  while (x != 0 || y != 0) {
    //判断两个数都与1按与位运算时的结果
    if ((x & 1) != (y & 1)) {
      count++;
    }
    x >>= 1;
    y >>= 1;
    //相同则是两数在这个位置上的距离位0，不同则增加1
  }
  return count;
};
