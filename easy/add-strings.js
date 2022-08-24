/**
 * 与第67题 二进制求和思路一样
 * 只是再获取当前位置的值和进位时需要用%10 和/10
 */
var addStrings = function (num1, num2) {
  let carry = 0;
  let result = '';
  let n1l = num1.length - 1;
  let n2l = num2.length - 1;
  while (n1l >= 0 || n2l >= 0 || carry) {
    let n1n = Number(num1[n1l]) || 0;
    let n2n = Number(num2[n2l]) || 0;
    result = (n1n + n2n + carry) % 10 + result;
    carry = (n1n + n2n + carry) >= 10 ? 1 : 0;
    n1l--;
    n2l--;
  }
  return result;
};
