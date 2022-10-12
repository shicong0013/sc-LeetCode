/**
 * 数组法
 */
var MyHashMap = function() {
  //储存空间大小
  this.base = 997;
  //创建一个存储空间大小的数组，并且每个元素都为数组，用来存储索引值一样的键值
  this.data = new Array(this.base).fill(0).map(i => new Array());
};
MyHashMap.prototype.put = function(key, value) {
  //用键除存储空间的长度得到的余数决定这组键值存放在的数组位置
  var hash = key % this.base;
  //再遍历这个位置的数组，如果数组内元素的第一个值与键相同，则把值覆盖掉
  for(let i of this.data[hash]){
    if(i[0] == key){
      i[1] = value;
      return;
    }
  }
  //如果当前位置数组内没有找到，则这个索引内没有存储重复的值，把这对键值push进数组
  this.data[hash].push([key, value]);
};
MyHashMap.prototype.get = function(key) {
  var hash = key % this.base;
  //遍历key所对应的数组，如果其中元素第一位于key相同，则返回其值
  for(let i of this.data[hash]){
    if(i[0] == key){
      return i[1];
    }
  }
  //找不到就返回-1
  return -1;
};
MyHashMap.prototype.remove = function(key) {
  var hash = key % this.base;
  for(let i of this.data[hash]){
    if(i[0] == key){
      //找到相同的key后，在当前数组搜索这个元素，取得索引
      let index = this.data[hash].indexOf(i);
      //从数组中删除这组键值
      this.data[hash].splice(index, 1);
    }
  }
};
/**
 * 链表法，相对于数组删除元素的速度更快
 */
 var MyHashMap = function() {
  this.base = 997;
  //数组每个元素填充为null
  this.data = new Array(this.base).fill(null);
};
MyHashMap.prototype.put = function(key, value) {
  var hash = key % this.base;
  //取得该位置的头节点
  var head = this.data[hash];
  var dummy = head;
  //遍历这个链表，如果节点的key与传入的key相等则覆盖value
  while(dummy){
    if(dummy.key == key){
      dummy.value = value;
      return;
    }
    dummy = dummy.next;
  }
  //否则创建一个新的节点，并把头节点挂在next上
  var node = {
    key,
    value,
    next: head
  }
  //在把头节点指向这个新创建的节点
  this.data[hash] = node;
  return;
};
MyHashMap.prototype.get = function(key) {
  var hash = key % this.base;
  var head = this.data[hash];
  // 遍历链表如果key相等则返回value
  while(head){
    if(head.key == key){
      return head.value;
    }
    head = head.next;
  }
  return -1;
};
MyHashMap.prototype.remove = function(key) {
  var hash = key % this.base;
  var head = this.data[hash];
  // 当头节点不存在时则之间返回
  if(!head){
    return;
  }
  // 如果要删除的就是头节点，则把头节点的指向改为头节点的next
  if(head.key == key){
    this.data[hash] = head.next;
    return;
  }
  // 否则要删除的就是头节点的next节点
  while(head.next){
    // 如果头节点的key相等
    if(head.next.key == key){
      // 则把头节点的next指向头节点next的next
      head.next = head.next.next;
      return;
    }
    head = head.next;
  }
};
