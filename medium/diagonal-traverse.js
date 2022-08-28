/**
 * m为行的数量 n为列的数量
 * 一个用来计算当前数储存位置的变量
 * 对角线的数量为m + n -1
 * 从0开始遍历的话按照顺序为偶数是从坐下至右上遍历
 *  当循环小于行数时，每次都是从第一列的位置开始朝右上遍历所以位置为[i,0]
 *  当循环大于行数时，每次都是从最后一行的位置开始朝右上遍历所有位置为[m-1,i-m+1]
 *    从第二次开始之后的位置为行-1，列+1
 * 奇数时从右上往左下遍历
 *  当循环小于列数时，每次都是总第一行的某个位置开始朝左下遍历，所有位置为[0,i]
 *  当循环大于列数时，每次都是从最后一列的某个位置开始朝坐下遍历，所有位置为[i-n+1,n-1]
 *    第二次循环开始行+1，列-1
 */
var findDiagonalOrder = function (mat) {
  let m = mat.length;
  let n = mat[0].length;
  let arr = new Array(m * n);
  let count = 0;
  for (var i = 0; i < m + n - 1; i++) {
    if ((i % 2) == 0) {
      let x = i < m ? i : m - 1;
      let y = i < m ? 0 : i - m + 1;
      while (x >= 0 && y < n) {
        arr[count] = mat[x][y];
        count++;
        x--;
        y++;
      }
    } else {
      let x = i < n ? 0 : i - n + 1;
      let y = i < n ? i : n - 1;
      while (y >= 0 && x < m) {
        arr[count] = mat[x][y];
        count++;
        x++;
        y--;
      }
    }
  }
  return arr;
};
