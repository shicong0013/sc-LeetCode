/**
 * 逆向双指针
 * 因为数组都是升序排列且第一个数组后面有留出第二个数组长度的空位
 * 可以从后开始比对最大值，然后放在数组1的末尾
 * 当nums1的值已经比对结束(i < 0)那就只需要把nums2剩下的值按顺序赋值给nums1即可
 * 而当nums2先比对完时，nums1里剩下的元素其实已经是按顺序排列的了
 * 但是j的值为-1返回值为undefined
 *  如果不写这个条件那因为最后一个else省略了nums[1] < nums[2]这个条件
 *  nums1之后的位置都将被赋值undefined
 *  如果补上条件，则可以不写j<0判断
 * 或者把j<0的执行语句写为break,可以省略几次循环
 */
var merge = function (nums1, m, nums2, n) {
  for (var i = m - 1, j = n - 1, k = nums1.length - 1; k >= 0; k--) {
    if (i < 0) {
      nums1[k] = nums2[j--];
    } else if (j < 0) {
      nums1[k] = nums1[i--];
    } else if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i--];
    } else {
      nums1[k] = nums2[j--]
    }
  }
};
