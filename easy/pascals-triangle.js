/**
 * 动态规划
 * 规律为杨辉三角的第i行的第j项值为
 *  第i-1行的第j-1项与j项之和
 * 设定每行的左右边界为1
 * 并且每行内部遍历时j小于i(不会到达该行末尾的边界)
 */
var generate = function (numRows) {
  if (numRows == 1) return [[1]];
  let dp = new Array(numRows);
  dp = [[1], [1, 1]];
  for (var i = 2; i < numRows; i++) {
    dp[i] = new Array(i + 1).fill(1);
    dp[i][0] = 1;
    dp[i][i] = 1;
    for (var j = 1; j < i; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }
  return dp;
};
/**
 * 优化
 * 因内部循环条件限制j必须小于i，且j从1开始
 * 因此第0行和第1行循环不会进入内层循环
 * 因为两侧边界都为1，中间部分内层循环时会再赋值
 * 可以先把所有位置填充为1
 */
var generate = function (numRows) {
  let dp = new Array(numRows);
  for (var i = 0; i < numRows; i++) {
    dp[i] = new Array(i + 1).fill(1);
    for (var j = 1; j < i; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }
  return dp;
};
