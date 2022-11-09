/**
 * 动态规划
 */
var longestPalindromeSubseq = function(s) {
  let sL = s.length;
  let dp = new Array(sL).fill(0).map(x => new Array(sL).fill(0));
  // 因为每个字符都是一个单独的回文，所有把每个回文自己设置为1
  for(var i = 0; i < sL; i++){
    dp[i][i] = 1;
  }
  // 因为dp[l][r]表示在字符串上从l位置到r位置中的回文长度
  // 而dp[l][r]中的回文长度需要根据之前的状态，两侧各减少一个字符来推断dp[l+1][r-1],所以需要从后来遍历
  for(let l = sL - 1; l >= 0; l--){
    for(let r = l + 1; r < sL; r++){
      // 当比对的两个字符相等时，相比于在比对之前的字符的基础上两侧各增加了两个相同的字符
      // 所以在dp[l+1][r-1]的基础上+2
      if(s[l] === s[r]){
        dp[l][r] = dp[l+1][r-1] + 2;
      } else {
        // 而当两侧不相等时那则从只增加了左侧或者只增加了右侧的字符中选择最大的长度
        dp[l][r] = Math.max(dp[l+1][r], dp[l][r-1])
      }
    }
  }
  // 数据只存在于右上半部分，选择最后得到数据得位置返回
  return dp[0][sL-1]
};
