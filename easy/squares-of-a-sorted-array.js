/**
 * 双指针
 * 因为数组中有负数，所以所有元素平方后最小的元素其实是再数组中间的
 * 从两侧最大值到中间的最小值
 * 所有指针指向数组的开头的结尾，对比两个数的大小
 * 最大的先传入数组中
 * 当末尾的值比开头大时就把末尾的值传入数组并j--
 * 否则就是开头的值比结尾大或者相等这时就传入开头的数值并i++
 * 因为两两对比，最后可能会剩下一个单独的数，所有条件要设置为i<=j
 */
var sortedSquares = function (nums) {
  //先用左移把所有元素得平方
  for (var i = 0; i < nums.length; i++) {
    nums[i] = Math.pow(nums[i], 2);
  }
  let result = [];
  //用循环两个指针对比两个数的大小调整位置
  for (var i = 0, j = nums.length - 1; i <= j;) {
    if (nums[i] < nums[j]) {
      result.unshift(nums[j]);
      j--;
    } else {
      result.unshift(nums[i]);
      i++;
    }
  }
  return result;
};
