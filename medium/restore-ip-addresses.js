/**
 * 回溯
 * 根据题目要求当切出的字符满足不以前导0开头，并且小于255则是有效ip片段
 * 并且需要切出的部分不能超过字符长度，不然将会切出空字符串
 *  然后再判断是否大于255时，空字符串会被转换成0
 * 递归的终止条件则时当path内由4个有效ip片段并且字符串以被切完(start == s.length)
 *
 */
var restoreIpAddresses = function(s) {
  var res = [];
  dfs([], 0);
  return res;
  // 用一个遍历存储当前分支需要处理字符的起始位置
  function dfs(path = [], start){
    // 当路径中存储了4段ip并且没有要处理的字符时就push进结果中
    if(path.length == 4 && start == s.length){
      res.push(path.join('.'));
      return;
    }
    // 取当前start位置开始1至3位置字符串
    for(let i = 1; i < 4; i++){
      // 切出的字符串不能大于字符串本身的长度
      if(start + i > s.length){
        return;
      }
      //当切出的字符长度大于1但是字符是以0开头时则不选择这个分支
      if(i > 1 && s[start] == '0'){
        return;
      }
      let str = s.slice(start, start + i); //切出选择的ip
      if(+str > 255){ // 当前切出来的ip大于255则非法，直接返回
        return
      }

      path.push(str);
      dfs(path, start + i);
      path.pop();
    }
  }
};
