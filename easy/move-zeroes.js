/**
 * 双指针
 * 先对数组进行排序，把所有非0的元素移动到数组前面
 * 然后再用循环把从数组最后一位非0的元素开始往后全部置0
 */
var moveZeroes = function (nums) {
  let noZeroes = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[noZeroes] = nums[i];
      noZeroes++;
    }
  }
  for (var i = noZeroes; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums
};
