 /**
  * 超大数组
  * 创建一个比数据量大的数组，数组内每个位置存放一个元素
  * 需要读取或存放时，只需要看当前位置的布尔值，来确认是否有元素，最后输出它的键
  */
var MyHashSet = function() {
  this.base = 1000001;
  this.data = new Array(this.base).fill(false);
};
MyHashSet.prototype.add = function(key) {
  this.data[key] = true
};
MyHashSet.prototype.remove = function(key) {
  this.data[key] = false;
};
MyHashSet.prototype.contains = function(key) {
  if(this.data[key]){
      return true
  }
  return false;
};
/**
 * 拉链 链表
 */
var MyHashSet = function() {
  this.base = 100009;
  this.data = new Array(this.base).fill(null);
};
MyHashSet.prototype.add = function(key) {
  var hash = key % this.base;
  var head = this.data[hash];
  var dummy = head;
  while(dummy){
    if(dummy.key == key){
      return;
    }
    dummy = dummy.next;
  }
  var node = {
    key,
    next: head
  }
  this.data[hash] = node;
  return ;
};
MyHashSet.prototype.remove = function(key) {
  var hash = key % this.base;
  var head = this.data[hash];
  if(!head){
    return
  }
  if(head.key == key){
    this.data[hash] = null;
    return;
  }
  while(head.next){
    if(head.next.key == key){
      head.next = head.next.next;
      return;
    }
    head = head.next;
  }
  return;
};
MyHashSet.prototype.contains = function(key) {
  var hash = key % this.base;
  var head = this.data[hash];
  while(head){
    if(head.key == key){
      return true;
    }
    head = head.next;
  }
  return false;
};
/**
 * 拉链 数组
 */
 var MyHashSet = function() {
  this.base = 1009;
  this.data = new Array(this.base).fill(0).map(i => new Array());
};
MyHashSet.prototype.add = function(key) {
  var hash = key % this.base;
  for(let i of this.data[hash]){
    if(i == key){
      return;
    }
  }
  this.data[hash].push(key);
};
MyHashSet.prototype.remove = function(key) {
  var hash = key % this.base;
  for(let i of this.data[hash]){
    if(i == key){
      var index = this.data[hash].indexOf(i);
      this.data[hash].splice(index, 1);
      return;
    }
  }
  return;
};
MyHashSet.prototype.contains = function(key) {
  var hash = key % this.base;
  for(let i of this.data[hash]){
    if(i == key){
      return true;
    }
  }
  return false;
};
