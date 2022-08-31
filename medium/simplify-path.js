/**
 * 最简单的循环
 * 先把path用 / 分割
 *  / 在字符串开头或者结尾时会留下一个空字符串
 *  有连续两个分割符时也会留下一个空字符串
 * 然后遍历数组
 * 当i项不为 . 或者空字符串时
 *  再判断是否为 ..
 *  不是就push
 * 最后再返回结果前+上/
 */
var simplifyPath = function (path) {
  let pathArr = path.split('/');
  let result = []
  for (var i = 0; i < pathArr.length; i++) {
    if (pathArr[i] != '.' & pathArr[i] != "") {
      if (pathArr[i] == '..') {
        result.pop();
      } else {
        result.push(pathArr[i]);
      }
    }
  }
  return '/' + result.join('/');
};
