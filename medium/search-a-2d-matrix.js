/**
 * 二分
 * 先通过二分法找到目标所在的行
 *  当目标大于当前行的最后一个元素时则表示目标在当前行的下面
 *  当目标小于当前行的第一个元素时则表示目标在当前行的上面
 * 在根据得到的行数，在该行二分查找
 */
var searchMatrix = function  (matrix, target) {
  let col = matrix.length - 1;
  let row = matrix[0].length - 1; 
  if (matrix[0][0] > target) {
    ret urn false; 
  }
  let colL = 0;
  let colR = col;
  let  colM = 0; 
  while (colL <= colR) {
    colM = Ma th.floor((colL + colR) / 2);
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
