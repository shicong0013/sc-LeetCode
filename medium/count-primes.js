/**
 * 线性筛暂时看不懂
 */
/**
 * 使用数组运用埃氏筛除法
 * 创建有n长度的数组，并全部填充1，表示所有数都为真都是素数
 * 因为1不是素数，从2开始循环到n
 * 当i位为真（1）时进入条件，此数为素数，计数+1
 * 并且再用循环把此数的所有倍数全部置为0
 * 为什么要从i的平方开始
 * 因为i的2被也时2的倍数，已经提前被标记过了
 */
var countPrimes = function (n) {
  let isPrimes = new Array(n).fill(1);
  let count = 0;
  for (var i = 2; i < n; i++) {
    if (isPrimes[i]) {
      count++;
      for (var j = i * i; j < n; j += i) {
        isPrimes[j] = 0;
      }
    }
  }
  return count;
};

/**
 * 最简单的超出时间限制的循环
 */
var countPrimes = function (n) {
  let count = 0;
  for (var j = 2; j < n; j++) {
    count += isPrimes(j);
  }
  return count;
};
function isPrimes (x) {
  let flag = 1;
  for (var i = 2; i * i <= x; i++) {
    if (x % i == 0) {
      flag = 0;
    }
  }
  return flag;
}
