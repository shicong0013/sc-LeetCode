/**
 * Map对象
 * 创建一个用于存储以迭代过元素的对象numMap
 * 当numMap内没有当前元素时则说明第一次遇见
 * 把其值加到结果上，并在numMpa内创建一个num值得键，其值为1
 * 当numMap内有当前迭代元素时，则判断其值是否为1
 * 为1则说明时第一次遇见重复得元素，则在结果上减去该值
 * 并把numMap对象内num的值设置为2，之后再迭代到不会再减该值
 */
var sumOfUnique = function (nums) {
  let result = 0;
  const numMap = new Map();
  for (const num of nums) {
    if (!numMap.has(num)) {
      result += num;
      numMap.set(num, 1)
    } else if (numMap.get(num) == 1) {
      result -= num;
      numMap.set(num, 2);
    }
  }
  return result;
};
/**
 * 循环
 * 先遍历数组
 *  当前元素与数组后面的元素逐个对比，相同的置为0
 *  并把flag置1表示当元素有相同的元素，需在小循环结束后也置为0
 * 当当前循环的元素为0时则表示当前元素为之前循环时被找到过的重复出现的元素
 * 之间跳过当前循环
 * 把当前元素的值累加到返回的变量上
 */
var sumOfUnique = function (nums) {
  //创建一个存储单一元素的数组
  let result = 0;
  //遍历nums
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      continue;
    }
    let flag = 0;
    //用nums的单个元素再遍历nums
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        nums[j] = 0;
        flag = 1;
      }
    }
    if (flag == 1) {
      nums[i] = 0;
    }
    //累加
    result += nums[i];
  }
  return result;
};
