/**
 * 二分法
 * 完全平方数为两个相同数整数的乘积
 * 其实需要一直循环直至mid的平方等于num
 * 用mid -1/+1 后赋值给low/high可以每次循环必定缩进low与high的差值
 * low大于high，则说明这个数不是完全平方数而跳出循环
 */
var isPerfectSquare = function (num) {
  let low = 0;
  let high = num;
  while (low <= high) {
    let mid = ~~((high + low) / 2);
    if (mid * mid > num) {
      high = mid - 1;
    } else if (mid * mid < num) {
      low = mid + 1;
    } else {
      return mid * mid == num;
    }
  }
  return false;
};
