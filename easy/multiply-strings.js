var multiply = function (num1, num2) {
  //数组存储num1与0-9的乘积
  let numArr = multiplyOne(num1);
  let result = '0';
  //创建一个循环遍历num2的每一位，根据当前位的值调用数组内的元素
  for (var i = num2.length - 1; i >= 0; i--) {
    let current = numArr[Number(num2[i])];
    //并且根据num2值得位置，给查找到得数组后面+0
    let repair = num2.length - 1 - i;
    //然后调用加法函数，把得到的值累加到结果中
    result = add(result, current, repair);
  }
  result = dlZero(result);
  return result;
};
//创建一个函数用0-9乘以num1，返回结果应该为一个数组
//按顺序把0-9的乘积放在数组内
function multiplyOne (num1) {
  let result = ['0', num1];
  for (var i = 2; i <= 9; i++) {
    let carry = 0;
    let str = '';
    let n1l = num1.length - 1;
    while (n1l >= 0 || carry) {
      let n1n = Number(num1[n1l]) || 0;
      str = (n1n * i + carry) % 10 + str;
      carry = ~~((n1n * i + carry) / 10)
      n1l--;
    }
    result.push(str);
  }
  return result;
};
//去除多余的0
function dlZero (str) {
  while (str.length > 1 && str[0] == '0') {
    str = str.slice(1);
  }
  return str;
}
//加法的函数
var add = function (num1, num2, zero) {
  let carry = 0;
  let result = '';
  for (var i = zero; i >= 1; i--) {
    num2 += '0';
  }
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
