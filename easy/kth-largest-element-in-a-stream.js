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
/**
 * 堆
 */
 var KthLargest = function(k, nums) {
  this.k = k;
  this.heap = new Heap(); //创建一个堆
  for(let x of nums){
    this.add(x); //把数组中得每个值都传入堆中
  }
};

KthLargest.prototype.add = function(val) {
  this.heap.offer(val); //把元素添加进堆中
  if(this.heap.size() > this.k){ //如果堆的大小超过了限制，则从堆顶删除一个值
    this.heap.poll(); // 删除最小元素(堆顶)
  }
  return this.heap.peek()
};

class Heap{
  // 构造一个堆
  constructor(comparator = (a, b) => a - b, data = []){
    this.data = data;
    this.comparator = comparator;
    this.heapify();
  }

  size(){ //返回堆的长度
    return this.data.length;
  }

  swap(index1, index2){ // 交换两个元素
    [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
  }

  heapify(){ //初始化堆，把堆中的元素进行排序
    // 长度为1时不需要排序
    if(this.size() < 2) return;
    // 从最后一个堆元素开始计算其父元素
    for(let i = Math.floor(this.size()/2) - 1; i >= 0; i--){
      // 传入节点，与节点得子节点进行比较
      this.bubbleDown(i);
    }
  }

  offer(val){ //往堆中添加元素
    this.data.push(val); //参数push进堆末尾
    this.bubbleUp(this.size() - 1); //调整添加进堆元素在堆中得位置
  }

  peek(){ //检查堆顶元素
    if(this.size() == 0) return null;
    return this.data[0]; //返回堆顶元素
  }

  poll(){ //删除堆顶最小元素
    if(this.size() == 0) return; //堆为空时什么都不做
    const res = this.data[0]; //取得堆顶的最小元素
    const last = this.data.pop(); //取得堆底的最后一个元素(最大值)
    if(this.size() !== 0){ //当前堆还有元素时才排序
      this.data[0] = last; //用最大值覆盖最小值
      this.bubbleDown(0); //再把堆从上往下排序一遍
    }
    return res;
  }

  bubbleUp(index){ //根据传入元素往堆顶进行比较交换
    // 只要不是根元素就进行位置调整
    while(index > 0){
      const preIndex = (index - 1) >> 1; //取得该元素父元素得索引
      // 比对节点与父节点，小得话则需要交换
      if(this.comparator(this.data[index], this.data[preIndex]) < 0){
        this.swap(index, preIndex); //交换两个节点，让更小得成为父节点
        index = preIndex; //不断向上取父元素节点进行比较
      } else {
        break; //如果当前元素比父元素大则不需要交换，跳出循环
      }
    }
  }

  bubbleDown(index){ //根据传入元素从堆顶往堆底进行比较交换
    var lastIndex = this.size() - 1; //最后一个节点得位置，堆的边界
    while(true){
      const leftIndex = index * 2 + 1; // 左子节点的位置
      const rightIndex = index * 2 + 2; // 右子节点的位置
      let findIndex = index; // 需要交换节点的位置
      //找出左右子节点中的较小值
      if(leftIndex <= lastIndex &&
         this.comparator(this.data[leftIndex], this.data[findIndex]) < 0){
          findIndex = leftIndex;
      }
      if(rightIndex <= lastIndex &&
         this.comparator(this.data[rightIndex], this.data[findIndex]) < 0) {
          findIndex = rightIndex;
      }
      //需要交换的节点不是index时则交换元素
      if(findIndex != index){
        this.swap(findIndex, index); //当前元素与其左右子节点中的较小值交换
        index = findIndex; //再取得较小值得索引，下次循环再检查较小值得左右子节点
      } else {
        break; // 没有发生交换时当前节点就为最小值，跳出循环
      }
    }
  }

}
