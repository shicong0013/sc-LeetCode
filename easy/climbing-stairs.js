/**
 * 规律为斐波那契数列
 * 因为每次只能走1步或者2步
 * 所以走到第n个台阶只能是从第n-1个台阶或者n-2个台阶走上去
 * 而每个到n-1台阶的方法再在走1步就到了n台阶
 * 到n-2台阶的方法再走2步就到了n台阶(如果走1步在走1步则变成了从n-1台阶到n台阶)
 * 这样到n-1台阶的方法 + n-2台阶的方法为到n台阶的方法
 */
var climbStairs = function (n) {
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (var i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
