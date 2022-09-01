/**
 * 计数
 * 先遍历数组中每个元素
 *  因为给定的元素都是小写，所以创建一个26位的数组，用于统计每个元素中字母出现的次数
 *  当字符串位字母异位词时，字母出现的次数应该相同
 *  用统计后的数组作为对象的属性名，来存储字母异位词
 */
var groupAnagrams = function (strs) {
  let strsObj = new Object;
  for (let str of strs) {
    let count = new Array(26).fill(0);
    for (let s of str) {
      count[s.charCodeAt() - 'a'.charCodeAt()]++;
    }
    strsObj[count] ? strsObj[count].push(str) : strsObj[count] = [str];
  }
  return Object.values(strsObj);
};

/**
 * 对象映射
 * 把数组中i位置元素先单个字符分割成数组，然后按字母序排序，最后在拼接
 *  这样就能获得统一顺序排单的字符串
 * 在对象中查找是否有当前排序过后字符串的键
 * 没有则新建数组并赋值为空数组
 * 然后把为排序前的字符串push进该属性中
 * 最后再把对象中每个属性的值push进数组
 * 最后的for循环可以省去
 *  直接return Object.values(strMap)
 *  其返回结果为把strMap自己所拥有的可枚举的属性的值组成的数组
 */
var groupAnagrams = function (strs) {
  let strMap = {};
  for (var i = 0; i < strs.length; i++) {
    let temp = strs[i].split("").sort().join("");
    if (!(strMap[temp])) {
      strMap[temp] = [];
    }
    strMap[temp].push(strs[i]);
  }
  let strArr = [];
  for (let k in strMap) {
    strArr.push(strMap[k]);
  }
  return strArr;
};
