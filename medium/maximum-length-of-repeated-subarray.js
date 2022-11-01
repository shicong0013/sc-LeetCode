/**
 * 动态规划
 */
var findLength = function(nums1, nums2) {
  // 取得两个数组的长度
  const [n1, n2] = [nums1.length, nums2.length];
  // 用于计数的结果
  let res = 0;
  // 创建一个两个数组长度+1的二维数组，+1是为了0号位为初始边界
  let dp = new Array(n1+1).fill(0).map(x => new Array(n2+1).fill(0));
  // 遍历两个数组
  for(let i = 1; i <= n1; i++){
    for(let j = 1; j <= n2; j++){
      // 当前数组中两个元素相等时最长重复数组的长度等一这两个元素前一个的长度+1
      if(nums1[i - 1] == nums2[j - 1]){
        dp[i][j] = dp[i-1][j-1] + 1;
        // 与结果取最大值
        res = res > dp[i][j] ? res : dp[i][j]
      }
    }
  }
  return res
};
