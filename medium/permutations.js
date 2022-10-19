/**
 * 回溯
 * 额外用一个由布尔值组成的数组，来指向数组中相同索引的值是否由添加进数组
 * 每当添加进一个元素后，元素相同位置的布尔值置为false
 * 再递归调用函数后，因为该位置以置为false则会跳过这个位置，添加其他位置的元素
 * */
var permute = function(nums) {
  var len = nums.length;
  if(len === 0){
    return [];
  }
  var res = [];
  // 用一个数组存储当前位置的数是否已经被添加进数组中
  var flag = new Array(len).fill(true);
  f()
  return res;
  function f(arr = []){
    // 当数组中的数已经与nums的数量相等时则已经排列完毕
    if(arr.length === len){
      // 就把当前数组拷贝至结果数组中
      // 只是单纯push数组的话res中存储的将是同一个数组的指向
      res.push(arr.slice());
    } else{
      // 遍历数组中的每一个数
      for(let i = 0; i < len; i++){
        if(flag[i]){
          arr.push(nums[i]);
          flag[i] = false;
          // 然后把再递归调用函数把数组中的其他数放进数组
          f(arr)
          // 下面两行产生回溯效果，使数据返回到上一层的状态
          arr.pop();
          flag[i] = true;
        }
      }
    }
  }
};
