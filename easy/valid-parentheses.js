/**
 * 栈
 * 用先进后出的原理
 * 当遇到左边的括号是就push进栈
 * 而遇到右边的括号时说明有一对括号需要闭合
 * 而从栈里pop出最近一个括号看看两个是否匹配
 */
var isValid = function (s) {
  let stack = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
      stack.push(s[i]);
    } else if (s[i] == ')') {
      if (stack.pop() !== '(') {
        return false
      }
    } else if (s[i] == ']') {
      if (stack.pop() !== '[') {
        return false;
      }
    } else {
      if (stack.pop() !== '{') {
        return false;
      }
    }
  }
  if (stack.length != 0) {
    return false;
  }
  return true;
};
