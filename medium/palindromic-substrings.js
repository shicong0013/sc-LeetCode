/**
 * 动态规划
 */
var countSubstrings = function(s) {
  let sL = s.length;
  let dp = new Array(sL).fill(0).map(x => new Array(sL).fill(false));
  let count = 0;
  // i为回文结束的位置，j为回文开始的位置
  for(let i = 0; i < sL; i++){
    for(let j = 0; j <= i; j++){
      // 当i位置与j位置的字符相等时就需要判断它是否为同一个字符，或者2个字符的回文
      // 如果为3个字符或以上则是看j到i各缩小一个位置后的字符串是否为回文字符
      if(s[i] == s[j] && (i - j < 2 || dp[j+1][i-1])){
        // dp[j][i] 表示的是从j到i是否为回文
        dp[j][i] = true;
        count++;
      }
    }
  }
  return count;
};
/**
 * 双指针
 */
 var countSubstrings = function(s) {
  let sL = s.length;
  let count = 0;
  // 一个字符串会有长度*2-2个回文中心(由1个字符或两个字符组成的回文中心)
  for(let i = 0; i < sL*2; i++){
    let left = Math.floor(i / 2);
    let righ = left + i % 2;
    // 以回文中心扩散向两边对比字符，相等则就有一个回文
    // 当两个字符相等，并且左侧或右侧没有超出字符范围
    while(s[left] === s[righ] && left >= 0 && righ <sL){
      count++;
      left--;
      righ++;
    }
  }
  return count;
};
