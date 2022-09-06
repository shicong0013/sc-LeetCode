/**
 * 双指针
 *                                     rightMax
 * leftMax                                __
 *    __                                 |  |
 *   |  |__    __??????????????????????  |  |
 * __|     |__|                        __|  |__
 *         left                       right
 * leftMax为从左侧寻找确定的最大值、left为左侧当前处理的下标
 * righMax为从右侧寻找确定的最大值、righ为右侧当前处理的下标
 * 当某个位置水的值取决于其作用两侧最大值中较小的那个
 * 而当从左往右遍历时，leftMax相对于left是确定的，而righMax则是不确定的
 * 当从右往左遍历时，rihgMax相对于righ时确定的，而leftMax则是不确定的
 * 对于left而言，左侧的最大值一定为leftMax，右侧的最大值只会>=righMax
 *  这个时候只要leftMax < righMax，则left位置的水就确定了
 *    因为无论右边会不会在出现比righMax大的值，都不会影响left位置的结果
 *  所以当leftMax < rihgMax时就处理left位置，反之处理righ位置
 *
 */
var trap = function (height) {
  let leftMax = 0;
  let righMax = 0;
  let count = 0;
  for (var left = 0, righ = height.length - 1; left <= righ;) {
    leftMax = Math.max(leftMax, height[left]);
    righMax = Math.max(righMax, height[righ]);
    if (leftMax < righMax) {
      count += leftMax - height[left];
      left++;
    } else {
      count += righMax - height[righ];
      righ--;
    }
  }
  return count;
};

/**
 * 循环遍历
 * 当前位置存水的数量取决于两侧最低的柱子与当前位置柱子的高度
 * 先从左到右遍历数组取得每个柱子左侧最高柱子的高度
 * 然后再从右侧遍历数组可以取得每个柱子右侧最高柱子的高度
 *  在第二次遍历的过程中与第一次遍历时得到的该位置左侧最高高度对比
 *  取最小值，并减去该位置的柱子高度，即得到了该位置水的数量
 */
var trap = function (height) {
  let leftMax = [];
  let tempMax = 0;
  for (var i = 0; i < height.length; i++) {
    tempMax = Math.max(tempMax, height[i]);
    leftMax.push(tempMax);
  }
  tempMax = 0;
  let count = 0;
  for (var i = height.length - 1; i >= 0; i--) {
    tempMax = Math.max(tempMax, height[i]);
    count += Math.min(tempMax, leftMax[i]) - height[i];
  }
  return count;
};
