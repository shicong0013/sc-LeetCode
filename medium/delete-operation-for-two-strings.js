/**
 * 动态规划
 */
var minDistance = function(word1, word2) {
  let [w1, w2] = [word1.length, word2.length];
  // 生成dp数组
  let dp = new Array(w1+1).fill(0).map(x => new Array(w2+1).fill(0))
  // 生成边界，当空字符与word2字符串比较时，需要删除word2字符串长度的次数才能相等
  for(let i = 0; i <= w2; i++){
    dp[0][i] = i;
  }
  // 生成边界，当空字符与word1字符串比较时，需要删除word1字符串长度的次数才能相等
  for(let i = 0; i <= w1; i++){
    dp[i][0] = i;
  }
  // 遍历
  for(let i = 1; i <= w1; i++){
    for(let j = 1; j <= w2; j++){
      // 当两个字符相等时说明不用删除字符，则次数为两个字符各减少一个时的次数
      if(word1[i-1] === word2[j-1]){
        dp[i][j] = dp[i-1][j-1]
      } else {
        // 否则则是在word1删除一个字符、word2删除一个字符或两个各删除一个字符中取最小值
        dp[i][j] = Math.min(dp[i-1][j-1]+2, dp[i][j-1]+1, dp[i-1][j]+1)
      }
    }
  }
  return dp[w1][w2];
};
