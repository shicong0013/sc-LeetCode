/**
 * 动态规划
 * 创建一个与nums长度相同的数组，每一位用来存储以当前元素结尾的最长子序列和
 * i位置的和等于i前一个位置的和加上i位置的和
 * 而当i-1位置的和为负数的，不管i为多少，加上之后都不会大于i本身
 * 因此可以认为当i-1位置为负数时，那dp[i]位置的至应当就为i本身
 *  也可以认为是 i 与 i + i-1 求最大值
 */
var maxSubArray = function (nums) {
  let dp = new Array(nums.length);
  dp[0] = nums[0];
  let res = dp[0];
  for (var i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
    res = Math.max(dp[i], res);
  }
  return res;
};

/**
 * 分治
 * 把数组分成三部分，左侧、右侧、中间
 *  中间为从数组中间分别往左右两边遍历，把两边的最大值相加为中间部分的最大和
 * 取得数组中间位置后，把左右两边数组分别递归
 *  取得左侧最大值，和右侧最大值，然后在于中间最大值对比返回最大的数
 *  对于递归
 *    例如左侧数组的最大值可能在数组的中间
 *      所以通过递归把左侧数组再次拆分，左侧、右侧、中间
 *      并返回其中的最大值作为第一次分割数组时左侧的最大值
 *    通过递归把数组拆分至单个元素时返回其本身，然后上一层中另外一侧和中间比大小
 */
var maxSubArray = function (nums) {
  //只剩一个数组元素时，左侧为那个数组元素，右侧会为没有长度的数组
  if (nums.length == 0) {
    return 0;
  }
  //当递归值只要一个数组元素时返回这个数组元素
  if (nums.length < 2) {
    return nums[0];
  }
  //数组分组
  let mid = Math.floor(nums.length / 2);
  let leftArr = nums.slice(0, mid);
  let righArr = nums.slice(mid);
  //递归
  let leftMax = maxSubArray(leftArr);
  let righMax = maxSubArray(righArr);
  //左右两边的最大值
  let leftNum = 0;
  let lMax = -Infinity; //因为返回值可能有负数
  for (var i = leftArr.length - 1; i >= 0; i--) {
    leftNum += leftArr[i];
    lMax = Math.max(lMax, leftNum);
  }
  let righNum = 0;
  let rMax = -Infinity;
  for (var i = 0; i < righArr.length; i++) {
    righNum += righArr[i];
    rMax = Math.max(rMax, righNum);
  }
  //两侧最大值相加为中间最大值
  let cross = lMax + rMax;
  //返回其中最大的那个数
  return Math.max(leftMax, righMax, cross);
};
