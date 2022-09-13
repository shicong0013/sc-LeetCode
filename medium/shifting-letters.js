/**
 * 前缀和
 * 把字符串从后往前看的话，s的最后一位移动了shifts了最后一个数字的位数
 *  s的倒数第二位移动了shifts的最后一位加倒数第二位和的位数
 * 因此从后往前开始把字母移位，就是把shifts倒着遍历
 *  每次移动的位数就是i位置加上i+1位置的和
 */
var shiftingLetters = function (s, shifts) {
  let result = '';
  let sum = 0;
  for (var i = shifts.length - 1; i >= 0; i--) {
    sum = (sum + shifts[i]) % 26;
    let ts = s.charCodeAt(i) - 97;
    let a = (sum + ts) % 26;
    result = String.fromCharCode(a + 97) + result;
  }
  return result;
};
