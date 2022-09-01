/**
 * 对象映射
 * 当s中的字母只出现一次，t中的字母重复出现，那会有重复映射的问题
 * 所有需要分别创建两个对象存储t映射到s与s映射到t
 * 当s对象中有当前位置t字符的键，并且键的值不等于当前位置t的字符
 *  则说明t中的字母重复映射了
 * 否则就把当前位置的字符分别添加到s与t的对象中
 */
var isIsomorphic = function (s, t) {
  let sObj = {};
  let tObj = {};
  for (var i = 0; i < s.length; i++) {
    let x = s[i];
    let y = t[i];
    if (sObj[x] && (sObj[x] !== y) || tObj[y] && (tObj[y] !== x)) {
      return false
    }
    sObj[x] = y;
    tObj[y] = x;
  }
  return true
};
