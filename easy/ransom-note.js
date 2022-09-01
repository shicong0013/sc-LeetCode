/**
 * 对象
 * 遍历两个字符串，以字母为键，出现的次数为值存储
 * 然后遍历note的每个属性
 *  当mag中没有这个属性或是note中k的值大于mag中k的值
 *  则说明magazine缺少组成ransomNote的字母，返回false
 */
var canConstruct = function (ransomNote, magazine) {
  let mag = new Object;
  let note = new Object;
  for (let char of ransomNote) {
    note[char] ? note[char]++ : note[char] = 1;
  }
  for (let char of magazine) {
    mag[char] ? mag[char]++ : mag[char] = 1;
  }
  for (let k in note) {
    if (!mag[k] || note[k] > mag[k]) {
      return false;
    }
  }
  return true;
};

/**
 * 计数
 * 因为字符串是由小写字母组成的
 * 所有创建一个26长度的数组，存储magazine中每个字符出现的次数
 * 先遍历magazine用当前字符的ASCII码-最小字母a的ASCII码得到字母在数组中的对应下标，并+1表示出现一次
 * 然后再遍历ransomNote，用相同的方法找到当前字母的下标，但是 -1
 *  当这个位置的值为-1时，表示magzine中没有足够的字母组成ransomNote
 */
var canConstruct = function (ransomNote, magazine) {
  let strArr = new Array(26).fill(0);
  for (let char of magazine) {
    strArr[char.charCodeAt() - 'a'.charCodeAt()]++;
  }
  for (let char of ransomNote) {
    let count = char.charCodeAt() - 'a'.charCodeAt();
    strArr[count]--;
    if (strArr[count] < 0) {
      return false;
    }
  }
  return true;
};
