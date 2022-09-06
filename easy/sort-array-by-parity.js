/**
 * 双指针
 * j指针指向下一个需要移动数组前端的位置
 * i指针指向当前判断的数
 * 当i所指向的数为奇数时不进入if，进入下一轮循环
 * 当i所指向的为偶数时，与当前位置的j互换位置
 * 并把j++指向下一个需要被互换的位置
 * 这样每当遇见一个偶数，都会与奇数部分最前端的数(j的位置)互换位置
 */
var sortArrayByParity = function (nums) {
  if (nums.length < 2) {
    return nums;
  }
  for (var i = 0, j = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
  }
  return nums;
};
