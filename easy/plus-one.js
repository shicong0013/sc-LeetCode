/**
 * 转字符串拼接的方法当遇到非常大的数时会丢失精度，需要使用bigint
 * 所有用循环直接给最后一为+1，再通过判断是否为10来确定是否需要进位
 * 当数组第一位为10需要进位时则通过判断返回值是否为undefined来判断是否还有前一位
 */
var plusOne = function (digits) {
  //数组最后一位+1
  digits[digits.length - 1]++;
  //循环从数组末尾向前循环
  for (var i = digits.length - 1; i >= 0; i--) {
    //判断当前位是否为10，是则赋值为0，并且左一位+1
    if (digits[i] == 10) {
      digits[i] = 0;
      //如果前一位的返回值为undefined则unshift(1)
      if (digits[i - 1] != undefined) {
        digits[i - 1]++
      } else {
        digits.unshift(1);
        return digits;
      }
    } else {
      //如果当前为不为10则return
      return digits;
    }
  }
};
