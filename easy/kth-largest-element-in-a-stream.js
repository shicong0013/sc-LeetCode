/**
 * 数组
 * 用传入的数组构建一个新数组
 * 每次传入值时对数组整体进行排序
 * 并返回第k个值
 */
var KthLargest = function(k, nums) {
  this.k = k;
  this.queue = new Array().concat(nums);
};
KthLargest.prototype.add = function(val) {
  this.queue.push(val)
  this.queue = this.queue.sort((a, b) => b - a);
  return this.queue[this.k-1];
};
/**
 * 冒泡
 * 一样用传入的数组创建新的数组
 * 然后进行k冒泡排序，并把最大值放在数组头部
 * 每次传入一个值时对这个值进行一次冒泡排序
 */
 var KthLargest = function(k, nums) {
  this.k = k;
  this.queue = new Array().concat(nums);
  for(var i = k; i > 0; i--){
    for(var j = this.queue.length - 1; j >= 1; j--){
      if(this.queue[j] > this.queue[j-1]){
        [this.queue[j], this.queue[j-1]] = [this.queue[j-1], this.queue[j]];
      }
    }
  }
};
KthLargest.prototype.add = function(val) {
  this.queue.push(val);
  for(var i = 1; i > 0; i--){
    for(var j = this.queue.length - 1; j >= 1; j--){
      if(this.queue[j] > this.queue[j-1]){
        [this.queue[j], this.queue[j-1]] = [this.queue[j-1], this.queue[j]];
      } else {
        break;
      }
    }
  }
  return this.queue[this.k-1];
};
