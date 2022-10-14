/**
 * 单项链表
 */
function ListTree(val, next){
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}
//需要一个最基本的长度和一个哨兵节点
var MyLinkedList = function() {
  this.size = 0;
  this.head = new ListTree();
};

MyLinkedList.prototype.get = function(index) {
  //当需要查找index不在0与siez-1范围内时，需要获得的元素不存在返回-1
  if(index < 0 || index >= this.size){
    return -1;
  }
  var dummy = this.head;
  //for循环index次，dummy就是为需要获得的节点
  for(let i = 0; i <= index; i++){
    dummy = dummy.next;
  }
  return dummy.val;
};

MyLinkedList.prototype.addAtHead = function(val) {
  //也可以用addAtIndex方法传入0与val值
  this.size++;
  //取得0位置的节点
  var dummy = this.head.next;
  //创建一个新节点，新节点的next为原始0位置的节点，并把这个节点挂在哨兵节点上
  this.head.next = new ListTree(val, dummy);
};

MyLinkedList.prototype.addAtTail = function(val) {
  //添加到尾部就是添加到size位置
  //也可以循环到某个节点的next为null时创建新节点，并把新节点挂在这个节点的next上
  this.addAtIndex(this.size, val);
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
  if(index > this.size){
    return;
  }
  this.size++;
  // 如果为负数，和0的效果一样都是添加到头部
  var idx = Math.max(0, index);
  var dummy = this.head;
  // 迭代到小于idx位置，要插入的位置就在这个节点后面
  for(let i = 0; i < idx; i++){
    dummy = dummy.next;
  }
  //创建需要插入的节点
  var node = new ListTree(val);
  //把前驱节点的next节点挂在新节点上
  node.next = dummy.next;
  // 再把新节点挂在前驱节点上
  dummy.next = node;
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index >= this.size || index < 0){
    return;
  }
  this.size--;
  var dummy = this.head;
  //与插入节点一样，找到需要被删除节点的前驱节点
  for(let i = 0; i < index; i++){
    dummy = dummy.next;
  }
  //把前驱节点的next指向指为要被删除节点的后继节点
  dummy.next = dummy.next.next;
};
