/**
 * 循环，遍历所有
 * 声明一个函数判断当前值是否为一个自除数
 * for循环从left开始，到right结束
 * 通过isDivide的返回值决定是否需要push
 */
var selfDividingNumbers = function (left, right) {
  let divide = [];
  //循环，起始位left，结束位right，++
  for (var i = left; i <= right; i++) {
    //根据返回结果决定push
    if (isDivide(i)) {
      divide.push(i);
    }
  }
  //最后返回数组
  return divide;
};
function isDivide (num) {
  //这个数转为字符串
  let str = num.toString();
  //循环，起始位字符串长度-1，结尾位0，--
  for (var i = str.length - 1; i >= 0; i--) {
    //用这个数取余当前位置的数结果不为0则返回fasle
    let n = Number(str[i]);
    if (num % n != 0) {
      return false;
    }
  }
  //循环结束返回true
  return true;
}
