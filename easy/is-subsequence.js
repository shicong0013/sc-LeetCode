/**
 * 遍历
 * 用两个遍历用来记录对比两个字符串当前位置的字符索引
 * 当有字符相等时子序列字符串的索引+1
 * 否则用于对比的字符串的索引+1
 * 当遍历结束时子序列的索引等于长度时则说明所有字符都在字符串内
 */
var isSubsequence = function(s, t) {
  let [sl, tl] = [s.length, t.length];
  let i = j = 0;
  while(i < sl && j < tl){
    if(s[i] == t[j]){
      i++;
    }
    j++;
  }
  return i == sl;
};
/**
 * 动态规划
 * 创建一个由s和t长度 +1组成的二维数组
 *  0为初始边界
 * 双重循环两个字符串
 * 当两个字符相等时则dp数组中该位置的值为当前索引分别-1位置的值 +1
 *  当前位置相等字符的数量等于匹配上一个字符时相等数量+1
 * 不相等则是当前位置的值 取t字符串上一个位置的值
 * 最后判断dp数组最后一个元素是否于子序列的长度相等
 */
var isSubsequence = function(s, t) {
  let [sl, tl] = [s.length, t.length];
  let dp = new Array(sl+1).fill(0).map(x => new Array(tl+1).fill(0));
  for(let i = 1; i <= sl; i++){
    for(let j = 1; j <= tl; j++){
      if(s[i-1] === t[j-1]){
        dp[i][j] = dp[i-1][j-1] + 1;
      } else {
        dp[i][j] = dp[i][j-1];
      }
    }
  }
  return dp[sl][tl] == sl;
};
