/**
 * 动态规划
 */
var numDistinct = function(s, t) {
  let [sl, tl] = [s.length, t.length];
  // i长度的s字符串中包含0长度t字符串的数量应该是1
  // 而0长度的s字符串中包含t字符串的数量应该是0
  // 设定边界时每列的第0项应该为1，第一列的除第一项应该都为0
  let dp = new Array(sl+1).fill(0).map(x => new Array(tl+1).fill(1).fill(0,1));
  for(let i = 1; i <= sl; i++){
    for(let j = 1; j <= tl; j++){
      // 当两个字符串匹配的元素相同时
      if(s[i-1] == t[j-1]){
        // 各减少一个字符时匹配的数量 + s字符串减少一个字符时所能匹配的数量
        // 加上dp[i-1][j]是因为 要加上不用当前字符也能匹配成功的数量
        dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
      } else {
        // 当不相等时 就为不用当前字符匹配的数量
        dp[i][j] = dp[i-1][j]
      }
    }
  }
  return dp[sl][tl];
};
