/**
 * 按位异或
 * 两个相同的数按位异或运算得0
 * 任何数与0异或运算得它本身
 * 且多个数异一起异或运算时调换异或的顺序不改变结果
 * 所以数组内两个相同得数可以看出0
 * 把数组内所有的数挨个异或运算可以看成单独的数与0异或了很多次
 */
var singleNumber = function (nums) {
  let num = 0;
  for (var i = 0; i < nums.length; i++) {
    num = num ^ nums[i];
  }
  return num;
};
