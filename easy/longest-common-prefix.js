/**
 * 按列对比
 * 因为时用数组的第一个元素每一个字符对比后面元素的相同位置的字符
 * 所以即使第一个元素时最长的元素，当对比位置超出最短元素长度后就会结束，直接选0位置即可
 * 存储0号元素的i项字符
 * 逐个对比后面元素的i项字符，当有不同时就返回result已存储的共同前缀
 * 当循环结束后都没返回则说明当前对比的字符是所有元素都有的前缀，加到result中
 *
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return "";
  let result = '';
  for (var i = 0; i < strs[0].length; i++) {
    let temp = strs[0][i];
    for (var j = 1; j < strs.length; j++) {
      if (temp != strs[j][i]) {
        return result;
      }
    }
    result += temp;
  }
  return result
};
