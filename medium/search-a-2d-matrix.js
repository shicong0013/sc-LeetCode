/**
 * 二分
 * 通过行数*列数得到整个二维数组所有元素的个数，这样可以把二维数组展开成一维
 * 然后对这样的一维数组进行二分
 * mid除以二维数组的长度可以得到mid在二维数组中的行数
 * 再对二维数组的长度区域，可以得到当前行二维数组中的列数
 */
var searchMatrix = function(matrix, target) {
  let left = 0;
  let righ = matrix.length * matrix[0].length -1 ;

  while(left <= righ){ 
    var mid = Math.floor((left + righ) / 2);
    var x = Math.floor(mid / matrix[0].length);
    var y = mid % matrix[0].length;
    if(matrix[x][y] < target){
      left = mid + 1;
    } else if(matrix[x][y] > target) {
      righ = mid - 1;
    } else {
      return true
    }
  }
  return false;
};
/**
 * 二分
 * 先通过二分法找到目标所在的行
 *  当目标大于当前行的最后一个元素时则表示目标在当前行的下面
 *  当目标小于当前行的第一个元素时则表示目标在当前行的上面
 * 在根据得到的行数，在该行二分查找
 */
var searchMatrix = function (matrix, target) {
  let col = matrix.length - 1;
  let row = matrix[0].length - 1;
  if (matrix[0][0] > target) {
    return false;
  }
  let colL = 0;
  let colR = col;
  let colM = 0;
  while (colL <= colR) {
    colM = Math.floor((colL + colR) / 2);
    if (matrix[colM][row] < target) {
      colL = colM + 1;
    } else if (matrix[colM][0] > target) {
      colR = colM - 1;
    } else {
      break;
    }
  }
  let rowL = 0;
  let rowR = row;
  let rowM = 0;
  while (rowL <= rowR) {
    rowM = Math.floor((rowL + rowR) / 2);
    if (matrix[colM][rowM] < target) {
      rowL = rowM + 1;
    } else if (matrix[colM][rowM] > target) {
      rowR = rowM - 1;
    } else {
      break
    }
  }
  return matrix[colM][rowM] == target;
};
