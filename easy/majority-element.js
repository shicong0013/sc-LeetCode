/**
 * 对象
 * 遍历数组，判断当前下标得值是否在对象中存在
 *  不存在则新建并赋值为1
 *  存在则++
 * 最后在遍历对象返回值大于count得键
 */
var majorityElement = function (nums) {
  let count = Math.ceil(nums.length / 2);
  let numsObj = {};
  for (var i = 0; i < nums.length; i++) {
    if (!(nums[i] in numsObj)) {
      numsObj[nums[i]] = 1;
    } else {
      numsObj[[nums[i]]]++;
    }
  }
  for (let k in numsObj) {
    if (numsObj[k] >= count) {
      return k;
    }
  }
};
/**
 * 排序
 * 对数组进行排序后相同的数字将会排在一起
 * 因为给定的数组总是存在多数元素
 * 对数组遍历，当元素与前一个元素相同时count++
 * 当count等于出现次数时就返回
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  let flag = Math.ceil(nums.length / 2);
  let count = 1;
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      count++;
    } else {
      count = 1;
    }
    if (count == flag) {
      return nums[i];
    }
  }
  return count;
};
