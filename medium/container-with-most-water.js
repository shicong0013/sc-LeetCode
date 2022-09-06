/**
 * 双指针
 * 当i位置的线比j位置的线低时，移动i，下一个i可能会变大也可能变小
 *  导致水的容积改变
 * 而如果移动j的话因为最低点为i，且j为i的方向移动间距变小
 *  因此水的容积只能变得小
 * 所以判断当i比j小时，移动i，否则移动j
 * 并记录每次的最大容积
 */
var maxArea = function (height) {
  let res = 0;
  for (var i = 0, j = height.length - 1; i < j;) {
    res = Math.max(Math.min(height[i], height[j]) * (j - i), res);
    if (height[i] < height[j]) {
      i++
    } else {
      j--;
    }
  }
  return res;
};
