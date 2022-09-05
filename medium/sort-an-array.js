/**
 * 快排优化
 * 前一种快排当数组元素全是相同元素时，所有元素会都堆积在哨兵的右侧
 *  导致每次递归只能排除一个元素，而增加递归深度导致爆栈
 * 而再单独增加一个指向与pivot相等元素的指针，使数组中间有个区域存储的都pivot
 * 这样当遇到全是相等元素的数组使，左右两侧区域大小为0，不会陷入递归中
 *
 */
var sortArray = function (nums, start = 0, end = nums.length - 1) {
  //递归边界，当数组中没有元素时直接返回数组
  if (start > end) { //end - start < 1 也行
    return nums;
  }
  //随机选取哨兵元素下标
  let pivotIndex = Math.floor(Math.random() * (end - start + 1)) + start;
  let pivot = nums.at(pivotIndex);
  //交换哨兵元素与最后一个元素
  swap(nums, pivotIndex, end);
  var i = start; //数组遍历的进度
  var j = start; //比pivot小的元素的区域
  var k = start; //与pivot一样大的元素的区域
  for (; i < end; i++) {
    //当前位置元素小于哨兵元素时则把这个元素交换到数组靠前部分
    if (nums[i] < pivot) {
      let temp = nums[i]; //当数组中没有多余的哨兵元素时
      nums[i] = nums[k];  //j与k指向相同的位置
      nums[k] = nums[j];  //如果使用swap交换会导致回到交换前的样子
      nums[j] = temp;
      j++;
      k++;
    } else if (nums[i] === pivot) {
      swap(nums, i, k++);
    }
  }
  //把哨兵元素再交换回比哨兵元素小的元素后面
  swap(nums, i, k);
  //把哨兵元素的前后两个部分递归排序
  sortArray(nums, start, j - 1);
  sortArray(nums, k + 1, end);
  return nums;
};
function swap (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * 快速排序
 * 与归并的区别是把大数组排序好两个区间后，再给两个区间分别排序，逐渐下降排序
 *  先随机选取一个值，遍历数组，逐个对比选中的值，比它小的排在最前，比它大的排在最后
 *    然后再把这个值插入到两者之间，再对两个筛选后的部分执行之前的操作，逐渐排序整个数组
 * 先把pivot与数组最后一个元素交换位置这样整个数组前面全是待排序的元素
 * 循环条件小于end是因为最后一个元素是已经确定的，不需要再比对
 *  当i元素小于pivot时需要把整个元素放到数组的前方，而j就是指向的较小部分的区域
 *  因为只需要区分比比pivot大和小，则当i元素比pivot小时，j指向的是数组前端
 *  i与j交换后，比piovt小的数移动到了数组最前，而j原本位置上比pivot大的数到了i位置
 *    j位置的元素相当于只是从比piovt大的元素区域的最前端移动到了最后端
 *  j每次交换后++，就指向了下一个待交换到比piovt大的元素区域的第一个元素
 * 循环结束后j指向还是第一个比piovt大的元素区域的第一个元素，再与数组的最后一个用于比对的哨兵元素交换位置
 * 这样数组就被分成了 [小元素区域，哨兵元素，大元素区域]
 * 因为哨兵元素是已经确定好顺序的，只需要把左右两侧的区间再次递归调用就可以再用相同的方式排序
 *
 */
var sortArray = function (nums, start = 0, end = nums.length - 1) {
  //递归边界，当数组中没有元素时直接返回数组
  if (start > end) { //end - start < 1 也行
    return nums;
  }
  //随机选取哨兵元素下标
  let pivotIndex = Math.floor(Math.random() * (end - start + 1)) + start;
  let pivot = nums.at(pivotIndex);
  //交换哨兵元素与最后一个元素
  swap(nums, pivotIndex, end);
  for (var i = start, j = start; i < end; i++) {
    //当前位置元素小于哨兵元素时则把这个元素交换到数组靠前部分
    if (nums[i] < pivot) {
      swap(nums, i, j++);
    }
  }
  //把哨兵元素再交换回比哨兵元素小的元素后面
  swap(nums, i, j);
  //把哨兵元素的前后两个部分递归排序
  sortArray(nums, start, j - 1);
  sortArray(nums, j + 1, end);
  return nums;
};
function swap (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * 归并排序  分治
 * 把数组分成左右两部分，分别排序,由排序好子数组组成大数组
 * 当数组传入递归中后会再无限的二分下去，直至长度小于2时直接返回数组
 *  当往上返回一层时左右两侧有单个元素组成的数组就进入到了下面的while
 *    比对各自数组当前位置元素的大小，按顺序插入原数组中
 *    当两侧数组长度不一样时进入后续两个while循环
 *      第一个while比对会把其中一个数组元素按照大小顺序全部赋值进nums中
 *      另一个数组剩下的元素则是比nums中都大的元素，只需要按顺序赋值即可
 *
 */
var sortArray = function (nums) {
  //递归边界
  if (nums.length < 2) {
    return nums;
  }
  //拆分
  let mid = Math.floor(nums.length / 2);
  let left = nums.slice(0, mid);
  let righ = nums.slice(mid);
  //排序
  sortArray(left);
  sortArray(righ);
  //合并
  l = 0;
  r = 0;
  k = 0;
  while (l < left.length && r < righ.length) {
    if (left[l] > righ[r]) {
      nums[k] = righ[r]
      k++;
      r++;
    } else {
      nums[k] = left[l];
      k++;
      l++;
    }
  }
  //合并剩余数组元素
  while (l < left.length) {
    nums[k] = left[l];
    k++;
    l++;
  }
  while (r < righ.length) {
    nums[k] = righ[r];
    k++;
    r++;
  }
  return nums;
};

/**
 * 插入排序
 * 类似于倒叙的冒泡排序，把数组分为无序与有序两个区间
 *  用i位置不停的与前一个元素对比，把其排在有序的位置
 *  等下一轮时继续这样
 * 遍历数组，然后用当前元素与前一个元素对比
 * 如果比前一个元素小，则把当前元素与前一个元素对调
 * 之后再用对调后的前一个元素与前前一个元素对比
 * 直至不在比前一个元素小时为当前元素的正确的有序位置，进入下一轮循环
 */
var sortArray = function (nums) {
  for (var i = 1; i < nums.length; i++) {
    for (var j = i; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      } else {
        break;
      }
    }
  }
  return nums;
};

/**
 * 选择排序
 * 与冒泡类似，也是逐个对比元素，但是只保存最小元素下标
 * 当循环结束后，用遍历的来的最小元素与第一个元素位置互换，
 * 然后再从下一个元素位置开始寻找最小元素
 */
var sortArray = function (nums) {
  for (var i = 0; i < nums.length - 1; i++) {
    let temp = nums[i];
    let index = i;
    for (var j = i + 1; j < nums.length; j++) {
      if (temp > nums[j]) {
        temp = nums[j];
        index = j;
      }
    }
    [nums[i], nums[index]] = [nums[index], nums[i]];
  }
  return nums;
};

/**
 * 冒泡
 * 逐个对比相邻元素吗，最大的放置最后
 * 下次循环时不再检查上一轮循环时最大的数
 */
var sortArray = function (nums) {
  for (var i = nums.length - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (nums[j - 1] > nums[j]) {
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      }
    }
  }
  return nums;
};
