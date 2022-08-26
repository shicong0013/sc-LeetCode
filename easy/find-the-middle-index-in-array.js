/**
 * 前缀和
 * 把数组分为三份 中间位置i 左侧之和 右侧之和
 * 当左侧之和+右侧之和+i位置数值等于整个数组总和时i为中间值
 * 因此创建变量sum，当sum*2+i的值 等于总和时即当前i位置为中间值，return
 * 而不等于时把i的值加给sum当作左侧的值，并把i右移
 * 直至循环结束都没进入if则返回-1
 */
var findMiddleIndex = function (nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  let sum = 0;
  for (var i = 0; i < nums.length; i++) {
    if (sum * 2 + nums[i] == total) {
      return i
    }
    sum += nums[i];
  }
  return -1;
};
