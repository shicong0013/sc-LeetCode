/**
 * 使用数学上数根的方法
 * 任何正整数的数根是其各个位数相加的总和，如果总和大于10
 * 则继续各个位数相加，直至小于10
 * 通过列出一些数的数根可以发现大于10的数的数根都是这个数模9的余数
 * 各位数的数根则是其本身
 * 但是这样的话如果传入参数为9，取余返回的结果则为0了
 * 因此可以先将num - 1再模9，相对于把所有数的数根先朝0方向偏移1位
 * 然后再 + 1 使其再偏移回来
 */

var addDigits = function (num) {
  return (num - 1) % 9 + 1;
};

/**
 * 略显蛋疼的递归，只是用来判断是否要返回num
 */
var addDigits = function (num) {
  if (num < 10) {
    return num;
  }
  num = (num - num % 10) / 10 + num % 10;
  return addDigits(num);
};

/*
  最简单的用取余后的余数加上数原本减去余数再除10，以此循环
  单独把最后一位取出加给被除10的初始数
*/
var addDigits = function (num) {
  while (num >= 10) {
    num = (num - num % 10) / 10 + num % 10;
  }
  return num
};
//用按与非简写
var addDigits = function (num) {
  while (num >= 10) {
    num = ~~(num / 10) + num % 10;
  }
  return num
};
