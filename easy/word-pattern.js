/**
 * 对象
 * 把字符串先以空格风格成数组
 *  如果规律的长度不等于数组的长度就返回false
 * 然后以数组/规律的长度为限制遍历
 *  当规律当前位置字符的属性在pMap中没有&&数组当前位置的元素在sMap中没有时
 *    相当于遇见了一组新的映射
 *    则以规律当前字符为属性，数组当前元素位置添加至pMap中
 *     数组当前元素为属性，规律当前字符为至添加至sMap中
 *  否则进行判断
 *    pMap中规律当前位置字符属性中的值是否等于sArr当前位置的元素
 *    sMap中sArr当前元素属性的值是否等于规律当前的字符
 *    只要有一个条件不满足则表示映射冲突，返回false
 */
var wordPattern = function (pattern, s) {
  let pMap = new Object;
  let sMap = new Object;
  let sArr = s.split(" ");
  if (pattern.length != sArr.length) {
    return false;
  }
  for (var i = 0; i < sArr.length; i++) {
    if (!pMap[pattern[i]] && !sMap[sArr[i]]) {
      pMap[pattern[i]] = sArr[i];
      sMap[sArr[i]] = pattern[i];
    } else if (pMap[pattern[i]] != sArr[i] || sMap[sArr[i]] != pattern[i]) {
      return false;
    }
  }
  return true;
};
