/**
 * 优化后的二分法
 * 左右为高低位
 * 当左小于等于右时就继续循环
 *  当目标值小于中间值时，中间值-1给高位，
 *  当目标值刚好等于中间值时，也是-1然后赋值给高位
 *    这样目标值会在高位外，等循环到l=r时再次循环会l=m+1，然后就跳出循环
 *    与目标不在数组中且需要添加到最后一位的情况一样
 *   而当目标值需要添加到数组开头的情况，l一直不动
 *   r会一直逼近直至小于l，然后再返回l
 *   l=m+1与r=m-1是因为目标值已经大于或者小于l或r
 *   所以这两个值可以不用判断，之间+1或-1给l或r，使循环更快结束
 */
var searchInsert = function (nums, target) {
  //左位0，数组起始，右位数组长度-1，
  let l = 0;
  let r = nums.length - 1;
  //当l <= r 时循环保持
  while (l <= r) {
    //取一个中间值
    let m = ~~((r - l) / 2) + l;
    //当中间值小于目标时把m-1赋值给r
    if (target <= nums[m]) {
      r = m - 1;
    } else {
      //反之m+1给l
      l = m + 1;
    }
  }
  //返回位l
  return l;
};

/**
 * 二分法
 * 当高位与低位差值大于1时才循环否则进行返回判断
 *  正常的二分法循环语句
 * 当高位与低位查找为1时高位与低位为两个相邻的元素
 * 这时候判断目标值是否大于高位或是否小于低位
 */
var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  //条件位高-低 > 1
  while (high - low > 1) {
    //高+低获得对比的元素索引
    let mid = ~~((high + low) / 2)
    //如果元素比目标值大则把当前值给高
    if (nums[mid] > target) {
      high = mid;
    } else if (nums[mid] < target) {
      //如果元素比当前值小则把当前值给低
      low = mid;
    } else if (nums[mid] == target) {
      //如果元素等于当前值则返回
      return mid;
    }
  }
  //跳出循环则表示数组内没有目标值,目标元素应该再low 和high之间，则返回low+1
  return nums[high] < target ? high + 1 : nums[low] >= target ? 0 : low + 1;
};
