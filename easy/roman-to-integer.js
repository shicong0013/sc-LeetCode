/**
 * 用对象存储每个字符的值
 * 遇见一个就加到结果中
 * 如果当前值比上一个值小则说明是需要减去的
 *  因为上一步已经加过了，所以需要减2次
 */
var romanToInt = function (s) {
  let map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  let num = 0;
  for (var i = s.length - 1; i >= 0; i--) {
    num += map[s[i]];
    if ((map[s[i + 1]] || 0) > map[s[i]]) {
      num -= map[s[i]];
      num -= map[s[i]];
    }
  }
  return num;
};
