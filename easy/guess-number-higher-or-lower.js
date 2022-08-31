/**
 * 二分优化if
 * 条件为small小于big(根据语句内的条件当small==big时就会跳出循环)
 * 当中间值小于或等于mid时因为存在等于的情况，就只把mid给big
 * 而另一种情况就是mid小于目标值时，因为mid已经小了，所以把small置为mid+1
 * 如果一次就猜中的话，big会停在原地，而small会一直逼近big，直至两个相等
 * 最后返回small即可
 */
var guessNumber = function (n) {
  let small = 1;
  let big = n;
  while (small < big) {
    let mid = small + ~~((big - small) / 2);
    if (guess(mid) <= 0) {
      big = mid;
    } else {
      small = mid + 1;
    }
  }
  return small;
};

/**
 * 二分法
 * 区间位[1,n]
 * 当guess返回值为-1时，区间缩减为[small,mid-1]
 * 当guess返回值为1时，区间变为[mid+1,big];
 */
var guessNumber = function (n) {
  let small = 1;
  let big = n;
  while (small <= big) {
    let mid = small + ~~((big - small) / 2);
    if (guess(mid) < 0) {
      big = mid - 1;
    } else if (guess(mid) > 0) {
      small = mid + 1;
    } else {
      return mid;
    }
  }
};
