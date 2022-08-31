/**
 * 二分法
 * l为数组第一个元素，r为数组最后一个元素
 * m为数组中间元素
 * 当m位的值大于target时则把m-1(因为m处的值不是target)给到r
 * 否则把m+1给l
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let m = ~~((r - l) / 2) + l;
    if (nums[m] > target) {
      r = m - 1;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      return m
    }
  }
  return -1;
};
