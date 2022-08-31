/**
 * 动态+二分
 * 用一个数组保存最长的上升子序列
 * 对原数组遍历，每个数通过二分对比来插入上升序列数组中
 * 当前数比数组中所以数多大时则插入数组的最后一位
 * 如果不是最大的，则覆盖所有比他大的数中最小的那个数
 * 最后返回数组长度
 */
var lengthOfLIS = function (nums) {
  let arr = [nums[0]];
  for (var i = 1; i < nums.length; i++) {
    let left = 0;
    let righ = arr.length;
    while (left < righ) {
      let mid = left + ~~((righ - left) / 2);
      if (arr[mid] < nums[i]) {
        left = mid + 1;
      } else {
        righ = mid;
      }
    }
    arr[left] = nums[i];
  }
  return arr.length;
};

/**
 * 动态规划
 * 序列程度最低也为1，所以设定边距为一，dp数组内的所有值位1
 * 循环i，从1开始，遍历数组
 *  循环j，从0开始，遍历i之前得所有数
 *    当i位置得数大于j位置得数时，所有i与j可以组成一个递增序列
 *    而递增到i位置得序列得长度等于j位置序列得长度+1(这个1就是把i加上)
 *    j位置序列得长度又等于比j小得数位置的递增序列长度+1
 *    又因为是遍历所有i之前的数，会出现多个比i位置小的数且序列长度不一样
 *    所以需要判断当前i的序列长度与找到的j位置+1的序列长度哪个大，把较大的赋值给i
 *  当小循环一遍后用当前位置得到的序列长度与结果中的序列长度对比，保留最大值
 */
var lengthOfLIS = function (nums) {
  let dp = new Array(nums.length).fill(1);
  let result = 1;
  for (var i = 1; i < nums.length; i++) {
    for (var j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    result = Math.max(dp[i], result);
  }
  return result;
};
