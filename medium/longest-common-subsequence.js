/**
 * 动态规划
 * 因为动态规划第n步的值取决于n-1步的值
 * 而判断两个字符的最长公共子序长度 取决于字符长度-1时两个字符的长度
 * 所以需要创建比字符长度长1的数组，第0位为边界，当开始遍历时从根据边界的值再+1
 */
var longestCommonSubsequence = function(text1, text2) {
  // 取得两个字符串的长度
  let [m, n] = [text1.length, text2.length];
  // 创建一个比两个字符串长1的二维数组，+1为初始边界
  let dp = new Array(m+1).fill(0).map(x => new Array(n+1).fill(0));
  // 遍历两个字符串
  for(let i = 1; i <= m; i++){
    for(let j = 1; j <= n; j++){
      // 当前位置两个字符相等
      if(text1[i-1] == text2[j-1]){
        // 则这个位置的字符长度等于上一步两个字符串相等长度+1
        dp[i][j] = dp[i-1][j-1] + 1;
      } else {
        // 否则取两个字符分别少一位时相等长度的最大值
        // text1字符少一位和text2字符少1是最长的公共子序长度
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
      }
    }
  }
  return dp[m][n];
};
