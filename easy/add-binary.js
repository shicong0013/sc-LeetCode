/**
 * 用字符串的长度-1来同时获取相加时那一位的值
 * 当取字符串下标为负数的值时，返回undefined
 * 所以用||当值为undefined时赋值0
 * 当两个字符串的长度大于等于0或者进位有值时才循环
 * 用按位与 当最后一位有1时返回1，把当前位和的结果添加到result上
 * 进位则是用右移，删除最后一位即被添加到结果上的那一位，剩下的值位进位
 * 最后字符串长度--，计算下一位
 */
var addBinary = function (a, b) {
  //一个存储结果
  let result = ''
  //进位
  let carry = 0;
  //两个字符串不一样长，还需要两个字符串的长度-1，用来获取最右的数
  let al = a.length - 1;
  let bl = b.length - 1;
  while (al >= 0 || bl >= 0 || carry) {
    aNum = Number(a[al]) || 0;
    bNum = Number(b[bl]) || 0;
    result = ((aNum + bNum + carry) & 1) + result;
    carry = (aNum + bNum + carry) >> 1;
    al--;
    bl--;
  }
  return result;
};
