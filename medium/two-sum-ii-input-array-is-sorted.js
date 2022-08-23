/**
 * 双指针
 * 因为是升序排列的数组，所以可以从开头和结尾用最大值和最小值相加
 * 当最大值+最小值大于目标时，说明最大值太大了，把最大值左移缩小
 * 当最大值+最小值小于目标时，说明最小值太小了，把最小值右移增大
 * 直至最大值+最小值等于目标
 */
var twoSum = function (numbers, target) {
  let first = 0;
  let last = numbers.length - 1;
  while (numbers[first] + numbers[last] != target) {
    if (numbers[first] + numbers[last] > target) {
      last--;
    } else if (numbers[first] + numbers[last] < target) {
      first++
    }
  }
  return [first + 1, last + 1]
};
