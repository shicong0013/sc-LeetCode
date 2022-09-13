/**
 * 贪心
 * 因为顾客给的钱只为5、10、20，收到20的话也没办找钱所以不需要存储20
 * 而10块只能找给20，而5块既可以找给10也能找给20，所以优先消耗5块
 */
var lemonadeChange = function (bills) {
  let fiv = 0;
  let ten = 0;
  for (var i = 0; i < bills.length; i++) {
    if (bills[i] == 5) {
      fiv++;
    } else if (bills[i] == 10) {
      if (fiv > 0) {
        fiv--;
        ten++;
      } else {
        return false;
      }
    } else {
      if (ten > 0 && fiv > 0) {
        ten--;
        fiv--;
      } else if (fiv > 2) {
        fiv -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
