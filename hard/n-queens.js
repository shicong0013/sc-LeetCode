/**
 * 集合回溯
 * 在n*n的棋盘上
 *  从左上到右下的斜线上，两个位置行下标与列下标之差相等则在一条斜线上
 *  从右上到坐下的斜线上，两个位置行下标与列下标之和相等则在一条斜线上
 * 通过三个集合存储皇后所在的列、两个斜线的值来判断当前位置是否有皇后
 * 如果没有时把该位置存储到用来保存皇后信息的数组中
 * 最后把存有皇后信息的数组和棋盘尺寸传给转换格式的函数，构造出返回的结果
 */
var solveNQueens = function(n) {
  // 返回结果的数组
  var res = [];
  // 存取皇后位置的数组
  var queens = new Array(n).fill(0);
  // 当前元素所在的列
  var colums = new Set();
  // 当前元素左对角线,差值相等即在一条斜线上
  var diagonals1 = new Set();
  // 当前元素的右对角线,和值相等即在一条斜线上
  var diagonals2 = new Set();
  // 遍历搜索
  dfs(res, queens, n, 0, colums, diagonals1, diagonals2)
  return res;
  function dfs(res, queens, n, row, columns, diagonals1, diagonals2){
    // 当row等于n时则说明上一层的递归已经找到了一个解法
    if(row == n){
      // 把当前所有元素所在的位置转换成结果所以需要的格式
      var board = generateBoard(queens, n);
      // 添加到res中
      res.push(board);
    } else {
      // 遍历所有列
      for(let i = 0; i < n; i++){
        // 判断当前行所在的列是否有皇后
        if(columns.has(i)){
          continue;
        }
        // 计算左对角线的差值,而排除所有元素
        let diagonal1 = row - i;
        // 差值存在于diagonals中则说明该斜线上有皇后
        if(diagonals1.has(diagonal1)){
          continue;
        }
        // 排除右对角线的元素
        let diagonal2 = row + i;
        if(diagonals2.has(diagonal2)){
          continue;
        }
        // 经过上面三个if的排除,当前行的第i列位置可以放元素
        // 把当前行存储下列的位置信息
        queens[row] = i;
        // 把列,对角的信息添加进集合中,
        columns.add(i)
        diagonals1.add(diagonal1);
        diagonals2.add(diagonal2);
        // 递归遍历下一行
        dfs(res, queens, n, row + 1, colums, diagonals1, diagonals2)
        // 回溯,把当前行位置皇后的信息删除,避免第二次查找时错误的生成结果
        queens[row] = 0;
        // 回溯,把当前列和对角线的信息删除,避免第二个次查找时被跳过
        columns.delete(i);
        diagonals1.delete(diagonal1);
        diagonals2.delete(diagonal2);
      }
    }
  }
  function generateBoard(queens, n){
    // 结果 数组
    var board = [];
    for(let i = 0; i < n; i++){
      // 为当前行创建一个n长度并填充满 . 号的数组
      let row = new Array(n).fill('.');
      // 根据queens中当前行保存的皇后所在的位置,把row位置元素改为Q
      row[queens[i]] = 'Q';
      // 把数组拼接成字符串然后放进结果中
      board.push(row.join(''));
    }
    return board;
  }
};

/**
 * 回溯
 * 与上方思路相同，只是改用高级函数
 */
var solveNQueens = function(n) {
  let res = [];
  let path = [];
  dfs(0, path);
  return res;
  function dfs(row, path){
    // 当行等于n时就已经递归结束
    if(row == n){
      res.push(
        // path内放的为每一个皇后的列索引,自身的索引为行索引
        path.map(c => {
          let arr = new Array(n).fill('.');
          // 该行的列索引位置赋值为Q
          arr[c] = 'Q';
          return arr.join('')
        })
      )
    }
    // 遍历当前行的每一列
    for(let col = 0; col < n; col++){
      // c为已有皇后所在的列,r为c的index,为c所在的行
      let canNotSet = path.some((c, r) => {
        // 是否在同一行 c == col
        // 是否在正斜对角线/ r + c == row + col
        // 是否在反斜对角线\ r - c == row - col
        return c == col || ((r - c) == (row - col)) || ((r + c) == (row + col));
      })
      // 当有有值时说明当前位置不能放皇后
      if(canNotSet){
        continue;
      }
      // 行数+1后递归调用
      // 皇后放的位置为列索引,自身位置的索引为行索引
      dfs(row + 1, [...path, col]);
    }
  }
};
