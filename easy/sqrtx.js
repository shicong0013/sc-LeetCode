/**
 * 二分法
 * 因题目要去返回的为向下取整后的数，所以条件可以写成h-l>1
 * 因为返回值位向下取整的整数，所以m的值位向下取整的
 *  例如当4.5为高位时，结果可能在高于4.5达到5，所以可以向下取整
 *  当4.5为低位时4.0-4.5都有可能为正确结果，结果也是需要整数所以向下取整可以
 * 当不满足循环时l和h为两个相邻的数，则判断h的平方是否为x
 */
var mySqrt = function (x) {
  if (x == 1) {
    return 1;
  }
  let l = 0;
  let h = x;
  while (h - l > 1) {
    var m = ~~((h + l) / 2);
    if (m * m > x) {
      h = m;
    } else if (m * m < x) {
      l = m;
    } else {
      return m;
    }
  }
  return h * h == x ? h : l;
};
/**
 * 牛顿法
 */
var mySqrt = function (x) {
  let sqrt = x;
  if (x == 1) {
    return 1;
  }
  while (sqrt * sqrt - x > 0.2) {
    sqrt = (sqrt + x / sqrt) / 2
  }
  return ~~sqrt
};
