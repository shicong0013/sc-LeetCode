/**
 * 动态规划
 * 创建一个长度为nums长度的数组，全部填充1，假定所有元素都只能与自身组成上升序列
 * 连续上升子序列为当i为的数比i-1位的数大，则表示i与i-1的数能组成一个序列
 *  并且在dp数组中i的值为i-1的值+1，
 *  而i-1位置保存的序列长度值位 i-1 与i-1-1位置值得对比
 * 而i位的值不比i-1的值大时则什么都不做
 * 最后每次循环结束时那result与i位的值对比，保留最大值
 */
var findLengthOfLCIS = function (nums) {
  let dp = new Array(nums.length).fill(1);
  let result = 1;
  for (var i = 1, j = 0; i < nums.length; i++, j++) {
    if (nums[i] > nums[j]) {
      dp[i] = dp[j] + 1
    }
    result = Math.max(result, dp[i]);
  }
  return result;
};

/**
 * 遍历数组
 * 当i比j大时则count++
 * 否则count置1
 * 每次对比result与count得值，取最大
 */
var findLengthOfLCIS = function (nums) {
  let result = 1;
  let count = 1;
  for (var i = 1, j = 0; i < nums.length; i++, j++) {
    if (nums[i] > nums[j]) {
      count++;
    } else {
      count = 1;
    }
    result = Math.max(result, count);
  }
  return result;
};
