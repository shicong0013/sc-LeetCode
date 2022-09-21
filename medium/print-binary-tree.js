/**
 * DFS
 * 高度
 *  树的深度为2时，树的高度为1
 *  因此第一层的高度 h = 0
 *  h与下一层节点的返回值+1取最大值
 * 填入数组
 *  r为当前层节点所填入的行数
 *  c为当前层节点所添加的列数
 *  第一次初始调用时，为当前行的中间位置
 *  之后递归时行数为+1
 *  但是列数，左侧为当前行的列数减去（用下一行高度所算出的列数）
 */
var printTree = function (root) {
  //获取最大高度
  function getDeep (root) {
    h = 0;
    if (root.left) {
      h = Math.max(h, getDeep(root.left) + 1)
    }
    if (root.right) {
      h = Math.max(h, getDeep(root.right) + 1);
    }
    return h;
  }
  //把节点值填入数组
  function dfs (res, r, c, height, root) {
    res[r][c] = root.val.toString();
    if (root.left) {
      dfs(res, r + 1, c - (1 << (height - r - 1)), height, root.left)
    }
    if (root.right) {
      dfs(res, r + 1, c + (1 << (height - r - 1)), height, root.right)
    }
  }
  var height = getDeep(root); //高度
  var m = height + 1; //行数
  var n = (1 << m) - 1;//左移为2的次方，相等于 2**m -1
  var res = new Array(m).fill(0).map(() => new Array(n).fill('')); //返回的数组
  dfs(res, 0, Math.floor((n - 1) / 2), height, root);
  return res;
};
/**
 *  BFS
 * 高度
 *  外层while确定当前层节点的属性
 *  内层while则检查当前层的每个节点的左右节点
 *  只要stk的长度不为0，则说明当前层还有节点需要遍历检查
 *  然后就把结果+1，接着得到当前层需要检查的节点数量
 *    再由内层循环取一定次数的节点检查该节点的左右子节点
 * 放置值至数组
 *  与DFS传参的值一样，只剩把每次要用到的节点、行、列都放到数组中push进栈
 *  每次循环时从栈中取出
 */
var printTree = function (root) {
  var height = getDeep(root);
  var m = height + 1;
  var n = (1 << (height + 1)) - 1;
  var res = new Array(m).fill(0).map(() => new Array(n).fill(''));
  var stk = [];
  stk.push([root, 0, Math.floor((n - 1) / 2)]);
  while (stk.length) {
    var temp = stk.shift();
    var rootVal = temp[0];
    var r = temp[1];
    var c = temp[2];
    res[r][c] = rootVal.val.toString();
    if (rootVal.left) {
      stk.push([rootVal.left, r + 1, c - (1 << height - r - 1)]);
    }
    if (rootVal.right) {
      stk.push([rootVal.right, r + 1, c + (1 << height - r - 1)])
    }
  }
  return res
  //广度优先查询高度
  function getDeep (root) {
    var res = -1;
    var stk = [root];
    while (stk.length) {
      var p = stk.length;
      res++;
      while (p > 0) {
        p--;
        var t = stk.shift();
        if (t.left) {
          stk.push(t.left);
        }
        if (t.right) {
          stk.push(t.right);
        }
      }
    }
    return res;
  }
};
