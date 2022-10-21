/**
 * 回溯
 * 用target减去数组中的元素来寻找可能的组合
 *  当target被减成0时，则当前路径是正确路径
 * idx用来选取数组中的元素，防止重复选择
 */
var combinationSum = function(candidates, target) {
  var res = [];
  dfs(target)
  return res;
  function dfs(target, idx = 0, path = []){
    if(target == 0){
      // 因为path在传入时使用...浅拷贝，所以可以直接push
      res.push(path);
      return;
    }
    // 当idx等于数组长度则已经搜索完数组应该直接返回
    if(idx == candidates.length){
      return;
    }
    // 当target与当前索引的元素相减还大于0时，则当前位置元素还能尝试
    if(target - candidates[idx] >= 0){
      dfs(target - candidates[idx], idx, [...path, candidates[idx]])
    }
    // 否则需要尝试下一个索引的元素
    dfs(target,idx+1, path);
   }
};
/**
 * 回溯
 * 把candidates遍历添加进临时数组
 * 当临时数组的值累加并与target判断来决定下一步的操作
 */
var combinationSum = function(candidates, target) {
  var res = [];
  add();
  return res;
  // start为下一轮搜索的起点
  function add(arr = [], start = 0){
    // 值等于target时就把当前的元素组成的数组push进结果中
    if(arr.reduce((pre, cur) => pre + cur, 0) == target){
      res.push(arr.slice());
      return;
    }
    // 当累加值超过target时则需要返回上一次结果，并尝试累加数组中的下一个值
    if(arr.reduce((pre, cur) => pre + cur, 0) > target){
      return;
    }
    // 当累加值不超过target时就继续从数组开始元素开始累加
    // 遍历数组，尝试单一元素累加是否能等于target
    for(var i = start; i < candidates.length; i++){
      arr.push(candidates[i]);
      // start++使下一轮搜索是不会在搜索当前所有之前的元素，而排除元素重复出现
      add(arr, start++);
      arr.pop();
    }
  }
};
