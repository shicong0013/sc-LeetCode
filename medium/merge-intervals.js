/**
 * 合并区间
 * 把二维数组按第一个元素的大小升序排列
 * 这样后一个数组的第一项一定比前一个数组的第一项大
 * 就只需要用后一个数组的第一项比前一个数组的第二项就可以判断区间是否有重叠
 * 然后再比对后一个数组的第二项与前一个数组的第二项，确实区间时完全重叠还是部分重叠
 */
var merge = function (intervals) {
  intervals.sort((arr1, arr2) => arr1[0] - arr2[0]);
  let merges = [intervals[0]];
  let flag = 0
  for (var i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= merges[flag][1]) {
      if (intervals[i][1] > merges[flag][1]) {
        merges[flag][1] = intervals[i][1];
      }
    } else if (intervals[i][0] > merges[flag][1]) {
      merges.push(intervals[i]);
      flag++;
    }
  }
  return merges;
};
