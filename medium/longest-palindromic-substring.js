/**
 * 动态规划
 */
var longestPalindrome = function(s) {
  let sL = s.length;
  // 记录最长子串得长度
  let maxL = 0;
  // 最长字串得左右区间
  let left = 0;
  let righ = 0;
  let dp = new Array(sL).fill(0).map(x => new Array(sL).fill(false));
  for(let i = sL-1; i >= 0; i--){
    for(let j = i; j < sL; j++){
      // 当两个字符相等并且，字符为同一个或相邻得字符，或字符内得字符以及判断为回文字符时，这个区间得字符为回文
      if(s[i] === s[j] && (j - i < 2 || dp[i+1][j-1])){
        dp[i][j] = true;
      }
      // 当这个区间得字符为回文时，并且区间小于记录得最大区间，则更新所有得记录
      if(dp[i][j] && j - i+1 > maxL){
        maxL = j - i + 1;
        left = i;
        righ = j;
      }
    }
  }
  return s.substring(left, righ+1);
};
