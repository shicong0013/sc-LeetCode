/**
 * 对象
 * 遍历数组
 *  检查对象中是否有target - 数组当前元素的值的属性
 *  没有则把当前元素做数学，位置做值保存都在对象中
 *  有的话则然后target - 当前元素属性的值，和循环当前的计数器
 */
var twoSum = function (nums, target) {
  let numMap = new Object;
  for (var i = 0; i < nums.length; i++) {
    if (!((target - nums[i]) in numMap)) {
      numMap[nums[i]] = i;
    } else {
      return [numMap[target - nums[i]], i];
    }
  }
};
/**
 * 最后一个元素的下标位length -1
 * 所以当pop的元素是target两个目标值之一是当前nums的长度就是次元素在初始数组的位置
 * 而且pop最后一个元素不会改变其他元素的下标
 * 通过indexOf可以直接确定另一个元素的位置
 * 返回值为-1时表示pop的元素不是目标值则进入下一个循环
 */
var twoSum = function (nums, target) {
  //获得数组长度判断循环次数
  let i = nums.length;
  //开始循环
  while (i > 1) {
    //得到数组的最后一个元素
    let last = nums.pop();
    if (nums.indexOf(target - last) > -1) {
      return [nums.indexOf(target - last), nums.length]
      //查找target-这个元素的值是否在数组中
    }
    i--;
    //不在则从新开始循环
  }
};

/**
 * 最简单的循环遍历数组
 */
var twoSum = function (nums, target) {
  //循环选中第一个数
  for (var i = 0; i < nums.length - 1; i++) {
    //第二层循环选中第二个数
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        //值相加等于target则输出下标
        return [i, j];
      }
    }
  }
};
