/**
 * 对象
 * 通过对象存储字母出现的次数
 * 遍历s字符串，有当前字符属性时，值++，没有时赋值为1
 * 然后再遍历t字符串
 *  对象中没有当前属性时返回false
 *  有时则--，并确认值是否大于0
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  let sMap = new Object;
  for (let k of s) {
    sMap[k] ? sMap[k]++ : sMap[k] = 1;
  }
  for (let k of t) {
    if (!(k in sMap)) {
      return false;
    } else {
      sMap[k]--;
      if (sMap[k] < 0) return false;
    }
  }
  return true;
};

/**
 * 计数
 * 通过创建26长度数组，存储小写字母出现的次数
 * 第二次循环再在当前字母的位置--，当小于0时说明s上出现字母的次数不等于t上字母出现的次数
 * 该方法仅限字母为小写
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }
  let sArr = new Array(26).fill(0);
  for (let k of s) {
    sArr[k.charCodeAt() - 'a'.charCodeAt()]++;
  }
  for (let k of t) {
    sArr[k.charCodeAt() - 'a'.charCodeAt()]--;
    if (sArr[k.charCodeAt() - 'a'.charCodeAt()] < 0) {
      return false;
    }
  }
  return true;
};
