/**
 * 回溯
 */
var letterCombinations = function(digits) {
  var map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  var result = [];
  if(digits == ''){
    return result;
  }
  f()
  return result;
  function f(i = 0, history = ''){
    // 当i超出digits的长度时则没有按键的字母需要在拼接在后面了
    if(i == digits.length){
      // 把当前字符串放进结果数组中，返回后进行下一次循环
      result.push(history);
      return;
    }
    // 取得当前位置的数字
    var n = digits[i];
    // 根据当前数字取得这个数字的字母
    var charts = map[n];
    // 遍历这个数字的字母
    for(let x of charts){
      // 把当前字符作为参数，去拼接下一个数字的每个字符
      f(i+1, history + x);
    }
  }
};
