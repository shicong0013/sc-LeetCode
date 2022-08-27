/**
 * 数学
 * 把所有的数字分为奇数偶数
 * 转换为二进制时，奇数的最后一位一定为1
 * 而偶数的末尾一定为0
 * 计算1的个数，奇数其实就是比小于它的偶数多一个1
 * 而偶数的1的个数等于除以2的那个数的1的个数
 * 因为偶数的末尾为0，去掉这个零则相当于除以2
 * 带入1则是1等于第0位+1
 */
var countBits = function (n) {
  let result = [0];
  for (var i = 1; i <= n; i++) {
    if (i % 2 == 1) {
      result[i] = result[i - 1] + 1;
    } else {
      result[i] = result[i / 2];
    }
  }
  return result;
};
/**
 * 用191的思路
 * n会比n-1在二进制上多出一个1
 * 所以第i项1的个数位为 i & i -1 项再加上一个1
 */
var countBits = function (n) {
  let result = [0];
  for (var i = 1; i <= n; i++) {
    result[i] = result[i & i - 1] + 1;
  }
  return result;
};

/**
 * 动态范围
 * 当一个数每翻一倍时在二进制下就会多出一位并且最高位为1
 * 最开始的权重为0；最小的范围为1
 * 每次循环用i(当前位置的数)-范围 得到当前位置去掉最高位后的值的位置
 * (这个值已经提前计算过并存储再数组内)
 * 然后把这个位置的值+1并赋值给第i项
 * 然后需要把计数器++
 * 当计数器等于范围时，表示以达到最大范围
 * 这时把范围*2
 */
var countBits = function (n) {
  //声明一个数组[0]
  let result = [0];
  //范围 为1
  let scope = 1;
  //次数 为0
  let count = 0;
  //循环从1开始到n
  for (var i = 1; i <= n; i++) {
    //每次循环用i-范围得到当前范围内i去掉最高时的值
    let ts = i - scope;
    //次数++
    count++;
    //当次数==范围时，范围翻倍
    if (scope == count) {
      scope *= 2;
      count = 0;
    }
    //数组内i的位置等于数组内i去掉最高值的位置 +1
    result[i] = result[ts] + 1;
  }
  return result;
}

/**
 * 最简单的循环+位运算
 * 循环遍历0 - n
 * 位运算计算每个数内1的个数
 */
var countBits = function (n) {
  let result = [];
  for (var i = 0; i <= n; i++) {
    result.push(countOne(i));
  }
  return result;
};
function countOne (n) {
  let count = 0;
  while (n > 0) {
    if (n & 1) {
      count++;
    }
    n >>= 1;
  }
  return count;
}
