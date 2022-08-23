/**
 * 双指针
 * slow存储被比对的元素
 * fast存储即将对比的元素
 * 当两个元素相同时进入下一轮循环
 * 两个元素不相同时把slow+1，并把fast存储到新的slow位置
 * 直至到fast达到最后一个元素
 */
var removeDuplicates = function (nums) {
  //两个变量，一个用于存储用于对比的元素，一个是被对比的元素
  let slow = 0;
  let fast = 1;
  for (var i = 0; fast + i < nums.length; i++) {
    //当两个元素相同时被对比的元素位置+1
    if (nums[slow] !== nums[fast + i]) {
      slow++;
      nums[slow] = nums[fast + i];
    }
  }
  return slow + 1;
};
