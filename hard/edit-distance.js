/**
 * 动态规划
 */
var minDistance = function(word1, word2) {
  let [w1, w2] = [word1.length, word2.length];
  let dp = new Array(w1+1).fill(0).map(x => new Array(w2+1).fill(0));
  // 设定边界，当word2字符串为空时，word1字符串编辑成与word2相同所需要的次数为word1的长度
  for(let i = 0; i <= w1; i++){
    dp[i][0] = i;
  }
  // 设定边界，当word1字符串为空时，word2字符串编辑成与word1相同所需要的次数为word2的长度
  for(let i = 0; i <= w2; i++){
    dp[0][i] = i;
  }
  // 遍历
  for(let i = 1; i <= w1; i++){
    for(let j = 1; j <= w2; j++){
      // 两个字符相同时，当前编辑的次数不需要增加，为两个字符串各减少一个时的编辑次数
      if(word1[i-1] == word2[j-1]){
        dp[i][j] = dp[i-1][j-1];
      } else {
        // 因为不管是增、删、替，都只是一次操作，所有只需要取周围最近的编辑次数再加上1即可
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
      }
    }
  }
  return dp[w1][w2];
};
