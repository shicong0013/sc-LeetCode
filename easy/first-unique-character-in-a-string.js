/**
 * 对象
 * 遍历字符串把每个字符当作键存储在对象中，出现的次数当作键的值
 * 第二次遍历时只要该键的值为1，就是字符串中第一次出现的单个字符
 */
var firstUniqChar = function (s) {
  let sObj = {};
  for (var i = 0; i < s.length; i++) {
    if (!(sObj[s[i]])) {
      sObj[s[i]] = 1;
    } else {
      sObj[s[i]]++;
    }
  }
  for (var i = 0; i < s.length; i++) {
    if (sObj[s[i]] == 1) {
      return i;
    }
  }
  return -1;
};
