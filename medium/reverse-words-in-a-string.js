/**
 * 遍历
 * 先去除头尾多余的空格，再用单词中间的空格分割单词
 * 被空格分割后，单词中间多余的空格为空字符串，所以要与空字符串做对比
 */
var reverseWords = function (s) {
  let sArr = s.trim().split(" ");
  let arr = [];
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] == '') {
      continue;
    }
    arr.unshift(sArr[i]);
  }
  return arr.join(' ');
};
/**
 * 正则
 * 利用正则，分割字符串时去除单词中间多余的空格，然后反转数组再拼接
 */
var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(' ')
};
