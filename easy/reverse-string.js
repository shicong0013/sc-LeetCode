/**
 * 异或
 * 通过后两个数异或操作可以不借用第三个遍历就能完成对调
 * 把字符转成数字后异或，对调完成后再转为字符
 */
var reverseString = function (s) {
  for (var i = 0; i < Math.ceil(s.length / 2); i++) {
    let a = s[i].charCodeAt();
    let b = s[s.length - 1 - i].charCodeAt();
    a ^= b;
    b ^= a;
    a ^= b;
    s[i] = String.fromCharCode(a);
    s[s.length - i - 1] = String.fromCharCode(b);
  }
};
/**
 * 双指针
 * 解构赋值
 */
var reverseString = function (s) {
  for (var i = 0, j = s.length - 1; j > i; i++, j--) {
    [s[i], s[j]] = [s[j], s[i]];
  }
};
