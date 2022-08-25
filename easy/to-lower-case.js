/**
 * 差值每个字符的ASCII码，在64-91之间(A-Z之间)
 * 则用91减字符的ASCII码得到差值，再用123-差值得到小写字母
 * 或者时当前数字+32也能得到小写字符
 * 再或者是与32做按位与运算
 * 因为32的二进制为00100000
 * 而大写字母的65-96转换为二进制后在32转为二进制上1那一位都为0
 * 这样的话根据与运算的相同为0不同为1，则也能+32
 */
var toLowerCase = function (s) {
  let result = '';
  for (var i = 0; i < s.length; i++) {
    let present = s.charCodeAt(i);
    if (present < 91 && present > 64) {
      present = 123 - (91 - present);
      result += String.fromCharCode(present);
      continue;
    }
    result += s[i];
  }
  return result;
};
