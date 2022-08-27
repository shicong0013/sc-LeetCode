/**
 * 注释内为初版，后改为解构赋值，看着简洁一些
 * 当上下水平反转后，剩下只需要沿着从左上至右下分割两侧的在对调位置即可
 * 然后把需要对调的沿着左上至右下的对角线一组一组对调
 * 以3*3为例，第一次为3与7对调，第二次循环为4与2，8与6对调
 * 因为左上与右下已经对调好，所以最外层循环可以-1省去一次判断
 * 然后按照斜着为一列对调
 * [j][n-i-1+j] +j是因为第二次循环时要朝右下偏移一位
 *
 * 更简洁的写法为最外层条件 i < n
 * 内部为[matrix[j][i],matrix[i][j] = [matrix[i][j],matrix[j][i]
 * 当i为0时因为内层循环条件不满足，会跳过以对调的左上角和右下角
 * 对调的顺序为逐行与斜对角对调
 */
var rotate = function (matrix) {
  let n = matrix.length
  //上下水平翻转
  for (var i = 0; i < Math.floor(n / 2); i++) {
    for (var j = 0; j < n; j++) {
      [matrix[n - i - 1][j], matrix[i][j]] = [matrix[i][j], matrix[n - i - 1][j]]
      // let temp = matrix[i][j];
      // matrix[i][j] = matrix[n-i-1][j];
      // matrix[n-i-1][j] = temp;
    }
  }
  //左下至右上对角反转
  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j <= i; j++) {
      [matrix[j][n - i - 1 + j], matrix[n - i - 1 + j][j]] = [matrix[n - i - 1 + j][j], matrix[j][n - i - 1 + j]]
      // let temp = matrix[n-i-1+j][j];
      // matrix[n-i-1+j][j] = matrix[j][n-i-1+j];
      // matrix[j][n-i-1+j] = temp;
    }
  }
};

/**
 * 原地逐层逐个修改
 * 因为需要旋转的数组为正方形，当修改了第一层时最后一层也会一起修改
 * 所有只需要修改总层数/2，并且当时奇数层时，最内的一个元素不需要旋转，所以向下取整
 *  第二层循环
 *  j为当前层的第j个元素
 *  以第一层为例，到第二圈时，指向第一层的第二个元素
 *  假设初始i为0，j为0，
 *  第一圈循环时左上角的元素就为[i][j]
 *  左下为[n-j][i]
 *    因为第二层循环结束前i一直为0，当到第二圈循环时左下角需要变为倒数第二层的第一个元素
 *    只有j值有变换，所以未[n-j][i]
 *  右下为[n-i][n-j]
 *    同样假设在第一圈循环未结束时，需要替换的元素未最下一层从右至左
 *    只有[n-i]才能一直选中最后一行，[n-j]选中最后一行的每一个
 *  右上为[j][n-i]
 *    右边需要替换的为从最后一列从上之下
 *    j每次循环会++控制第几列，[n-i]一直选中没列的最后一个
 */
var rotate = function (matrix) {
  //旋转的图像为正方形可以直接使用matrix的长度
  let n = matrix.length - 1;
  // 逐层向内旋转，i为圈数
  for (var i = 0; i < Math.floor((n + 1) / 2); i++) {
    //逐个遍历当前圈的元素，j为当前圈的第j个元素
    for (var j = 0 + i; j < n - i; j++) {
      //左上角的第一个元素暂存
      let temp = matrix[i][j];
      //左下角的元素放入左上角
      matrix[i][j] = matrix[n - j][i];
      //右下角的元素放入左下角
      matrix[n - j][i] = matrix[n - i][n - j];
      //右上角的元素放入右下角
      matrix[n - i][n - j] = matrix[j][n - i];
      //暂存区的元素放入右上角
      matrix[j][n - i] = temp;
      //循环结束后j++，然后为左上第二个元素开始第二次循环
    }
  }
};
