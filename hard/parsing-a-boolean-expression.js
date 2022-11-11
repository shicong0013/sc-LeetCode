/**
 * 双栈
 */
var parseBoolExpr = function(expression) {
  const nums = new Array(expression.length).fill("");  // 存放操作数的栈
  const ops = new Array(expression.length);  // 存放操作符的栈
  let idx1 = 0, idx2 = 0; // 两个栈的索引，省去的push和pop操作
  for(const c of expression){  // 遍历整个布尔表达式
    if(c == ',') continue;     // 字符为逗号时跳过
    if(c == 't' || c == 'f') nums[idx1++] = c;  // 字符为t或f时存入nums栈
    if(c == '|' || c == '&' || c == '!') ops[idx2++] = c; // 字符为操作符时存入ops栈
    if(c == '(') nums[idx1++] = '-';  // 字符为左括号时，记作子表示的开始，存入nums栈
    // 字符为右括号时，为子表达式的结束，开始计算
    if(c == ')'){
      let op = ops[--idx2]; // 取出最近的操作符，子表达式外面最近侧操作符
      let cur = ' '; // 为了当第一次运算为操作数本身，初始化为空字符
      // 只要操作数栈中还有字符，并且上一个字符不是子表达式的开始括号，就对当前操作数进行运算
      while(idx1 > 0 && nums[idx1-1] != '-'){
        const top = nums[--idx1]; // 取出栈顶的操作数
        // 第一次运算时cur应该时操作数本身，之后再参与运算时则是两个操作数的结果
        cur = cur == " " ? top : calc(top, cur, op);
      }
      if(op == '!') cur = cur == 't' ? 'f' : 't'; // 当操作符为非时，对结果取反
      idx1--; // 操作数栈索引-1，使索引到最好一次存放结果的位置
      nums[idx1++] = cur; // 存放结果后索引+1，为下一次存放操作数的空位置
    }
  }
  return nums[idx1 - 1] == 't';
  // 对两个操作数进行运算
  function calc(a, b, op){
    const x = a == 't'; // 取得布尔值
    const y = b == 't'; // 取得布尔值做运算用
    const ans = op == '|' ? x || y : x && y; // 只有操作符为或时进行或运行，否则都先进行与运算
    return ans ? 't' : 'f';
  }
};
