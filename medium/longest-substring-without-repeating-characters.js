/**
 * 滑动窗口优化
 * map储存字符最后一次出现的位置
 * 遍历字符串
 *  map中有当前字符的属性时比对当前字符第一次出现的位置与j的位置，取最大值
 *    因为每次都会检查当前字符在map中是否存在，如果存在则说明这时一个重复的字符
 *    那窗口j逐步缩进太慢，可以直接赋值为当前重复字符的位置，直接将窗口缩减成只要一个字符
 *    而还有一种情况为当前重复字符的位置已经在上次缩减窗口中给排除再外了
 *    所以j的位置取j和当前字符最后一次出现位置的最大值
 *      如"tmmzuxt"当i为6时指向重复字符t，而t的最后一次出现的位置为1
 *      而j的位置应该为m最后一次出现的位置3，如果不去最大值，j将被改为1，导致返回结果错误
 *  把当前字符当作键，位置当作值存储在map中
 *  i-j+1 计算当前窗口的大小与保存的最大窗口大小去最大值
 */
var lengthOfLongestSubstring = function (s) {
  let result = 0;
  let map = new Object;
  for (var i = 0, j = 0; i < s.length; i++) {
    let char = s[i];
    if (map[char]) {
      j = Math.max(map[char], j)
    }
    map[char] = i + 1;
    result = Math.max(i - j + 1, result)
  }
  return result;
};
/**
 * 滑动窗口
 * map用于储存当前窗口内最近新字符的个数
 * count存储当前窗口的大小
 * result存储结果，最大不重复的数
 * 循环遍历字符串，i为窗口右侧，j为窗口左侧
 *  当map中没有i位置字符的属性时，则给map设置当前位置字符的属性值为1，并且count++，窗口变大
 *    否则当前位置字符属性值++，然后count++，窗口变大
 *  接着检查当前当前字符属性值是否大于1，大于则说明当前窗口内有重复字符
 *    通过把j位置字符属性的值-1，然后j++，表示为窗口缩小
 *     直至i位置字符属性的值为1时，说明当前窗口内没有重复字符
 *  比对count与result的最大值，保存最大窗口
 */
var lengthOfLongestSubstring = function (s) {
  let map = new Object;
  let result = 0;
  let count = 0;
  for (var i = 0, j = 0; i < s.length; i++) {
    let char = s[i];
    if (!map[char]) {
      map[char] = 1;
      count++;
    } else {
      map[char]++
      count++;
    }
    while (map[char] > 1) {
      map[s[j]]--;
      count--;
      j++;
    }
    result = Math.max(result, count);
  }
  return result;
};
