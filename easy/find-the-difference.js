/**
 * 位运算
 * 任何一个数异或它本身都等于0
 * 因为t只是比s多了一个字符，其他的都完全相同
 * 所有需要用0挨个异或s与t字符串，最后剩下的就是多出的那个字符
 */
var findTheDifference = function (s, t) {
  let num = 0;
  for (let char of s) {
    num ^= char.charCodeAt();
  }
  for (let char of t) {
    num ^= char.charCodeAt();
  }
  return String.fromCharCode(num);
};

/**
 * 对象
 * 分别遍历两个字符串，把其中的字符做属性添加到map中，并且记录字符出现的次数
 *  因为t只是比s多一个字母，所以除了多处的字符以外，其他的所有字符出现的次数都应为偶数
 *  因此只要有属性的值为1或者取余为1，那他就是多出现的字符
 */
var findTheDifference = function (s, t) {
  let map = new Object;
  for (let char of s) {
    map[char] ? map[char]++ : map[char] = 1;
  }
  for (let char of t) {
    map[char] ? map[char]++ : map[char] = 1;
  }
  for (let k in map) {
    if (map[k] == 1 || map[k] % 2 == 1) {
      return k;
    }
  }
};
