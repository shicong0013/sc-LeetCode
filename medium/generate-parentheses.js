/**
 * 回溯
 */
var generateParenthesis = function(n) {
  let res = [];
  dfs(n,n);
  return res;
  // 左右括号可添加的数量
  function dfs(left, righ, curStr = ''){
    // 当左右括号都被耗尽时，为所需要的有效组合
    if(left == 0 && righ == 0){
      res.push(curStr);
      return;
    }
    // 当左括号的数量大于0时，添加多少个左括号都时合法的，所以可以优先添加左括号
    if(left > 0){
      dfs(left - 1, righ, curStr + '(');
    }
    // 只有右括号的数量小于左括号时，添加右括号才是合法的
    if(righ > left){
      dfs(left, righ - 1, curStr + ')');
    }
  }
};
