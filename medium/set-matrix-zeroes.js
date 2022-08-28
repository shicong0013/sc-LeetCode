/**
 * 使用一个标记变量，并缩减循环
 * 只用一个标记列是否有0的变量
 * 标记当前行的第一列是否有0
 *  并且在标记的循环中用循环从1的位置遍历行
 *  当前位置有0时就把行首和列首置0
 * 然后循环从最后一行开始遍历数组，从第2列开始
 *  当前行或者列首位是0，该位置就置为0
 *  循环结束后判断标记列的遍历，再决定是否列首位置0
 *  如果判断当前行第一列，那如果为0，这一行都会被污染为0
 * 如果从第一行开始循环的话，假如第一行有0存在，第一行全部变为0
 * 之后的所有元素都会因为第一行的0全都变为0
 * 如果像两个标记变量的方法从第二行开始的话
 * 那第一行是否需要置0就需要单独一个循环执行
 * 因此从最后一行开始循环先把第一列之后的元素判断完后再判断第一列
 */
var setZeroes = function (matrix) {
  let colum0 = false;
  for (var i = 0; i < matrix.length; i++) {
    if (matrix[i][0] == 0) {
      colum0 = true;
    }
    for (var j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }
  for (var i = matrix.length - 1; i >= 0; i--) {
    for (var j = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
    if (colum0) {
      matrix[i][0] = 0;
    }
  }
};

/**
 * 使用两个标记变量
 * 遍历数组当某个位置为0时，则把这一列的第一个元素和这一行的第一个元素置为0
 * 然后再遍历数组，当次行或者列的第一个元素为0时，则把这个位置置0
 * 但是这样的话，当第一行或者第一列本身就有0时方法就不准
 * 因此需要最先把第一行和第一列分别遍历一遍用两个遍历存储第一行和第一列是否有0存在
 * 最后再根据两个变量的值来把第一行和第一列置0
 */
var setZeroes = function (matrix) {
  let row0 = false;
  let colum0 = false;
  for (var i = 0; i < matrix.length; i++) {
    if (matrix[i][0] == 0) {
      colum0 = true;
    }
  }
  for (var i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] == 0) {
      row0 = true;
    }
  }
  for (var i = 1; i < matrix.length; i++) {
    for (var j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }
  for (var i = 1; i < matrix.length; i++) {
    for (var j = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (colum0) {
    for (var i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
  if (row0) {
    for (var j = 0; j < matrix[0].length; j++) {
      matrix[0][j] = 0;
    }
  }
};

/**
 * 标记数组
 * 每次找到等于零的那一个把对应的行和列都置零即可
 * 因此，既然打算将整行和整列清零，因此并不需要标记录它是cell[2][4]（行2，列4）
 * 只需要知道行2有个元素为0，列4有个元素为0.不管怎样，整行和整列都要清零，又何必要记录零元素的确切位置？
 *
 * 用两个数组分布存储行与列
 * 遍历数组，当一个位置上值为0时，在行与列数组内把该行与该列标记为1
 * 然后第二遍遍历数组，每次对比行与列数组，确认该行或者列是否需要置0
 */
var setZeroes = function (matrix) {
  //创建两个空数组分布存储行和列
  let row = new Array(matrix.length).fill(0);
  let colum = new Array(matrix[0].length).fill(0);
  //第一次遍历数组，当前元素为0时则把行和列内那一位置1
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        row[i] = colum[j] = 1;
      }
    }
  }
  //第二次遍历数组，当当前行或者列在为1就把当前位置置0
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      if (row[i] || colum[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};
