/**
 * 循环+二分
 * 先通过循环从最后一行开始判断
 *  当该行的0位置元素小于等于target时，target才有可能在该行
 *  然后再在这行进行二分循环
 * 一直没有返回true后，就返回false
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  for (var i = m - 1; i >= 0; i--) {
    if (matrix[i][0] <= target) {
      let left = 0;
      let righ = n - 1;
      while (left <= righ) {
        let mid = Math.floor((left + righ) / 2);
        if (matrix[i][mid] < target) {
          left = mid + 1;
        } else if (matrix[i][mid] > target) {
          righ = mid - 1;
        } else {
          return true;
        }
      }
    }
  }
  return false;
};
/**
 * 循环
 * 以右上角为起点(左下角也行)
 * 当该位置元素比目标大时则说明目标元素在下一行
 *  则跳出当前循环
 * 该位置元素比目标值小时，则说明目标元素在当前行
 *  则跳出循环的当前轮，遍历该行
 */
var searchMatrix = function (matrix, target) {
  let col = matrix.length;
  let row = matrix[0].length - 1;
  for (var i = 0, j = row; i < col; i++) {
    for (; j >= 0; j--) {
      if (matrix[i][j] > target) {
        continue;
      } else if (matrix[i][j] < target) {
        break;
      } else {
        return true;
      }
    }
  }
  return false;
};
