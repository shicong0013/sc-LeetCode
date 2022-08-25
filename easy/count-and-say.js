/**
 * 多层循环
 * 第一层为数列的第几项
 *  第二层遍历当前项字符串
 *    第三次用当前项字符串的单个字符往左比对有多少个一样的字符
 *    当遇见不一样后按照规则相同字符的数量+字符+之前以统计的字符
 *   然后把调整当前循环的计数器移至下一个要比对的字符位置
 *  把遍历后的结果赋值给str供下次循环使用
 *  并把暂存清空
 */
var countAndSay = function (n) {
  //用于计数的变量，默认1
  //储存的结果
  let str = '1';
  for (var i = n; i > 1; i--) {
    //从最末尾遍历字符串
    let ts = '';
    for (var j = str.length - 1; j >= 0;) {
      let count = 1;
      //拿到当前位置字符串，跟前一个字符串对比，如果一样，则计数++
      while (str[j] == str[j - count]) {
        count++;
      }
      //不一样则把当前计数+位置字符串拼接给结果
      ts = count + str[j] + ts;
      j -= count;
      //计数重置为1
      count = 1;
    }
    str = ts;
  }
  return str;
};
