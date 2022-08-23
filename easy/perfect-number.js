/**
 * 循环条件改为根号num
 * 以根号num为分界线，比根号num小的数能被整除
 * 那对应的比根号num大的数里也有一个可以被整除
 * 那只需要循环到小于等于根号num即可
 * 当i能被整除时，只要i的平方不大于num，再用num除以i就得到了i对应的因子
 */
var checkPerfectNumber = function (num) {
  let result = 1;
  //循环，2至最大值为根号num
  for (var i = 2; i < Math.sqrt(num); i++) {
    //当num取余计数器为0是，计数器为num的因子
    //把计数器加至结果中
    if (num % i == 0) {
      result += i;
      if (i * i < num) {
        //如果计数器的平方小于num，则表示num/n为对应的另一个因子
        //当计数器的平方不小于num时则表示找到了num的根号，在上一步已经累加过了不需要再累加
        result += num / i;
      }
    }
  }
  return num == 1 ? false : result == num;
};

/**
 * 简单的循环
 * 判断2之num/2之间的数
 */
var checkPerfectNumber = function (num) {
  let result = 1;
  //循环，从2遍历到num/2
  for (var i = 2; i <= num / 2; i++) {
    //取余结果为0时则是因子加到result上
    if (num % i == 0) {
      result += i;
    }
  }
  return num == 1 ? false : result == num;
};
